
import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {

  /*
  static propTypes = {
    title: React.PropTypes.string.isRequired
  }
  */

  render() {
    var headerStyle = {
      position: 'relative',
      width: '800px',
      top: '0px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
    var navbar = {
      position: 'absolute',
      height: '20px',
      bottom: '10px'
    }
    var navbar2 = {
      paddingRight: '10px',
      paddingLeft: '10px',
      color: 'grey'
    }
    var logofloat = {
      position: 'absolute',
      top: '20px',
      left: '20px',
      backgroundColor: 'white'
    }
    var sponsorfloat = {
      position: 'absolute',
      top: '20px',
      right: '20px',
      backgroundColor: 'white'
    }
    var sponsorstack = {
      position: 'absolute',
      top: '70px',
      right: '20px',
      backgroundColor: 'white'
    }
    var sponsorstack2 = {
      position: 'absolute',
      top: '180px',
      right: '20px',
      backgroundColor: 'white'
    }
    return (
      <div style={headerStyle} >
        <img src='../../images/Header_01.jpg' width="800px" />
        <img style={logofloat} src='../../images/nottsjs.png' width="70px" />
        <img style={sponsorfloat} src='../../images/mozlogo.jpeg' width="90px" />
        <img style={sponsorstack} src='../../images/jhlogo.jpeg' width="90px" />
        <img style={sponsorstack2} src='../../images/rebellogo.jpeg' width="90px" />
        <div style={navbar} >
          <Link style={navbar2} to='/'>Home</Link>
          <Link style={navbar2} to='/about'>About</Link>
          <Link style={navbar2} to='/training'>Training</Link>
        </div>
      </div>
    );
  }
}

