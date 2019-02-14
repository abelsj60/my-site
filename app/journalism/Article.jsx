import React from 'react';
import marked from 'marked';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';

import Hed from '../primitives/Hed.jsx';
import Graf from '../primitives/Graf.jsx';
import Main from '../primitives/Main.jsx';
import Right from '../primitives/Right.jsx';
import Left from '../primitives/Left.jsx';
import Overflow from '../primitives/Overflow.jsx';
import ArticleNav from './ArticleNav.jsx';
import MenuButton from '../shared/MenuButton.jsx';

import Referrer from '../classes/Referrer.js';
import Location from '../classes/Location.js';

export default function Article(props) {
  const { data, overflowRef } = props;

  const r = new Referrer(props);
  const l = new Location(r.pathToMatch, props);

  const indexForArticleData = l.params.headlineToIndex();
  const article = data[indexForArticleData];
  const { publication, headline, position } = article.attributes;

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
          <Text>
            {ReactHtmlParser(marked(article.body, { smartypants: true }))}
          </Text>
        </Overflow>
      </Right>
    </Main>
  );
}
