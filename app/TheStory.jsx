import React, { Component } from 'react';
// import DesktopStoryNav from './DestopStoryNav.jsx';
import StoryNav from './StoryNav.jsx';
import Chapter from './Chapter.jsx';
import storyData from './data/storyData';
import { normalize } from './helpers/utils.js';

class TheStory extends Component {
  constructor() {
    super();
  }

  get chapter() {
    return storyData.filter(
      chapter => normalize(chapter.title) === this.props.chapterTitle
    )[0];
  }

  render() {
    return (
      <main id="the-story">
        <section id="chapter" className={`left ${this.props.storyText}`}>
          <section id="desktop-story-nav">
            <StoryNav state={this.props.state} />
          </section>
          <Chapter chapter={this.chapter} />
        </section>
        <section id="illustration" className="right">
          <img src={this.chapter.illustration} alt="fantasy illustration" />
        </section>
      </main>
    );
  }
}

export default TheStory;
