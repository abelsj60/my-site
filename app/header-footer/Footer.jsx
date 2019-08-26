import Button from '../shared/Button.jsx';
import { cover } from 'intrinsic-scale';
import React from 'react';
import styled from 'styled-components';
import StyledLink from '../primitives/StyledLink.jsx';

const shadow = '2px 2px 2.5px rgba(0, 0, 0, .4)';
const Container = styled.footer`
  flex-shrink: 0;
  display: flex;
  justify-content: ${p => (!p.story ? 'flex-end' : 'space-between')};
  align-items: center;
  height: 55px;
  font-size: ${p => p.theme.fontSizes.one};
  position: relative;
  width: 100%;
  max-width: 70rem;
`;
const Line = styled.div`
  display: ${p => p.home || p.hide ? 'none' : ''};
  position: absolute;
  z-index: 1;
  left: 25px;
  right: 25px;
  top: 0px;
  margin: 0px;
  height: 1px;
  background-color: ${p => p.theme.colors.pink};
  opacity: ${p => (p.showStoryText || !p.hide ? '1' : '0')};
  transition: ${p => !p.headerMenuIsOpen && 'opacity .165s'};

  @media (min-width: ${p => p.theme.mediaQueries.desktop}) {
    left: 5px;
    right: 5px;
  }
`;
const StoryButton = styled(Button)`
  color: white;
  margin-left: 25px;
  background-color: ${p => (!p.active ? 'rgba(0, 0, 0, .2)' : 'rgba(0, 141, 213, .7)')};
  width: 60px;
  padding: 7px;
  border: 1px rgba(255, 255, 255, .6) solid;
  box-shadow: ${p => p.boxShadow && shadow};
  user-select: none;
  transition: ${p => !p.headerMenuIsOpen && 'background-color .14s, box-shadow .14s'};
`;
const RestyledLink = styled(StyledLink)`
  margin-right: 20px;
`;
const Graf = styled.p`
  cursor: pointer;
  margin-right: ${p => !p.isLink ? '20px' : ''};
  margin-bottom: 0px;
  color: ${p => (p.active ? (!p.home && !p.isStory ? p.theme.colors.pink : p.theme.colors.yellow) : !p.home && !p.isStory ? p.theme.colors.blue : p.theme.colors.white)};
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 5px;
  font-weight: 400;
  font-size: ${p => p.theme.fontSizes.one};
  user-select: none;
  text-shadow: ${p => p.textShadow && shadow};
  transition: ${p => !p.headerMenuIsOpen && !p.home && 'text-shadow .165s'};
`;
const TextBox = styled.div`
  display: flex;
  z-index: 1;

  // Fix IE 11 so story button sits on left and nav items sit on right
  // (Extra rules account for a problem with space-between)
  flex: 1;
  justify-content: flex-end;
`;

export default function FooterContainer(props) {
  const {
    appState,
    boundHandleClickForApp
  } = props;
  const {
    currentCaller,
    headerMenuIsOpen,
    height,
    lastCaller,
    showBusinessCard,
    showLegalTerms,
    showStoryText,
  } = appState;

  const eventHandlerToToggleBusinessCard = () => boundHandleClickForApp('toggleBusinessCard');
  const eventHandlerToToggleLegalTerms = () => boundHandleClickForApp('toggleLegalTerms');

  const isReverie = currentCaller === 'reverie';
  const isStory = currentCaller === 'chapter';
  const isHome = currentCaller === 'home';
  const coverVals = cover(window.innerWidth, height, 2131, 1244);
  const showTextShadow =
    isHome 
      && !showBusinessCard
      && !showLegalTerms
      && coverVals.y < 0
        || (!showStoryText
        && !showBusinessCard
        && !showLegalTerms
        && !isReverie
        && !headerMenuIsOpen);

  const reverieLink =
    isReverie
      ? `/${
        lastCaller !== 'home'
          ? lastCaller
          : '' // No text b/c 'home' is '/'
      }`
      : '/reverie';

  const eventHandlerForStoryButton =
      () => boundHandleClickForApp('toggleStoryText');

  return (
    <Container
      home={isHome}
      story={isStory}
      reverie={isReverie}
      storyPicActive={!showStoryText}
    >
      <Line
        home={isHome}
        hide={
          !showStoryText && !isReverie
        }
        showStoryText={showStoryText}
      />
      <StoryButton
        active={showStoryText}
        clickFunction={eventHandlerForStoryButton}
        className="story-button"
        conditional={true}
        show={isStory}
        headerMenuIsOpen={headerMenuIsOpen}
        boxShadow={showTextShadow}
        text={
          showStoryText
            ? 'Text off'
            : 'Text on'
        }
      />
      <TextBox>
        <RestyledLink
          to={reverieLink}
          boundHandleClickForApp={boundHandleClickForApp}
        >
          <Graf
            active={
              (isReverie && 'active')
              || undefined
            }
            isLink={true}
            home={isHome}
            isStory={isStory}
            textShadow={showTextShadow}
            headerMenuIsOpen={headerMenuIsOpen}
          >
            Reverie
          </Graf>
        </RestyledLink>
        <Graf
          active={showBusinessCard}
          onClick={eventHandlerToToggleBusinessCard}
          home={isHome}
          isStory={isStory}
          textShadow={showTextShadow}
          headerMenuIsOpen={headerMenuIsOpen}
        >
          Contact
        </Graf>
        <Graf
          active={showLegalTerms}
          onClick={eventHandlerToToggleLegalTerms}
          home={isHome}
          isStory={isStory}
          textShadow={showTextShadow}
          headerMenuIsOpen={headerMenuIsOpen}
        >
          Legal
        </Graf>
      </TextBox>
    </Container>
  );
}
