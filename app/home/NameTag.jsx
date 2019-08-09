import bio from '../data/home/home.md';
import marked from 'marked';
import React, { Fragment } from 'react';
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
const heartbeatKeyframes = keyframes`
  from {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: ease-out;
  }
  10% {
    transform: scale(1.03);
    animation-timing-function: ease-in;
  }
  19% {
    transform: scale(0.97);
    animation-timing-function: ease-out;
  }
  35% {
    transform: scale(1.05);
    animation-timing-function: ease-in;
  }
  45% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
`;

const Container = styled.div`
  // margin-top: 17px;
  display: ${p => (p.tempContentIsOn ? 'none' : 'block')};
  animation: ${p => p.animate && css`1.15s ease-in-out ${heartbeatKeyframes} 3 both`};
  animation: ${p => p.castSpell && css`${blurInKeyframes} 1.75s cubic-bezier(0.550, 0.085, 0.680, 0.530) both`} ;
  pointer-events: ${p => p.castSpell && 'none'};
  // flex-direction: column;
  // align-items: center;
  text-align: center;
  z-index: 2;
  cursor: pointer;

  @media (min-height: 600px) {
    // margin-top: 15px;
  }
`;
const Spacer = styled.div`
  height: 35px;
  width: 100%;
  z-index: 3;

  @media (min-height: 667px) and (min-width: 375px) {
    height: 45px;
  }

  @media (min-height: 812px) and (min-width: 375px) {
    height: 55px;
  }

  @media (min-height: 1023px) and (min-width: 1440px) {
    height: 60px;
  }

  @media (min-height: 1366px) and (min-width: 1024px) {
    height: 100px;
  }

  @media (min-height: 1900px) and (min-width: 2560px) {
    height: 175px;
  }
`;
const Hed = styled.h1`
  font-family: 'Aref Ruqaa', serif;
  font-size: 4.5rem;
  text-shadow: 2px 1.5px 5px black;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${p => p.theme.colors.yellow};
  font-weight: 700;
  line-height: 1;
  margin-top: -17px;
  margin-bottom: 10px;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    font-size: ${p => p.theme.fontSizes.seventeen};
  }
`;
const Motto = styled.h2`
  font-family: 'Aref Ruqaa', serif;
  text-shadow: 1.5px 1px 2px white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: ${p => p.theme.fontSizes.thirteen};
  color: ${p => p.theme.colors.black};
  // color: ${p => !p.isCasting || p.castSpell ? p.theme.colors.yellow : p.theme.colors.white};
  font-weight: 700;
  // margin-top: -5px;
  margin-left: ${p => !p.isCasting || p.castSpell ? '16px' : '18px'};
  margin-bottom: 20px;
  
  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    // margin-left: 13px;
    font-size: ${p => p.theme.fontSizes.eighteen};
    margin-left: ${p => !p.isCasting || p.castSpell ? '22px' : '24px'};
  }
`;
const Text = styled.section`
  overflow: auto;
  // width: 80%;
  max-width: 250px;
  // text-align: center;
  // margin-left: 5px;
  margin-left: 17px;
  display: ${p => (p.tempContentIsOn ? 'none' : 'block')};
  z-index: 2;

  @media (min-width: 390px) {
    max-width: 350px;
  }

  @media (min-width: ${p => p.theme.mediaQueries.tinyViewTwo}) {
    // max-width: 350px;
    // margin-left: 10px;
    margin-left: 25px;
  }
  
  p {
    font-weight: 500;
    margin-bottom: 10px;
    font-size: ${p => p.theme.fontSizes.three};
    color: ${p => p.theme.colors.black};
    text-shadow: 1.5px 1px 2px white;
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
    inCity,
    showBusinessCard,
    showLegalTerms
  } = appState;
  const {
    isCasting,
    castSpell,
    eventType,
    score,
    animate
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
    : !inCity
      ? 'Tap the pulses to travel home'
      : 'Tap the pulses for adventure';

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
    <Fragment>
      <Spacer />
      <Container
        castSpell={castSpell}
        onClick={eventHandler}
        animate={!isCasting && !castSpell && animate === 1}
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
    </Fragment>
  );
}
