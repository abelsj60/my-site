import React from 'react';
import Parallax from '../shared/Parallax.jsx';
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
      z-index: 1;
      background-color: rgba(255, 231, 76, 0.1);
      background-image: url('https://www.transparenttextures.com/patterns/bright-squares.png');
    `};
`;
const InnerContainer = styled.div`
  margin-top: ${p => (p.home ? '-200px' : undefined)};
`;
const Card = styled.section`
  // margin-top: ${p => (p.home ? '-200px' : undefined)};
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
  font-size: 1.4rem;
`;

export default function LegalTermsOrBizCard(props) {
  const { showBusinessCard, showLegalTerms, currentCaller } = props.appState;

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
        render={renderProps => (
          <InnerContainer ref={el => (renderProps.scene = el)} home={homeIsActive}>
            <Card home={homeIsActive} data-depth="1">
              <Graf businessCard={showBusinessCard}>{text}</Graf>
              {showBusinessCard && <InnerBorder />}
            </Card>
          </InnerContainer>
        )}
      />
    </Container>
  );
}
