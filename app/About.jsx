import React from 'react';
import marked from 'marked';
import ReactHtmlParser from 'react-html-parser';

import bio from './data/about.md';
import styled from 'styled-components';

const Main = styled.main`
  flex: 1;
  display: flex;
`;
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
  margin-bottom: 15px;
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
      <Image />
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

// const Main = styled.main`
//   flex: 1;
//   display: flex;
//   // height: 100%;
//   // flex-direction: row;
// `;
// const Content = styled.section`
//   flex: 1;
//   font-size: 1.75rem;
//   margin: 25px;

//   @media (min-width: 848px) {
//     display: flex;
//     flex-direction: column;
//   }
// `;
// const Hed = styled.h1`
//   color: #fd1172;
//   font-size: 2.5rem;
//   margin-top: -4px;
//   margin-bottom: 0px;
//   margin-right: 9px;
// `;
// const TextContainer = styled.section`
//   overflow: auto;

//   p {
//     margin-top: 0px;
//     margin-bottom: 10px;
//     font-size: 1.6rem;

//     &:last-child {
//       margin-bottom: 0px;
//     }
//   }
// `;
// const Image = styled.section`
//   display: none;

//   @media (min-width: 848px) {
//     display: block;
//     width: 327px;
//     margin-top: 25px;
//     margin-left: 25px;
//     margin-bottom: 25px;
//     padding-right: 25px;
//     border-right: 0.5px solid #6e7dab;
//   }
// `;
// const LinkedInIcon = styled.img``;
// const HedContainer = styled.div`
//   display: flex;
//   margin-bottom: 15px;
// `;
// const LinkedInLink = styled.a`
//   align-self: flex-end;
//   margin-left: auto;

//   &:focus,
//   &:hover,
//   &:visited,
//   &:link,
//   &:active {
//     text-decoration: none;
//   }
// `;
