import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ClipNav from './ClipNav.jsx';
import clipData from './helpers/clipData.js';

class Journalism extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const theClip = clipData.find(clip => {
      return clip.headline
        .replace(/\s+/g, '-')
        .replace(/'+/g, '')
        .replace(/\./g, '')
        .replace(/,+/g, '')
        .replace(/:/g, '')
        .replace(/\//g, '-')
        .toLowerCase()
        .includes(this.props.headline);
    });
    const publication = theClip.publication;
    const headline = theClip.headline;
    const text = theClip.text;
    const clipIndex = clipData.findIndex(clip => {
      return clip.headline
        .replace(/\s+/g, '-')
        .replace(/'+/g, '')
        .replace(/\./g, '')
        .replace(/,+/g, '')
        .replace(/:/g, '')
        .replace(/\//g, '-')
        .toLowerCase()
        .includes(this.props.headline);
    });

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

export default withRouter(Journalism);
