import React from 'react';
import styled from 'styled-components';
import BusinessCard from './BusinessCard.jsx';
import LegalTerms from './LegalTerms.jsx';

const Container = styled.section`
  z-index: ${props => (props.home ? 2 : 0)};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 53px;
  bottom: 55px;
  width: 100%;
  background-color: white;

  @media (max-width: 848px) {
    bottom: 80px;
  }
`;

export default function LegalTermsOrBizCard(props) {
  const { showBusinessCard, showLegalTerms } = props.state;

  if (!showBusinessCard && !showLegalTerms) {
    return null;
  }

  const homeIsActive = props.home === 'active';

  return (
    <Container home={homeIsActive}>
      {showBusinessCard ? <BusinessCard {...props} /> : <LegalTerms />}
    </Container>
  );
}
