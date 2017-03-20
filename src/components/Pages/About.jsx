

require('normalize.css/normalize.css');
require('styles/app.css');

import React from 'react';
import Header from '../Common/Header.jsx'
import Footer from '../Common/Footer.jsx'

class PageComponent extends React.Component {

  constructor (){
    super();
    this.state = {
      title: 'Welcome to the About Page!!',
      txtBoxVisible: false
      };
  }

  /* Using state and props to pass params only through to the components */
  render() {
    return (
      	<div className="index">
          <Header title={this.state.title}
                  txtBoxVisible={this.state.txtBoxVisible}/>
          	<h4>This will be the about page</h4>
          <Footer />
      	</div>
    );
  }
}

PageComponent.defaultProps = {
};

export default PageComponent;