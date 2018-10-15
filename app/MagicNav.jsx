import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import magicData from './data/magicData.js';

// Create, Build, Amaze

class MagicNav extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section id="magic-nav">
        {magicData.map((section, index) => (
          <Link to={section.link} key={index}>
            <section id="magic-nav-content">
              <h3>{section.hed}</h3>
              <p>{section.blurb}</p>
            </section>
          </Link>
        ))}
      </section>
    );
  }
}

export default MagicNav;
