import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ChapterNav from './ChapterNav.jsx';
import Chapter from './Chapter.jsx';
import story from './data/the-story/index.js';
import { normalize } from './helpers/utils.js';

class TheStory extends Component {
  constructor() {
    super();

    console.log('TheStory constructor was called!');

    this.state = {
      currentChapter: 1
    };
  }

  get chapter() {
    return story.filter(
      chapter =>
        normalize(chapter.attributes.title) === this.props.state.chapterTitle
    )[0];
  }

  componentDidMount() {
    console.log('TheStory mounted!');
  }

  componentWillUnmount() {
    console.log('TheStory unmounted!');
  }

  componentDidUpdate() {
    console.log('TheStory updated!');
  }

  render() {
    return (
      <main id="the-story">
        <section id="chapter" className={`left ${this.props.state.explore}`}>
          <section id="story-nav">
            <ChapterNav state={this.props.state} />
          </section>
          <Chapter chapter={this.chapter} />
        </section>
        <section id="illustration" className="right">
          <img src={this.chapter.attributes.image} alt="fantasy illustration" />
        </section>
      </main>
    );
  }
}

export default withRouter(TheStory);
