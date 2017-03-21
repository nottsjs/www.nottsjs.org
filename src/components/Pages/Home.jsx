import React from 'react';
import ContributorList from '../../controls/contributor-list';
import contributors from '../../data/contributors';
import Template from '../Common/Template'

export default class HomeComponent extends React.Component {
  render() {
    return (
      <Template title='Cool or what'>
        <ContributorList items={contributors} />
      </Template>
    );
  }
}
