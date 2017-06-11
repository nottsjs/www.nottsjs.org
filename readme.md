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


---------------------------- June 2017
@spal23 - Configured the topic based home page 

Added two components, both used on the home page.  The first is Topics.jsx, the second is MembersList.jsx. They can be found in \src\components\Common

Topics displays a group of href shortcuts loaded in three columns.  The fun here was rendering all of the topics with a forced width css, hidden.  Then, using refs get the heights of each topic element (while they are hidden - but after they were mounted).  Using this height array the topics were re-rendered and placed based on a shortest column algorithm.  Topics can be clicked through to generate a new tab in the browser.

Memberslist uses CORS (which has to be enabled in the browser) to link to the Meetup API and request the group members of NottsJS.  The members picture, bio and name are then loaded into a div to the right of the home page.

Topics displayed on home page are loaded from the object array defined in \src\data\topiclist.js.

From here ...
1. Could do with a database to hold topic info for fast retrieval, rather than using href links to populate the page.  
Would also look at doing a cut and paste to copy other user specific shortcuts to the page automatically.  Each home page would be user specific then.
2. Page format could be more automated by passing props in from the template to allow page structure to change programatically.  Currently page width is hard coded.
3.  CSS could be more optimised.  Currently CSS is bound to the components as per Reacts guidelines however I am sure this could be optimised by a more experienced CSS programmer than myself.
4. The header picture could be higher res and thinner.  It would be neat to have a slide show feature there as well.
5. Footer needs to be organised along the lines of the original web site.
6. CORS link in the Memberslist.jsx component needs extending to bring in pictures of all of the groups members. Currently this is limited to the first 200 records.  Unsure as to why.

Next ...
1. I will look at doing a page to automatically feed into meetup so that we can setup meetings from our own page outide of the meetup site.  Basicaly getting into the meetup API a little bit more. 


---------------------------- April 2017
@spal23 - Added some very basic routing 

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
