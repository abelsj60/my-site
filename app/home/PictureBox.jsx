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
  filter: ${p => (p.isCasting && !p.castSpell) || p.theme.blurForTempContent ? p.theme.blur : ''};

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
  // background-color: ${p => p.theme.colors.pink};
  background-color: midnightblue;
  opacity: .1;
  display: ${p => !p.isCasting || p.castSpell ? 'none' : 'block'};
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
  filter: ${p => (p.isCasting && !p.castSpell) || p.theme.blurForTempContent ? p.theme.blur : ''};
  opacity: ${p => (p.inCity ? '0' : '1')};
  transform: ${p => (p.inCity ? css`scale(${largeScale})` : 'scale(1)')};
  transform-origin: 50% 5%;
  transition: transform 1.75s, opacity ${p => !p.inCity ? '.1s' : '1.35s'} cubic-bezier(0.77, 0, 0.175, 1);
  z-index: 0;
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
  filter: ${p => (p.isCasting && !p.castSpell) || p.theme.blurForTempContent ? p.theme.blur : ''};
  opacity: ${p => (p.inCity ? '1' : '0')};
  transform: ${p => (p.inCity ? 'scale(1)' : css`scale(${largeScale})`)};
  transition: transform 1.75s, opacity ${p => p.inCity ? '1.35s' : '1.2s'} cubic-bezier(0.77, 0, 0.175, 1);
`;

export default function PictureBox(props) {
  const {
    boyInForegroundImage,
    descriptionBoy,
    descriptionFantasy,
    descriptionCity,
    cityImage,
    fantasyImage
  } = bio.attributes;
  const {
    appState,
    boundHandleClickForHome,
    homeState,
    trackTransitionEnd
  } = props;
  const {
    inCity
  } = appState;
  const {
    castSpell,
    isCasting
  } = homeState;

  return (
    <PictureHolder>
      <BoyInForeground
        src={boyInForegroundImage}
        alt={descriptionBoy}
      />
      <Portal
        isCasting={isCasting}
        castSpell={castSpell}
      />
      <FantasyAsBackground
        inCity={inCity}
        isCasting={isCasting}
        castSpell={castSpell}
        src={fantasyImage}
        alt={descriptionFantasy}
        onTransitionEnd={
          event => {
            event.stopPropagation();

            // Set transition to '1' after the first call,
            // so toggle won't re-run on the second call.
            // (Two images = two transitionEnd events.)

            if (castSpell) {
              trackTransitionEnd();
              boundHandleClickForHome('toggleSpell');
            }
          }
        }
      />
      <CityAsBackground
        inCity={inCity}
        isCasting={isCasting}
        castSpell={castSpell}
        src={cityImage}
        alt={descriptionCity}
      />
    </PictureHolder>
  );
}
