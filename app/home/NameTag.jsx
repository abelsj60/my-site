import bio from '../data/home/home.md';
import FitText from '@kennethormandy/react-fittext';
import Loader from '../shared/Loader.jsx';
import marked from 'marked';
import React, { Fragment } from 'react';
import ReactHtmlParser from 'react-html-parser';
import ReactGA from 'react-ga';
import styled, { css, keyframes } from 'styled-components';
import SubHed from './SubHed.jsx';

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

const OuterContainer = styled.div`
  display: ${p => p.tempContentIsOn ? 'none' : 'block'};
  // The double animation prop works b/c heartbeat runs three times on load, then stops. It then
  // effectively 'goes away' because p.heartbeat is false. The blur in keyframes is then used when 
  // a background change is triggered. This wouldn't work if the two were set to run 
  // simultaneously — the second would overwrite the first.
  ${p => p.heartbeat && css`animation: 1.1s .17s ease-in-out ${heartbeatKeyframes} 3 both`};
  ${p => p.castSpell && css`animation: ${blurInKeyframes} ${!p.inCity ? '1.52s' : '1.5s'} cubic-bezier(0.550, 0.085, 0.680, 0.530) both`};
  pointer-events: ${p => p.castSpell && 'none'};
  text-align: center;
  z-index: 2;
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
  cursor: pointer;
  
  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    margin-top: -17px;
  }

  ::selection {
    background-color: transparent;
  }
`;
const InnerContainer = styled.div`
  opacity: ${p => p.fadeIn || p.nowShowing || p.castSpell ? '1' : '.1'};
  display: ${p => p.isCasting && !p.castSpell ? 'none' : 'block'};
  transition: opacity .18s ease-in-out;
`;
const Pitch = styled.section`
  overflow: auto;
  z-index: 2;
  
  p {
    font-weight: 500;
    margin-left: 1.7em;
    margin-bottom: 10px;
    color: ${p => p.theme.colors.black};
    text-shadow: 1.5px 1px 2px white;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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

  const eventHandler = () => {
    if (finishedHomePageLoad) {
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
    }
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
      <OuterContainer
        castSpell={castSpell} // For text blur
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
        <FitText
          compressor={1.154}
        >
          <Hed
            onClick={eventHandler}
          >
            {name}
          </Hed>
        </FitText>
        <InnerContainer
          tempContentIsOn={showBusinessCard || showLegalTerms}
          fadeIn={fadeIn}
          isCasting={isCasting}
          castSpell={castSpell}
          nowShowing={nowShowing === '' || nowShowing === 'bioText'}
          onTransitionEnd={() => resetFadeIn()}
        >
          <FitText
            compressor={2.3}
          >
            <SubHed
              marginLeft=".9em"
            >
              {motto}
            </SubHed>
          </FitText>
          <Pitch
            isCasting={isCasting}
            castSpell={castSpell}
            finishedHomePageLoad={finishedHomePageLoad}
            tempContentIsOn={showBusinessCard || showLegalTerms}
          >
            <FitText
             compressor={2.5}
            >
              <Fragment>
                {ReactHtmlParser(
                  marked(
                    body,
                    { smartypants: true }
                  )
                )}
              </Fragment>
            </FitText>
          </Pitch>
        </InnerContainer>
        <Loader
          show={loadBoy || loadFantasy}
          done={finishedHomePageLoad}
        />
      </OuterContainer>
    </Fragment>
  );
}
