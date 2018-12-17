import React from 'react';
import AppBarFooter from './AppBarFooter.jsx';
import RegularFooter from './RegularFooter.jsx';
import { splitPath } from './helpers/utils.js';

export default function Footer(props) {
  const home = splitPath(props)[1] === '';
  const { magicClicks, magicOpacity } = props.state;
  const opacity = home ? { opacity: magicOpacity } : null;
  const location = home ? 'home-page-footer' : 'inner-page-footer';

  return (
    <footer className={magicClicks} style={opacity} id={location}>
      <RegularFooter {...props} />
      <AppBarFooter {...props} />
    </footer>
  );
}
