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
			color: 'green',
			fontSize: '11px'
		}
		var hline = {
			width:  '100%',
			height: '2px',
			background: 'grey'
		}
		var td = this.props.dataString
		if ('photo' in td) {
			return (
				<div>
					<img src={td.photo.thumb_link} width="100px" />
					<p>"{td.bio}" - <span style={pstyle} >{td.name}</span></p>
					<div style={hline} />
				</div>
			);
		} else {
			return (
				<div>
					<p>"{td.bio}" - <span style={pstyle} >{td.name}</span></p>
					<div style={hline} />
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
		console.log('--- First data set ...')
		console.log(this.membersdata);
		
		this.imgwidth = 200;
		this.state = { showReceivedList: false };

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
	processRequest = e => {
		// Having grabbed the data now we need to save it to the membersdata file.
		console.log('--- Here we have e.')
		console.log(e);
		var xhr = e.target;
		if (xhr.readyState == 4 && xhr.status == 200) {
			this.membersdata = JSON.parse(xhr.responseText);
			console.log(this.membersdata);
			this.setState({ showReceivedList:  true });          // A function taking an object as the argument
			console.log('--- Just set state');
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
			overflow: 'visible'
		}
		console.log('--- Just rendering the members list');
		return(
		<div style={assideStyle}>
          {this.membersdata.map((item, ix) => {
          	  //{console.log(item.photo.thumb_link)}
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
			status: 'active',
			joined: 1149459999000,
			city: 'Derby',
			country: 'gb',
			localized_country_name: 'United Kingdom',
			state: 'D3',
			lat: 52.92,
			lon: -1.5,
			photo: {
				id: 252816582,
				highres_link: 'https://secure.meetupstatic.com/photos/member/8/e/e/6/highres_252816582.jpeg',
				photo_link: 'https://secure.meetupstatic.com/photos/member/8/e/e/6/member_252816582.jpeg',
				thumb_link: 'https://secure.meetupstatic.com/photos/member/8/e/e/6/thumb_252816582.jpeg',
				type: 'member',
				base_url: 'https://secure.meetupstatic.com'
			},
			group_profile: {
				status: 'active',
				visited: 1495045638000,
				created: 1452115213000,
				updated: 1454692776000,
				role: 'coorganizer',
				group: {
					id: 19268350,
					urlname: 'NottsJS',
					name: 'NottsJS',
					who: 'Members',
					members: 470,
					join_mode: 'open',
					group_photo: {
						id: 445593863,
						highres_link: 'https://secure.meetupstatic.com/photos/event/8/4/4/7/highres_445593863.jpeg',
						photo_link: 'https://secure.meetupstatic.com/photos/event/8/4/4/7/600_445593863.jpeg',
						thumb_link: 'https://secure.meetupstatic.com/photos/event/8/4/4/7/thumb_445593863.jpeg',
						type: 'event',
						base_url: 'https://secure.meetupstatic.com'
					}
				}
			},
			link: 'https://www.meetup.com/NottsJS/members/2890627/'
		}]);
}


