import React, { Fragment } from 'react';
import ReactHtmlParser from 'react-html-parser';
import marked from 'marked';
import styled from 'styled-components';

const Hed = styled.h1`
  font-size: 3rem;
  line-height: normal;
  margin-top: 15px;
  margin-bottom: 10px;
`;
const StoryText = styled.section`
  font-size: 1.75rem;
  line-height: normal;
  white-space: pre-wrap;
  overflow: auto;

  p {
    margin-bottom: 10px;
  }
`;

export default function Chapter(props) {
  const { title } = props.chapterData.attributes;
  const { body } = props.chapterData;

  return (
    <Fragment>
      <Hed>{title}</Hed>
      <StoryText>
        {ReactHtmlParser(marked(body, { smartypants: true }))}
      </StoryText>
    </Fragment>
  );
}
