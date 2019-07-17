import bio from '../data/home/home.md';
import marked from 'marked';
import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import ReactHtmlParser from 'react-html-parser';
import ReactGA from 'react-ga';

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
  text-shadow: 2px 2px 2px rgba(0, 0, 0, .6);
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
  text-shadow: 1.5px 1.5px 2px rgba(0, 0, 0, .6);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: ${p => p.theme.fontSizes.twelve};
  color: ${p => !p.isCasting || p.castSpell ? p.theme.colors.yellow : p.theme.colors.white};
  font-weight: 700;
  margin-top: -6px;
  margin-left: 16px;
  
  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    margin-left: 10px;
    font-size: ${p => !p.isCasting ? p.theme.fontSizes.eighteen : p.theme.fontSizes.eighteen};
  }
`;
const Text = styled.section`
  overflow: auto;
  width: 80%;
  display: ${p => (p.tempContentIsOn ? 'none' : 'block')};
  z-index: 2;
  
  @media (min-width: 338px) {
    width: 75%;
  }

  @media (min-width: 387px) {
    width: 70%;
  }

  @media (min-width: 390px) {
    width: 85%;
  }

  @media (min-width: ${p => p.theme.mediaQueries.tinyViewTwo}) {
    width: 85%;
  }

  @media (min-width: 455px) {
    width: 75%;
  }

  @media (min-width: 516px) {
    width: 70%;
  }

  @media (min-width: 553px) {
    width: 65%;
  }
  
  p {
    font-weight: 500;
    margin-bottom: 10px;
    font-size: ${p => p.theme.fontSizes.three};
    color: ${p => p.theme.colors.yellow};
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
    boundHandleClickForHome,
    homeState
  } = props;
  const {
    showBusinessCard,
    showLegalTerms
  } = appState;
  const {
    isCasting,
    castSpell,
    eventType,
    score
  } = homeState;
  const {
    attributes,
    body
  } = bio;
  const {
    motto,
    name
  } = attributes;

  const tagline = !isCasting || castSpell
    ? motto
    : 'Tap active charms to cast a spell';

  const eventHandler = () => {
    if (eventType === 'touch') {
      boundHandleClickForHome('resetEventType');
      return false;
    }

    if (process.env.NODE_ENV !== 'development') {
      ReactGA.event({
        category: 'Home state',
        action: 'Spell toggled.',
        label: `The score was ${score}.`
      });
    }

    boundHandleClickForHome('toggleSpell');
  };

  return (
    <Container
      castSpell={castSpell}
      onClick={eventHandler}
      tempContentIsOn={showBusinessCard || showLegalTerms}
    >
      <Hed>
        {name}
      </Hed>
      <Motto
        isCasting={isCasting}
        castSpell={castSpell}
      >
        {tagline}
      </Motto>
      <Text
        isCasting={isCasting}
        castSpell={castSpell}
        tempContentIsOn={showBusinessCard || showLegalTerms}
      >
        {ReactHtmlParser(
          marked(
            body,
            { smartypants: true }
          )
        )}
      </Text>
    </Container>
  );
}
