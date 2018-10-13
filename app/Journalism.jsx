import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ClipNav from './ClipNav.jsx';
import articleData from './data/articleData';

class Journalism extends Component {
  constructor(props) {
    super(props);
  }

  formatPublicationForUrl(publication) {
    return publication.replace(/\s+/g, '').toLowerCase();
  }

  formatHeadlineForUrl(headline) {
    return headline
      .replace(/\s+/g, '-')
      .replace(/\./g, '')
      .replace(/'+/g, '')
      .replace(/,+/g, '')
      .replace(/:/g, '')
      .replace(/\//g, '-')
      .toLowerCase()
      .toLowerCase();
  }

  render() {
    const theClip = articleData.find(clip => {
      return this.formatHeadlineForUrl(clip.headline).includes(
        this.props.state.headline
      );
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
