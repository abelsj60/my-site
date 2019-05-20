import bio from '../data/about/home-page-about.md';
import React from 'react';
import styled from 'styled-components';

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
  filter: ${p => (p.isCasting && !p.castSpell) || p.theme.blurForTempContent ? p.theme.blur : 'blur(0)'};

  // object-fit: cover; // Use if using <img>
`;
const Portal = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
  background-color: ${p => p.theme.colors.black};
  opacity: .1;
`;
const FantasyAsBackground = styled(BoyInForeground)`
  background-image: url(${p => p.srcImage});
  opacity: ${p => (p.inCity ? '0' : '1')};
  transform: ${p => (p.inCity ? 'scale(1)' : 'scale(1.15)')};
  transition: transform 1.75s, opacity 1.5s cubic-bezier(0.77, 0, 0.175, 1);
  z-index: 0;
`;
const CityAsBackground = styled(FantasyAsBackground)`
  background-image: url(${p => p.srcImage});
  opacity: ${p => (p.inCity ? '1' : '0')};
  transform: ${p => (p.inCity ? 'scale(1.15)' : 'scale(1)')};
`;

export default function PictureBox(props) {
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
    isCasting,
  } = homeState;

  return (
    <PictureHolder>
      <BoyInForeground
        srcImage={bio.attributes.boyInForegroundImage}
      />
      <Portal
        isCasting={isCasting}
        castSpell={castSpell}
      />
      <FantasyAsBackground
        inCity={inCity}
        isCasting={isCasting}
        castSpell={castSpell}
        srcImage={bio.attributes.fantasyImage}
        onTransitionEnd={
          () => {
            // Set transition to '1' after the first call,
            // so toggle won't re-run on the second call.

            trackTransitionEnd();
            boundHandleClickForHome('toggleSpell');
          }
        }
      />
      <CityAsBackground
        inCity={inCity}
        isCasting={isCasting}
        castSpell={castSpell}
        srcImage={bio.attributes.cityImage}
      />
    </PictureHolder>
  );
}
