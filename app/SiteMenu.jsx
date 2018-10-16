import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SiteNav from './SiteNav.jsx';

class SiteMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main id="site-menu">
        <Link id="close-button" to={`/${this.props.section}`}>
          <p>(X) Close</p>
        </Link>
        <SiteNav section={this.props.section} state={this.props.state} />
      </main>
    );
  }
}

export default SiteMenu;
