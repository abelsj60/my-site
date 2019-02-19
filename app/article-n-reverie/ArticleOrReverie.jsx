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
  const { headline, date } = article.attributes;
  const ArticleOrReverieText = isReverie ? ReverieText : ArticleText;

  return (
    <Main>
      <Left>
        <ArticleOrReverieNav {...props} data={data} />
      </Left>
      <Right>
        <MenuButton {...props} />
        <Overflow ref={ref => (overflowRef.current = ref)}>
          <Hed as="h2" normal italic size="1.5" color="pink" bottom="4">
            Reverie
          </Hed>
          <Hed size="3" bottom="7">
            {headline}
          </Hed>
          <Graf italic size="1.4" top="15" bottom="15">
            {date}
          </Graf>
          <ArticleOrReverieText>
            {ReactHtmlParser(marked(article.body, { smartypants: true }))}
          </ArticleOrReverieText>
        </Overflow>
      </Right>
    </Main>
  );
}
