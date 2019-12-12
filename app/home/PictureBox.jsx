import bio from '../data/home/home.md';
import BlurredNycBackground from './BlurredNycBackground.jsx'
import BoyForeground from './BoyForeground.jsx';
import BlurredBoyForeground from './BlurredBoyForeground.jsx';
import BlurredForrestBackground from './BlurredForrestBackground.jsx';
import eventManagement from '../helpers/eventManagement.js';
import ForrestBackground from './ForrestBackground.jsx';
import ForrestFallback from '../../docs/assets/images/convert-to-data-uri/forrest-ink-50x50-53.png';
import { isSafari } from 'react-device-detect';
import NycBackground from './NycBackground.jsx';
import NycFallback from '../../docs/assets/images/convert-to-data-uri/nyc-ink-50x50-53.png';
import offlineImageToggle from '../helpers/offlineImageToggle.js';
import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';

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
  ${p => p.homePageLoaded && !p.isMobile && !p.offline && 'display: none;'}
  position: absolute;
  background-color: rgba(115, 192, 232);
  // May need to fill page: https://stackoverflow.com/a/30794589
  height: 100%;
  width: 100%;
  will-change: opacity;
  opacity: ${p => p.offline || (!p.homePageLoaded && p.loadLevel === 1) || (p.homePageLoaded && p.loadLevel < 1) ? '.2' : '0'};
  ${p => !p.offline && css`transition: opacity ${!p.homePageLoaded ? '.7s' : '.25s'} ease-in-out`}};
  z-index: 5;
