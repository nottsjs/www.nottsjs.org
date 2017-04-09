import React from 'react';
import Template from '../Common/Template'

import { Grid, Cell } from 'react-mdl';

export default class TrainingComponent extends React.Component {
  render() {
    return (
      <Template title='Training'>
        <Grid>
          <Cell col={6} offsetDesktop={3} offsetTablet={1}>
          <p>
            This page has been used to try bits and bobs out before putting them
            live.
          </p>
          <p>
            The input box in the header was used to test sending a function ref
            rather than a normal prop to the training.jsx page.
          </p>
      </Cell>
      </Grid>
      </Template>
    );
  }
}
