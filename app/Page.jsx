import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';
import { splitPath } from './helpers/utils.js';
import bodies from './data/bodies.md';

class Page extends Component {
  constructor(props) {
    super(props);
  }

  addCssForPageControl() {
    return splitPath(this.props)[1] === '' ? 'home' : 'inner';
  }

  addCssForMenuPages() {
    return splitPath(this.props)[1] === 'menu' ? ' menu-page' : '';
  }

  render() {
    return (
      <section
        id="page"
        className={this.addCssForPageControl() + this.addCssForMenuPages()}
      >
        <Header
          state={this.props.state}
          turnOffActiveButtons={this.props.turnOffActiveButtons}
        />
        <Body state={this.props.state} />
        <Footer state={this.props.state} toggleText={this.props.toggleText} />
      </section>
    );
  }
}

export default withRouter(Page);
