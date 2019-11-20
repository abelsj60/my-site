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
  background-color: rgba(115, 192, 232, .3);
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
  const handleLoadForBlurredBoy = event => {
    eventManagement(event);
    setLoadLevels.set(0); // idx 0
  };
  const handleLoadForBlurredForrest = event => {
    eventManagement(event);
    if (spellLevel < 1) {
      setLoadLevels.set(1); // ...!inCity idx 1
    }
  };
  const handleLoadForBlurredNyc = event => {
    eventManagement(event);
    if (spellLevel < 1) {
      setLoadLevels.set(1); // inCity idx 1
    }
  };
  const handleLoadForBoy = event => {
    eventManagement(event);
    setLoadLevels.set(2); // idx 2
  };
  const handleLoadForForrest = event => {
    eventManagement(event);
    if (spellLevel < 1) {
      setLoadLevels.set(3); // idx 3
    }
  };
  const handleLoadForNyc = event => {
    eventManagement(event);
    if (spellLevel < 1) {
      setLoadLevels.set(3);  // idx 3
    }
  };
  const handleTransitionEndForBlurredBoy = event => {
    eventManagement(event);
    setLoadLevels.set(0); // idx 0
  };
  const handleTransitionEndForBlurredForrest = event => {
    eventManagement(event);
    setLoadLevels.set(1); // ...!inCity idx 0
    setSpellLevels.three(movement === 'enter', 'BlurredForrest');
    setSpellLevels.one(movement === 'exit', 'BlurredForrest');
  };
  const handleTransitionEndForBlurredNyc = event => {
    eventManagement(event);
    setSpellLevels.three(movement === 'enter', 'BlurredNyc');
    setSpellLevels.one(movement === 'exit', 'BlurredNyc');
  };
  // Toggles spell after background swap, adds params to handler via closure...
  const handleTransitionEndForForrestOrNyc = (penultimateSpell, isActive) => event => {
    eventManagement(event);
    if (event.propertyName === 'transform') {
      if (penultimateSpell && isActive) {
        boundHandleClickForHome('toggleSpell', event.propertyName);
      }
    }
  };

  return (
    <PictureHolder>
      <Portal 
        alt=""
        homePageLoaded={homePageLoaded}
        isMobile={type === 'mobile'}
        loadLevelFull={setLoadLevels.sum('full')}
        zIndex="5"
      />
      <FallbackImage 
        alt={altTextForFallback}
        src={fallbackSource}
        homePageLoaded={homePageLoaded}
        isMobile={type === 'mobile'}
        loadLevelFull={setLoadLevels.sum('full')}
        zIndex="4"
      />
      <BlurredBoyForeground
        alt={altTextBoyBlurred}
        enter={movement === 'enter'}
        exit={movement === 'exit'}
        homePageLoaded={homePageLoaded}
        loadLevelBlurs={setLoadLevels.sum('blurs')}
        loadLevelAll={setLoadLevels.sum('all')}
        onLoad={handleLoadForBlurredBoy}
        onTransitionEnd={handleTransitionEndForBlurredBoy}
        spellLevel={spellLevel}
        src={blurredBoySrc}
      />
      <BoyForeground
        alt={altTextBoy}
        enter={movement === 'enter'}
        exit={movement === 'exit'}
        homePageLoaded={homePageLoaded}
        loadLevelAll={setLoadLevels.sum('all')}
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
            homePageLoaded={homePageLoaded}
            inCity={inCity}
            loadLevelAll={setLoadLevels.sum('all')}
            loadLevelBlurs={setLoadLevels.sum('blurs')}
            loadLevelFantasy={loadLevel[3] > 0}
            onLoad={handleLoadForBlurredForrest}
            onTransitionEnd={handleTransitionEndForBlurredForrest}
            spellLevel={spellLevel}
            src={blurredForrestSrc}
          />
          <ForrestBackground
            alt={altTextForrest}
            homePageLoaded={homePageLoaded}
            inCity={inCity}
            loadLevelAll={setLoadLevels.sum('all')}
            onLoad={handleLoadForForrest}
            // Toggle after backgrounds are swapped
            onTransitionEnd={handleTransitionEndForForrestOrNyc(spellLevel > 4, inCity)}
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
            inCity={inCity}
            onLoad={handleLoadForNyc}
            // Toggle after backgrounds are swapped
            onTransitionEnd={handleTransitionEndForForrestOrNyc(spellLevel > 4, !inCity)}
            spellLevel={spellLevel}
            src={bigNycSrc}
          />
        </Fragment>
      }
    </PictureHolder>
  );
}
