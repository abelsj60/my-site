import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import headerData from './data/headerData.js';
import { splitPath } from './helpers/utils.js';

class HeaderNav extends Component {
  constructor(props) {
    super(props);
  }

  addCssToActiveLink(section) {
    let sectionName = section.name.toLowerCase();
    const currentPath = splitPath(this.props);

    if (sectionName === 'the story') {
      sectionName = 'chapter';
    }

    return currentPath.includes(sectionName) ? 'active' : '';
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
            to={section.path}
            onClick={() => this.deactiveMenuButton()}
            className={this.addCssToActiveLink(section)}
          >
            {section.name}
          </Link>
        ))}
      </nav>
    );
  }
}

export default withRouter(HeaderNav);
