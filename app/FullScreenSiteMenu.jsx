import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SectionList from './SectionList.jsx';

class FullScreenSiteMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main id="full-screen-site-menu">
        <Link id="close-button" to={`/${this.props.section}`}>
          <p>(X) Close</p>
        </Link>
        <SectionList section={this.props.section} state={this.props.state} />
      </main>
    );
  }
}

export default FullScreenSiteMenu;
