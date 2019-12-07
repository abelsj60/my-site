import ChapterNav from './ChapterNav.jsx';
import eventManagement from '../helpers/eventManagement.js';
import fallbackBlurOne from '../../docs/assets/images/convert-to-data-uri/chapter-1-ink-50x50-53.png';
import fallbackBlurTwo from '../../docs/assets/images/convert-to-data-uri/chapter-2-ink-50x50-53.png';
import fallbackBlurThree from '../../docs/assets/images/convert-to-data-uri/chapter-3-ink-50x50-53.png';
import fallbackBlurFour from '../../docs/assets/images/convert-to-data-uri/chapter-4-ink-50x50-53.png';
import { isIE } from 'react-device-detect';
import marked from 'marked';
import Main from '../primitives/Main.jsx';
import offlineImageToggle from '../helpers/offlineImageToggle.js';
import Overflow from '../primitives/Overflow.jsx';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import ContentHolder from '../primitives/ContentHolder.jsx';
import Shelf from '../shared/Shelf.jsx';
import styled, { css } from 'styled-components';
import urlPrefix from '../helpers/urlPrefix';

const RestyledContentHolder = styled(ContentHolder)`
  opacity: ${p => p.tempContent !== 3 && ((p.illustrationDirection === 'exit' && p.illustrationLevel < 2) || (p.illustrationDirection === 'enter' && p.illustrationLevel < 1)) ? '1' : '0'};
  transition: ${p => p.illustrationLevel > 0 && p.illustrationLevel < 3 && 'opacity .35s'};
  pointer-events: ${p => p.illustrationLevel >  0 && 'none'};
  flex-direction: column;
  // Added z-index for weird behavior on IE 11, per BrowserStack testing:
  ${p => p.isIE && 'z-index: 1;'}
`;
const RestyledShelf = styled(Shelf)`
  flex-direction: column;
  align-items: center;
`;
const PictureHolder = styled.section`
  z-index: -1;
`;
const Chapter = styled.h2`
  color: #fff7c9;
  font-weight: 400;
  font-size: ${p => p.theme.fontSizes.nine};
  font-style: italic;
  margin-bottom: 2px;
  text-decoration: underline;
`;
const BookTitle = styled.h1`
  font-family: 'Playfair Display',serif;
  margin: 0px auto 39px;
  font-size: 2rem;
  font-weight: 700;
  color: ${p => p.theme.colors.yellow};
  text-align: center;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, .6);
  max-width: 500px;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    font-size: 2.5rem;
  }

  @media (min-width: ${p => p.theme.mediaQueries.narrowBreakOne}) {
    font-size: 3.3rem;
  }
`;
const TagLine = styled.p`
  font-style: italic;
  font-size: ${p => p.theme.fontSizes.twentyTwo};
  color: #fff093;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, .6);
  text-align: center;
  margin-top: -4px;
  margin-bottom: 4px;

  @media (min-width: ${p => p.theme.mediaQueries.tinyViewTwo}) {
    font-size: ${p => p.theme.fontSizes.six};
  }
`;
const ChapterTitle = styled.h2`
  font-family: 'Aref Ruqaa', serif;
  font-size: 3.3rem;
  font-weight: 600;
  margin-top: -8px;
  margin-bottom: 15px;
  color: ${p => p.theme.colors.yellow};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;
const Portal = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  z-index: 0;
  background-color: navy;
  opacity: ${p => (p.illustrationDirection === 'exit' && p.illustrationLevel > 2) || (p.illustrationDirection === 'enter' && p.illustrationLevel >= 1) ? '0' : '.5'};
  transition: ${p => p.illustrationLevel > 0 && p.illustrationLevel < 3 && 'opacity .35s'};
`;
const FallbackBlur = styled.img`
  position: absolute;
  object-fit: cover;
  font-family: 'object-fit: cover;';
  top: 0px;
  left: 0px;
  z-index: -1;
  // May need to fill page: https://stackoverflow.com/a/30794589
  height: 100%;
  width: 100%;
  // imageLoaded (BlurredImage) comes from ContentLoader.jsx. Starts 
  // at 0, set to 1 by handleLoadForBlurredImage(). Set to 2 by 
  // handleTransitionEndForFallbackBlur().
  // Let's not remove the blurred fallback until we KNOW the main illustration is 
  // in. Here's the state: 
  //    a) < 0 --> not loaded
  //    b) > 0 --> loaded
  //    c) 0 --> n/a
  // Always show when blurredImage isn't loaded, mainImage isn't loaded or the network is lost. 
  // Note: We don't need to check p.offline b/c imageLoaded is set to 0 when the network is
  // lost via ClickHandling. This ensures the Fallback's seen and the transition's off.
  opacity: ${p => p.imageLoaded > 0 ? '0' : '1'};
  // This is very persnickety! We only want the transition to run when the main images are ready.
  // So, don't transition on p.imageLoaded < 0 or p.illustrationState < 0 or the net's lost.
  // We don't need to check p.offline b/c imageLoaded is set to 0 when the net's lost. 
  // REMEMBER --> ilustrationState = MainImage load state! 
  transition: ${p => (p.imageLoaded > 0 || p.illustrationState > 0) && 'opacity .5s'};
`;
const BlurredImage = styled.img`
  // Ensure img top is TOP
  position: absolute;
  object-fit: cover;
  font-family: 'object-fit: cover;';
  top: 0px;
  left: 0px;
  z-index: -2;
  // May need to fill page: https://stackoverflow.com/a/30794589
  height: 100%;
  width: 100%;
  // Do not check for illustrationState on opacity b/c we always this to be visible beneath the FallbackBlur
  opacity: ${p => (p.tempContent < 1 && ((p.illustrationDirection === 'exit' && p.illustrationLevel > 2) || (p.illustrationDirection === 'enter' && p.illustrationLevel >= 2))) ? '0' : '1'};
  // Transition runs if we're turning off the text. Otherwise, FallbackBlur handles the reveal
  transition: ${p => p.illustrationLevel > 0 && p.illustrationLevel < 3 && css`opacity ${p.illustrationDirection === 'enter' ? '.5s' : '.35s'} ease-in-out`};

  // The mediaQ ensures the blur goes away if the full-screen header menu is
  // turned on when the user increases the browser window's width
  @media (min-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    opacity: ${p => p.illustrationLevel > 0 && p.theme.blurForTempContent && p.tempContent === 3 ? '0' : ''};
  }
`;
const Image = styled.img`
  // Ensure img top is TOP
  position: absolute;
  object-fit: cover;
  font-family: 'object-fit: cover;';
  top: 0px;
  left: 0px;
  z-index: -3;
  // May need to fill page: https://stackoverflow.com/a/30794589
  height: 100%;
  width: 100%;
`;
const StoryText = styled.section`
  font-size: ${p => p.theme.fontSizes.twelve};

  p {
    color: ${p => p.theme.colors.white};
    margin-bottom: ${p => p.theme.bottomMargin.regular};
    // Gets cut off in chrome (add saveSerifs to ContentHolder).
    margin-left: 2px; 

    &:last-child {
      margin-bottom: 0px;
    }
  }
`;

