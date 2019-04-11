import Body from './Body.jsx';
import ClickHandling from './classes/ClickHandling.js';
import {
  css,
  createGlobalStyle,
  ThemeProvider
} from 'styled-components';
import Footer from './header-footer/Footer.jsx';
import ReactGA from 'react-ga';
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

const colors = {
  black: 'black',
  blue: '#6e7dab',
  lightBlack: '#455057',
  lightBlue: '#e6f1ff',
  lightPink: '#fd5198',
  mediumBlack: '#555F66',
  pink: '#fd1172',
  reverieBlue: '#d2e7ff',
  white: 'white',
  yellow: '#ffe74c',
  newBlue: '#008DD5',
  newBlueTwoB: '#31afd4',
  slightBlue: '#73C0E8',
  violet: '#540D6E',
  purple: '#820263',
  purpleTwo: '#4B1D3F',
  darkPinkTwo: '#9E0059',
  darkPinkThree: '#AF125A',
  newBlueTwo: '#E7F4FB',
  newBlueThree: '#B9DFF3'
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
  narrowBreakThree: '651px',
  desktopView: '848px',
  desktopWide: '1004px'
};
const grafSpace = {
  regular: '18px'
};
const tempBackgroundColor = 'white';
const GlobalStyle = createGlobalStyle`
  html {
    // Best practice to load fonts: 
    // https://stackoverflow.com/questions/12316501/including-google-web-fonts-link-or-import

    font-family: 'Montserrat', sans-serif;
    font-size: 62.5%;
    background-color: ${p => p.reverie ? '#d2e7ff' : tempBackgroundColor};
  }
  
  body {
    margin: 0px;
    padding: 0px;
    font-size: ${p => p.theme.fontSizes.twelve};
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    // max-width: 1508px; // Top size
    // max-width: 700px; // Single-pane experiment
    margin: 0 auto;

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
      margin-bottom: ${p => p.theme.grafSpace.regular};
      line-height: 1.6;
    }
  }

  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: ${p => p.theme.pageHeight}px;
    position: relative;
    
    @media(orientation:landscape) {
      // Fix esoteric iOS 7 iPad bug:
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
    ReactGA.initialize('UA-137902767-1', { debug: true });

    this.state = {
      currentCaller: location !== 'i'
        ? location
        : 'home',
      lastCaller: location !== 'reverie'
        ? location
        : 'home',
      inCity: false,
      isMenu: referrer.isMenu(props),
      height: window.innerHeight
        || document.documentElement.clientHeight,
      showBusinessCard: false,
      showLegalTerms: false,
      showStoryText: true //,
      // imagesReady: false
    };

    this.loadImages = this.loadImages.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
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
          grafSpace,
          colors,
          fontSizes,
          mediaQueries,
          pageHeight: this.state.height.toString()
        }}
      >
        <Fragment>
          <GlobalStyle
            home={homeIsActive}
            reverie={reverieIsActive}
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

  loadImages() {
    const imageList = [
      'https://user-images.githubusercontent.com/30417590/55294127-2c1c5980-53cc-11e9-9848-5295cd05a9cc.png',
      'https://user-images.githubusercontent.com/30417590/55294130-33436780-53cc-11e9-93cc-f61572bca6ef.png',
      'https://user-images.githubusercontent.com/30417590/55294135-3c343900-53cc-11e9-8f9c-e66499ccd920.png',
      'https://user-images.githubusercontent.com/30417590/55294138-43f3dd80-53cc-11e9-96c2-3c7f2977c24a.jpg'
    ];
    // let imagesLoaded = 0;
    // const whenLoaded = () => {
    //   imagesLoaded++;

    //   if (imagesLoaded === imageList.length - 1) {
    //     this.setState({ imagesReady: true });
    //   }
    // };

    imageList.forEach(
      (_image, index) => {
        const img = new Image();
        img.src = imageList[index];

        // if (img.complete) {
        //   whenLoaded();
        // } else {
        //   img.onload = () => whenLoaded();
        // }
      }
    );
  }

  componentDidMount() {
    const {
      pathname,
      search
    } = window.location;
    ReactGA.pageview(pathname + search); // Tallies initial request

    if (!this.hasFlexbox()) {
      throw new Error("Browser doesn't support Flexbox");
    } else if (isOpera) {
      throw new Error("We don't currently support Opera");
    }

    window.addEventListener('resize', this.updateHeight);
    this.loadImages();
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
      const {
        pathname,
        search
      } = window.location;

      ReactGA.event({
        category: 'App state',
        action: 'Re-calculate height',
        value: window.innerHeight
          ? window.innerHeight
          : document.documentElement.clientHeight,
        label: `Page: ${pathname}${search}`
      });

      this.setState({
        height: window.innerHeight
          ? window.innerHeight
          : document.documentElement.clientHeight
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
        // '/chapter', '/projects', etc.
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
