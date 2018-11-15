import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import headerData from './data/headerData.js';
import { splitPath } from './helpers/utils.js';

class HeaderNav extends Component {
  constructor(props) {
    super(props);
  }

  addCssToShowActiveLink(section) {
    let sectionName = section.name.toLowerCase();
    const currentPath = splitPath(this.props);

    if (sectionName === 'the story') {
      sectionName = 'chapter';
    }

    return currentPath.includes(sectionName) ? 'active' : '';
  }

  render() {
    return (
      <nav>
        {headerData.map((section, index) => (
          <Link
            key={index}
            to={section.path}
            onClick={this.props.turnOffActiveButtons}
            className={this.addCssToShowActiveLink(section)}
          >
            {section.name}
          </Link>
        ))}
      </nav>
    );
  }
}

export default withRouter(HeaderNav);
