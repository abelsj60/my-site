import React from 'react';
import { withRouter } from 'react-router-dom';
import { splitPath } from './helpers/utils.js';

function MagicScroller(props) {
  const abracadabra = splitPath(props)[1] === '';
  return abracadabra && <section id="abracadabra" />;
}

export default withRouter(MagicScroller);
