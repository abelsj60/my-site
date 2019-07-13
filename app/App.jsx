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
import PasswordLogin from './shared/PasswordLogin.jsx';
import React, { Fragment, Component } from 'react';
import Referrer from './classes/Referrer.js';
import ScrollHandling from './classes/ScrollHandling.js';
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
  seventeen: '6.5rem',
  eighteen: '2.5rem',
  nineteen: '1.745rem',
  twenty: '4rem',
  twentyOne: '1rem',
  twentyTwo: '1.13rem'
};
const mediaQueries = {
  tinyView: '390px',
  tinyViewTwo: '425px',
  narrowBreakOne: '500px',
  narrowBreakTwo: '690px',
  narrowBreakTwoB: '691px',
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
    }

    h1,
    h2 {
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

    // Let's deal w/height.
    //  1. Check value based on device type.
    //  2. If the screen is landscape:
    //    a. Set property on load,
    //    b. Resize on orientation change due to updateHeight,
    //    c. Keep resized height on subsequent orientation
    //    changes by checking for this.minAllowedHeight
    //    in updateHeight().

    const height =
      isMobile && !isMobileSafari
        ? document.documentElement.clientHeight
        : window.innerHeight;

    // One way to block orientation change
    // https://css-tricks.com/snippets/css/orientation-lock/

    if (process.env.NODE_ENV !== 'development') {
      ReactGA.initialize('UA-137902767-1');
      ReactGA.pageview(pathname + search); // Tallies initial request
    }

    // Lower limit for resizing — (iPhone/SE form
    // factor uses default height, wider phones
    // use their true height).

    this.minAllowedHeight = 324; // Narrow iPhones are 320px in width, larger ones are ~325px.
    this.defaultHeightWhenTooSmall = 568; // Arbitrary (iPhone SE height)
    this.resizeTimeoutId = undefined; // Let's debounce 'resize'!
    this.resizeTimeoutId2 = undefined; // Let's debounce 'resize'!

    // Prevent resize when scrolling oversized page. Not using state
    // b/c it causes overflowing divs (w/content in them) to 'jump'
    // when scrolling.

    this.isAfterTouchWhenScrollingPage = false;

    this.state = {
      currentCaller:
        location !== 'i'
          ? location
          : 'home',
      lastCaller: '',
      inCity: false, // Fantasy image on home if false
      isMenu: referrer.isMenu(props), // Menu page (/projects, /journalism, /reverie)
      height: // Sets height of <main />
        height > this.minAllowedHeight
          ? height
          : this.defaultHeightWhenTooSmall,
      showBusinessCard: false, // Show business card
      showLegalTerms: false, // Show legal terms
      showStoryText: true, // Show story text, picture if false
      pinchZoomed: false, // We're zoomed! or not.
      isZooming: false, // True when pinch zooming is ongoing
      isAfterTouch: false, // Resize w/clientHeight when true
      // Small iPhones raise their app bar when touching the Footer area.
      // This test adds instructions to use these buttons (slide up).
      footerAlert:
        isMobileSafari
          && height < this.minAllowedHeight,
      password: '',
      isValidUser: false,
      wrongPassword: ''
    };

    this.handleResize = this.handleResize.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleBackAndForth = this.handleBackAndForth.bind(this);
    this.handlePasswordEntry = this.handlePasswordEntry.bind(this);
    this.handlePasswordSubmit = this.handlePasswordSubmit.bind(this);
  }

  handlePasswordSubmit(event) {
    event.preventDefault();

    if (
      this.state.password === 'enter'
        || this.state.password === 'Enter'
        || this.state.password === 'illustrator'
        || this.state.password === 'Illustrator'
        || this.state.password === 'boom!'
        || this.state.password === 'Boom!'
    ) {
      this.setState({ isValidUser: true });
    } else {
      this.setState({
        wrongPassword: 'Incorrect',
        password: ''
      });
    }
  }

  handlePasswordEntry(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    const hcForApp = new ClickHandling('app', this);
    const boundHandleClickForApp = hcForApp.boundHandleClick;
    const homeIsActive = this.state.currentCaller === 'home';
    const reverieIsActive = this.state.currentCaller === 'reverie';
    const fixMobileSafariBugOn7 = isTablet
      && isMobileSafari
      && osVersion[0] === '7';

    return process.env.NODE_ENV !== 'development'
      && !this.state.isValidUser
      ? <PasswordLogin
        appState={this.state}
        handlePasswordEntry={this.handlePasswordEntry}
        handlePasswordSubmit={this.handlePasswordSubmit}
      />
      : <ThemeProvider
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
        <Fragment
          // Use Fragment b/c ThemeProvider only accepts one child.
        >
          <GlobalStyle
            reverie={reverieIsActive}
          />
          <ZoomControl
            // Though an extra <div>, ZoomControl lets us add 'touch'
            // events to React (alt is to add them to the Window)

            home={homeIsActive}
            onTouchMove={this.handleTouchMove}
            onTouchEnd={this.handleTouchEnd}
            fixMobileSafariBugOn7={fixMobileSafariBugOn7}
          >
            <Header
              {...this.props}
              appState={this.state}
              boundHandleClickForApp={boundHandleClickForApp}
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
          </ZoomControl>
        </Fragment>
      </ThemeProvider>;
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
      throw new Error("Uh oh. I don't currently support Opera or IE if it's less than 11.");
    }

    // Heard after all React handlers run
    // https://fortes.com/2018/react-and-dom-events/

    window.addEventListener('resize', this.handleResize);
    window.addEventListener('popstate', this.handleBackAndForth);
  }

  componentWillUnmount() {

    // This will never be called, here as good practice.

    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('popstate', this.handleBackAndForth);
  }

  handleTouchMove(event) {
    // We're probably zooming if two fingers are down.

    if (event.touches.length === 2) {
      // Pinch zoom almost always moves the X, Y offset.
      // This is a more effective check than trying to
      // add points as coordinates or height/width.

      const stateToUpdate = {
        isAfterTouch: true,
        isZooming: true
      };

      if (
        window.pageXOffset > 0
          && window.pageYOffset > 0
      ) {
        stateToUpdate.pinchZoomed = true; // Set zoom state
        this.setState(stateToUpdate);
      } else if (
        // Hard to hit 0 on the nose, so
        // let's look for negatives.

        window.pageXOffset <= 0
          && window.pageYOffset <= 0
      ) {
        stateToUpdate.pinchZoomed = false; // Set zoom state
        this.setState(stateToUpdate);
      }
    } else {
      // Let's prevent a resize when an oversized page is being scrolled.

      // This happens when the current screenHeight is too narrow. In
      // this case, we'll use the default height. When a user scrolls
      // in default height, a resize event might fire when the user
      // reaches the top or bottom of the page. This can cause
      // an undesired 'jump' up when scrolling downward.

      // We prevent this by setting afterTouch in order to tell
      // updateHeight not to reset the scrollTop).

      clearTimeout(this.resizeTimeoutId2); // Debounce!
      this.isAfterTouchWhenScrollingPage = true;
      this.resizeTimeoutId2 = setTimeout(() => {
        this.isAfterTouchWhenScrollingPage = false;
      }, 500);
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
    // On desktops, only resize if height's changing.

    if (!isMobile
      && this.state.width !== window.innerWidth
      && this.state.height === window.innerHeight) {
      return false;
    }

    // Don't resize while zooming (e.g., there may be
    // a lag between isZooming and pinchZoomed).

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
    // UI changes but mobile Chrome does not. Also,
    //  after touchMove, Safari doesn't update
    // innerHeight correctly, so we'll use
    // clientHeight 'isAfterTouch':

    const toggleHtmlHeight = (mode) => {
      if (mode === 'add') {
        if (isMobileSafari && parseInt(osVersion) >= 12) {
          document.getElementsByTagName('html')[0].style.height = '100vh';
        }
      } else if (mode === 'remove') {
        if (isMobileSafari && parseInt(osVersion) >= 12) {
          setTimeout(() => document.getElementsByTagName('html')[0].style.height = '', 250);
        }
      }
    };

    toggleHtmlHeight('add');

    //  a. clientHeight. Mobile Chrome and after touchMove
    //  b. innerHeight. Mobile Safari

    const newHeight = isMobile
        && (!isMobileSafari
          || this.state.isAfterTouch)
      ? document.documentElement.clientHeight
      : window.innerHeight;

    // Do not resize height while pinchZoomed.

    if (this.state.pinchZoomed) {
      if (process.env.NODE_ENV !== 'development') {
        ReactGA.event({
          category: 'App state',
          action: 'Resized while pinchZoomed',
          value: newHeight,
          label: `Page: ${pathname}${search}`
        });
      }

      toggleHtmlHeight('remove');
      return false;
    }

    // Ensure the window top at zero after resize change.
    // (This trigers another resize if height changes.)

    if (window.pageYOffset > 0
        // Prevent resize when user scrolls oversized page.
        && !this.isAfterTouchWhenScrollingPage) {
      const scrollHandling = new ScrollHandling(location);
      scrollHandling.resetWindowTop();
    }

    // Manage FooterAlert on small iPhones.

    if (isMobileSafari
        && !window.navigator.standalone) {
      this.setState({
        footerAlert: window.innerHeight < this.minAllowedHeight
      });
    }

    // Resize if height changes and newHeight > this.minAllowedHeight.
    // Note, mobile Brave slips through this test on /home. The image
    // 'resize' and Brave then resizes. No fix for now.

    if (newHeight === this.state.height
        || this.minAllowedHeight > newHeight) {

      if (process.env.NODE_ENV !== 'development') {
        ReactGA.event({
          category: 'App state',
          action: `
            Resized w/o changing height. Current: ${this.state.height}, new ${newHeight}
          `,
          value: newHeight,
          label: `Page: ${pathname}${search}`
        });
      }

      // On orientation change, covers every section but /chapter
      // (at least on iPhone)
      toggleHtmlHeight('remove');
      return false;
    }

    // Update page height when these factors are true:
    //  a. mobile device
    //  b. orientation change AND pinchZoom is off
    //  c. height changes (we've already discarded newHeight <= 350)

    if (process.env.NODE_ENV !== 'development') {
      ReactGA.event({
        category: 'App state',
        action: 'Re-calculate height',
        value: newHeight,
        label: `Page: ${pathname}${search}`
      });
    }

    // On orientation change, covers /chapter b/c of hidden image
    // (at least on iPhone)
    toggleHtmlHeight('remove');
    this.setState(
      () => ({
        height: newHeight,
        isAfterTouch: // True until handleMove says otherwise.
          this.state.isAfterTouch
            && false
      })
    );
  }

  handleBackAndForth() {
    const location = new Location('/', this.props);
    const hcForApp = new ClickHandling('app', this);
    const boundHandleClickForApp = hcForApp.boundHandleClick;

    // Always the caller.
    // Update isMenu if it doesn't sync w/the window.

    const isMenu = window.location.pathname.split('/').indexOf('menu') === 2;
    const updateMenuForBackForthButton = isMenu !== this.state.isMenu;

    boundHandleClickForApp(
      'updateApp',
      location.caller,
      updateMenuForBackForthButton
    );
  }

  componentDidUpdate(prevProps) {
    if (process.env.NODE_ENV !== 'development') {
      const location = new Location(
        '/',
        this.props,
        prevProps
      );

      if (location.recordPageview) {
        const {
          pathname,
          search
        } = window.location;
        ReactGA.pageview(pathname + search);
      }
    }
  }
}

export default withRouter(App);
