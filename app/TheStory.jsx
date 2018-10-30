import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ChapterNav from './ChapterNav.jsx';
import Chapter from './Chapter.jsx';
import storyData from './data/storyData';
import { normalize } from './helpers/utils.js';

class TheStory extends Component {
  constructor() {
    super();
  }

  get chapter() {
    return storyData.filter(
      chapter => normalize(chapter.title) === this.props.state.chapterTitle
    )[0];
  }

  render() {
    const chapter = this.chapter;

    return (
      <main id="the-story">
        <section id="chapter" className={`left ${this.props.state.explore}`}>
          <section id="desktop-story-nav">
            <ChapterNav state={this.props.state} />
          </section>
          <Chapter chapter={chapter} />
        </section>
        <section id="illustration" className="right">
          <img src={chapter.illustration} alt="fantasy illustration" />
        </section>
      </main>
    );
  }
}

export default withRouter(TheStory);
