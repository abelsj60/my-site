import bio from '../data/home/home.md';
import BlurredNycBackground from './BlurredNycBackground.jsx'
import BoyForeground from './BoyForeground.jsx';
import BlurredBoyForeground from './BlurredBoyForeground.jsx';
import BlurredForrestBackground from './BlurredForrestBackground.jsx';
import NycBackground from './NycBackground.jsx';
import eventManagement from '../helpers/eventManagement.js';
import ForrestBackground from './ForrestBackground.jsx';
import ForrestFallback from '../../docs/assets/images/convert-to-data-uri/forrest-ink-50x50-53.png';
import NycFallback from '../../docs/assets/images/convert-to-data-uri/nyc-ink-50x50-53.png';
import React, { Fragment } from 'react';
import styled from 'styled-components';

const mobileTransitionValues = 'opacity .15s ease-out';
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
  // Note, 11/9/19: This won't catch iPadOS, but the behvior that
  // requires the white sheet may not be present, either. So...
  ${p => !p.isMobile && 'display: none;'}
  position: absolute;
  background-color: rgba(115, 192, 232, .2);
  z-index: ${p => p.zIndex};
  // May need to fill page:   
  // https://stackoverflow.com/a/30794589
  height: 100%;
  width: 100%;
  opacity: ${p => p.homePageLoaded && p.loadLevelFull <= 1 ? 1 : 0};
  transition: ${mobileTransitionValues};
