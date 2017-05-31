import React from 'react';
import ContributorList from '../../controls/contributor-list';
import contributors from '../../data/contributors';
import Template from '../Common/Template'

export default class AboutComponent extends React.Component {
  render() {
    return (
      <Template title='Contributer list'>
        <ContributorList items={contributors} />
      </Template>
    );
  }
}
