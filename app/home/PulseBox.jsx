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
const Container = styled.div`
  display: none;
  display: ${p => (p.tempContentIsOn || p.magicIsHappening ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: space-between;
  width: 175px;
  z-index: 2;
  
  @media (min-width: ${p => p.theme.mediaQueries.tinyViewTwo}) {
    width: 215px;
  }
`;
const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.fifteen};
  color: ${p => p.theme.colors.white};
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, .6);
  
  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    margin-top: 10px;
    margin-bottom: 30px;
  }
`;
const Pulsers = styled.div`
  display: flex;
  justify-content: space-between;
`;
const PulsingBall = styled.div`
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
const CenterPoint = styled.div`
  animation: ${p => (p.isActive && css`1.5s -.14s ${yellowPulse} infinite`)};
  border: 2px solid ${p => p.isActive ? p.theme.colors.yellow : p.theme.colors.pink};
  height: 15px;
  width: 15px;
  border-radius: 50%;
`;
const ProgressContainer = styled.div`
  height: 1px;
  width: 50%;
  align-self: center;
  background-color: rgba(0, 0, 0, .4);
  margin-top: 28px;
  
  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    margin-top: 33px;
  }
`;
const ProgressBar = styled.div`
  width: ${p => p.barWidth}%;
  height: 100%;
  background-color: yellow;
  transition: width .5s ease-out;
`;

export default function PulseBox(props) {
  // If isCasting is false, the PulseBox shouldn't be shown.

  if (!props.homeState.isCasting) {
    return null;
  }

  const {
    appState,
    homeState,
    spell
  } = props;
  const {
    showBusinessCard,
    showLegalTerms
  } = appState;
  const { castSpell } = homeState;
  const barWidth = spell.score * 20;

  // const boundHandleClickForHome = new ClickHandling;
  // boundHandleClickForHome('swapWorlds'); // Triggers change in /home

  return (
    <Container
      magicIsHappening={castSpell} // Don't show while in progress
      tempContentIsOn={showBusinessCard || showLegalTerms}
    >
      <Text>
          Cast A Spell
      </Text>
      <Pulsers>
        <PulsingBall
          isActive={spell.activePulser === 1}
          onClick={
            () => spell.handleClickOnPulser(1)
          }
        >
          <CenterPoint
            isActive={spell.activePulser === 1}
          />
        </PulsingBall>
        <PulsingBall
          isActive={spell.activePulser === 2}
          onClick={
            () => spell.handleClickOnPulser(2)
          }
        >
          <CenterPoint
            isActive={spell.activePulser === 2}
          />
        </PulsingBall>
        <PulsingBall
          isActive={spell.activePulser === 3}
          onClick={
            () => spell.handleClickOnPulser(3)
          }
        >
          <CenterPoint
            isActive={spell.activePulser === 3}
          />
        </PulsingBall>
      </Pulsers>
      <ProgressContainer>
        <ProgressBar
          barWidth={barWidth}
        ></ProgressBar>
      </ProgressContainer>
    </Container>
  );
}


