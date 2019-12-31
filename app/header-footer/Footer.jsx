import adjustTabIndex from '../helpers/adjustTabIndex.js';
import eventManagement from '../helpers/eventManagement.js';
import Loader from '../shared/Loader.jsx';
import React from 'react';
import { isIE } from 'react-device-detect';
import styled from 'styled-components';
import StyledLink from '../primitives/StyledLink.jsx';

const Container = styled.footer`
  filter: ${p => p.tempContent === 3 && p.theme.blur};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  height: 55px;
  font-size: ${p => p.theme.fontSizes.one};
  position: relative;
  width: 100%;
  max-width: 70rem;
  z-index: 1;

  // May use in future, but on iPhones w/homebar, the bottom of the Footer cooperates
  // On iPhones w/o the homebar, the screen will leap up, but we don't push it down
  // w/a call to window.scrollTo, so...who cares?  
  // padding-bottom: env(safe-area-inset-bottom);
  // padding-bottom: cover(safe-area-inset-bottom);

  // Don't blur content when header menu is hidden due to expanding screen
  @media (min-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    filter: unset;
  }
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
  opacity: ${p => p.isReverie || !p.illustrationDirection || (p.illustrationDirection === 'exit' && p.illustrationLevel < 2) || (p.illustrationDirection === 'enter' && p.illustrationLevel < 1) ? '1' : '0'};
  transition: ${p => p.illustrationLevel > 0  && p.illustrationLevel < 3 && 'opacity .35s'};
  
  @media (min-width: ${p => p.theme.mediaQueries.desktop}) {
    left: 5px;
    right: 5px;
  }
`;
const Spacer = styled.div`
  display: flex;
  z-index: 1;
  flex: 1;
  height: 100%;
`;
const TextBox = styled.div`
  max-width: 190px;
  display: flex;
  align-items: center;
  margin-right: 25px;
  height: 100%;
`;
const RestyledLink = styled(({
  active,
  home,
  illustrationLevel,
  illustrationDirection,
  isIE,
  isLink,
  isNotFound,
  isReverie,
  isStory,
  marginRight,
  tempContent,
  ...rest
}) => <StyledLink {...rest} />)`
  ${p => p.isIE && 'flex-shrink: 0;'}
  ${p => !p.isIE && 'flex: 1;'}
  text-align: center;
  cursor: pointer;
  margin-right: 20px;
  color: ${p => (p.active ? (!p.home && !p.isStory && !p.isNotFound ? p.theme.colors.pink : p.theme.colors.yellow) : !p.home && !p.isStory && !p.isNotFound ? p.theme.colors.blue : p.theme.colors.white)};
  font-weight: 400;
  font-size: ${p => p.theme.fontSizes.zero};
  user-select: none;
  text-shadow: ${p => !p.isReverie && p.tempContent < 1 && ((p.home && p.coverValY < 0) || ((p.illustrationDirection === 'enter' && p.illustrationLevel >= 2) || (p.illustrationDirection === 'exit' && p.illustrationLevel > 2))) && '2px 2px 2.5px rgba(0, 0, 0, .4)'};
  transition: ${p => p.illustrationLevel > 0 && p.illustrationLevel < 3 && '.35s'};

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    font-size: ${p => p.theme.fontSizes.one};
    margin-right: 25px;
  }
`;
const PlainLink = styled.a`
  ${p => p.isIE && 'flex-shrink: 0;'}
  ${p => !p.isIE && 'flex: 1;'}
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  ${p => p.marginRight && 'margin-right: 20px;'}
  color: ${p => (p.active ? (!p.home && !p.isStory && !p.isNotFound ? p.theme.colors.pink : p.theme.colors.yellow) : !p.home && !p.isStory && !p.isNotFound ? p.theme.colors.blue : p.theme.colors.white)};
  font-weight: 400;
  font-size: ${p => p.theme.fontSizes.zero};
  user-select: none;
  text-shadow: ${p => !p.isReverie && p.tempContent < 1 && ((p.home && p.coverValY < 0) || ((p.illustrationDirection === 'enter' && p.illustrationLevel >= 2) || (p.illustrationDirection === 'exit' && p.illustrationLevel > 2))) && '2px 2px 2.5px rgba(0, 0, 0, .4)'};
  transition: ${p => p.illustrationLevel > 0 && p.illustrationLevel < 3 && '.35s'};

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    font-size: ${p => p.theme.fontSizes.one};
    ${p => p.marginRight && 'margin-right: 25px;'}
  }
`;
const StoryLink = styled.a`
  display: ${p => !p.isStory ? 'none' : ''};
  // Double check here, the footer container is blurred by headerMenu in Footer
  // Here, we just need to handle the business card and legal terms
  filter: ${p => p.theme.blurForTempContent && p.tempContent < 3 && p.theme.blur};
  margin-left: 25px;
  width: 67px;
  padding: 7px 0px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  border: 1px rgba(255, 255, 255, .6) solid;
  background-color: ${p => p.tempContent < 1 && ((p.illustrationDirection === 'enter' && p.illustrationLevel >= 2) || (p.illustrationDirection === 'exit' && p.illustrationLevel > 2)) ? 'rgba(0, 0, 0, .2)' : 'rgba(0, 0, 0, .125)'}; // Multi-value?
  box-shadow: ${p => p.tempContent < 1 && ((p.illustrationDirection === 'enter' && p.illustrationLevel >= 2) || (p.illustrationDirection === 'exit' && p.illustrationLevel > 2)) && '2px 2px 2.5px rgba(0, 0, 0, .3)'};
  // Note: Transitition timing is faster than its siblings w/hardware acceleration (.25s) and slower w/o it (.5s)
  transition: ${p => p.illustrationLevel > 0 && p.illustrationLevel < 3 ? 'box-shadow .23s, background-color .23s' : ''};
  user-select: none;
  z-index: 0;
`;
const StoryLinkText = styled.p`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.one};
  font-weight: 400;
  margin-bottom: 0px;
`;

