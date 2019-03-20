import Body from './Body.jsx';
import ClickHandling from './classes/ClickHandling.js';
import {
  css,
  createGlobalStyle
} from 'styled-components';
import Footer from './header-footer/Footer.jsx';
// import ReactGA from 'react-ga';
import Header from './header-footer/Header.jsx';
import { isMobileSafari, isTablet } from 'react-device-detect';
import LegalTermsOrBizCard from './temp-content/LegalTermsOrBizCard.jsx';
import Location from './classes/Location.js';
import MobileSafariSpacer from './shared/MobileSafariSpacer.jsx';
import React, { Fragment, Component } from 'react';
import Referrer from './classes/Referrer.js';
import ScrollHandling from './classes/ScrollHandling.js';
import { withRouter } from 'react-router';

console.log('1:', isTablet);
const vHeight = !isTablet ? '97.5vh' : '100vh';
console.log('2:', vHeight);

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Lato', sans-serif;
    font-size: 65%; // 62.5%
  }
  
  body {
    margin: 0px;
    padding: 0px;
    font-size: 1.5rem;
    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: rgba(0,0,0,0);

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
    min-height: ${p => !p.iPad ? '100vh' : '97.45vh'};
    
    ${p => p.home
      && css`
        width: 100%;
        position: fixed;
        overflow: hidden;
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

    this.ref = React.createRef();

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
    const hcForApp = new ClickHandling('app', this);
    const boundHandleClickForApp = hcForApp.boundHandleClick;
    const homeIsActive = location.type === 'home';

    return (
      <Fragment>
        <GlobalStyle home={homeIsActive} iPad={isTablet && isMobileSafari} />
        <Header {...this.props} appState={this.state} />
        <Body
          {...this.props}
          appState={this.state}
          boundHandleClickForApp={boundHandleClickForApp}
        />
        <LegalTermsOrBizCard
          {...this.props}
          appState={this.state}
          boundHandleClickForApp={boundHandleClickForApp}
        />
        <Footer
          {...this.props}
          appState={this.state}
          boundHandleClickForApp={boundHandleClickForApp}
        />
      </Fragment>
    );
  }

  componentDidMount() {
    // getBouncingRect via this.ref1, this.ref2, this.ref3
    // If the .top and .left are what we expect, this.setState({supportedBrowser: false})
    // reRender. If !supportedBrowser, <UnsupportedBrowserSite>
    //  -Header (name + motto)
    //  -Body (explanatory message)
    //  -Footer (All rights reserved)
    // Otherwise, show appAsIntended
  }

  componentDidUpdate(prevProps) {
    const location = new Location(
      '/',
      this.props,
      prevProps
    );
    let scrollHandler;

    if (isMobileSafari) {
      scrollHandler = new ScrollHandling(location);
      scrollHandler.resetMobileSafariTop();
    }

    if (location.justChanged) {
      const {
        isMenu,
        showBusinessCard,
        showLegalTerms,
        showStoryText
      } = this.state;
      const referrer = new Referrer(prevProps);
      const hcForApp = new ClickHandling('app', this);
      const handleClickForApp = hcForApp.boundHandleClick;

      if (showBusinessCard) {
        handleClickForApp('toggleBusinessCard');
      }

      if (showLegalTerms) {
        handleClickForApp('toggleLegalTerms');
      }

      if (
        !showStoryText
          && !location.isReloading
          && location.type !== 'reverie'
          && location.lastType !== 'reverie'
      ) {
        // If you've hidden text, and gone to reverie, and
        // come back, the text will still be hidden. You
        // can remove the three &&'s above to change.
        handleClickForApp('toggleStoryText');
      }

      if (isMenu !== referrer.isMenu(this.props)) {
        // See note below.
        handleClickForApp('toggleMenu');
      }

      /** Don't update callers on reload */
      if (!location.isReloading) {
        // Note: In some situations, the callers on state
        // will lag the reality of the application. In at
        // least some of these cases, the reason is that
        // seState is asynchornous, meaning there is a
        // lag in execution, leaving appState behind.
        // A partial fix is to move the callers out
        // of appState and treat them as class properties
        // instead. This raises the question — what is the
        // line as to when to manage a property on state
        // versus as non-state class properties. Properties
        // that track something, but which don't have to
        // cause a re-render, shouldn't necessarily be
        // added to state. This rule might apply to the
        // callers, and isMenu (above).
        // As of 3/16, we are not addressing it. If you
        // want to restore scroll position, however you
        // may need to tackle this question as the values
        // and state changes will need up-to-date info.
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

// 2. Edit story
// 3. Take pictures, write captions for Arrow, Slingshot, TMMnews
// 4. Fix styled-components attribute use / clean up CSS
// 5. Browser testing, step 1, screenshots

// Illustrator. List needs, specs?
// Analytics, a. find password/account, b. set up ngrok, d. connect GA to acct.
// Story image is too small? Scale: https://stackoverflow.com/a/23805337
// 2. https://stackoverflow.com/a/28450112

// Hosting?
// ! https://github.com/rafrex/spa-github-pages
// ! http://spa-github-pages.rafrex.com/

// Sticky footer/wrapper: https://stackoverflow.com/a/44771365
// https://www.eventbrite.com/engineering/mobile-safari-why/
// https://www.npmjs.com/package/react-device-detect

// Just for fun: https://stackoverflow.com/a/49328427
