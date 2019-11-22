import Body from './Body.jsx';
import ClickHandling from './classes/ClickHandling.js';
import { cover } from 'intrinsic-scale';
import {
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
  isAndroid,
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

  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
    // ! Overall app height!
    height: ${p => p.pageHeight}px;
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
  }
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.images = preloadBigImages();
    const { pathname, search } = window.location;
    const referrer = new Referrer(props);
    const location = new Location(referrer.pathToMatch, { location: { pathname } });
    /* Rules for height:

      1. Set property on initial load
      2. Update on orientation change via handleResize
      3. Remember! iPadOS uses a desktop user agent, so it won't respond to mobile testing.
      
      Note: Check document.documentElement.clientHeight b/c it's accurate at resize for both Android & iOS.
    */
    this.minAllowedHeight = 324; // Narrow iPhones are 320px in width, larger ones are >= 325px
    this.headerMenuTimeoutId = undefined;
    // Show the heartbeat if the last date isn't located in storage
    // If it is in storage, we'll check the time elapsed since it ran
    let firstHeartbeat = typeof localStorage.lastHeartbeat === 'undefined';
    let state; // Defined if site loads on /chapter.

    if (location.caller === 'chapter') {
      state = new State({ location: { pathname } }, location);
    }

    if (!firstHeartbeat) {
      const now = dayjs(); // For debugging --> now.add('3', 'week');
      const lastHeartbeat = dayjs(localStorage.lastHeartbeat);
      firstHeartbeat = now.diff(lastHeartbeat, 'week', true) > 2;

      // Always update the date if < 2 weeks pass between user visits
      // If > 2 weeks pass, onAnimationEnd() will update the date after the next full heartbeat
      if (!firstHeartbeat) {
        // Technically, any trackable event, not the last 'heartbeat'. But the name's so good...
        localStorage.lastHeartbeat = dayjs().format();
      }
    }

    if (process.env.NODE_ENV !== 'development') {
      ReactGA.initialize('UA-137902767-1');
      ReactGA.pageview(pathname + search); // Tallies initial request
    }

    this.state = {
      currentCaller: location.caller !== 'i' ? location.caller : 'home',
      // 0 = not ready, 1 = run, 2 = nevermore
      heartbeat: firstHeartbeat ? 0 : 2,
      height: this.pageHeight,
      homePageLoaded: false, // loadLevels confined to Home, this is for whole app
      illustrationDelay: false, // Control illustration loader on /chapter pages
      illustrationDirection: 'enter', // Properly interpret illustrationLevel 
      // Used by header, main, and footer
      // Enter: 0 = text on, 1 = fade out text and portal, 2 = fade out blurred image, 3 = done
      // Exit: 3 = real image on, 2 = fade in blurred image and portal, 1 = fade in text, 0 = done
      illustrationLevel: 0, 
      // 0 is n/a, + is loaded, and - is loading
      // Typically updated by <ReloadRoute />
      illustrationState: state ? state.checkIllustrationState(this.images) : 0,
      images: this.images, // preloaded big images (minimize time to display b/c of loading)
      inCity: false, // false = fantasy, true = city
      isMenu: referrer.isMenu(props), // /projects, /journalism, /reverie
      isValidUser: false, // to be removed
      lastCaller: '',
      nameTagWidth: this.calculateNameTagWidth(this.images), // Orig. dimensions: 1349 / 5115
      password: '', // to be removed
      spacerHeight: this.calculateSpacerHeight(this.images), // Set by 'handleResize', so must live here. Used by Home/NameTag.
      tempContent: 0, // 0 = off; 1 = businessCard; 2 = legalTerms; 3 = headerMenu
      // Won't catch iPadOS w/o customMobileTest. Search for 11/9/19 notes as to necessity.
      type: isMobile ? 'mobile' : 'desktop',
      wrongPassword: '' // to be removed
    };

    this.handleBackAndForth = this.handleBackAndForth.bind(this);
    this.handlePasswordEntry = this.handlePasswordEntry.bind(this);
    this.handlePasswordSubmit = this.handlePasswordSubmit.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.toggleHtmlElementHeight = this.toggleHtmlElementHeight.bind(this);
    this.updateSpacerHeight = this.updateSpacerHeight.bind(this);
    this.updateNameTagWidth = this.updateNameTagWidth.bind(this);
  }

  render() {
    const hcForApp = new ClickHandling('app', this);
    const boundHandleClickForApp = hcForApp.boundHandleClick;
    const homeIsActive = this.state.currentCaller === 'home';
    const reverieIsActive = this.state.currentCaller === 'reverie';
    const isNotFound = this.state.currentCaller === 'not-found';
    const fixMobileSafariBugOn7 = isTablet && isMobileSafari && osVersion[0] === '7';

    return process.env.NODE_ENV === 'development' && !this.state.isValidUser
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
            isHeaderMenu: this.state.tempContent === 3
          }}
        >
        <Fragment
          // Used b/c ThemeProvider only accepts one child.
        >
          <GlobalStyle
            fixMobileSafariBugOn7={fixMobileSafariBugOn7}
            home={homeIsActive}
            notFound={isNotFound}
            pageHeight={this.state.height}
            reverie={reverieIsActive}
          />
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
        </Fragment>
      </ThemeProvider>;
  }

  get pageHeight() {
    /* On height: 
      
      1. iOS: document.documentElement.clientHeight
        -This value doesn't change on zoom, most other height values do
        -This value includes browser chrome, ensuring a consistent size
      2. Android: window.innerHeight
        -Android doesn't update dimensional measurements on zoom.
        -This value includes changes to browser chrome in a predictable way.
          -When a user scrolls up on landscape, hiding the address bar, then swaps
            orienation, this value will ensure the new height measurement includes
            the extra space. Sadly, document.documentElement.clientHeight does not.
      3. We only care about the minAllowedHeight on mobile devices, desktops get a pass.
    */

    return !isMobile || this.minAllowedHeight < document.documentElement.clientHeight
      ? !isAndroid ? document.documentElement.clientHeight : window.innerHeight
      : this.minAllowedHeight;
  }

  get pageWidth() {
    return document.documentElement.clientWidth;
  }

  calculateNameTagWidth(topImages) {
    const images = topImages || this.state.images;
    const coverVals = this.coverVals(images);

    return Math.floor(.27 * coverVals.width);
  }

  calculateSpacerHeight(topImages) {
    const images = topImages || this.state.images;
    const windowHeight = this.pageHeight;
    const coverVals = this.coverVals(images);
    const yImageTop = coverVals.y;
    const makePositive = val => val * -1;
    // 1. 14.4 & 14.7 are arbitrary values (trial-n-error)
    // 2. 52px is the height of the header in pixels
    const mathForSpacer = (windowHeight, percentage) => windowHeight * (percentage / 100) - 52;
    let spacerHeight = Math.ceil(mathForSpacer(windowHeight, 14.5)); // Original: 14.2

    // yImageTop < 0 when the window's width is larger than the image's with, meaning
    // we zoom into the image's top and bottom.
    if (Math.floor(yImageTop) < 0) {
      const newHeight = coverVals.height - makePositive(yImageTop);
      const newSpacerHeight = mathForSpacer(newHeight, 14.7); // Original: 14.6
      const spacerHeightDifference = newSpacerHeight - spacerHeight;
      const changedPosition = (makePositive(yImageTop)) - spacerHeightDifference;

      spacerHeight = Math.ceil(spacerHeight - changedPosition);
    }

    return spacerHeight >= 15 ? spacerHeight : 15;
  }

  coverVals(images) {
    return cover(this.pageWidth, this.pageHeight, images.width, images.height);
  }

  handleBackAndForth() {
    const location = new Location('/', this.props);
    const hcForApp = new ClickHandling('app', this);
    const boundHandleClickForApp = hcForApp.boundHandleClick;
    // Update isMenu if it doesn't match window.location.pathname.
    const isMenu = window.location.pathname.split('/').indexOf('menu') === 2;
    const updateMenuForBackAndForthButton = isMenu !== this.state.isMenu;

    boundHandleClickForApp('updateApp', location.caller, updateMenuForBackAndForthButton);
  }

  handlePasswordSubmit(event) {
    event.preventDefault();
    const password = this.state.password.toLowerCase().trim();

    if (password === 'enter' || password === 'illustrator' || password === 'boom!') {
      this.setState({ isValidUser: true });
    } else {
      this.setState({ password: '', wrongPassword: 'Incorrect' });
    }
  }

  handlePasswordEntry(event) {
    this.setState({ password: event.target.value });
  }

  toggleHtmlElementHeight(mode) {
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
  }

  handleResize(event) {
    // https://alvarotrigo.com/blog/firing-resize-event-only-once-when-resizing-is-finished/

    this.toggleHtmlElementHeight('on');

    eventManagement(event);

    if (this.rejectResizing().result) {
      this.toggleHtmlElementHeight('off');
      return false;
    }

    this.updateSpacerHeight();
    this.updateNameTagWidth();
    this.updateHeight();
    this.toggleHtmlElementHeight('off');
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
    /* Development note:

      On desktop/laptop Chrome, isMobile will be false if you emulate mobile via devTools 
      AFTER the site loads. You must reload the site from within the mobile emulator after
      entering devTools if you want the isMobile value to be correct. 
    */

    const resultObj = { result: false, reason: '' };
    
    if (isMobile && this.state.height === this.pageHeight) {
      resultObj.result = true;
      resultObj.reason = 'On mobile, no change to height'
    }

    return resultObj;
  }

  /* Update height:

      1. Mobile: On orientation change
      2. Desktop/laptop: height changes > 324px
    Another approach to determining orientation change: https://stackoverflow.com/a/37493832
    And another: http://pioul.fr/cross-device-cross-browser-portrait-landscape-detection
  */

  updateHeight() {
    const { pathname, search } = window.location;
    const newHeight = this.pageHeight;

    if (process.env.NODE_ENV !== 'development') {
      ReactGA.event({
        category: 'App state',
        action: `Re-calculate height. Currently: ${this.state.height}.`,
        value: newHeight,
        label: `Page: ${pathname}/${search}`
      });
    }

    this.setState({ height: newHeight });
  }

  // Only called by handleResize, which rejects if newHeight === height.

  updateNameTagWidth() {
    const nameTagWidth = this.calculateNameTagWidth();
    if (nameTagWidth !== this.state.nameTagWidth) {
      this.setState({ nameTagWidth })
    }
  }

  // Only called by handleResize, which rejects if newHeight === height.

  updateSpacerHeight() {
    const spacerHeight = this.calculateSpacerHeight();
    if (spacerHeight !== this.state.spacerHeight) {
      this.setState({ spacerHeight });
    }
  }

  componentDidMount() {
    if (!this.hasStyle('flexbox')) {
      // A note on Flexbox compatibility: https://stackoverflow.com/a/35137869
      throw new Error("Browser doesn't support Flexbox");
    } else if (isOpera || (isIE && browserVersion <= 10)) {
      // I should support Opera, but I can't get it to play nicely w/Flexbox, so...
      throw new Error("Uh oh. I don't currently support Opera or IE if it's less than 11.");
    }

    // Polyfill...
    if (!this.hasStyle('object-fit')) { 
      objectFitImages();
    }

    // Runs after React's handlers: https://fortes.com/2018/react-and-dom-events/\
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('popstate', this.handleBackAndForth);
  }

  componentDidUpdate(prevProps) {
    if (process.env.NODE_ENV !== 'development') {
      const location = new Location('/', this.props, prevProps);

      if (location.recordPageview) {
        const { pathname, search } = window.location;
        ReactGA.pageview(pathname + search);
      }
    }
  }

  componentWillUnmount() {
    // This should never be called, here as good practice.
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('popstate', this.handleBackAndForth);
  }
}

export default withRouter(App);
