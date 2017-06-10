/* eslint no-console: 0*/

import React from 'react';

// Support Functions
function createCORSRequest(method, url) {
	/*
	Courtesy of ...
	https://www.nczonline.net/blog/2010/05/25/cross-domain-ajax-with-cross-origin-resource-sharing/
	*/
	var xhr = new XMLHttpRequest();
	if ('withCredentials' in xhr) {

		// Check if the XMLHttpRequest object has a "withCredentials" property.
		// "withCredentials" only exists on XMLHT*-TPRequest2 objects.
		xhr.open(method, url, true);
		console.log('--- found withCredentials property')

		} else if (typeof XDomainRequest != 'undefined') {
		// Otherwise, check if XDomainRequest.
		// XDomainRequest only exists in IE, and is IE's way of making CORS requests.
		xhr = new XDomainRequest();
		xhr.open(method, url);

		} else {
		// Otherwise, CORS is not supported by the browser.
		xhr = null;

	}
	return xhr;
}

// MEMBER COMPONENT =====================================
class Member extends React.Component {
	constructor(props){
		super(props);                     // Calls the constructor of the parent class.  In this case Memberslist
	}
	
	// MEMBER return method
	render(){
		var pstyle = {
			fontSize: '12px'
		}
		var spanstyle = {
			color: 'green',
			fontSize: '11px'
		}
		var imgStyle = {
			borderRadius: '15px 15px 15px 15px'
		}
		var td = this.props.dataString
		if ('photo' in td) {
			return (
				<div>
					<img style={imgStyle} src={td.photo.thumb_link} width="80px" />
					<p style={pstyle}>"{td.bio}" - <span style={spanstyle} >{td.name}</span></p>
				</div>
			);
		} else {
			return (
				<div>
					<p style={pstyle}>"{td.bio}" - <span style={spanstyle} >{td.name}</span></p>
				</div>
			);
		}
	}
}

// MEMBERSLIST COMPONENT =================================
export default class MembersList extends React.Component {
	constructor(props){
		super(props);            // Calls the constructor of the parent class. In this case React.component
		this.membersdata = getTestData();
		this.state = { showReceivedList: false };
		console.log('--- MembersList Constructor Loading ...');

		// Kickoff the fetch of the members list'
		var url = 'https://www.google.com'
		var xhr = createCORSRequest('GET', url);
		if (!xhr) {
			console.log('--- Sadly CORS is not Supported')
		  	throw new Error('CORS not supported');
		} else {
		console.log('--- great news CORS is supported')
		}

		/*
		CORS NOTE.  When running this code in Localhost on Chrome
		you need to have the CORS Toggle extension installed and running.  Otherwise
		chrome kicks out errors to do with authentication.
		*/

		// HTTP request to meetup for latest members list.
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://api.meetup.com/NottsJS/members?&key=7121206f695127cd116f2743281550', true);

		// HTTP CORS event handlers
		// xhr.onreadystatechange is replaced by xhr.onload as of HTML 5 (2014).
		xhr.onload = this.processRequest;
		xhr.onerror = () => {
			console.log('--- CORS Event failed - There was an error!');
		};

		// Kickoff HTTP async request
		xhr.withCredentials = false;
		xhr.send();
		console.log('--- Memberslist called for Asynchronously');
	}

	// MEMBERSLIST EVENT HANDLER (CORS)
	// 'this' could have been configured using bind by placing the following in the constructor above.
	// this.processRequest = this.processRequest.bind(this);
	// Doing this would have meant that the arrow function need not have been used below.
	processRequest = e => {
		console.log(e);
		var xhr = e.target;
		if (xhr.readyState == 4 && xhr.status == 200) {
			this.membersdata = JSON.parse(xhr.responseText);
			console.log('--- Changing state to cause re-render with new list');
			this.setState({ showReceivedList:  true });          // A function taking an object as the argument
	    }
	    console.log('--- ' + e.target.status + '  ' + this.state.showReceivedList);
	}

	// MEMBERSLIST return method with styling
	render(){
		var assideStyle = {
			position: 'absolute',
			float: 'right',
			display: 'inline-block',
			width: '100px',
			height: '784px',
			margin: '2px',
			border: '1px solid black',
			padding: '5px',
			backgroundColor: 'pink',
			overflow: 'scroll'
		}
		console.log('--- Rendering the members list');
		return(
		<div style={assideStyle}>
          {this.membersdata.map((item, ix) => {
              return (
              		<Member key={ix} dataString={item} />
	          	)}
	        )}
		</div>
		);
	}
}

function getTestData() {
	return( [{
			id: 2890627,
			name: 'Nomad3k',
			bio: 'Main organiser and React architect for the NottsJS group',
			photo: {
				id: 252816582,
				thumb_link: 'https://secure.meetupstatic.com/photos/member/8/e/e/6/thumb_252816582.jpeg'
			},
			link: 'https://www.meetup.com/NottsJS/members/2890627/'
		}]);
}


