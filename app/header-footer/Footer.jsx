import Button from '../shared/Button.jsx';
import Graf from '../primitives/Graf.jsx';
import React from 'react';
import styled from 'styled-components';
import StyledLink from '../primitives/StyledLink.jsx';

const Container = styled.footer`
  background-color: ${p => (!p.home ? 'white' : undefined)};
  flex-shrink: 0;
  display: flex;
  justify-content: ${p => (!p.story ? 'flex-end' : 'space-between')};
  align-items: center;
  height: 55px;
  font-size: 1.1rem;
  z-index: ${p => (p.home ? '2' : undefined)};
  position: relative;

  @media (min-width: 848px) {
    justify-content: flex-end;
  }
`;
const Line = styled.div`
  position: absolute;
  width: 100%;
  top: -1px;
  margin: 0px;
  height: 0.5px;
  background-color: #fd1172;

  display: ${p => (p.home ? 'none' : undefined)};
`;
const StoryButton = styled(Button)`
  color: ${p => (!p.active ? '#ffe74c' : '#6e7dab')};
  margin-left: 25px;
  background-color: ${p => (!p.active ? '#FD1172' : undefined)};
  border: ${p => `0.5px solid ${!p.active ? '#fd1172' : '#455057'}`};

  @media (min-width: 848px) {
    display: none;
  }
`;
const RestyledLink = styled(StyledLink)`
  margin-right: 25px;
  color: ${p => (p.active ? '#fd1172' : '#6e7dab')};
`;
const RestyledGraf = styled(Graf)`
  cursor: pointer;
  margin-right: 25px;
  color: ${p => (p.active ? '#fd1172' : '#6e7dab')};
`;
const TextBox = styled.div`
  display: flex;
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

  // home is '/', not '/home'
  const whereItStarted =
    lastCaller !== 'home' && lastCaller !== 'i'
      ? `/${lastCaller}`
      : '/';
  const linkForReverie = isReverie
    ? whereItStarted
    : '/reverie';

  return (
    <Container home={isHome} story={isStory}>
      <Line home={isHome} />
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
            ? 'Hide story'
            : 'Show story'
        }
      />
      <TextBox>
        <RestyledLink
          active={
            (isReverie && 'active')
            || undefined
          }
          to={linkForReverie}
        >
          Reverie
        </RestyledLink>
        <RestyledGraf
          active={showBusinessCard}
          onClick={
            () => boundHandleClickForApp('toggleBusinessCard')
          }
        >
          Contact
        </RestyledGraf>
        <RestyledGraf
          active={showLegalTerms}
          onClick={
            () => boundHandleClickForApp('toggleLegalTerms')
          }
        >
          Legal
        </RestyledGraf>
      </TextBox>
    </Container>
  );
}
