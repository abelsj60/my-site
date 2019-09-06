import React from 'react';
import Mapper from '../shared/Mapper.jsx';
import styled, { css, keyframes } from 'styled-components';

const bigPinkPulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(253, 17, 114, 1);
  }

  75% {
    box-shadow: 0 0 0 15px rgba(253,17,114, 0);
  }

  100% {
    transform: rotate(1turn);
    box-shadow: 0 0 0 0 rgba(253, 17, 114, 0);
  }
`;
const pinkPulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(253, 17, 114, 1);
  }

  75% {
    box-shadow: 0 0 0 15px rgba(253,17,114, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(253, 17, 114, 0);
  }
`;
const bigYellowPulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 231, 76, 1);
  }

  75% {
    box-shadow: 0 0 0 15px rgba(255, 231, 76, 0);
  }

  100% {
    transform: rotate(1turn);
    box-shadow: 0 0 0 0 rgba(255, 231, 76, 0);
  }
`;
const yellowPulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 231, 76, 1);
  }

  75% {
    box-shadow: 0 0 0 15px rgba(255, 231, 76, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(255, 231, 76, 0);
  }
`;
const Container = styled.div`
  display: ${p => (p.tempContentIsOn || !p.isCasting || p.castSpell ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: space-between;
  margin-top: 5px;
  width: 200px;
  z-index: 2;
  opacity: ${p => p.fadeIn || p.nowShowing ? '1' : '0' };
  transition: opacity 1s;
  
  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    width: 240px;
  }

  @media (min-width: ${p => p.theme.mediaQueries.huge}) {
    width: 330px;
  }
`;
const CharmBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Charm = styled.div`
  animation: ${p => (p.isActive && css`1.5s -.15s ${p.isReady && p.isActive ? bigYellowPulse : bigPinkPulse} infinite`)};
  border: 2px dotted ${p => p.theme.colors.pink};
  width: 45px;
  height: 45px;
  border-radius: 50%;
  z-index: 3;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    width: 50px;
    height: 50px;
  }

  @media (min-width: ${p => p.theme.mediaQueries.huge}) {
    width: 75px;
    height: 75px;
  }
`;
const InnerCharm = styled.div`
  background-color: ${p => p.isReady && p.isActive ? 'rgba(255, 231, 76, .6)' : 'rgba(253, 17, 114, .6)'};
  box-shadow: 0px 0px 22px -8px rgba(0, 0, 0, .8);
  border-radius: 50%;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
`;
const InnerEye = styled.div`
  animation: ${p => (p.isActive && css`1.5s -.15s ${p.isReady && p.isActive ? pinkPulse : yellowPulse} infinite`)};
  background-color: ${p => p.isReady && p.isActive ? p.theme.colors.pink : p.theme.colors.yellow};
  height: 18px;
  width: 5px;
  border-radius: 50%;
  z-index: 1;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    height: 23px;
    width: 6px;
  }

  @media (min-width: ${p => p.theme.mediaQueries.huge}) {
    height: 35px;
    width: 8px;
  }
`;
const InnerEyeShadow = styled.div`
  border-radius: 50%;
  box-shadow: inset 0px 0px 2px 1px rgba(0,0,0,.15);
  height: 100%;
  width: 100%;
  z-index: 1;
`;
const SpellBox = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  margin-left: 35px;
  margin-right: 35px;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    margin-top: 32px;
  }
`;
const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.six};
  font-weight: 400;
  color: ${p => p.theme.colors.black};
  transition: color .5s ease-out;
  margin-bottom: 5px;
`;
const ProgressContainer = styled.div`
  height: 1px;
  width: 100%;
  align-self: center;
  background-color: ${p => p.theme.colors.white};
`;
const ProgressBar = styled.div`
  width: ${p => p.barWidth}%;
  height: 100%;
  background-color: ${p => p.theme.colors.black};
  transition: width .5s ease-out, background-color .5s ease-out;
`;

export default function Charms(props) {
  const {
    appState,
    charmRefs,
    goal,
    homeState,
    resetFadeIn
  } = props;
  const {
    showBusinessCard,
    showLegalTerms
  } = appState;
  const {
    activeCharm,
    castSpell,
    fadeIn,
    isCasting,
    nowShowing,
    score
  } = homeState;

  // Let's set up a progress bar.

  const barWidth = score * (100 / (goal - 1));
  const isReady = score === goal - 1;

  return (
    <Container
      fadeIn={fadeIn}
      isCasting={isCasting}
      castSpell={castSpell} // Don't show while in progress
      tempContentIsOn={showBusinessCard || showLegalTerms}
      nowShowing={nowShowing === 'charms'}
      onTransitionEnd={() => resetFadeIn()}
    >
      <CharmBox>
        <Mapper
          mapData={['one', 'two', 'three']}
          render={
            (_, idx) => {
              const isActive = activeCharm === idx + 1;
              return (
                <Charm
                  key={idx}
                  isActive={isActive}
                  isReady={isReady}
                  ref={charmRefs[idx]} // Add a ref to each Charm when mounted
                >
                  <InnerCharm
                    isActive={isActive}
                    isReady={isReady}
                  />
                  <InnerEye
                    isActive={isActive}
                    isReady={isReady}
                  >
                    <InnerEyeShadow
                      isActive={isActive}
                      isReady={isReady}
                    />
                  </InnerEye>
                </Charm>
              );
            }}
        />
      </CharmBox>
      <SpellBox>
        <Text
          isReady={isReady}
        >
          Cast spell in {5 - score}...
        </Text>
        <ProgressContainer>
          <ProgressBar
            barWidth={barWidth}
            isReady={isReady}
          />
        </ProgressContainer>
      </SpellBox>
    </Container>
  );
}
