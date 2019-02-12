import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import StyledLink from './StyledLink.jsx';
import StoryButton from './StoryButton.jsx';

const Footer = styled.footer`
  // background-color: ${p => (!p.home ? 'white' : '')};
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
const UpperLine = styled.div`
  display: ${p => (p.home ? 'none' : '')};
  position: absolute;
  width: 100%;
  top: -1px;
  margin: 0px;
  height: 0.5px;
  background-color: #fd1172;
`;
// Why css`` in next component: https://github.com/styled-components/styled-components/issues/1198#issuecomment-336628848
const RestyledLink = styled(StyledLink)`
  color: ${p => (p.show === 'active' ? '#fd1172' : '#6e7dab')};
`;
const Graf = styled.p`
  cursor: pointer;
  margin-right: 25px;
  color: ${props => (props.show ? '#fd1172' : '#6e7dab')};
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
  const reverieIsActive = isReverie ? 'active' : '';
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
        <Graf show={isReverie}>
          <RestyledLink show={reverieIsActive} to={linkForReverie}>
            Reverie
          </RestyledLink>
        </Graf>
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