export default function FooterContainer(props) {
  const {
    appState,
    boundHandleClickForApp,
    setIllustrationLevels
  } = props;
  const {
    currentCaller,
    illustrationDelay,
    illustrationDirection,
    illustrationLevel,
    illustrationState,
    lastCaller,
    tempContent
  } = appState;

  const handleClickForContactLink = event => {
    eventManagement(event);
    boundHandleClickForApp('updateTempContent', 1);
  };
  const handleClickForLegalLink = event => {
    eventManagement(event);
    boundHandleClickForApp('updateTempContent', 2);
  };
  const handleClickForStoryLink = event => {
    /* Alternate approach:

      The StoryLink currently reacts to App's existing illustrationState.
        -Location swaps are handled by the Constructor in ContentLoader
          -Via boundHandleClickForApp('updateIllustrationState')
        -Content swaps are updated by ContentLoader.cDU
          -Via boundHandleClickForApp('updateIllustrationState')

      Future alternatives:
        Check the illustration's state here, call setState to update it, 
        then call 'toggleStoryText' via its callback (param two).
          -One detriment is that we'd stop updating the state of illustrationLevel
            when internally navigating.
    */

    eventManagement(event);

    if (illustrationState < 0) {
      boundHandleClickForApp('toggleIllustrationDelay');
    } else if (illustrationLevel === 0 || illustrationLevel === 3) {
      const isNarrow = document.documentElement.clientWidth < 690;
      const checkIllustrationLevels = idx => props.illustrationLevels[idx];

      /* Reset illustrationLevels: 

        We need to reset the headerText value in illustrationLevels if the browser is narrowed
        or widened after revealing the illustration b/c the number of header elements will 
        change. Thus, they won't properly decrement illustrationLevels[0]. We need to 
        make the adjustment at the top of the animation so our math stays true.

        Note: We're relying on pass-by-reference, so must access via props.
      */

      if (!isNarrow && checkIllustrationLevels(0) === 2) {
        if (checkIllustrationLevels(0) < 6) {
          props.illustrationLevels[0] = 6;
        }

        if (checkIllustrationLevels(1) > 0) {
          props.illustrationLevels[1] = 0;
        }
      } else if (isNarrow && checkIllustrationLevels(0) === 6) {
        if (checkIllustrationLevels(0) > 2) {
          props.illustrationLevels[0] = 2;
        }

        if (checkIllustrationLevels(1) < 1) {
          props.illustrationLevels[1] = 1;
        }
      }

      boundHandleClickForApp('toggleStoryText');
    }
  };
  const handleTranstionEnd = (event, idx) => {
    // Remember, the StoryLink has two transitions, so adds two to total...
    eventManagement(event);
    setIllustrationLevels(idx);
  };
  const handleTransitionEndForStoryLink = event => handleTranstionEnd(event, 6);
  const handleTransitionEndForLine = event => handleTranstionEnd(event, 7);

  const isReverie = currentCaller === 'reverie';
  const isStory = currentCaller === 'chapter';
  const isHome = currentCaller === 'home';
  const isNotFound = currentCaller === 'not-found';
  // No text b/c 'home' is '/'
  const reverieLink = isReverie ? `/${lastCaller !== 'home' ? lastCaller : ''}` : '/reverie';
  const tabIndexForStoryLink = adjustTabIndex(tempContent);
  const tabIndexForRest = adjustTabIndex(tempContent, true);

  return (
    <Container
      home={isHome}
      story={isStory}
      tempContent={tempContent}
    >
      <Line
        home={isHome}
        hide={illustrationLevel}
        illustrationLevel={illustrationLevel}
        illustrationDirection={illustrationDirection}
        isNotFound={isNotFound}
        isReverie={isReverie}
        onTransitionEnd={handleTransitionEndForLine}
      />
      <StoryLink
        href=''
        illustrationDirection={illustrationDirection}
        illustrationLevel={illustrationLevel}
        isStory={isStory}
        onClick={handleClickForStoryLink}
        onTransitionEnd={handleTransitionEndForStoryLink}
        tabIndex={tabIndexForStoryLink}
        tempContent={tempContent}
      >
        <StoryLinkText>
          {illustrationDelay
            ? 'Cancel'
            : illustrationDirection === 'enter' && illustrationLevel > 0
              ? 'Text on'
              : 'Text off'}
        </StoryLinkText>
      </StoryLink>
      {isStory && (
        <Loader
          // done={!illustrationDelay} // Snappier when disabled...
          fontSize="small"
          marginBottom="2"
          marginLeft="20"
          marginTop="5"
          maxWidth="33"
          smallMarginLeft="12"
          smallMarginRight="17"
          show={illustrationDelay}
          smallFont={true}
          white={true}
        />
      )}
      <Spacer
        isStory={isStory}
      />
      <TextBox>
        <RestyledLink
          active={isReverie}
          boundHandleClickForApp={boundHandleClickForApp}
          home={isHome}
          illustrationLevel={illustrationLevel}
          illustrationDirection={illustrationDirection}
          isIE={isIE}
          isLink={true}
          isNotFound={isNotFound}
          isReverie={isReverie}
          isStory={isStory}
          marginRight="never"
          onTransitionEnd={handleTransitionEndForStoryLink}
          tabIndex={tabIndexForRest}
          tempContent={tempContent}
          to={reverieLink}
        >
          Reverie
        </RestyledLink>
        <PlainLink
          active={tempContent === 1}
          home={isHome}
          href=''
          illustrationLevel={illustrationLevel}
          illustrationDirection={illustrationDirection}
          isIE={isIE}
          isNotFound={isNotFound}
          isReverie={isReverie}
          isStory={isStory}
          marginRight={true}
          onClick={handleClickForContactLink}
          onTransitionEnd={handleTransitionEndForStoryLink}
          tabIndex={tabIndexForRest}
          tempContent={tempContent}
        >
          Contact
        </PlainLink>
        <PlainLink
          active={tempContent === 2}
          home={isHome}
          href=''
          illustrationLevel={illustrationLevel}
          illustrationDirection={illustrationDirection}
          isIE={isIE}
          isReverie={isReverie}
          isStory={isStory}
          isNotFound={isNotFound}
          onClick={handleClickForLegalLink}
          onTransitionEnd={handleTransitionEndForStoryLink}
          tabIndex={tabIndexForRest}
          tempContent={tempContent}
        >
          Legal
        </PlainLink>
      </TextBox>
    </Container>
  );
}
