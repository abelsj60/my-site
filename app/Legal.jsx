import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { splitPath } from './helpers/utils.js';

class Legal extends Component {
  constructor(props) {
    super(props);
  }

  addCssToFlagAboutPage() {
    return splitPath(this.props)[1] === 'about' ? 'about' : '';
  }

  render() {
    return (
      <section
        id="legal"
        className={`${this.props.state.legal} ${this.addCssToFlagAboutPage()}`}
      >
        <section>
          <p>James Abels. All rights reserved. {this.props.copyrightYear}</p>
        </section>
      </section>
    );
  }
}

export default withRouter(Legal);
