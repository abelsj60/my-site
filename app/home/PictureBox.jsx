import bio from '../data/home/home.md';
import React from 'react';
import styled, { css } from 'styled-components';

const largeScale = 1.001;
const PictureHolder = styled.div`
  position: fixed;
  top: 0px;
  left: -1px;
  height: 101%;
  width: 101%;
  overflow: hidden;
  z-index: 1;
`;
const BoyInForeground = styled.div`
  position: absolute;
  display: block;
  background-image: url(${p => p.srcImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  // Scale image to fully fit element
  // https://stackoverflow.com/a/28439444
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
  filter: ${p => (p.isCasting && !p.castSpell) || p.theme.blurForTempContent ? p.theme.blur : ''};

  // object-fit: cover; // Use if using <img>
`;
const Portal = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
  background-color: ${p => p.theme.colors.black};
  opacity: .3;
`;
const FantasyAsBackground = styled(BoyInForeground)`
  background-image: url(${p => p.srcImage});
  opacity: ${p => (p.inCity ? '0' : '1')};
  transform: ${p => (p.inCity ? 'scale(1)' : css`scale(${largeScale})`)};
  transition: transform 1.75s, opacity 1.5s cubic-bezier(0.77, 0, 0.175, 1);
  z-index: 0;
`;
const CityAsBackground = styled(FantasyAsBackground)`
  background-image: url(${p => p.srcImage});
  opacity: ${p => (p.inCity ? '1' : '0')};
  transform: ${p => (p.inCity ? css`scale(${largeScale})` : 'scale(1)')};
`;

export default function PictureBox(props) {
  const {
    // boyInForegroundImage,
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
      {/*<BoyInForeground
        srcImage={boyInForegroundImage}
      />*/}
      <Portal />
      <FantasyAsBackground
        inCity={inCity}
        isCasting={isCasting}
        castSpell={castSpell}
        srcImage={fantasyImage}
        onTransitionEnd={
          event => {
            event.stopPropagation();

            // Set transition to '1' after the first call,
            // so toggle won't re-run on the second call.
            // (Two images = two transitionEnd events.)

            trackTransitionEnd();
            boundHandleClickForHome('toggleSpell');
          }
        }
      />
      <CityAsBackground
        inCity={inCity}
        isCasting={isCasting}
        castSpell={castSpell}
        srcImage={cityImage}
      />
    </PictureHolder>
  );
}
