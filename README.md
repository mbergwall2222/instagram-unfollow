## Instagram Auto Unfollow Non Followers
---
Hey all - Simple repo for personal Instagram accounts that will allow you to auto unfollow those you follow that are not following you back. Kinda a crappy thing to do, but many people requested this and I was bored one day.

---
### Requirements

All you need installed is NodeJS and of course NPM. Google it if you don't know how to get this.

---
### Usage

All you need to do is clone the repo using git and cd into the folder and install the needed files:

```
git clone https://github.com/mbergwall2222/instagram-unfollow.git
cd instagram-unfollow
npm install
```
Then you need to edit `.env` using your fancy text editor and update the username and password into for the account. Example:

```
USERNAME=my-fancy-username
PASSWORD=my-super-secure-password-yay
```
When done, simply run the project and you should see the output!
```
node .
```

---
### To Do
I most likely won't be adding these to the project unless people ask for it.
- [ ] Ability to answer checkpoint challenges.
- [ ] Ability to ignore certain accounts or verify if you want an account unfollowed.
- [ ] Any request in issues.

---
### Known Bugs

- None

---
### License

```
The MIT License

Copyright (c) 2019 Matthew Bergwall

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
