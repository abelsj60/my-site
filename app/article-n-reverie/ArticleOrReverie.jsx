import ArticleOrReverieNav from './ArticleOrReverieNav.jsx';
import Left from '../primitives/Left.jsx';
import Main from '../primitives/Main.jsx';
import marked from 'marked';
import MenuButton from '../shared/MenuButton.jsx';
import Overflow from '../primitives/Overflow.jsx';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Right from '../primitives/Right.jsx';
import styled from 'styled-components';

const Dek = styled.h2`
  font-size: ${p => p.theme.fontSizes.seven};
  color: ${p => p.theme.colors.pink};
  font-weight: 400;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
      font-size: ${p => p.theme.fontSizes.nine};
  }
`;
const Hed = styled.h1`
  font-size: ${p => p.theme.fontSizes.sixteen};
  margin-bottom: ${p => p.theme.grafSpace.regular};
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

  ul,
  ol {
    margin-top: 0px;
    margin-bottom: ${p => p.theme.grafSpace.regular};
  }

  li {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0px;
    }
  }
`;
const BylineOrDate = styled.p`
  font-size: ${p => p.theme.fontSizes.three};
  font-style: italic;
  margin-bottom: ${p => p.theme.grafSpace.regular};;
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
        <ArticleOrReverieNav
          {...props}
          data={data}
        />
      </Left>
      <Right>
        <MenuButton {...props} />
        <Overflow ref={
          ref => overflowRef.current = ref
        }>
          <Dek>
            {reverieOrPublicationAsDek}
          </Dek>
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
