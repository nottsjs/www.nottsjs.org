import React from 'react';

import { Layout, Header, Drawer, Content } from 'react-mdl';

export default class Template extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired
  }
  render() {
    const { title } = this.props;
    document.title = title + ' - NottsJS';
    return (
      <Layout fixedHeader>
        <Header title={title} />
        <Drawer title={title} />
        <Content>
          {this.props.children}
        </Content>
      </Layout>
    );
  }
}
