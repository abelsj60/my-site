import ChapterNav from './ChapterNav.jsx';
// import Dek from '../primitives/Dek.jsx';
import Left from '../primitives/Left.jsx';
import marked from 'marked';
import Main from '../primitives/Main.jsx';
import Overflow from '../primitives/Overflow.jsx';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Right from '../primitives/Right.jsx';
import styled from 'styled-components';

const RestyledLeft = styled(Left)`
  display: ${p => (p.text === 'hidden' ? 'none' : 'flex')};
  flex-direction: column;
  flex: 1;
  padding: 0px 0px 25px 25px;
  margin-top: 25px;
  overflow: auto; // Needed by desktop Chrome for no known reason

  // DISABLED: 4/9/19 EXPERIMENT
  // @media (min-width: ${p => p.theme.mediaQueries.desktopView}) {
  //   max-width: 327px;
  //   padding: 0px;
  // }
`;
const RestyledRight = styled(Right)`
  display: ${p => (p.text !== 'hidden' ? 'none' : 'flex')};
  flex: 1;
  overflow: hidden;
  margin: 0px;
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0px;
  bottom: 0px;
  
  // DISABLED: 4/9/19 EXPERIMENT
  // @media (min-width: ${p => p.theme.mediaQueries.desktopView}) {
  //   display: flex;
  //   margin: 25px;
  // }
`;
const Chapter = styled.h2`
  color: ${p => p.theme.colors.newBlue};
  font-weight: 400;
  font-size: ${p => p.theme.fontSizes.nine};
`;
const Title = styled.h1`
  font-size: ${p => p.theme.fontSizes.sixteen};
  color: ${p => p.theme.colors.pink};
  margin-bottom: ${p => p.theme.grafSpace.regular};
`;
const Image = styled.img`
  // How to fill page with image: 
  // https://stackoverflow.com/a/30794589
  object-fit: cover;
  overflow: hidden;
  position: absolute;
  height: 100%;
  width: 100%;
`;
const StoryText = styled.section`
  font-size: ${p => p.theme.fontSizes.twelve};

  p {
    margin-bottom: ${p => p.theme.grafSpace.regular};

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
  const chapterArray = ['one', 'two', 'three', 'four'];
  const textStatus = !showStoryText
    ? 'hidden'
    : undefined;

  return (
    <Main>
      <RestyledLeft as="section" text={textStatus}>
        <ChapterNav {...props} />
        <Overflow ref={
          ref => overflowRef.current = ref
        }>
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
      </RestyledLeft>
      <RestyledRight rightMargin text={textStatus}>
        <Image alt="fantasy illustration" src={image} />
      </RestyledRight>
    </Main>
  );
}
