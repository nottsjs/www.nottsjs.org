# Source Code for [nottsjs.org](https://www.nottsjs.org).

## Installation and local development

To get up and running with the site locally, use the following command to install the dependencies:
```
npm install
```

Now that the dependencies are installed, you can run the following command to start the local test server:
```
npm start
```

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

The routing method was based on the article from ..
	https://scotch.io/tutorials/routing-react-apps-the-complete-guide

I have gone with browser history for now rather than hash history if someone knows what they are doing feel free to change that about. 

I have played around with props, passing back functions and booleans to the header page
to provide switched layouts just to see if it can be done. All of the trial and error work has been done on the /training route and mapped out to / and /about when I have go the hand of it all.

Changes made to ....

Components folder
index.jsx
package.json
readme.md

------------------------------