import bio from '../data/about/home-page-about.md';
import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const colorKeyframes = keyframes`
  0% {
    background-color: rgba(0, 0, 0, 0.15);
  }
  
  10% {
    background-color: rgba(25, 220, 234, .15)
  }
    
  100% {
    background-color: rgba(178, 44, 255, .15);
  }
`;
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
  // object-fit: cover; // Use if using <img>
`;
const newKeyframes = keyframes`
  0% {
    background-position: 0% 7%;
  }

  50% {
    background-position: 100% 94%;
  }

  100% {
    background-position: 0% 7%;
  }
`;
const Portal = styled.div`
  background-color: rgba(0, 0, 0, 0.15);
  animation: ${p => p.isCasting ? css`${colorKeyframes} 5s linear infinite alternate both` : ''};

  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;

  // background: ${p => p.isCasting && 'radial-gradient(circle farthest-side at bottom right, #ff0000, #ffa500, #ffff00, #00ff00, #0000ff, #ee82ee)'};
  // background-size: 1000% 500%;
  // opacity: .3;
  // animation: ${p => p.isCasting && css`${newKeyframes} 30s ease-in-out infinite`};
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
    homeState,
    spell
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
        isCasting={isCasting && !castSpell}
      />
      <FantasyAsBackground
        inCity={inCity}
        onTransitionEnd={
          () => spell.cleanupAfterCasting()
        }
        srcImage={bio.attributes.fantasyImage}
      />
      <CityAsBackground
        inCity={inCity}
        srcImage={bio.attributes.cityImage}
      />
    </PictureHolder>
  );
}
