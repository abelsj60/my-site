import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { splitPath } from './helpers/utils.js';

class FooterText extends Component {
  constructor(props) {
    super(props);

    this.state = { contact: 'inactive' };
  }

  get location() {
    return splitPath(this.props);
  }

  get isReverie() {
    return this.location.includes('reverie');
  }

  getCopyrightYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <section id="footer-text" className="app-bar-active">
        <Link
          to={this.isReverie ? '/' : '/reverie'}
          className={this.isReverie ? 'active' : 'inactive'}
        >
          <p>Reverie</p>
        </Link>
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
          className={this.props.footerState.legalTerms}
          onClick={() => this.props.toggleLegalTerms()}
        >
          Legal
        </p>
      </section>
    );
  }
}

export default withRouter(FooterText);
