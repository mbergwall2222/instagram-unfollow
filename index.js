// Load environment variables from .env config
require('dotenv').config();
// Create new IG API client
const IgApiClient = require("instagram-private-api").IgApiClient;
const ig = new IgApiClient();
// Util functions for async handlers
const sleep = (ms) => new Promise(r => setTimeout(r, ms))
const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

// Main function
(async () => {
  // Generate device for username.
  ig.state.generateDevice(process.env.USERNAME);

  //login
  var auth;
  try{
    console.log("Logging in!");
    auth = await ig.account.login(process.env.USERNAME, process.env.PASSWORD);
  } catch(err) {
    console.log('Unable to login - maybe challenge or incorrect user + pass');
    process.exit(1)
  }
  process.nextTick(async () => await ig.simulate.postLoginFlow());

  console.log("Successfully logged in - grabbing following list.");
  const followingFeed = ig.feed.accountFollowing(auth.pk);
  const wholeResponse = await followingFeed.request();
  var moreAvailable = true;
  var items = [];
  while(moreAvailable) {
    const feedItems = await followingFeed.items();
    items = items.concat(feedItems);
    moreAvailable = followingFeed.moreAvailable;
  }

  console.log(`Sucessfully grabbed list of ${items.length} following.`);
  await asyncForEach(items,async (item,i)=>{

    // See if user is following us
    const body = await ig.friendship.show(item.pk);
    console.log(`${item.username} - Followed by: ${body.followed_by } - (${i}/${items.length})`)
    if(body.followed_by) return;

    try {
      // Unfollow user
      const status = await ig.friendship.destroy(item.pk);
      console.log(`UNFOLLOWED @${item.username} - SLEEPING 15 SECONDS`)
      await sleep(15000);
    } catch(err) {
      console.log("ERROR UNFOLLOWING USER - MAY BE RATE LIMITED - SLEEPING FOR 5 MINUTES");
      await sleep(300000);
    }
  });
})();
