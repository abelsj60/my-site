import React, { Component } from 'react';
import Chapter from './Chapter.jsx';
import ChapterNav from './ChapterNav.jsx';

class TheStory extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main id="the-story">
        <section id="chapter" className={`left ${this.props.explore}`}>
          <ChapterNav
            data={this.props.data}
            state={this.props.state}
            handleClick={this.props.handleClick}
          />
          <Chapter
            chapterData={this.props.data[this.props.state.indexForChapterData]}
          />
        </section>
        <section id="illustration" className="right">
          <img
            src={
              this.props.data[this.props.state.indexForChapterData].attributes
                .image
            }
            alt="fantasy illustration"
          />
        </section>
      </main>
    );
  }
}

export default TheStory;
