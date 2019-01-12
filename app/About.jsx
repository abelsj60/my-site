import React from 'react';
import marked from 'marked';
import ReactHtmlParser from 'react-html-parser';

import bio from './data/about.md';
import styled from 'styled-components';

const Main = styled.main`
  flex: 1;
  display: flex;
  height: 100%;
  padding: 25px;
  flex-direction: row;
`;
const Content = styled.section`
  flex: 1;
  flex-direction: column;
  font-size: 1.75rem;

  @media (min-width: 848px) {
    display: flex;
  }
`;
const Hed = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 15px;
`;
const TextContainer = styled.section`
  overflow: auto;

  p {
    margin-bottom: 10px;
  }
`;
const Image = styled.section`
  display: none;

  @media (min-width: 848px) {
    display: block;
    width: 327px;
    padding: 25px;
    margin-right: 25px;
    background-color: rgba(255, 0, 0, 0.5);
  }
`;

export default function About() {
  return (
    <Main>
      <Image />
      <Content>
        <Hed>About</Hed>
        <TextContainer>
          {ReactHtmlParser(marked(bio.body, { smartypants: true }))}
        </TextContainer>
      </Content>
    </Main>
  );
}
