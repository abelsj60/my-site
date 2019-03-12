import Parallax from '../shared/Parallax.jsx';
import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${p => (p.home ? '0' : '52px')};
  bottom: ${p => (p.home ? '0' : '54px')};
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);

  ${p =>
    p.home
    && css`
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.5);
      // background-image: url('https://www.transparenttextures.com/patterns/bright-squares.png');
    `};
`;
const InnerContainer = styled.div`
  margin-top: ${p => (p.home ? '-135px' : undefined)};
`;
const Card = styled.section`
  flex-direction: column;
  justify-content: center;
  height: 160px;
  width: 275px;
  align-self: center;
  position: relative;
  background-color: white;
  font-size: 1.75rem;
  line-height: 2.5rem;
  box-shadow: 0 0 0.75em black;

  @media (min-width: 400px) {
    height: 200px;
    width: 350px;
  }
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
  font-size: 1.2rem;

  @media (min-width: 400px) {
    font-size: 1.4rem;
  }
`;

export default function LegalTermsOrBizCard(props) {
  const {
    showBusinessCard,
    showLegalTerms,
    currentCaller
  } = props.appState;

  if (!showBusinessCard && !showLegalTerms) {
    return null;
  }

  const homeIsActive = currentCaller === 'home';
  const text = showBusinessCard
    ? 'abelsj60_at_gmail.com'
    : `© ${new Date().getFullYear()} James Abels. All rights reserved.`;

  return (
    <Container home={homeIsActive}>
      <Parallax
        render={
          renderProps => (
            <InnerContainer home={homeIsActive} ref={
              el => (renderProps.scene = el)
            }>
              <Card data-depth="1" home={homeIsActive}>
                <Graf businessCard={showBusinessCard}>{text}</Graf>
                {showBusinessCard && <InnerBorder />}
              </Card>
            </InnerContainer>
          )}
      />
    </Container>
  );
}
