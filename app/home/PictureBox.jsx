import bio from '../data/home/home.md';
import React from 'react';
import styled, { css } from 'styled-components';

const largeScale = 1.35;
const PictureHolder = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 1;
`;
const BoyInForegroundBlurred = styled.img`
  position: absolute;
  display: block;
  object-fit: cover; // Use if using <img>
  // Scale image to fully fit element
  // https://stackoverflow.com/a/28439444
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 3;
  opacity: ${p => p.theme.blurForTempContent ? '1' : '0'};
  transition: opacity .175s;
`;
const BoyInForeground = styled.img`
  position: absolute;
  display: block;
  object-fit: cover; // Use if using <img>
  // Scale image to fully fit element
  // https://stackoverflow.com/a/28439444
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;

  // Use if background image:
  // background-image: url(${p => p.srcImage});
  // background-size: cover;
  // background-position: center;
  // background-repeat: no-repeat;
`;
const Portal = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
  opacity: .1;
  display: ${p => !p.isCasting || p.castSpell ? 'none' : 'block'};
`;
const FantasyAsBackgroundBlurred = styled.img`
  position: absolute;
  display: block;
  object-fit: cover; // Use if using <img>
  // Scale image to fully fit element
  // https://stackoverflow.com/a/28439444
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: ${p => (p.isCasting && !p.castSpell) || p.theme.blurForTempContent ? '1' : '0'};
  transition: opacity .175s;
  z-index: ${p => !p.inCity && !p.castSpell ? '0' : '-2'};
  ${p => (p.castSpell || p.inCity) && 'display: none;'}
`;
const FantasyAsBackground = styled.img`
  position: absolute;
  display: block;
  object-fit: cover; // Use if using <img>
  // Scale image to fully fit element
  // https://stackoverflow.com/a/28439444
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: ${p => (p.inCity ? '0' : '1')};
  transform: ${p => (p.inCity ? css`scale(${largeScale})` : 'scale(1)')};
  transform-origin: 50% 5%;
  transition: transform 1.75s, opacity ${p => !p.inCity ? '1.35s' : '1.35s'} cubic-bezier(0.77, 0, 0.175, 1);
  z-index: ${p => !p.inCity && !p.castSpell ? '-1' : '-3'};
`;
const CityBackgroundBlurred = styled.img`
  position: absolute;
  display: block;
  object-fit: cover; // Use if using <img>
  // Scale image to fully fit element
  // https://stackoverflow.com/a/28439444
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: ${p => (p.isCasting && !p.castSpell) || p.theme.blurForTempContent ? '1' : '0'};
  transition: opacity .175s;
  z-index: ${p => !p.inCity && !p.castSpell ? '-2' : '0'};
  ${p => (p.castSpell || !p.inCity) && 'display: none;'}
`;
const CityAsBackground = styled.img`
  position: absolute;
  display: block;
  object-fit: cover; // Use if using <img>
  // Scale image to fully fit element
  // https://stackoverflow.com/a/28439444
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: ${p => (p.inCity ? '1' : '0')};
  transform: ${p => (p.inCity ? 'scale(1)' : css`scale(${largeScale})`)};
  transition: transform 1.75s, opacity ${p => p.inCity ? '1.35s' : '1.35s'} cubic-bezier(0.77, 0, 0.175, 1);
  z-index: ${p => !p.inCity && !p.castSpell ? '-3' : '-1'};
`;

export default function PictureBox(props) {
  const {
    boyInForegroundImage,
    boyInForegroundImageBlurred,
    cityImage,
    cityImageBlurred,
    descriptionBoy,
    descriptionFantasy,
    descriptionCity,
    fantasyImage,
    fantasyImageBlurred
  } = bio.attributes;
  const {
    appState,
    boundHandleClickForHome,
    homeState
  } = props;
  const {
    inCity
  } = appState;
  const {
    castSpell,
    isCasting
  } = homeState;

  const transitionHandler = function(magicState, activeBackground, event) {
    event.preventDefault();

    if (
      magicState
        && activeBackground
        && event.propertyName === 'transform'
    ) {
      boundHandleClickForHome('toggleSpell');
    }
  }

  return (
    <PictureHolder>
      <BoyInForegroundBlurred
        src={boyInForegroundImageBlurred}
        alt={descriptionBoy}
      />
      <BoyInForeground
        src={boyInForegroundImage}
        alt={descriptionBoy}
      />
      <Portal
        isCasting={isCasting}
        castSpell={castSpell}
      />
      <FantasyAsBackgroundBlurred 
        src={fantasyImageBlurred}
        inCity={inCity}
        isCasting={isCasting}
        castSpell={castSpell}
      />
      <FantasyAsBackground
        inCity={inCity}
        isCasting={isCasting}
        castSpell={castSpell}
        src={fantasyImage}
        alt={descriptionFantasy}
        onTransitionEnd={transitionHandler.bind(null, castSpell, inCity)}
      />
      <CityBackgroundBlurred 
        src={cityImageBlurred}
        inCity={inCity}
        isCasting={isCasting}
        castSpell={castSpell}
      />
      <CityAsBackground
        inCity={inCity}
        isCasting={isCasting}
        castSpell={castSpell}
        src={cityImage}
        alt={descriptionCity}
        onTransitionEnd={transitionHandler.bind(null, castSpell, !inCity)}
      />
    </PictureHolder>
  );
}
