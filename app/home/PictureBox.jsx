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
    cityImage,
    cityImageBlurred,
    descriptionBoy,
    descriptionFantasy,
    descriptionCity,
    preloadTheseImages
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
    finishedHomePageLoad,
    images,
    inCity
  } = appState;
  const {
    spellLevel,
    loadLevel,
    movement
  } = homeState;

  const imageNames = preloadTheseImages.map(name => name);
  const bigBoySrc = images[imageNames[0]].src;
  const bigFantasySrc = images[imageNames[2]].src;
  const blurredBoySrc = images[imageNames[1]].src;
  const blurredFantasySrc = images[imageNames[3]].src;

  const onLoadForBlurredBoy =
    event => {
      eventManagement(event);
      setLoadLevels.one()
    };
  const onLoadForBoy =
    event => {
      eventManagement(event);
      setLoadLevels.five()
    };
  const onLoadForBlurredFantasy =
    event => {
      eventManagement(event);
      setLoadLevels.two()
    };
  const onLoadForFantasy =
    event => {
      eventManagement(event);
      setLoadLevels.six()
    };
  const onTransitionEndForBlurredBoy =
    event => {
      eventManagement(event);
      setLoadLevels.three();
      if (setLoadLevels.sum().all === 6) {
        boundHandleClickForApp('updateHeartbeat'); // --> 1
      }
    };
  const onTransitionEndForBlurredFantasy =
    () => {
      eventManagement(event);
      setLoadLevels.four();
      setSpellLevels.three(movement === 'enter', 'BlurredFantasy');
      setSpellLevels.one(movement === 'exit', 'BlurredFantasy');
    };
  const onTransitionEndForBlurredCity =
    () => {
      eventManagement(event);
      setSpellLevels.three(movement === 'enter', 'BlurredCity');
      setSpellLevels.one(movement === 'exit', 'BlurredCity');
    };
  // Trigger toggle after we swap backgrounds
  // Requires a closure to pass all params...
  const onTransitionEndForBackgroundImages =
    (penultimateSpellLevel, activeBackground) => event => {
      eventManagement(event);

      if (
        penultimateSpellLevel // Psst. Second to last...
          && activeBackground
          && event.propertyName === 'transform'
      ) {
        boundHandleClickForHome('toggleSpell', event.propertyName);
      }
    };

  return (
    <PictureHolder>
      <BlurredBoyForeground
        finishedHomePageLoad={finishedHomePageLoad}
        enter={movement === 'enter'}
        exit={movement === 'exit'}
        loadLevelBlurs={setLoadLevels.sum().blurs}
        loadLevelAll={setLoadLevels.sum().all}
        spellLevel={spellLevel}
        src={blurredBoySrc}
        alt={descriptionBoy}
        onLoad={onLoadForBlurredBoy}
        onTransitionEnd={onTransitionEndForBlurredBoy}
      />
      <BoyForeground
        src={bigBoySrc}
        alt={descriptionBoy}
        loadLevelAll={setLoadLevels.sum().all}
        finishedHomePageLoad={finishedHomePageLoad}
        onLoad={onLoadForBoy}
      />
      {(!inCity || (inCity && spellLevel > 0)) &&
        <Fragment>
          <BlurredFantasyBackground
            src={blurredFantasySrc}
            finishedHomePageLoad={finishedHomePageLoad}
            inCity={inCity}
            enter={movement === 'enter'}
            exit={movement === 'exit'}
            spellLevel={spellLevel}
            loadLevelBlurs={setLoadLevels.sum().blurs}
            loadLevelAll={setLoadLevels.sum().all}
            loadLevelFantasy={loadLevel[3] > 0}
            onLoad={onLoadForBlurredFantasy}
            onTransitionEnd={onTransitionEndForBlurredFantasy}
          />
          <FantasyBackground
            inCity={inCity}
            finishedHomePageLoad={finishedHomePageLoad}
            src={bigFantasySrc}
            alt={descriptionFantasy}
            spellLevel={spellLevel}
            loadLevelAll={setLoadLevels.sum().all}
            onLoad={onLoadForFantasy}
            // Trigger toggle after backgrounds are swapped
            onTransitionEnd={onTransitionEndForBackgroundImages(spellLevel > 4, inCity)}
          />
        </Fragment>
      }
      {(inCity || (!inCity && spellLevel > 0)) && 
        <Fragment>
          <BlurredCityBackground
            src={cityImageBlurred}
            inCity={inCity}
            enter={movement === 'enter'}
            exit={movement === 'exit'}
            spellLevel={spellLevel}
            onTransitionEnd={onTransitionEndForBlurredCity}
          />
          <CityBackground
            inCity={inCity}
            spellLevel={spellLevel}
            src={cityImage}
            alt={descriptionCity}
            // Trigger toggle after backgrounds are swapped
            onTransitionEnd={onTransitionEndForBackgroundImages(spellLevel > 4, !inCity)}
          />
        </Fragment>
      }
    </PictureHolder>
  );
}
