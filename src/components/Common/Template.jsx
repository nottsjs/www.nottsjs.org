import React from 'react';

import Header from './header';
import Footer from './footer';

export default class Template extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired
  }
  render() {
    const { title } = this.props;
    document.title = title + ' - NottsJS';
    return (
      <div>
        <Header title={title} />
        <main>
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}
