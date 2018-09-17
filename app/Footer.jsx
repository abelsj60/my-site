import React, { Component } from 'react';
import ItemNav from './ItemNav.jsx';
import { withRouter } from 'react-router-dom';

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
        <div className="borderline" />
        <div className="story-text-icon" />
        <p className="app-bar-text">Tale</p>
        <div className="borderline" />
        <div className="story-text-icon" />
        <p className="app-bar-text">Bonus</p>
        <p className="copyright">James Abels. All rights reserved. 2018.</p>
      </footer>
    );
  }
}

export default withRouter(Footer);
