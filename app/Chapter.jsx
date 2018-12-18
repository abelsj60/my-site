import React, { Fragment } from 'react';
import ReactHtmlParser from 'react-html-parser';
import marked from 'marked';

export default function Chapter(props) {
  const { title } = props.chapterData.attributes;
  const { body } = props.chapterData;

  return (
    <Fragment>
      <h1>{title}</h1>
      <section id="text">
        {ReactHtmlParser(marked(body, { smartypants: true }))}
      </section>
    </Fragment>
  );
}
