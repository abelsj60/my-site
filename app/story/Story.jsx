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

  // @media (min-width: ${p => p.theme.mediaQueries.tinyViewTwo}) {
  //   height: 117px;
  // }

  // @media (min-width: ${p => p.theme.mediaQueries.narrowBreakOne}) {
  //   height: 131px;
  // }
`;
const PictureHolder = styled.section`
  // Setting visibilty: 'hidden' is better than display: 'none' b/c
  // it should ensure that we load the image in the background so
  // it's instantly ready to go when the button's clicked.
  // (Some browsers won't load an image when display's none.)
  // visibility: ${p => (p.showStoryText ? 'hidden' : 'visible')};
  z-index: -1;
  // Flex = 1 when 'visible' so it 'takes' space when inspecting elements.
  // Otherwise, nothing highlights in dev tools, which looks weird.
  // Flex = 0 when 'hidden' so it takes up no space on the page.
  // Otherwise, it takes up a column of space beside the text.
  flex: ${p => p.showStoryText ? '0' : '1'}; 
`;
const Chapter = styled.h2`
  // color: ${p => p.theme.colors.white};
  // color: #d9e6fc;
  color: #fff7c9;
  font-weight: 400;
  font-size: ${p => p.theme.fontSizes.nine};
  // font-size: 1.6rem;
  font-style: italic;
  // text-shadow: 1px 1px 3px rgba(0, 0, 0, .8);
  margin-bottom: 1px;
`;
const BookTitle = styled.h1`
  font-family: 'Playfair Display',serif;
  margin: 0px auto 35px;
  font-size: 2rem;
  font-weight: 600;
  color: ${p => p.theme.colors.yellow};
  // color: #fd1172;
  // color: #fd2880;
  text-align: center;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, .6);
  max-width: 500px;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    font-size: 2.5rem;
  }

  @media (min-width: ${p => p.theme.mediaQueries.narrowBreakOne}) {
    // font-size: 3rem;
    font-size: 3.3rem;
  }
`;
const TagLine = styled.p`
  font-style: italic;
  font-size: ${p => p.theme.fontSizes.twentyTwo};
  // color: ${p => p.theme.colors.white};
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
  // font-size: 3rem;
  font-size: 3.3rem;
  font-weight: 600;
  margin-top: -8px;
  margin-bottom: 15px;
  // color: ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.yellow};
  // color: #5492f5;
  // text-shadow: 1px 1px 3px rgba(0, 0, 0, .7);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // font-weight: 900;
`;
const Portal = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  z-index: 0;
  background-color: ${p => p.theme.colors.black};
  // background-color: #fd1172;
  background-color: midnightblue;
  opacity: ${p => p.showStoryText ? '.3' : '0'};
`;
const Image = styled.img`
  // Ensure img top is TOP
  position: absolute;
  object-fit: cover;
  top: 0px;
  left: 0px;
  z-index: -1;
  // May need to fill page:   
  // https://stackoverflow.com/a/30794589
  height: 100%;
  width: 100%;
  transform: ${p => p.showStoryText ? 'scale(1.04)' : 'scale(1)'};
  // Slight different in filter and transform timing so the filter is
  // kinda, sorta finished before the transform is completed
  transition: .33s filter ease-in-out, .35s transform ease-in-out;

  // Blur content if text is turned off, or if the business card 
  // or legal terms are on screen. We do blur(0) so we get the
  // transition effect on mobile, which seems to disregard
  // gong from blurred to unblurred without it:
  filter: ${p => p.showStoryText || p.theme.blurForTempContent ? p.theme.blur : 'blur(0)'};

  // Blur background when header menu is on and user is mobile
  @media (max-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    filter: ${p => p.theme.blurForHeaderMenu && p.theme.blur};
  }

  // Use background-image to get proper 
  // proportions on most browsers 
  // background-image: url(${p => p.src});
  // background-position: center;
  // background-size: cover;
`;
const StoryText = styled.section`
  font-size: ${p => p.theme.fontSizes.twelve};

  p {
    color: ${p => p.theme.colors.white};
    // color: #fff7c9;
    margin-bottom: ${p => p.theme.bottomMargin.regular};
    // text-shadow: 1px 1px 3px rgba(0, 0, 0, .8);
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
    description,
    image,
    number,
    title
  } = finalData.attributes;
  const bookTitle = 'The Magical, Semi-Fictional Biography of a Real Boy';
  const dek = 'An experiment in digital + traditional storytelling';
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
        <Portal
          showStoryText={showStoryText}
        />
        <Image
          alt={description}
          showStoryText={showStoryText}
          src={image}
        />
      </PictureHolder>
    </Main>
  );
}
