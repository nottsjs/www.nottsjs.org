import React from 'react';
import Template from '../Common/Template'

import { Grid, Cell } from 'react-mdl';

export default class PageComponent extends React.Component {
  render() {
    return (
      <Template title='About Page'>
        <Grid>
          <Cell col={6} offsetDesktop={3} offsetTablet={1}>
            <h4>This will be the about page</h4>
          </Cell>
        </Grid>
      </Template>
    );
  }
}
