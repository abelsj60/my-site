import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Referrer from './custom/Referrer.js';

const Graf = styled.p`
  cursor: pointer;
  margin-right: 25px;
  color: ${props => (props.show ? 'palegoldenrod' : 'blanchedalmond')};

  &:hover {
    color: palegoldenrod;
  }
`;
const ContainerForRegularFooter = styled.section`
  display: none;

  @media (min-width: 848px) {
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    height: 55px;
    z-index: 2;
    display: flex;
    font-size: 1.1rem;
  }
`;

export default function footerText(props) {
  const { showBusinessCard, showLegalTerms } = props.state;
  const { boundHandleClickForApp } = props;

  const r = new Referrer(props);
  const isReverie = r.location.includes('reverie');
  const linkForReverie = isReverie ? '/' : '/reverie';

  return (
    <ContainerForRegularFooter>
      <Link to={linkForReverie}>
        <Graf show={isReverie}>Reverie</Graf>
      </Link>
      <Graf
        show={showBusinessCard}
        onClick={() => {
          boundHandleClickForApp('showBusinessCard');
        }}
      >
        Contact
      </Graf>
      <Graf
        show={showLegalTerms}
        onClick={() => boundHandleClickForApp('showLegalTerms')}
      >
        Legal
      </Graf>
    </ContainerForRegularFooter>
  );
}
