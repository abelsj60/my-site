import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';

class FullPageIndexMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('HI AGAIN!');
    return (
      <section id="full-page-index-menu">
        <h1 className="full-page-index-menu-headline">Index</h1>
        <p className="full-page-index-menu-text">Text</p>
      </section>
    );
  }
}

export default FullPageIndexMenu;
