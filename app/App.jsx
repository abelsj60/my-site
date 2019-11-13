import Body from './Body.jsx';
import ClickHandling from './classes/ClickHandling.js';
import { cover } from 'intrinsic-scale';
import styled, {
  css,
  createGlobalStyle,
  ThemeProvider
} from 'styled-components';
import dayjs from 'dayjs';
import eventManagement from './helpers/eventManagement.js';
import Footer from './header-footer/Footer.jsx';
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
import objectFitImages from 'object-fit-images';
import PasswordLogin from './shared/PasswordLogin.jsx';
import preloadBigImages from './helpers/preloadBigImages';
import React, { Fragment, Component } from 'react';
import ReactGA from 'react-ga';
import Referrer from './classes/Referrer.js';
import ScrollHandling from './classes/ScrollHandling.js';
import State from './classes/State.js';
import { withRouter } from 'react-router';

// Fonts!
import ArefRuqaaLatin700Woff from '../docs/assets/fonts/aref-ruqaa-v8-latin/aref-ruqaa-v8-latin-700.woff';
import ArefRuqaaLatin700Woff2 from '../docs/assets/fonts/aref-ruqaa-v8-latin/aref-ruqaa-v8-latin-700.woff2';
import Montserrat300Woff from '../docs/assets/fonts/montserrat-v14-latin/montserrat-v14-latin-300.woff';
import Montserrat300Woff2 from '../docs/assets/fonts/montserrat-v14-latin/montserrat-v14-latin-300.woff';
import MontserratRegularWoff from '../docs/assets/fonts/montserrat-v14-latin/montserrat-v14-latin-regular.woff';
import MontserratRegularWoff2 from '../docs/assets/fonts/montserrat-v14-latin/montserrat-v14-latin-regular.woff';
import Montserrat500Woff from '../docs/assets/fonts/montserrat-v14-latin/montserrat-v14-latin-500.woff';
import Montserrat500Woff2 from '../docs/assets/fonts/montserrat-v14-latin/montserrat-v14-latin-500.woff';
import PlayfairDisplay700Woff from '../docs/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-700.woff';
import PlayfairDisplay700Woff2 from '../docs/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-700.woff2';
import PlayfairDisplay900Woff from '../docs/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-900.woff';
import PlayfairDisplay900Woff2 from '../docs/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-900.woff2';

