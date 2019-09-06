import bio from '../data/home/home.md';
import FitText from '@kennethormandy/react-fittext';
import Loader from '../shared/Loader.jsx';
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
  // The double animation prop works b/c heartbeat runs three times on load, then stops. It then
  // effectively 'goes away' because p.heartbeat is false. The blur in keyframes is then used when 
  // a background change is triggered. This wouldn't work if the two were set to run 
  // simultaneously — the second would overwrite the first.
  ${p => p.heartbeat && css`animation: 1.1s .17s ease-in-out ${heartbeatKeyframes} 3 both`};
  ${p => p.castSpell && css`animation: ${blurInKeyframes} ${!p.inCity ? '1.52s' : '1.5s'} cubic-bezier(0.550, 0.085, 0.680, 0.530) both`};
  pointer-events: ${p => p.castSpell && 'none'};
  text-align: center;
  z-index: 2;
  cursor: pointer;
  ${p => p.nameTagWidth && `width: ${p.nameTagWidth}px`};
`;
const Spacer = styled.div`
  height: ${p => p.spacerHeight + 'px'};
  width: 100%;
  z-index: 3;
`;
const Hed = styled.h1`
  font-family: 'Aref Ruqaa', serif;
  text-shadow: 2px 1.5px 5px black;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${p => p.theme.colors.yellow};
  font-weight: 700;
  line-height: 1;
  margin-top: -9px;
  margin-bottom: 10px;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    margin-top: -17px;
  }

  ::selection {
    background-color: transparent;
  }
`;
const Motto = styled.h2`
  font-family: 'Aref Ruqaa', serif;
  text-shadow: 1.5px 1px 2px white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${p => p.theme.colors.black};
  font-weight: 700;
  margin-left: .95em;
  margin-bottom: 17px;
  // opacity: ${p => p.fadeIn || (p.isCasting && p.nowShowing) ? '1' : '0'};
  // transition: opacity 1s;

  ::selection {
    background-color: transparent;
  }
`;
const Text = styled.section`
  overflow: auto;
  display: ${p => (p.tempContentIsOn || p.isCasting ? 'none' : 'block')};
  z-index: 2;
  opacity: ${p => p.fadeIn || (p.nowShowing && !p.isCasting) ? '1' : '0'};
  transition: opacity 1s;
  
  p {
    font-weight: 500;
    margin-left: 1.7em;
    margin-bottom: 10px;
    color: ${p => p.theme.colors.black};
    text-shadow: 1.5px 1px 2px white;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    ::selection {
      background-color: transparent;
    }
  }
`;

export default function NameTag(props) {
  const {
    appState,
    boundHandleClickForApp,
    boundHandleClickForHome,
    homeState,
    resetFadeIn
  } = props;
  const {
    homeAnimation,
    inCity,
    finishedHomePageLoad,
    showBusinessCard,
    showLegalTerms,
    spacerHeight,
    nameTagWidth
  } = appState;
  const {
    isCasting,
    castSpell,
    eventType,
    fadeIn,
    finishedLoadingBoy,
    finishedLoadingFantasy,
    loadBoy,
    loadFantasy,
    nowShowing,
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

  const tagline = 
    !isCasting || castSpell
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
  const animationHandler = event => {
    event.preventDefault();

    if (homeAnimation === 'run') {
      boundHandleClickForApp('toggleHomeAnimation')
    }
  }

  return (
    <Fragment>
      <Spacer
        spacerHeight={spacerHeight}
      />
        <Container
          fadeIn={fadeIn}
          castSpell={castSpell} // For text blur
          onClick={eventHandler}
          nameTagWidth={nameTagWidth}
          heartbeat={
            finishedLoadingBoy
              && finishedLoadingFantasy
              && homeAnimation === 'run'
          }
          tempContentIsOn={showBusinessCard || showLegalTerms}
          onAnimationStart={event => {
            event.preventDefault();
            if (!loadBoy && !loadFantasy) {
              boundHandleClickForApp('finishedHomePageLoad')
            }
          }}
          onAnimationEnd={animationHandler.bind(null)}
        >
          <FitText compressor={1.154}>
            <Hed>
              {name}
            </Hed>
          </FitText>
          <FitText compressor={2.3}>
            <Motto
              isCasting={isCasting}
              castSpell={castSpell}
              nowShowing={
                nowShowing === '' 
                  || (nowShowing === 'charms') 
                  || (nowShowing === 'bioText')
              }
              fadeIn={fadeIn}
            >
              {tagline}
            </Motto>
          </FitText>
          <Text
            isCasting={isCasting}
            castSpell={castSpell}
            finishedHomePageLoad={finishedHomePageLoad}
            tempContentIsOn={showBusinessCard || showLegalTerms}
            nowShowing={nowShowing === 'bioText' || nowShowing === ''}
            onTransitionEnd={() => resetFadeIn()}
          >
            <FitText compressor={2.5}>
                <Fragment>
                  {ReactHtmlParser(
                    marked(
                      body,
                      { smartypants: true }
                    )
                  )}
                </Fragment>
            </FitText>
          </Text>
          <Loader
            show={loadBoy || loadFantasy}
            done={finishedHomePageLoad}
          />
          
        </Container>
    </Fragment>
  );
}
