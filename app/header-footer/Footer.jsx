import React from 'react';
import styled from 'styled-components';

import Graf from '../primitives/Graf.jsx';
import StyledLink from '../primitives/StyledLink.jsx';
import Button from '../shared/Button.jsx';
// import StoryButton from './StoryButton.jsx';

const Container = styled.footer`
  background-color: ${p => (!p.home ? 'white' : '')};
  flex-shrink: 0;
  display: flex;
  justify-content: ${p => (!p.story ? 'flex-end' : 'space-between')};
  align-items: center;
  height: 55px;
  font-size: 1.1rem;
  z-index: ${p => (p.home ? '2' : '')};
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

  display: ${p => (p.home ? 'none' : '')};
`;
const StoryButton = styled(Button)`
  color: ${p => (!p.active ? '#ffe74c' : '#6e7dab')};
  margin-left: 25px;
  background-color: ${p => (!p.active ? '#FD1172' : '')};
  border: ${p => `0.5px solid ${!p.active ? '#fd1172' : '#455057'}`};

  @media (min-width: 848px) {
    display: none;
  }
`;
const RestyledLink = styled(StyledLink)`
  margin-right: 25px;
  color: ${p => (p.reverie === 'active' ? '#fd1172' : '#6e7dab')};
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
  const { boundHandleClickForApp, state } = props;
  const {
    showBusinessCard,
    showLegalTerms,
    showStoryText,
    currentCaller,
    lastCaller
  } = state;

  const isReverie = currentCaller === 'reverie' ? 'active' : '';
  const isStory = currentCaller === 'chapter';
  const isHome = currentCaller === 'home';

  const whereItStarted =
    lastCaller !== 'home' && lastCaller !== 'i' ? `/${lastCaller}` : '/'; // home is '/', not '/home'
  const linkForReverie = isReverie ? whereItStarted : '/reverie';

  const textForStoryButton = showStoryText ? 'Hide story' : 'Show story';

  return (
    <Container home={isHome} story={isStory}>
      <Line home={isHome} />
      <StoryButton
        active={showStoryText}
        className="story-button"
        clickFunction={() => boundHandleClickForApp('toggleStoryText')}
        conditional={true}
        show={isStory}
        text={textForStoryButton}
      />
      <TextBox>
        <RestyledLink reverie={isReverie} to={linkForReverie}>
          Reverie
        </RestyledLink>
        <RestyledGraf
          active={showBusinessCard}
          onClick={() => {
            boundHandleClickForApp('toggleBusinessCard');
          }}
        >
          Contact
        </RestyledGraf>
        <RestyledGraf
          active={showLegalTerms}
          onClick={() => boundHandleClickForApp('toggleLegalTerms')}
        >
          Legal
        </RestyledGraf>
      </TextBox>
    </Container>
  );
}
