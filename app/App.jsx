import Body from './Body.jsx';
import { css, createGlobalStyle } from 'styled-components';
import Footer from './header-footer/Footer.jsx';
import Header from './header-footer/Header.jsx';
import LegalTermsOrBizCard from './temp-content/LegalTermsOrBizCard.jsx';
import Location from './classes/Location.js';
import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router';

import EventHandling from './classes/EventHandling.js';
import Referrer from './classes/Referrer.js';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Lato', sans-serif;
    font-size: 65%;
  }

  body {
    margin: 0px;
    padding: 0px;
    font-size: 1.5rem;

    h1,
    h2,
    h3,
    p {
      margin: 0px 0px 0px 2px;
    }
  }

  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    ${p =>
    p.home &&
      css`
        width: 100%;
        position: fixed;
      `};
  }
`;

class App extends Component {
  constructor(props) {
    super(props);

    const r = new Referrer(props);
    const location = r.getLocation(props);

    this.state = {
      currentCaller: location,
      lastCaller: location !== 'reverie' ? location : 'home',
      inCity: false,
      isMenu: r.checkForMenu(props),
      showBusinessCard: false,
      showLegalTerms: false,
      showStoryText: true
    };
  }

  render() {
    const l = new Location('/', this.props);
    const homeIsActive = l.type === 'home';

    const eForApp = new EventHandling('app', this);
    const boundHandleClickForApp = eForApp.boundHandleClick;

    return (
      <Fragment>
        <GlobalStyle home={homeIsActive} />
        <Header {...this.props} appState={this.state} />
        <Body
          {...this.props}
          appState={this.state}
          boundHandleClickForApp={boundHandleClickForApp}
        />
        <LegalTermsOrBizCard {...this.props} appState={this.state} />
        <Footer
          {...this.props}
          appState={this.state}
          boundHandleClickForApp={boundHandleClickForApp}
        />
      </Fragment>
    );
  }

  componentDidUpdate(prevProps) {
    const l = new Location('/', this.props, prevProps);

    if (l.justChanged) {
      const {
        showBusinessCard,
        showLegalTerms,
        showStoryText,
        isMenu
      } = this.state;

      const r = new Referrer(prevProps);

      const currentCaller = l.type;
      const lastCaller = l.lastType;
      const routeIsReloading = currentCaller === 'i' || lastCaller === 'i';

      const eForApp = new EventHandling('app', this);
      const handleClickForApp = eForApp.boundHandleClick;

      if (showBusinessCard) {
        handleClickForApp('toggleBusinessCard');
      }

      if (showLegalTerms) {
        handleClickForApp('toggleLegalTerms');
      }

      if (!showStoryText) {
        handleClickForApp('toggleStoryText');
      }

      if (!routeIsReloading) {
        handleClickForApp('setCallers', currentCaller, lastCaller);
      }

      if (isMenu !== r.checkForMenu(this.props)) {
        handleClickForApp('toggleMenu');
      }
    }
  }
}

export default withRouter(App);

// Story edit
// Add copyright to articles?
// Take pictures, write captions for Arrow, Slingshot, TMMnews

// Images — how to store for React?
// Illustrator. List needs, specs?
// Hosting?

// https://www.tutorialspoint.com/css/css_animation.htm
// https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/
