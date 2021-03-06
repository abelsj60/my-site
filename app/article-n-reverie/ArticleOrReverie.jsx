import Main from '../primitives/Main.jsx';
import myMarkedRenderer from '../helpers/myMarkedRenderer.js';
import MenuButton from '../shared/MenuButton.jsx';
import Overflow from '../primitives/Overflow.jsx';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import ContentHolder from '../primitives/ContentHolder.jsx';
import styled from 'styled-components';
import Shelf from '../shared/Shelf.jsx';

const Dek = styled.h2`
  font-size: ${p => p.theme.fontSizes.seven};
  color: ${p => p.theme.colors.pink};
  font-weight: 400;
  margin-left: 0px;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
      font-size: ${p => p.theme.fontSizes.nine};
  }
`;
const Hed = styled.h1`
  font-size: ${p => p.theme.fontSizes.sixteen};
  margin-bottom: ${p => p.theme.bottomMargin.regular};
`;
const Text = styled.section`
  overflow: auto;

  h1 {
    margin-bottom: 8px;
  }

  p {
    &:last-child {
      margin-bottom: 0px;
    }
  }

  strong {
    font-weight: 500;
  }

  img {
    margin-top: 0px;
  }

  ul,
  ol {
    margin-top: 0px;
    margin-bottom: ${p => p.theme.bottomMargin.regular};
  }

  li {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0px;
    }
  }

  pre {
    white-space: pre-wrap;
  }
`;
const BylineOrDate = styled.p`
  font-size: ${p => p.theme.fontSizes.three};
  font-style: italic;
  margin-bottom: ${p => p.theme.bottomMargin.regular};;
`;

export default function ArticleOrReverie(props) {
  const { contentState } = props;
  const {
    allContentData,
    caller,
    headlineIndex,
    reverieIndex
  } = contentState;
  const {
    date,
    headline,
    position,
    publication
  } = allContentData[caller !== 'reverie' ? headlineIndex : reverieIndex].attributes;
  const { body } = allContentData[caller !== 'reverie' ? headlineIndex : reverieIndex];
  const isReverie = caller === 'reverie';
  const publicationOrReverieTag = !isReverie ? publication : 'Reverie';
  const bylineOrDate = caller !== 'reverie' ? `by James Erik Abels | ${position}` : date;

  return (
    <Main
      reverie={isReverie}
    >
      <ContentHolder>
        <Shelf>
          <MenuButton
            {...props}
          />
        </Shelf>
        <Overflow>
          <Dek>
            {publicationOrReverieTag}
          </Dek>
          <Hed>
            {headline}
          </Hed>
          <BylineOrDate>
            {bylineOrDate}
          </BylineOrDate>
          <Text>
            {ReactHtmlParser(myMarkedRenderer(body, { smartypants: true }))}
          </Text>
        </Overflow>
      </ContentHolder>
    </Main>
  );
}
