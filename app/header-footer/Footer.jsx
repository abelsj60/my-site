import Button from '../shared/Button.jsx';
import Graf from '../primitives/Graf.jsx';
import React from 'react';
import styled from 'styled-components';
import StyledLink from '../primitives/StyledLink.jsx';

const Container = styled.footer`
  background-color: ${p => (p.home ? 'transparent' : p.reverie ? '#d2e7ff' : 'white')};
  flex-shrink: 0;
  display: flex;
  justify-content: ${p => (!p.story ? 'flex-end' : 'space-between')};
  align-items: center;
  height: 55px;
  font-size: 1.1rem;

  @media (min-width: 848px) {
    justify-content: flex-end;
  }
`;
const Line = styled.div`
  display: ${p => p.home || p.hide ? 'none' : ''};
  position: absolute;
  z-index: 0;
  // width: 100%;
  left: 25px;
  right: 25px;
  top: ${p => parseInt(p.theme.pageHeight) - 55}px;
  // left: 0px;
  margin: 0px;
  height: 1px;
  transform: scaleY(0.5);
  background-color: #fd5198;
`;
const StoryButton = styled(Button)`
  color: ${p => (!p.active ? '#ffe74c' : '#6e7dab')};
  margin-left: 25px;
  background-color: ${p => (!p.active ? '#fd1172' : undefined)};
  border: ${p => `1px solid ${!p.active ? '#fd1172' : '#e4e7ef'}`};
  width: 43px;
  padding: 7px;

  @media (min-width: 848px) {
    display: none;
  }

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
const RestyledGraf = styled(Graf)`
  cursor: pointer;
  margin-right: 20px;
  color: ${p => (p.active ? '#fd1172' : '#6e7dab')};
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 5px;
  font-weight: 400;
  // font-style: italic;
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
    >
      <Line
        home={isHome}
        hide={
          (!showStoryText && !isReverie)
            || showBusinessCard
            || showLegalTerms
        }
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
          <RestyledGraf
            active={
              (isReverie && 'active')
            || undefined
            }
          >
            Reverie
          </RestyledGraf>
        </StyledLink>
        <RestyledGraf
          active={showBusinessCard}
          onClick={
            () => {
              boundHandleClickForApp('toggleBusinessCard');
            }
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
