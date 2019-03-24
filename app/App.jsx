import Body from './Body.jsx';
import ClickHandling from './classes/ClickHandling.js';
import {
  css,
  createGlobalStyle,
  ThemeProvider
} from 'styled-components';
import Footer from './header-footer/Footer.jsx';
// import ReactGA from 'react-ga';
import Header from './header-footer/Header.jsx';
import {
  isMobileSafari,
  isOpera,
  isTablet,
  osVersion
} from 'react-device-detect';
import LegalTermsOrBizCard from './temp-content/LegalTermsOrBizCard.jsx';
import Location from './classes/Location.js';
import React, { Fragment, Component } from 'react';
import Referrer from './classes/Referrer.js';
import ScrollHandling from './classes/ScrollHandling.js';
import { withRouter } from 'react-router';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Montserrat', sans-serif;
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
      margin: 0px;
    }

    h1 {
      font-family: 'Playfair Display', serif;
      margin-left: 2px;
    }

    h2 {
      font-family: 'Montserrat', sans-serif;
    }

    p {
      font-family: 'Montserrat', sans-serif;
      line-height: 1.5;
    }
  }

  #app {
    display: flex;
    flex-direction: column;
    height: ${p => p.theme.pageHeight}px;
    
    @media(orientation:landscape) {
      // Fix esoteric iOS 7 iPad bug
      // https://stackoverflow.com/a/19449123
      // https://stackoverflow.com/q/19012135
      // https://krpano.com/ios/bugs/ios7-ipad-landscape/
      ${p => p.fixMobileSafariBugOn7 && 'position:fixed; bottom: 0;'};
    }
    
    ${p => p.home && css`
      width: 100%;
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
      height: window.innerHeight || document.documentElement.clientHeight,
      showBusinessCard: false,
      showLegalTerms: false,
      showStoryText: true
    };

    this.updateHeight = this.updateHeight.bind(this);
  }

  render() {
    const location = new Location('/', this.props);
    const hcForApp = new ClickHandling('app', this);
    const boundHandleClickForApp = hcForApp.boundHandleClick;
    const homeIsActive = location.type === 'home';
    const fixMobileSafariBugOn7 = isTablet
      && isMobileSafari
      && osVersion[0] === '7';

    return (
      <ThemeProvider
        theme={{
          pageHeight: this.state.height.toString()
        }}
      >
        <Fragment>
          <GlobalStyle
            home={homeIsActive}
            fixMobileSafariBugOn7={fixMobileSafariBugOn7}
          />
          <Header
            {...this.props}
            appState={this.state}
          />
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
      </ThemeProvider>
    );
  }

  hasFlexbox() {
    // https://johanronsse.be/2016/01/03/simple-flexbox-check/
    const document = window.document.body
      || window.document.documentElement;
    const style = document.style;

    if (
      style.webkitFlexWrap === ''
        || style.msFlexWrap === ''
        || style.flexWrap === ''
    ) {
      return true;
    }

    return false;
  }

  componentDidMount() {
    if (!this.hasFlexbox()) {
      throw new Error("Browser doesn't support Flexbox");
    } else if (isOpera) {
      throw new Error("We don't currently support Opera");
    }

    window.addEventListener('resize', this.updateHeight);
  }

  componentWillUnmount() {
    // It'll never be called, here as good practice
    window.removeEventListener('resize', this.updateHeight);
  }

  updateHeight() {
    if (
      (this.state.height !== window.innerHeight)
        || (this.state.height !== document.documentElement.clientHeight)
    ) {
      this.setState({
        height: window.innerHeight
      });
    }
  }

  componentDidUpdate(prevProps) {
    const location = new Location(
      '/',
      this.props,
      prevProps
    );

    // Ensure window top's at zero after orientation change
    const scrollHandling = new ScrollHandling(location);
    scrollHandling.resetWindowTop();

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

// https://codersblock.com/blog/creating-glow-effects-with-css/

// Illustrator. List needs, specs?
// Analytics, a. find password/account, b. set up ngrok, d. connect GA to acct.

// Hosting?
// ! https://github.com/rafrex/spa-github-pages
// ! http://spa-github-pages.rafrex.com/

