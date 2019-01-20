import React from 'react';
import marked from 'marked';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';

import MenuSelector from './MenuSelector.jsx';
import DesktopArticleNav from './DesktopArticleNav.jsx';

import Referrer from './custom/Referrer.js';
import Location from './custom/Location.js';

const ArticleContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: black;
  // background-color: whitesmoke;

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
  margin-top: 10px;
  overflow: auto;

  @media (min-width: 848px) {
    margin-top: 25px;
    padding-left: 1px;
    margin-left: 24px;
  }
`;
const Publication = styled.h3`
  color: #fd1172;
  font-size: 1.5rem;
  font-style: italic;
  margin-top: 0px;
  margin-bottom: 4px;
  font-weight: normal;
`;
const Hed = styled.h1`
  margin-top: 0px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 3rem;
`;
const Byline = styled.p`
  font-size: 1.4rem;
  margin-top: 0px;
  margin-bottom: 15px;
`;
const Text = styled.section`
  font-size: 1.65rem;

  p {
    margin-top: 0px;
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0px;
    }
  }
`;

export default function Article(props) {
  const { data } = props;

  const r = new Referrer(props);
  const l = new Location(r.pathToMatch, props);

  const indexForArticleData = l.params.headlineToIndex();
  const article = data[indexForArticleData];
  const { publication, headline } = article.attributes;
  const markedBody = marked(article.body);

  return (
    <ArticleContainer>
      <DesktopArticleNav {...props} />
      <MenuSelector {...props} />
      <StyledArticle>
        <Publication>{publication}</Publication>
        <Hed>{headline}</Hed>
        <Byline>by James Erik Abels</Byline>
        <Text>{ReactHtmlParser(markedBody)}</Text>
      </StyledArticle>
    </ArticleContainer>
  );
}
