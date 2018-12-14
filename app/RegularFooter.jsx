import React from 'react';
import { Link } from 'react-router-dom';
import HtmlContainer from './HtmlContainer.jsx';
import { splitPath } from './helpers/utils.js';

export default function footerText(props) {
  const isReverie = splitPath(props).includes('reverie');

  return (
    <section id="footer-text" className="app-bar-active">
      <Link
        to={isReverie ? '/' : '/reverie'}
        className={isReverie ? 'active' : 'inactive'}
      >
        <p>Reverie</p>
      </Link>
      <HtmlContainer
        element="p"
        className={props.state.showBusinessCard ? 'active' : 'inactive'}
        onClick={() => {
          props.boundHandleClickForApp('showBusinessCard');
        }}
      >
        Contact
      </HtmlContainer>
      <HtmlContainer
        element="p"
        className={props.state.showLegalTerms ? 'active' : 'inactive'}
        onClick={() => props.boundHandleClickForApp('showLegalTerms')}
      >
        Legal
      </HtmlContainer>
    </section>
  );
}
