import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import styled, { css, createGlobalStyle } from 'styled-components';

import Body from './Body.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Location from './custom/Location.js';
import MagicScroller from './MagicScroller.jsx';
import FantasticImage from './FantasticImage.jsx';
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
    `};
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
      isMenu: r.checkForMenu(props)
    };

    this.magicRef = React.createRef();
    // console.log('html:', document.documentElement.scrollTop);
  }

  render() {
    const l = new Location('/', this.props);
    const homeIsActive = l.type === 'home' ? 'active' : '';

    const eForApp = new EventHandling('app', this);
    const boundHandleClickForApp = eForApp.boundHandleClick;

    const spellbook = new Spellbook('home', this);
    const boundSpellsForHome = spellbook.castSpell;

    // console.log(
    //   '1:',
    //   this.magicRef.current && this.magicRef.current.scrollHeight
    // );
    // console.log('2:', this.magicRef.current && this.magicRef.current.scrollTop);

    // element.scrollHeight - element.scrollTop === element.clientHeight

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
          <FantasticImage state={this.state} />
          <LegalTermsOrBizCard {...this.props} state={this.state} />
          <Footer
            {...this.props}
            state={this.state}
            boundHandleClickForApp={boundHandleClickForApp}
          />
        </Page>
        <MagicScroller home={homeIsActive} magicRef={this.magicRef} />
      </Fragment>
    );
  }

  get scrollTop() {
    return window.pageYOffset;
  }

  get fullyScrolled() {
    return (
      document.documentElement.scrollHeight - this.scrollTop ===
      document.documentElement.clientHeight
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

      const currentCall = l.type;
      const lastCall = l.lastType;
      const routeIsReloading = currentCall === 'i' || lastCall === 'i';

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
        handleClickForApp('setCallers', currentCall, lastCall);
      }

      if (isMenu !== r.checkForMenu(this.props)) {
        handleClickForApp('toggleMenu');
      }
    }

    // element.scrollHeight - element.scrollTop === element.clientHeight
    // console.log(
    //   'html:',
    //   document.documentElement.scrollHeight -
    //     document.documentElement.scrollTop ===
    //     document.documentElement.clientHeight
    // );
  }
}

export default withRouter(App);

// Story edit
// Restyle business card and legal terms

// SCROLL:
// Redo scroll actions
// Scroll to top of container on page change (story, journalism, projects, reverie)

// Flexbox retool
// Structure, more modular, theme, share design elements?

// Browser testing, and major errors + design (font)
// Images — how to store for React?
// Take pictures, write copy for Arrow, Slingshot, TMMnews
// Illustrator. List needs, specs?
// Hosting?
// Bug 1190721 - Throttle animations that produce any transform change hint if the target element is out-of-view.
// https://github.com/zurb/foundation-sites/issues/10924
