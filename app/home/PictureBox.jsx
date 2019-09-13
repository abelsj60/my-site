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
    handleInitialLoad,
    homeState,
    setSpellLevels
  } = props;
  const {
    finishedHomePageLoad,
    images,
    inCity
  } = appState;
  const {
    isCasting,
    spellLevel,
    loadBoy,
    loadFantasy,
    movement
  } = homeState;

  const imageNames = preloadTheseImages.map(name => name);
  const bigBoySrc = images[imageNames[0]].src;
  const bigFantasySrc = images[imageNames[2]].src;
  const blurredBoySrc = images[imageNames[1]].src;
  const blurredFantasySrc = images[imageNames[3]].src;
  // Trigger toggle after castSpell transform
  const transitionHandler = function(event, penultimateSpellLevel, activeBackground) {
    event.preventDefault();

    if (
      penultimateSpellLevel
        && activeBackground
        && event.propertyName === 'transform'
    ) {
      boundHandleClickForHome('toggleSpell', event.propertyName);
    }
  }

  return (
    <PictureHolder>
      <BlurredBoyForeground
        isCasting={isCasting}
        boyIsLoading={loadBoy}
        fantasyIsLoading={loadFantasy}
        finishedHomePageLoad={finishedHomePageLoad}
        enter={movement === 'enter'}
        exit={movement === 'exit'}
        spellLevel={spellLevel}
        src={blurredBoySrc}
        alt={descriptionBoy}
        onLoad={() => handleInitialLoad('finishedLoadingBoy')}
      />
      <BoyForeground
        src={bigBoySrc}
        alt={descriptionBoy}
        boyIsLoading={loadBoy}
        fantasyIsLoading={loadFantasy}
        onLoad={() => handleInitialLoad('boy')}
      />
      {(!inCity || inCity && spellLevel > 0) &&
        <Fragment>
          <BlurredFantasyBackground
            src={blurredFantasySrc}
            finishedHomePageLoad={finishedHomePageLoad}
            boyIsLoading={loadBoy}
            fantasyIsLoading={loadFantasy}
            inCity={inCity}
            enter={movement === 'enter'}
            exit={movement === 'exit'}
            spellLevel={spellLevel}
            isCasting={isCasting}
            onTransitionEnd={() => {
              if (!finishedHomePageLoad) {
                handleInitialLoad('finishedLoadingFantasy');
              }

              if (movement === 'enter') {
                setSpellLevels.three();
              }

              if (movement === 'exit') {
                setSpellLevels.one();
              }
            }}
        />
        <FantasyBackground
          inCity={inCity}
          spellLevel={spellLevel}
          boyIsLoading={loadBoy}
          fantasyIsLoading={loadFantasy}
          src={bigFantasySrc}
          alt={descriptionFantasy}
          onLoad={() => handleInitialLoad('fantasy')}
          // Trigger toggle after castSpell transform
          onTransitionEnd={event => transitionHandler(
            event,
            spellLevel > 4,
            inCity
          )}
        />
      </Fragment>}
      {(inCity || !inCity && spellLevel > 0) && 
        <Fragment>
          <BlurredCityBackground
          src={cityImageBlurred}
          inCity={inCity}
          isCasting={isCasting}
          enter={movement === 'enter'}
          exit={movement === 'exit'}
          finishedHomePageLoad={finishedHomePageLoad} // better spot?
          spellLevel={spellLevel}
          onTransitionEnd={() => {
            if (!finishedHomePageLoad) {
              handleInitialLoad('finishedLoadingFantasy');
            }

            if (movement === 'enter') {
              setSpellLevels.three();
            }

            if (movement === 'exit') {
              setSpellLevels.one();
            }
          }}
        />
        <CityBackground
          inCity={inCity}
          spellLevel={spellLevel}
          src={cityImage}
          alt={descriptionCity}
          // Trigger toggle after castSpell transform
          onTransitionEnd={event => transitionHandler(
            event,
            spellLevel > 4 ,
            !inCity
          )}
        />
      </Fragment>}
    </PictureHolder>
  );
}
