import React from 'react';
import { splitPath } from './helpers/utils.js';

export default function Legal(props) {
  const copyrightYear = new Date().getFullYear();
  const aboutPage = splitPath(props)[1] === 'about';

  return (
    <section
      id="legal"
      className={`${props.state.legalTerms} ${aboutPage ? 'about' : ''}`}
    >
      <p>© {copyrightYear} James Abels. All rights reserved.</p>
      <div id="temp-content-box-shadow" />
    </section>
  );
}
