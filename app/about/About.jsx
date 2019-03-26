import bio from '../data/about/about.md';
import Hed from '../primitives/Hed.jsx';
import Left from '../primitives/Left.jsx';
import linkedInIcon from '../../public/linked-in-icon.png';
import Right from '../primitives/Right.jsx';
import Main from '../primitives/Main.jsx';
import marked from 'marked';
import Overflow from '../primitives/Overflow.jsx';
import React from 'react';
// import ReactGA from 'react-ga';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';

const RestyledLeft = styled(Left)`
  min-width: 327px;
`;
const Heading = styled.div`
  display: flex;
  margin-bottom: 15px;
  justify-content: space-between;

  @media (min-width: 848px) {
    margin-bottom: 10px;
  }
`;
const ExternalLink = styled.a`
  margin-top: 6px;
  align-self: center;
`;
const Text = styled.section`
  overflow: auto;

  p {
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
  margin-right: 2px;
  background: url(${p => p.src}) no-repeat;
  background-size: contain;
`;
const RestyledExternalLink = styled(ExternalLink)`
  @media (min-width: 848px) {
    align-self: center;
  }
`;

export default function About() {
  return (
    <Main>
      <RestyledLeft />
      <Right>
        <Overflow>
          <Heading>
            <Hed c="pink" s="3" t="-8">
            About
            </Hed>
            <RestyledExternalLink
              href="https://www.linkedin.com/in/jameserikabels"
              target="_blank"
            >
              {
              /*<ReactGA.OutboundLink
              eventLabel="toLinkedIn"
              to="https://www.linkedin.com/in/jameserikabels"
              target="_blank">*/
              }
              <Icon src={linkedInIcon} />
              {
              /*</ReactGA.OutboundLink>*/
              }
            </RestyledExternalLink>
          </Heading>
          <Text>
            {ReactHtmlParser(
              marked(
                bio.body,
                { smartypants: true }
              )
            )}
          </Text>
        </Overflow>
      </Right>
    </Main>
  );
}
