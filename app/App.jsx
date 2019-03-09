import Body from './Body.jsx';
import {
  css,
  createGlobalStyle
} from 'styled-components';
import EventHandling from './classes/EventHandling.js';
import Footer from './header-footer/Footer.jsx';
// import ReactGA from 'react-ga';
import Header from './header-footer/Header.jsx';
import LegalTermsOrBizCard from './temp-content/LegalTermsOrBizCard.jsx';
import Location from './classes/Location.js';
import React, { Fragment, Component } from 'react';
import Referrer from './classes/Referrer.js';
import { withRouter } from 'react-router';

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
    p.home
      && css`
        width: 100%;
        position: fixed;
      `};
  }
`;

class App extends Component {
  constructor(props) {
    super(props);

    const referrer = new Referrer(props);
    const location = referrer.location;
    // ReactGA.initialize('tbd'); // Tallies initial request
    // ReactGA.pageview(window.location.pathname);

    this.state = {
      currentCaller: location,
      lastCaller: location !== 'reverie'
        ? location
        : 'home',
      inCity: false,
      isMenu: referrer.isMenu(props),
      showBusinessCard: false,
      showLegalTerms: false,
      showStoryText: true
    };
  }

  render() {
    const location = new Location('/', this.props);
    const homeIsActive = location.type === 'home';

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
    const location = new Location(
      '/',
      this.props,
      prevProps
    );

    if (location.justChanged) {
      const {
        isMenu,
        showBusinessCard,
        showLegalTerms,
        showStoryText
      } = this.state;
      const referrer = new Referrer(prevProps);
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

      if (isMenu !== referrer.isMenu(this.props)) {
        handleClickForApp('toggleMenu');
      }

      /** Don't update callers on reload */
      if (!location.isReloading) {
        handleClickForApp(
          'setCallers',
          location.type,
          location.lastType
        );
      }

      if (
        // '/chapter', '/projects', etc:
        !location.isTopLevel
        // lastCaller was not '/i'. The app will
        // run two re-renders after a <Redirect />
        // moves us from '/i' to the next page's
        // URL (see next statement). As a result,
        // we filter one of the re-renders out so
        // we don't tally the page URL twice:
        && !location.isCalledAfterReload
        // current window URL is not '/i'.
        // Restate route occurs on the '/i' url.
        // The app doesn't move to the next page's
        // URL until a <Redirect /> loads it. This
        // check blocks '/i' from being tallied
        // by GA:
        && window.location.pathname !== '/i'
      ) {
        // ReactGA.pageview(window.location.pathname);
      }
    }
  }
}

export default withRouter(App);

// copyright?
// ngrok on mobile + Endtest
// Take pictures, write captions for Arrow, Slingshot, TMMnews

// Fix tooLongMenuPaths
// Right or left margin spacing — equalize

// Images — how to store for React?
// Illustrator. List needs, specs?
// Analytics, a. find password/account, b. set up ngrok, d. connect GA to acct.

// Hosting?
// ! https://github.com/rafrex/spa-github-pages
// ! http://spa-github-pages.rafrex.com/
