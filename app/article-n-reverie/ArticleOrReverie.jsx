import ArticleOrReverieNav from './ArticleOrReverieNav.jsx';
import Dek from '../primitives/Dek.jsx';
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

const RestyledDek = styled(Dek)`
  font-size: 1.35rem;

  @media (min-width: 390px) {
      font-size: 1.45rem;
  }
`;
const Text = styled.section`
  p {
    &:last-child {
      margin-bottom: 0px;
    }
  }

  img {
    margin-top: 0px;
  }

  ol {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
const BylineOrDate = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  margin-top: 14px;
  margin-bottom: 14px;
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
          <RestyledDek color="pink" weight="400">
            {reverieOrPublicationAsDek}
          </RestyledDek>
          <Hed>
            {headline}
          </Hed>
          <BylineOrDate>
            {bylineOrDate}
          </BylineOrDate>
          <Text>
            {ReactHtmlParser(
              marked(
                article.body,
                { smartypants: true }
              )
            )}
          </Text>
        </Overflow>
      </Right>
    </Main>
  );
}
