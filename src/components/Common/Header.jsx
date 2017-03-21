
import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired
  }

  render() {
    const { title } = this.props;
    return (
      <header>
        <h1>Notts JS - {title}</h1>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/training'>Training</Link>
      </header>
    );
  }
}
