import React from 'react';
import { Link } from 'react-router-dom';
import Mapper from './Mapper.jsx';
import magicData from './data/magicData.js';

// Create, Build, Amaze

export default function MagicNav() {
  return (
    <section id="magic-nav">
      <Mapper
        mapData={magicData}
        render={(name, idx) => {
          const itemCss = `magicnav-link-${idx + 1}`;
          return (
            <Link key={idx} to={name.link} className={itemCss}>
              <h3>{name.hed}</h3>
            </Link>
          );
        }}
      />
    </section>
  );
}
