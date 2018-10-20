import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import { getPath } from './helpers/utils.js';

class Page extends Component {
  constructor(props) {
    super(props);
  }

  addCssForPageControl() {
    return getPath(this.props).split('/')[1] === '' ? 'home' : 'inner';
  }

  render() {
    return (
      <section id="page" className={this.addCssForPageControl()}>
        <Header />
        <Main state={this.props.state} />
        <Footer state={this.props.state} toggleText={this.props.toggleText} />
      </section>
    );
  }
}

export default withRouter(Page);
