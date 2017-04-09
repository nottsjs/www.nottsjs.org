import React from 'react';

import { Layout, Header, Drawer, Content, Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';

export default class Template extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired
  }
  renderNav() {
    return (
      <Navigation>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/training'>Training</Link>
      </Navigation>
    );
  }
  render() {
    const { title } = this.props;
    document.title = title + ' - NottsJS';
    return (
      <Layout fixedHeader>
        <Header title={title}>
          {this.renderNav()}
        </Header>
        <Drawer title={title}>
          {this.renderNav()}
        </Drawer>
        <Content>
          {this.props.children}
        </Content>
      </Layout>
    );
  }
}
