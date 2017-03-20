
import React from 'react';

export default class Header extends React.Component {

  handleChange(e) {
    const tb_title = e.target.value;
    this.props.topLevelModule1(tb_title);
  }

  render() {
    if (this.props.txtBoxVisible) {
    return (
      <div>
          <header><h1>{this.props.txtBoxVisible}</h1></header>
          <header><h1>{this.props.title}</h1></header>
          <input value={this.props.title} onChange={this.handleChange.bind(this)}/>
        </div>
      );
    } else {
    return (
      <div>
          <header><h1>{this.props.txtBoxVisible}</h1></header>
          <header><h1>{this.props.title}</h1></header>
        </div>
      );
    }
  }
}