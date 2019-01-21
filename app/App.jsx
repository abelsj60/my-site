import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router';
import styled, { css, createGlobalStyle } from 'styled-components';

import Body from './Body.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Location from './custom/Location.js';
import MagicScroller from './MagicScroller.jsx';
import LegalTermsOrBizCard from './LegalTermsOrBizCard.jsx';

import EventHandling from './custom/EventHandling.js';
import Referrer from './custom/Referrer.js';
import Spellbook from './custom/Spellbook.js';

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
`;
const Page = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;

  ${props =>
    props.home === 'active' &&
    css`
      width: 100%;
      position: fixed;
      background: url('/howls-background-dl.jpg') no-repeat fixed center top;
    `};
`;

class App extends Component {
  constructor(props) {
    super(props);

    const r = new Referrer(props);

    this.state = {
      showStoryText: true,
      showLegalTerms: false,
      showBusinessCard: false,
      magicOpacity: 0,
      blockPointer: r.location === 'home',
      currentCaller: r.getLocation(props),
      lastCaller: '',
      isMenu: r.checkForMenu(props)
    };
  }

  render() {
    const l = new Location('/', this.props);
    const homeIsActive = l.type === 'home' ? 'active' : '';

    const eForApp = new EventHandling('app', this);
    const boundHandleClickForApp = eForApp.boundHandleClick;

    const spellBook = new Spellbook('home', this);
    const boundSpellsForHome = spellBook.castSpell;

    return (
      <Fragment>
        <GlobalStyle />
        <Page home={homeIsActive}>
          <Header
            {...this.props}
            state={this.state}
            scrollTop={this.scrollTop}
          />
          <Body
            {...this.props}
            state={this.state}
            boundSpellsForHome={boundSpellsForHome}
          />
          <LegalTermsOrBizCard {...this.props} state={this.state} />
          <Footer
            {...this.props}
            state={this.state}
            boundHandleClickForApp={boundHandleClickForApp}
          />
        </Page>
        <MagicScroller home={homeIsActive} />
      </Fragment>
    );
  }

  get scrollTop() {
    return window.pageYOffset;
  }

  componentDidUpdate(prevProps) {
    const l = new Location('/', this.props, prevProps);

    if (l.justChanged) {
      const {
        showBusinessCard,
        showLegalTerms,
        showStoryText,
        lastCaller,
        isMenu
      } = this.state;

      const r = new Referrer(prevProps);

      const currentCall = l.type;
      const lastCall = l.lastType;

      const firstTimeThrough = lastCaller === '';
      const routeIsNotReloading = currentCall !== 'i' && lastCall !== 'i';

      const eForApp = new EventHandling('app', this);
      const handleClickForApp = eForApp.boundHandleClick;

      if (showBusinessCard) {
        handleClickForApp('showBusinessCard');
      }

      if (showLegalTerms) {
        handleClickForApp('showLegalTerms');
      }

      if (!showStoryText) {
        handleClickForApp('showStoryText');
      }

      if (firstTimeThrough || routeIsNotReloading) {
        handleClickForApp('callers', currentCall, lastCall);
      }

      if (isMenu !== r.checkForMenu(this.props)) {
        handleClickForApp('isMenu');
      }
    }
  }
}

export default withRouter(App);

// Thumbnail glitch
// Rename eventHandling funcs? Toggles rather than shows?
// homeIsActive...
// Story edit

// Structure, more modular, theme, share design elements?

// Browser testing, and major errors + design (fonts?, bullets in Reverie)
// Images — how to store for React?
// Take pictures, write copy for Arrow, Slingshot, TMMnews
// Illustrator. List needs, specs?
// Hosting?
