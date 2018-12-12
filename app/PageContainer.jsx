import React, { Component } from 'react';
import { splitPath } from './helpers/utils.js';

class PageContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const path = splitPath(this.props)[1];
    const pageCss = path === '' ? 'home' : 'inner';
    const menuCss = path === 'menu' ? ' menu-page' : '';

    return (
      <section id="page" className={pageCss + menuCss}>
        {this.props.children}
      </section>
    );
  }
}

export default PageContainer;
