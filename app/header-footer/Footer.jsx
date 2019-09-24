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
  margin-right: 13px;
  
  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    margin-right: 20px;
  }
`;
const Graf = styled.p`
  cursor: pointer;
  margin-right: ${p => p.smallMarginRight && css`${p.smallMarginRight}px`}};
  margin-bottom: 0px;
  color: ${p => (p.active ? (!p.home && !p.isStory && !p.isNotFound ? p.theme.colors.pink : p.theme.colors.yellow) : !p.home && !p.isStory && !p.isNotFound ? p.theme.colors.blue : p.theme.colors.white)};
  padding-top: 5px;
  padding-bottom: 5px;
  font-weight: 400;
  font-size: ${p => p.theme.fontSizes.one};
  user-select: none;
  text-shadow: ${p => p.textShadow && shadow};
  transition: text-shadow .35s;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    padding-right: 5px;
    margin-right: ${p => !p.isLink && '20px'};
  }
`;
const TextBox = styled.div`
  display: flex;
  z-index: 1;
  margin-right: 25px;
  
  // Fix IE 11 so story button sits on left and nav items sit on right
  // (Extra rules account for a problem with space-between)
  flex: 1;
  justify-content: flex-end;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    margin-right: 0px;
  }
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

  const onClickContactHandler = () => boundHandleClickForApp('toggleBusinessCard');
  const onClickLegalHandler = () => boundHandleClickForApp('toggleLegalTerms');

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
          smallMarginLeft="10"
          smallMarginRight="17"
          fontSize="small"
          maxWidth="33"
          white={true}
          smallFont={true}
          done={!showStoryText} // Turn off when not /chapter
          show={showDelay}
        />
      )}
      <TextBox
        isStory={isStory}
      >
        <RestyledLink
          to={reverieLink}
          isStory={isStory}
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
          onClick={onClickContactHandler}
          home={isHome}
          isStory={isStory}
          isNotFound={isNotFound}
          textShadow={showTextShadow}
          headerMenuIsOpen={headerMenuIsOpen}
          animateImageBlur={animateImageBlur}
          smallMarginRight="13"
        >
          Contact
        </Graf>
        <Graf
          active={showLegalTerms}
          onClick={onClickLegalHandler}
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
