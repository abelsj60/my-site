import React from 'react';
import marked from 'marked';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';

import Main from './Main.jsx';
import Right from './Right.jsx';
import Left from './Left.jsx';
import Overflow from './Overflow.jsx';
import ArticleNav from './ArticleNav.jsx';
import MenuSelector from './MenuSelector.jsx';

import Referrer from './custom/Referrer.js';
import Location from './custom/Location.js';

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
  const { data, overflowRef } = props;

  const r = new Referrer(props);
  const l = new Location(r.pathToMatch, props);

  const indexForArticleData = l.params.headlineToIndex();
  const article = data[indexForArticleData];
  const { publication, headline, position } = article.attributes;
  const markedBody = marked(article.body);

  return (
    <Main>
      <Left>
        <ArticleNav {...props} data={data} />
      </Left>
      <Right>
        <MenuSelector {...props} />
        <Overflow ref={ref => (overflowRef.current = ref)}>
          <Publication>{publication}</Publication>
          <Hed>{headline}</Hed>
          <Byline>by James Erik Abels | {position}</Byline>
          <Text>{ReactHtmlParser(markedBody)}</Text>
        </Overflow>
      </Right>
    </Main>
  );
}
