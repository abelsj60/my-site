import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ClipNav from './ClipNav.jsx';
import clipData from './helpers/clipData.js';

class JandL extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const clipIndex = clipData.indexOf(
    //   clip => clip.headline === this.props.headline
    // );

    const theClip = clipData.find(clip => {
      return clip.headline
        .replace(/\s+/g, '-')
        .toLowerCase()
        .includes(this.props.headline);
    });
    const publication = theClip.publication;
    const headline = theClip.headline;
    const text = theClip.text;

    const clipIndex = clipData.indexOf(
      clip => clip.headline === theClip.headline
    );

    return (
      <main id="journalism" className="">
        <section id="clips" className="left">
          <h1>My stories</h1>
          <nav>
            <ClipNav activeItem={clipIndex} />
          </nav>
        </section>
        <section id="story" className="right">
          <h3 id="publication">{publication}</h3>
          <h1 id="story-headline">{headline}</h1>
          <section id="story-text-container">
            <p id="byline">by James Erik Abels</p>
            <section id="story-text">{text}</section>
          </section>
        </section>
      </main>
    );
  }
}

/*

filteredData = clipData.filter(clip => clip.headline === this.props.headline)

publication = filteredData.publication;
headline = filteredData.headline;
byline = filteredData.byline
text = filteredData.text

*/

export default withRouter(JandL);
