import React from 'react';
import { Link } from 'react-router-dom';
import HtmlContainer from './HtmlContainer.jsx';
import { splitPath } from './helpers/utils.js';

export default function footerText(props) {
  const isReverie = splitPath(props).includes('reverie');
  const { showBusinessCard, showLegalTerms } = props.state;
  const { boundHandleClickForApp } = props;

  const reverieLink = isReverie ? '/' : '/reverie';
  const reverieClassName = isReverie ? 'active' : 'inactive';
  const businessCardClassName = showBusinessCard ? 'active' : 'inactive';
  const legalTermsClassName = showLegalTerms ? 'active' : 'inactive';

  return (
    <section id="footer-text" className="app-bar-active">
      <Link to={reverieLink} className={reverieClassName}>
        <p>Reverie</p>
      </Link>
      <HtmlContainer
        element="p"
        className={businessCardClassName}
        onClick={() => {
          boundHandleClickForApp('showBusinessCard');
        }}
      >
        Contact
      </HtmlContainer>
      <HtmlContainer
        element="p"
        className={legalTermsClassName}
        onClick={() => boundHandleClickForApp('showLegalTerms')}
      >
        Legal
      </HtmlContainer>
    </section>
  );
}
