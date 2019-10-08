import ChapterNav from './ChapterNav.jsx';
import eventManagement from '../helpers/eventManagement.js';
import marked from 'marked';
import Main from '../primitives/Main.jsx';
import Overflow from '../primitives/Overflow.jsx';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import ContentHolder from '../primitives/ContentHolder.jsx';
import Shelf from '../shared/Shelf.jsx';
import styled from 'styled-components';
import fallbackBlurOne from '../../assets/images/convert-to-data-uri/jea-story-chapter-one-50blur-3px.png';
import fallbackBlurTwo from '../../assets/images/convert-to-data-uri/jea-story-chapter-two-50blur-3px.png';
import fallbackBlurThree from '../../assets/images/convert-to-data-uri/jea-story-chapter-three-50blur-3px.png';
import fallbackBlurFour from '../../assets/images/convert-to-data-uri/jea-story-chapter-four-50blur-3px.png';

const RestyledContentHolder = styled(ContentHolder)`
  opacity: ${p => p.tempContent !== 3 && ((p.illustrationDirection === 'exit' && p.illustrationLevel < 2) || (p.illustrationDirection === 'enter' && p.illustrationLevel < 1)) ? '1' : '0'};
  transition: ${p => p.illustrationLevel > 0 && p.illustrationLevel < 3 && 'opacity .35s'};
  pointer-events: ${p => p.illustrationLevel >  0 && 'none'};
  flex-direction: column;
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
  margin-bottom: 1px;
`;
const BookTitle = styled.h1`
  font-family: 'Playfair Display',serif;
  margin: 0px auto 35px;
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
  margin-bottom: 3px;

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
  opacity: ${p => (p.illustrationDirection === 'exit' && p.illustrationLevel > 2) || (p.illustrationDirection === 'enter' && p.illustrationLevel >= 1) ? '0' : '.35'};
  transition: ${p => p.illustrationLevel > 0 && p.illustrationLevel < 3 && 'opacity .35s'};
`;
const Image = styled.img`
  // Ensure img top is TOP
  position: absolute;
  object-fit: cover;
  font-family: 'object-fit: cover;';
  top: 0px;
  left: 0px;
  z-index: -3;
  // May need to fill page:   
  // https://stackoverflow.com/a/30794589
  height: 100%;
  width: 100%;
`;
const BlurredFallback = styled.img`
  position: absolute;
  object-fit: cover;
  font-family: 'object-fit: cover;';
  top: 0px;
  left: 0px;
  z-index: -1;
  // May need to fill page:   
  // https://stackoverflow.com/a/30794589
  height: 100%;
  width: 100%;
  // Theoretically, the <BlurredImage /> might not be in before someone clicks the story button.
  // This means, that BlurredFallback would have to transition to and from the illustration.
  // BUT, it's not able to do that at this time. May address in the future.
  opacity: ${p => p.imageLoaded < 1 ? '1' : '0'};
  transition: ${p => p.imageLoaded < 2 ? 'opacity .5s' : ''};
`;
const BlurredImage = styled.img`
  // Ensure img top is TOP
  position: absolute;
  object-fit: cover;
  font-family: 'object-fit: cover;';
  top: 0px;
  left: 0px;
  z-index: -2;
  // May need to fill page:
  // https://stackoverflow.com/a/30794589
  height: 100%;
  width: 100%;
  opacity: ${p => p.imageLoaded < 1 || (p.tempContent < 1 && ((p.illustrationDirection === 'exit' && p.illustrationLevel > 2) || (p.illustrationDirection === 'enter' && p.illustrationLevel >= 2))) ? '0' : '1'};
  transition: ${p => p.illustrationLevel > 0 && p.illustrationLevel < 3 && 'opacity .35s ease-in'};

  // The mediaQ ensures the blur goes away if the full-screen header menu is
  // turned on when the user increases the browser window's width
  @media (min-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    opacity: ${p => p.illustrationLevel > 0 && p.theme.blurForTempContent && p.tempContent === 3 ? '0' : ''};
  }
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
  const bigImageSrc = images[`chapter-${number}-main`].src;
  const blurredImageSrc = images[`chapter-${number}-blurred`].src;
  const onLoadForBlurredImage = event => { // 0 --> 1
    eventManagement(event);
    if (imageLoaded < 1) {
      // refers to BlurredImage, not the full illustration
      boundHandleClickForContentLoader('imageLoader', 1)
    }
  };
  const onLoadForMainImage = event => {
    eventManagement(event);
    if (illustrationState < 0) {
      boundHandleClickForApp('updateIllustrationState', number, illustrationDelay);
    }
  };
  const onTransitionEndForRestyledContentHolder = event => {
    eventManagement(event);
    boundHandleClickForApp('updateIllustrationLevel', illustrationDirection === 'enter' ? 2 : 0);
  };
  const onTransitionEndForBlurredFallbackImage = event => { // 1 --> 2
    eventManagement(event);
    if (imageLoaded < 2) {
      // refers to BlurredImage, not the full illustration
      boundHandleClickForContentLoader('imageLoader', 2)
    }
  };
  const onTransitionEndForBlurredImage = event => {
    eventManagement(event);
    boundHandleClickForApp('updateIllustrationLevel', illustrationDirection === 'enter' ? 3 : 1);
  };
  let chapterNumber;
  let fallbackBlur;

  switch (number) {
    case 1:
      chapterNumber = 'one';
      fallbackBlur = fallbackBlurOne;
      break;
    case 2:
      chapterNumber = 'two';
      fallbackBlur = fallbackBlurTwo;
      break;
    case 3:
      chapterNumber = 'three';
      fallbackBlur = fallbackBlurThree;
      break;
    default:
      chapterNumber = 'four';
      fallbackBlur = fallbackBlurFour;
      break;
  }

  return (
    <Main>
      <RestyledContentHolder
        illustrationDirection={illustrationDirection}
        illustrationLevel={illustrationLevel}
        saveSerifs={true}
        onTransitionEnd={onTransitionEndForRestyledContentHolder}
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
            Chapter {chapterNumber}
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
        <Portal
          illustrationLevel={illustrationLevel}
          illustrationDirection={illustrationDirection}
          imageLoaded={imageLoaded}
        />
        {imageLoaded < 2 && // refers to blurred image
          <BlurredFallback 
            alt="blurred fallback"
            illustrationDirection={illustrationDirection}
            illustrationLevel={illustrationLevel}
            imageLoaded={imageLoaded}
            onTransitionEnd={onTransitionEndForBlurredFallbackImage}
            src={fallbackBlur}
            tempContent={tempContent}
          />
        }
        <BlurredImage 
          alt={description}
          imageLoaded={imageLoaded}
          illustrationDirection={illustrationDirection}
          illustrationLevel={illustrationLevel}
          onLoad={onLoadForBlurredImage}
          onTransitionEnd={onTransitionEndForBlurredImage}
          src={blurredImageSrc}
          tempContent={tempContent}
        />
        <Image
          alt={description}
          onLoad={onLoadForMainImage}
          src={bigImageSrc}
        />
      </PictureHolder>
    </Main>
  );
}
