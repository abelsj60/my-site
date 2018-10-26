import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import headerData from './data/headerData.js';

class HeaderNav extends Component {
  constructor(props) {
    super(props);
  }

  addCssToActiveLink(section) {
    if (section.toLowerCase() === 'the story') {
      section = 'chapter';
    }

    return this.props.location.pathname
      .toLowerCase()
      .includes(section.toLowerCase())
      ? 'active'
      : '';
  }

  deactiveMenuButton() {
    if (this.props.state.menu === 'active') {
      this.props.toggleMenu();
    }
  }

  render() {
    return (
      <nav>
        {headerData.map((section, index) => (
          <Link
            key={index}
            className={this.addCssToActiveLink(section.name)}
            to={section.path}
            onClick={() => this.deactiveMenuButton()}
          >
            {section.name}
          </Link>
        ))}
      </nav>
    );
  }
}

export default withRouter(HeaderNav);
