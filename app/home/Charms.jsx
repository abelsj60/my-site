import React from 'react';
import Mapper from '../shared/Mapper.jsx';
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
const fadeIn = keyframes`
  0% {
    opacity: .1;
  }

  100% {
    opacity: 1;
  }
`;
const Container = styled.div`
  display: none;
  display: ${p => (p.tempContentIsOn || p.magicIsHappening ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: space-between;
  width: 195px;
  z-index: 2;
  margin-top: 15px;
  animation: ${p => (p.isCasting && css`.65s ${fadeIn} cubic-bezier(0.19, 1, 0.22, 1)`)};
  
  @media (min-width: ${p => p.theme.mediaQueries.tinyViewTwo}) {
    width: 240px;
  }
`;
const CharmBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Charm = styled.div`
  animation: ${p => (p.isActive && css`1.5s -.15s ${p.isReady && p.isActive ? yellowPulse : pinkPulse} infinite`)};
  border: 2px solid ${p => p.isReady && p.isActive ? p.theme.colors.yellow : p.theme.colors.pink};
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
  animation: ${p => (p.isActive && css`1.5s -.15s ${p.isReady && p.isActive ? pinkPulse : yellowPulse} infinite`)};
  border: 2px solid ${p => p.isReady && p.isActive ? p.theme.colors.pink : p.theme.colors.yellow};
  height: 15px;
  width: 15px;
  border-radius: 50%;
`;
const SpellBox = styled.div`
  margin-top: 28px;
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
  // color: ${p => !p.isReady ? p.theme.colors.yellow : p.theme.colors.pink};
  color: ${p => p.theme.colors.yellow};
  transition: color .5s ease-out;
  margin-bottom: 5px;
`;
const ProgressContainer = styled.div`
  height: 1px;
  width: 100%;
  align-self: center;
  background-color: ${p => p.theme.colors.black};
  
  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
  }
`;
const ProgressBar = styled.div`
  width: ${p => p.barWidth}%;
  height: 100%;
  // background-color: ${p => !p.isReady ? p.theme.colors.yellow : p.theme.colors.pink};
  background-color: ${p => p.theme.colors.yellow};
  transition: width .5s ease-out, background-color .5s ease-out;
`;

export default function Charms(props) {
  if (!props.homeState.isCasting) {
    return null;
  }

  const {
    appState,
    charmRefs,
    goal,
    homeState
  } = props;
  const {
    showBusinessCard,
    showLegalTerms
  } = appState;
  const {
    activeCharm,
    castSpell,
    isCasting,
    score
  } = homeState;

  // Let's set up a progress bar.

  const barWidth = score * (100 / (goal - 1));
  const isReady = score === goal - 1;

  return (
    <Container
      isCasting={isCasting}
      magicIsHappening={castSpell} // Don't show while in progress
      tempContentIsOn={showBusinessCard || showLegalTerms}
    >
      <CharmBox>
        <Mapper
          mapData={['one', 'two', 'three']}
          render={
            (_, idx)=> {
              const isActive = activeCharm === idx + 1;
              return (
                <Charm
                  key={idx}
                  isActive={isActive}
                  isReady={isReady}
                  ref={charmRefs[idx]} // Add a ref to each Charm when mounted
                >
                  <InnerRing
                    isActive={isActive}
                    isReady={isReady}
                  />
                </Charm>
              );
            }}
        />
      </CharmBox>
      <SpellBox>
        <Text
          isReady={isReady}
        >
          Spell ({`${score}/5`})
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
