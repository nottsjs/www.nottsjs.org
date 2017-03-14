require('normalize.css/normalize.css');
require('styles/app.css');

import React from 'react';
import ContributorList from '../controls/contributor-list';

import contributors from '../data/contributors';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <h1>Notts JS</h1>
        <ContributorList items={contributors} />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
