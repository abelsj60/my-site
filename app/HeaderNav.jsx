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

  render() {
    return (
      <nav>
        {headerData.map((section, index) => (
          <Link
            key={index}
            className={this.addCssToActiveLink(section.name)}
            to={section.path}
          >
            {section.name}
          </Link>
        ))}
      </nav>
    );
  }
}

export default withRouter(HeaderNav);
