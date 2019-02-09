import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import StoryButton from './StoryButton.jsx';

const Footer = styled.footer`
  pointer-events: ${p => (p.nextFlight === 'home' ? 'none' : 'auto')};
  opacity: ${p => (p.nextFlight === 'home' ? '0' : '1')};
  transition: ${p => (p.homePageMagic ? 'opacity 1.5s' : '')};
  flex-shrink: 0;
  display: flex;
  justify-content: ${p => (!p.story ? 'flex-end' : 'space-between')};
  align-items: center;
  height: 55px;
  font-size: 1.1rem;
  z-index: 1;
  position: relative;

  @media (min-width: 848px) {
    justify-content: flex-end;
  }
`;
const UpperLine = styled.div`
  display: ${p => (p.home ? 'none' : '')};
  position: absolute;
  width: 100%;
  top: -1px;
  margin: 0px;
  height: 0.5px;
  background-color: #fd1172;
`;
const LinkToReverie = styled(Link)`
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
const Graf = styled.p`
  cursor: pointer;
  margin-right: 25px;
  color: ${props => (props.show ? '#FD1172' : '#6E7DAB')};
`;
const FooterText = styled.div`
  display: flex;
`;

export default function FooterContainer(props) {
  const { boundHandleClickForApp, state } = props;
  const {
    showBusinessCard,
    showLegalTerms,
    showStoryText,
    currentCaller,
    lastCaller,
    pointsUnknown,
    homePageMagic
  } = state;

  const isReverie = currentCaller === 'reverie';
  const isStory = currentCaller === 'chapter';
  const isHome = currentCaller === 'home';

  const whereItStarted =
    lastCaller !== 'home' && lastCaller !== 'i' ? `/${lastCaller}` : '/';
  const linkForReverie = isReverie ? whereItStarted : '/reverie';

  const nextFlight = isHome && pointsUnknown ? 'home' : '';

  return (
    <Footer
      home={isHome}
      story={isStory}
      nextFlight={nextFlight}
      homePageMagic={homePageMagic}
    >
      <UpperLine home={isHome} />
      <StoryButton
        story={isStory}
        showStoryText={showStoryText}
        boundHandleClickForApp={boundHandleClickForApp}
      />
      <FooterText>
        <LinkToReverie to={linkForReverie}>
          <Graf show={isReverie}>Reverie</Graf>
        </LinkToReverie>
        <Graf
          show={showBusinessCard}
          onClick={() => {
            boundHandleClickForApp('toggleBusinessCard');
          }}
        >
          Contact
        </Graf>
        <Graf
          show={showLegalTerms}
          onClick={() => boundHandleClickForApp('toggleLegalTerms')}
        >
          Legal
        </Graf>
      </FooterText>
    </Footer>
  );
}
