/* eslint no-console: 0*/

import React from 'react';

/*
// Member format for the members list compopnent
function Member(props) {
	return (
	<div>
		<img width = {props.imgwidth} src={props.src} />
		<h1 className="member.quote" width="{props.imgwidth}-5)">{props.quote}</h1>
		<h1 className="member.name" width="{props.imgwidth}-5)">{props.name}</h1>
		<br/>
	</div>
	);
}
*/

// Top level React component for the members list
export default class MembersList extends React.Component {
	constructor(props){
		super(props);
		this.membersdata = getTestData();
		this.imgwidth = 200;
		console.log('--- Memberslist is instantiated');
		console.log(this.membersdata);
		//var tm = this.membersdata;
	}

	getAllMembersData() {
	}

	render(){
		console.log('--- Just rendering the members list');
		var tm = this.membersdata;
		var pstyle = {color: 'green'};
		return(
		<div className="aside">
			<img src={tm.id.photo.thumb_link} width="100px" />
			<p>"{tm.id.bio}" - <span style={pstyle} >{tm.id.name}</span></p>
			<div className="hline" />
		</div>
		);
	}
}

/*
function getMeetupAPIKey() {
	return ('7121206f695127cd116f2743281550');
}
*/

function getTestData() {
	return( {
		id: {
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
		}
	});
}


