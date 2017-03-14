import React from 'react';

export default class Contributor extends React.Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired
  }
  render() {
    const { data } = this.props;
    return (
      <div>
        <h3>{data.name}</h3>
        <p><a href='https://github.com/{data.user_id}' target='_blank'>@{data.user_id}</a></p>
        <p>Pull Requests: {data.count}</p>
      </div>
    );
  }
}
