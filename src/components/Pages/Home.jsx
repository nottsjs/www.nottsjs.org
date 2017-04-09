import React from 'react';
import ContributorList from '../../controls/contributor-list';
import contributors from '../../data/contributors';
import Template from '../Common/Template'

import { Grid, Cell } from 'react-mdl';

export default class HomeComponent extends React.Component {
  render() {
    return (
      <Template title='Cool or what'>
        <Grid>
          <Cell col={6} offsetDesktop={3} offsetTablet={1}>
            <ContributorList items={contributors} />
          </Cell>
        </Grid>
      </Template>
    );
  }
}
