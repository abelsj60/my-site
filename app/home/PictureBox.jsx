import bio from '../data/home/home.md';
import BlurredCityBackground from './BlurredCityBackground.jsx';
import BoyForeground from './BoyForeground.jsx';
import BlurredBoyForeground from './BlurredBoyForeground.jsx';
import BlurredFantasyBackground from './BlurredFantasyBackground.jsx';
import CityBackground from './CityBackground.jsx';
import eventManagement from '../helpers/eventManagement.js';
import FantasyBackground from './FantasyBackground.jsx';
import React, { Fragment } from 'react';
import styled from 'styled-components';

const PictureHolder = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 1;
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
    inCity
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

  const onLoadForBlurredBoy = event => {
    eventManagement(event);
    setLoadLevels.one();
  };
  const onLoadForBoy = event => {
    eventManagement(event);
    setLoadLevels.five();
  };
  const onLoadForBlurredFantasy = event => {
    eventManagement(event);
    setLoadLevels.two();
  };
  const onLoadForFantasy = event => {
    eventManagement(event);
    setLoadLevels.six();
  };
  const onTransitionEndForBlurredBoy = event => {
    eventManagement(event);
    setLoadLevels.three();
    if (setLoadLevels.sum().all === 6) {
      // Sets heartbeat = 1, homePageLoaded = true
      boundHandleClickForApp('updateHeartbeat');
    }
  };
  const onTransitionEndForBlurredFantasy = event => {
    eventManagement(event);
    setLoadLevels.four();
    setSpellLevels.three(movement === 'enter', 'BlurredFantasy');
    setSpellLevels.one(movement === 'exit', 'BlurredFantasy');
  };
  const onTransitionEndForBlurredCity = event => {
    eventManagement(event);
    setSpellLevels.three(movement === 'enter', 'BlurredCity');
    setSpellLevels.one(movement === 'exit', 'BlurredCity');
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
      {/* 'BlurredBoyFallback' */}
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
          {/* 'BlurredFantasyFallback' */}
          <BlurredFantasyBackground
            enter={movement === 'enter'}
            exit={movement === 'exit'}
            homePageLoaded={homePageLoaded}
            inCity={inCity}
            loadLevelAll={setLoadLevels.sum().all}
            loadLevelBlurs={setLoadLevels.sum().blurs}
            loadLevelFantasy={loadLevel[3] > 0}
            onLoad={onLoadForBlurredFantasy}
            onTransitionEnd={onTransitionEndForBlurredFantasy}
            spellLevel={spellLevel}
            src={blurredForrestSrc}
          />
          <FantasyBackground
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
          {/* 'BlurredCityFallback' */}
          <BlurredCityBackground
            alt=""
            enter={movement === 'enter'}
            exit={movement === 'exit'}
            inCity={inCity}
            onTransitionEnd={onTransitionEndForBlurredCity}
            spellLevel={spellLevel}
            src={blurredNycSrc}
          />
          <CityBackground
            alt={descriptionCity}
            inCity={inCity}
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
