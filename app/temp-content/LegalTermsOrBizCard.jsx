import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${p => (p.home ? '0' : '52px')};
  bottom: ${p => (p.home ? '0' : '56px')};
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);

  ${p =>
    p.home &&
    css`
      background-color: rgba(0, 0, 0, 0.3);
      background-image: url('https://www.transparenttextures.com/patterns/bright-squares.png');
    `};
`;
const Card = styled.section`
  margin-top: ${p => (p.home ? '-200px' : undefined)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 200px;
  width: 350px;
  align-self: center;
  position: relative;
  background-color: white;
  font-size: 1.75rem;
  line-height: 2.5rem;
  box-shadow: 0 0 0.75em black;
`;
const InnerBorder = styled.div`
  position: absolute;
  width: 90%;
  height: 85%;
  align-self: center;
  border: 0.5px solid #fd1172;
`;
const Graf = styled.p`
  margin-top: 0px;
  align-self: center;
  margin-bottom: 0px;
  font-size: ${p => (p.businessCard ? '1.6rem' : '1.4rem')};
  font-family: ${p => (p.businessCard ? 'Aref Ruqaa, serif' : undefined)};
`;

export default function LegalTermsOrBizCard(props) {
  const { showBusinessCard, showLegalTerms, currentCaller } = props.appState;

  if (!showBusinessCard && !showLegalTerms) {
    return null;
  }

  const homeIsActive = currentCaller === 'home';
  const text = showBusinessCard
    ? 'abelsj60_at_gmail.com'
    : `©${new Date().getFullYear()} James Abels. All rights reserved.`;

  return (
    <Container home={homeIsActive}>
      <Card home={homeIsActive}>
        <Graf businessCard={showBusinessCard}>{text}</Graf>
        {showBusinessCard && <InnerBorder />}
      </Card>
    </Container>
  );
}
