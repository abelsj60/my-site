import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Referrer from './custom/Referrer.js';

const ContainerForRegularFooter = styled.section`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 2;
  height: 55px;
  font-size: 1.1rem;
`;
const StyledLink = styled(Link)`
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
const Graf = styled.p`
  cursor: pointer;
  margin-right: 25px;
  color: ${props => (props.show ? 'palegoldenrod' : 'blanchedalmond')};

  &:hover {
    color: palegoldenrod;
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
      <StyledLink to={linkForReverie}>
        <Graf show={isReverie}>Reverie</Graf>
      </StyledLink>
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
