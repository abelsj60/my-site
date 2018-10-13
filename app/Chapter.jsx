import React, { Component } from 'react';
import ItemNav from './ItemNav.jsx';
import storyData from './data/storyData';

const ShowChapter = props => (
  <main id="my-story">
    <section id="chapter" className={`left ${props.textClass}`}>
      <nav>
        {storyData.map((chapter, index) => (
          <ItemNav
            key={index}
            item={index + 1}
            chapterTitle={chapter.title
              .replace(/,+/g, '')
              .replace(/\s+/g, '-')
              .toLowerCase()}
            param={props.chapterTitle}
            route="/chapter"
          />
        ))}
      </nav>
      <h1 className="chapter-title">{props.chapter.title}</h1>
      <p className="chapter-text">{props.chapter.text}</p>
    </section>
    <section id="story-media" className="right">
      <img src={props.illustration} alt="fantasy illustration" />
    </section>
  </main>
);

class Chapter extends Component {
  constructor(props) {
    super(props);
  }

  toggleTextClass(state) {
    return !state ? 'no-text' : '';
  }

  render() {
    return (
      <ShowChapter
        chapterTitle={this.props.chapterTitle}
        chapter={
          storyData.filter(
            chapter =>
              chapter.title
                .replace(/,+/g, '')
                .replace(/\s+/g, '-')
                .toLowerCase() === this.props.chapterTitle
          )[0]
        }
        illustration={
          storyData.filter(
            chapter =>
              chapter.title
                .replace(/,+/g, '')
                .replace(/\s+/g, '-')
                .toLowerCase() === this.props.chapterTitle
          )[0].illustration
        }
        textClass={this.toggleTextClass(this.props.showStoryText)}
      />
    );
  }
}

export default Chapter;
