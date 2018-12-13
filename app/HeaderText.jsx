import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function HeaderText() {
  return (
    <Fragment>
      <Link id="site-name" to={'/'}>
        James Abels
      </Link>
      <p id="site-motto">Magical stories and other adventures</p>
    </Fragment>
  );
}
