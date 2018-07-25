import React, { Component } from 'react';
import ItemNav from './ItemNav.jsx';
import { withRouter } from 'react-router-dom';
// import helpers from './helpers/helpers.js';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const chapters = [1, 2, 3, 4];
    const route = '/chapter/';
    const chapterNumber = this.props.location.pathname.split('/')[2];

    return (
      <footer style={{ opacity: this.props.opacity }}>
        <section className="app-bar">
          <div className="app-bar-container">
            <div className="chapter-text-icon" />
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
          </div>
          <div className="borderline" />
          <div className="app-bar-container">
            <div className="story-text-icon" />
            <p className="app-bar-text">Text</p>
          </div>
          <div className="borderline" />
          <div className="app-bar-container">
            <div className="story-text-icon" />
            <p className="app-bar-text">About</p>
          </div>
        </section>
        <p className="copyright">James Abels. All rights reserved. 2018.</p>
      </footer>
    );
  }
}

export default withRouter(Footer);
