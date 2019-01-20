import React from 'react';
import marked from 'marked';
import ReactHtmlParser from 'react-html-parser';

import bio from './data/about.md';
import styled from 'styled-components';

const Main = styled.main`
  flex: 1;
  display: flex;
  height: 100%;
  // padding: 25px;
  flex-direction: row;
  // background-color: whitesmoke;
`;
const Content = styled.section`
  flex: 1;
  flex-direction: column;
  font-size: 1.75rem;
  margin: 25px;
  // margin-top: -7px;

  @media (min-width: 848px) {
    display: flex;
  }
`;
const Hed = styled.h1`
  color: #fd1172;
  font-size: 2.5rem;
  margin-top: -4px;
  margin-bottom: 15px;
`;
const TextContainer = styled.section`
  overflow: auto;

  p {
    margin-top: 0px;
    margin-bottom: 10px;
    font-size: 1.6rem;

    &:last-child {
      margin-bottom: 0px;
    }
  }
`;
const Image = styled.section`
  display: none;

  @media (min-width: 848px) {
    display: block;
    width: 327px;
    margin-top: 25px;
    margin-left: 25px;
    margin-bottom: 25px;
    padding-right: 25px;
    border-right: 0.5px solid #6e7dab;
    // background-color: rgba(255, 0, 0, 0.5);
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
