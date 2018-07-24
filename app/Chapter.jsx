import React, { Component } from 'react';
import ItemNav from './ItemNav.jsx';
import chText from './helpers/siteText.js';

const chapters = [1, 2, 3, 4];
const route = '/chapter/';

const pickContent = function(num) {
  if (num === '1') {
    return chText['1'];
  } else if (num === '2') {
    return chText['2'];
  } else if (num === '3') {
    return chText['3'];
  } else {
    return chText['4'];
  }
};
const pickPicture = function(num) {
  if (num === '1') {
    return '/test/fantasy-scene-with-blue-dragon-treasure-chest-and-pile-of-golden-coins-d-illustration-707801968.jpg';
  } else if (num === '2') {
    return '/test/fantasy-scene-with-blue-dragon-treasure-chest-and-pile-of-golden-coins-d-illustration-707801968.jpg';
  } else if (num === '3') {
    return '/test/fantasy-scene-with-blue-dragon-treasure-chest-and-pile-of-golden-coins-d-illustration-707801968.jpg';
  } else if (num === '4') {
    return '/test/fantasy-scene-with-blue-dragon-treasure-chest-and-pile-of-golden-coins-d-illustration-707801968.jpg';
  }
};

class Chapter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const chapterNumber = this.props.chapterNumber;
    const chapter = pickContent(chapterNumber);
    const picture = pickPicture(chapterNumber);

    return (
      <main className="chapter internal-page">
        <section className="left chapter">
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
          <h1 className="chapter-title">{chapter.title}</h1>
          <p className="chapter-text">{chapter.text}</p>
        </section>
        <section className="right illustration">
          <img
            className="story-picture"
            src={picture}
            alt="fantasy illustration"
          />
        </section>
      </main>
    );
  }
}

export default Chapter;
