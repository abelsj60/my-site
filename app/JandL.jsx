import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ClipNav from './ClipNav.jsx';
import clipData from './helpers/clipData.js';

class JandL extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const id = 9;

    return (
      <main id="journalism" className="">
        <section id="clips" className="left">
          <h1>My stories</h1>
          <nav>
            <ClipNav clipData={clipData} item={id} />
          </nav>
        </section>
        <section id="story" className="right">
          <h3 id="publication">{clipData[9].publication}</h3>
          <h1 id="story-headline">{clipData[9].headline}</h1>
          <section id="story-text-container">
            <p id="byline">{clipData[9].byline}</p>
            <section id="story-text">{clipData[9].text}</section>
          </section>
        </section>
      </main>
    );
  }
}

export default withRouter(JandL);
