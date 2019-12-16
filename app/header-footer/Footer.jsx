import eventManagement from '../helpers/eventManagement.js';
import Loader from '../shared/Loader.jsx';
import React from 'react';
import styled from 'styled-components';
import StyledLink from '../primitives/StyledLink.jsx';

const Container = styled.footer`
  filter: ${p => p.tempContent === 3 && p.theme.blur};
  flex-shrink: 0;
  display: flex;
  justify-content: ${p => (!p.story ? 'flex-end' : 'space-between')};
  align-items: center;
  height: 55px;
  font-size: ${p => p.theme.fontSizes.one};
  position: relative;
  width: 100%;
  max-width: 70rem;

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
const RestyledLink = styled(({
  isStory,
  ...rest
}) => <StyledLink {...rest} />)`
  margin-right: 20px;
`;
const Graf = styled.p`
  cursor: pointer;
  margin-right: ${p => !p.isLink && p.marginRight !== 'none' && '20px'}; // marginRight default is undefined/falsy
  margin-bottom: 0px;
  color: ${p => (p.active ? (!p.home && !p.isStory && !p.isNotFound ? p.theme.colors.pink : p.theme.colors.yellow) : !p.home && !p.isStory && !p.isNotFound ? p.theme.colors.blue : p.theme.colors.white)};
  padding-top: 5px;
  padding-bottom: 5px;
  font-weight: 400;
  font-size: ${p => p.theme.fontSizes.zero};
  user-select: none;
  text-shadow: ${p => !p.isReverie && p.tempContent < 1 && ((p.home && p.coverValY < 0) || ((p.illustrationDirection === 'enter' && p.illustrationLevel >= 2) || (p.illustrationDirection === 'exit' && p.illustrationLevel > 2))) && '2px 2px 2.5px rgba(0, 0, 0, .4)'};
  transition: ${p => p.illustrationLevel > 0 && p.illustrationLevel < 3 && '.35s'};

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    font-size: ${p => p.theme.fontSizes.one};
    margin-right: ${p => p.marginRight !== 'never' ? '20px' : ''};
    padding-right: 5px;
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
const ButtonStructure = styled.button`
  display: ${p => !p.isStory ? 'none' : ''};
  // Double check here, the footer container is blurred by headerMenu in Footer
  // Here, we just need to handle the business card and legal terms
  filter: ${p => p.theme.blurForTempContent && p.tempContent < 3 && p.theme.blur};
  margin-left: 25px;
  width: 69px;
  padding: 7px 0px;
  text-align: center;
  cursor: pointer;
  position: relative;
  background-color: transparent; // otherwise, button grey
  border: 1px rgba(255, 255, 255, .6) solid;
  box-shadow: ${p => p.tempContent < 1 && ((p.illustrationDirection === 'enter' && p.illustrationLevel >= 2) || (p.illustrationDirection === 'exit' && p.illustrationLevel > 2)) && '2px 2px 2.5px rgba(0, 0, 0, .3)'};
  // Note: Transitition timing is faster than its siblings w/hardware acceleration (.25s) and slower w/o it (.5s)
  transition: ${p => p.illustrationLevel > 0 && p.illustrationLevel < 3 ? 'box-shadow .23s' : ''};
  user-select: none;
  z-index: 0;

  :focus {
    outline: 0;
  }
`;
const ButtonCover = styled.div`
  background-color: ${p => p.theme.colors.black};
  opacity: ${p => (p.illustrationDirection === 'enter' && p.illustrationLevel >= 2) || (p.illustrationDirection === 'exit' && p.illustrationLevel > 2) ? '.2' : '.125'}; // Multi-value?
  transition: ${p => p.illustrationLevel > 0 && 'opacity .23s'};
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  z-index: -1;
`;
const ButtonText = styled.p`
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
  const handleClickForStoryButton = event => {
    /* Alternate approach:

      The button currently reacts to App's existing illustrationState.
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
      /* Reset illustrationLevels: 

        We need to reset the headerText value in illustrationLevels if the browser is narrowed
        or widened after revealing the illustration b/c the number of header elements will 
        change. This, they won't properly decrement illustrationLevels[0]. We need to 
        make the adjustment at the top of the animation so our math stays true!

        Note: We're relying on pass-by-reference, so must access via props.
      */
      const isNarrow = document.documentElement.clientWidth < 690;

      if (!isNarrow && props.illustrationLevels[0] === 2) {
        props.illustrationLevels[0] = 6;
      } else if (isNarrow && props.illustrationLevels[0] === 6) {
        props.illustrationLevels[0] = 2;
      }

      boundHandleClickForApp('toggleStoryText');
    }
  };

  const handleTranstionEnd = (event, idx) => {
    // Remember, the button has two transitions, so adds two to total...
    eventManagement(event);
    setIllustrationLevels(idx);
  };
  const handleTransitionEndForTextAndButton = event => handleTranstionEnd(event, 5);
  const handleTransitionEndForLine = event => handleTranstionEnd(event, 6);

  const isReverie = currentCaller === 'reverie';
  const isStory = currentCaller === 'chapter';
  const isHome = currentCaller === 'home';
  const isNotFound = currentCaller === 'not-found';
  // No text b/c 'home' is '/'
  const reverieLink = isReverie ? `/${lastCaller !== 'home' ? lastCaller : ''}` : '/reverie';

  return (
    <Container
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
      <ButtonStructure
        illustrationDirection={illustrationDirection}
        illustrationLevel={illustrationLevel}
        isStory={isStory}
        onClick={handleClickForStoryButton}
        onTransitionEnd={handleTransitionEndForTextAndButton}
        tempContent={tempContent}
      >
        <ButtonCover
          illustrationDirection={illustrationDirection}
          illustrationLevel={illustrationLevel}
        />
        <ButtonText>
          {illustrationDelay
            ? 'Cancel'
            : illustrationDirection === 'enter' && illustrationLevel > 0
              ? 'Text on'
              : 'Text off'}
        </ButtonText>
      </ButtonStructure>
      {isStory && (
        <Loader
          // done={!illustrationDelay} // Snappier when disabled...
          fontSize="small"
          marginBottom="2"
          marginLeft="20"
          maxWidth="33"
          smallMarginLeft="12"
          smallMarginRight="17"
          show={illustrationDelay}
          smallFont={true}
          white={true}
        />
      )}
      <TextBox
        isStory={isStory}
      >
        <RestyledLink
          boundHandleClickForApp={boundHandleClickForApp}
          isStory={isStory}
          to={reverieLink}
        >
          <Graf
            active={isReverie}
            home={isHome}
            illustrationLevel={illustrationLevel}
            illustrationDirection={illustrationDirection}
            isLink={true}
            isNotFound={isNotFound}
            isReverie={isReverie}
            isStory={isStory}
            marginRight="never"
            onTransitionEnd={handleTransitionEndForTextAndButton}
            tempContent={tempContent}
          >
            Reverie
          </Graf>
        </RestyledLink>
        <Graf
          active={tempContent === 1}
          home={isHome}
          illustrationLevel={illustrationLevel}
          illustrationDirection={illustrationDirection}
          isNotFound={isNotFound}
          isReverie={isReverie}
          isStory={isStory}
          onClick={handleClickForContactLink}
          onTransitionEnd={handleTransitionEndForTextAndButton}
          tempContent={tempContent}
        >
          Contact
        </Graf>
        <Graf
          active={tempContent === 2}
          home={isHome}
          illustrationLevel={illustrationLevel}
          illustrationDirection={illustrationDirection}
          isReverie={isReverie}
          isStory={isStory}
          isNotFound={isNotFound}
          marginRight="none"
          onClick={handleClickForLegalLink}
          onTransitionEnd={handleTransitionEndForTextAndButton}
          tempContent={tempContent}
        >
          Legal
        </Graf>
      </TextBox>
    </Container>
  );
}
