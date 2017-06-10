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
    var templateStyle = {
        position: 'static',
        width: '800px',
        top: '0px',
        height: '900px',
        marginLeft: 'auto',
        marginRight: 'auto'
        }
    return (
      <div style={templateStyle}>
        <Header />
        <main>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}