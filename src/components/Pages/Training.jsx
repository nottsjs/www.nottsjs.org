import React from 'react';
import Template from '../Common/Template'

export default class TrainingComponent extends React.Component {
  render() {
    return (
      <Template title='Training'>
        <p>
          This page has been used to try bits and bobs out before putting them live.
        </p>
        <p>
          The input box in the header was used to test sending a function ref
          rather than a normal prop to the training.jsx page.
        </p>
      </Template>
    );
  }
}
