import Body from './Body.jsx';
import ClickHandling from './classes/ClickHandling.js';
import styled, {
  css,
  createGlobalStyle,
  ThemeProvider
} from 'styled-components';
import Footer from './header-footer/Footer.jsx';
import ReactGA from 'react-ga';
import Header from './header-footer/Header.jsx';
import {
  browserVersion,
  isIE,
  isMobile,
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
import TooSmallScreen from './temp-content/TooSmallScreen.jsx';
import { withRouter } from 'react-router';

// A note on Flexbox compatibility: https://stackoverflow.com/a/35137869

const colors = {
  black: 'black',
  blue: '#008dd5',
  blueTwo: '#b9dff3',
  lightBlack: '#455057',
  pink: '#fd1172',
  reverieBlue: '#d2e7ff',
  white: 'white',
  yellow: '#ffe74c',
  darkPink: '#af125a',
  darkPinkTwo: '#bd3d78',
  frostedBlue: '#4286f4'
};
const fontSizes = {
  zero: '.9rem',
  one: '1.1rem',
  two: '1.15rem',
  three: '1.2rem',
  four: '1.25rem',
  five: '1.298rem',
  six: '1.3rem',
  seven: '1.35rem',
  eight: '1.4rem',
  nine: '1.45rem',
  ten: '1.5rem',
  eleven: '1.55rem',
  twelve: '1.6rem',
  thirteen: '1.7rem',
  fourteen: '1.9rem',
  fifteen: '2rem',
  sixteen: '3.1rem',
  seventeen: '6.5rem'
};
const mediaQueries = {
  tinyView: '390px',
  tinyViewTwo: '425px',
  narrowBreakOne: '500px',
  narrowBreakTwo: '690px',
  desktop: '848px'
};
const bottomMargin = {
  regular: '20px'
};
const blurControl = {
  regular: 'blur(3px)'
};
const ZoomControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${p => p.theme.pageHeight}px;
  position: relative;
  
  @media(orientation: landscape) {
    // Fix esoteric iOS 7 iPad bug:
    // https://stackoverflow.com/a/19449123
    // https://stackoverflow.com/q/19012135
    // https://krpano.com/ios/bugs/ios7-ipad-landscape/

    ${p => p.fixMobileSafariBugOn7 && 'position: fixed; bottom: 0;'}
  }
  
  ${p => p.home && css`
    width: 100%;
    overflow: hidden;
  `};
`;
const GlobalStyle = createGlobalStyle`
  html {
    // Best practice to load fonts: 
    // https://stackoverflow.com/questions/12316501/including-google-web-fonts-link-or-import

    font-family: 'Montserrat', sans-serif;
    font-size: 62.5%;
    background-color: ${p => p.reverie ? '#d2e7ff' : 'white'};
  }
  
  body {
    margin: 0px;
    padding: 0px;
    font-size: ${p => p.theme.fontSizes.twelve};
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: rgba(0,0,0,0);

    h1,
    h2,
    h3,
    p,
    ul {
      margin: 0px;
    }

    h1 {
      font-family: 'Playfair Display', serif;
      font-weight: 900;
      margin-left: 2px;
    }

    p {
      margin-bottom: ${p => p.theme.bottomMargin.regular};
      line-height: 1.6;
    }
  }
`;

class App extends Component {
  constructor(props) {
    super(props);

    const referrer = new Referrer(props);
    const location = referrer.location;
    const {
      pathname,
      search
    } = window.location;
    const height =
      isMobile && !isMobileSafari
        ? document.documentElement.clientHeight
        : window.innerHeight;

    // One way to block orientation change
    // https://css-tricks.com/snippets/css/orientation-lock/

    ReactGA.initialize('UA-137902767-1');
    ReactGA.pageview(pathname + search); // Tallies initial request

    this.resizeTimeoutId = undefined; // Let's debounce 'resize'!

    this.state = {
      currentCaller: location !== 'i'
        ? location
        : 'home',
      lastCaller: location !== 'reverie'
        ? location
        : 'home',
      inCity: false, // Fantasy image on home if false
      isMenu: referrer.isMenu(props), // Menu page (/projects, /journalism, /reverie)
      height: height, // Sets height of <main />
      showBusinessCard: false, // Show business card
      showLegalTerms: false, // Show legal terms
      showStoryText: true, // Show story text, picture if false
      pinchZoomed: false, // We're zoomed! or not.
      tooNarrow: height < 350, // Too narrow, rotate screen
      isZooming: false, // True when pinch zooming is ongoing
      isAfterTouch: false, // Resize w/clientHeight when true
      isCasting: false,
      spellPattern: []
    };

    this.handleResize = this.handleResize.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
  }

  render() {
    const location = new Location('/', this.props);
    const hcForApp = new ClickHandling('app', this);
    const boundHandleClickForApp = hcForApp.boundHandleClick;
    const homeIsActive = location.type === 'home';
    const reverieIsActive = location.type === 'reverie';
    const fixMobileSafariBugOn7 = isTablet
      && isMobileSafari
      && osVersion[0] === '7';

    return (
      <ThemeProvider
        theme={{
          bottomMargin,
          colors,
          fontSizes,
          mediaQueries,
          pageHeight: this.state.height.toString(),
          blur: blurControl.regular,
          blurForTempContent: this.state.showBusinessCard || this.state.showLegalTerms
        }}
      >
        {/* Use Fragment b/c ThemeProvider
        only accepts one child. */}
        <Fragment>
          <GlobalStyle
            reverie={reverieIsActive}
          />
          {/* Though an extra <div>, ZoomControl lets us add 'touch'
            events to React (alt is to add them to the Window) */}
          <ZoomControl
            home={homeIsActive}
            onTouchMove={this.handleTouchMove}
            onTouchEnd={this.handleTouchEnd}
            fixMobileSafariBugOn7={fixMobileSafariBugOn7}
          >
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
            <TooSmallScreen
              tooNarrow={this.state.tooNarrow}
            />
          </ZoomControl>
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
    } else if (isOpera || (isIE && browserVersion <= 10)) {
      throw new Error("We don't currently support Opera");
    }

    // Heard after all React handlers run
    // https://fortes.com/2018/react-and-dom-events/
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    // This will never be called, here as good practice.
    window.removeEventListener('resize', this.handleResize);
  }

  handleTouchMove(event) {
    // We're probably zooming if two fingers are down.

    if (event.touches.length === 2) {

      // Pinch zoom almost always moves the X, Y offset.
      // This is a more effective check than trying to
      // add points as coordinates or height/width.

      if (
        window.pageXOffset > 0
          && window.pageYOffset > 0
      ) {
        this.setState({
          pinchZoomed: true,
          isZooming: true,
          isAfterTouch: true
        }); // Set zoom state
      } else if (
        // Hard to hit 0 on the nose, so
        // let's look for negatives.

        window.pageXOffset <= 0
          && window.pageYOffset <= 0
      ) {
        this.setState({
          pinchZoomed: false, // Reset zoom state
          isZooming: true,
          isAfterTouch: true
        });
      }
    }
  }

  handleTouchEnd() {
    // Touch is over, have we been zooming?

    if (this.state.isZooming) {
      // Let's set intermediate values for resizing.

      this.setState({
        isZooming: false
      });
    }
  }

  handleResize() {
    // https://alvarotrigo.com/blog/firing-resize-event-only-once-when-resizing-is-finished/

    clearTimeout(this.resizeTimeoutId); // Still moving, kill timeout
    this.resizeTimeoutId = setTimeout(() => this.updateHeight(), 50);
  }

  updateHeight() {
    // On desktops, resize if height is changing.

    if (!isMobile
      && this.state.width !== window.innerWidth
      && this.state.height === window.innerHeight) {
      return false;
    }

    // Don't resize while zooming.

    if (this.state.isZooming) {
      return false;
    }

    const {
      pathname,
      search
    } = window.location;

    // Orientation change: https://stackoverflow.com/a/37493832

    // On mobile, we must account for browser differences.
    // Mobile Safari updates innerHeight on resize and
    // changes to UI chrome, while mobile Chrome
    // does not. Also, after touchMove, Safari doesn't
    // update innerHeight correctly, so we'll use
    // clientHeight 'afterTouch'. Results:

    //  a. clientHeight - mobile Chrome and after touchMove
    //  b. innerHeight - mobile Safari

    const newHeight =
      isMobile
        && (!isMobileSafari
            || this.state.isAfterTouch
            || (this.state.tooNarrow && this.state.pinchZoomed))
        ? document.documentElement.clientHeight
        : window.innerHeight;

    // When zoomed, always resize when screen isn't too narrow.
    // As a result, we can zoom in on the tooSmall landscape
    // screen (), rotate to portrait, see the zoomed site,
    // rotate back to landsape, and still see the zoom.

    // Note: If user zooms in on tooSmall screen, nothing
    // will be seen until after first rotation, which
    // 'feels' right.

    if (
      this.state.pinchZoomed
        && !this.state.tooNarrow
    ) {
      ReactGA.event({
        category: 'App state',
        action: 'Resized while pinchZoomed',
        value: newHeight,
        label: `Page: ${pathname}${search}`
      });

      return false;
    }

    // Only resize when height changes.

    if (newHeight === this.state.height) {
      ReactGA.event({
        category: 'App state',
        action: 'Resized w/o changing height',
        value: newHeight,
        label: `Page: ${pathname}${search}`
      });

      return false;
    }

    // Ensure the window top at zero after resize change.
    // (This trigers another resize if height changes.)

    if (window.pageYOffset > 0) {
      const scrollHandling = new ScrollHandling(location);
      scrollHandling.resetWindowTop();
    }

    // Update page height when these factors are true:
    //  a. mobile device
    //  b. orientation change / pinch-zoom out
    //  c. height change

    ReactGA.event({
      category: 'App state',
      action: 'Re-calculate height',
      value: newHeight,
      label: `Page: ${pathname}${search}`
    });

    this.setState(
      () => ({
        height: newHeight,
        tooNarrow:
          newHeight < 350
            ? true
            : false,
        isAfterTouch:
          this.state.isAfterTouch
            && false
      })
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
      const hcForApp = new ClickHandling('app', this);
      const handleClickForApp = hcForApp.boundHandleClick;

      // Keep isCasting and storyText in sync when the location
      // isn't reloading (redirecting w/n a section).

      if (
        !showStoryText
          && !location.isReloading // Prevent calls to/for /i.
      ) {
        const typeForUpdate =
          location.typeForUpdateInApp(
            this.props,
            prevProps
          );
        const lastTypeForUpdate =
          location.lastTypeForUpdateInApp(
            this.props,
            prevProps
          );
        const goingToReverie = typeForUpdate === 'reverie';
        const leavingReverie = lastTypeForUpdate === 'reverie';

        const goingToStory = typeForUpdate === 'chapter';
        const leavingStory = lastTypeForUpdate === 'chapter';

        // We won't toggle the storyText if we're going to or
        // coming from a /reverie.

        if (
          !(goingToReverie && leavingStory)
              && !(leavingReverie && goingToStory)
        ) {
          handleClickForApp('toggleStoryText');
        }
      }

      // Reset the businessCard if we leave a card by clicking
      // a link in the header or footer or body.

      if (showBusinessCard) {
        handleClickForApp('toggleBusinessCard');
      }

      // Reset the legalTerms if we leave them by clicking
      // a link in the header or footer or body.

      if (showLegalTerms) {
        handleClickForApp('toggleLegalTerms');
      }

      // Reset the menuState if we leave a menu by clicking
      // clicking a link in the header or footer or body.

      if (isMenu !== referrer.isMenu(this.props)) {
        handleClickForApp('toggleMenu');
      }

      // Don't update callers on reload.

      if (!location.isReloading) {

        // Note: In some situations, the callers on state
        // will lag the reality of the application. In at
        // least some of these cases, the reason is that
        // seState is asynchronous, meaning there is a
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
        // '/chapter', '/projects', etc...

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
        const {
          pathname,
          search
        } = window.location;
        ReactGA.pageview(
          pathname + search
        );
      }
    }
  }
}

export default withRouter(App);
