import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import SectionMenu from './SectionMenu.jsx';
import { splitPath } from './helpers/utils.js';

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  get location() {
    return splitPath(this.props);
  }

  render() {
    return (
      <main id="site-menu">
        <Link
          id="close-button"
          onClick={() => this.props.toggleMenu()}
          to={`/${this.location[2].toLowerCase()}`}
        >
          <p>(X) Close</p>
        </Link>
        <SectionMenu state={this.props.state} />
      </main>
    );
  }
}

export default withRouter(Menu);
