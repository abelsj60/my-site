import React from 'react';
import marked from 'marked';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';

import DesktopArticleNav from './DesktopArticleNav.jsx';

import Referrer from './custom/Referrer.js';
import Location from './custom/Location.js';

const ArticleContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: black;

  @media (min-width: 848px) {
    flex-direction: row;
    line-height: normal;
  }
`;

const StyledArticle = styled.section`
  flex: 2;
  display: flex;
  flex-direction: column;
  margin: 25px;
  overflow: auto;

  @media (min-width: 848px) {
    margin-left: 0;
    min-width: 400px;
  }
`;

const Publication = styled.h3`
  font-size: 1.75rem;
  font-style: italic;
  margin-bottom: 4px;
`;
const Hed = styled.h1`
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 3rem;
`;
const Byline = styled.p`
  margin-bottom: 15px;
`;
const Text = styled.section`
  font-size: 1.75rem;

  p {
    margin-bottom: 15px;
  }
`;

export default function Article(props) {
  const { data } = props;

  const r = new Referrer(props);
  const l = new Location(r.pathToMatch, props);

  const indexForArticleData = l.params.twoToIndex();
  const article = data[indexForArticleData];
  const { publication, headline } = article.attributes;
  const markedBody = marked(article.body);

  return (
    <ArticleContainer>
      <DesktopArticleNav {...props} />
      <StyledArticle>
        <Publication>{publication}</Publication>
        <Hed>{headline}</Hed>
        <Byline>by James Erik Abels</Byline>
        <Text>{ReactHtmlParser(markedBody)}</Text>
      </StyledArticle>
    </ArticleContainer>
  );
}
