import React from 'react';
import marked from 'marked';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';

import Hed from './Hed.jsx';
import Graf from './Graf.jsx';
import Main from './Main.jsx';
import Right from './Right.jsx';
import Left from './Left.jsx';
import Overflow from './Overflow.jsx';
import ArticleNav from './ArticleNav.jsx';
import MenuButton from './MenuButton.jsx';

import Referrer from './custom/Referrer.js';
import Location from './custom/Location.js';

export default function Article(props) {
  const { data, overflowRef } = props;

  const r = new Referrer(props);
  const l = new Location(r.pathToMatch, props);

  const indexForArticleData = l.params.headlineToIndex();
  const article = data[indexForArticleData];
  const { publication, headline, position } = article.attributes;
  const markedBody = marked(article.body);

  const Text = styled.section`
    p {
      font-size: 1.65rem;
      margin-top: 0px;
      margin-bottom: 15px;

      &:last-child {
        margin-bottom: 0px;
      }
    }
  `;

  return (
    <Main>
      <Left>
        <ArticleNav {...props} data={data} />
      </Left>
      <Right>
        <MenuButton {...props} />
        <Overflow ref={ref => (overflowRef.current = ref)}>
          <Hed as="h2" normal italic size="1.5" color="pink" bottom="4">
            {publication}
          </Hed>
          <Hed size="3" bottom="15">
            {headline}
          </Hed>
          <Graf size="1.4" bottom="15">
            by James Erik Abels | {position}
          </Graf>
          <Text>{ReactHtmlParser(markedBody)}</Text>
        </Overflow>
      </Right>
    </Main>
  );
}
