
import React from 'react';
import Template from '../Common/Template';
import Topics from '../Common/Topics';
import MembersList from '../Common/MembersList';


export default class HomeComponent extends React.Component {
  render() {
    var bodycontainer = {
      position: 'relative',
      width: '800px',
      height: '800px',
      /* border: '3px solid blue', */
      marginLeft: 'auto',
      marginRright: 'auto'
    }
    return (
      <Template>
        <div style={bodycontainer}>
          <Topics />
          <MembersList />
        </div>
      </Template>
    );
  }
}

/*
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
*/
