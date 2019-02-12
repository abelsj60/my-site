import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router';
import { css, createGlobalStyle } from 'styled-components';

import Body from './Body.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Location from './custom/Location.js';
import LegalTermsOrBizCard from './LegalTermsOrBizCard.jsx';

import EventHandling from './custom/EventHandling.js';
import Referrer from './custom/Referrer.js';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: lato;
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
  }

  #app {
    display: flex;
    flex-direction: column;
    height: 100vh;

    ${props =>
    props.home === 'active' &&
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
      showStoryText: true,
      showLegalTerms: false,
      showBusinessCard: false,
      magicOpacity: 0,
      blockPointer: location === 'home',
      currentCaller: location,
      lastCaller: location !== 'reverie' ? location : 'home',
      isMenu: r.checkForMenu(props),
      homePageMagic: location === 'home',
      pointsUnknown: true
    };

    this.magicRef = React.createRef();
  }

  render() {
    const l = new Location('/', this.props);
    const homeIsActive = l.type === 'home' ? 'active' : '';

    const eForApp = new EventHandling('app', this);
    const boundHandleClickForApp = eForApp.boundHandleClick;

    return (
      <Fragment>
        <GlobalStyle home={homeIsActive} />
        <Header {...this.props} state={this.state} />
        <Body
          {...this.props}
          state={this.state}
          boundHandleClickForApp={boundHandleClickForApp}
        />
        <LegalTermsOrBizCard {...this.props} state={this.state} />
        <Footer
          {...this.props}
          state={this.state}
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
        isMenu,
        homePageMagic
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

      if (homePageMagic) {
        handleClickForApp('cancelHomePageMagic');
      }
    }
  }
}

export default withRouter(App);

// Story edit
// Structure, more modular, theme, share design elements?
// Take pictures, write copy for Arrow, Slingshot, TMMnews

// Flexbox retool
// Picture focus
// Short height, flex or overflow content container?

// Images — how to store for React?
// Illustrator. List needs, specs?
// Hosting?
