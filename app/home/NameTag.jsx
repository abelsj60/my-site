import bio from '../data/about/home-page-about.md';
import marked from 'marked';
import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import ReactHtmlParser from 'react-html-parser';

const blurInKeyframes = keyframes`
  0% {
    filter: blur(12px);
    opacity: 0;
  }

  100% {
    filter: blur(0px);
    opacity: 1;
  }
`;
const Container = styled.div`
  display: ${p => (p.tempContentIsOn ? 'none' : 'flex')};
  animation: ${p => p.castSpell && css`${blurInKeyframes} 1.215s cubic-bezier(0.550, 0.085, 0.680, 0.530) both`} ;
  pointer-events: ${p => p.castSpell && 'none'};
  flex-direction: column;
  align-items: center;
  z-index: 2;
  cursor: pointer;
`;
const Hed = styled.h1`
  font-family: 'Aref Ruqaa', serif;
  font-size: 4.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, .6);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${p => p.theme.colors.yellow};
  font-weight: 700;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    font-size: ${p => p.theme.fontSizes.seventeen};
  }
`;
const Motto = styled.p`
  font-family: 'Aref Ruqaa', serif;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, .6);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: ${p => p.theme.fontSizes.five};
  color: ${p => p.theme.colors.yellow};
  font-weight: 700;
  margin-top: -8px;
  margin-left: 16px;
  
  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    margin-left: 24px;
    font-size: ${p => p.theme.fontSizes.fourteen};
  }
`;
const Text = styled.section`
  overflow: auto;
  width: 80%;
  display: ${p => (p.tempContentIsOn ? 'none' : 'block')};
  z-index: 2;
  
  @media (min-width: 338px) {
    width: 260px;
  }

  @media (min-width: ${p => p.theme.mediaQueries.tinyViewTwo}) {
    width: 360px;
  }
  
  p {
    font-weight: 500;
    margin-bottom: 10px;
    font-size: ${p => p.theme.fontSizes.three};
    color: ${p => p.theme.colors.white};
    text-shadow: 1px 1px 2px rgba(0, 0, 0, .6);
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &:last-child {
      margin-bottom: 0px;
    }

    @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
      font-size: ${p => p.theme.fontSizes.twelve};
    } 
  }

  // At bottom to override media queries. Otherwise,
  // they invalidate the 'display: none' value.

  display: ${p => p.isCasting && !p.castSpell ? 'none' : ''};
`;

export default function NameTag(props) {
  const {
    appState,
    castTheSpell,
    homeState
  } = props;
  const {
    showBusinessCard,
    showLegalTerms
  } = appState;
  const {
    isCasting,
    castSpell
  } = homeState;

  console.log('castSpell in nT:', castSpell);

  return (
    <Container
      castSpell={castSpell}
      onClick={
        () => castTheSpell()
      }
      tempContentIsOn={showBusinessCard || showLegalTerms}
    >
      <Hed>
        James Abels
      </Hed>
      <Motto>
        Narrative coding and other adventures
      </Motto>
      <Text
        isCasting={isCasting}
        castSpell={castSpell}
        tempContentIsOn={showBusinessCard || showLegalTerms}
      >
        {ReactHtmlParser(
          marked(
            bio.body,
            { smartypants: true }
          )
        )}
      </Text>
    </Container>
  );
}
