

require('normalize.css/normalize.css');
require('styles/app.css');

import React from 'react';
import Header from '../Common/Header.jsx'
import Footer from '../Common/Footer.jsx'

class TrainingComponent extends React.Component {

  constructor (){
    super();
    this.state = {
      title: 'Type in the box ..',
      txtBoxVisible: true
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  /* Using state and props to pass params only through to the components */
  render() {
    return (
        <div className="index">
          <Header topLevelModule1={this.changeTitle.bind(this)}
                  title={this.state.title}
                  txtBoxVisible={this.state.txtBoxVisible}/>
            <h4>This page has been used to try bits and bobs out before putting them live.</h4>
            <h4>The input box in the header was used to test sending</h4>
            <h4>a function ref rather than a normal prop to the training.jsx page.</h4>
          <Footer />
        </div>
    );
  }
}

TrainingComponent.defaultProps = {
};

export default TrainingComponent;