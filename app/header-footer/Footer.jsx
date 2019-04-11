import Button from '../shared/Button.jsx';
import React from 'react';
import styled from 'styled-components';
import StyledLink from '../primitives/StyledLink.jsx';

const Container = styled.footer`
  background-color: ${p => (p.home || p.storyPicActive ? 'transparent' : p.reverie ? p.theme.colors.reverieBlue : p.theme.colors.white)};
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
`;
const StoryButton = styled(Button)`
  color: white;
  margin-left: 25px;
  background-color: ${p => (!p.active ? p.theme.colors.pink : p.theme.colors.newBlue)};
  width: 43px;
  padding: 7px;

  https://stackoverflow.com/a/18997800
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    border: 1px #999 solid;;
    transform: scale(0.5);
  }
`;
const Graf = styled.p`
  cursor: pointer;
  margin-right: 20px;
  margin-bottom: 0px;
  color: ${p => (p.active ? p.theme.colors.pink : p.theme.colors.newBlue)};
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 5px;
  font-weight: 400;
  font-size: ${p => p.theme.fontSizes.one};
`;
const TextBox = styled.div`
  display: flex;
  z-index: 1;
`;

export default function FooterContainer(props) {
  const {
    boundHandleClickForApp,
    appState
  } = props;
  const {
    currentCaller,
    lastCaller,
    showBusinessCard,
    showLegalTerms,
    showStoryText,
  } = appState;

  const isReverie = currentCaller === 'reverie';
  const isStory = currentCaller === 'chapter';
  const isHome = currentCaller === 'home';

  // Remember: home is '/', not '/home'
  const whereItStarted =
    lastCaller !== 'home'
      && lastCaller !== 'i'
      ? `/${lastCaller}`
      : '/';
  const linkForReverie = isReverie
    ? whereItStarted
    : '/reverie';

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
        clickFunction={
          () => boundHandleClickForApp('toggleStoryText')
        }
        className="story-button"
        conditional={true}
        show={isStory}
        text={
          showStoryText
            ? 'Show'
            : 'Hide'
        }
      />
      <TextBox>
        <StyledLink

          to={linkForReverie}
        >
          <Graf
            active={
              (isReverie && 'active')
                || undefined
            }
          >
            Reverie
          </Graf>
        </StyledLink>
        <Graf
          active={showBusinessCard}
          onClick={
            () => {
              boundHandleClickForApp('toggleBusinessCard');
            }
          }
        >
          Contact
        </Graf>
        <Graf
          active={showLegalTerms}
          onClick={
            () => boundHandleClickForApp('toggleLegalTerms')
          }
        >
          Legal
        </Graf>
      </TextBox>
    </Container>
  );
}
