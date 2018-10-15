import React, { Component } from 'react';
import DesktopStoryNav from './DestopStoryNav.jsx';
import storyData from './data/storyData';
import { normalize } from './helpers/utils.js';

class Chapter extends Component {
  constructor() {
    super();
  }

  get storyData() {
    return storyData.filter(
      chapter => normalize(chapter.title) === this.props.chapterTitle
    )[0];
  }

  render() {
    return (
      <main id="my-story">
        <section id="chapter" className={`left ${this.props.showStoryText}`}>
          <nav>
            {storyData.map((chapter, index) => (
              <DesktopStoryNav
                key={index}
                chapterNumber={index + 1}
                chapterTitle={normalize(chapter.title)}
                currentChapterTitle={this.props.chapterTitle}
              />
            ))}
          </nav>
          <h1 className="chapter-title">{this.storyData.title}</h1>
          <p className="chapter-text">{this.storyData.text}</p>
        </section>
        <section id="story-media" className="right">
          <img src={this.storyData.illustration} alt="fantasy illustration" />
        </section>
      </main>
    );
  }
}

export default Chapter;
