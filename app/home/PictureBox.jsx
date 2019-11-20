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

const mobileTransitionValues = `opacity .15s ease-out`;
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
// Active ???
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
  // ${p => p.homePageLoaded && !p.isMobile && 'display: none;'}
  position: absolute;
  object-fit: cover;
  font-family: 'object-fit: cover;';
  z-index: ${p => p.zIndex};
  // May need to fill page:   
  // https://stackoverflow.com/a/30794589
  height: 100%;
  width: 100%;
  opacity: ${p => !p.homePageLoaded && p.loadLevelFallback > 0 && p.loadLevelAll < 6  ? '1' : '0'};
  transition: opacity ${p => !p.homePageLoaded ? p.loadLevelFallback > 1 ? '.55s ease-in' : '1s ease-out' : '.15s ease-out'};
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
    loadLevel,
    setSpellLevel
  } = props;
  const {
    homePageLoaded,
    images,
    inCity,
    type
  } = appState;
  const {
    spellLevel,
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

  const handleLoadForFallback = event => {
    eventManagement(event);
    loadLevel.set(0);
  }
  const handleLoadForBlurredBoy = event => {
    eventManagement(event);
    loadLevel.set(1)
  };
  const handleLoadForBlurredForrest = event => {
    eventManagement(event);
    if (spellLevel < 1) {
      loadLevel.set(2);
    }
  };
  const handleLoadForBlurredNyc = event => {
    eventManagement(event);
    if (spellLevel < 1) {
      loadLevel.set(3);
    }
  };
  const handleLoadForBoy = event => {
    eventManagement(event);
    loadLevel.set(4);
  };
  const handleLoadForForrest = event => {
    if (spellLevel < 1) {
      eventManagement(event);
      loadLevel.set(5);
    }
  };
  const handleLoadForNyc = event => {
    eventManagement(event);
    if (spellLevel < 1) {
      loadLevel.set(6);
    }
  };
  const handleTransitionEndForFallback = event => {
    eventManagement(event);
    loadLevel.set(0);
  }
  // const handleTransitionEndForBoy = event => {
  //   eventManagement(event);
  //   console.log('handleForBoy');
  //   loadLevel.set(4);
  // };
  // Toggle spell after background swap, add params to handler via closure...
  const handleTransitionEndForForrestOrNyc = (penultimateSpell, isActive, background) => event => {
    eventManagement(event);
    // loadLevel.set(background === 'forrest' ? 5 : 6);
    if (penultimateSpell && isActive && event.propertyName === 'transform') {
      boundHandleClickForHome('toggleSpell', event.propertyName);
    }
  };
  const handleTransitionEndForBlurredForrest = event => {
    eventManagement(event);
    setSpellLevel.three(movement === 'enter', 'BlurredForrest');
    setSpellLevel.one(movement === 'exit', 'BlurredForrest');
  };
  const handleTransitionEndForBlurredNyc = event => {
    eventManagement(event);
    setSpellLevel.three(movement === 'enter', 'BlurredNyc');
    setSpellLevel.one(movement === 'exit', 'BlurredNyc');
  };

  return (
    <PictureHolder>
      <Portal 
        alt=""
        homePageLoaded={homePageLoaded}
        isMobile={type === 'mobile'} // See above note
        // loadLevelFull={loadLevel.sum().full}
        zIndex="5"
      />
      <FallbackImage 
        alt={altTextForFallback}
        src={fallbackSource}
        homePageLoaded={homePageLoaded}
        isMobile={type === 'mobile'} // See above note
        loadLevelAll={loadLevel.sum('all')}
        loadLevelFallback={loadLevel.sum('fallback')}
        onLoad={handleLoadForFallback} // Sets to 1
        onTransitionEnd={handleTransitionEndForFallback} // Sets to 2
        // zIndex={!homePageLoaded ? 0 : 5}
        zIndex="4"
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
        loadLevelAll={loadLevel.sum('all')}
        loadLevelFallback={loadLevel.sum('fallback')}
        onLoad={handleLoadForBoy}
        // onTransitionEnd={handleTransitionEndForBoy}
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
            loadLevelAll={loadLevel.sum('all')}
            loadLevelFallback={loadLevel.sum('fallback')}
            onLoad={handleLoadForForrest}
            // Trigger toggle after backgrounds are swapped
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
            // Trigger toggle after backgrounds are swapped
            onTransitionEnd={handleTransitionEndForForrestOrNyc(spellLevel > 4, !inCity, 'city')}
            spellLevel={spellLevel}
            src={bigNycSrc}
          />
        </Fragment>
      }
    </PictureHolder>
  );
}
