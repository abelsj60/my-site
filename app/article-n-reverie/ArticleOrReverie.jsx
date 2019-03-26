import ArticleOrReverieNav from './ArticleOrReverieNav.jsx';
import Graf from '../primitives/Graf.jsx';
import Hed from '../primitives/Hed.jsx';
import Left from '../primitives/Left.jsx';
import Main from '../primitives/Main.jsx';
import marked from 'marked';
import MenuButton from '../shared/MenuButton.jsx';
import Overflow from '../primitives/Overflow.jsx';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Right from '../primitives/Right.jsx';
import styled from 'styled-components';

const ReverieText = styled.section`
  p {
    font-size: 1.5rem;
  }

  img,
  p {
    margin-top: 0px;
  }

  ol,
  p {
    margin-bottom: 10px;
  }

  ol {
    margin-top: 10px;
  }
`;
const ArticleText = styled.section`
  p {
    font-size: 1.5rem;
    margin-top: 0px;
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0px;
    }
  }
`;
const RestyledHed = styled(Hed)`
  font-weight: 400;
`;

export default function ArticleOrReverie(props) {
  const {
    data,
    location,
    overflowRef,
    params
  } = props;
  const currentPath = location.pathname.split('/');
  const isReverie = currentPath[1] === 'reverie';

  const index = params.headlineToIndex();
  const article = data[index];
  const {
    date,
    headline,
    position,
    publication
  } = article.attributes;
  let bylineOrDate;
  let reverieOrPublicationAsDek;

  if (isReverie) {
    bylineOrDate = date;
    reverieOrPublicationAsDek = 'Reverie';
  } else {
    bylineOrDate = `by James Erik Abels | ${position}`;
    reverieOrPublicationAsDek = publication;
  }

  const ArticleOrReverieText = isReverie
    ? ReverieText
    : ArticleText;

  return (
    <Main reverie={isReverie}>
      <Left reverie={isReverie}>
        <ArticleOrReverieNav {...props} data={data} />
      </Left>
      <Right>
        <MenuButton {...props} />
        <Overflow ref={
          ref => overflowRef.current = ref
        }>
          <RestyledHed as="h2" c="pink" s="1.35" bS="1.4" b="2">
            {reverieOrPublicationAsDek}
          </RestyledHed>
          <Hed s="3">
            {headline}
          </Hed>
          <Graf italic b="14" s="1.2" t="14">
            {bylineOrDate}
          </Graf>
          <ArticleOrReverieText>
            {ReactHtmlParser(
              marked(
                article.body,
                { smartypants: true }
              )
            )}
          </ArticleOrReverieText>
        </Overflow>
      </Right>
    </Main>
  );
}
