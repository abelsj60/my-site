import React, { Component } from 'react';
import ItemNav from './ItemNav.jsx';
import helpers from './helpers/helpers.js';

const ShowChapter = props => (
  <main id="my-story">
    <section id="chapter" className="left">
      <nav>
        {[1, 2, 3, 4].map((num, index) => (
          <ItemNav
            key={index}
            item={num}
            param={props.chapterNumber}
            route="/chapter/"
          />
        ))}
      </nav>
      <h1 className="chapter-title">{props.chapter.title}</h1>
      <p className="chapter-text">{props.chapter.text}</p>
    </section>
    <section id="story-media" className="right">
      <img src={props.picture} alt="fantasy illustration" />
    </section>
  </main>
);

class Chapter extends Component {
  constructor(props) {
    super(props);
  }

  get chapterNumber() {
    return this.props.chapterNumber;
  }

  render() {
    return (
      <ShowChapter
        chapterNumber={this.chapterNumber}
        chapter={helpers.pickContent(this.chapterNumber)}
        picture={helpers.pickPicture(this.chapterNumber)}
      />
    );
  }
}

export default Chapter;
