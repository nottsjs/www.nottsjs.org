
import React from 'react';
import { Link } from 'react-router';

export default class Footer extends React.Component {
  render() {
  	var navbar2 = {
		paddingRight: '10px',
		paddingLeft: '10px',
		color: 'black'
    }
    var footerStyle = {
		position: 'relative',
		width: '800px',
		marginLeft: 'auto',
		marginRight: 'auto',
		bottom: '0px',
		height: '200px',
		backgroundColor: 'pink'
	}
    return (
	<div style={footerStyle} >
		<ul>
		<br/>
		<Link style={navbar2} to='/'>Home</Link>
        <Link style={navbar2} to='/about'>About</Link>
        <Link style={navbar2} to='/training'>Training</Link>
		</ul>
	</div>
    );
  }
}