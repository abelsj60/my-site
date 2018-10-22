import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getPath } from './helpers/utils.js';

class FooterText extends Component {
  constructor(props) {
    super(props);
  }

  get location() {
    return getPath(this.props).split('/');
  }

  getCopyrightYear() {
    return new Date().getFullYear();
  }

  addCssToHideTextForAppBar() {
    return this.location[1] !== '' ? 'app-bar-active' : '';
  }

  render() {
    return (
      <section id="footer-text" className={this.addCssToHideTextForAppBar()}>
        <p
          onClick={event => {
            this.props.toggleBusinessCard();
            event.preventDefault();
          }}
        >
          Contact
        </p>
        <p>|</p>
        <p>{`James Abels. All rights reserved. ${this.getCopyrightYear()}.`}</p>
      </section>
    );
  }
}

export default withRouter(FooterText);
