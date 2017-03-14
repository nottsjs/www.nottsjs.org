import React from 'react';

import Contributor from './contributor';

export default class ContributorList extends React.Component {
  static propTypes = {
    items: React.PropTypes.array.isRequired
  }
  render() {
    const { items } = this.props;
    return (
      <div>
        <h2>Contributors</h2>
        <ol>
          {items.map((item, ix) => (
            <li key={ix}><Contributor data={item} /></li>
          ))}
        </ol>
      </div>
    );
  }
}
