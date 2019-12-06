import bio from '../data/home/home.md';
import BlurredNycBackground from './BlurredNycBackground.jsx'
import BoyForeground from './BoyForeground.jsx';
import BlurredBoyForeground from './BlurredBoyForeground.jsx';
import BlurredForrestBackground from './BlurredForrestBackground.jsx';
import eventManagement from '../helpers/eventManagement.js';
import ForrestBackground from './ForrestBackground.jsx';
import ForrestFallback from '../../docs/assets/images/convert-to-data-uri/forrest-ink-50x50-53.png';
import NycBackground from './NycBackground.jsx';
import NycFallback from '../../docs/assets/images/convert-to-data-uri/nyc-ink-50x50-53.png';
import offlineImageToggle from '../helpers/offlineImageToggle.js';
import React, { Fragment } from 'react';
import styled from 'styled-components';

const PictureHolder = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  filter: ${p => p.theme.blurForTempContent && p.theme.blur};
  z-index: 1;
`;
const Portal = styled.div`
  // Don't show on desktop once homePageLoaded. Note: This won't catch iPadOS.
  ${p => p.homePageLoaded && !p.isMobile && 'display: none;'}
  position: absolute;
  background-color: rgba(115, 192, 232, .2);
  // May need to fill page: https://stackoverflow.com/a/30794589
  height: 100%;
  width: 100%;
  will-change: opacity;
  opacity: ${p => p.offline || (!p.homePageLoaded && p.loadLevel === 1) || (p.homePageLoaded && p.loadLevel < 1) ? '1' : '0'};
  transition: ${p => p.offline ? '' : `opacity ${!p.homePageLoaded ? '.7s' : '.25s'} ${!p.homePageLoaded ? 'ease-in-out' : 'ease-out'}`};
  z-index: 5;
`;
const FallbackImage = styled.img`
  // Don't show on desktop once homePageLoaded. Note: This won't catch iPadOS.
  ${p => p.homePageLoaded && !p.isMobile && 'display: none;'}
  position: absolute;
  object-fit: cover;
  font-family: 'object-fit: cover;';
  // May need to fill page: https://stackoverflow.com/a/30794589
  height: 100%;
  width: 100%;
  will-change: opacity;
  opacity: ${p => p.offline || (!p.homePageLoaded && p.loadLevel === 1) || (p.homePageLoaded && p.loadLevel < 1) ? '1' : '0'};
  // Transition settings need to be matched (in total) by NameTag/InnerContainer and Header/Nav.
  transition: ${p => p.offline ? '' : `opacity ${!p.homePageLoaded ? '.7s' : '.25s'} ${!p.homePageLoaded ? 'ease-in-out' : 'ease-out'}`};
  z-index: 4;
