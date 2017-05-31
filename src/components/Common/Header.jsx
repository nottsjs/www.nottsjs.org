
import React from 'react';
import { Link } from 'react-router';

/*
var header = require('../../images/Header_01.jpg');
var logo = require('../../images/nottsjs.png');
var spon1 = require('../../images/mozlogo.jpeg');
<h1>Notts JS - {title}</h1>
*/

export default class Header extends React.Component {

  /*
  static propTypes = {
    title: React.PropTypes.string.isRequired
  }
  */

  render() {
    return (
      <div className="header" >
        <img src='../../images/Header_01.jpg' width="800px" />
        <img className="logofloat" src='../../images/nottsjs.png' width="70px" />
        <img className="sponsorfloat" src='../../images/mozlogo.jpeg' width="90px" />
        <img className="sponsorstack" src='../../images/jhlogo.jpeg' width="90px" />
        <img className="sponsorstack2" src='../../images/rebellogo.jpeg' width="90px" />
        <div className="navbar" >
          <Link className="navbar2" to='/'>Home</Link>
          <Link className="navbar2" to='/about'>About</Link>
          <Link className="navbar2" to='/training'>Training</Link>
        </div>
      </div>
    );
  }
}

