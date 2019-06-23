import ChapterNav from './ChapterNav.jsx';
import marked from 'marked';
import Main from '../primitives/Main.jsx';
import Overflow from '../primitives/Overflow.jsx';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import ContentHolder from '../primitives/ContentHolder.jsx';
import Shelf from '../shared/Shelf.jsx';
import styled from 'styled-components';

const RestyledContentHolder = styled(ContentHolder)`
  display: ${p => (p.showStoryText ? 'flex' : 'none')};
  flex-direction: column;
  flex: 1;
`;
const RestyledShelf = styled(Shelf)`
  flex-direction: column;
  align-items: center;

  @media (min-width: ${p => p.theme.mediaQueries.tinyViewTwo}) {
    height: 117px;
  }

  @media (min-width: ${p => p.theme.mediaQueries.narrowBreakOne}) {
    height: 130px;
  }
`;
const PictureHolder = styled.section`
  // Setting visibilty: 'hidden' is better than display: 'none' b/c
  // it should ensure that we load the image in the background so
  // it's instantly ready to go when the button's clicked.
  // (Some browsers won't load an image when display's none.)
  visibility: ${p => (p.showStoryText ? 'hidden' : 'visible')};
  // Flex = 1 when 'visible' so it 'takes' space when inspecting elements.
  // Otherwise, nothing highlights in dev tools, which looks weird.
  // Flex = 0 when 'hidden' so it takes up no space on the page.
  // Otherwise, it takes up a column of space beside the text.
  flex: ${p => p.showStoryText ? '0' : '1'}; 
`;
const Chapter = styled.h2`
  color: ${p => p.theme.colors.lightBlack};
  font-weight: 400;
  font-size: ${p => p.theme.fontSizes.nine};
`;
const BookTitle = styled.h1`
  font-family: 'Playfair Display',serif;
  margin: 0px 0px 10px;
  font-size: 2rem;
  font-weight: 900;
  color: #fd1172;
  text-align: center;
  max-width: 500px;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    font-size: 2.5rem;
  }

  @media (min-width: ${p => p.theme.mediaQueries.narrowBreakOne}) {
    font-size: 3rem;
  }
`;
const TagLine = styled.p`
  font-style: italic;
  font-size: ${p => p.theme.fontSizes.twentyTwo};
  color: ${p => p.theme.colors.lightBlack};
  text-align: center;
  margin-bottom: 5px;
`;
const ChapterTitle = styled.h2`
  font-family: 'Aref Ruqaa', serif;
  font-size: 3rem;
  font-weight: 300;
  margin-top: -8px;
  margin-bottom: 10px;
  color: ${p => p.theme.colors.blue};
`;
const Image = styled.div`
  // Ensure img top is TOP
  position: absolute;
  top: 0px;
  left: 0px;

  // Use background-image to get proper 
  // proportions on most browsers 
  background-image: url(${p => p.src});
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
  // If business card or legal terms are on screen, blur content:
  filter: ${p => p.theme.blurForTempContent && p.theme.blur};

  // If moving to <img> --> May need to fill page:   
  // https://stackoverflow.com/a/30794589
`;
const StoryText = styled.section`
  font-size: ${p => p.theme.fontSizes.twelve};

  p {
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
    contentState,
    overflowRef
  } = props;
  const { showStoryText } = appState;
  const { finalData } = contentState;
  const {
    image,
    number,
    title
  } = finalData.attributes;
  const bookTitle = 'The Magical, Semi-Fictional Biography of a Real Boy';
  const dek = 'An experiment in digital + traditional storytelling';
  const isCover = number === 1;
  let chapterNumber;

  switch (number) {
    case 1:
      chapterNumber = 'one';
      break;
    case 2:
      chapterNumber = 'two';
      break;
    case 3:
      chapterNumber = 'three';
      break;
    default:
      chapterNumber = 'four';
      break;
  }

  return (
    <Main>
      <RestyledContentHolder
        showStoryText={showStoryText}
        saveSerifs={true}
      >
        <RestyledShelf
          height="104px"
        >
          <TagLine>
            {dek}
          </TagLine>
          <BookTitle>
            {bookTitle}
          </BookTitle>
          <ChapterNav
            {...props}
          />
        </RestyledShelf>
        <Overflow
          ref={overflowRef}
        >
          <Chapter
            isCover={isCover}
          >
            Chapter {chapterNumber}
          </Chapter>
          <ChapterTitle
            isCover={isCover}
          >
            {title}
          </ChapterTitle>
          <StoryText>
            {ReactHtmlParser(
              marked(
                finalData.body,
                { smartypants: true }
              )
            )}
          </StoryText>
        </Overflow>
      </RestyledContentHolder>
      <PictureHolder
        showStoryText={showStoryText}
      >
        <Image
          alt="fantasy illustration"
          src={image}
        />
      </PictureHolder>
    </Main>
  );
}
