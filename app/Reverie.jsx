import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';
import marked from 'marked';

import MenuSelector from './MenuSelector.jsx';
import DesktopReverieNav from './DesktopReverieNav.jsx';

import Referrer from './custom/Referrer.js';
import Location from './custom/Location.js';

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (min-width: 848px) {
    flex-direction: row;
  }
`;
const Content = styled.section`
  flex: 2;
  display: flex;
  flex-direction: column;
  margin: 25px;
  margin-left: 24px;
  overflow: auto;

  @media (min-width: 848px) {
    margin-top: 25px;
  }
`;
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
    // padding-left: 20px;
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
const OverflowContainer = styled.div`
  overflow: auto;
  padding-left: 1px;
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
      <DesktopReverieNav {...props} />
      <Content>
        <MenuSelector {...props} />
        <OverflowContainer ref={ref => (overflowRef.current = ref)}>
          <Name>Reverie</Name>
          <Hed>{headline}</Hed>
          <PostDate>{date}</PostDate>
          <Post>
            {ReactHtmlParser(marked(reverie.body, { smartypants: true }))}
          </Post>
        </OverflowContainer>
      </Content>
    </Main>
  );
}
