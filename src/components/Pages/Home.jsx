
import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import MembersList from '../Common/MembersList';

export default class HomeComponent extends React.Component {
  render() {
  	document.title='Home Page - NottsJS';
    return (
    	<div className="container">
    		<Header />
    		<div className="bodycontainer" >
	      	  	<div className="bodysection">
		      		<h3>Lovely day for a walk dont you think.</h3>
		      	</div>
		      	<MembersList />
		      </div>
	      	<Footer />
      	</div>
    );
  }
}