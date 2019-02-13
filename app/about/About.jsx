import React from 'react';
import marked from 'marked';
import ReactHtmlParser from 'react-html-parser';

import Left from '../primitives/Left.jsx';
import Right from '../primitives/Right.jsx';
import Main from '../primitives/Main.jsx';
import Hed from '../primitives/Hed.jsx';

import bio from '../data/about.md';
import styled from 'styled-components';

const RestyledLeft = styled(Left)`
  min-width: 327px;
`;
const Heading = styled.div`
  display: flex;
  margin-bottom: 10px;
  padding-left: 1px;
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
  margin-bottom: 5px;
  background: url(/profile-badge.svg) no-repeat;
`;

export default function About() {
  return (
    <Main>
      <RestyledLeft />
      <Right>
        <Heading>
          <Hed color="pink" size="2.5" top="-4">
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
