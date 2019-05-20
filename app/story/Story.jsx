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
  display: ${p => (p.text === 'hidden' ? 'none' : 'flex')};
  flex-direction: column;
  flex: 1;
`;
const PictureHolder = styled.section`
  display: ${p => (p.text !== 'hidden' ? 'none' : 'flex')};
  flex: 1; // Ensures element takes usual in doc (less confusing)
  overflow: hidden;
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
    data,
    overflowRef,
    params
  } = props;
  const { showStoryText } = appState;
  const indexForChapterData = params.titleToIndex();

  const chapter = data[indexForChapterData];
  const {
    image,
    title
  } = chapter.attributes;
  const chapterArray = [
    'one',
    'two',
    'three',
    'four'
  ];
  const textStatus = !showStoryText
    ? 'hidden'
    : '';

  return (
    <Main>
      <RestyledContentHolder
        text={textStatus}
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
          ref={
            ref => overflowRef.current = ref
          }
        >
          <Chapter>
            Chapter {chapterArray[indexForChapterData]}
          </Chapter>
          <Title>
            {title}
          </Title>
          <StoryText>
            {ReactHtmlParser(
              marked(
                chapter.body,
                { smartypants: true }
              )
            )}
          </StoryText>
        </Overflow>
      </RestyledContentHolder>
      <PictureHolder
        rightMargin text={textStatus}
      >
        <Image
          alt="fantasy illustration"
          src={image}
        />
      </PictureHolder>
    </Main>
  );
}
