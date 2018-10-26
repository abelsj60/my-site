import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { splitPath } from './helpers/utils.js';
import { Link } from 'react-router-dom';
import { getPath } from './helpers/utils.js';

class FooterText extends Component {
  constructor(props) {
    super(props);

    this.state = { contact: 'inactive' };
  }

  get location() {
    return splitPath(this.props);
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
          className={this.props.footerState.contact}
          onClick={event => {
            this.props.toggleBusinessCard();
            event.preventDefault();
          }}
        >
          Contact
        </p>
        <p
          className={this.props.state.legal}
          onClick={() => this.props.toggleLegal()}
        >
          Legal
        </p>
      </section>
    );
  }
}

export default withRouter(FooterText);
