import Clipboard from 'react-clipboard.js';
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
  background-color: ${
  p => !p.copied
    ? 'rgba(0, 0, 0, 0.7)'
    : 'rgba(253,17,114, 0.7)'};
  transition: background-color .75s;

  ${p =>
    p.home
    && css`
      z-index: 1;
      background-color: ${
  !p.copied
    ? 'rgba(0, 0, 0, 0.5)'
    : 'rgba(253,17,114, 0.5)'};
    `};
`;
const CardHolder = styled.div`
  display: flex;
  justifyContent: center;
`;
const InnerContainer = styled.div`
  margin-top: ${p => (p.home ? '-135px' : undefined)};
  `;
const Card = styled.section`
  height: 160px;
  width: 275px;
  background-color: white;
  pointer-events: all;

  @media (min-width: 400px) {
    height: 200px;
    width: 350px;
  }
`;
const CardContentArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const Graf = styled.p`
  height: 100%;
  flex: 1;
  font-size: ${p => !p.copied ? '1.2rem' : '4rem'};
  color: ${p => p.copied ? '#455057' : 'unset'};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media (min-width: 400px) {
    font-size: ${p => !p.copied ? '1.4rem' : '4rem'};
  }
`;
const StyledClipboardButton = styled(Clipboard)`
  border: ${p => p.businessCard ? '0.5px solid #fd1172' : 'unset'};
  padding: 0px;
  height: 85%;
  width: 90%;
  display: flex;
  pointer-events: all;

  :focus {
    outline: 0;
  }
`;

export default function LegalTermsOrBizCard(props) {
  const {
    showBusinessCard,
    showLegalTerms,
    copied,
    currentCaller
  } = props.appState;

  if (
    !showBusinessCard && !showLegalTerms
  ) return null;

  const homeIsActive = currentCaller === 'home';
  const text = showBusinessCard
    ? !copied
      ? 'abelsj60_at_gmail.com'
      : 'Copied!'
    : `© ${
      new Date().getFullYear()
    } James Abels. All rights reserved.`;
  const copyText = showBusinessCard
    ? 'abelsj60@gmail.com'
    : ''; // Nothing copied when empty string
  let timeoutId = null;

  return (
    <Container
      home={homeIsActive}
      copied={copied && !showLegalTerms}
      onClick={
        () => {
          if (showBusinessCard) {
            props.boundHandleClickForApp(
              'toggleBusinessCard'
            );
          } else {
            props.boundHandleClickForApp(
              'toggleLegalTerms'
            );
          }
        }
      }
    >
      <CardHolder>
        <Parallax
          render={
            renderProps => (
              <InnerContainer
                home={homeIsActive}
                ref={
                  el => (renderProps.scene = el)
                }
                onClick={
                  e => e.stopPropagation()
                }
              >
                <Card
                  data-depth="1"
                  home={homeIsActive}
                >
                  <CardContentArea>
                    <StyledClipboardButton
                      businessCard={showBusinessCard}
                      data-clipboard-text={copyText}
                      onSuccess={() => {
                        if (showBusinessCard && timeoutId === null) {
                          props.makeCopies(true);
                          timeoutId = setTimeout(() => {
                            props.makeCopies(false);
                            timeoutId = null;
                          }, 1300);
                        }
                      }}
                    >
                      <Graf copied={copied && !showLegalTerms}>
                        {text}
                      </Graf>
                    </StyledClipboardButton>
                  </CardContentArea>
                </Card>
              </InnerContainer>
            )
          }
        />
      </CardHolder>
    </Container>
  );
}
