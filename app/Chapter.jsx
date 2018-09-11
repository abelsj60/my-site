import React, { Component } from 'react';
import ItemNav from './ItemNav.jsx';
import helpers from './helpers/helpers.js';

class Chapter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const chapters = [1, 2, 3, 4];
    const route = '/chapter/';
    const chapterNumber = this.props.chapterNumber;
    const chapter = helpers.pickContent(chapterNumber);
    const picture = helpers.pickPicture(chapterNumber);

    return (
      <main id="my-story" className="narrow">
        <section id="chapter" className="left">
          <nav>
            {chapters.map((num, index) => (
              <ItemNav
                key={index}
                item={num}
                param={chapterNumber}
                route={route}
              />
            ))}
          </nav>
          <h1 className="chapter-title narrow">{chapter.title}</h1>
          <p className="chapter-text narrow">{chapter.text}</p>
        </section>
        <section id="story-media" className="right">
          <img
            src={picture}
            alt="fantasy illustration"
          />
        </section>
      </main>
    );
  }
}

export default Chapter;
