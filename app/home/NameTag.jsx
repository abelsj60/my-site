import home from '../data/home/home.md';
import dayjs from 'dayjs';
import eventManagement from '../helpers/eventManagement.js';
import getFontSize from '../helpers/getFontSize.js';
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
  ${p => p.heartbeat > 0 && p.heartbeat < 2 && css`animation: 1.15s .85s ease-in-out ${heartbeatKeyframes} 3 both`};
  ${p => p.spellLevel === 5 && css`animation: ${blurInKeyframes} ${!p.inCity ? '1.52s' : '1.5s'} cubic-bezier(0.550, 0.085, 0.680, 0.530) both`};
  transform: translate3d(1, 1, 1);
  pointer-events: ${p => p.spellLevel === 5 && 'none'};
  text-align: center;
  z-index: 2;
  // Set margin-top with spacer height to avoid a weird "jumping bug" when using spacer alone. While spacer says it's always on screen,
  // when in landscape, the browser thinks it's removed as it exits the spell. This caused my name to jump up and get cut off. 
  // We get the right result by positioning the element w/margin-top, and setting spacer to position: absolute (to cover the h1's excess space).
  margin-top: ${p => p.spacerHeight}px;
  ${p => p.nameTagWidth && `width: ${p.nameTagWidth}px`};
`;
const Spacer = styled.div`
  // This really isn't a spacer any more. It's position: absolute, so more of a coverPlate. It minimizes accidental clicks/touches above my 
  // name, which is an active onClick zone b/c the h1 has unintentional space above it. The OuterContainer positions itself w/margin-top.
  position: absolute;
  height: ${p => p.spacerHeight}px;
  width: 100%;
  z-index: 3;
`;
const Hed = styled.h1`
  font-family: 'Aref Ruqaa', serif;
  font-size: ${p => p.setFontSize}px;
  text-shadow: 2px 1.5px 5px black;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${p => p.theme.colors.yellow};
  font-weight: 700;
  line-height: 1;
  margin-top: -9px;
  margin-bottom: 10px;
  margin-left: 0px;
  cursor: pointer;
  user-select: none;
  // Use !p.homePageLoaded to limit opacity change to load sequence.
  opacity: ${p => !p.homePageLoaded && p.loadLevel < 1 ? '0' : '1'};
  transition: ${p => p.loadLevel < 2 && 'opacity .605s .095s ease-in-out'};

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    margin-top: -17px;
  }
`;
const InnerContainer = styled.div`
  display: ${p => p.spellLevel < 5 && ((p.enter && p.spellLevel >= 2) || (p.exit && p.spellLevel > 2)) ? 'none' : 'block'};
  width: 100%;
  // Remember, opacity brings the component into view IF display: block is set one spellLevel sooner. 
  // Why? The element must exist in DOM to transition. This technique is used several times...
  opacity: ${p => (!p.homePageLoaded && p.loadLevel < 2) || (p.spellLevel < 5 && (p.enter && p.spellLevel >= 1) || (p.exit && p.spellLevel > 1)) ? '0' : '1'};
  // Compared to <Hed />, this element's initial fade-in looks best when it starts later, runs faster, and uses a different bezier curve.
  // Transition settings for the spell should match NameTag/InnerContainer's transition property.
  transition: opacity ${p => p.loadLevel < 3 ? '.605s .095s' : p.enter ? '.45s' : '.65s'} ease-in-out;
`;
const Pitch = styled.section`
  overflow: auto;
  margin: 10px 0px;
  z-index: 2;

  p {
    font-size: ${p => p.setFontSize}px;
    font-weight: 500;
    margin-left: 1.8em;
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
    setSpellLevel
  } = props;
  const {
    homePageLoaded,
    heartbeat,
    nameTagWidth,
    spacerHeight,
    tempContent
  } = appState;
  const {
    eventType,
    loadLevel,
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

  const handleClickForHed = event => {
    eventManagement(event);

    // Heartbeat ends at 3, set in PictureBox.onTransitionEndForBlurredBoy
    if (homePageLoaded && heartbeat > 1 && (spellLevel === 0 || spellLevel === 4)) {
      if (eventType === 'touch') {
        boundHandleClickForHome('resetEventType');
        return false;
      }
  
      if (process.env.NODE_ENV !== 'development') {
        ReactGA.event({
          category: 'Home state',
          action: `Spell toggled: ${spellLevel === 0 ? 'off' : 'on'}`,
          value: score
        });
      }

      boundHandleClickForHome('toggleSpell');
    }
  };
  const handleAnimationEndForHeartbeat = event => {
    eventManagement(event);
    // ClickHandling, set to 2
    boundHandleClickForApp('updateHeartbeat');
    // Only runs if heartbeat = 0, so no check is needed!
    localStorage.lastHeartbeat = dayjs().format();
  };
  const handleTransitionEndForInnerContainer = event => {
    eventManagement(event);
    // Use conditional if InnerContainer set to position: absolute
    // Don't need it when dispaly: none is used instead.
    if (spellLevel === 1) { 
      setSpellLevel.two(movement === 'enter', 'InnerContainer');
      setSpellLevel.reset(movement === 'exit', 'InnerContainer');
    }
  };

  return (
    <Fragment>
      <Spacer
        spacerHeight={spacerHeight}
      />
      <OuterContainer
        // Works better w/o: ' hardware-accelerate-w-transform'
        className={'hardware-accelerate'}
        heartbeat={heartbeat}
        nameTagWidth={nameTagWidth}
        onAnimationEnd={handleAnimationEndForHeartbeat}
        spacerHeight={spacerHeight}
        spellLevel={spellLevel}
        tempContent={tempContent}
      >
        <Hed
          setFontSize={getFontSize(nameTagWidth, 1.154)}
          homePageLoaded={homePageLoaded}
          loadLevel={loadLevel}
          onClick={handleClickForHed}
        >
          {name}
        </Hed>
        <InnerContainer
          enter={movement === 'enter'}
          exit={movement === 'exit'}
          homePageLoaded={homePageLoaded}
          loadLevel={loadLevel}
          onTransitionEnd={handleTransitionEndForInnerContainer}
          spellLevel={spellLevel}
        >
          <SubHed
            marginLeft="1em"
            setFontSize={getFontSize(nameTagWidth, 3.15)}
          >
            {motto}
          </SubHed>
          <Pitch
            setFontSize={getFontSize(nameTagWidth, 5)}
          >
            <Fragment>
              {ReactHtmlParser(marked(
                body, { smartypants: true }
              ))}
            </Fragment>
          </Pitch>
        </InnerContainer>
        <Loader
          done={homePageLoaded}
          marginBottom="7"
          show={loadLevel < 2}
        />
      </OuterContainer>
    </Fragment>
  );
}
