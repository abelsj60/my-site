import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { splitPath } from './helpers/utils.js';

class Legal extends Component {
  constructor(props) {
    super(props);
  }

  get copyrightYear() {
    return new Date().getFullYear();
  }

  addCssToFlagAboutPage() {
    return splitPath(this.props)[1] === 'about' ? 'about' : '';
  }

  render() {
    return (
      <section
        id="legal"
        className={`${
          this.props.footerState.legalTerms
        } ${this.addCssToFlagAboutPage()}`}
      >
        <section>
          <p>© {this.copyrightYear} James Abels. All rights reserved.</p>
        </section>
      </section>
    );
  }
}

export default withRouter(Legal);
