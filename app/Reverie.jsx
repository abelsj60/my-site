import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';
import marked from 'marked';

import Main from './Main.jsx';
import Right from './Right.jsx';
import Left from './Left.jsx';
import Overflow from './Overflow.jsx';
import ReverieNav from './ReverieNav.jsx';
import MenuSelector from './MenuSelector.jsx';

import Referrer from './custom/Referrer.js';
import Location from './custom/Location.js';

const Name = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 1.6rem;
  font-style: italic;
  color: #fd1172;
`;
const Post = styled.section`
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
const Hed = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 7px;
`;
const PostDate = styled.p`
  font-style: italic;
  font-size: 1.4rem;
  margin-top: 0px;
  margin-bottom: 10px;
`;

export default function Reverie(props) {
  const { data, overflowRef } = props;

  const r = new Referrer(props);
  const l = new Location(r.pathToMatch, props);

  const indexForReverieData = l.params.headlineToIndex();

  const reverie = data[indexForReverieData];
  const { headline, date } = reverie.attributes;

  return (
    <Main>
      <Left>
        <ReverieNav {...props} data={data} />
      </Left>
      <Right>
        <MenuSelector {...props} />
        <Overflow ref={ref => (overflowRef.current = ref)}>
          <Name>Reverie</Name>
          <Hed>{headline}</Hed>
          <PostDate>{date}</PostDate>
          <Post>
            {ReactHtmlParser(marked(reverie.body, { smartypants: true }))}
          </Post>
        </Overflow>
      </Right>
    </Main>
  );
}
