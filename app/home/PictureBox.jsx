import bio from '../data/home/home.md';
import BlurredNycBackground from './BlurredNycBackground.jsx'
import BoyForeground from './BoyForeground.jsx';
import BlurredBoyForeground from './BlurredBoyForeground.jsx';
import BlurredForrestBackground from './BlurredForrestBackground.jsx';
import NycBackground from './NycBackground.jsx';
import eventManagement from '../helpers/eventManagement.js';
import ForrestBackground from './ForrestBackground.jsx';
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
const WhiteSheet = styled.div`
  ${p => !p.isMobile && 'display: none;'}
  position: absolute;
  background-color: ${p => p.theme.colors.white};
  z-index: ${p => p.zIndex};
  // May need to fill page:   
  // https://stackoverflow.com/a/30794589
  height: 100%;
  width: 100%;
  opacity: ${p => p.homePageLoaded && p.loadLevelFull <= 1 ? 1 : 0};
  transition: opacity .25s ease-out;
`;

export default function PictureBox(props) {
  const {
    descriptionBoy,
    descriptionFantasy,
    descriptionCity,
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
    setLoadLevels.five();
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
  const onTransitionEndForBackgroundImages =
    (penultimateSpellLevel, activeBackground) => event => {
      eventManagement(event);

      if (penultimateSpellLevel && activeBackground && event.propertyName === 'transform') {
        boundHandleClickForHome('toggleSpell', event.propertyName);
      }
    };

  return (
    <PictureHolder>
      <WhiteSheet
        homePageLoaded={homePageLoaded}
        isMobile={type === 'mobile'}
        loadLevelFull={setLoadLevels.sum().full}
        zIndex="4"
        stay={true}
      />
      <BlurredBoyForeground
        alt={descriptionBoy}
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
        alt={descriptionBoy}
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
            alt={descriptionFantasy}
            homePageLoaded={homePageLoaded}
            inCity={inCity}
            loadLevelAll={setLoadLevels.sum().all}
            onLoad={onLoadForFantasy}
            // Trigger toggle after backgrounds are swapped
            onTransitionEnd={onTransitionEndForBackgroundImages(spellLevel > 4, inCity)}
            spellLevel={spellLevel}
            src={bigForrestSrc}
          />
        </Fragment>
      }
      {(inCity || (!inCity && spellLevel > 0)) && 
        <Fragment>
          <BlurredNycBackground
            alt=""
            enter={movement === 'enter'}
            exit={movement === 'exit'}
            inCity={inCity}
            onLoad={onLoadForBlurredNyc}
            onTransitionEnd={onTransitionEndForBlurredNyc}
            spellLevel={spellLevel}
            src={blurredNycSrc}
          />
          <NycBackground
            alt={descriptionCity}
            inCity={inCity}
            onLoad={onLoadForCity}
            // Trigger toggle after backgrounds are swapped
            onTransitionEnd={onTransitionEndForBackgroundImages(spellLevel > 4, !inCity)}
            spellLevel={spellLevel}
            src={bigNycSrc}
          />
        </Fragment>
      }
    </PictureHolder>
  );
}
