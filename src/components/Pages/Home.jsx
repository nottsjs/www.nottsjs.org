

require('normalize.css/normalize.css');
require('styles/app.css');

import React from 'react';
import ContributorList from '../../controls/contributor-list';
import contributors from '../../data/contributors';
import Header from '../Common/Header.jsx'
import Footer from '../Common/Footer.jsx'

class HomeComponent extends React.Component {

  constructor (){
    super();
    this.state = {
      title: 'Welcome!!',
      txtBoxVisible: false
    };
  }

  /* Using state and props to pass params and functions through to the components */
  render() {
    return (
      	<div className="index">
          <Header title={this.state.title}
                  txtBoxVisible={this.state.txtBoxVisible}/>
          <h1>Notts JS - Cool or what?</h1>
        	<ContributorList items={contributors} />
          <Footer />
      	</div>
    );
  }
}

HomeComponent.defaultProps = {
};

export default HomeComponent;