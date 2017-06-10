# Source Code for [nottsjs.org](https://www.nottsjs.org).

## Learn to build a real React website

We're going to be using [nottsjs.org](https://www.nottsjs.org) to as a real-world project to teach how to build a [React](https://facebook.github.io/react/) website.  See the [Build a Real React Website](https://github.com/nomad3k/talks/build_a_real_react_website) talk by [Chris Kemp](https://github.com/nomad3k) for details.

## Useful Links:

1. [nottsjs.org](https://www.nottsjs.org)
1. [Supporting Materials](https://github.com/nomad3k/talks)
1. [React](https://facebook.github.io/react/)
1. [Github Repository](https://github.com/nottsjs/www.nottsjs.org)
1. [Github Issues](https://github.com/nottsjs/www.nottsjs.org/issues)
1. [www.nottsjs.org - WebPages Repository](https://github.com/nottsjs/www.nottsjs.org)

Routing functionality bneeds extra npm's specifically
npm install -S react-router
npm install -S history

----------------------------
@spal23 - Added some very basic routing.

For info to those unsure about things (aka me)
1. npm start calls to server.js
2. server.js calls to webpack to run the localhost server
3. Loclahost:8000 accesses /source/index.html
4. Index.html calls to /src/index.jsx

Note - If running with sublime and you want to add a .jsx extension beutifier
       1. Install babel using Sublimes Package installer
       2. Open a .jsx file
       3. Select View from the menu 
       4. Then Syntax -> Open all with current extension as.. -> Babel - Javascript (Babel)
References are: 
http://gunnariauvinen.com/getting-es6-syntax-highlighting-in-sublime-text/
https://scotch.io/tutorials/routing-react-apps-the-complete-guide

I have gone with browser history for now rather than hash history if someone knows what they are doing feel free to change that about. 
------------------------------