export default function Story(props) {
  const {
    appState,
    boundHandleClickForApp,
    boundHandleClickForContentLoader,
    contentState,
    overflowRef
  } = props;
  const {
    illustrationDelay,
    illustrationDirection,
    illustrationLevel,
    illustrationState,
    images,
    offline,
    tempContent
  } = appState;
  const {
    allContentData,
    chapterIndex,
    imageLoaded
  } = contentState;
  const {
    description,
    number,
    title
  } = allContentData[chapterIndex].attributes;
  const bookTitle = 'The Magical, Semi-Fictional Biography of a Real Boy';
  const dek = 'An experiment in digital + traditional storytelling';
  const isOffline = offline && imageLoaded < 2;
  const blurredImageDescription = "This illustration depicts a blurred version of this chapter's full-page illustration, which lives one layer below it. This image obscures the main image so people can easily read this chapter's text.";
  const fallbackImageDescription = "Fallback version of the blurred depiction of this chapter's full-page illustration, which lives one layer below it. This image obscures the blurred and main illustrations when they aren't loaded.";

  let bigImageSrc = `${urlPrefix}/chapter-${number}/chapter-${number}-imc-main-101419-q${
    images.width < 2880 ? '90' : '50'
  }-${images.width}.jpg`;
  let blurredImageSrc = `${urlPrefix}/chapter-${number}/blurred/chapter-${number}-ink-blur-0x15-160.jpg`;

  bigImageSrc = offlineImageToggle(isOffline, bigImageSrc);
  blurredImageSrc = offlineImageToggle(isOffline, blurredImageSrc);
  
  const handleLoadForBlurredImage = event => { // 0 --> 1
    eventManagement(event);

    if (imageLoaded < 1) {
      // refers to BlurredImage, not the full illustration
      boundHandleClickForContentLoader('imageLoader', 1);
    }
  };
  const handleLoadForMainImage = event => {
    eventManagement(event);

    if (illustrationState < 0) {
      boundHandleClickForApp('updateIllustrationState', number, illustrationDelay);
    }
  };
  const handleTransitionEndForRestyledContentHolder = event => {
    eventManagement(event);

    // Let it breathe...to ensure visual artifacts have a chance to leave the mind's eye. 
    // Use different timings to enter and exit b/c the two sequences are different. 

    const isEntering = illustrationDirection === 'enter';

    setTimeout(
      () => boundHandleClickForApp('updateIllustrationLevel', isEntering ? 2 : 0),
      isEntering ? 1 : 5
    );
  };
  const handleTransitionEndForFallbackBlur = event => { // 1 --> 2
    eventManagement(event);

    if (imageLoaded < 2) {
      // refers to BlurredImage, not the full illustration
      boundHandleClickForContentLoader('imageLoader', 2);
    }
  };
  const handleTransitionEndForBlurredImage = event => {
    eventManagement(event);
    boundHandleClickForApp('updateIllustrationLevel', illustrationDirection === 'enter' ? 3 : 1);
  };
  // Why explicitly set keys? To force IE 10 — whitch activates the PictureFill polyfill to change images 
  // when swapping content, of course. Otherwise they won't change.
  let fallbackBlur, fallbackKey, blurredKey, mainKey;

  switch (number) {
    case 1:
      fallbackBlur = fallbackBlurOne;
      fallbackKey = `${number}-dj8z-39d`;
      blurredKey = `${number}-dk8z-39d`;
      mainKey = `${number}-dl8z-39d`;
      break;
    case 2:
      fallbackBlur = fallbackBlurTwo;
      fallbackKey = `${number}-eow2-91a`;
      blurredKey = `${number}-epw2-91a`;
      mainKey = `${number}-eqw2-91a`;
      break;
    case 3:
      fallbackBlur = fallbackBlurThree;
      fallbackKey = `${number}-cx2v-56e`;
      blurredKey = `${number}-cy2v-56e`;
      mainKey = `${number}-cz2v-56e`;
      break;
    default:
      fallbackBlur = fallbackBlurFour;
      fallbackKey = `${number}-pql6-gh0`;
      blurredKey = `${number}-prl6-gh0`;
      mainKey = `${number}-psl6-gh0`;
      break;
  }

  /* Image keys:

    1. I've manually added keys to each image element b/c the PictureFill fallback doesn't 
      update the image sources otherwise (they just freeze). 
    2. The keys force the image elements to update src (set via background-image properties). 
    3. I've also created my own fallback keys b/c the fallback urls are data-uris, which is
      too long to use as a key. I randomly generated them by hand!
  */

  return (
    <Main>
      <RestyledContentHolder
        illustrationDirection={illustrationDirection}
        illustrationLevel={illustrationLevel}
        isIE={isIE}
        saveSerifs={true}
        onTransitionEnd={handleTransitionEndForRestyledContentHolder}
      >
        <RestyledShelf
          height="18px"
        >
          <ChapterNav
            {...props}
          />
        </RestyledShelf>
        <Overflow
          ref={overflowRef}
        >
          <TagLine>
            {dek}
          </TagLine>
          <BookTitle>
            {bookTitle}
          </BookTitle>
          <Chapter>
            Chapter {number}
          </Chapter>
          <ChapterTitle>
            {title}
          </ChapterTitle>
          <StoryText>
            {ReactHtmlParser(marked(allContentData[chapterIndex].body, { smartypants: true }))}
          </StoryText>
        </Overflow>
      </RestyledContentHolder>
      <PictureHolder>
        <Portal // z-index: 0
          illustrationLevel={illustrationLevel}
          illustrationDirection={illustrationDirection}
          imageLoaded={imageLoaded}
        />
        <FallbackBlur // z-index: -1
          alt={fallbackImageDescription}
          key={fallbackKey}
          illustrationDirection={illustrationDirection}
          illustrationLevel={illustrationLevel}
          illustrationState={illustrationState}
          imageLoaded={imageLoaded}
          offline={isOffline}
          onTransitionEnd={handleTransitionEndForFallbackBlur}
          src={fallbackBlur}
          tempContent={tempContent}
        />
        <BlurredImage // z-index: -2
          alt={blurredImageDescription}
          key={blurredKey}
          imageLoaded={imageLoaded}
          illustrationDirection={illustrationDirection}
          illustrationLevel={illustrationLevel}
          onLoad={handleLoadForBlurredImage}
          onTransitionEnd={handleTransitionEndForBlurredImage}
          src={blurredImageSrc}
          tempContent={tempContent}
        />
        <Image // z-index -3
          alt={description}
          key={mainKey}
          onLoad={handleLoadForMainImage}
          src={bigImageSrc}
        />
      </PictureHolder>
    </Main>
  );
}
