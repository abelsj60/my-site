import React from 'react';
import marked from 'marked';
import ReactHtmlParser from 'react-html-parser';

import Left from './Left.jsx';
import Main from './Main.jsx';

import bio from './data/about.md';
import styled from 'styled-components';

const Content = styled.section`
  flex: 1;
  font-size: 1.75rem;
  margin: 25px;

  @media (min-width: 848px) {
    display: flex;
    flex-direction: column;
  }
`;
const Hed = styled.h1`
  color: #fd1172;
  font-size: 2.5rem;
  margin-top: -4px;
  margin-bottom: 0px;
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
const LinkedInIcon = styled.div`
  height: 20px;
  width: 30px;
  margin-bottom: 5px;
  background: url(/profile-badge.svg) no-repeat;
`;
const HedContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  padding-left: 1px;
`;
const LinkedInLink = styled.a`
  align-self: flex-end;
  margin-left: auto;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default function About() {
  return (
    <Main>
      <Left />
      <Content>
        <HedContainer>
          <Hed>About</Hed>
          <LinkedInLink href="https://www.linkedin.com/jea" target="_blank">
            <LinkedInIcon />
          </LinkedInLink>
        </HedContainer>
        <TextContainer>
          {ReactHtmlParser(marked(bio.body, { smartypants: true }))}
        </TextContainer>
      </Content>
    </Main>
  );
}
