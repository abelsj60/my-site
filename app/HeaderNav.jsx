import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import headerData from './data/headerData.js';

class HeaderNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        {headerData.map((section, index) => (
          <Link
            key={index}
            className={this.props.addCssToActiveLink(section.name)}
            to={section.path}
          >
            {section.name}
          </Link>
        ))}
      </nav>
    );
  }
}

export default HeaderNav;
