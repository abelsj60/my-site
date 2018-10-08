import React, { Component } from 'react';
import ItemNav from './ItemNav.jsx';
import siteText from './helpers/siteText.js';
// import helpers from './helpers/helpers.js';

const ShowChapter = props => (
  <main id="my-story">
    <section id="chapter" className={`left ${props.textClass}`}>
      <nav>
        {siteText.map((chapter, index) => (
          <ItemNav
            key={index}
            item={index + 1}
            chapterTitle={chapter.title
              .replace(/,+/g, '')
              .replace(/\s+/g, '-')
              .toLowerCase()}
            param={props.chapterTitle}
            route="/chapter/"
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
          siteText.filter(
            chapter =>
              chapter.title
                .replace(/,+/g, '')
                .replace(/\s+/g, '-')
                .toLowerCase() === this.props.chapterTitle
          )[0]
        }
        illustration={
          siteText.filter(
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
