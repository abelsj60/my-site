import React from 'react';
import styled from 'styled-components';
import BusinessCard from './BusinessCard.jsx';
import LegalTerms from './LegalTerms.jsx';

const Container = styled.section`
  z-index: ${props => (props.home ? '0' : '0')};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${props => (props.home ? '0' : '52px')};
  bottom: ${props => (props.home ? '0' : '56px')};
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);

  background-color: #fd1172;
  background-image: url('https://www.transparenttextures.com/patterns/noisy-grid.png');
`;

export default function LegalTermsOrBizCard(props) {
  const { showBusinessCard, showLegalTerms, currentCaller } = props.state;

  if (!showBusinessCard && !showLegalTerms) {
    return null;
  }

  const homeIsActive = currentCaller === 'home' ? 'active' : '';

  return (
    <Container home={homeIsActive}>
      {showBusinessCard ? <BusinessCard {...props} /> : <LegalTerms />}
    </Container>
  );
}
