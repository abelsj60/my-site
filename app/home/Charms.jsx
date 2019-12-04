import eventManagement from '../helpers/eventManagement.js';
import getFontSize from '../helpers/getFontSize.js';
import React from 'react';
import Mapper from '../shared/Mapper.jsx';
import styled, { css, keyframes } from 'styled-components';
import SubHed from './SubHed.jsx';

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

const OuterContainer = styled.div`
  display: ${p => p.spellLevel < 5 && p.tempContent < 1 ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
  opacity: ${p => (p.enter && p.spellLevel >= 3 )|| (p.exit && p.spellLevel > 3) ? '1' : '0'};
  // Transition settings for the spell should match NameTag/InnerContainer's transition property.
  transition: opacity ${p => p.enter ? '.65s' : '.45s'} ease-in-out;
  margin-top: -7px;
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 194px;
  align-self: center;
  margin-left: 1.17em;

  // Arbitrarily chosen widths for a little extra styling.
  @media (min-width: 335px) {
    width: 200px;
  }

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    margin-top: 17px;
    width: 240px;
    margin-left: 1.6em;
  }

  @media (min-width: ${p => p.theme.mediaQueries.huge}), (min-height: 950px)  {
    margin-top: 25px;
    width: 330px;
  }

  @media (orientation: landscape) and (max-height: ${p => p.theme.mediaQueries.narrowBreakOne}) {
    margin-left: 1em;
  }
`;
const CharmBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Charm = styled.div`
  // Can be a heavy transition, adding will-change (no fallbacks b/c they both break the spin). 
  ${p => p.spellLevel > 0 && 'will-change: transform, box-shadow;'}
  // Separate p.enter and p.exit checks so the animation starts on spellLevel 4 and runs through the onExit fadeOut (otherwise, it ends onExit. Awkward).
  animation: ${p => (((p.enter && p.spellLevel > 3) || (p.exit && p.spellLevel >= 3)) && p.isActive && css`1.5s -.15s ${p.isReady ? bigPinkPulse : bigPinkPulse} infinite`)};
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

  @media (min-width: ${p => p.theme.mediaQueries.huge}), (min-height: 950px) {
    width: 75px;
    height: 75px;
  }
`;
const CharmShadow = styled.div`
  background-color: ${p => p.isReady && p.isActive ? 'rgba(255, 231, 76, .6)' : 'rgba(253, 17, 114, .6)'};
  box-shadow: 0px 0px 22px -8px rgba(0, 0, 0, .8);
  border-radius: 50%;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
`;
const Eye = styled.div`
  // Can be a heavy transition, trying will-change + fallback. 
  ${p => p.spellLevel > 0 && 'will-change: box-shadow;'}
  ${p => p.spellLevel > 0 && 'transform: translate3d(0, 0, 0);'}
  // Separate p.enter and p.exit checks so the animation starts on spellLevel 4 and runs through the onExit fadeOut (otherwise, it ends onExit. Awkward).
  animation: ${p => (((p.enter && p.spellLevel > 3) || (p.exit && p.spellLevel >= 3)) && p.isActive && css`1.5s -.15s ${p.isReady ? pinkPulse : yellowPulse} infinite`)};
  background-color: ${p => p.isReady && p.isActive ? p.theme.colors.pink : p.theme.colors.yellow};
  height: 24px;
  width: 5px;
  border-radius: 50%;
  z-index: 1;

  @media (min-width: ${p => p.theme.mediaQueries.huge}), (min-height: 950px) {
    height: 35px;
    width: 8px;
  }
`;
const EyeShadow = styled.div`
  border-radius: 50%;
  box-shadow: inset 0px 0px 2px 1px rgba(0,0,0,.15);
  height: 100%;
  width: 100%;
  z-index: 1;
`;
const Dashboard = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100px;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    margin-top: 32px;
  }

  @media (min-width: ${p => p.theme.mediaQueries.huge}), (min-height: 950px)  {
    margin-top: 40px;
  }
