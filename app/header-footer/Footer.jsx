import React from 'react';
import styled, { css } from 'styled-components';

import Graf from '../primitives/Graf.jsx';
import StyledLink from '../primitives/StyledLink.jsx';
import StoryButton from './StoryButton.jsx';

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

  ${p =>
    p.home &&
    css`
      top: -1px;
      right: 25px;
      width: 150px;
      background-color: white;
    `};
`;
const RestyledLink = styled(StyledLink)`
  color: ${p => (p.show === 'active' ? '#fd1172' : '#6e7dab')};
`;
const RestyledGraf = styled(Graf)`
  cursor: pointer;
  margin-right: 25px;
  color: ${p => (p.show ? '#fd1172' : '#6e7dab')};
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

  return (
    <Container home={isHome} story={isStory}>
      <Line home={isHome} />
      <StoryButton
        story={isStory}
        showStoryText={showStoryText}
        boundHandleClickForApp={boundHandleClickForApp}
      />
      <TextBox>
        <RestyledGraf>
          <RestyledLink show={isReverie} to={linkForReverie}>
            Reverie
          </RestyledLink>
        </RestyledGraf>
        <RestyledGraf
          show={showBusinessCard}
          onClick={() => {
            boundHandleClickForApp('toggleBusinessCard');
          }}
        >
          Contact
        </RestyledGraf>
        <RestyledGraf
          show={showLegalTerms}
          onClick={() => boundHandleClickForApp('toggleLegalTerms')}
        >
          Legal
        </RestyledGraf>
      </TextBox>
    </Container>
  );
}
