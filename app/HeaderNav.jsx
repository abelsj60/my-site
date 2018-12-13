import React from 'react';
import { Link } from 'react-router-dom';
import headerData from './data/headerData.js';
import { splitPath } from './helpers/utils.js';

export default function HeaderNav(props) {
  const currentSection = splitPath(props)[1];

  return headerData.map((section, index) => (
    <Link
      key={index}
      to={section.path}
      onClick={props.turnOffActiveButtons}
      className={
        section.path.includes(currentSection) && currentSection !== ''
          ? 'active'
          : ''
      }
    >
      {section.name}
    </Link>
  ));
}
