import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DesktopStoryNav extends Component {
  constructor(props) {
    super(props);
  }

  activeChapter(chapter, param) {
    if (chapter === param) {
      return 'active';
    } else {
      return 'inactive';
    }
  }

  render() {
    return (
      <Link
        className={this.activeChapter(
          this.props.chapterTitle,
          this.props.currentChapterTitle
        )}
        to={`/chapter/${this.props.chapterTitle}`}
      >
        <p>{this.props.chapterNumber}</p>
      </Link>
    );
  }
}

export default DesktopStoryNav;
