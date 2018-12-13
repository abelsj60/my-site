import React from 'react';
import { splitPath } from './helpers/utils.js';

export default function PageContainer(props) {
  const path = splitPath(props)[1];

  const pageCss = path === '' ? 'home' : 'inner';
  const menuCss = path === 'menu' ? ' menu-page' : '';

  return (
    <section id="page" className={pageCss + menuCss}>
      {props.children}
    </section>
  );
}
