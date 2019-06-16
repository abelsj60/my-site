import Button from '../shared/Button.jsx';
import FooterAlert from './FooterAlert.jsx';
import React from 'react';
import styled from 'styled-components';
import StyledLink from '../primitives/StyledLink.jsx';

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

  @media (min-width: ${p => p.theme.mediaQueries.desktop}) {
    left: 5px;
    right: 5px;
  }
`;
const StoryButton = styled(Button)`
  color: white;
  margin-left: 25px;
  background-color: ${p => (!p.active ? p.theme.colors.pink : p.theme.colors.blue)};
  width: 43px;
  padding: 7px;
`;
const RestyledLink = styled(StyledLink)`
  margin-right: 20px;
`;
const Graf = styled.p`
  cursor: pointer;
  margin-right: ${p => !p.isLink ? '20px' : ''};
  margin-bottom: 0px;
  color: ${p => (p.active ? p.theme.colors.pink : !p.home ? p.theme.colors.blue : p.theme.colors.white)};
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 5px;
  font-weight: 400;
  font-size: ${p => p.theme.fontSizes.one};
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

  const reverieLink =
    isReverie
      ? `/${
        lastCaller !== 'home'
          ? lastCaller
          : '' // Add no text b/c 'home' is just a '/'
      }`
      : '/reverie';

  const callerWillBe =
    reverieLink.length > 1
      ? reverieLink.slice(1)
      : 'home'; // It's 'home' when the address is '/'
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
        text={
          showStoryText
            ? 'Image'
            : 'Story'
        }
      />
      <FooterAlert
        {...props}
      />
      <TextBox>
        <RestyledLink
          to={reverieLink}
          callerWillBe={callerWillBe}
          boundHandleClickForApp={boundHandleClickForApp}
        >
          <Graf
            active={
              (isReverie && 'active')
              || undefined
            }
            isLink={true}
            home={isHome}
          >
            Reverie
          </Graf>
        </RestyledLink>
        <Graf
          active={showBusinessCard}
          onClick={eventHandlerToToggleBusinessCard}
          home={isHome}
        >
          Contact
        </Graf>
        <Graf
          active={showLegalTerms}
          onClick={eventHandlerToToggleLegalTerms}
          home={isHome}
        >
          Legal
        </Graf>
      </TextBox>
    </Container>
  );
}