`;
const FallbackImage = styled.img`
  // Note, 11/9/19: This won't catch iPadOS, but the behvior that
  // requires the white sheet may not be present, either. So...
  ${p => !p.isMobile && 'display: none;'}
  position: absolute;
  object-fit: cover;
  font-family: 'object-fit: cover;';
  z-index: ${p => p.zIndex};
  // May need to fill page:   
  // https://stackoverflow.com/a/30794589
  height: 100%;
  width: 100%;
  opacity: ${p => p.homePageLoaded && p.loadLevelFull <= 1 ? 1 : 0};
  transition: ${mobileTransitionValues};
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
    boundHandleClickForApp,
    homeState,
    setSpellLevels,
    setLoadLevels
  } = props;
  const {
    homePageLoaded,
    images,
    inCity,
    type
  } = appState;
  const {
    spellLevel,
    loadLevel,
    movement
  } = homeState;

  const bigBoySrc = images[imageNames[0]].src;
  const blurredBoySrc = images[imageNames[1]].src;
  const bigForrestSrc = images[imageNames[2]].src;
  const blurredForrestSrc = images[imageNames[3]].src;
  const bigNycSrc = images[imageNames[4]].src;
  const blurredNycSrc = images[imageNames[5]].src;
  const fallbackSource = !inCity ? ForrestFallback : NycFallback; 
  const altTextForFallback = !inCity ? altTextForrestFallback : altTextNycFallback; 

  const onLoadTwo = event => {
    eventManagement(event);
    setLoadLevels.two();
  }
  const onLoadSix = event => {
    eventManagement(event);
    setLoadLevels.six();
  }
  const onLoadForBlurredBoy = event => {
    eventManagement(event);
    setLoadLevels.one();
  };
  const onLoadForBoy = event => {
    eventManagement(event);
    // Delay ensures (?!) full paint-to-screen ???
    setTimeout(() => setLoadLevels.five(), 500);
  };
  const onLoadForBlurredForrest = event => {
    if (spellLevel < 1) {
      onLoadTwo(event);
    }
  };
  const onLoadForFantasy = event => {
    if (spellLevel < 1) {
      onLoadSix(event);
    }
  };
  const onLoadForBlurredNyc = event => {
    if (spellLevel < 1) {
      onLoadTwo(event);
    }
  };
  const onLoadForCity = event => {
    if (spellLevel < 1) {
      onLoadSix(event);
    }
  };
  const onTransitionEndForBlurredBoy = event => {
    eventManagement(event);
    setLoadLevels.three();
    if (setLoadLevels.sum().all === 6) {
      // ClickHandling, set to 2 and homePageLoaded = true
      boundHandleClickForApp('updateHeartbeat');
    }
  };
  const onTransitionEndForBlurredForrest = event => {
    eventManagement(event);
    setLoadLevels.four();
    setSpellLevels.three(movement === 'enter', 'BlurredForrest');
    setSpellLevels.one(movement === 'exit', 'BlurredForrest');
  };
  const onTransitionEndForBlurredNyc = event => {
    eventManagement(event);
    setSpellLevels.three(movement === 'enter', 'BlurredNyc');
    setSpellLevels.one(movement === 'exit', 'BlurredNyc');
  };
  // Trigger toggle after we swap backgrounds
  // Requires a closure to pass all params
  const onTransitionEndForForrestAndNycBackgroundImages = (penultimateSpellLevel, activeBackground) => event => {
      eventManagement(event);

      if (penultimateSpellLevel && activeBackground && event.propertyName === 'transform') {
        boundHandleClickForHome('toggleSpell', event.propertyName);
      }
    };

  return (
    <PictureHolder>
      <Portal 
        alt=""
        homePageLoaded={homePageLoaded}
        isMobile={type === 'mobile'} // See above note
        loadLevelFull={setLoadLevels.sum().full}
        zIndex="5"
      />
      <FallbackImage 
        alt={altTextForFallback}
        src={fallbackSource}
        homePageLoaded={homePageLoaded}
        isMobile={type === 'mobile'} // See above note
        loadLevelFull={setLoadLevels.sum().full}
        zIndex="4"
      />
      <BlurredBoyForeground
        alt={altTextBoyBlurred}
        enter={movement === 'enter'}
        exit={movement === 'exit'}
        homePageLoaded={homePageLoaded}
        loadLevelBlurs={setLoadLevels.sum().blurs}
        loadLevelAll={setLoadLevels.sum().all}
        onLoad={onLoadForBlurredBoy}
        onTransitionEnd={onTransitionEndForBlurredBoy}
        spellLevel={spellLevel}
        src={blurredBoySrc}
      />
      <BoyForeground
        alt={altTextBoy}
        enter={movement === 'enter'}
        exit={movement === 'exit'}
        homePageLoaded={homePageLoaded}
        loadLevelAll={setLoadLevels.sum().all}
        onLoad={onLoadForBoy}
        spellLevel={spellLevel}
        src={bigBoySrc}
      />
      {(!inCity || (inCity && spellLevel > 0)) &&
        <Fragment>
          <BlurredForrestBackground
            alt={altTextForrestBlurred}
            enter={movement === 'enter'}
            exit={movement === 'exit'}
            homePageLoaded={homePageLoaded}
            inCity={inCity}
            loadLevelAll={setLoadLevels.sum().all}
            loadLevelBlurs={setLoadLevels.sum().blurs}
            loadLevelFantasy={loadLevel[3] > 0}
            onLoad={onLoadForBlurredForrest}
            onTransitionEnd={onTransitionEndForBlurredForrest}
            spellLevel={spellLevel}
            src={blurredForrestSrc}
          />
          <ForrestBackground
            alt={altTextForrest}
            homePageLoaded={homePageLoaded}
            inCity={inCity}
            loadLevelAll={setLoadLevels.sum().all}
            onLoad={onLoadForFantasy}
            // Trigger toggle after backgrounds are swapped
            onTransitionEnd={onTransitionEndForForrestAndNycBackgroundImages(spellLevel > 4, inCity)}
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
            onLoad={onLoadForBlurredNyc}
            onTransitionEnd={onTransitionEndForBlurredNyc}
            spellLevel={spellLevel}
            src={blurredNycSrc}
          />
          <NycBackground
            alt={altTextNyc}
            inCity={inCity}
            onLoad={onLoadForCity}
            // Trigger toggle after backgrounds are swapped
            onTransitionEnd={onTransitionEndForForrestAndNycBackgroundImages(spellLevel > 4, !inCity)}
            spellLevel={spellLevel}
            src={bigNycSrc}
          />
        </Fragment>
      }
    </PictureHolder>
  );
}
