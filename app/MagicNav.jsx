import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import magicData from './data/magicData.js';
// Create, Build, Amaze

class MagicNav extends Component {
  constructor() {
    super();
  }

  getCssToShowAndHideNavItems(index) {
    return `magicnav-link-${index + 1}`;
  }

  render() {
    return (
      <section id="magic-nav">
        {magicData.map((section, index) => (
          <Link
            key={index}
            to={section.link}
            className={this.getCssToShowAndHideNavItems(index)}
          >
            <h3>{section.hed}</h3>
          </Link>
        ))}
      </section>
    );
  }
}

export default MagicNav;