`;
const Score = styled.p`
  font-size: ${p => p.theme.fontSizes.six};
  font-weight: 400;
  color: ${p => p.theme.colors.black};
  margin-bottom: 5px;

  @media (orientation: landscape) and (max-height: ${p => p.theme.mediaQueries.narrowBreakOne}) {
    color: ${p => p.theme.colors.white};
    text-shadow: 1px 1px 0px ${p => p.theme.colors.black};
  }
`;
const OuterBar = styled.div`
  height: 1px;
  width: 100%;
  align-self: center;
  background-color: ${p => p.theme.colors.white};

  @media (orientation: landscape) and (max-height: ${p => p.theme.mediaQueries.narrowBreakOne}) {
    background-color: ${p => p.theme.colors.black};
  }
`;
const InnerBar = styled.div`
  width: ${p => p.barWidth}%;
  height: 100%;
  background-color: ${p => p.theme.colors.black};
  // No onTransitionEnd handler in which to cancel propagation.
  // Stop in OuterContainer (event.propertyName === 'opacity').
  transition: width .5s ease-out;

  @media (orientation: landscape) and (max-height: ${p => p.theme.mediaQueries.narrowBreakOne}) {
    background-color: ${p => p.theme.colors.white};
  }
`;

export default function Charms(props) {
  if (props.homeState.spellLevel < 2) {
    return null;
  }

  const {
    appState,
    charmRefs,
    homeState,
    setSpellLevel
  } = props;
  const {
    inCity,
    nameTagWidth,
    offline,
    tempContent
  } = appState;
  const {
    activeCharm,
    goal,
    movement,
    score,
    spellLevel
  } = homeState;

  const handleTransitionEndForOuterContainer = event => {
    eventManagement(event);

    // Filter, it's also called by 'width'.
    if (event.propertyName === 'opacity') { 
      setSpellLevel.two(movement === 'exit', 'OuterContainer');
      setSpellLevel.four(movement === 'enter', 'OuterContainer');
    }
  };
  // Let's set up a progress bar.
  const barWidth = score * (100 / (goal - 1));
  const isReady = score === goal - 1;

  return (
    <OuterContainer
      enter={movement === 'enter'}
      exit={movement === 'exit'}
      onTransitionEnd={handleTransitionEndForOuterContainer}
      spellLevel={spellLevel}
      tempContent={tempContent}
    >
      <SubHed
        extraMarginTop={true}
        marginLeft="1em"
        fontSize={getFontSize(nameTagWidth, 3.05)}
      >
        {
          !offline 
            ? !inCity
              ? "Tap the pulses to travel home"
              : "Tap the pulses for adventure"
            : "The spell won't cast offline!"
        }
      </SubHed>
      <InnerContainer>
        <CharmBox>
          <Mapper
            mapData={['one', 'two', 'three']}
            render={(_, idx) => {
              const isActive = activeCharm === idx + 1;
              return (
                <Charm
                  enter={movement === 'enter'}
                  exit={movement === 'exit'}
                  isActive={isActive}
                  isReady={isReady}
                  key={idx}
                  ref={charmRefs[idx]} // Add a ref to each Charm when mounted
                  spellLevel={spellLevel}
                >
                  <CharmShadow
                    isActive={isActive}
                    isReady={isReady}
                    spellLevel={spellLevel}
                  />
                  <Eye
                    enter={movement === 'enter'}
                    exit={movement === 'exit'}
                    isActive={isActive}
                    isReady={isReady}
                    spellLevel={spellLevel}
                  >
                    <EyeShadow
                      isActive={isActive}
                      isReady={isReady}
                      spellLevel={spellLevel}
                    />
                  </Eye>
                </Charm>
              );
            }}
          />
        </CharmBox>
        <Dashboard>
          <Score
            isReady={isReady}
          >
            Cast spell in {goal - score}...
          </Score>
          <OuterBar>
            <InnerBar
              barWidth={barWidth}
              isReady={isReady}
            />
          </OuterBar>
        </Dashboard>
      </InnerContainer>
    </OuterContainer>
  );
}
