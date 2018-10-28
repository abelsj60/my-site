import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import storyData from './data/storyData';
import { splitPath, normalize } from './helpers/utils.js';

class ChapterNav extends Component {
  constructor(props) {
    super(props);
  }

  get location() {
    return splitPath(this.props);
  }

  setActiveChapter(chapter, currentChapterTitle) {
    const chapterTitle = normalize(chapter.title);

    if (chapterTitle === currentChapterTitle) {
      return 'active';
    }

    return 'inactive';
  }

  render() {
    return storyData.map((chapter, index) => (
      <Link
        key={index}
        className={this.setActiveChapter(
          chapter,
          this.props.state.chapterTitle
        )}
        onClick={
          this.props.state.menu === 'active'
            ? () => this.props.toggleMenu()
            : undefined
        }
        to={`/chapter/${normalize(chapter.title)}`}
      >
        {this.location[1] === 'menu' && (
          <h1 id="story-chapter">Chapter {index + 1}</h1>
        )}
        <p>{this.location[1] === 'chapter' ? index + 1 : chapter.title}</p>
      </Link>
    ));
  }
}

export default withRouter(ChapterNav);
