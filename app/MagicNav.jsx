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
          <Link key={index} to={section.link} key={index}>
            <h3>{section.hed}</h3>
            <p id="second-hint">{`${index !== 2 ? '⥥ ⥣' : '⥣'}`}</p>
          </Link>
        ))}
      </section>
    );
  }
}

export default MagicNav;
