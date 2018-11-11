import React, { Fragment, Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import marked from 'marked';

class Chapter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <h1>{this.props.chapter.attributes.title}</h1>
        <section id="text">
          {ReactHtmlParser(
            marked(this.props.chapter.body, { smartypants: true })
          )}
        </section>
      </Fragment>
    );
  }
}

export default Chapter;
