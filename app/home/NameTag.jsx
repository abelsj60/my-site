import home from '../data/home/home.md';
import eventManagement from '../helpers/eventManagement.js';
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
  20% {
    transform: scale(1.04);
    animation-timing-function: ease-in;
  }
  29% {
    transform: scale(0.97);
    animation-timing-function: ease-out;
  }
  45% {
    transform: scale(1.05);
    animation-timing-function: ease-in;
  }
  55% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
`;

const OuterContainer = styled.div`
  display: ${p => p.tempContent > 0 ? 'none' : 'block'};
  will-change: ${p => p.heartbeat < 3 ? 'transform' : p.spellLevel === 5 ? 'filter, opacity' : ''};
  // The double animation prop works b/c heartbeat runs three times on load, then stops. It then
  // effectively 'goes away' because p.heartbeat is false. The blur in keyframes is then used when 
  // a background change is triggered. This wouldn't work if the two were set to run 
  // simultaneously — the second would overwrite the first.
  ${p => p.heartbeat > 0 && p.heartbeat < 3 && css`animation: 1.15s .85s ease-in-out ${heartbeatKeyframes} 3 both`};
  ${p => p.spellLevel === 5 && css`animation: ${blurInKeyframes} ${!p.inCity ? '1.52s' : '1.5s'} cubic-bezier(0.550, 0.085, 0.680, 0.530) both`};
  transform: translate3d(1, 1, 1);
  pointer-events: ${p => p.spellLevel === 5 && 'none'};
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
  user-select: none;
  // We rely on !p.finishedHomePageLoad to ensure the associated test only runs on initialLoad. It should not be considered thereafter.
  opacity: ${p => !p.finishedHomePageLoad && p.loadLevelBlurs < 2 ? '0' : '1'};
  transition: ${p => p.loadLevelAll < 6 && 'opacity 1s ease-in'};
  
  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    margin-top: -17px;
  }
`;
const InnerContainer = styled.div`
  display: ${p => p.spellLevel < 5 && ((p.enter && p.spellLevel >= 2) || (p.exit && p.spellLevel > 2)) ? 'none' : 'block'};
  transition: opacity ${p => p.loadLevelAll < 6 ? '.55s' : p.enter ? '.45s' : '.65s'} ease-in;
  opacity: ${p => (!p.finishedHomePageLoad && p.loadLevelAll < 6) || (p.spellLevel < 5 && (p.enter && p.spellLevel >= 1) || (p.exit && p.spellLevel > 1)) ? '0' : '1'};
`;
const Pitch = styled.section`
  overflow: auto;
  margin: 10px 0px;
  z-index: 2;
  
  p {
    font-weight: 500;
    margin-left: 1.7em;
    margin-bottom: 0px;
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
    setSpellLevels,
    setLoadLevels
  } = props;
  const {
    finishedHomePageLoad,
    heartbeat,
    nameTagWidth,
    spacerHeight,
    tempContent
  } = appState;
  const {
    eventType,
    movement,
    score,
    spellLevel
  } = homeState;
  const {
    attributes,
    body
  } = home;
  const {
    motto,
    name
  } = attributes;

  const onClickForHed = event => {
    eventManagement(event);
    // Heartbeat ends at 3, set in PictureBox.onTransitionEndForBlurredBoy
    if (finishedHomePageLoad && heartbeat > 2 && (spellLevel === 0 || spellLevel === 4)) {
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
  const onAnimationEndForHeartbeat = event => {
    eventManagement(event);
    boundHandleClickForApp('updateHeartbeat'); // --> 3
  };
  const onTransitionEndForInnerContainer = event => {
    eventManagement(event);
    setSpellLevels.two(movement === 'enter', 'InnerContainer');
    setSpellLevels.reset(movement === 'exit', 'InnerContainer');
  };

  return (
    <Fragment>
      <Spacer
        spacerHeight={spacerHeight}
      />
      <OuterContainer
        heartbeat={heartbeat}
        nameTagWidth={nameTagWidth}
        loadLevelAll={setLoadLevels.sum().all}
        onAnimationEnd={onAnimationEndForHeartbeat}
        spellLevel={spellLevel}
        tempContent={tempContent}
      >
        <FitText
          compressor={1.154}
        >
          <Hed
            finishedHomePageLoad={finishedHomePageLoad}
            loadLevelBlurs={setLoadLevels.sum().blurs}
            loadLevelAll={setLoadLevels.sum().all}
            onClick={onClickForHed}
          >
            {name}
          </Hed>
        </FitText>
        <InnerContainer
          enter={movement === 'enter'}
          exit={movement === 'exit'}
          finishedHomePageLoad={finishedHomePageLoad}
          loadLevelAll={setLoadLevels.sum().all}
          onTransitionEnd={onTransitionEndForInnerContainer}
          spellLevel={spellLevel}
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
          <Pitch>
            <FitText
             compressor={2.5}
            >
              <Fragment>
                {ReactHtmlParser(marked(
                  body, { smartypants: true }
                ))}
              </Fragment>
            </FitText>
          </Pitch>
        </InnerContainer>
        <Loader
          done={finishedHomePageLoad}
          marginBottom="7"
          show={setLoadLevels.sum().all < 6}
        />
      </OuterContainer>
    </Fragment>
  );
}