`;

export default function PictureBox(props) {
  const {
    altTextBoy,
    altTextBoyBlurred,
    altTextForrestFallback,
    altTextForrest,
    altTextForrestBlurred,
    altTextNyc,
    altTextNycBlurred,
    altTextNycFallback,
    imageNames
  } = bio.attributes;
  const {
    appState,
    boundHandleClickForHome,
    homeState,
    loadLevels,
    setLoadLevels,
    setSpellLevel,
    sumLoadLevels,
    timeoutIdForFallbackTransitionEnd
  } = props;
  const {
    homePageLoaded,
    images,
    inCity,
    offline,
    type
  } = appState;
  const {
    loadLevel,
    spellLevel,
    movement
  } = homeState;
  const offlineTarget = type === 'mobile' ? 6 : 5;
  const isOffline = !homePageLoaded ? offline : offline && sumLoadLevels('all') < offlineTarget;
  const bigBoySrc = offlineImageToggle(isOffline, images[imageNames[0]].src);
  const blurredBoySrc = offlineImageToggle(isOffline, images[imageNames[1]].src);
  const bigForrestSrc = offlineImageToggle(isOffline, images[imageNames[2]].src);
  const blurredForrestSrc = offlineImageToggle(isOffline, images[imageNames[3]].src);
  const bigNycSrc = offlineImageToggle(isOffline, images[imageNames[4]].src);
  const blurredNycSrc = offlineImageToggle(isOffline, images[imageNames[5]].src);
  const fallbackSource = !inCity ? ForrestFallback : NycFallback; 
  const altTextForFallback = !inCity ? altTextForrestFallback : altTextNycFallback; 

  const setLoadLevelsNow = (event, idx) => {
    if (event !== null) {
      eventManagement(event);
    }

    if (spellLevel < 1) {
      setLoadLevels(idx);
    }
  };
  console.log('lL:', props.homeState.loadLevel, props.loadLevels);
  const setSpellLevelNow = (event, type) => {
    eventManagement(event);

    if (spellLevel > 0) {
      setSpellLevel.three(movement === 'enter', type);
      setSpellLevel.one(movement === 'exit', type);
    }
  };
  const handleLoadForFallback = event => setLoadLevelsNow(event, 0);
  const handleLoadForBlurredBoy = event => setLoadLevelsNow(event, 1);
  const handleLoadForBlurredForrest = event => setLoadLevelsNow(event, 2);
  const handleLoadForBlurredNyc = event => setLoadLevelsNow(event, 3);
  const handleLoadForBoy = event => setLoadLevelsNow(event, 4);
  const handleLoadForForrest = event => setLoadLevelsNow(event, 5);
  const handleLoadForNyc = event => setLoadLevelsNow(event, 6);
  const handleTransitionEndForFallback = event => {
    eventManagement(event);
    /* Bug:

      setTimeout used to fix what I *believe* to be a weird Webkit bug. It seems that
      the ontransitionEnd event fires a little too fast somewhere along the way. The end
      result is that for every ten - 20 loads, the Fallback doesn't visibly transition, 
      rather it's unceremoniously dropped off screen. A delay of ~200 milliseconds 
      seems to fix the problem.
    */

    // timeoutIdForFallbackTransitionEnd.id used to cancel update when swapping locations early.
    timeoutIdForFallbackTransitionEnd.id = setTimeout(() => setLoadLevelsNow(null, 0), 200);
  };
  const handleTransitionEndForBlurredForrest = event => setSpellLevelNow(event, 'BlurredForrest');
  const handleTransitionEndForBlurredNyc = event => setSpellLevelNow(event, 'BlurredNyc');
  // Toggles spell after background swap, needs extra params --> use closure...
  const handleTransitionEndForForrestOrNyc = (penultimateLevel, isActive) => event => {
    const { propertyName } = event;

    eventManagement(event);

    if (propertyName === 'transform') {
      if (penultimateLevel && isActive) {
        boundHandleClickForHome('toggleSpell', propertyName);
      }
    }
  };
  return (
    <PictureHolder>
      <Portal
        homePageLoaded={homePageLoaded}
        isMobile={type === 'mobile'} // See Styled Component note
        loadLevel={loadLevel}
        offline={isOffline}
      />
      <FallbackImage 
        alt={altTextForFallback}
        src={fallbackSource}
        homePageLoaded={homePageLoaded}
        isMobile={type === 'mobile'} // See Styled Component note
        loadLevel={loadLevel}
        offline={isOffline}
        onLoad={handleLoadForFallback}
        onTransitionEnd={handleTransitionEndForFallback}
      />
      <BlurredBoyForeground
        alt={altTextBoyBlurred}
        enter={movement === 'enter'}
        exit={movement === 'exit'}
        onLoad={handleLoadForBlurredBoy}
        spellLevel={spellLevel}
        src={blurredBoySrc}
      />
      <BoyForeground
        alt={altTextBoy}
        enter={movement === 'enter'}
        exit={movement === 'exit'}
        homePageLoaded={homePageLoaded}
        loadLevel={loadLevel}
        onLoad={handleLoadForBoy}
        spellLevel={spellLevel}
        src={bigBoySrc}
      />
      {(!inCity || (inCity && spellLevel > 0)) &&
        <Fragment>
          <BlurredForrestBackground
            alt={altTextForrestBlurred}
            enter={movement === 'enter'}
            exit={movement === 'exit'}
            inCity={inCity}
            onLoad={handleLoadForBlurredForrest}
            onTransitionEnd={handleTransitionEndForBlurredForrest}
            spellLevel={spellLevel}
            src={blurredForrestSrc}
          />
          <ForrestBackground
            alt={altTextForrest}
            homePageLoaded={homePageLoaded}
            inCity={inCity}
            loadLevel={loadLevel}
            onLoad={handleLoadForForrest}
            // Toggle state of spell after swapping backgrounds
            onTransitionEnd={handleTransitionEndForForrestOrNyc(spellLevel > 4, inCity, 'forrest')}
            spellLevel={spellLevel}
            src={bigForrestSrc}
          />
        </Fragment>
      }
      {(inCity || (!inCity && spellLevel > 0)) && 
        <Fragment>
          <BlurredNycBackground
            alt={altTextNycBlurred}
            enter={movement === 'enter'}
            exit={movement === 'exit'}
            inCity={inCity}
            onLoad={handleLoadForBlurredNyc}
            onTransitionEnd={handleTransitionEndForBlurredNyc}
            spellLevel={spellLevel}
            src={blurredNycSrc}
          />
          <NycBackground
            alt={altTextNyc}
            homePageLoaded={homePageLoaded}
            inCity={inCity}
            onLoad={handleLoadForNyc}
            // Toggle state of spell after swapping backgrounds
            onTransitionEnd={handleTransitionEndForForrestOrNyc(spellLevel > 4, !inCity, 'city')}
            spellLevel={spellLevel}
            src={bigNycSrc}
          />
        </Fragment>
      }
    </PictureHolder>
  );
}
