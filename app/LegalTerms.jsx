import React from 'react';
import { splitPath } from './helpers/utils.js';

export default function Legal(props) {
  const copyrightYear = new Date().getFullYear();
  const cssForAboutPage = splitPath(props)[1] === 'about' ? 'about' : '';
  const cssForStatus = props.state.showLegalTerms ? 'active' : 'inactive';

  return (
    <section id="legal" className={`${cssForStatus} ${cssForAboutPage}`}>
      <p>© {copyrightYear} James Abels. All rights reserved.</p>
      <div id="temp-content-box-shadow" />
    </section>
  );
}