`;
const FallbackImage = styled.img`
  // Don't show on desktop once homePageLoaded. Note: This won't catch iPadOS.
  ${p => p.homePageLoaded && !p.isMobile && !p.offline && 'display: none;'}
  position: absolute;
  object-fit: cover;
  font-family: 'object-fit: cover;';
  // May need to fill page: https://stackoverflow.com/a/30794589
  height: 100%;
  width: 100%;
  will-change: opacity;
  opacity: ${p => p.offline || (!p.homePageLoaded && p.loadLevel === 1) || (p.homePageLoaded && p.loadLevel < 1) ? '1' : '0'};
  // Transition settings need to be matched (in total) by NameTag/InnerContainer and Header/Nav.
  ${p => !p.offline && css`transition: opacity ${!p.homePageLoaded ? '.7s' : '.25s'} ease-in-out`};
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
    loadLevelsCacheForIE,
    setLoadLevels,
    setSpellLevel,
    sumLoadLevels
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

  const offlineTarget = type === 'mobile' ? 5 : 4; // Always update if updating Home.updateLoadLevel()!
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
    eventManagement(event);

    if (spellLevel < 1) {
      const documentStyle = window.document.body ? window.document.body.style : window.document.documentElement.style;
      const hasObjectFit = documentStyle.objectFit === '';

      if (
        !hasObjectFit &&
          (!event.propertyName && loadLevelsCacheForIE[idx] > 0) // onLoad has no propertyName
            || (event.propertyName && loadLevelsCacheForIE === 1) // onTransitionEnd has propertyName
      ) {
        /* The object-fit polyfill:
  
          The object-fit polyfill invokes the same listeners as our image element, immediately afterwards. 
          This throws the load process into disarray. So we use the loadLevelsCacheForIE to ensure we only 
          increment our values once per event listener. So, we'll first check the cache, then, after 
          calling setState, increment it (otherwise, we'll be testing too soon). This allows us to reject 
          the handler on the next pass (yes, we're accepting the first eventListener, which is probably 
          the Image element, not the background image that's used by our polyfill). 

          Remember: We need to increment our cache once for onLoad and once for onTransitionEnd. We do 
          this by checking for event.propertyName, which only onTransitionEnd will have...

          Note: The cache is stored on 'this' in Home, so it can reset whenever the user travels home! 
        */

        return false; // Already gotcha!
      }

      setLoadLevels(idx);

      if (!hasObjectFit && loadLevelsCacheForIE[idx] < 1) {
        /* Let's talk about our cache values:

          1. We set the cache to one from zero onLoad. Great. But...
          2. We really ought to increment it to 2 after onTransitionEnd, but as it stands,
            we're ok b/c we don't allow the loadLevels to exceed three in, Home and b/c 
            nothing happens when incrementing over two anyway.
              -Truly, though, this is less than ideal. Kinda misleading. 
        */

        loadLevelsCacheForIE[idx] = 1; // Set it, then forget it!
      }
    }
  };
  const setSpellLevelNow = (event, component) => {
    eventManagement(event);

    if (spellLevel > 0) {
      setSpellLevel.three(movement === 'enter', component);
      setSpellLevel.one(movement === 'exit', component);
    }
  };
  const handleLoadForFallback = event => setLoadLevelsNow(event, 0);
  const handleLoadForBlurredBoy = event => setLoadLevelsNow(event, 1);
  const handleLoadForBlurredForrest = event => setLoadLevelsNow(event, 2);
  const handleLoadForBlurredNyc = event => setLoadLevelsNow(event, 3);
  const handleLoadForBoy = event => setLoadLevelsNow(event, 4);
  const handleLoadForForrest = event => setLoadLevelsNow(event, 5);
  const handleLoadForNyc = event => setLoadLevelsNow(event, 6);
  const handleTransitionEndForFallback = event => setLoadLevelsNow(event, 0);
  // Uses closure for extra params...
  const handleTransitionEndForBlurredForrestAndNyc = component => event => setSpellLevelNow(event, component);
  // Toggles spell after transform transition, uses closure for extra params...
  const handleTransitionEndForForrestAndNyc = (penultimateLevel, isActive) => event => {
    eventManagement(event);

    if (event.propertyName === 'transform') {
      if (penultimateLevel && isActive) {
        boundHandleClickForHome('toggleSpell', event.propertyName);
      }
    }
  };

  return (
    <PictureHolder>
      <Fragment>
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
      </Fragment>
      {type === 'mobile' && spellLevel > 0 && spellLevel < 5 && (
        <BlurredBoyForeground
          alt={altTextBoyBlurred}
          enter={movement === 'enter'}
          exit={movement === 'exit'}
          onLoad={handleLoadForBlurredBoy}
          spellLevel={spellLevel}
          src={blurredBoySrc}
        />
      )}
      <BoyForeground
        alt={altTextBoy}
        homePageLoaded={homePageLoaded}
        isMobile={type === 'mobile'}
        isSafari={isSafari}
        loadLevel={loadLevel}
        onLoad={handleLoadForBoy}
        src={bigBoySrc}
      />
      {spellLevel > 0  && spellLevel < 5 && !inCity && (
        <BlurredForrestBackground
          alt={altTextForrestBlurred}
          enter={movement === 'enter'}
          exit={movement === 'exit'}
          inCity={inCity}
          onLoad={handleLoadForBlurredForrest}
          onTransitionEnd={handleTransitionEndForBlurredForrestAndNyc('BlurredForrest')}
          spellLevel={spellLevel}
          src={blurredForrestSrc}
        />
      )}
      {(!inCity || (inCity && spellLevel > 0)) && (
        <ForrestBackground
          alt={altTextForrest}
          homePageLoaded={homePageLoaded}
          inCity={inCity}
          loadLevel={loadLevel}
          onLoad={handleLoadForForrest}
          // Toggle state of spell after swapping backgrounds (uses closure, so invocation OK)
          onTransitionEnd={handleTransitionEndForForrestAndNyc(spellLevel > 4, inCity)}
          spellLevel={spellLevel}
          src={bigForrestSrc}
        />
      )}
      {spellLevel > 0  && spellLevel < 5 && inCity && (
        <BlurredNycBackground
          alt={altTextNycBlurred}
          enter={movement === 'enter'}
          exit={movement === 'exit'}
          inCity={inCity}
          onLoad={handleLoadForBlurredNyc}
          onTransitionEnd={handleTransitionEndForBlurredForrestAndNyc('BlurredNyc')}
          spellLevel={spellLevel}
          src={blurredNycSrc}
        />
      )}
      {(inCity || (!inCity && spellLevel > 0)) && (
        <NycBackground
          alt={altTextNyc}
          homePageLoaded={homePageLoaded}
          inCity={inCity}
          onLoad={handleLoadForNyc}
          // Toggle state of spell after swapping backgrounds (uses closure, so invocation OK)
          onTransitionEnd={handleTransitionEndForForrestAndNyc(spellLevel > 4, !inCity)}
          spellLevel={spellLevel}
          src={bigNycSrc}
        />
      )}
    </PictureHolder>
  );
}
