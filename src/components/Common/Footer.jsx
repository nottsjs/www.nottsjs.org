
import React from 'react';
import { Link } from 'react-router';

export default class Footer extends React.Component {
  render() {
    return (
	<div className="footer" >
		<ul>
		<br/>
		<Link className="navbar3" to='/'>Home</Link>
        <Link className="navbar3" to='/about'>About</Link>
        <Link className="navbar3" to='/training'>Training</Link>
		</ul>
	</div>
    );
  }
}