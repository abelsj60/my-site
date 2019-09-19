import Button from './Button.jsx';
import { cover } from 'intrinsic-scale';
import Loader from '../shared/Loader.jsx';
import React from 'react';
import styled, { css } from 'styled-components';
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
  display: ${p => p.home ? 'none' : ''};
  position: absolute;
  z-index: 1;
  left: 25px;
  right: 25px;
  top: 0px;
  margin: 0px;
  height: 1px;
  background-color: ${p => !p.isNotFound ? p.theme.colors.pink : p.theme.colors.white};
  opacity: ${p => !p.hide ? '1' : '0'};
  transition: ${p => p.animateImageBlur && css`opacity ${p.showStoryText ? '.35s' : '.15s'}`};
  
  @media (min-width: ${p => p.theme.mediaQueries.desktop}) {
    left: 5px;
    right: 5px;
  }
`;
const RestyledLink = styled(StyledLink)`
  margin-right: 20px;
`;
const Graf = styled.p`
  cursor: pointer;
  margin-right: ${p => !p.isLink ? '20px' : ''};
  margin-bottom: 0px;
  color: ${p => (p.active ? (!p.home && !p.isStory && !p.isNotFound ? p.theme.colors.pink : p.theme.colors.yellow) : !p.home && !p.isStory && !p.isNotFound ? p.theme.colors.blue : p.theme.colors.white)};
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 5px;
  font-weight: 400;
  font-size: ${p => p.theme.fontSizes.one};
  user-select: none;
  text-shadow: ${p => p.textShadow && shadow};
  transition: text-shadow .35s;
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
    animateImageBlur,
    chapter,
    currentCaller,
    headerMenuIsOpen,
    height,
    lastCaller,
    showBusinessCard,
    showDelay,
    showLegalTerms,
    showStoryText,
  } = appState;

  const eventHandlerToToggleBusinessCard = () => boundHandleClickForApp('toggleBusinessCard');
  const eventHandlerToToggleLegalTerms = () => boundHandleClickForApp('toggleLegalTerms');

  const isReverie = currentCaller === 'reverie';
  const isStory = currentCaller === 'chapter';
  const isHome = currentCaller === 'home';
  const isNotFound = currentCaller === 'not-found';
  const coverVals = cover(window.innerWidth, height, 2131, 1244);
  const showTextShadow =
    isHome 
      && !showBusinessCard
      && !showLegalTerms
      && coverVals.y < 0
        || (
          !showStoryText
            && !showBusinessCard
            && !showLegalTerms
            && !isReverie
            && !headerMenuIsOpen
          );

  const reverieLink =
    isReverie
      ? `/${
        lastCaller !== 'home'
          ? lastCaller
          : '' // No text b/c 'home' is '/'
      }`
      : '/reverie';

  const eventHandlerForStoryButton = () => {
      if (chapter < 0) {
        boundHandleClickForApp('toggleShowDelay');
      } else {
        boundHandleClickForApp('toggleStoryText');
      }
    };

  return (
    <Container
      home={isHome}
      story={isStory}
      reverie={isReverie}
      storyPicActive={!showStoryText}
    >
      <Line
        home={isHome}
        isNotFound={isNotFound}
        hide={!showStoryText && !isReverie}
        animateImageBlur={animateImageBlur}
      />
      <Button
        showStoryText={showStoryText}
        clickFunction={eventHandlerForStoryButton}
        animateImageBlur={animateImageBlur}
        boxShadow={showTextShadow}
        isStory={isStory}
        text={
          !showStoryText
            ? 'Text on'
            : !showDelay
              ? 'Text off'
              : 'Cancel'
        }
      />
      {isStory && (
        <Loader
          marginBottom="2"
          marginLeft="20"
          fontSize="small"
          white={true}
          smallFont={true}
          done={!showStoryText}
          show={showDelay}
        />
      )}
      <TextBox>
        <RestyledLink
          to={reverieLink}
          boundHandleClickForApp={boundHandleClickForApp}
        >
          <Graf
            active={isReverie}
            isLink={true}
            home={isHome}
            isStory={isStory}
            isNotFound={isNotFound}
            textShadow={showTextShadow}
            headerMenuIsOpen={headerMenuIsOpen}
            animateImageBlur={animateImageBlur}
          >
            Reverie
          </Graf>
        </RestyledLink>
        <Graf
          active={showBusinessCard}
          onClick={eventHandlerToToggleBusinessCard}
          home={isHome}
          isStory={isStory}
          isNotFound={isNotFound}
          textShadow={showTextShadow}
          headerMenuIsOpen={headerMenuIsOpen}
          animateImageBlur={animateImageBlur}
        >
          Contact
        </Graf>
        <Graf
          active={showLegalTerms}
          onClick={eventHandlerToToggleLegalTerms}
          home={isHome}
          isStory={isStory}
          isNotFound={isNotFound}
          textShadow={showTextShadow}
          headerMenuIsOpen={headerMenuIsOpen}
          animateImageBlur={animateImageBlur}
        >
          Legal
        </Graf>
      </TextBox>
    </Container>
  );
}
