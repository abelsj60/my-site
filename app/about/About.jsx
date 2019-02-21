import bio from '../data/about/about.md';
import Hed from '../primitives/Hed.jsx';
import Left from '../primitives/Left.jsx';
import Main from '../primitives/Main.jsx';
import marked from 'marked';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';

const RestyledLeft = styled(Left)`
  min-width: 327px;

  @media (min-width: 848px) {
    margin-left: 25px;
  }
`;
const Right = styled.section`
  flex: 1;
  margin: 25px;
`;
const Heading = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const ExternalLink = styled.a`
  align-self: flex-end;
  margin-left: auto;
`;
const Text = styled.section`
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
const Icon = styled.div`
  height: 20px;
  width: 30px;
  margin-bottom: 6px;
  background: url(/profile-badge.svg) no-repeat;
`;

export default function About() {
  return (
    <Main>
      <RestyledLeft />
      <Right>
        <Heading>
          <Hed c="pink" s="3">
            About
          </Hed>
          <ExternalLink href="https://www.linkedin.com/jea" target="_blank">
            <Icon />
          </ExternalLink>
        </Heading>
        <Text>{ReactHtmlParser(marked(bio.body, { smartypants: true }))}</Text>
      </Right>
    </Main>
  );
}
