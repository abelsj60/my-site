import React from 'react';
import styled, { css, keyframes } from 'styled-components';

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
const CharmBox = styled.div`
  display: none;
  display: ${p => (p.tempContentIsOn || p.magicIsHappening ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: space-between;
  width: 195px;
  z-index: 2;
  margin-top: 15px;
  
  @media (min-width: ${p => p.theme.mediaQueries.tinyViewTwo}) {
    width: 240px;
  }
`;
const PulseBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Pulser = styled.div`
  animation: ${p => (p.isActive && css`1.5s -.15s ${pinkPulse} infinite`)};
  border: 2px solid ${p => p.theme.colors.pink};
  background-color: rgba(0, 0, 0, .5);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  z-index: 3;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    width: 50px;
    height: 50px;
  }
`;
const InnerRing = styled.div`
  animation: ${p => (p.isActive && css`1.5s -.14s ${yellowPulse} infinite`)};
  border: 2px solid ${p => p.isActive ? p.theme.colors.yellow : p.theme.colors.pink};
  height: 15px;
  width: 15px;
  border-radius: 50%;
`;
const ProgressContainer = styled.div`
  height: 1px;
  width: 75%;
  align-self: center;
  background-color: rgba(0, 0, 0, .4);
  margin-top: 30px;
  
  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    margin-top: 35px;
  }
`;
const ProgressBar = styled.div`
  width: ${p => p.barWidth}%;
  height: 100%;
  background-color: ${p => p.theme.colors.yellow};
  transition: width .5s ease-out;
`;

export default function Charms(props) {
  if (!props.homeState.isCasting) {
    return null;
  }

  const {
    appState,
    boundHandlePulser,
    homeState
  } = props;
  const {
    showBusinessCard,
    showLegalTerms
  } = appState;
  const {
    activePulser,
    castSpell,
    score
  } = homeState;

  // Let's set up a progress bar.

  const barWidth = score * 20;

  // Which Pulser is active?

  const isOne = activePulser === 1;
  const isTwo = activePulser === 2;
  const isThree = activePulser === 3;

  return (
    <CharmBox
      magicIsHappening={castSpell} // Don't show while in progress
      tempContentIsOn={showBusinessCard || showLegalTerms}
    >
      <PulseBox>
        <Pulser
          isActive={isOne}
          onClick={
            () => boundHandlePulser(isOne)
          }
        >
          <InnerRing
            isActive={isOne}
          />
        </Pulser>
        <Pulser
          isActive={isTwo}
          onClick={
            () => boundHandlePulser(isTwo)
          }
        >
          <InnerRing
            isActive={isTwo}
          />
        </Pulser>
        <Pulser
          isActive={isThree}
          onClick={
            () => boundHandlePulser(isThree)
          }
        >
          <InnerRing
            isActive={isThree}
          />
        </Pulser>
      </PulseBox>
      <ProgressContainer>
        <ProgressBar
          barWidth={barWidth}
        />
      </ProgressContainer>
    </CharmBox>
  );
}
