import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class StoryNav extends Component {
  constructor(props) {
    super(props);
  }

  setActiveItem(chapter, currentChapterTitle) {
    const chapterTitle = chapter.title
      .replace(/,+/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase();

    if (chapterTitle === currentChapterTitle) {
      return 'active';
    } else {
      return 'inactive';
    }
  }

  render() {
    return this.props.storyData.map((chapter, index) => (
      <Link
        key={index}
        className={this.setActiveItem(chapter, this.props.state.chapterTitle)}
        to={`/chapter/${chapter.title
          .replace(/,+/g, '')
          .replace(/\s+/g, '-')
          .toLowerCase()}`}
      >
        <h1 id="story-chapter">Chapter {index + 1}</h1>
        <p id="story-title">{chapter.title}</p>
      </Link>
    ));
  }
}

export default withRouter(StoryNav);
