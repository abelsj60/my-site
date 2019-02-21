import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';
import marked from 'marked';

import Hed from '../primitives/Hed.jsx';
import Graf from '../primitives/Graf.jsx';
import Main from '../primitives/Main.jsx';
import Right from '../primitives/Right.jsx';
import Left from '../primitives/Left.jsx';
import Overflow from '../primitives/Overflow.jsx';
import MenuButton from '../shared/MenuButton.jsx';
import ArticleOrReverieNav from './ArticleOrReverieNav.jsx';

const ReverieText = styled.section`
  p {
    font-size: 1.6rem;
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
    font-size: 1.65rem;
    margin-top: 0px;
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0px;
    }
  }
`;

export default function ArticleOrReverie(props) {
  const { data, overflowRef, params, location } = props;
  const currentPath = location.pathname.split('/');
  const isReverie = currentPath[1] === 'reverie';

  const index = params.headlineToIndex();
  const article = data[index];
  const { headline, date, publication } = article.attributes;
  let reverieOrPublicationAsDek;
  let bylineOrDate;

  if (isReverie) {
    reverieOrPublicationAsDek = 'Reverie';
    bylineOrDate = date;
  } else {
    reverieOrPublicationAsDek = publication;
    bylineOrDate = 'by James Erik Abels';
  }

  const ArticleOrReverieText = isReverie ? ReverieText : ArticleText;

  return (
    <Main>
      <Left>
        <ArticleOrReverieNav {...props} data={data} />
      </Left>
      <Right>
        <MenuButton {...props} />
        <Overflow ref={ref => (overflowRef.current = ref)}>
          <Hed as="h2" normal italic s="1.5" c="pink" onBlur="4">
            {reverieOrPublicationAsDek}
          </Hed>
          <Hed s="3" b="7">
            {headline}
          </Hed>
          <Graf s="1.3" t="14" b="14">
            {bylineOrDate}
          </Graf>
          <ArticleOrReverieText>
            {ReactHtmlParser(marked(article.body, { smartypants: true }))}
          </ArticleOrReverieText>
        </Overflow>
      </Right>
    </Main>
  );
}
