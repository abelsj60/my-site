import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import { splitPath } from './helpers/utils.js';

class Page extends Component {
  constructor(props) {
    super(props);
  }

  addCssForPageControl() {
    return splitPath(this.props)[1] === '' ? 'home' : 'inner';
  }

  render() {
    return (
      <section id="page" className={this.addCssForPageControl()}>
        <Header />
        <Main state={this.props.state} toggleMenu={this.props.toggleMenu} />
        <Footer
          state={this.props.state}
          toggleText={this.props.toggleText}
          toggleMenu={this.props.toggleMenu}
          toggleLegal={this.props.toggleLegal}
        />
      </section>
    );
  }
}

export default withRouter(Page);
