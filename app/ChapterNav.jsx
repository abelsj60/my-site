import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import story from './data/the-story/index.js';
import { splitPath, normalize } from './helpers/utils.js';

class ChapterNav extends Component {
  constructor(props) {
    super(props);
  }

  get location() {
    return splitPath(this.props);
  }

  setActiveChapter(chapter, currentChapterTitle) {
    const chapterTitle = normalize(chapter.attributes.title);

    if (chapterTitle === currentChapterTitle) {
      return 'active';
    }

    return 'inactive';
  }

  render() {
    return story.map((chapter, index) => (
      <Link
        key={index}
        className={this.setActiveChapter(
          chapter,
          this.props.state.chapterTitle
        )}
        to={`/chapter/${normalize(chapter.attributes.title)}`}
      >
        {this.location[1] === 'menu' && (
          <h1 id="story-chapter">Chapter {index + 1}</h1>
        )}
        <p>
          {this.location[1] === 'chapter'
            ? index + 1
            : chapter.attributes.title}
        </p>
      </Link>
    ));
  }
}

export default withRouter(ChapterNav);
