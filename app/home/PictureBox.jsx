import bio from '../data/home/home.md';
import BlurredNycBackground from './BlurredNycBackground.jsx'
// import BoyForeground from './BoyForeground.jsx';
import BlurredBoyForeground from './BlurredBoyForeground.jsx';
import BlurredForrestBackground from './BlurredForrestBackground.jsx';
import eventManagement from '../helpers/eventManagement.js';
// import ForrestBackground from './ForrestBackground.jsx';
import ForrestFallback from '../../docs/assets/images/convert-to-data-uri/forrest-ink-50x50-53.png';
import NycBackground from './NycBackground.jsx';
import NycFallback from '../../docs/assets/images/convert-to-data-uri/nyc-ink-50x50-53.png';
import offlineImageToggle from '../helpers/offlineImageToggle.js';
import React, { Fragment } from 'react';
import styled from 'styled-components';
import urlPrefix from '../helpers/urlPrefix';

const BoyForeground = styled.img`
  position: absolute;
  display: block;
  object-fit: cover; // Use if using <img>
  font-family: 'object-fit: cover;';
  // Scale image to fully fit element: https://stackoverflow.com/a/28439444
  width: 100%;
  height: 100%;
  pointer-events: none;
  // Only hidden during the initial stages of the load. It's always visible thereafter. 
  // Never transition it in, its entrance is hidden by the fallback image.
  // opacity: ${p => !p.homePageLoaded && p.loadLevel < 2 ? '0' : '1'};
  z-index: 2;
`;
const ForrestBackground = styled.img`
  position: absolute;
  display: block;
  object-fit: cover;
  // font-family: 'object-fit: cover;';
  // Scale image to fully fit element
  // https://stackoverflow.com/a/28439444
  width: 100%;
  height: 100%;
  pointer-events: none;
  // With luck, will-change will transform image to bitmap for smoother transforms.
  // Takes a beat, so may not be done in practice before first transition...
  // Added anyway.
  ${p => p.spellLevel > 0 && 'will-change: transform, opacity'};
  // Only hidden during the initial stages of the load. It's always visible thereafter. 
  // Only transition when casting spells (initial entrance hidden by fallback image).
  // Note: below is currently abandoned attempt to add a blur filter to the mix, it looks great, but: 
  //  a. It's hard to implement in an aesthetically pleasant way, and
  //  b. More important, it results in a currently unacceptable performance hit...
  //  -Will need to add to will-change and transition when adding it back.
  // ${p => !p.inCity && p.spellLevel > 0 && css`filter: blur(${p => p.spellLevel < 4 ? '40px' : '5px'})`};
  // opacity: ${p => ((!p.homePageLoaded && p.loadLevel < 2) || (p.homePageLoaded && p.inCity)) ? '0' : '1'}};
  opacity: ${p => ((p.homePageLoaded && p.inCity)) ? '0' : '1'}};
  transform: ${p => p.inCity ? 'scale(1.49)' : 'scale(1)'} translate3d(0, 0, 0);
  transform-origin: 50% ${p => p.inCity ? '-3%' : '-6%'};
  // Transition used for background swap. Opacity bezier curve should match that used by NycBackground.
  // Added a slight delay to both transitions to give the browser a second to breathe.
  // Also, mental note --> The cubic-bezier curve is the best. I tested extensively.
  transition: ${p => p.spellLevel > 0 && 'transform 1.75s, opacity 1.31s cubic-bezier(0.77, 0, 0.175, 1)'};
  z-index: ${p => !p.inCity && p.spellLevel <= 5 ? '0' : '-2'};
`;

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
  // opacity: ${p => p.offline || (!p.homePageLoaded && p.loadLevel === 1) || (p.homePageLoaded && p.loadLevel < 1) ? '1' : '0'};
  opacity: ${p => p.offline || (!p.homePageLoaded && p.loadLevel === 1) || (p.homePageLoaded && p.loadLevel < 1) ? '.1' : '0'};
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
  // opacity: ${p => p.offline || (!p.homePageLoaded && p.loadLevel === 1) || (p.homePageLoaded && p.loadLevel < 1) ? '1' : '0'};
  opacity: ${p => p.offline || (!p.homePageLoaded && p.loadLevel === 1) || (p.homePageLoaded && p.loadLevel < 1) ? '.1' : '0'};
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
    // imageNames
  } = bio.attributes;
  const {
    appState,
    boundHandleClickForHome,
    homeState,
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
  const imageArray = [];

  bio.attributes.preloadUrls.forEach(imgPath => {
    const filePrefix = imgPath.includes('boy')
      ? 'boy'
      : imgPath.includes('forrest')
        ? 'forrest'
        : 'nyc';
    let src;

    if (imgPath.includes('forrest') && !imgPath.includes('blur') && images.width >= 2880 && images.width <= 3000) {
      // Manually skip boy-...-2880.png b/c the next level seems to look a lot nicer on screen
      // File size is roughly comparable, so only wasting compute cycles. I'm OK with that.
      // src = `${urlPrefix}/${imgPath}/${filePrefix}-imc-main-101419-3000.png`; // original special boy img
      src = `${urlPrefix}/${imgPath}/${filePrefix}-imc-main-101419-q50-2880.jpg`;
    } else {
      if (imgPath.includes('blur')) {
        src = `${urlPrefix}/${imgPath}/${filePrefix}-ink-blur-0x15-160.${imgPath.includes('boy') ? 'png' : 'jpg'}`;
      } else {
        src = `${urlPrefix}/${imgPath}/${filePrefix}-imc-main-101419-${
          !imgPath.includes('boy')
            ? images.width < 2880 ? 'q90-' : 'q50-'
            : ''
        }${images.width}.${imgPath.includes('boy') ? 'png' : 'jpg'}`;
      }
    }

    imageArray.push(src);
  });

  const offlineTarget = type === 'mobile' ? 6 : 5;
  const isOffline = !homePageLoaded ? offline : offline && sumLoadLevels('all') < offlineTarget;
  const fallbackSource = !inCity ? ForrestFallback : NycFallback;
  const altTextForFallback = !inCity ? altTextForrestFallback : altTextNycFallback;
  const bigBoySrc = offlineImageToggle(isOffline, imageArray[0]);
  const blurredBoySrc = offlineImageToggle(isOffline, imageArray[1]);
  const bigForrestSrc = offlineImageToggle(isOffline, imageArray[2]);
  const blurredForrestSrc = offlineImageToggle(isOffline, imageArray[3]);
  const bigNycSrc = offlineImageToggle(isOffline, imageArray[4]);
  const blurredNycSrc = offlineImageToggle(isOffline, imageArray[5]);
  const setLoadLevelsNow = (event, idx) => {
    if (event !== null) {
      eventManagement(event);
    }

    console.log('setLoadLevelsNow:', idx);

    if (spellLevel < 1) {
      // if (!homePageLoaded && idx === 4) {
      //   console.log('setLoadLevelsNow: 0, 0, 4');
      //   setLoadLevels(4);
      //   setLoadLevels(0);
      //   setLoadLevels(0);
      // }

      setLoadLevels(idx);
    }
  };
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

  // console.log('loadLevels:', props.loadLevels);
  // console.log('loadLevel:', props.homeState.loadLevel);

  return (
    <PictureHolder>
      {((!homePageLoaded && loadLevel <= 2) || (homePageLoaded && loadLevel < 2)) && (
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
          {/*(!homePageLoaded && loadLevel < 1) && (
            <div
              style={{
                height: '100%',
                width: '100%',
                backgroundColor: 'white'
              }}
            >
            </div>
            )*/}
        </Fragment>
      )}
      {spellLevel > 0 && spellLevel < 5 && type === 'mobile' && (
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
        enter={movement === 'enter'}
        exit={movement === 'exit'}
        homePageLoaded={homePageLoaded}
        loadLevel={loadLevel}
        onError={() => consle.log('error in BoyForeground')}
        onLoad={handleLoadForBoy}
        spellLevel={spellLevel}
        // src={bigBoySrc}
        src={bigBoySrc}
      />
      {(!inCity || (inCity && spellLevel > 0)) && (
        <Fragment>
          {spellLevel > 0  && spellLevel < 5 && !inCity && (
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
          )}
          <ForrestBackground
            alt={altTextForrest}
            homePageLoaded={homePageLoaded}
            inCity={inCity}
            loadLevel={loadLevel}
            onError={() => consle.log('error in ForrestBackground')}
            onLoad={handleLoadForForrest}
            // Toggle state of spell after swapping backgrounds
            onTransitionEnd={handleTransitionEndForForrestOrNyc(spellLevel > 4, inCity, 'forrest')}
            spellLevel={spellLevel}
            src={bigForrestSrc}
            // src={blurredForrestSrc}
          />
        </Fragment>
      )}
      {(inCity || (!inCity && spellLevel > 0)) && 
        <Fragment>
          {spellLevel > 0  && spellLevel < 5 && inCity && (
            <BlurredNycBackground
              alt={altTextNycBlurred}
              enter={movement === 'enter'}
              exit={movement === 'exit'}
              inCity={inCity}
              onLoad={handleLoadForBlurredNyc}
              onTransitionEnd={handleTransitionEndForBlurredNyc}
              spellLevel={spellLevel}
              src={blurredNycSrc}
              // src={bigForrestSrc}
            />
          )}
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
