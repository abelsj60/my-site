import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import SectionMenu from './SectionMenu.jsx';
import { getPath } from './helpers/utils.js';

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  get location() {
    return getPath(this.props).split('/');
  }

  render() {
    return (
      <main id="site-menu">
        <Link id="close-button" to={`/${this.location[2].toLowerCase()}`}>
          <p>(X) Close</p>
        </Link>
        <SectionMenu state={this.props.state} />
      </main>
    );
  }
}

export default withRouter(Menu);
