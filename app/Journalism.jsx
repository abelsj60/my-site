import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ClipNav from './ClipNav.jsx';
import articleData from './data/articleData';
import { normalize } from './helpers/utils.js';

class Journalism extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const theClip = articleData.find(clip => {
      return normalize(clip.headline).includes(this.props.state.headline);
    });
    const publication = theClip.publication;
    const headline = theClip.headline;
    const text = theClip.text;

    return (
      <main id="journalism" className="">
        <section id="clips" className="left">
          <h1>My stories</h1>
          <nav>
            <ClipNav state={this.props.state} />
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
