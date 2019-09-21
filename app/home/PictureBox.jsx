import bio from '../data/home/home.md';
import BlurredCityBackground from './BlurredCityBackground.jsx';
import BoyForeground from './BoyForeground.jsx';
import BlurredBoyForeground from './BlurredBoyForeground.jsx';
import BlurredFantasyBackground from './BlurredFantasyBackground.jsx';
import CityBackground from './CityBackground.jsx';
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

  // Trigger toggle after we swap backgrounds
  // Requires a closure to pass all params...
  const regularBackgroundOnTransitionEndHandler =
    (penultimateSpellLevel, activeBackground) => event => {
      event.preventDefault();

      if (
        penultimateSpellLevel // Psst. Second to last...
          && activeBackground
          && event.propertyName === 'transform'
      ) {
        boundHandleClickForHome('toggleSpell', event.propertyName);
      }
    };
  const blurredBoyOnLoadHandler =
    () => setLoadLevels.one();
  const regularBoyOnLoadHandler =
    () => setLoadLevels.five();
  const blurredFantasyOnLoadHandler =
    () => setLoadLevels.two();
  const regularFantasyOnLoadHandler =
    () => setLoadLevels.six();
  const blurredBoyOnTransitionEndHandler =
    () => {
      setLoadLevels.three();
      if (setLoadLevels.sum().all === 6) {
        boundHandleClickForApp('updateHeartbeat'); // --> 1
      }
    };
  const blurredFantasyOnTransitionEndHandler =
    () => {
      setLoadLevels.four();
      setSpellLevels.three(movement === 'enter', 'BlurredFantasy');
      setSpellLevels.one(movement === 'exit', 'BlurredFantasy');
    };
  const blurredCityOnTransitionEndHandler =
    () => {
      setSpellLevels.three(movement === 'enter', 'BlurredCity');
      setSpellLevels.one(movement === 'exit', 'BlurredCity');
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
        onLoad={blurredBoyOnLoadHandler}
        onTransitionEnd={blurredBoyOnTransitionEndHandler}
      />
      <BoyForeground
        src={bigBoySrc}
        alt={descriptionBoy}
        loadLevelAll={setLoadLevels.sum().all}
        finishedHomePageLoad={finishedHomePageLoad}
        onLoad={regularBoyOnLoadHandler}
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
            onLoad={blurredFantasyOnLoadHandler}
            onTransitionEnd={blurredFantasyOnTransitionEndHandler}
          />
          <FantasyBackground
            inCity={inCity}
            finishedHomePageLoad={finishedHomePageLoad}
            src={bigFantasySrc}
            alt={descriptionFantasy}
            spellLevel={spellLevel}
            loadLevelAll={setLoadLevels.sum().all}
            onLoad={regularFantasyOnLoadHandler}
            // Trigger toggle after backgrounds are swapped
            onTransitionEnd={regularBackgroundOnTransitionEndHandler(spellLevel > 4, inCity)}
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
            onTransitionEnd={blurredCityOnTransitionEndHandler}
          />
          <CityBackground
            inCity={inCity}
            spellLevel={spellLevel}
            src={cityImage}
            alt={descriptionCity}
            // Trigger toggle after backgrounds are swapped
            onTransitionEnd={regularBackgroundOnTransitionEndHandler(spellLevel > 4, !inCity)}
          />
        </Fragment>
      }
    </PictureHolder>
  );
}
