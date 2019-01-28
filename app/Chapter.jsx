import React, { Fragment } from 'react';
import ReactHtmlParser from 'react-html-parser';
import marked from 'marked';
import styled from 'styled-components';

const Hed = styled.h1`
  font-size: 3rem;
  line-height: normal;
  margin-top: 13px;
  margin-bottom: 12px;
  color: #ffe74c;

  @media (min-width: 848px) {
    color: #fd1172;
  }
`;
const StoryText = styled.section`
  font-size: 1.6rem;
  line-height: normal;
  white-space: pre-wrap;
  overflow: auto;

  p {
    margin-top: 0px;
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0px;
    }
  }
`;

export default function Chapter(props) {
  const { overflowRef } = props;
  const { body } = props.chapterData;
  const { title } = props.chapterData.attributes;

  return (
    <Fragment>
      <Hed>{title}</Hed>
      <StoryText ref={ref => (overflowRef.current = ref)}>
        {ReactHtmlParser(marked(body, { smartypants: true }))}
      </StoryText>
    </Fragment>
  );
}
