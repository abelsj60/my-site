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
const PictureHolder = styled.section`
  // Setting visibilty: 'hidden' is better than display: 'none' b/c
  // it should ensure that we load the image in the background so
  // it's instantly ready to go when the button's clicked.
  // (Some browsers won't load an image when display's none.)
  visibility: ${p => (p.showStoryText ? 'hidden' : 'visible')};
  // Flex = 1 when 'visible' so element takes up space in dev tools.
  // Otherwise, nothing highlights in dev tools, which looks weird.
  // Flex = 0 when 'hidden' so it takes up no space on the page.
  // Otherwise, it takes up a column of space beside the text.
  flex: ${p => p.showStoryText ? '0' : '1'}; 
`;
const Chapter = styled.h2`
  color: ${p => p.theme.colors.blue};
  font-weight: 400;
  font-size: ${p => p.theme.fontSizes.nine};
`;
const Title = styled.h1`
  font-size: ${p => p.theme.fontSizes.sixteen};
  color: ${p => p.theme.colors.pink};
  margin-bottom: ${p => p.theme.bottomMargin.regular};
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
        <Shelf
          height="19px"
        >
          <ChapterNav
            {...props}
          />
        </Shelf>
        <Overflow
          ref={overflowRef}
        >
          <Chapter>
            Chapter {chapterNumber}
          </Chapter>
          <Title>
            {title}
          </Title>
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
