import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default class Template extends React.Component {
  /*
  static propTypes = {
    title: React.PropTypes.string.isRequired
  }
  */

  constructor(props){
    super(props);
  }

  render() {
    const { title } = this.props;
    document.title = title + ' - NottsJS';
    return (
      <div className='templatecontainer'>
        <Header />
        <main>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}
/*

*/