import React, { Component } from 'react';
// import ItemNav from './ItemNav.jsx';
import { withRouter } from 'react-router-dom';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const chapters = [1, 2, 3, 4];
    // const route = '/chapter/';
    // const chapterNumber = this.props.location.pathname.split('/')[2];

    function setFooterText(props) {
      const siteSection = props.location.pathname.split('/')[1];

      if (siteSection === 'projects') {
        return 'Projects';
      } else if (siteSection === 'chapter') {
        return 'Chapters';
      } else if (siteSection === 'jnl') {
        return 'Clips';
      }
    }

    return (
      <footer style={{ opacity: this.props.opacity }}>
        <span className="app-bar-spacer" />
        <section className="app-bar-button">
          <img src="" alt="" className="app-bar-icon" />
          <p className="app-bar-text">{setFooterText(this.props)}</p>
        </section>
        <span className="app-bar-spacer" />
        <div className="borderline" />
        <span className="app-bar-spacer" />
        <section className="app-bar-button">
          <img src="" alt="" className="app-bar-icon" />
          <p className="app-bar-text">Text</p>
        </section>
        <span className="app-bar-spacer" />
        <div className="borderline" />
        <span className="app-bar-spacer" />
        <section className="app-bar-button">
          <img src="" alt="" className="app-bar-icon" />
          <p className="app-bar-text">Details</p>
        </section>
        <span className="app-bar-spacer" />
        <p className="copyright">James Abels. All rights reserved. 2018.</p>
      </footer>
    );
  }
}

export default withRouter(Footer);