const colors = {
  black: 'black',
  blue: '#008dd5',
  blueTwo: '#b9dff3',
  darkPink: '#af125a',
  darkPinkTwo: '#bd3d78',
  frostedBlue: '#4286f4',
  lightBlack: '#455057',
  pink: '#fd1172',
  reverieBlue: '#d2e7ff',
  white: 'white',
  yellow: '#ffe74c'
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
  fifteen: '2.2rem',
  sixteen: '3.1rem',
  seventeen: '6.5rem',
  eighteen: '2.5rem',
  nineteen: '1.745rem',
  twenty: '2.5rem',
  twentyOne: '1rem',
  twentyTwo: '1.13rem',
  twentyThree: '1.36rem',
  twentyFour: '2.75rem',
  twentyFive: '1rem',
  twentySix: '1.455rem'
};
const mediaQueries = {
  tinyView: '390px',
  tinyViewTwo: '425px',
  narrowBreakOne: '500px',
  narrowBreakTwo: '690px',
  narrowBreakTwoB: '691px',
  desktop: '848px',
  huge: '1920px'
};
const bottomMargin = {
  regular: '20px'
};
const blurControl = {
  regular: 'blur(4px)',
  home: 'blur(1px)'
};
const ZoomControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${p => p.theme.pageHeight}px;
  overflow: hidden;
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
  @font-face {
    font-family: 'Aref Ruqaa';
    font-style: normal;
    font-weight: 700;
    src:
      url('${ArefRuqaaLatin700Woff2}') format('woff2'),
      url('${ArefRuqaaLatin700Woff}') format('woff');
  }
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    src:
      url('${Montserrat300Woff2}') format('woff2'),
      url('${Montserrat300Woff}') format('woff');
  }
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: normal;
    src:
      url('${MontserratRegularWoff2}') format('woff2'),
      url('${MontserratRegularWoff}') format('woff');
  }
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    src:
      url('${Montserrat500Woff2}') format('woff2'),
      url('${Montserrat500Woff}') format('woff');
  }
  @font-face {
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 700;
    src:
      url('${PlayfairDisplay700Woff2}') format('woff2'),
      url('${PlayfairDisplay700Woff}') format('woff');
  }
  @font-face {
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 900;
    src:
      url('${PlayfairDisplay900Woff2}') format('woff2'),
      url('${PlayfairDisplay900Woff}') format('woff');
  }

  html {
    // Best practice to load fonts: 
    // https://stackoverflow.com/questions/12316501/including-google-web-fonts-link-or-import

    font-family: 'Montserrat', sans-serif;
    font-size: 62.5%;
    font-weight: 300;
    background-color: ${p => p.reverie ? '#d2e7ff' : p.notFound ? '#fd1172' : ''};
  }

  body {
    margin: 0px;
    padding: 0px;
    font-size: ${p => p.theme.fontSizes.twelve};
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

    const { pathname, search } = window.location;
    const images = preloadBigImages();
    const referrer = new Referrer(props);
    const location = new Location(
      referrer.pathToMatch, 
      { location: { pathname: pathname } }
    );
    let illustrationState;

    // Check status of illustration for appStateillustrationState
    // Also updated in ReloadRoute (for section shifts) and
    // in contentLoader.cDU for swapped content
    if (location.caller === 'chapter') {
      const state = new State(
        { location: { pathname: pathname } }, 
        location
      );
      illustrationState = state.checkIllustrationState(images);
    }

    // Show the heartbeat if the last date isn't located in storage
    // If it is in storage, we'll check the time elapsed since it ran
    let firstHeartbeat = typeof localStorage.lastHeartbeat === 'undefined';

    if (!firstHeartbeat) {
      const now = dayjs(); // For debugging: now.add('3', 'week');
      const lastHeartbeat = dayjs(localStorage.lastHeartbeat);
      firstHeartbeat = now.diff(lastHeartbeat, 'week', true) > 2;

      // Always update the date if < 2 weeks pass between user visits
      // If > 2 weeks pass, onAnimationEnd() will do it after next heartbeat
      if (!firstHeartbeat) {
        // Technically, not a last heartbeat...but a trackable event
        localStorage.lastHeartbeat = dayjs().format();
      }
    }

    // Let's deal w/height.
    //  1. Check value based on device type.
    //  2. If the screen is landscape:
    //    a. Set property on initial load,
    //    b. Resize on orientation change via updateHeight(),
    //    c.  Keep resized height on subsequent orientation
    //        changes by rejecting w/n updateHeight() when
    //        this.minAllowedHeight > newHeight.
    // Note, 11/9/19: iPadOS uses a desktop user agent. This test doesn't catch it.
    // However, the values it selects seem to remain accurate in terms of height.
    // Thus, this.calculatePageHeight() doesn't use the customMobileTest.js.

    const pageHeight = this.calculatePageHeight();
    const coverVals = cover(window.innerWidth, pageHeight, images.width, images.height);
    // Let's remember the coverVals.y offset so we can resize on desktops when it changes .
    // Also, not updating this value after it's set because it doesn't matter once set.
    // The value is a benchmark. It's valid as long as we see a change when comparing
    // it to the current coverVal.y in the resize event.
    this.homeImageYOffsets = coverVals.y;

    // Want to block orientation changes? Try this:
    // https://css-tricks.com/snippets/css/orientation-lock/

    if (process.env.NODE_ENV !== 'development') {
      ReactGA.initialize('UA-137902767-1');
      ReactGA.pageview(pathname + search); // Tallies initial request
    }

    // Lower limit for resizing — (iPhone/SE form
    // factor uses default height, wider phones
    // use their true height).
    this.defaultHeightWhenTooSmall = pageHeight; // Arbitrary (iPhone SE height)
    this.headerMenuTimeoutId = undefined;
    this.minAllowedHeight = 324; // Narrow iPhones are 320px in width, larger ones are ~325px
    this.resizeTimeoutId = undefined; // Let's debounce 'resize'!
    this.resizeTimeoutId2 = undefined; // Let's debounce 'resize'!
    this.images = images; // Back-up object for this.calculateSpacerHeight() during load

    // Prevent resize when scrolling oversized page. Not using state b/c it causes
    // overflowing divs (w/content in them) to 'jump' when scrolling.
    this.isAfterTouchWhenScrollingPage = false;

    this.state = {
      currentCaller:
        location.caller !== 'i'
          ? location.caller
          : 'home',
      // 0 = not ready, 1 = run, 2 = nevermore
      heartbeat: firstHeartbeat ? 0 : 2,
      // height: // Height for <Main /> element
      //   pageHeight > this.minAllowedHeight
      //     ? pageHeight
      //     : this.defaultHeightWhenTooSmall,
      height: pageHeight,
      homePageLoaded: false, // loadLevels confined to Home, this is for whole app
      illustrationDelay: false, // Control illustration loader on /chapter pages
      illustrationDirection: 'enter', // Properly interpret illustrationLevel 
      // Used by header, main, and footer
      // Enter: 0 = text on, 1 = fade out text and portal, 2 = fade out blurred image, 3 = done
      // Exit: 3 = real image on, 2 = fade in blurred image and portal, 1 = fade in text, 0 = done
      illustrationLevel: 0, 
      // 0 is n/a, + is loaded, and - is loading
      illustrationState: illustrationState ? illustrationState : 0,
      images: images, // preloaded big images (minimize time to display b/c of loading)
      inCity: false, // false = fantasy, true = city
      isMenu: referrer.isMenu(props), // /projects, /journalism, /reverie
      isAfterTouch: false, // Resize using clientHeight when true
      isValidUser: false, // to be removed
      isZooming: false, // True when usere is pinch zooming
      lastCaller: '',
      nameTagWidth: this.calculateNameTagWidth(images), // Orig. dimensions: 1349 / 5115
      password: '', // to be removed
      pinchZoomed: false, // Zoomed! (Or not.)
      spacerHeight: this.calculateSpacerHeight(), // Set by 'handleResize', so must live here. Used by Home/NameTag.
      tempContent: 0, // 0 = off; 1 = businessCard; 2 = legalTerms; 3 = headerMenu
      // Won't catch iPadOS w/o customMobileTest. Search for 11/9/19 notes as to necessity.
      type: isMobile ? 'mobile' : 'desktop',
      wrongPassword: '' // to be removed
    };

    this.handleBackAndForth = this.handleBackAndForth.bind(this);
    this.handlePasswordEntry = this.handlePasswordEntry.bind(this);
    this.handlePasswordSubmit = this.handlePasswordSubmit.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.updateSpacerHeight = this.updateSpacerHeight.bind(this);
    this.updateNameTagWidth = this.updateNameTagWidth.bind(this);
  }

  render() {
    const hcForApp = new ClickHandling('app', this);
    const boundHandleClickForApp = hcForApp.boundHandleClick;
    const homeIsActive = this.state.currentCaller === 'home';
    const reverieIsActive = this.state.currentCaller === 'reverie';
    const isNotFound = this.state.currentCaller === 'not-found';
    const fixMobileSafariBugOn7 = isTablet
      && isMobileSafari
      && osVersion[0] === '7';

    return process.env.NODE_ENV !== 'development' && !this.state.isValidUser
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
          blur: this.state.currentCaller === 'home' ? blurControl.home : blurControl.regular,
          blurForTempContent: this.state.tempContent > 0,
          isHeaderMenu: this.state.tempContent === 3,
          pageHeight: this.state.height.toString()
        }}
      >
        <Fragment
          // Used b/c ThemeProvider only accepts one child.
        >
          <GlobalStyle
            notFound={isNotFound}
            reverie={reverieIsActive}
          />
          <ZoomControl
            // Though an extra <div>, ZoomControl lets us add 'touch'
            // events to React (alt is to add them to the Window)
            fixMobileSafariBugOn7={fixMobileSafariBugOn7}
            home={homeIsActive}
            onTouchMove={this.handleTouchMove}
            onTouchEnd={this.handleTouchEnd}
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

  calculatePageHeight() {
    return isMobile && (!isMobileSafari || (this.state && this.state.isAfterTouch))
      ? document.documentElement.clientHeight > window.innerHeight
        ? document.documentElement.clientHeight
        : window.innerHeight
      : window.innerHeight;
  }

  calculateNameTagWidth(topImages) {
    const images = topImages || this.state.images;
    const coverVals = cover(window.innerWidth, window.innerHeight, images.width, images.height);

    return Math.floor(.27 * coverVals.width);
  }

  calculateSpacerHeight() {
    const { images } = this;
    const windowHeight = window.innerHeight;
    const coverVals = cover(window.innerWidth, windowHeight, images.width, images.height);
    const yImageTop = coverVals.y;
    const makePositive = val => val * -1;
    // 1. 14.4 & 14.7 are arbitrary values (trial-n-error)
    // 2. 52px is the height of the header in pixels
    const mathForSpacer = (windowHeight, percentage) => windowHeight * (percentage / 100) - 52;
    let spacerHeight = Math.ceil(mathForSpacer(windowHeight, 14.5)); // Original: 14.2

    // yImageTop < 0 when thewindow's width is larger than the image's 
    // width. If so, we cut off the image's top and bottom to zoom in.
    if (Math.floor(yImageTop) < 0) {
      const newHeight = coverVals.height - makePositive(yImageTop);
      const newSpacerHeight = mathForSpacer(newHeight, 14.7); // Original: 14.6
      const spacerHeightDifference = newSpacerHeight - spacerHeight;
      const changedPosition = (makePositive(yImageTop)) - spacerHeightDifference;

      spacerHeight = Math.ceil(spacerHeight - changedPosition);
      }

    return spacerHeight >= 15
      ? spacerHeight
      : 15;
    }

  handleBackAndForth() {
    const location = new Location('/', this.props);
    const hcForApp = new ClickHandling('app', this);
    const boundHandleClickForApp = hcForApp.boundHandleClick;

    // Always the caller.
    // Update isMenu if it isn't synced w/window.location.pathname.

    const isMenu = window.location.pathname.split('/').indexOf('menu') === 2;
    const updateMenuForBackAndForthButton = isMenu !== this.state.isMenu;

    boundHandleClickForApp('updateApp', location.caller, updateMenuForBackAndForthButton);
  }

  handlePasswordSubmit(event) {
    const password = this.state.password.toLowerCase().trim();
    event.preventDefault();

    if (
      password === 'enter' || password === 'illustrator' || password === 'boom!'
    ) {
      this.setState({ isValidUser: true });
    } else {
      this.setState({ 
        password: '',
        wrongPassword: 'Incorrect'
      });
    }
      }

  handlePasswordEntry(event) {
    this.setState({ password: event.target.value });
    }

  handleTouchEnd() {
    // Touch is over, have we been zooming? But note, caniuse says onTouchEnd is often
    // unavailable, so we have similar logic in onTouchMove to be sure to reset it.
    if (this.state.isZooming) {
      // Let's set intermediate values for resizing.
      this.setState({ isZooming: false });
    }
  }

  handleTouchMove(event) {
    // We're probably zooming if two fingers are down.

    const { isZooming, pinchZoomed } = this.state;

    if (event.touches.length === 2) {
      const stateToUpdate = {
        isAfterTouch: true,
        isZooming: true
      };

      // Pinch zoom almost always moves the X, Y offset.
      // This is a more effective check than trying to
      // add points as coordinates or height/width.

      if (!pinchZoomed && window.pageXOffset > 0 && window.pageYOffset > 0) {
        stateToUpdate.pinchZoomed = true; // Set zoom state
        this.setState(stateToUpdate);
      } else if (pinchZoomed && window.pageXOffset <= 0 && window.pageYOffset <= 0) {
        // Hard to hit 0 on the nose, so we look for negatives.
        stateToUpdate.pinchZoomed = false; // Set zoom state
        this.setState(stateToUpdate);
        // handleResize should come last so React has a chance to run setState.
        // setTimeout gives React time to reconcile the next elements w/the 
        // ones on screen so they'll have the correct dimensions. 
        // Also, 50 is added to 500 milliseconds b/c handleResize has a 
        // setTimeout inside it, too. This timing is stable. I experimented 
        // w/shorter times. There were not stable. We might get a resize 
        // on intermediate elements, which have the wrong dimensions. This
        // typically resulted in an oversized NameTag and a height that 
        // stretches below Safari's bottom menu bar.
        if (this.state.height !== window.innerHeight) {
          setTimeout(() => this.handleResize('afterPinchZoom'), 500);
        }
      }
    } else if (event.touches.length === 1 && pinchZoomed) {
      // Note, 11/11/19: Should investigate whether this logic is still necessary
      // Let's prevent a resize when an oversized page is being scrolled.

      // This happens when the current screenHeight is too narrow. In
      // this case, we'll use the default height. When a user scrolls
      // in default height, a resize event might fire when the user
      // reaches the top or bottom of the page. This can cause
      // an undesired 'jump' up when scrolling downward.

      // We prevent this by setting afterTouch in order to tell
      // updateHeight not to reset the scrollTop).

      if (this.resizeTimeoutId2 > 0) {
        clearTimeout(this.resizeTimeoutId2); // Debounce!
      }

      this.isAfterTouchWhenScrollingPage = true;
      this.resizeTimeoutId2 = setTimeout(() => {
        this.isAfterTouchWhenScrollingPage = false;
      }, 500);
    } else if (event.touches.length === 1 && !pinchZoomed && isZooming) {
      // Try to catch browsers that have multi-touch onTouchMove, but no onToucheEnd.
      this.setState({ isZooming: false });
    }
  }

  handleResize(str) {
    // https://alvarotrigo.com/blog/firing-resize-event-only-once-when-resizing-is-finished/
    const afterPinchZoom = str === 'afterPinchZoom';

    if (!afterPinchZoom) {
      if (this.rejectResizing().result) {
        return false;
      }
    }

    if (this.resizeTimeoutId > 0) {
      clearTimeout(this.resizeTimeoutId); // Still moving, kill timeout (aka, debounce)
    }

    this.resizeTimeoutId = setTimeout(() => {
      this.updateSpacerHeight();
      this.updateNameTagWidth();
      this.updateHeight();
    }, 50);
  }

  hasStyle(type) {
    // https://johanronsse.be/2016/01/03/simple-flexbox-check/
    const documentStyle = window.document.body
      ? window.document.body.style
      : window.document.documentElement.style;

    if (type === 'flexbox') {
      if (documentStyle.webkitFlexWrap === '' || documentStyle.msFlexWrap === '' || documentStyle.flexWrap === '') {
        return true;
      }
    }

    if (type === 'object-fit') {
      if (documentStyle.objectFit === '') {
        return true;
    }
  }

    return false;
  }

  rejectResizing() {
    const { images, isZooming, pinchZoomed } = this.state;
    const coverVals = cover(window.innerWidth, this.calculatePageHeight(), images.width, images.height);

    // Note for desktop Chrome. isMobile will be false if you emulate mobile via devTools 
    // AFTER loading the site. You must reload the site from within the mobile emulator 
    // in devTools for isMobile to test correctly.

    if (!isMobile && coverVals.y === this.homeImageYOffsets) {
      return { result: true, reason: 'On desktop, no change to homeImageYOffset' };
    } else if (isZooming) {
      // Don't resize while isZooming, even if pinchZoomed hasn't been set yet.
      return { result: true, reason: 'isZooming' };
    } else if (pinchZoomed) {
      // Do not resize while pinchZoomed.
      return { result: true, reason: 'pinchZoomed' };
    }

    return { result: false, reason: '' };
  }

  updateHeight() {
    const { pathname, search } = window.location;

    // Early versions of iOS 12 have strange behavior. On orientation change, the
    // screen can collapse between the first and second setStates. Remember, in 
    // iOS, resize fires on orientation change, then AGAIN afer the bottom 
    // menu bar is added to screen. 
    
    // This on/off function ensures that the app's height will occupy the 
    // entire screen during the update phase. Trust me, it works.

    // Note, 11/9/19: This won't catch iPadOS as it doesn't report
    // itself as mobile — 'tis OK, I've observed good behavior.

    const toggleHtmlElementHeight = mode => {
      if (isMobileSafari && parseInt(osVersion) >= 12) {
        if (mode === 'on') {
          document.getElementsByTagName('html')[0].style.height = '100vh';
        } else if (mode === 'off') {
          // setTimeout ensures that elementHeight has time to do its work
          setTimeout(() => {
            document.getElementsByTagName('html')[0].style.height = '';
          }, 250);
        }
      }
    };

    toggleHtmlElementHeight('on');

    // Orientation change: https://stackoverflow.com/a/37493832

    // On mobile, we must account for browser differences.
    // Mobile Safari updates innerHeight on resize and
    // UI changes but mobile Chrome does not. Also,
    // after touchMove, Safari doesn't update
    // innerHeight correctly, so we'll use/
    // clientHeight 'isAfterTouch':

    //  a. clientHeight. Mobile Chrome or after touchMove everywhere
    //  b. innerHeight. Mobile Safari

    // If Android, further check for the larger of our two possible values b/c some
    // devices let the address bar shrink in landscape, some don't, per BS testing.

    const newHeight = this.calculatePageHeight();

    // Ensure the window top is at zero after resize change.
    // (This trigers another resize if height changes.)

    // Prevent resize when user scrolls oversized page.
    if (window.pageYOffset > 0 && !this.isAfterTouchWhenScrollingPage) {
      const scrollHandling = new ScrollHandling(this.state.currentCaller);
      scrollHandling.resetWindowTop();
    }

    // Resize if height changes and newHeight > this.minAllowedHeight.
    // Note, mobile Brave slips through this test on /home. The image
    // resizes and Brave then resizes. No fix for now.

    if (newHeight === this.state.height) {
      if (process.env.NODE_ENV !== 'development') {
        ReactGA.event({
          category: 'App state',
          action: `Resized w/o changing height. Currently: ${this.state.height}.`,
          value: newHeight,
          label: `Page: ${pathname}/${search}`
        });
      }

      // On orientation change, covers every section but /chapter
      // (at least on iPhone)
      toggleHtmlElementHeight('off');
      return false;
    }

    // Update page height when these factors are true:
    //  a. mobile device
    //  b. orientation change AND pinchZoom is off
    //  c. height changes (we've already discarded newHeight <= 350)

    if (process.env.NODE_ENV !== 'development') {
      ReactGA.event({
        category: 'App state',
        action: `Re-calculate height. Currently: ${this.state.height}.`,
        value: newHeight,
        label: `Page: ${pathname}/${search}`
      });
    }

    // On orientation change, covers /chapter b/c of hidden image
    // (at least on iPhone)

    toggleHtmlElementHeight('off');

    this.setState(() => ({
      height: this.minAllowedHeight < newHeight
        ? newHeight
        : this.minAllowedHeight,
      // Reset (true until handleMove says otherwise)
      isAfterTouch: this.state.isAfterTouch && false
    }));
  }

  updateNameTagWidth() {
    const nameTagWidth = this.calculateNameTagWidth();

    if (nameTagWidth !== this.state.nameTagWidth) {
      this.setState({ nameTagWidth })
  }
  }

  updateSpacerHeight() {
    // Note: Really a faceplate now...see NameTag notes.
    const spacerHeight = this.calculateSpacerHeight();

    if (spacerHeight !== this.state.spacerHeight) {
      this.setState({ spacerHeight });
    }
  }

  componentDidMount() {
    // A note on Flexbox compatibility: https://stackoverflow.com/a/35137869
    if (!this.hasStyle('flexbox')) {
      throw new Error("Browser doesn't support Flexbox");
    } else if (isOpera || (isIE && browserVersion <= 10)) {
      throw new Error("Uh oh. I don't currently support Opera or IE if it's less than 11.");
    }

    if (!this.hasStyle('object-fit')) {
      objectFitImages();
    }

    // Heard after all React handlers run
    // https://fortes.com/2018/react-and-dom-events/

    window.addEventListener('resize', this.handleResize);
    window.addEventListener('popstate', this.handleBackAndForth);
  }

  componentDidUpdate(prevProps) {
    if (process.env.NODE_ENV !== 'development') {
      const location = new Location('/', this.props, prevProps);

      if (location.recordPageview) {
        const {
          pathname,
          search
        } = window.location;
        ReactGA.pageview(pathname + search);
      }
    }
  }

  componentWillUnmount() {
    // This will never be called, here as good practice.
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('popstate', this.handleBackAndForth);
  }
}

export default withRouter(App);
