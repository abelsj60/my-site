/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/App.jsx":
/*!*********************!*\
  !*** ./app/App.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Body_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Body.jsx */ "./app/Body.jsx");
/* harmony import */ var _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/ClickHandling.js */ "./app/classes/ClickHandling.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _header_footer_Footer_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-footer/Footer.jsx */ "./app/header-footer/Footer.jsx");
/* harmony import */ var _header_footer_Header_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header-footer/Header.jsx */ "./app/header-footer/Header.jsx");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _temp_content_LegalTermsOrBizCard_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./temp-content/LegalTermsOrBizCard.jsx */ "./app/temp-content/LegalTermsOrBizCard.jsx");
/* harmony import */ var _classes_Location_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./classes/Location.js */ "./app/classes/Location.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./classes/Referrer.js */ "./app/classes/Referrer.js");
/* harmony import */ var _classes_ScrollHandling_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./classes/ScrollHandling.js */ "./app/classes/ScrollHandling.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  html {\n    // Best practice to load fonts: \n    // https://stackoverflow.com/questions/12316501/including-google-web-fonts-link-or-import\n\n    font-family: 'Montserrat', sans-serif;\n    font-size: 62.5%;\n    background-color: ", ";\n  }\n  \n  body {\n    margin: 0px;\n    padding: 0px;\n    font-size: ", ";\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 300;\n    -webkit-overflow-scrolling: touch;\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n    max-width: 1508px;\n    margin: 0 auto;\n\n    h1,\n    h2,\n    h3,\n    p,\n    ul {\n      margin: 0px;\n    }\n\n    h1 {\n      font-family: 'Playfair Display', serif;\n      margin-left: 2px;\n    }\n\n    p {\n      margin-bottom: ", ";\n      line-height: 1.6;\n    }\n  }\n\n  #app {\n    display: flex;\n    flex-direction: column;\n    height: ", "px;\n    position: relative;\n    \n    @media(orientation:landscape) {\n      // Fix esoteric iOS 7 iPad bug:\n      // https://stackoverflow.com/a/19449123\n      // https://stackoverflow.com/q/19012135\n      // https://krpano.com/ios/bugs/ios7-ipad-landscape/\n\n      ", ";\n    }\n    \n    ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




 // import ReactGA from 'react-ga';









var colors = {
  black: 'black',
  blue: '#6e7dab',
  lightBlack: '#455057',
  lightBlue: '#e6f1ff',
  lightPink: '#fd5198',
  mediumBlack: '#555F66',
  pink: '#fd1172',
  reverieBlue: '#d2e7ff',
  white: 'white',
  yellow: '#ffe74c'
};
var fontSizes = {
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
var mediaQueries = {
  tinyView: '390px',
  narrowBreakOne: '500px',
  narrowBreakTwo: '625px',
  narrowBreakThree: '651px',
  desktopView: '848px',
  desktopWide: '1004px'
};
var grafSpace = {
  regular: '15px'
};
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"])(_templateObject(), function (p) {
  return p.reverie ? '#d2e7ff' : 'white';
}, function (p) {
  return p.theme.fontSizes.twelve;
}, function (p) {
  return p.theme.grafSpace.regular;
}, function (p) {
  return p.theme.pageHeight;
}, function (p) {
  return p.fixMobileSafariBugOn7 && 'position:fixed; bottom: 0;';
}, function (p) {
  return p.home && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["width:100%;overflow:hidden;"]);
});

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    var referrer = new _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_9__["default"](props);
    var location = referrer.location; // ReactGA.initialize('tbd'); // Tallies initial request
    // ReactGA.pageview(window.location.pathname);

    _this.state = {
      currentCaller: location !== 'i' ? location : 'home',
      lastCaller: location !== 'reverie' ? location : 'home',
      inCity: false,
      isMenu: referrer.isMenu(props),
      height: window.innerHeight || document.documentElement.clientHeight,
      showBusinessCard: false,
      showLegalTerms: false,
      showStoryText: true //,
      // imagesReady: false

    };
    _this.loadImages = _this.loadImages.bind(_assertThisInitialized(_this));
    _this.updateHeight = _this.updateHeight.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var location = new _classes_Location_js__WEBPACK_IMPORTED_MODULE_7__["default"]('/', this.props);
      var hcForApp = new _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_1__["default"]('app', this);
      var boundHandleClickForApp = hcForApp.boundHandleClick;
      var homeIsActive = location.type === 'home';
      var reverieIsActive = location.type === 'reverie';
      var fixMobileSafariBugOn7 = react_device_detect__WEBPACK_IMPORTED_MODULE_5__["isTablet"] && react_device_detect__WEBPACK_IMPORTED_MODULE_5__["isMobileSafari"] && react_device_detect__WEBPACK_IMPORTED_MODULE_5__["osVersion"][0] === '7';
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
        theme: {
          grafSpace: grafSpace,
          colors: colors,
          fontSizes: fontSizes,
          mediaQueries: mediaQueries,
          pageHeight: this.state.height.toString()
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(GlobalStyle, {
        home: homeIsActive,
        reverie: reverieIsActive,
        fixMobileSafariBugOn7: fixMobileSafariBugOn7
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_header_footer_Header_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, this.props, {
        appState: this.state
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Body_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({}, this.props, {
        appState: this.state,
        boundHandleClickForApp: boundHandleClickForApp
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_temp_content_LegalTermsOrBizCard_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, this.props, {
        appState: this.state,
        boundHandleClickForApp: boundHandleClickForApp
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_header_footer_Footer_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, this.props, {
        appState: this.state,
        boundHandleClickForApp: boundHandleClickForApp
      }))));
    }
  }, {
    key: "hasFlexbox",
    value: function hasFlexbox() {
      // https://johanronsse.be/2016/01/03/simple-flexbox-check/
      var document = window.document.body || window.document.documentElement;
      var style = document.style;

      if (style.webkitFlexWrap === '' || style.msFlexWrap === '' || style.flexWrap === '') {
        return true;
      }

      return false;
    }
  }, {
    key: "loadImages",
    value: function loadImages() {
      var imageList = ['https://user-images.githubusercontent.com/30417590/55294127-2c1c5980-53cc-11e9-9848-5295cd05a9cc.png', 'https://user-images.githubusercontent.com/30417590/55294130-33436780-53cc-11e9-93cc-f61572bca6ef.png', 'https://user-images.githubusercontent.com/30417590/55294135-3c343900-53cc-11e9-8f9c-e66499ccd920.png', 'https://user-images.githubusercontent.com/30417590/55294138-43f3dd80-53cc-11e9-96c2-3c7f2977c24a.jpg']; // let imagesLoaded = 0;
      // const whenLoaded = () => {
      //   imagesLoaded++;
      //   if (imagesLoaded === imageList.length - 1) {
      //     this.setState({ imagesReady: true });
      //   }
      // };

      imageList.forEach(function (_image, index) {
        var img = new Image();
        img.src = imageList[index]; // if (img.complete) {
        //   whenLoaded();
        // } else {
        //   img.onload = () => whenLoaded();
        // }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.hasFlexbox()) {
        throw new Error("Browser doesn't support Flexbox");
      } else if (react_device_detect__WEBPACK_IMPORTED_MODULE_5__["isOpera"]) {
        throw new Error("We don't currently support Opera");
      }

      window.addEventListener('resize', this.updateHeight);
      this.loadImages();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // It'll never be called, here as good practice
      window.removeEventListener('resize', this.updateHeight);
    }
  }, {
    key: "updateHeight",
    value: function updateHeight() {
      if (this.state.height !== window.innerHeight || this.state.height !== document.documentElement.clientHeight) {
        // ReactGA.event({
        //   category: 'Re-calculate height',
        //   action: `Current height: ${
        //     this.state.height
        // } doesn't match new height: ${
        //   window.innerHeight
        //   ? window.innerHeight
        //   : document.documentElement.clientHeight
        // }`;
        //   label:
        // });
        this.setState({
          height: window.innerHeight ? window.innerHeight : document.documentElement.clientHeight
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var location = new _classes_Location_js__WEBPACK_IMPORTED_MODULE_7__["default"]('/', this.props, prevProps); // Ensure window top's at zero after orientation change

      var scrollHandling = new _classes_ScrollHandling_js__WEBPACK_IMPORTED_MODULE_10__["default"](location);
      scrollHandling.resetWindowTop();

      if (location.justChanged) {
        var _this$state = this.state,
            isMenu = _this$state.isMenu,
            showBusinessCard = _this$state.showBusinessCard,
            showLegalTerms = _this$state.showLegalTerms,
            showStoryText = _this$state.showStoryText;
        var referrer = new _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_9__["default"](prevProps);
        var hcForApp = new _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_1__["default"]('app', this);
        var handleClickForApp = hcForApp.boundHandleClick;

        if (showBusinessCard) {
          handleClickForApp('toggleBusinessCard');
        }

        if (showLegalTerms) {
          handleClickForApp('toggleLegalTerms');
        }

        if (!showStoryText && !location.isReloading && location.type !== 'reverie' && location.lastType !== 'reverie') {
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
          handleClickForApp('setCallers', location.type, location.lastType);
        }

        if ( // '/chapter', '/projects', etc.
        !location.isTopLevel // lastCaller was not '/i'. The app will
        // run two re-renders after a <Redirect />
        // moves us from '/i' to the next page's
        // URL (see next statement). As a result,
        // we filter one of the re-renders out so
        // we don't tally the page URL twice:
        && !location.isCalledAfterReload // current window URL is not '/i'.
        // Restate route occurs on the '/i' url.
        // The app doesn't move to the next page's
        // URL until a <Redirect /> loads it. This
        // check blocks '/i' from being tallied
        // by GA:
        && window.location.pathname !== '/i') {// ReactGA.pageview(window.location.pathname);
        }
      }
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(App));

/***/ }),

/***/ "./app/Body.jsx":
/*!**********************!*\
  !*** ./app/Body.jsx ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Body; });
/* harmony import */ var _about_About_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about/About.jsx */ "./app/about/About.jsx");
/* harmony import */ var _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/ClickHandling.js */ "./app/classes/ClickHandling.js");
/* harmony import */ var _shared_ContentLoader_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/ContentLoader.jsx */ "./app/shared/ContentLoader.jsx");
/* harmony import */ var _home_Home_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/Home.jsx */ "./app/home/Home.jsx");
/* harmony import */ var _classes_Location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/Location */ "./app/classes/Location.js");
/* harmony import */ var _not_found_NotFound_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found/NotFound.jsx */ "./app/not-found/NotFound.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./classes/Referrer.js */ "./app/classes/Referrer.js");
/* harmony import */ var _reload_ReloadRoute_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reload/ReloadRoute.jsx */ "./app/reload/ReloadRoute.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _classes_State_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./classes/State.js */ "./app/classes/State.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }













var Body =
/*#__PURE__*/
function (_Component) {
  _inherits(Body, _Component);

  function Body(props) {
    var _this;

    _classCallCheck(this, Body);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Body).call(this, props));
    /** Build initial bodyState.
     *
     * Renders are defined by path params. State is used
     * to return to current location when user moves
     * between sections, e.g., returns from a menu.
     */

    var referrer = new _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_7__["default"](props);
    var location = new _classes_Location__WEBPACK_IMPORTED_MODULE_4__["default"](referrer.pathToMatch, props);
    var state = new _classes_State_js__WEBPACK_IMPORTED_MODULE_10__["default"](props, location);
    _this.state = {
      indexForArticleData: state.getIndex('article'),
      indexForChapterData: state.getIndex('chapter'),
      indexForProjectData: state.getIndex('project'),
      indexForProjectPics: state.getIndex('projectPics'),
      indexForPublication: state.getIndex('publication'),
      indexForReverieData: state.getIndex('reverie')
    };
    return _this;
  }

  _createClass(Body, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var eventHandling = new _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_1__["default"]('body', this);
      var boundHandleClickForBody = eventHandling.boundHandleClick; // Optional params in React:
      // https://stackoverflow.com/a/35604855

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Route"], {
        exact: true,
        path: "/",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_home_Home_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], _this2.props);
        }
      }), ['/chapter/:title?', '/journalism/:publication?/:headline?', '/projects/:projectName?/:projectThumbnail?', '/reverie/:headline?'].map(function (path, idx) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Route"], {
          key: idx,
          path: path,
          render: function render(_ref) {
            var match = _ref.match;
            return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_shared_ContentLoader_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, _this2.props, {
              bodyState: _this2.state,
              boundHandleClickForBody: boundHandleClickForBody,
              match: match
            }));
          }
        });
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Route"], {
        exact: true,
        path: "/i",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_reload_ReloadRoute_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, _this2.props, {
            bodyState: _this2.state
          }));
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Route"], {
        exact: true,
        path: "/about",
        component: _about_About_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Route"], {
        component: _not_found_NotFound_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]
      }));
    }
  }]);

  return Body;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./app/about/About.jsx":
/*!*****************************!*\
  !*** ./app/about/About.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var _data_about_about_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/about/about.md */ "./app/data/about/about.md");
/* harmony import */ var _data_about_about_md__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_about_about_md__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _primitives_Left_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../primitives/Left.jsx */ "./app/primitives/Left.jsx");
/* harmony import */ var _public_linked_in_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/linked-in-icon.png */ "./public/linked-in-icon.png");
/* harmony import */ var _public_linked_in_icon_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_linked_in_icon_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _primitives_Right_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../primitives/Right.jsx */ "./app/primitives/Right.jsx");
/* harmony import */ var _primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../primitives/Main.jsx */ "./app/primitives/Main.jsx");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../primitives/Overflow.jsx */ "./app/primitives/Overflow.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");







 // import ReactGA from 'react-ga';



var RestyledLeft = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(_primitives_Left_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]).withConfig({
  displayName: "About__RestyledLeft",
  componentId: "sc-1ye68oq-0"
})(["min-width:327px;"]);
var Heading = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "About__Heading",
  componentId: "sc-1ye68oq-1"
})(["display:flex;margin-bottom:15px;justify-content:space-between;@media (min-width:", "){margin-bottom:10px;}"], function (p) {
  return p.theme.mediaQueries.desktopView;
});
var Hed = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].h1.withConfig({
  displayName: "About__Hed",
  componentId: "sc-1ye68oq-2"
})(["margin-top:-8px;font-size:", ";color:", ";"], function (p) {
  return p.theme.fontSizes.sixteen;
}, function (p) {
  return p.theme.colors.pink;
});
var ExternalLink = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].a.withConfig({
  displayName: "About__ExternalLink",
  componentId: "sc-1ye68oq-3"
})(["margin-top:6px;align-self:center;"]);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].section.withConfig({
  displayName: "About__Text",
  componentId: "sc-1ye68oq-4"
})(["overflow:auto;p{margin-bottom:10px;&:last-child{margin-bottom:0px;}}"]);
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "About__Icon",
  componentId: "sc-1ye68oq-5"
})(["height:20px;width:30px;margin-bottom:6px;margin-right:2px;background:url(", ") no-repeat;background-size:contain;"], function (p) {
  return p.src;
});
var RestyledExternalLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(ExternalLink).withConfig({
  displayName: "About__RestyledExternalLink",
  componentId: "sc-1ye68oq-6"
})(["@media (min-width:", "){align-self:center;}"], function (p) {
  return p.theme.mediaQueries.desktopView;
});
function About() {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(RestyledLeft, null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_primitives_Right_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Heading, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Hed, null, "About"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(RestyledExternalLink, {
    href: "https://www.linkedin.com/in/jameserikabels",
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Icon, {
    src: _public_linked_in_icon_png__WEBPACK_IMPORTED_MODULE_2___default.a
  }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Text, null, react_html_parser__WEBPACK_IMPORTED_MODULE_8___default()(marked__WEBPACK_IMPORTED_MODULE_5___default()(_data_about_about_md__WEBPACK_IMPORTED_MODULE_0___default.a.body, {
    smartypants: true
  }))))));
}

/***/ }),

/***/ "./app/article-n-reverie/ArticleOrReverie.jsx":
/*!****************************************************!*\
  !*** ./app/article-n-reverie/ArticleOrReverie.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ArticleOrReverie; });
/* harmony import */ var _ArticleOrReverieNav_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArticleOrReverieNav.jsx */ "./app/article-n-reverie/ArticleOrReverieNav.jsx");
/* harmony import */ var _primitives_Left_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../primitives/Left.jsx */ "./app/primitives/Left.jsx");
/* harmony import */ var _primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../primitives/Main.jsx */ "./app/primitives/Main.jsx");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_MenuButton_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/MenuButton.jsx */ "./app/shared/MenuButton.jsx");
/* harmony import */ var _primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../primitives/Overflow.jsx */ "./app/primitives/Overflow.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _primitives_Right_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../primitives/Right.jsx */ "./app/primitives/Right.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











var Dek = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].h2.withConfig({
  displayName: "ArticleOrReverie__Dek",
  componentId: "fwfi0q-0"
})(["font-size:", ";color:", ";font-weight:400;@media (min-width:", "){font-size:", ";}"], function (p) {
  return p.theme.fontSizes.seven;
}, function (p) {
  return p.theme.colors.pink;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.fontSizes.nine;
});
var Hed = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].h1.withConfig({
  displayName: "ArticleOrReverie__Hed",
  componentId: "fwfi0q-1"
})(["font-size:", ";"], function (p) {
  return p.theme.fontSizes.sixteen;
});
var Text = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].section.withConfig({
  displayName: "ArticleOrReverie__Text",
  componentId: "fwfi0q-2"
})(["p{&:last-child{margin-bottom:0px;}}img{margin-top:0px;}ul,ol{margin-top:0px;margin-bottom:", ";}li{margin-bottom:10px;&:last-child{margin-bottom:0px;}}"], function (p) {
  return p.theme.grafSpace.regular;
});
var BylineOrDate = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].p.withConfig({
  displayName: "ArticleOrReverie__BylineOrDate",
  componentId: "fwfi0q-3"
})(["font-size:", ";font-style:italic;margin-top:14px;margin-bottom:14px;"], function (p) {
  return p.theme.fontSizes.three;
});
function ArticleOrReverie(props) {
  var data = props.data,
      location = props.location,
      overflowRef = props.overflowRef,
      params = props.params;
  var currentPath = location.pathname.split('/');
  var isReverie = currentPath[1] === 'reverie';
  var index = params.headlineToIndex();
  var article = data[index];
  var _article$attributes = article.attributes,
      date = _article$attributes.date,
      headline = _article$attributes.headline,
      position = _article$attributes.position,
      publication = _article$attributes.publication;
  var bylineOrDate;
  var reverieOrPublicationAsDek;

  if (isReverie) {
    bylineOrDate = date;
    reverieOrPublicationAsDek = 'Reverie';
  } else {
    bylineOrDate = "by James Erik Abels | ".concat(position);
    reverieOrPublicationAsDek = publication;
  }

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    reverie: isReverie
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_primitives_Left_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    reverie: isReverie
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ArticleOrReverieNav_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({}, props, {
    data: data
  }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_primitives_Right_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_shared_MenuButton_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], props), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ref: function ref(_ref) {
      return overflowRef.current = _ref;
    }
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Dek, null, reverieOrPublicationAsDek), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Hed, null, headline), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(BylineOrDate, null, bylineOrDate), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Text, null, react_html_parser__WEBPACK_IMPORTED_MODULE_7___default()(marked__WEBPACK_IMPORTED_MODULE_3___default()(article.body, {
    smartypants: true
  }))))));
}

/***/ }),

/***/ "./app/article-n-reverie/ArticleOrReverieNav.jsx":
/*!*******************************************************!*\
  !*** ./app/article-n-reverie/ArticleOrReverieNav.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ArticleOrReverieNav; });
/* harmony import */ var _shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/Mapper.jsx */ "./app/shared/Mapper.jsx");
/* harmony import */ var _helpers_normalize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/normalize.js */ "./app/helpers/normalize.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../primitives/StyledLink.jsx */ "./app/primitives/StyledLink.jsx");
/* harmony import */ var _primitives_UnorderedList_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../primitives/UnorderedList.jsx */ "./app/primitives/UnorderedList.jsx");






var RestyledList = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_primitives_UnorderedList_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "ArticleOrReverieNav__RestyledList",
  componentId: "k2qkgh-0"
})(["overflow:", ";width:", ";"], function (p) {
  return !p.menu ? 'auto' : undefined;
}, function (p) {
  return !p.menu ? '327px' : undefined;
});
var NavigationDek = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "ArticleOrReverieNav__NavigationDek",
  componentId: "k2qkgh-1"
})(["color:", ";margin-bottom:", ";font-size:", ";font-style:italic;&:first-child{margin-top:0px;}"], function (p) {
  return p.menu && !p.link ? p.theme.colors.black : p.theme.colors.blue;
}, function (p) {
  return !p.menu ? '4px' : '0px';
}, function (p) {
  return p.theme.fontSizes.four;
});
var NavigationHed = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "ArticleOrReverieNav__NavigationHed",
  componentId: "k2qkgh-2"
})(["color:", ";font-size:", ";margin-top:-2px;margin-bottom:15px;font-weight:400;", ";@media (min-width:", "){font-size:", ";}"], function (p) {
  return p.menu && !p.link ? p.theme.colors.black : p.theme.colors.blue;
}, function (p) {
  return p.menu ? p.theme.fontSizes.fifteen : p.theme.fontSizes.eleven;
}, function (p) {
  return !p.menu && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["overflow:hidden;text-overflow:ellipsis;width:300px;white-space:nowrap;"]);
}, function (p) {
  return p.theme.mediaQueries.narrowBreakOne;
}, function (p) {
  return p.menu && p.theme.fontSizes.sixteen;
});
function ArticleOrReverieNav(props) {
  var appState = props.appState,
      bodyState = props.bodyState,
      data = props.data,
      location = props.location,
      params = props.params;
  var isMenu = appState.isMenu;
  var currentPath = location.pathname.split('/');
  var isReverie = currentPath[1] === 'reverie';
  var index;

  if (currentPath[2] !== 'menu') {
    index = params.headlineToIndex();
  } else {
    if (isReverie) {
      index = bodyState.indexForReverieData;
    } else {
      index = bodyState.indexForArticleData;
    }
  }

  var currentHed = data[index].attributes.headline;
  var normalizedCurrentHed = Object(_helpers_normalize_js__WEBPACK_IMPORTED_MODULE_1__["default"])(currentHed);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RestyledList, {
    menu: isMenu
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], {
    mapData: data,
    render: function render(articleOrReverie, idx) {
      var _articleOrReverie$att = articleOrReverie.attributes,
          date = _articleOrReverie$att.date,
          headline = _articleOrReverie$att.headline,
          publication = _articleOrReverie$att.publication;
      var normalizedHedFromItem = Object(_helpers_normalize_js__WEBPACK_IMPORTED_MODULE_1__["default"])(headline);
      var dateOrPublicationFromItem = !isReverie ? publication : date;
      var linkIsActive = normalizedCurrentHed === normalizedHedFromItem;
      var articleLink = isReverie ? "/reverie/".concat(normalizedHedFromItem) : "/journalism/".concat(Object(_helpers_normalize_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateOrPublicationFromItem), "/").concat(normalizedHedFromItem);
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
        key: idx
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        to: articleLink
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NavigationDek, {
        link: linkIsActive,
        menu: isMenu
      }, dateOrPublicationFromItem), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NavigationHed, {
        link: linkIsActive,
        menu: isMenu
      }, headline)));
    }
  }));
}

/***/ }),

/***/ "./app/classes/ClickHandling.js":
/*!**************************************!*\
  !*** ./app/classes/ClickHandling.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ClickHandling; });
/* harmony import */ var _Referrer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Referrer */ "./app/classes/Referrer.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 // import ReactGA from 'react-ga';

var ClickHandling =
/*#__PURE__*/
function () {
  function ClickHandling(component, outsideThis) {
    _classCallCheck(this, ClickHandling);

    if (outsideThis.props.location === undefined) {
      throw new Error('Caller must carry location.');
    }

    var referrer = new _Referrer__WEBPACK_IMPORTED_MODULE_0__["default"](outsideThis.props);
    this._component = component;
    this._referrer = referrer.location;
    this.boundHandleClick = this._selectHandleClick(outsideThis);
  }

  _createClass(ClickHandling, [{
    key: "_selectHandleClick",
    value: function _selectHandleClick(outerThis) {
      var selectedHandler;

      switch (this._component) {
        case 'app':
          selectedHandler = this._handleClickForAppComponent;
          break;

        case 'body':
          selectedHandler = this._handleClickForBodyComponent;
          break;

        case 'header':
          selectedHandler = this._handleClickForHeader;
          break;

        default:
          break;
      }

      return selectedHandler.call(outerThis, this);
    }
  }, {
    key: "_handleClickForAppComponent",
    value: function _handleClickForAppComponent() {
      var _this = this;

      return function (updateValue, valueOne, valueTwo) {
        var _this$state = _this.state,
            showBusinessCard = _this$state.showBusinessCard,
            showLegalTerms = _this$state.showLegalTerms,
            inCity = _this$state.inCity,
            showStoryText = _this$state.showStoryText,
            isMenu = _this$state.isMenu;
        var stateToUpdate = {}; // let category = '';
        // let action = '';
        // let label = '';

        switch (updateValue) {
          case 'toggleBusinessCard':
            stateToUpdate.showBusinessCard = !showBusinessCard;

            if (showLegalTerms) {
              stateToUpdate.showLegalTerms = !showLegalTerms;
            } // category = 'Business card';
            // action = !showBusinessCard
            //   ? 'Clicked to open'
            //   : 'Clicked to close';
            // label = showLegalTerms
            //   ? 'Legal notice was open'
            //   : '';


            break;

          case 'toggleLegalTerms':
            stateToUpdate.showLegalTerms = !showLegalTerms;

            if (showBusinessCard) {
              stateToUpdate.showBusinessCard = !showBusinessCard;
            } // category = 'Legal terms';
            // action = !showLegalTerms
            //   ? 'Clicked to open'
            //   : 'Clicked to close';
            // label = showBusinessCard
            //   ? 'Business card was open'
            //   : '';


            break;

          case 'toggleStoryText':
            stateToUpdate.showStoryText = !showStoryText;

            if (showBusinessCard) {
              stateToUpdate.showBusinessCard = !showBusinessCard;
            }

            if (showLegalTerms) {
              stateToUpdate.showLegalTerms = !showLegalTerms;
            } // category = 'Show story text';
            // action = showStoryText
            //   ? 'Clicked to hide text'
            //   : 'Clicked to show text';
            // label = showBusinessCard
            //   ? 'Business card was open'
            //   : showLegalTerms
            //     ? 'Legal notice was open'
            //     : '';


            break;

          case 'swapHomePageImage':
            stateToUpdate.inCity = !inCity; // category = 'Swap home page background image';
            // action = !inCity
            //   ? 'Go to city realm'
            //   : 'Go to fantasy realm';

            break;

          case 'setCallers':
            stateToUpdate.currentCaller = valueOne;

            if (valueTwo !== 'reverie') {
              stateToUpdate.lastCaller = valueTwo;
            }

            break;

          case 'toggleMenu':
            stateToUpdate.isMenu = !isMenu; // category = 'Toggle menu';
            // action = !isMenu
            //   ? `Go to ${currentCaller} menu`
            //   : `Leave ${currentCaller} menu`;

            break;

          default:
            break;
        }

        if (updateValue !== 'setCallers') {// ReactGA.event({
          //   category,
          //   action,
          //   label
          // });
        }

        return _this.setState(function () {
          return stateToUpdate;
        });
      };
    }
  }, {
    key: "_handleClickForBodyComponent",
    value: function _handleClickForBodyComponent(innerThis) {
      var _this2 = this;

      return function (valueOne, valueTwo) {
        var stateToUpdate = {};

        switch (innerThis._referrer) {
          case 'chapter':
            stateToUpdate.indexForChapterData = valueOne;
            break;

          case 'projects':
            stateToUpdate.indexForProjectData = valueOne;
            stateToUpdate.indexForProjectPics = valueTwo;
            break;

          case 'journalism':
            stateToUpdate.indexForPublication = valueOne;
            stateToUpdate.indexForArticleData = valueTwo;
            break;

          case 'reverie':
            stateToUpdate.indexForReverieData = valueOne;
            break;

          default:
            break;
        }

        return _this2.setState(stateToUpdate);
      };
    }
  }, {
    key: "_handleClickForHeader",
    value: function _handleClickForHeader() {
      var _this3 = this;

      return function () {
        var menuIsOpen = _this3.state.menuIsOpen;

        var toggleState = function toggleState() {
          this.setState({
            menuIsOpen: !menuIsOpen
          });
        };

        if (!menuIsOpen) {
          toggleState.call(_this3);
          _this3.timeoutId = setTimeout(function () {
            _this3.setState({
              menuIsOpen: false
            });
          }, 5000);
        } else {
          clearTimeout(_this3.timeoutId);
          _this3.timeoutId = undefined;
          toggleState.call(_this3);
        }
      };
    }
  }]);

  return ClickHandling;
}();



/***/ }),

/***/ "./app/classes/ComponentData.js":
/*!**************************************!*\
  !*** ./app/classes/ComponentData.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ComponentData; });
/* harmony import */ var _article_n_reverie_ArticleOrReverie_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../article-n-reverie/ArticleOrReverie.jsx */ "./app/article-n-reverie/ArticleOrReverie.jsx");
/* harmony import */ var _article_n_reverie_ArticleOrReverieNav_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../article-n-reverie/ArticleOrReverieNav.jsx */ "./app/article-n-reverie/ArticleOrReverieNav.jsx");
/* harmony import */ var _Content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Content.js */ "./app/classes/Content.js");
/* harmony import */ var _projects_DesktopProjectNav_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projects/DesktopProjectNav.jsx */ "./app/projects/DesktopProjectNav.jsx");
/* harmony import */ var _projects_Projects_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../projects/Projects.jsx */ "./app/projects/Projects.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _story_Story_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../story/Story.jsx */ "./app/story/Story.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









var ComponentData =
/*#__PURE__*/
function () {
  function ComponentData(type) {
    _classCallCheck(this, ComponentData);

    var content = new _Content_js__WEBPACK_IMPORTED_MODULE_2__["default"](type);
    this._type = type;
    this._contentData = content.getContentData();
  }

  _createClass(ComponentData, [{
    key: "getSection",
    value: function getSection(props, ref, params) {
      var type = this._type;
      var contentData = this._contentData;
      var Section;

      switch (type) {
        case 'chapter':
          Section = _story_Story_jsx__WEBPACK_IMPORTED_MODULE_6__["default"];
          break;

        case 'journalism':
          Section = _article_n_reverie_ArticleOrReverie_jsx__WEBPACK_IMPORTED_MODULE_0__["default"];
          break;

        case 'projects':
          Section = _projects_Projects_jsx__WEBPACK_IMPORTED_MODULE_4__["default"];
          break;

        case 'reverie':
          Section = _article_n_reverie_ArticleOrReverie_jsx__WEBPACK_IMPORTED_MODULE_0__["default"];
          break;

        default:
          return undefined;
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Section, _extends({}, props, {
        data: contentData,
        overflowRef: ref,
        params: params
      }));
    }
  }, {
    key: "getMenuContent",
    value: function getMenuContent(props, params) {
      var type = this._type;
      var contentData = this._contentData;
      var MenuContent;

      switch (type) {
        case 'journalism':
          MenuContent = _article_n_reverie_ArticleOrReverieNav_jsx__WEBPACK_IMPORTED_MODULE_1__["default"];
          break;

        case 'projects':
          MenuContent = _projects_DesktopProjectNav_jsx__WEBPACK_IMPORTED_MODULE_3__["default"];
          break;

        case 'reverie':
          MenuContent = _article_n_reverie_ArticleOrReverieNav_jsx__WEBPACK_IMPORTED_MODULE_1__["default"];
          break;

        default:
          return undefined;
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(MenuContent, _extends({}, props, {
        data: contentData,
        params: params
      }));
    }
  }]);

  return ComponentData;
}();



/***/ }),

/***/ "./app/classes/Content.js":
/*!********************************!*\
  !*** ./app/classes/Content.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Content; });
/* harmony import */ var _data_clips_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/clips/index.js */ "./app/data/clips/index.js");
/* harmony import */ var _data_clips_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_clips_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_projects_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/projects/index.js */ "./app/data/projects/index.js");
/* harmony import */ var _data_projects_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_projects_index_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_reveries_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/reveries/index.js */ "./app/data/reveries/index.js");
/* harmony import */ var _data_reveries_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_reveries_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_the_story_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/the-story/index.js */ "./app/data/the-story/index.js");
/* harmony import */ var _data_the_story_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_the_story_index_js__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Content =
/*#__PURE__*/
function () {
  function Content(type) {
    _classCallCheck(this, Content);

    this.type = type;
  }

  _createClass(Content, [{
    key: "getContentData",
    value: function getContentData() {
      var type = this.type;

      switch (type) {
        case 'chapter':
          return _data_the_story_index_js__WEBPACK_IMPORTED_MODULE_3___default.a;

        case 'projects':
          return _data_projects_index_js__WEBPACK_IMPORTED_MODULE_1___default.a;

        case 'journalism':
          return _data_clips_index_js__WEBPACK_IMPORTED_MODULE_0___default.a;

        case 'reverie':
          return _data_reveries_index_js__WEBPACK_IMPORTED_MODULE_2___default.a;

        default:
          return;
      }
    }
  }]);

  return Content;
}();



/***/ }),

/***/ "./app/classes/JournalismParams.js":
/*!*****************************************!*\
  !*** ./app/classes/JournalismParams.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JournalismParams; });
/* harmony import */ var _Params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Params */ "./app/classes/Params.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var JournalismParams =
/*#__PURE__*/
function (_Params) {
  _inherits(JournalismParams, _Params);

  function JournalismParams(type, params, prevProps) {
    var _this;

    _classCallCheck(this, JournalismParams);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JournalismParams).call(this, type, params, ['publication', 'headline']));
    _this.lastHeadline = prevProps && prevProps.match.params.headline;
    _this.lastPublication = prevProps && prevProps.match.params.publication;
    return _this;
  }

  _createClass(JournalismParams, [{
    key: "publicationToIndex",
    value: function publicationToIndex() {
      if (!this.publication) return -1;
      return this._oneToIndex();
    }
  }, {
    key: "headlineToIndex",
    value: function headlineToIndex() {
      if (!this.headline) return -1;
      return this._twoToIndex();
    }
  }, {
    key: "publication",
    get: function get() {
      return this._validateParam(this._one, this._paramNames[0]);
    }
  }, {
    key: "headline",
    get: function get() {
      return this._validateParam(this._two, this._paramNames[1]);
    }
  }, {
    key: "firstArticleToMatchPublication",
    get: function get() {
      var _this2 = this;

      var headlineParamIsUndefined = this._two === undefined;

      if (this.publication && headlineParamIsUndefined) {
        var firstHedToMatchPublication = this._searchData.find(function (a) {
          return _this2._normalizeParam(a.attributes.publication) === _this2.publication;
        }).attributes.headline;

        return this._searchData.findIndex(function (a) {
          return a.attributes.headline === firstHedToMatchPublication;
        });
      }

      return -1;
    }
  }]);

  return JournalismParams;
}(_Params__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./app/classes/Location.js":
/*!*********************************!*\
  !*** ./app/classes/Location.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Location; });
/* harmony import */ var _JournalismParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JournalismParams */ "./app/classes/JournalismParams.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _Params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Params */ "./app/classes/Params.js");
/* harmony import */ var _ProjectsParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectsParams */ "./app/classes/ProjectsParams.js");
/* harmony import */ var _Referrer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Referrer.js */ "./app/classes/Referrer.js");
/* harmony import */ var _ReverieParams__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ReverieParams */ "./app/classes/ReverieParams.js");
/* harmony import */ var _StoryParams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StoryParams */ "./app/classes/StoryParams.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









var Location =
/*#__PURE__*/
function () {
  function Location(pathToMatch, props, prevProps) {
    _classCallCheck(this, Location);

    if (props.location === undefined) {
      throw new Error('The Location class requires props.location.');
    }

    var referrer = new _Referrer_js__WEBPACK_IMPORTED_MODULE_4__["default"](props);
    this._pathToMatch = pathToMatch;
    this._currentPath = props.location.pathname;
    this._lastPath = prevProps && prevProps.location.pathname;
    this._actualLengthOfPath = this._currentPath.split('/').length;
    this._expectedLengthOfPath = this._pathToMatch.split('/').length;
    this._matchPath = Object(react_router__WEBPACK_IMPORTED_MODULE_1__["matchPath"])(this._currentPath, {
      path: this._pathToMatch
    }); // Normalizes params within class

    this.type = referrer.location;
    this.lastType = this._lastPath && referrer.getLocation(prevProps);
    this.isExact = this._matchPath && this._matchPath.isExact;
    this.params = this._loadParams(prevProps);
  }

  _createClass(Location, [{
    key: "_loadParams",
    value: function _loadParams(prevProps) {
      var type = this.type;
      var paramValues = this._matchPath.params;
      var ParamsClass;

      switch (type) {
        case 'chapter':
          ParamsClass = _StoryParams__WEBPACK_IMPORTED_MODULE_6__["default"];
          break;

        case 'journalism':
          ParamsClass = _JournalismParams__WEBPACK_IMPORTED_MODULE_0__["default"];
          break;

        case 'projects':
          ParamsClass = _ProjectsParams__WEBPACK_IMPORTED_MODULE_3__["default"];
          break;

        case 'reverie':
          ParamsClass = _ReverieParams__WEBPACK_IMPORTED_MODULE_5__["default"];
          break;

        default:
          ParamsClass = _Params__WEBPACK_IMPORTED_MODULE_2__["default"];
          break;
      }

      return new ParamsClass(type, paramValues, prevProps);
    }
  }, {
    key: "_pathIsShort",
    get: function get() {
      return this._actualLengthOfPath < this._expectedLengthOfPath;
    }
  }, {
    key: "_pathIsLong",
    get: function get() {
      return this._actualLengthOfPath > this._expectedLengthOfPath;
    }
  }, {
    key: "pathIsValid",
    get: function get() {
      // Return statement:
      // 1. The path is a menu and the length is exactly 3
      // 2. The path is of the right type (e.g. /chapter)
      // 3. The path isn't too long (isExact doesn't check)
      // 4. The path has the proper number of params after
      // eliminating invalid entries (isExact can't know,
      // it only checks for fulfilled values)
      return this.params.isMenu ? this._actualLengthOfPath === 3 : this.isExact && !this._pathIsLong && this.params.hasExpectedNumber;
    }
  }, {
    key: "needsRedirect",
    get: function get() {
      if (this.pathIsValid) return false; // Return statement:
      // 1. The first param is literally undefined
      // 2. Two first param is validated but the
      // second param is literally undefined

      var paramOneIsUndefined = this.params.areUndefined.includes(this.params._paramNames[0]);
      var paramTwoIsUndefined = this.params.areUndefined.includes(this.params._paramNames[1]);
      return paramOneIsUndefined || this.params.oneIsValid && paramTwoIsUndefined;
    }
  }, {
    key: "isSwappingContent",
    get: function get() {
      var contentMismatch;
      var isMenu = this.params.isMenu;

      switch (this.type) {
        case 'chapter':
          var currentChapter = this.params.title;
          var lastChapter = this.params.lastChapter;
          contentMismatch = currentChapter !== lastChapter;
          break;

        case 'projects':
          var currentProjectPicture = this.params.projectThumbnail;
          var lastProjectPicture = this.params.lastProjectPicture;
          var currentProjectName = this.params.projectName;
          var lastProjectName = this.params.lastProject;
          contentMismatch = currentProjectName !== lastProjectName || currentProjectPicture !== lastProjectPicture;
          break;

        case 'journalism':
          var currentHeadline = this.params.headline;
          var lastHeadline = this.params.lastHeadline;
          contentMismatch = currentHeadline !== lastHeadline;
          break;

        case 'reverie':
          var currentReverie = this.params.headline;
          var lastReverie = this.params.lastHeadline;
          contentMismatch = currentReverie !== lastReverie;
          break;

        default:
          contentMismatch = false;
          break;
      }

      return contentMismatch && !isMenu;
    }
  }, {
    key: "justChanged",
    get: function get() {
      if (!this._lastPath) {
        throw new Error('Location.isChangingLocation() requires prevProps');
      }

      return this._currentPath !== this._lastPath;
    }
  }, {
    key: "isReloading",
    get: function get() {
      return this.type === 'i' || this.lastType === 'i';
    }
  }, {
    key: "isCalledAfterReload",
    get: function get() {
      return this.lastType === 'i';
    }
  }, {
    key: "isTopLevel",
    get: function get() {
      var topLevels = ['/chapter', '/journalism', '/projects', '/reverie'];
      return topLevels.includes(this._currentPath);
    }
  }]);

  return Location;
}();



/***/ }),

/***/ "./app/classes/Params.js":
/*!*******************************!*\
  !*** ./app/classes/Params.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Params; });
/* harmony import */ var _Content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content.js */ "./app/classes/Content.js");
/* harmony import */ var _helpers_normalize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/normalize.js */ "./app/helpers/normalize.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Params =
/*#__PURE__*/
function () {
  function Params(type, params, paramNames) {
    var _this = this;

    _classCallCheck(this, Params);

    // Array.isArray() ensures nothing breaks when
    // Params() is called by location._loadParams
    // (super's not called, so the {} is empty)
    this._type = type;
    this._paramNames = Array.isArray(paramNames) ? paramNames : [];
    this._one = params[this._paramNames[0]];
    this._two = params[this._paramNames[1]];
    this._expectedNumber = this._paramNames.length;
    this._validatedNumber = this._paramNames.filter( // Check this to assess their validity;
    // invalid params come back false
    function (p) {
      return _this[p] !== false;
    }).length;
    this.oneIsValid = this[this._paramNames[0]] !== false;
    this.twoIsValid = this[this._paramNames[1]] !== false;
    this.areUndefined = this._paramNames.filter( // Check params, not 'this' b/c this[param]
    // is defined by matchPath(); we want to
    // tet the real-true original URL.
    function (p) {
      return params[p] === undefined;
    });
    this.originalData = params;
  }

  _createClass(Params, [{
    key: "_normalizeParam",
    value: function _normalizeParam(param) {
      return Object(_helpers_normalize_js__WEBPACK_IMPORTED_MODULE_1__["default"])(param);
    }
  }, {
    key: "_validateParam",
    value: function _validateParam(param, paramName) {
      var _this2 = this;

      // This function has to stand on its own in
      // order to avoid an infinit loop. Remember,
      // any call to this[param] runs through this
      // method (validate), including ._toIndex()
      if (!param) return false;
      var searchData = this._searchData;
      var paramIsValid;

      switch (_typeof(param)) {
        case 'string':
          var paramTestResults = searchData.filter(function (d) {
            var valueFromData = _this2._normalizeParam(d.attributes[paramName]);

            var paramToTest = _this2._normalizeParam(param);

            return valueFromData === paramToTest;
          });
          paramIsValid = paramTestResults.length > 0;
          break;

        case 'number':
          var paramAsIndex = parseInt(param) - 1;
          paramIsValid = paramAsIndex >= 0 && paramAsIndex < searchData[0].attributes[paramName].length;
          break;

        default:
          paramIsValid = false;
          break;
      } // Return original to avoid problems
      // with falsy should index be 0


      return paramIsValid && param;
    }
  }, {
    key: "_toIndex",
    value: function _toIndex(paramName) {
      var _this3 = this;

      // The next two rely on ._validateParam(). As a,
      // result, it can't be used in ._validateParam()
      // to avoid an infinite loop.
      if (!this[paramName]) return -1; // this[paramName] access convenience methods
      // on each subclass, e.g., .projectThumbnail
      // or .headline. parseInt() is run whenever
      // the param corresponds to a number.

      var param = this[paramName];

      switch (_typeof(param)) {
        case 'string':
          return this._searchData.findIndex(function (d) {
            var normalizedData = _this3._normalizeParam(d.attributes[paramName]);

            return normalizedData === param;
          });

        case 'number':
          return parseInt(param) - 1;

        default:
          return;
      }
    }
  }, {
    key: "_oneToIndex",
    value: function _oneToIndex() {
      if (this._paramNames.length < 1) return -1;
      return this._toIndex(this._paramNames[0]);
    }
  }, {
    key: "_twoToIndex",
    value: function _twoToIndex() {
      if (this._paramNames.length < 2) return -1;
      return this._toIndex(this._paramNames[1]);
    }
  }, {
    key: "_searchData",
    get: function get() {
      var content = new _Content_js__WEBPACK_IMPORTED_MODULE_0__["default"](this._type);
      return content.getContentData();
    }
  }, {
    key: "hasExpectedNumber",
    get: function get() {
      return this._expectedNumber === this._validatedNumber;
    }
  }, {
    key: "isMenu",
    get: function get() {
      return this._one === 'menu';
    }
  }]);

  return Params;
}();



/***/ }),

/***/ "./app/classes/ProjectsParams.js":
/*!***************************************!*\
  !*** ./app/classes/ProjectsParams.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectsParams; });
/* harmony import */ var _Params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Params */ "./app/classes/Params.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ProjectsParams =
/*#__PURE__*/
function (_Params) {
  _inherits(ProjectsParams, _Params);

  function ProjectsParams(type, params, prevProps) {
    var _this;

    _classCallCheck(this, ProjectsParams);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProjectsParams).call(this, type, params, ['projectName', 'projectThumbnail']));
    _this.lastProject = prevProps && prevProps.match.params.projectName;
    _this.lastProjectPicture = prevProps && parseInt(prevProps.match.params.projectThumbnail);
    return _this;
  }

  _createClass(ProjectsParams, [{
    key: "projectNameToIndex",
    value: function projectNameToIndex() {
      if (!this.projectName) return -1;
      return this._oneToIndex();
    }
  }, {
    key: "projectThumbnailToIndex",
    value: function projectThumbnailToIndex() {
      if (!this.projectThumbnail) return -1;
      return this._twoToIndex();
    }
  }, {
    key: "projectName",
    get: function get() {
      return this._validateParam(this._one, this._paramNames[0]);
    }
  }, {
    key: "projectThumbnail",
    get: function get() {
      var paramIsValid = this._validateParam(parseInt(this._two), this._paramNames[1]);

      return paramIsValid && parseInt(paramIsValid);
    }
  }]);

  return ProjectsParams;
}(_Params__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./app/classes/Referrer.js":
/*!*********************************!*\
  !*** ./app/classes/Referrer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Referrer; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Referrer =
/*#__PURE__*/
function () {
  function Referrer(props) {
    _classCallCheck(this, Referrer);

    if (props.location === undefined) {
      throw new Error('Caller must offer props.location.');
    }

    this.path = props.location.pathname;
    this.location = this.getLocation(props);
    this.finalPath = this._loadFinalPath();
    this.pathToMatch = this._loadPathToMatch();
  }

  _createClass(Referrer, [{
    key: "_loadPathToMatch",
    value: function _loadPathToMatch() {
      switch (this.location) {
        case 'about':
          return '/about';

        case 'chapter':
          return '/chapter/:title?';

        case 'home':
          return '/';

        case 'journalism':
          return '/journalism/:publication?/:headline?';

        case 'projects':
          return '/projects/:projectName?/:projectThumbnail?';

        case 'i':
          return '/i';

        case 'not-found':
          return '/not-found';

        case 'reverie':
          return '/reverie/:headline?';

        default:
          return '/';
      }
    }
  }, {
    key: "_loadFinalPath",
    value: function _loadFinalPath() {
      switch (this.location) {
        case 'chapter':
          return '/chapter/:title';

        case 'projects':
          return '/projects/:projectName/:projectThumbnail';

        case 'journalism':
          return '/journalism/:publication/:headline';

        case 'reverie':
          return '/reverie/:headline';

        default:
          return;
      }
    }
  }, {
    key: "getLocation",
    value: function getLocation(props) {
      var locationArray = props.location.pathname.split('/');
      var isHome = locationArray[1] === '';
      return !isHome ? locationArray[1] : 'home';
    }
  }, {
    key: "isMenu",
    value: function isMenu(props) {
      var locationArray = props.location.pathname.split('/');
      var indexOfMenu = locationArray.indexOf('menu');
      return indexOfMenu === 2;
    }
  }]);

  return Referrer;
}();



/***/ }),

/***/ "./app/classes/Reload.js":
/*!*******************************!*\
  !*** ./app/classes/Reload.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Reload; });
/* harmony import */ var _Content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content.js */ "./app/classes/Content.js");
/* harmony import */ var _helpers_normalize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/normalize.js */ "./app/helpers/normalize.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Reload =
/*#__PURE__*/
function () {
  function Reload(props) {
    _classCallCheck(this, Reload);

    var currentCaller = props.appState.currentCaller;
    this._props = props;
    this._caller = currentCaller;
    this.path = this._buildPath();
  }

  _createClass(Reload, [{
    key: "_buildPath",
    value: function _buildPath() {
      var section = this._caller;

      switch (section) {
        case 'chapter':
          return this._storyPath(section);

        case 'projects':
          return this._projectsPath(section);

        case 'journalism':
          return this._articlePath(section);

        case 'reverie':
          return this._reveriePath(section);

        default:
          return '/';
      }
    }
  }, {
    key: "_normalize",
    value: function _normalize(text) {
      return Object(_helpers_normalize_js__WEBPACK_IMPORTED_MODULE_1__["default"])(text);
    }
  }, {
    key: "_getContentData",
    value: function _getContentData() {
      var caller = this._caller;
      var content = new _Content_js__WEBPACK_IMPORTED_MODULE_0__["default"](caller);
      return content.getContentData();
    }
  }, {
    key: "_storyPath",
    value: function _storyPath(section) {
      var storyData = this._getContentData();

      var indexForChapterData = this._props.bodyState.indexForChapterData;
      var title = storyData[indexForChapterData].attributes.title;

      var normalizedTitle = this._normalize(title);

      return "/".concat(section, "/").concat(normalizedTitle);
    }
  }, {
    key: "_projectsPath",
    value: function _projectsPath(section) {
      var projectData = this._getContentData();

      var _this$_props$bodyStat = this._props.bodyState,
          indexForProjectData = _this$_props$bodyStat.indexForProjectData,
          indexForProjectPics = _this$_props$bodyStat.indexForProjectPics;
      var projectName = projectData[indexForProjectData].attributes.projectName;

      var normalizedProjectName = this._normalize(projectName);

      var thumbnailNumber = indexForProjectPics + 1;
      return "/".concat(section, "/").concat(normalizedProjectName, "/").concat(thumbnailNumber);
    }
  }, {
    key: "_articlePath",
    value: function _articlePath(section) {
      var articleData = this._getContentData();

      var indexForArticleData = this._props.bodyState.indexForArticleData;
      var article = articleData[indexForArticleData];
      var _article$attributes = article.attributes,
          publication = _article$attributes.publication,
          headline = _article$attributes.headline;

      var normalizedPublication = this._normalize(publication);

      var normalizedHeadline = this._normalize(headline);

      return "/".concat(section, "/").concat(normalizedPublication, "/").concat(normalizedHeadline);
    }
  }, {
    key: "_reveriePath",
    value: function _reveriePath(section) {
      var reverieData = this._getContentData();

      var indexForReverieData = this._props.bodyState.indexForReverieData;
      var headline = reverieData[indexForReverieData].attributes.headline;

      var normalizedHeadline = this._normalize(headline);

      return "/".concat(section, "/").concat(normalizedHeadline);
    }
  }]);

  return Reload;
}();



/***/ }),

/***/ "./app/classes/ReverieParams.js":
/*!**************************************!*\
  !*** ./app/classes/ReverieParams.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReverieParams; });
/* harmony import */ var _Params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Params */ "./app/classes/Params.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ReverieParams =
/*#__PURE__*/
function (_Params) {
  _inherits(ReverieParams, _Params);

  function ReverieParams(type, params, prevProps) {
    var _this;

    _classCallCheck(this, ReverieParams);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReverieParams).call(this, type, params, ['headline']));
    _this.lastHeadline = prevProps && prevProps.match.params.headline;
    return _this;
  }

  _createClass(ReverieParams, [{
    key: "headlineToIndex",
    value: function headlineToIndex() {
      if (!this.headline) return -1;
      return this._oneToIndex();
    }
  }, {
    key: "headline",
    get: function get() {
      return this._validateParam(this._one, this._paramNames[0]);
    }
  }]);

  return ReverieParams;
}(_Params__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./app/classes/ScrollHandling.js":
/*!***************************************!*\
  !*** ./app/classes/ScrollHandling.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollHandling; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import ReactGA from 'react-ga';
var ScrollHandling =
/*#__PURE__*/
function () {
  function ScrollHandling(location) {
    _classCallCheck(this, ScrollHandling);

    this._location = location;
    this._type = location.type;
  }

  _createClass(ScrollHandling, [{
    key: "_swappingProjects",
    value: function _swappingProjects(prevProps) {
      if (this._type !== 'projects') return false;
      var prevIndexForProjectData = prevProps.bodyState.indexForProjectData;

      var currentIndexForProjectData = this._location.params.projectNameToIndex();

      return currentIndexForProjectData !== prevIndexForProjectData;
    }
  }, {
    key: "resetElementTop",
    value: function resetElementTop(overflowRef, prevProps) {
      var overflowRefExists = overflowRef.current !== null;

      if (overflowRefExists) {
        if (overflowRef.current.scrollTop !== 0) {
          var updateScrollTop = this._type === 'projects' ? this._swappingProjects(prevProps) : true;

          if (updateScrollTop) {
            // ReactGA.event({
            //   category: `Reset element top for ${this._type}`,
            //   action: 'Swapping content set within location'
            // });
            overflowRef.current.scrollTop = 0;
          }
        }
      }
    }
  }, {
    key: "resetWindowTop",
    value: function resetWindowTop() {
      // Useing pageYOffset instead of scrollY
      // for cross-browser support, per MDN
      if (window.pageYOffset > 0) {
        // ReactGA.event({
        //   category: `Reset window top for ${this._type}`,
        //   action: 'Changing location'
        // });
        window.scroll({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  }]);

  return ScrollHandling;
}();



/***/ }),

/***/ "./app/classes/State.js":
/*!******************************!*\
  !*** ./app/classes/State.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return State; });
/* harmony import */ var _Referrer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Referrer.js */ "./app/classes/Referrer.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var State =
/*#__PURE__*/
function () {
  function State(props, location) {
    _classCallCheck(this, State);

    var referrer = new _Referrer_js__WEBPACK_IMPORTED_MODULE_0__["default"](props);
    this._referrer = referrer.location;
    this._params = location.params;
  }

  _createClass(State, [{
    key: "getIndex",
    value: function getIndex(type) {
      var params = this._params;
      var referrer = this._referrer;
      var index;

      switch (type) {
        case 'article':
          if (referrer === 'journalism') {
            index = this._params.headlineToIndex() !== -1 ? this._params.headlineToIndex() : this._params.firstArticleToMatchPublication;
          }

          break;

        case 'chapter':
          if (referrer === 'chapter') {
            index = params.titleToIndex();
          }

          break;

        case 'project':
          if (referrer === 'projects') {
            index = params.projectNameToIndex();
          }

          break;

        case 'projectPics':
          if (referrer === 'projects') {
            index = params.projectThumbnailToIndex();
          }

          break;

        case 'publication':
          if (referrer === 'journalism') {
            index = params.publicationToIndex();
          }

          break;

        case 'reverie':
          if (referrer === 'reverie') {
            index = this._params.headlineToIndex();
          }

          break;

        default:
          break;
      }

      return index && index !== -1 ? index : 0;
    }
  }, {
    key: "rebuild",
    value: function rebuild(setStateCallback) {
      var indices = this._convertParamsToIndices(); // Only -1 if explicitly set by a params method


      if (indices.one !== -1 && indices.two !== -1) {
        setStateCallback(indices.one, indices.two);
      }
    }
  }, {
    key: "_convertParamsToIndices",
    value: function _convertParamsToIndices() {
      var params = this._params;
      var referrer = this._referrer; // Variables will only be -1 if explicitly set by a params method
      // Thus, single param routes will pass the rebuild test w/o fuss

      var indexOne;
      var indexTwo;

      switch (referrer) {
        case 'chapter':
          indexOne = params.titleToIndex();
          break;

        case 'journalism':
          indexOne = params.publicationToIndex();
          indexTwo = params.headlineToIndex();
          break;

        case 'projects':
          indexOne = params.projectNameToIndex();
          indexTwo = params.projectThumbnailToIndex();
          break;

        case 'reverie':
          indexOne = params.headlineToIndex();
          break;
      }

      return {
        one: indexOne,
        two: indexTwo
      };
    }
  }]);

  return State;
}();



/***/ }),

/***/ "./app/classes/StoryParams.js":
/*!************************************!*\
  !*** ./app/classes/StoryParams.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StoryParams; });
/* harmony import */ var _Params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Params */ "./app/classes/Params.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var StoryParams =
/*#__PURE__*/
function (_Params) {
  _inherits(StoryParams, _Params);

  function StoryParams(type, params, prevProps) {
    var _this;

    _classCallCheck(this, StoryParams);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StoryParams).call(this, type, params, ['title']));
    _this.lastChapter = prevProps && prevProps.match.params.title;
    return _this;
  }

  _createClass(StoryParams, [{
    key: "titleToIndex",
    value: function titleToIndex() {
      if (!this.title) return -1;
      return this._oneToIndex();
    }
  }, {
    key: "title",
    get: function get() {
      return this._validateParam(this._one, this._paramNames[0]);
    }
  }]);

  return StoryParams;
}(_Params__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./app/data/about/about.md":
/*!*********************************!*\
  !*** ./app/data/about/about.md ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"page":"about","type":"description","updated":"11-11-18"},"body":"\nJames Abels is a NYC-based Web developer.\n\nA lawyer and former start-up founder, Abels was a staff reporter for Forbes and Mergermarket (then Pearson, now Acuris). He wrote about technology, digital media, venture capital, and mergers and acquisitions.\n\nAbels is available for front- and back-end technology projects, particularly those involving creative consumer narratives. He's currently working with Upendra Shardanand on a new type of media product for Facebook Messenger, slated for soft launch in 2019.\n","frontmatter":"page: about\ntype: description\nupdated: 11-11-18"}

/***/ }),

/***/ "./app/data/about/home-page-about-short.md":
/*!*************************************************!*\
  !*** ./app/data/about/home-page-about-short.md ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"page":"home","type":"short-description","updated":"11-23-18"},"body":"\nI'm a Web developer, lawyer, and former start-up founder. I used to write about technology, digital media, and M&A as a staff reporter for Forbes and Mergermarket. Now I write code for consumer tech projects with creative narratives.","frontmatter":"page: home\ntype: short-description\nupdated: 11-23-18"}

/***/ }),

/***/ "./app/data/about/home-page-about.md":
/*!*******************************************!*\
  !*** ./app/data/about/home-page-about.md ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"page":"home","type":"long-description","updated":"11-23-18"},"body":"\nI'm a Web developer, lawyer, and former start-up founder. I used to write about technology, digital media, and M&A as a staff reporter for Forbes and Mergermarket. \n\nNow I write code for consumer technology projects with creative narratives. For instance, one client is building a new type of media product for Facebook Messenger.","frontmatter":"page: home\ntype: long-description\nupdated: 11-23-18"}

/***/ }),

/***/ "./app/data/clips sync recursive \\.md$":
/*!***********************************!*\
  !*** ./app/data/clips sync \.md$ ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./blouin-news-a-huge-tech-v-startup-battle-simmers.md": "./app/data/clips/blouin-news-a-huge-tech-v-startup-battle-simmers.md",
	"./blouin-news-can-apple-be-out-appled.md": "./app/data/clips/blouin-news-can-apple-be-out-appled.md",
	"./blouin-news-commodity-beckons-new-tv-services-from-comcast-and-more.md": "./app/data/clips/blouin-news-commodity-beckons-new-tv-services-from-comcast-and-more.md",
	"./forbes-all-things-considered.md": "./app/data/clips/forbes-all-things-considered.md",
	"./forbes-boxee-wants-to-kill-your-television.md": "./app/data/clips/forbes-boxee-wants-to-kill-your-television.md",
	"./forbes-godtube.md": "./app/data/clips/forbes-godtube.md",
	"./forbes-how-to-make-readers-really-want-you.md": "./app/data/clips/forbes-how-to-make-readers-really-want-you.md",
	"./forbes-live-from-the-internet.md": "./app/data/clips/forbes-live-from-the-internet.md",
	"./forbes-owning-the-news.md": "./app/data/clips/forbes-owning-the-news.md",
	"./forbes-putting-newspapers-on-trial.md": "./app/data/clips/forbes-putting-newspapers-on-trial.md",
	"./forbes-rupert-murdoch-big-man-on-campus.md": "./app/data/clips/forbes-rupert-murdoch-big-man-on-campus.md",
	"./forbes-slowing-fast-company.md": "./app/data/clips/forbes-slowing-fast-company.md",
	"./forbes-strapped-local-stations-look-to-web-for-cash.md": "./app/data/clips/forbes-strapped-local-stations-look-to-web-for-cash.md",
	"./forbes-the-paperless-town.md": "./app/data/clips/forbes-the-paperless-town.md",
	"./ft-electronic-arts-standing-firm-on-usd-26-offer.md": "./app/data/clips/ft-electronic-arts-standing-firm-on-usd-26-offer.md",
	"./shu-breaking-news-online.md": "./app/data/clips/shu-breaking-news-online.md",
	"./shu-cracking-the-college-code.md": "./app/data/clips/shu-cracking-the-college-code.md",
	"./shu-giving-physics-a-good-name.md": "./app/data/clips/shu-giving-physics-a-good-name.md",
	"./shu-the-bone-doctors-knees.md": "./app/data/clips/shu-the-bone-doctors-knees.md",
	"./shu-the-clean-air-catalyst.md": "./app/data/clips/shu-the-clean-air-catalyst.md",
	"./slate-adventures-in-state-bailouts.md": "./app/data/clips/slate-adventures-in-state-bailouts.md",
	"./uva-charting-an-east-west-passage.md": "./app/data/clips/uva-charting-an-east-west-passage.md",
	"./uva-is-the-wine-trade-recession-proof.md": "./app/data/clips/uva-is-the-wine-trade-recession-proof.md"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app/data/clips sync recursive \\.md$";

/***/ }),

/***/ "./app/data/clips/blouin-news-a-huge-tech-v-startup-battle-simmers.md":
/*!****************************************************************************!*\
  !*** ./app/data/clips/blouin-news-a-huge-tech-v-startup-battle-simmers.md ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"A huge Tech vs. Start-up Battle Simmers","publication":"Blouin News","position":"Freelance"},"body":"\nA new battle in the war between lithe start-ups and huge tech is\nsimmering.\n\nIt’s been bubbling for some time. But Intel brought the next major round\ncloser to a head last week when it said it would buy start-up Mashery for\na reported \\$180 million. The seven-year-old business helps people manage\ntheir application programming interfaces, or APIs.\n\nAn API is like the connector on a Lego block. Developers use it to connect\nsites and apps to a variety of technologies. Thus, they don’t have to\ncreate these technologies on their own.\n\nIntel’s move is simultaneously important and ironic. It was once a part of\nthe same start-up scene it is now trying to penetrate by buying Mashery.\nSo, on one hand, Intel wants to be at the center of an Internet-focused\ndeveloper ecosystem. But, on the other, the need to buy into it shows huge\ntech firms like Intel need help relating to a lot of these start-up\ntechnologists.\n\nAs an example, take its new foray into media. Intel is developing a\nsubscription-based online TV service. It wants to compete with cable\ncarriers by selling a high-end package of highly interactive video\nprogramming delivered via its own set-top box.\n\nForget the merits of the strategy. What’s interesting is that the start-up\necosystem is loaded with companies pursuing similar businesses. These\nrange from helping producers sell video to audiences directly, to using\nsocial media to aggregate video into personal channels.\n\nIn other words, Intel wants to use Mashery to help these smaller players\nshape markets, and it also wants to compete with them by dominating the\nsame markets they are trying to shape.\n\nClearly, the relationship between huge tech and newer Internet-based\ndevelopers is complicated.\n\nMost of these developers want to build software quickly using self-serve,\nplug-and-play technologies, such as APIs. By contrast, huge tech often\nworks more slowly, jumps into big markets directly, and prefers software\nthat relies on high-cost components and services.\n\nThe problem is that the start-up approach is less profitable, which is\nunsettling for huge tech.\n\nTake Oracle. When it bought Sun Microsystems in 2009, the famed MySQL\ndatabase came with it. MySQL is free-to-use, so is relied on by a lot of\nInternet-era developers. But, in 2011, Oracle added some extensions to it\nthat aren’t as free-to-use as many of these developers would like.\n\nThat decision helped encourage a group of them to create a new,\nindependent version named MariaDB. Now, talk is bubbling up online about\nswitching between the two databases.\n\nThe example shows how hard it can be for huge tech to work with developers\nwho were formed in the Internet age. In other words, can Intel buy Mashery\nand satisfy this part of the start-up’s clientele, or will it set policies\nthat push them toward rivals like Apigee, MuleSoft, or 3scale?\n\nMicrosoft, the poster child of huge tech, is the canary in this coal mine.\nIt followed Amazon online to offer a “cloud” services platform roughly\nthree years ago. Its Windows Azure is reportedly pretty good, but hasn’t\nstoked the same fire online as Amazon’s Web Services division.\n\nThat’s one reason Microsoft recently said it will match some of Amazon’s\nWeb Services pricing. It’s also been adding features to woo more\nInternet-oriented developers.\n\nMoves like these could establish whether huge tech can co-exist with\nnew-era software firms – or if these start-ups will shrink the technology\nbusiness as much as they’ve shrunk everyone else’s.\n","frontmatter":"headline: 'A huge Tech vs. Start-up Battle Simmers'\npublication: 'Blouin News'\nposition: 'Freelance'"}

/***/ }),

/***/ "./app/data/clips/blouin-news-can-apple-be-out-appled.md":
/*!***************************************************************!*\
  !*** ./app/data/clips/blouin-news-can-apple-be-out-appled.md ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"Can Apple Be Out-Appled?","publication":"Blouin News","position":"Freelance"},"body":"\nCan Apple wow the world a third time? It certainly seems to think so.\n\nTim Cook, Apple’s chief executive, gave a long interview to the Wall\nStreet Journal this month. The top executive used the conversation to\naddress persistent concerns among investors that Apple is fresh out of\ninnovative new ideas. He assured it that Apple is working on new product\ncategories.\n\nIn other words, it’s working on products that are different from the\ncomputers, smartphones and tablets, it sells today. But, that doesn’t mean\nApple is working on products that no one has ever seen before. That’s what\npeople expect from it these days. After all, its most recent successes\nstemmed from its uncanny ability to release products that no one’s ever\nseen before.\n\nFor instance, Google built a phone prior to the iPhone’s arrival. But, it\nwasn’t anything like the all-glass, futuristic smartphone Apple imagined.\nAs a result, Google reportedly scrapped its project to start again. The\niPad offers a similar story. Microsoft called tablets the future of\ncomputing for years. And yet, people ignored the message.\n\nWhy? They didn’t really like Microsoft’s Windows-centric vision of tablet\ncomputing. But, they liked Apple’s. So, as far as anyone is concerned, it\ninvented both markets from whole cloth.\n\nBut, things have changed. The world watched Apple’s incredible magic trick\ntwice now. So, a lot of equally wealthy and intelligent companies have\ninvested a lot of money in following suit. This is especially clear in\n\nthe arena of “wearable computers.”\n\nIn 2012, a lot of people decided these devices were the best way to\nout-Apple Apple.\n\nThe idea was arguably jump-started by a small startup named inPusle (now\nPebble). The company shattered records in mid-2012 when people gave it\nover \\$10 million on Kickstarter to help it build its Pebble smartwatch.\nThe Pebble moment made it famous, and suggested a huge untapped market for\nwearable computers.\n\nGoogle reinforced the point by showing off a Google Glass prototype around\nthe same time. Glass is a monocle that people wear over one eye to project\na digital landscape on the world around them.\n\nThen, the floodgates seemed to open.\n\nNike released the Fuelband in 2012, helping to kick off a genre of\nhigh-tech bracelets that track telemetry about the human body. A year\nlater, Samsung released its Galaxy Gear smartwatch. And, companies like\nGoPro released a new generation of small wearable video cameras to help\npeople record themselves 24/7. They must be somewhat popular. GoPro is now\ngoing public.\n\nNot enough? Oculus VR also blew people’s minds in 2012 when it\nsuccessfully Kickstarted its new take on virtual reality goggles. Like the\nPebble, the Oculus Rift inspired the imagination. Since then, several\ncompetitors have appeared with their own take on Oculus’s inspired idea.\n\nThe point here is that new product categories have exploded.\n\nNew ones could still come along, but that’s probably less likely than\never. Let’s consider this in the context of some of biggest and brightest\nrumors about Apple’s new technologies. The next version of iOS is said to\nbe focused on tracking health stats about its users. This would put it in\ndirect competition with a limitless universe of Apple-compatible health\ngadgets.\n\nSimilarly, Apple is said to be working on some sort computer-based TV or\nset-top box. This market is already flooded with entrants. And, a new\nrumor surfaced just this month that Apple has 200 people working on a new\nsmartwatch.\n\nApple has a better shot than anyone at getting these products just right.\nBut, for the first time in years, its new technologies could also just get\nlost in a sea of gadgets — like tears in rain.\n","frontmatter":"headline: 'Can Apple Be Out-Appled?'\npublication: 'Blouin News'\nposition: 'Freelance'"}

/***/ }),

/***/ "./app/data/clips/blouin-news-commodity-beckons-new-tv-services-from-comcast-and-more.md":
/*!***********************************************************************************************!*\
  !*** ./app/data/clips/blouin-news-commodity-beckons-new-tv-services-from-comcast-and-more.md ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"Commodity Beckons New TV Services from Comcast, Microsoft, and More","publication":"Blouin News","position":"Freelance"},"body":"\nGracenote offered an important lesson about internet technology last week.\n\nThe company, best known for technology that identifies music, released a\ntool that helps developers build apps that know what is playing on nearby\ntelevision sets. The tool, named eyeQ, uses a mobile device’s built-in\nmicrophone to compare a show’s audio with an online database about TV.\nThis means the device can be turned into a second screen featuring\ninteractive content about the show.\n\nTelevision networks thought this kind of “audio fingerprinting” would help\nthem stave off new online media rivals just a few years ago. For instance,\nThe Nielsen Company, which tracks TV ratings, introduced a similar\ntechnology in 2010 for its partners named Media-Sync. The ABC TV network\ngot an Emmy nomination by using it with some shows, including “Grey’s\nAnatomy.”\n\nNow, thanks to Gracenote, anyone can do the same thing.\n\nThe new reality is a powerful reminder that media isn’t the only thing\nturning into a commodity online. Technology is too. The lesson comes at an\nimportant moment for big TV firms and huge tech companies. Both groups are\nreadying a new generation of TV services that will add internet-style\ninteractivity to traditional video programming.\n\nThe biggest splash is coming from Microsoft right now. It unveiled the\nXbox One last month. The next generation game-turned-entertainment box is\nbilled as an entertainment extravaganza. The top of Microsoft’s newly\nformed entertainment studios says the device will merge high-end\nstory-telling with incredible interactivity.\n\nBig media execs are excited. Steven Spielberg is developing a TV show for\nthe Xbox One that’s set in the Halo video-game universe. And both the NFL\nand ESPN sports network are planning content for the box too.\n\nMicrosoft isn’t the only one betting on a new closed, but highly\ninteractive TV service.\n\nIntel is developing its own set-top box and service with similar\naspirations. Comcast is preparing new internet-based technology to more\neasily combine its video with interactive features. And Time Warner Cable\nplans to send video directly to internet TVs from Samsung through an app\nthat will make its video very interactive.\n\nThese companies all hope their sophisticated new services will beat back a\nsea of internet rivals.\n\nGlenn Britt, the chief executive of Time Warner Cable, puts it like this:\n“I think all this over-the-top stuff [internet media] is largely about\nfunctionality that’s enabled by technology that people haven’t been able\nto get with our traditional technology.”\n\nThat is true. The problem is that the “traditional technology” operated in\na vacuum. Only a few companies could afford to build and run broadcast,\ncable, or satellite transmission systems.\n\nNow, the internet lets anyone build their online equivalent. In other\nwords, Britt and company are creating technology that won’t stay unique\nfor long. It’s only a matter of time before someone offers a cheaper,\neasier, more advanced internet version that anyone can use.\n\nThis “Gracenote problem” is just a fact-of-life today.\n\nMedia-tech executives are sure to say they still have the advantage. After\nall, they have the professional TV shows that people love. They’d be right\nif their lock on this type of content hadn’t just officially slipped.\n\nThis month, DreamWorks Animation – a major Hollywood studio – said it\nwould produce 300 hours of serialized TV programming for Netflix. The\nstudio has struggled to find hits of late, so wants to exploit the biggest\nunexploited opportunity it can find. Apparently, that’s internet-only\nvideo. The big studio’s embrace of Netflix is huge.\n\nIt means broadcast and cable companies are no longer seen as the masters\nof the market’s best video. Thus, their new systems – and huge tech’s too\n– are destined to compete with smaller online rivals that pair equally\ngreat technology with equally great video.\n\nDon’t worry, though. Gracenote will still know what you’re watching.\n","frontmatter":"headline: 'Commodity Beckons New TV Services from Comcast, Microsoft, and More'\npublication: 'Blouin News'\nposition: 'Freelance'"}

/***/ }),

/***/ "./app/data/clips/forbes-all-things-considered.md":
/*!********************************************************!*\
  !*** ./app/data/clips/forbes-all-things-considered.md ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"All Things Considered Digitally","publication":"Forbes","position":"Staff reporter"},"body":"\nNational Public Radio has seen its share of shake-ups lately, including\nthe departure of chief executive Ken Stern in March. Soon after, an NPR\njournalist reported the reason was a failure \"to convince the board where\nlocal stations fit into the digital age, when listeners can bypass\nold-fashioned FM stations.\" Like all media, NPR — which supplies\nprogramming to over 860 local radio stations — is struggling with the\nresults of the Internet's ability to cheaply distribute content.\n\nLate last month, Kinsey Wilson joined NPR as senior vice president and\ngeneral manager of NPR Digital Media from Gannet- owned USA Today, where\nhe was executive editor. One early goal: to boost NPR's traffic, which\ncomScore estimates at some 2.2 million unique visitors in September.\nForbes.com talked with him about the future of public radio and the role\nof its 38-year old affiliate network. Here's an edited version of what he\nhad to say:\n\nForbes.com: What attracted you to the NPR job after running Internet\noperations at USA Today?\n\nKinsey Wilson: I think NPR is at a point where it's really poised to take\nadvantage of digital. I don't think, in the long term, we can think of\nourselves as a radio or purely as an audio news organization.\n\nDo you have any examples of how that's coming along?\n\nWe're in the process of integrating our editorial digital staff and the\nrest of the editorial staff. Dick Meyer, who heads the Digital Editorial\nStaff, reports to me and to Ellen Weiss, who is the VP for news.\n\nIncreasing the unique visitors to NPR content is a priority online, how\ndo you accomplish that?\n\nWe've moved from being primarily destination sites to moving into an arena\nwhere it is all about distributed media. We've got an architecture that\nsupports open distribution of our content. So you try to create a virtual\ncircle between high-quality content, ease of distribution and a connection\nwith audiences that inspires them to distribute links, etc. ... I think\nthat's where the real opportunity for traffic growth is.\n\nSo you are trying to work with the local affiliates digitally and not\nsupplant them?\n\nDeepening and improving our relationships with our member stations is a\nbig priority. It's difficult to say exactly how technology will change the\nways in which the content is distributed and the relationship between the\nmember stations and NPR in Washington.\n\nIf you're looking at consumer preference, the answer may not be the\nlocal affiliate's site. What then?\n\nIn this environment you cannot ultimately fight the tide of consumer\npreference. I think the good news is that that's the subject of open,\ntransparent, healthy conversation within the organization at this point.\n\nBut you think there's time to figure it out?\n\nThe speed in which our business is being challenged is very different than\nthat of most of our commercial brethren. It does so far have the advantage\nof not being forced to react to things in quite the same kind of time\nframe. [One reason is] our audience is growing. There is a tremendous\nopportunity for the local stations, particularly with newspapers suffering\nthe kind of staff cuts and reductions that they have, to become an even\nmore robust provider of news to their communities.\n\nDoes NPR offer something particularly valuable to digital news\nconsumers?\n\n[People] want analysis. I think they also want a connection with\nindividuals; they want to understand something about the person that\nstands behind the news report. I think the mix of authority and\nfamiliarity that NPR has managed to combine on air is something that\ntranslates very nicely to the Web, where the traditional, formal voice of\nauthority of a newspaper or even a traditional network television\nbroadcast does not meet the expectations of Web readers.\n","frontmatter":"headline: 'All Things Considered Digitally'\npublication: 'Forbes'\nposition: 'Staff reporter'"}

/***/ }),

/***/ "./app/data/clips/forbes-boxee-wants-to-kill-your-television.md":
/*!**********************************************************************!*\
  !*** ./app/data/clips/forbes-boxee-wants-to-kill-your-television.md ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"Boxee Wants to Kill Your Television","publication":"Forbes","position":"Staff reporter"},"body":"\nAvner Ronen thinks he can kill cable television. How? With software that\naggregates all the Web's video, music and media into a slick interface.\n\nWhat's more, Ronen thinks he can convince broadcasters and others to\nencourage cable's death by paying him a $.05 to $.10 fee every time\nsomeone watches or listens to something his software recommends.\n\n\"We think it becomes a cable replacement for a lot of young people,\" says\nRonen, who has raised $1 to $3 million for his New York-based start-up,\nBoxee.\n\nCrazy? Maybe. Gutsy? You bet. While there's no shortage of people looking\nto steal a television advertising market worth some \\$65 billion, Boxee's\nfive founders — who learned their trade working in the Israeli army —\nthink they can take advantage of content producers' need to find audiences\nby creating what is essentially a television with limitless channels and\nofferings that's easy to use. Kind of a personalized YouTube on your\ndesktop.\n\nBoxee's server makes recommendations to people based on their past\npreferences, the media stored on their hard drives and what friends from\nsocial networks prefer. Essentially, it \"moves\" content, creating an\nadvertising incentive for media to give him a cut of ad sales. Ronen\nargues, people — particularly kids — will instantly give up cable service\nif Internet media were easily aggregated in one place.\n\nAt the moment, there is little data to support his idea. But there is\nplenty that shows Web video is exploding. According to a study by\nForrester Research earlier this month, 40% of Internet users watch more\nthan an hour of online video a week, and some 55% of them are 13 to 34\nyears old. ABI Research reported the number of consumers watching video in\nan Internet browser doubled in the last year to some 63% in a study of 985\nhouseholds; comScore said in July that 75% of all Internet users are\nwatching video online; and Cisco Systems recently reported its expectation\nthat Internet traffic for video seen on a computer will account for some\n25% of all Internet traffic this year. It was 11% in 2006.\n\nStill, Howard Horowitz, whose Horowitz Associates researches the cable and\nInternet industries, says there are no real studies investigating a link\nbetween increasing Web video consumption and canceled cable subscriptions.\n\"In a linear sense, it's very hard to make a prediction,\" he says of how\nthe field develops. His data show cable subscriptions for the 18 to 34 set\nhave only decreased 10% since 2005, usually in favor of technologies such\nas digital cable. But a representative notes it's still in its early days,\nand Horowitz is continuing to study the topic in greater depth.\n\nRonen says the future is clear. And, he says, he's already found the\npeople who prove the point: Apple users (he is one). The famously young,\nhip group is ready to turn their iBooks and iMacs into televisions and\nstereos that tap all Internet media, he says. While Apple's Front Row\ntries to do it, Ronen says it fails by being tightly tied to the company's\niTunes media store. Boxee's first version has been written for the Mac.\n\nEarlier this month, they released instructions to easily upgrade (or hack)\nan AppleTV with their software. (They've also hacked Apple's remote to\nwork with it.) The company claims far more than 10,000 people are already\nusing Boxee in a private test and says a similarly sized group has signed\nonto a waiting list to join them. The software goes public later this\nyear.\n\nIf it sounds a bit grand, it is. Despite a novel business model, Boxee's\ngot its share of challenges ahead. The first is that, despite its claims,\nit doesn't currently aggregate all the Web's video — but it is getting\nbetter. This week it added CBS, Comedy Central, MySpaceTV and Hulu to its\nrepertoire. Ronen also says Boxee's in talks with all the major networks\nand content aggregators like Netflix to fix that. Why shouldn't they work\nwith him, argues Ronen, if he can find them viewers to increase the volume\nof ad sales.\n\nAnother equally thorny problem: To access all the media stored on a hard\ndrive, Boxee does not run inside a Web browser. Forcing people to download\nsoftware is increasingly impossible in an Internet world that accesses\ninformation and programs via the Web. The strategy just about killed off\nJoost — a high profile Web video portal that raised \\$40 million from the\nlikes of CBS and Viacom — earlier this year. Boxee is now working with\nJoost, which recently launched a browser version, on a new partnership.\n\nOne thing is for sure, Horowitz says. The stakes are as big as Ronen\nthinks. \"If big media is going to be complacent, they'll lose going\nforward.\"\n","frontmatter":"headline: 'Boxee Wants to Kill Your Television'\npublication: 'Forbes'\nposition: 'Staff reporter'"}

/***/ }),

/***/ "./app/data/clips/forbes-godtube.md":
/*!******************************************!*\
  !*** ./app/data/clips/forbes-godtube.md ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"GodTube","publication":"Forbes","position":"Staff reporter"},"body":"\nWhen Bobby Gruenewald joined LifeChurch.tv as a pastor in 2001, he turned\nto an obvious place to build membership: the Internet. A former technology\nexecutive, the daily tools of his trade are social media forums like\nFacebook and Twitter and a free iPhone application with a Bible translated\ninto 22 languages.\n\n\"The church, the broader church, is finally seeing ways to engage with\npeople,\" says Gruenewald, who oversees all of his church's Web operations.\nWhile his 13-year-old evangelical organization has attendance of some\n23,000 people at 13 physical churches around the country, its online tools\nare a key element in attracting new members. And particularly important\nthese days are the 1,800 Web video streams it serves up on average for its\n11 weekly sermons.\n\nSome of the same forces destroying major media are changing the face of\neven the world's oldest media formats like sermons. From News Corp.'s\nrecently acquired Beliefnet to the user-generated video start-up GodTube,\nthe Web is becoming an online hub for religious communication. As a\nresult, churches are using Web video to attract the next generation of\nparishioners.\n\n\"I see a lot of people expecting it or asking for it,\" says Alex Hood, the\nCrossing Church's director of media and technology. Today, his Tampa,\nFla.-based evangelical church streams services to some 500 to 600 people\nevery weekend. Just 18 months ago, when Hood started, it was far smaller\nat only 150.\n\nThose numbers may be set to jump this month as churches capitalize on the\nChristmas season. Multicast Media, which negotiates discounted rates from\nthe content delivery network Akamai to stream these services for some 800\nmostly evangelical churches around the U.S., predicts it will serve up\nwell over 5,000 live streams this month.\n\nMost months average 4,000 — a number that already represents tremendous\nrecent growth. Alan Riley, director of Web operations, says the\neight-year-old company was averaging just 2,000 monthly streams 18 months\nago.\n\n\"The growth has continued in spite of the economic slowdown,\" he says. No\nwonder. Religious groups are looking for younger parishioners, says\nQuentin Schultze, a communications professor focusing on religion at\nCalvin College in Michigan. The Internet has made competing for their\nattention harder than ever he says. The Internet is teaching people —\nparticularly younger ones — that they can demand convenience in how they\nconsume all types of messages, including religious ones.\n\n\"I think that goes to the cultural shift of the younger generations coming\nup, and getting used to an on-demand lifestyle,\" says Greg Stielstra, who\njust co-wrote a book called Faith-Based Marketing: The Guide To Reaching\n140 Million Christian Consumers.\n\nOne big difference between media sites and religious ones: how long\nviewers stay tuned. Consider the Crossing Church where Hood reports\nviewers watch his streams for an average of 60 to 80 minutes. At\nLifeChurch.tv, the time is less at 25 to 35 minutes, but Gruenewald says\nthey are thrown off by massive accidental Web traffic of people he doesn't\naverage into his stream totals because they leave so quickly.\n\nThough it depends on the type of content in a broadcast, Dan Rayburn,\nexecutive vice president of StreamingMedia.com, says people often watch\nlive events online for 10 minutes or less.\n\nIt isn't all good news. Streaming Web video gets more expensive the more\npopular it becomes, so in the early days Rayburn says the cost of\ndelivering thousands of gigabytes per show to hundreds of people over the\nInternet can be relatively inexpensive based on rates that range as high\nas \\$0.50 per gigabyte. But the more people start tuning in, the bigger the\ncost becomes.\n\nAnd online viewers tend to donate less as well. At LifeChurch.tv people\ngive an average of $8 to$10 per week online — far lower than the $25-$35\nthey donate in person. Perhaps it's not surprising then that the church\nsees the format as a way to help drive people to physical locations,\nrather than a destination in itself.\n\n\"We're not viewing it as how can we make it be the big revenue stream for\nthe church,\" says Gruenewald.\n","frontmatter":"headline: 'GodTube'\npublication: 'Forbes'\nposition: 'Staff reporter'"}

/***/ }),

/***/ "./app/data/clips/forbes-how-to-make-readers-really-want-you.md":
/*!**********************************************************************!*\
  !*** ./app/data/clips/forbes-how-to-make-readers-really-want-you.md ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"How to Get Readers to Really Want You","publication":"Forbes","position":"Staff reporter"},"body":"\nForget Anna Wintour, famed editrix of Vogue. Just like New York's Fashion\nWeek, which ended last Friday, she's so over. The big ideas for keeping\nVogue hot are coming from the business department down the hall — and it\nis betting big on the appeal of Web television.\n\nAt the top of the list: Model.Live, a 12-episode Web video series now\nplaying on Vogue.TV that follows three young women as they try to break\ninto the business while journeying to Fashion Weeks around the world. The\nshow has been viewed over a million times across the Internet since\nlaunching in late August.\n\nNot only is there original content under the Vogue name, but there's money\nbehind the effort too: The show is sponsored by EXPRESS.com and produced\nby IMG Sports & Entertainment. Vogue is coy about the numbers, but some\nreports place production costs at $3 million. With single magazine ad\n  pages going for as much as$121,000, show sponsors may be getting\nexclusive access toVogue's name — in full motion video — on the cheap.\n\nThat's quite a powerful advertising pitch for the magazine industry. Faced\nwith declining circulation and stagnant Web strategies, print products\nlike Vogue are becoming online television networks. Last week, Vogue-owner\nConde Nast launched Glamour.TV for Vogue's sister magazine.\n\n\"The advertisers are pursuing what's trendy,\" says Rebecca McPheters, a\nmagazine industry consultant. \"This way, the magazine publishers can say\nwe're aggressively growing and developing new media as well.\"\n\n\"Branded\" shows like Model.Live are an increasingly popular route into the\nWeb TV business. Unlike video ads sold against editorially created Web\nshows, advertisers work directly with business departments to create and\nunderwrite branded programs. It's a cost effective model because it\ndoesn't steal editors away from focusing on the print publication.\n\nThat is, after all, where Vogue still makes its money. Last year, the\nPublisher's Information Bureau reported it had roughly \\$419 million in\nsales from some 3,201 ad pages.\n\nPutting Vogue's business chief, publisher Tom Florio, in charge of content\nnamed afterVogue is a powerful example of how far magazines will go to\nreinvent themselves as powerhouse digital properties.\n\nTinkering with an editorial model that has kept Vogue printing for 116\nyears may be necessary. In the first six months of 2008, Vogue's paid\nsubscriptions fell 2.1% by dropping year-over-year to 782,397. More\ntroubling, Compete.com reports its Style.com Web site only had some\n565,000 unique visitors in August. That's not much compared to the almost\n4.8 million visitors at Glam.com, an Internet media upstart that caters to\nwomen about topics like fashion.\n\nA Vogue spokesperson counters that Compete’s numbers are unreliable and\nsays Conde Nast’s internal figures show some 1,474,340 unique visitors to\nStyle.com last month.\n\nStill, what seem clear is that dangerous fault lines are forming beneath\nsome of the industry's biggest names. Though Florio saysVogue is set to\nhave its second-best year of ad sales ever, he's worried about keeping the\nbrand relevant for the next generation of readers. So he — not Wintour —\nis creating Web shows like Model.Live with his 16-year-old daughter in\nmind.\n\n\"I'm comfortable with it, because I feel that the principals of what we're\ndoing are based on the same principals as the brand,\" he says. If Wintour\nobjected to the content, he says he would kill it. A Conde Nast\nspokesperson said that Wintour understands Vogue.TV is run by the business\ndepartment and stays informed about its programs. Wintour is attending\nFashion Weeks in Paris and Milan and was unavailable for comment.\n\nAt the helm of Vogue.TV, Florio is able to experiment with the medium in\nways Wintour can't by offering advertisers like Express a value the\nmagazin can't provide.\n\nFor instance, the clothing company sells clothes directly to the Vogue.TV\naudience in an e-commerce store that sits beside eachModel.Live video.\nExpress keeps the sales in an effort to avoid diluting Wintour's\nfashion-setting tastes. \"What we're doing is a cost-effective business\nmodel,\" says Florio.\n\nIf he can build a business off of these Web shows, the upside for Vogue\ncould be compelling. Web video portals are hungry to find fresh content\nthey can syndicate that isn't tangled up in the complex licensing rights\nthat often gum up deals with network or cable shows.\n\n\"I can assure you that Vogue did not give us their content for free,\" says\nTidalTV CEO Scott Ferber. His site is one of five Web video sites on which\nModel.Live is also being distributed. \"They are making money on it.\" That\ncould wind up being a sweet new source of revenue forVogue.\n\nStill, syndication fees like these are based on the reputation of Vogue\nand its editors — not partners like Express. That highlights the risk:\nThese new efforts could dilute the Vogue brand.\n\n\"I talk about the 'elasticity of content' — how far out can you take it to\nsatisfy advertisers is something of a concern for sure,\" says Tom Hartle,\nowner of the influential music magazine Spin. Also facing circulation\ndecline, his magazine is about to announce its own branded show about\ninternational music that will run in 63 markets worldwide. \"I think a lot\nof this innovation is coming out of the business departments and that can\nbe problematic to the healt of the brand,\" he says.\n\nFor now, the point may be moot. Florio says Vogue.TV's shows couldn't\nsurvive without the magazine's support. So, on second thought, don't\nforget about Wintour just yet.\n","frontmatter":"headline: 'How to Get Readers to Really Want You'\npublication: 'Forbes'\nposition: 'Staff reporter'"}

/***/ }),

/***/ "./app/data/clips/forbes-live-from-the-internet.md":
/*!*********************************************************!*\
  !*** ./app/data/clips/forbes-live-from-the-internet.md ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"Live, from the Internet","publication":"Forbes","position":"Staff reporter"},"body":"\nSome 63.2 million television viewers tuned into the presidential debate\nTuesday night. News Corp.'s MySpace broadcast it as well. The results were\nsomewhat different.\n\n\"We think with over 100,000 views, which we've gotten every time, it's\npretty good considering it's on every television network,\" says Lee\nBrenner, MySpace's executive producer of political programming.\n\nOptimistic spin? Sure. But while watching live news on the Web remains in\nits infancy, it is gaining ground. An ABI Research study of 985 people\nfound last month that video from news sites was the second most popular\ncategory of Web video, with just under 70% viewing it.\n\nConverting that interest into live news viewership via the Internet seems\nonly natural, particularly given its presence outside the home at places\nlike work. And live news coverage may be a real boon to Web sites because\nthe events have an instantaneous value that draws people immediately to\nthem.\n\n\"In the back of everyone's head is the thought that there's a new way to\nmake money here,\" says Joey Faust, a software solutions consultant for\nNational TeleConsultants, which builds production facilities for big media\nnetworks like the Fox Business Network. He says his clients are heavily\ninvesting in production facilities that can quickly, easily — and\nsimultaneously — distribute video content via traditional networks and the\nInternet.\n\nNews Corp. and General Electric's NBC Universal both show signs they agree\n— and that they want more online viewers than MySpace has delivered to\ndate. The two networks agreed this week to feed live video coverage of the\ndebates to their Hulu joint venture. Brenner says MySpace had no\ninvolvement in sister site Hulu's deal to showcase the debates live.\n\nHulu's broadcast was a first for the site, which in July was one of\ncomScore's top 10 Web video servers (it trailed MySpace umbrella Fox\nInteractive Media in the ranking). Citing company policy, a spokesperson\ndeclined to say how many viewers tuned in to the show. \"This is an\nexperiment in thinking about if live streaming is something people truly\nwant,\" says Hulu's Christina Lee.\n\nWhile MySpace is using the debate coverage to help raise its profile and\nattract more users, Hulu showed a 15- or 30-second paid ad before the\nstream started. The same will be done during next week's final debate.\nCuriously, NBC News provided the video feed this week and Fox News — also\nsupplying MySpace's feed — will provide it next week. Lee would only say\nboth investors offered their video feed to Hulu.\n\nHer company pushed the news value of the live video stream one step\nfurther than MySpace. It played roughly 10 minutes of NBC News' live\neditorial wrap-up after Tuesday's debate and may do the same with Fox News\nnext Wednesday. For now, that may be good news for news networks looking\nto expand audiences. Hulu expects to syndicate next week's debate across\nthe Internet by giving people a video player to embed on their own Web\nsites that will show it live.\n\nBut National TeleConsultants' Faust warns there is a flip side to the\nWeb-based video syndication model these moves represent. \"In this new\nmedia distribution model the brand is what brings you revenue,\" he says.\nAs a result, he says media businesses like Fox News may not ultimately be\nthrilled to have its identity wrapped inside a third-party entity, even\nthat of a sister company like MySpace. But with these ratings, who's\nreally counting?\n","frontmatter":"headline: 'Live, from the Internet'\npublication: 'Forbes'\nposition: 'Staff reporter'"}

/***/ }),

/***/ "./app/data/clips/forbes-owning-the-news.md":
/*!**************************************************!*\
  !*** ./app/data/clips/forbes-owning-the-news.md ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"Owning the News","publication":"Forbes","position":"Staff reporter"},"body":"\nPhilip Balboni thinks he can build the next great global news organization\nwith the help of an unlikely ally: Capitalism.\n\nThe chief of Boston-based Global News Enterprises, Balboni is preparing to\nlaunch a test version of his international news site later this fall, with\na full-scale debut in January. He's signed roughly 40 correspondents and\nfive regional editors with pedigrees ranging from Time Magazine to the\nAssociated Press. Reporters in Asia and Eastern Europe are up next.\nEarlier this month, GNE stole Politico's Barbara Martinez as one of its\nmanaging editors.\n\n\"We are journalist entrepreneurs, and we have to find new models for\njournalism in the digital age,\" says Balboni.\n\nHe isn't alone. From Politico to Breaking Views to the Huffington Post to\nthousands upon thousands of blogs, droves of journalists have fled\ntraditional newsrooms in the past decade looking for a way to make a\nliving from the exploding world of digital media. So far, precious few\nhave replicated the quality or impact — or profits — of the name-brand\ncompanies they left behind.\n\nBut Balboni thinks he can, using the lure of ownership. His site is hiring\nthe five regional editors — for the Americas, Asia, Africa, Europe and the\nMiddle East — and some 72 correspondents located around the world. None of\nthem will be full-time employees. Instead, each is being lured by sizable\nequity stakes (not stock options) and a five-year guarantee of monthly\nfees of about \\$1,000. Correspondents will report to regional editors, who\nwill report to the 15-person GNE.\n\n\"Foreign correspondents used to be the stars of journalism,\" he says. Now\ncutbacks have left them starved for an outlet to fund — and market — their\nreporting. He thinks he can turn it around and doesn't shy away from the\nchallenge. It isn't his first long shot. Previously, Balboni founded and\nran New England Cable News, a joint venture between Hearst Corporation and\nComcast that provides some 3.6 million homes with 24/7 regional news\nprogramming.\n\nBut finding a large enough audience interested in international news to\nsupport these journalists could be even more difficult. comScore reports\nthat U.S.-based traffic accounted for 1.8 million unique visitors to the\nU.K. newspaper the Guardian in July. The numbers are far smaller in more\nfar-flung locales. For instance, Gurgaon, India-based the Times of India\nhad 321,000 unique U.S. visitors to its site in July. Moscow-based\nRussiaToday.com had 183,000 and the site for Tel Aviv, Israel-based\nHaaretz newspaper had 167,000.\n\nBalboni knows that growing the audience — and advertising base — to the\nsize needed to pay for all this is risky, especially because he's focused\non coverage outside of popular locations like England. So, similar to the\nmodel Politico is increasingly moving toward, GNE's multimedia content\nwill be sold to newspaper sites and other English-based sites around the\nworld. Balboni will only say syndicated content will be priced based on\ncirculation size and affordable to even his \"distressed colleagues.\" One\nlarge customer has already signed up, but Balboni won't identify it yet.\n\nBeyond that, Balboni expects to experiment with \"custom reporting\" — an\non-demand service where clients can hire GNE correspondents to generate\ncustom news reports.\n\nIt may be awhile before any of these businesses return any money though,\nand he knows it. Balboni is coasting on $8 million raised from private\n  investors such as Amos Hostetter Jr., chairman of Pilot House Associates\n  and the 147th richest American by our estimates, and Paul Sagan, president\n  of Akamai Technologies. Balboni says he's hoping to hit the originally\n  projected$10 million mark in funding, but he's been too busy hiring to\nraise money lately, he says.\n\nThe media entrepreneur thinks he has time. Balboni claims he isn't angling\nto quickly build and sell the company — another Silicon Valley mantra — to\nTime Warner or The New York Times Company or News Corp. or anyone else.\nBut with all the stock he's been printing to acquire journalistic talent,\nhe says he knows his reporters and editors will be keenly focused on the\nbottom line. Actually, he's counting on it.\n","frontmatter":"headline: 'Owning the News'\npublication: 'Forbes'\nposition: 'Staff reporter'"}

/***/ }),

/***/ "./app/data/clips/forbes-putting-newspapers-on-trial.md":
/*!**************************************************************!*\
  !*** ./app/data/clips/forbes-putting-newspapers-on-trial.md ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"Putting Newspapers on Trial","publication":"Forbes","position":"Staff reporter"},"body":"\nSam Zell was sued in Federal Court in California yesterday by a group of\ncurrent and former Tribune Company employees. They did a lot more than go\nafter the billionaire they say ruined their company — you could make the\ncase that they've put the fast-changing newspaper business on trial, too.\n\nThe group says Zell, the Chicago real estate mogul-turned-newspaper-titan,\nhas done nothing but run down Tribune since buying it last year. But the\nsuit is so much more than an angry lashing by frustrated journalists. To\nthe group of well-known reporters that include two Pulitzer Prize winners,\nthe indictment of Zell is an angry answer to Wall Street's pessimism about\ntheir industry.\n\n\"The problem is not with the product, the problem is monetizing the\nproduct online,\" says Dan Neil, a five-year employee of the\nTribune-ownedLos Angeles Times. \"It's not journalism's problem, it might\nbe publishing's problem.\" Neil won the Pulitzer Prize for criticism in 2004.\n\nLeading the charge from the LA Times newsroom, Neil and his cadre of\nplaintiffs are claiming various violations of the Employee Retirement\nIncome Security Act (ERISA). Essentially, they allege that as members of\nTribune's Employee Stock Ownership Plan (ESOP) — which became the legal\nowne of Tribune during a complicated buyout in April of 2007 — Zell has\nbreached his duty of loyalty to Tribune's employees. The group has asked\nthe court to certify the case as a class action.\n\nZell took over Tribune last year by taking it private in an $8.2 billion\ndollar deal that left the company with more than$13 billion dollars in\ndebt. In a statement Wednesday, Zell said the lawsuit \"is filled with\nfrivolous and unfounded allegations, and I hope every partner in this\ncompany is as outraged as I am at having to spend the time and money\nrequired to defend ourselves against it.\"\n\nA case like this seems inevitable. Zell has been something of a lighting\nrod for all that journalists fear about the future of newspapers since\ntaking over Tribune. He has evaluated reporters by how many column inches\nthey produce, turned editorial publications like the Los Angeles Times\nMagazine over to advertiser control and laid off at least 1,000 employees.\n\nAnd by all accounts, he has done it with little humility, famously cursing\nat a South FloridaSun-Sentinel staff member who challenged him in January\nduring an open question and answer session with employees. \"Zell has a\nreputation of being a very, very difficult person to deal with,\" says\nNeil. Yet, the long-time reporter admits he has never tried to contact\nZell about his grievances, saying such an effort would be futile.\n\nInstead, Neil was sucked into this case in July when the law firm that\nfiled it, Cotchett, Pitre & McCarthy, quietly approached him about\njoining. The firm had been working on the suit for some months along with\nplaintiff Henry Weinstein, a lawyer and 30-year veteran of theLA Times who\ncovered the legal beat before accepting a Tribune buyout this year.\nCotchett is no stranger to big class action cases. The 27-lawyer firm\nchampions its history of working on filing big claims, such as class\nactions alleging price fixing among ocean liners and complaints against\nMerrill Lynch for hiding subprim loan losses.\n\nIf all goes well, this case could be a major talking point for the firm.\nToluca Lake, Calif.-based Dish Communications, which describes itself as a\nboutique PR firm, was distributing copies of the complaint and\ncoordinating interviews with Neil earlier this week. There is quite a lot\nto talk about.\n\nThe ramifications of Zell's — and Tribune's — actions are defined by the\nCotchett firm as nothing short of the destruction of American democracy.\n\"Sam Zell exacted a severe, long-lasting damage to an institution that\ncitizens in a democracy rely on and require to effectively speak truth to\npower,\" writes lead lawyer Joseph Cotchett.\n\nZell himself is only named in two of the complaint's eight counts. Most\ncounts focus on Tribune's existing and past board of directors, as well as\nvarious trustees for the ESOP. The complicated structure of the multi-part\nbuyout deal may be the reason why. Zell was only personally involved in it\nduring an early stage loan to Tribune that funded the repurchase of some\nof its stock.\n\nAt that time, he allegedly convinced the ESOP to pay too much for Tribune\nin acquiring the rest of its public stock — $38 per share versus a more\nreasonable value of something under$10.\n\n\"The factual scenario is something of a novel one,\" says Ian Downes, an\nERISA litigator with the law firm Dechert. He says cases like this one\ncould drag on for years and can result in millions of dollars in\nattorney's fees for a plaintiff's firm involved in the suit.\n\nNewspapers have been under siege since the technology bubble popped in the\nlate 1990s, with problems ranging from declining circulation, advertiser\nconsolidation, classified ads migrating online, rising newsprint costs,\nbloated debt structures and, yes, over-staffing. Not to mention the rise\nof Internet news.\n\n\"The industry's got enough problems not to need bad management on top of\nit,\" says Neil. Or, Zell might say, lawsuits.\n","frontmatter":"headline: Putting Newspapers on Trial\npublication: Forbes\nposition: 'Staff reporter'"}

/***/ }),

/***/ "./app/data/clips/forbes-rupert-murdoch-big-man-on-campus.md":
/*!*******************************************************************!*\
  !*** ./app/data/clips/forbes-rupert-murdoch-big-man-on-campus.md ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"Rupert Murdoch: Big Man on Campus","publication":"Forbes","position":"Staff reporter"},"body":"\nHeading back to college this fall? Rupert Murdoch will be waiting.\n\nIn May, his Fox News subsidiary bought a minority stake in a Web\nvideo-based college news network featuring student reporters called\nPalestra.net. This fall, he'll be ramping up the partnership.\n\nIt's the latest — and boldest — move by a major media company to\ncapitalize on America's some 6.1 million undergrads. While outlets such\nasViacom's MTVU network and privately owned Zilo Networks have gone after\nuniversity students for years, Palestra's at the front of a new wave led\nby news outlets desperate to connect with young viewers.\n\nIn May, Disney's ABC News said it would open digital bureaus at some top\njournalism schools. And General Electric-owned NBC News recently announced\nit would be working with the New York Film Academy to train students in\ndigital journalism.\n\nPalestra.net goes further. Focusing on news, sports, business and\nentertainment features, it pays student reporters $240 to$300 to produce\nthree news packages a week for the Web site — and Fox's cable networks.\n\nMore than 10 pieces of student-reported Palestra content a week should be\nrunning on both the Fox News Channel and Fox Business Network by the fall\nas the school year restarts and the presidential campaigns swing into high\ngear. And founder Joe Weasel — a former on-air journalist for NBC\naffiliate WCMH-TV in Columbus, Ohio — says he began talking with Fox's\nlocal affiliates last week about placing Palestra content on their Web\nsites around the country, which could lead to on-air spots.\n\nFox does not editorially preselect his network's coverage, says Weasel.\nLike most news organizations, reporters dig up stories that are pitched to\nPalestra producers, some of which are further pitched to Fox. And coverage\ndiverges from the stilted accounts that older, professional reporters\noften get from students when they arrive on campus for stories about the\nstudent vote.\n\nPalestra's reporters aren't just telling the stories — they are the story.\nWhen Weasel hired student reporters Sarah Barga, Sarah Jane Dugger and\nChri Kaechele as summer interns to create a marketing campaign for\nPalestra, Fox Business Anchor Alexis Glick had them brought to New York\nfor a segment on the internship. And while there, Weasel says the three\nhad a meeting with senior Fox officials about how they saw digital media\ndeveloping.\n\nThe relationship with Fox evolved in November 2007 partially from the\nsite's content — and partially from luck. When the campus of Pepperdine\nUniversity was burning along with Malibu, Calif., wildfires in October\n2007, Palestra reporter Stephan Holt (son of broadcast journalist Lester\nHolt) dispatched a 30-second news spot about where, and how, he and fellow\nstudents were being sequestered on campus for their safety.\n\nWeasel says the coverage helped catch the attention of Joel Cheatwood,\nnewly minted Fox News senior vice president of development. He had already\nbeen introduced to Palestra while working for CNN, as the site was\nproviding CNN.com free music coverage in 2006. While Weasel says the Cable\nNews Network hadn't seen his student demographic as important, Fox did,\nand after the wildfire coverage, a content partnership with the News Corp.\nentity began.\n\nFor his part, Cheatwood says advertisers want the news business to learn\nhow to reach young audiences not tuning into traditional broadcast and\ncable news programs — and to develop stories they value. Palestra's\nalready wide reach should help with that, as well as provide Fox a new\npipeline for talent.\n\nToday, Palestra fields a staff of 125 reporters at 101 schools around the\ncountry, placing News Corp. right at the heart of the nation's student\npopulation Weasel says that's a huge advertising market. Palestra viewers\nare growing quickly, with over two million people seeing it between Fox's\nvarious channels and online distribution. He would not provide any numbers\nbut says viewer growth online is accelerating quickly following the deal.\n\nAnd though Weasel says it's too early to see the results, Murdoch's\norganization has wasted no time in taking advantage of that access. Fox\nNews too over Palestra's ad sales around June, giving it access to new\naudiences and likely a slew of new sponsors who are attracted to them.\nWeasel declined to say how ad revenues would be split and said he could\nnot predict whether a full acquisition by Fox was in his company's future.\n\nWhile Palestra incorporated software-based video ad-serving technology\nfollowing the Fox investment, the student network previously focused on\nsponsorships over ad insertions based on automatic placement. For\ninstance, Pepsi has sponsored the show \"Music at the Palestra\" via a title\nscreen.\n\nThis isn't quite network news, though, as Weasel also says a sponsor like\nPepsi may have its products placed within the show, with reporters often\nwearing clothing with a Pepsi logo. Weasel acknowledges that the technique\ndoesn't work for every type of program — for instance, hard news — but the\none-time Ohio State University journalism professor says the tactic is\nfine for others.\n\nThere's another likely reason for News Corp.'s interest in Palestra:\nFacebook. The news network gives Murdoch a direct path to his MySpace\nrival. With student reporters using their own Facebook pages — and a\nPalestra.net company page — to post links and information about their\nonline and offline news reports, News Corp. gains a pathway to Facebook's\nwell-to-do, upwardly mobile college and university student users. Not bad\nfor a freshman.\n","frontmatter":"headline: 'Rupert Murdoch: Big Man on Campus'\npublication: 'Forbes'\nposition: 'Staff reporter'"}

/***/ }),

/***/ "./app/data/clips/forbes-slowing-fast-company.md":
/*!*******************************************************!*\
  !*** ./app/data/clips/forbes-slowing-fast-company.md ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"Slowing Fast Company","publication":"Forbes","position":"Staff reporter"},"body":"\nWhile layoffs and hiring freezes are the topic du jour at media companies\nacross New York City, Mansueto Ventures remains a bright spot in the\nindustry. According to the Publisher's Information Bureau, magazine Fast\nCompany sold roughly $29 million in ad pages between January and\n  September, a change of 37.3% over last year. Another Mansueto title, Inc.,\n  sold roughly$64 million in ad pages, a change of 10% over last year.\n\nSo it was a surprise in early October when Mansueto Ventures closed its\nMansueto Digital division (funded by a \\$10 million war chest announced\nlast year) and laid off 20 employees. Responsibilities for its five Web\nsites have been given to the print magazines. Yet Chief Executive John\nKoten says digital remains imperative for the future. He started as editor\nof Inc. in 2002 and became CEO of Mansueto Ventures when it was formed by\nthe purchase of his magazine and Fast Company in 2005.\n\nWhat gives? Forbes.com sat down with Koten in his office on the 29th floor\nof Seven World Trade Center to ask. Here's an edited version of what he\nhad to say.\n\nForbes.com: The 2008 Inc. 500 winners reported total sales of $13.7\n  billion, 14% below last year's$16 billion. Seems like that gave you early\ninsight into the weakening market?\n\nJohn Koten: We had the Inc. 500 conference in Washington about a month\nago. It was interesting to be with those people at that time. It did have\nan impact on me because these are all very successful people and they were\nthere to celebrate the growth of their companies and yet there was a\nsomberness at the conference that I haven't seen in the time I've been at\nInc.\n\nAre your magazines particularly sensitive to the credit crunch of recent\nmonths?\n\nWe're writing for fast-growth companies, and fast-growth companies need\ncredit to maintain their growth, so if there's no credit and they can't\nexpand, the people we're writing for are going to be hurt.\n\nHow has that played out for your businesses this year?\n\nWe expected revenues to grow 20% to 25%, and they ended up growing across\nthe company between 8% and 12%. Because we put a lot of investment in\ndigital we expected our online revenues to grow faster than the rest of\nthe digital media industry. We decided to turn back now because the future\nis more uncertain over the next six months to a year than it [has been].\n\nAcross New York City, media is cutting jobs and tightening budgets, how\nmuch of it is cleaning up the ranks and how much of it is about lower\nrevenue expectations?\n\nI'd say half the people that no longer have jobs here were just redundant\nin the reorganization and about half are things we decided we're going to\nstop doing until our business grows more.\n\nWhat does the goal for three-year-old Mansueto Ventures become then?\n\nOur goal is to increase market share when times are difficult, so I think\nas long as we're showing progress we'll be OK.\n\nCombining print with digital will help you with that? Why?\n\nThere's an incentive if you're in the digital department to keep what\nyou're doing close to your vest because it makes you the expert. I want\neveryone to know what our top 10 stories that generated the most traffic\nare each month, and I want the editors of the Web sites to share this\ninformation.\n\nI want the editor of Fastcompany.com and the editor of Inc.com — neither\nof whom have been named yet and the Fast Company job is still up for grabs\n— I want them to put out a weekly or monthly report saying here's what\ndrove our traffic this month.\n\nWe have these big video screens to help layout the magazine, but I'm\nthinking of converting them over to something we can use to report\ndigitally ... what's happening with traffic.\n\nSo in your mind the combination is a response to tougher economic times\nand a way to fuel digital growth?\n\nIf anything, you could view this as a shift of resources from the print\nmagazines to the online department because they're [reporters and editors]\nnow going to be working 20% to 30% online. They do a lot of reporting, but\n[right now] they're thinking about just what they're going do for the\nmagazine and they're not thinking about how they might leverage that\nonline.\n\nI've told every employee here that at the end of the year I want a memo\nexplaining if [they] were an online employee how [they're] going to\ncontribute to print and if [they're] a print employee, I want to know how\n[they're] going to contribute to online.\n\nIf I'm a journalist, I need to be able to do online, print, video, audio —\nwhatever the heck is out there. I wanted to start a super- reporter\nprogram here, where we took two reporters from digital, two reporters from\nFast Company and two reporters from Inc. and have them cross-train like\nhell to create a super-reporter who could wear all nine hats. Then I\nthought: Why shouldn't everybody be doing that?\n\nThe story is bigger than just what the journalists do as storytellers\nthough, isn't it?\n\nI think social publishing is going to play a bigger and bigger role in\njournalism whether we professional journalists like it or not.\n\nThe professional journalist becomes a coach and a mentor to people who are\ndoing this [blogging and writing] for free. Our strength is trying to be\nthe spokesman into communities and trying to build a business that works\naround that.\n\nThen, the future of media/digital is about highlighting ideas and\nopinions, not flat factual reporting?\n\nI think people with strong intelligent voices will find a way to monetize\nthose voices in the future, but I don't know that people who are just\nfollowing the traditional journalistic approach of gathering information\nand then presenting it in a stylistically pleasing way [are] going to\nsurvive. It's too dull.\n\nAnd that will help you grow revenues through a recession?\n\nHaving regularly updated, fresh content is different than having people\nwho are trying to break stories five or six times a day. I don't really\nsee us as a news-oriented media company at all. With social publishing,\nyou could invest in technology in a way that can help to boost your\ntraffic and on a dollar-for-dollar basis that may be a better investment\nthan investing in originally created content.\n","frontmatter":"headline: 'Slowing Fast Company'\npublication: 'Forbes'\nposition: 'Staff reporter'"}

/***/ }),

/***/ "./app/data/clips/forbes-strapped-local-stations-look-to-web-for-cash.md":
/*!*******************************************************************************!*\
  !*** ./app/data/clips/forbes-strapped-local-stations-look-to-web-for-cash.md ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"Strapped Local Sations Look to Web for Cash","publication":"Forbes","position":"Staff reporter"},"body":"\nLocal television stations need some good news. Just this month, the\nTelevision Bureau of Advertising announced spot TV advertising would fall\nthis year roughly 7% — despite the lucrative presidential election. Next\nyear looks bleak too: It predicted 7% to 11% declines. Those are big\nnumbers in an industry that's used to clearing roughly \\$65 billion in\nadvertising.\n\nWhile the decline is due in part to a recession, the bigger reason is more\nsystemic. Advertisers have more outlets than ever to choose from. So what\nare local stations to do? Increasingly, they're turning for salvation in\nthe usual direction: the Internet.\n\nThere are reasons for stations' emboldened outlook. Ion Puspurica, who has\nspent a decade helping build and manage hundreds of local television Web\nsites, says some 30% of TV stations have managed to increase online\nrevenues to a point where they matter.\n\n\"If you get to the point where they can generate 5% or above on their\nbottom line, then they really pay attention to you,\" Puspurica says. As\ngeneral manager of Critical Media's broadcast services group, he is now\nselling a service to stations that simplifies their ability to post\nbroadcast video feeds on the Internet.\n\nDriven by increased consumer use of online video over the last year and a\nhalf, stations are pushing hard to turn it into a moneymaker. \"We're\ngetting a lot of pressure from our clients to sell their Web sites, and to\nsell them uniquely,\" says Garnett Losak, who's company, Petry Media, sells\nadvertising and builds programming schedules for local stations.\n\nMany local stations not only compete with other stations, but also fight\nwith local newspapers for ad dollars. Every day a station doesn't push\nmore of its resources online is another day a competitor might. With fewer\nand fewer viewers tuning in to local newscasts, Adam Symson, vice\npresident of interactive for E.W. Scripps' television division, which owns\n10 stations, says building online audiences is imperative.\n\nConsider ABC affiliate KCRG in Cedar Rapids, Iowa. While it internally\ntracks an average of seven million unique visitors per month, and streams\nits noon newscast to an average of 9,000 people per day, the two-year-old\nsite only earned some \\$500,000 last year. \"It's got to grow. It just\nabsolutely has to grow,\" says the station's general manager John Phelan,\nnoting there will be no real political ads next year.\n\nHe hopes to double revenue in 2009, and for several years thereafter, with\na new sales program. He's finalizing a system where his nine sales people\nwill be penalized if they do not meet monthly Web revenue goals. \"At this\npoint, you have to try something different,\" he says.\n\nGiving sales staff incentives to sell the Web remains a huge problem, says\nSteve Ridge, president of media strategy at television consultancy Frank\nN. Magid Associates. And there is no consistency on how to approach the\nissue — whether via separate sales reps or a unified sales force.\n\nBut Web sites continue to be a bet on the future for most stations, rather\nthan a quick fix for flagging ad sales. \"[Stations] don't realize how much\neffort, resources and time it takes for that business to develop,\" says\nScott Blumenthal, executive vice president of television at Lin TV. His\ncompany, which owns 29 local television stations, is very focused on the\nInternet. While the company has struggled this year, digital has been a\nbright spot, growing in the first nine months of the year to $19.7\n  million, from$10.1 million last year.\n\nThose are results other stations are likely looking to emulate. For\ninstance, Robert Forsyth, director of Internet operations at Albritton\nCommunications, says the company has spent the last year rebuilding the\ntechnology system underlying its 12 Web properties, including eight\ntelevision stations. With 70,000 to 80,000 videos streaming from his sites\nper month — many of which will soon be in high definition — and 75 to 100\nnew videos published per day, Forsyth says increasing online ad dollars\nremains a priority for 2009.\n\nBut local advertising consultant Gordon Borrell of Borrell Associates says\nhe's worried some stations have a mismatched expectation for how quickly\nthe Internet can become a significant piece of their business.\n\nHis firm surveyed 647 television stations, and many are setting Web\nbudgets for next year based on massive increases in online revenue\nexpectations. In one case, the number is seven times greater than 2008\nrevenue. Borrell says, \"I'm kinda wondering how they're going to do that.\"\n","frontmatter":"headline: 'Strapped Local Sations Look to Web for Cash'\npublication: 'Forbes'\nposition: 'Staff reporter'"}

/***/ }),

/***/ "./app/data/clips/forbes-the-paperless-town.md":
/*!*****************************************************!*\
  !*** ./app/data/clips/forbes-the-paperless-town.md ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"The Paperless Town","publication":"Forbes","position":"Staff reporter"},"body":"\nAn odor of death clings to the newspaper industry. According to Editor &\nPublisher, seven American newspapers shut down between 2003 and 2007. With\nover 13,000 jobs lost from the industry over the past year, according to\nonline layoff tracker Paper Cuts, that number is poised to grow.\n\nAcademics and journalists predict the worst. Government will run amok,\ninformation will not be traded and the \"nagging conscience of a community\"\nwill be lost, says Conrad Fink, the Morris chair of Newspaper Strategy and\nManagement at the University of Georgia.\n\nBut looking at some of the big and small communities where those seven\npapers shut down shows there may be less impact than you might expect.\nMany readers turned away from newspapers long ago. In the Internet age,\ninformation overload, rather than starvation, is the main lament of most\nnews consumers. \"What you've seen as to closures recently has been simply\nmarginal operation falling prey against combined competitive threats,\"\nsays Fink.\n\nJohn Leone, a former mayor of Bristol, Conn., and the president of the\nGreater Bristol Chamber of Commerce, knows the feeling. His town faces the\nclosure of The Bristol Press, circulation 8,285. The imploding Journal\nRegister Company said in early November that it may close the paper, and\nThe Herald, circulation 9,646, of New Britain if it can't sell them.\n\n\"There's so many other ways to get your message out, I can understand the\nproblem of keeping [it] open,\" he says, though he doesn't like it — some\n50 years ago, he was a paperboy for the Press. \"The reality is that some\nof the other newspapers in the area will probably step it up.\"\n\nThat's what happened to the Post-Herald in Birmingham, Ala. Owned by E.W.\nScripps Company, the 7,500 circulation afternoon daily closed in September \n2005.\n\n\"Certainly, losing a voice in the community has an impact, but that\nvoice had become less influential as the paper had shrunk,\" says Tom\nScarritt, editor of the rival Birmingham News, which has a circulation of\n137,220. His paper was handling most of the Post-Herald's non-editorial\noperations, including ad sales under a Joint Operating Agreement at the\ntime.\n\nAnd how did local businesses react to the closure? Maggie Krost, the News'\nvice president of sales and marketing says they didn't. \"I think it had no\nimpact on the business community at all from the perspective of being able\nto reach the marketplace with advertising,\" she says.\n\nIn De Queen, Ark., the De Queen Daily Citizen was shut down by new owner\nLancaster Management in 1997. With a circulation of roughly 2,650, Mayor\nBilly Ray McKelvey says the paper had been a labor of love of local scion\nRay Kimball for years.\n\nDe Queen's 5,765-person community loved the paper too. McKelvey, who was\nonce its editor and worked there for 18 years, says people used to pick it\nup in the morning and sit around the local courthouse discussing the day's\nevents. \"I can tell you the community did not like losing the daily\nnewspaper. There were lots of howls,\" he says.\n\nBut not as much changed in the aftermath as one would have thought. True,\nthere are no more courthouse news gatherings. And local flower shop owner\nJoanie Paterson says her funeral business was cut in half by some \\$10,000\nbecause the elderly stopped learning of deaths soon enough to send\nflowers. But she says she can't think of any other local businesses\nsimilarly impacted, although folks living in the town's rural outskirts —\nlike her father — have trouble getting the news.\n\nThe local radio station's Web site has become a major spot for community\nnews, a weekly newspaper (the daily's sister paper) still operates, and\nthe Texarcana Gazette has stepped up its coverage in the area. And\nPaterson is putting up a new marquee outside her store with a spot on it\nto advertise store promotions. \"I think life has gone on,\" says McKelvey.\n\"We've changed our habits some.\"\n","frontmatter":"headline: 'The Paperless Town'\npublication: 'Forbes'\nposition: 'Staff reporter'"}

/***/ }),

/***/ "./app/data/clips/ft-electronic-arts-standing-firm-on-usd-26-offer.md":
/*!****************************************************************************!*\
  !*** ./app/data/clips/ft-electronic-arts-standing-firm-on-usd-26-offer.md ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"EA standing firm on USD 26 offer","publication":"FT.com","position":"Staff reporter"},"body":"\nElectronic Arts (EA) is standing firm on its offer of USD 26 per share to\nacquire rival Take Two Interactive Software, CFO Warren Jenson said in an\ninterview, dealReporter reported. Calling the number \"hugely pre-emptive,\"\nhe said Take Two’s demand for a higher bid was unrealistic.\n\nJenson declined to comment on whether management has discussed offering\nmore. Take Two’s stock price was USD 17.36 last Friday, the last trading\nday before the offer was publicly disclosed.\n\nLast week, a top Take Two shareholder told this news service that USD 30\nper share was a more realistic price. He cited the upcoming 29 April\nrelease of Grand Theft Auto 4 and other cost-cutting measures that Take\nTwo has said have not yet been recognized by the market.\n\n\"It’s a dance, right,\" said EA’s Jenson of Take Two’s rejection of the\noffer. \"There’s not a shred of historical evidence to show that is the\ncase,\" he said of assertions that Grand Theft Auto 4 sales would\ndramatically change Take Two’s value.\n\nAs the seventh version of the game, Jenson said there is plenty of data to\npredict sales. While he said EA may not dramatically increase its US and\nUK sales, it could in more far-flung markets such as Spain or Russia.\n\n\"They’re [EA] very serious here,\" said Kaufman Brothers analyst Todd\nMitchell. \"They took some money out of short term investments and put it\ninto cash.\" Still Mitchell said he remains unconvinced a deal will close\nas the Take Two acquisition is not an imperative for EA.\n\n\"If they overpay for this thing, people are going to smell desperation,\"\nhe said.\n<br /> EA’s Jenson said it may drop the size of its bid if Take Two does\nnot act quickly enough.\n\nHe warned that the pressure is on to finish a deal in order to integrate\nTake Two’s management into EA in time for this year’s holiday season. The\nperiod can account for some 40% of video game sales, he said.\n\n\"We just don’t need both,\" he said in reference to overlap in EA’s and\nTake Two’s management. Creative personnel may be a different story.\n\nRockstar Games – the Take Two publisher of the Grand Theft Auto series –\nis a \"significant part of this transaction,\" said Jenson. Yet the value of\nRockstar is said by some to be tightly aligned with Sam Houser, its\npresident, and his brother, Dan Houser, vp creative.\n\n\"Everyone acknowledges the Housers are the glue that keeps this [Grand\nTheft Auto] together,\" said Michael Pachter, an analyst with Wedbush\nMorgan Securities.\n\nBut it is unclear whether the two would be willing to move to EA –\nparticularly with a contract that is said to\n\ngive them a cut of gross revenues from Take Two’s Grand Theft Auto sales.\n\"The myth is they get 15% of revenues,\" said Pachter, \"I think that’s\nprobably right.\"\n\nWith that standard dangling before employees – and a history of building\ncontroversial themes such as sex into Grand Theft Auto – Pachter\nquestioned whether EA would want the two in-house. Earlier this week,\nPachter publicly suggested that EA split Rockstar off into a separate\ncompany to avoid some of these issues.\n\n\"The analysts see Rockstar and they see risk,\" said EA’s Jenson. \"We see\nRockstar and we see opportunity.\"\n\nWhile he said he had some understanding of the Housers’ contracts, he\ndeclined to specify what that was.\n\nInstead, he said he believed that the Housers would be comfortable working\nwithin EA.\n","frontmatter":"headline: 'EA standing firm on USD 26 offer'\npublication: 'FT.com'\nposition: 'Staff reporter'"}

/***/ }),

/***/ "./app/data/clips/index.js":
/*!*********************************!*\
  !*** ./app/data/clips/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function () {
  var context = __webpack_require__("./app/data/clips sync recursive \\.md$");

  var keys = context.keys();
  return keys.map(function (key) {
    return context(key);
  }).sort(function (a, b) {
    if (b.attributes.position > a.attributes.position) {
      return 1;
    }

    if (b.attributes.position < a.attributes.position) {
      return -1;
    }

    return 0;
  });
}();

/***/ }),

/***/ "./app/data/clips/shu-breaking-news-online.md":
/*!****************************************************!*\
  !*** ./app/data/clips/shu-breaking-news-online.md ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"Breaking News Online","publication":"Seton Hall Magazine","position":"Freelance"},"body":"\n“When I started, I was told this is 24 hours a day, seven days a week. And\nI laughed. Now I’m not too sure it was a joke.”\n\nAdam Desiderio ’05 laughs again. The 29-year-old associate producer with\nthe “NBC Nightly News” is like a lot of journalists. He disarms quickly by\npoking fun at himself and speaking plainly about almost anything. Being a\nbit over 6 foot 3 inches tall with a handsome face and thoughtful demeanor\ndoesn’t hurt either. The package seems just right for NBC’s flagship news\nshow.\n\nDesiderio is one of some six young Seton Hall University alumni working\nacross NBC’s news outlets at a time of incredible tumult. Like most media,\nthe fabled “peacock network” is remaking itself for the digital age. This\nsummer alone, it launched NBCLatino.com, used mobile apps to supplement\nits London Olympics coverage, and bought Microsoft’s 50 percent stake in\nMSNBC.com.\n\nThe result is a constant if soft drumbeat for these new alumni to reinvent\nthemselves just as swiftly.\n\n“You have to be really nimble,” says Robert Windrem ’68, a senior\ninvestigative producer who covers terrorism for the “NBC Nightly News.”\n\nWhen Windrem started in 1980, he could only tell a story by airing a piece\non the evening news, the early morning “Today” show, or a prime-time news\nmagazine. Now he also regularly produces Web news videos, writes for\nMSNBC.com (now NBCnews.com), and discusses international security as a\nguest on NBC’s various cable news networks.\n\n“Everyone understands these opportunities exist,” says Windrem, 67.\n\nBrian Wisowaty ’11 agrees. In June, after just a year at MSNBC as a\ngraphics production assistant, the 23-year-old was asked to oversee\nvisuals for the prime-time show, “PoliticsNation.” That means he\ncoordinates the senior producers who decide what information to illustrate\nand the artists who make it look good. Wisowaty ensures they both hit the\nmark.\n\n“This is no longer something that just flashes up on-screen,” he says.\nShow producers are now posting his images to Facebook in order to connect\nwith the social network’s 950 million members.\n\nThe move offers a tangible reminder that digital media is changing TV.\n\nBy the early 2000s, many predicted the Internet would put an end to it.\nThat never happened. But the Internet’s popularity also never stopped\ngrowing. Each spurt pushes TV news to change just a little bit more. The\nresults can be quite dramatic.\n\nBetty Nevins ’77, senior production manager for “Meet the Press,” offers a\ngood example. The famed Sunday morning political program has developed an\noriginal Web video series named “PRESS Pass.” It only takes six or so\npeople to create each segment. That’s a far cry from the roughly 28 people\nNevins, 56, leads each week to broadcast the main program nationally.\n\n“They’re breaking the mold,” says the 27-year NBC veteran.\n\nBy redefining what qualifies as professional- grade video, “Meet the\nPress” can afford to recruit new viewers online with stories it normally\ncouldn’t do. For instance, host David Gregory was able to interview\nactress Sigourney Weaver in July about her new cable mini-series,\n“Political Animals.”\n\nIt’s an evolution that Erin Ganley ’09 navigates daily. As a line\nproducer for MSNBC’s “The Ed Schultz Show,” her days begin with the\ncreation of a show schedule and end in a rush to get people to stick to it\nduring broadcast. That doesn’t always leave the 25-year-old as much time\nto focus on the Internet as she’d like.\n\n“I don’t think it has as much of a role with the job I have right now,”\nshe says. But she’s sure it will in the future, so she keeps up with\ndigital media on her own.\n\nTake her use of Twitter, the online social network that relays news in 140\ncharacter bursts. Ganley frequently scans it to filter through the day’s\ntop stories.\n\nShe may be on to something. In July, corporate parent Comcast reorganized\nNBC by creating the NBCUniversal News Group to house all of its broadcast,\ncable, and Internet news outlets under one chairman. The goal: increase\ncollaboration.\n\nIt’s the type of step forward that keeps Stephanie Wightman ’08 excited\nabout TV. Like all her young alumni-colleagues, the 26-year-old tape\nproducer for “1st Look,” an early morning NBC news show, is always keen to\nadapt to change gracefully.\n\nAs she says: “You’ve got to go where the future is.”\n","frontmatter":"headline: 'Breaking News Online'\npublication: 'Seton Hall Magazine'\nposition: 'Freelance'"}

/***/ }),

/***/ "./app/data/clips/shu-cracking-the-college-code.md":
/*!*********************************************************!*\
  !*** ./app/data/clips/shu-cracking-the-college-code.md ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"Cracking the College Code","publication":"Seton Hall Magazine","position":"Freelance"},"body":"\nLast winter, 15 students from Newark’s Technology High School took part in\na six-month pilot program from Seton Hall’s Center for Mobile Research and\nInnovation. The “Young Developers Program” had a simple, yet important\ngoal: prepare the students — who hail from a traditionally underprivileged\ncommunity — to design and build mobile apps for smartphones and tablet\ncomputers on their own.\n\n“That’s of value no matter what you decide to do,” says associate\nprofessor of political science Michael Taylor, the CMRI’s academic\ndirector.\n\nThat’s probably true. Mobile devices are booming. In 2007, smartphones\nwere relatively rare and tablet computers were non-existent. Today, just\nsix years later, the United States has amassed 140 million smartphone and\n123 million tablet users, reports eMarketer, a tech consultant. As a\nresult, these devices have penetrated nearly every walk of life.\n\nBut not all teens are being given the skills and confidence needed to\nharness these forces.\n\nThe Young Developers program was designed to help by teaching students\nfrom disadvantaged areas to build mobile apps — a form of software — for\nsmartphones and tablets. Each of its 12 lessons, which range from computer\nlogic\n\nto user interfaces, includes a video lecture, in-class coding problem and\ntake-home lab. A \\$250,000 corporate gift from AT&T paid for the\ncurriculum, as well as smartphones and laptop-tablet hybrids running\nMicrosoft Windows.\n\nThe Newark Tech teens were also responsible for building their own mobile\napps. All told, it was a lot of work.\n\nTo keep them on track, the students were paired with mentors from Seton\nHall who had a similar socio-economic background. “I’ve lived in poverty,\nand I’ve seen poverty,” says Franck Nelson ’13, one of the six\nundergraduate mentors.\n\nA biology major, Nelson immigrated from Haiti to Trenton, N.J., when he\nwas 14. He joined the Young Developers pilot to offer tangible proof that\nnothing is out of reach. While the program’s focus is on coding, Nelson,\nwho just started a graduate program at Seton Hall’s College of Nursing,\nsays mentors spent as much time talking about college.\n\n“We had people believe in us to get here,” he says. “We believe we can\nreturn the favor.”\n\nTaylor, who is now running a second pilot project in Newark and trying to\nraise more money from AT&T to expand to two more cities in the next year,\nsays the program’s first run ended with an unexpected surprise. He wasn’t\nsure if all the teens would finish their software. But they did, on their\nown or in a small group, building 12 apps. “A lot of them weren’t\nsatisfied by what they created,” he adds.\n\nThat’s just fine. Now they know how to do better.\n","frontmatter":"headline: 'Cracking the College Code'\npublication: 'Seton Hall Magazine'\nposition: 'Freelance'"}

/***/ }),

/***/ "./app/data/clips/shu-giving-physics-a-good-name.md":
/*!**********************************************************!*\
  !*** ./app/data/clips/shu-giving-physics-a-good-name.md ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"Giving Physics a Good Name","publication":"Seton Hall Magazine","position":"Freelance"},"body":"\nThere’s a bolt of pure lightning that plays music in the basement of\nMcNulty Hall.\n\nAt least, it looks like lightning. It pulses, and music plays out of the\nthin air above it. Jose Lopez, the newest addition to Seton Hall’s\nDepartment of Physics, shows visitors his plasma speaker with a smile. The\n34-year-old assistant professor of physics likes a good attention-grabber.\n\n“In physics, we have very bad PR. We make it seem that it’s not\naccessible,” he says.\n\nIn a field forever dominated by Albert Einstein’s loopy personal style,\nLopez is an unexpected twist on the age-old vision of a brainy physicist.\nThe chatty Newark native is warm, amiable and plainspoken. And yet, one of\nthe 20 biggest brains in the state, according to Inside Jersey magazine,\nis also an expert in a little-known, but potentially up-and-coming field\nof study called microplasmas. Lopez creates these tiny plasma reactions in\norder to assemble chemicals as if they were made of Lego blocks.\n\nThat’s not as crazy as it sounds. Most people know there are three states\nof matter: solid, liquid and gas. Each is defined by the density and\narrangement of the atoms within it. Plasma is a fourth state that occurs\nwhen gases destabilize. That means their atoms break up into a mixture of\ncharged ions and electrons.\n\nOnce free, these ions and electrons can be recombined into something new.\nLopez studies ways to control them. “That’s the whole thing,” says Alfred\nFreilich, a longtime Lopez collaborator who joined Seton Hall with him in\n2011\n\nas a visiting research professor. It’s hard to reliably control plasma.\nIt’s hot — the sun and stars are made of it. And atoms like stability. On\nEarth, they don’t shift to plasma easily. Generally, a vacuum is needed to\ncoax them. They shift to\n\nit more easily in miniature. At scales of a millimeter or less, chemical\nelements will become plasma in the open air and at a temperature cool\nenough to touch.\n\nAs a result, there may be a lot of ways to put these tiny plasmas to work.\nLopez and Freilich look for them.\n\nFor instance, Degrémont Technologies uses their research to increase the\namount of oxygen it can turn into ozone inside of school bus-sized\nmicroplasma reactors. Municipalities and other groups buy the reactors so\nthey can kill bacteria with ozone rather than chlorine at their\nwater-treatment plants. The ozone is produced on-site because it breaks\ndown soon after it’s created.\n\nThe oxygen alchemy is cool, but Lopez uses the reactors to connect more\nthan just electrons and ions.\n\nHe also uses them to connect with people. By forcing a lot of tiny oxygen\nplasmas to create ozone, the reactors remind people that physics doesn’t\njust explain how the universe works. It also offers keys for controlling\nit.\n\nSo, when Degrémont asked for help on its microplasma reactors in 2005,\nLopez opted to make the field a long-term focus. At the time, he was\njoining the physics faculty at his alma mater, Saint Peter’s University in\nJersey City, N.J.\n\nThat found the newly minted academic looking for a way to connect with\nstudents directly.\n\nLopez already knew something about drawing students into science. Kurt\nBecker, his doctoral adviser at the Stevens Institute of Technology in\nHoboken, N.J., noticed that shortly after Lopez arrived in 2000. Becker\noften opened his lab to local high school and college students looking for\nhands-on research experience. They all flocked to Lopez.\n\n“It was almost his natural instinct to take them under his wing,” says\nBecker.\n\nThat’s not surprising. By then, Lopez had been teaching science for years\n— he tutored the entire women’s varsity basketball team in math and\nscience while a sophomore at Saint Peter’s.\n\nBut he did learn some new tricks under Becker, now the associate provost\nfor research and technology initiatives at the Polytechnic Institute of\nNew York University. Becker treated doctoral students like colleagues, not\nemployees. He encouraged them to story their own interests, and tried to\nget them whatever they needed to do it.\n\n“If someone had a good idea, my attitude was: Go try it out,” he says.\n\nBecker’s stance had a long-term effect on Lopez. Nothing is out of reach.\nLast spring, he applied the theory to one of his first courses at Seton\nHall. Rather than limiting his class on waves and oscillations to the\nuniversity’s labs, he added a set of online video lectures from the\nMassachusetts Institute of Technology.\n\nThe result really stood out to junior Stacie Ballou. The lectures gave her\na first-hand look at the type of experiments normally confined to big\nresearch universities. “It was a different experience,” she says.\n\nFor Lopez, that was the point. Students aren’t unlike the chemicals he\nassembles in microplasma.\n\nThey’re ready to become something new — if you can connect with them.\n","frontmatter":"headline: 'Giving Physics a Good Name'\npublication: 'Seton Hall Magazine'\nposition: 'Freelance'"}

/***/ }),

/***/ "./app/data/clips/shu-the-bone-doctors-knees.md":
/*!******************************************************!*\
  !*** ./app/data/clips/shu-the-bone-doctors-knees.md ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"The Bone Doctor's Knees","publication":"Seton Hall Magazine","position":"Freelance"},"body":"\nIt all started in the mid-’70s on scrap paper: cocktail napkins, lined\nyellow paper, whatever was near. Frederick Buechel ’67, M.D., and Michael\nPappas, Ph.D., were designing artificial joints. They worked on schematics\nwherever they were, sometimes even at a bar near their homes in northern\nNew Jersey. For Buechel, the work has never been far from his mind.\n\n“To this day, you’ll see a piece of paper on his desk with a drawing on\nit,” says his son, Frederick Buechel Jr., M.D. That’s no surprise. His\nfather is the co-inventor of one\n\nof the world’s best-known artificial knees. It was one of the first to\ntruly simulate the real thing — bending up and down while also twisting a\nlittle left and right as people walk. A version of it has been sold by\nDePuy Orthopaedics for more than 30 years. First known as the New Jersey\nKnee, it’s now called the N.J. LCS® Mobile Bearing Total Knee System.\n\n“You should allow the ligaments and muscles to act in their own normal\nway,” says Buechel Sr., 67.\n\nWhile DePuy, now part of Johnson & Johnson, doesn’t discuss market share,\nit has been reported that the LCS Knee has been chosen by a million people\nworldwide. That’s a number that could grow rapidly. Knee replacements are\nincreasingly common. Between 2000 and 2011, the number of operations grew\nalmost 130 percent, the American Academy of Orthopaedic Surgeons says,\nwith more than 600,000 done each year in the U.S. alone.\n\n“It’s a hot topic,” says Daniel Brown, an orthopedic devices analyst at\nMillennium Research Group.\n\nThere are at least two reasons. People younger than 65 increasingly want\nto temper sport and other high-impact injuries, and those who are older\nare staying active longer.\n\nBut, in 1974, none of that was true yet.\n\nBuechel, then a 28-year-old orthopedic resident at New Jersey Medical\nSchool (now a part of Rutgers University) was overseeing a research\nproject on an ankle-replacement device. “Many of these were developed in\npersonal labs, almost in garages,” says Stuart Hirsch, M.D., a clinical\nprofessor of orthopedics at Seton Hall’s School of Health and Medical\nSciences.\n\nThe orthopedic surgeon has known Buechel since organizing a panel of knee\ndesigners for the New Jersey Orthopaedic Society about 30 years ago. Other\npresenters had more elite credentials, but Buechel’s dynamic,\ndata-driven presentation stood out. “I immediately switched over to the\nNew Jersey Knee,” says Hirsch.\n\nWhen Buechel first began work on his ankle replacement he sought help from\nPappas, at the time a 41-year-old mechanical engineer teaching at New\nJersey Medical School. “Any problem that I’m capable of solving is of\ninterest,” says Pappas, now 80.\n\nBuechel’s decision to ask for help wasn’t entirely surprising. The young\ndoctor, who won four New Jersey Amateur Athletic Union and three\nMetropolitan Intercollegiate Wrestling Championships while at Seton\nHall, liked a challenge — if evenly matched. Once he started working on\nthe replacement ankle, he realized he wasn’t well matched; he hadn’t\nthought about the technical aspects of building the device.\n\nPappas’s engineering know-how evened the odds.\n\nBy 1976, the two men were building joints on their own time. Their focus\nshifted to shoulders, and they were also considering the knee. Then, good\nluck struck. Buechel presented a paper about their shoulder at a\nconference, and caught the attention of an executive from DePuy, who\nwanted to license it.\n\nBuechel saw his shot, and made DePuy promise to sign a contract to sell\nhis artificial knee too. Bold move, as there was no knee yet.\n\nBut DePuy agreed.\n“You can’t live without being a business person,” says Buechel.\n\nDevelopment began. Buechel defined problems, Pappas designed solutions. At\nthe time, artificial knees had two major components. One attached to the\nfemur, a hip-to-knee bone; the other to the tibia, a knee-to-ankle bone.\nThese “fixed-bearing knees” bent like a hinge, but Bueche and Pappas\nweren’t satisfied by the results. Then a new idea arrived from a group\nfrom Oxford in the United Kingdom. It offered a way to make a knee that\ncould both bend and turn a bit. Buechel and Pappas quickly adopted this\n“mobile-bearing” design, and worked to improve it.\n\nBy 1977, their mobile-bearing knees were a lot like the real thing, and in\ntheory, would last longer than the fixed-bearing kind. DePuy, which sells\nboth types, says one independent study found that, after 15 years of use,\nBuechel’s LCS Knee still was in good shape 97 percent of the time.\n\n(The Buechel-Pappas partnership with DePuy ended some time ago, but the\nmen still work together on their own.)\n\nStill, knees are big business, and the technology keeps improving. Debates\nabout which type is best remain some of the hottest at orthopedic\nconferences today, says Millennium’s Brown, the device analyst.\n\nBuechel, always ready for a good challenge, is prepared to defend the\nmerits of his knee.\n\nThe doctor clearly likes his odds.\n","frontmatter":"headline: The Bone Doctor's Knees\npublication: Seton Hall Magazine\nposition: 'Freelance'"}

/***/ }),

/***/ "./app/data/clips/shu-the-clean-air-catalyst.md":
/*!******************************************************!*\
  !*** ./app/data/clips/shu-the-clean-air-catalyst.md ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"The Clean Air Catalyst","publication":"Seton Hall Magazine","position":"Freelance"},"body":"\nThe FedEx package from John Mooney ’55 arrives less than a week after our\nfirst meeting. Mooney — an 83-year-old man with a nimble step — has sent\ntwo reports.\n\nHe wrote the first paper for the United Nations in 2004 to convince a few\nholdout countries to eliminate lead from their gasoline. The other is a\nnew paper out of the University of Michigan asking if the 230 million or\nso automobiles in the United States represent a peak. (Unlikely.)\n\nMooney, a chemical engineer, chose the reports to illustrate how\ndangerous internal combustion engines can be. But something else is\npresent in the reports: Mooney’s passion for tough problems — and\ninnovative solutions.\n\n“If you don’t think there’s a solution, then you just haven’t asked the\nright question,” says daughter Elizabeth Convery, quoting a mantra her\nfather often tells his five children and 14 grandchildren to live by.\n\nThat fits. Mooney is the co-inventor of the three-way catalytic converter,\na small exhaust-cleaning device that hangs beneath about 80 percent of\nautomobiles. Each converter destroys about 98 percent of a car’s three\nmost noxious emissions — simultaneously.\n\nThree-way catalytic converter\n\n“That was a phenomenon that no one else thought was possible,” says\nMooney.\n\nNot for lack of interest. By the late ’60s, thick smog around Los Angeles\nsparked public demand for cleaner air, says Joseph Kubsh, executive\ndirector of the Manufacturers of Emission Controls Association (MECA). An\nextension of the 1963 Clean Air Act was on its way in 1970, with the\nEnvironmental Protection Agency and emissions standards in tow.\n\nThe standards would force most automakers to add a catalytic converter to\ntheir cars. A lot of companies wanted to sell it to them. That included\nEngelhard, Mooney’s then employer, a chemical company based in Iselin,\nN.J., now part of BASF.\n\nBut a good device wasn’t so easy to build.\n\nThe chemical reactions that clean up a car’s most noxious pollutants are\nvery different. Oxygen has to be stripped away from nitrous oxide, but\nmust also be added to carbon monoxide and unburnt hydrocarbons. Most\nthought this would require a bulky, two-stage system.\n\nMooney thought he could do it in one. He proved it by doing something\nunexpected.\n\nRather than looking at the exhaust, he focused on the gasoline being fed\ninto the engine. If it was mixed with the right amount of air, the exhaust\nwould offer a one-stage converter just enough oxygen to simultaneously\nrender all three pollutants harmless.\n\nMooney’s discovery seemed like magic. “No one really believed me,” he\nsays. “Probably our competitors didn’t either.” But Mooney was never one\nto give up easily. Take his first car, a 1941 Ford convertible he bought\nin 1949 to carry him to Seton Hall University, where he was starting work\non an undergraduate degree in chemistry. The car worked — but not\nwellenough. So Mooney, 19, took its engine apart, leaving more than 100\npieces scattered across a friend’s garage. Problem was, he didn’t know\nwhat they did.\n\nThat was no problem. Mooney talked to some mechanics, and soon knew what\nhe had to do. The big V8 was rebuilt in time to roar north fora summer\nroad trip to points unknown. A faint smile spreads across Mooney’s face as\nhe remembers the old car. “It had a nice noise to it,” he says. “It\npurred.”\n\nThat can-do spirit carried the day with the three-way catalytic converter\ntoo.\n\nIt inspired his boss and co-inventor at Engelhard, a scientist named Carl\nKeith, to send him around the world in the early ’70s to convince\nautomakers to add an oxygen sensor to their engines. The sensor would\nmonitor the fuel-to-air ratio so each engine could be tuned to the sweet\nspot where Mooney’s one-stage converter would work.\n\nVolvo listened first, and by 1976, the device was rolling off some of its\nassembly lines. Just about every automaker would soon follow suit.\n\nThe results are legendary. BASF says the three-way catalytic converter has\ndestroyed more than a billion tons of nitrous oxide, carbon monoxide, and\nhydrocarbons since it was released. More impressive: To protect the device\nfrom damage, highly poisonous lead has been removed from gasoline in\nnearly every country.\n\n“It’s really an amazing thing that’s been created,” says MECA’s Kubsh.\n\nMooney breathes, sucking in fresh, clean air. He couldn’t agree more.\n","frontmatter":"headline: 'The Clean Air Catalyst'\npublication: 'Seton Hall Magazine'\nposition: 'Freelance'"}

/***/ }),

/***/ "./app/data/clips/slate-adventures-in-state-bailouts.md":
/*!**************************************************************!*\
  !*** ./app/data/clips/slate-adventures-in-state-bailouts.md ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"Adventures in State Bailouts","publication":"Slate","position":"Freelance"},"body":"\nTwo months after being laid off by Forbes, I discovered New York's Self\nEmployment Assistance Program. The problem was getting the state itself to\ndiscover it.\n\nThe program is offered by New York to help entrepreneurs launch new\nbusinesses while refunding tax dollars (the state calls them unemployment\nbenefits). I learned of it on the 14th page of an instruction manual that\nwas sent to me when I applied for unemployment.\n\nThe SEAP program sounded like a good deal to help me launch myself as a\nWeb video news anchor covering media news. It's been my beat for a while.\nI felt good about it. This is the era of government bailouts and stimulus\npackages, after all. I couldn't know that my first significant interaction\nwith government would lead me on a series of adventures involving baffled\nstate employees and a constant sense of amazement.\n\nI had my first adventure with New York on a Thursday afternoon in\nmid-March. I called the number listed for SEAP and learned the state had\ncreated the world's premier choose-your-own-adventure series using a voice\nmail messaging system. There was a dizzying array of options to choose\nfrom, each one leading to more options. It had no end. I cycled past level\nafter level about filing new claims, frequently asked questions, and how\npart-time work affects benefits.\n\nI hung up once, redialed, and started again (I had gotten lost), and just\nwhen I had lost hope, I met Charles. He had to go ask his manager about\nSEAP. I waited on the phone until he came back to explain I had to go to\nan unemployment office to apply. Once there, I would be given a quiz, and\nmy answers would be scored to see if I qualified. Charles then gave me two\naddresses, one in Midtown Manhattan and the other in Harlem.\n\nThe next day, I set off for 247 W. 54th St. to take my quiz. That's when I\nexperienced my second adventure. Charles had sent me to a hole in the\nground. It was a massive two-story pit that stretched along one-third of\nthe block. To clarify, that's three full-length buildings. I did the only\nthing I could. I tried calling a new number in the instruction manual for\nhelp.\n\nA man at Manhattan's Board of Elections picked up and promptly hung up on\nme when I insisted he not give me the automated phone number for the\nDepartment of Labor that I'd tried on Thursday. He didn't seem to know or\ncare about SEAP.\n\nThen I tried a police station near the hole. The precinct gave me a\ntelephone number that was disconnected. The automated message instructed\nme to call a third number, which is how I came to talk to someone at the\nDepartment of Labor's fraud division. It was early afternoon.\n\nUnemployment: That building was knocked down two years ago.\nMe: So it seems.\n\nUnemployment: Who sent you there? Me: Your office—the Department of Labor\nin Albany—yesterday afternoon.\n\nUnemployment: Who?\nMe: Charles.\nUnemployment: Charles? What was his last name?\nMe: I didn't ask.\nUnemployment: Why not?\nMe: I didn't think he'd send me to an empty lot.\n\nThere was a pause. Not only had the woman never heard of SEAP, but she\nclearly doubted it existed. Apparently, no one ever used it to defraud New\nYork state. That would have made me feel good if I hadn't begun doubting\nwhether anyone ever used it. Eventually, she gave me some more Department\nof Labor offices and phone numbers in New York City. None of them matched\nCharles'.\n\nFor some reason, I decided to give him another shot. What were the chances\nof being sent to two holes? On Monday morning, prepared for my third\nadventure, I trekked back to the West Side and up to 215 W. 125th St.\nWorkforce (that's what New York calls the unemployment division) was on\nthe sixth floor. The receptionist behind the counter was very friendly. I\nasked for SEAP, prepared to explain what it was. \"Oh, SEAP! You have to\ncome back on Friday at 10. That's when we do that.\"\n\nI looked at her. Then I told her I'd just been sent to an empty lot on\nFriday. \"Would you like to talk to someone about that?\" she asked. Why,\nyes, I would. \"Just have a seat and wait for the next Workforce\norientation session. Afterward you can talk to a manager.\" I left.\n\nI was back on Friday at 9:30 a.m. The receptionist was delighted that I\nwas so early. At a quarter to 10, Simone emerged from the back and called\nmy name. I could just feel that this was to be my final adventure with New\nYork state. Surely, victory was at hand. As we walked to her desk, she\nexplained she only did SEAP at 10 and didn't normally start early. I\nthanked her. The office was a beehive of activity—it looked like the\ntrading floor of the New York Stock Exchange. Workers were everywhere,\ntalking with one another excitedly about how to get people back to work. I\nfelt really good about my taxes.\n\nSimone explained SEAP as we walked. It sounded nothing like Charles'\ndescription. I would fill out a paper form at her desk that she would\nsubmit to Albany. If I was lucky, that form would trigger an invitation\nthat would be mailed to me within the next two weeks. I should then attend\none of the regular orientation meetings for SEAP, where I would be given a\nfolder. In the folder would be an application, which I should fill out and\nsubmit to Albany. At some point—Simone didn't know when—I'd receive word\nif I qualified. I'd have to wait to start my media business until after\nthis process was complete. I smiled and thanked her. I left and prepared\nto go it alone.\n\nPostscript: Two weeks later, I got a letter in the mail about SEAP. I was\ninvited to attend an orientation meeting on April 27. Following the\ninvitation was a note: \"One of the criteria to qualify for SEAP is a\nworker re-employment score of 70 or higher. Your score is 66.\"\n","frontmatter":"headline: 'Adventures in State Bailouts'\npublication: 'Slate'\nposition: 'Freelance'"}

/***/ }),

/***/ "./app/data/clips/uva-charting-an-east-west-passage.md":
/*!*************************************************************!*\
  !*** ./app/data/clips/uva-charting-an-east-west-passage.md ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"Charting an East/West Passage","publication":"The Darden Report","position":"Freelance"},"body":"\nIn both the East and the West, it was hard to believe the story.\n\nAt a factory in Shenzen, China, at least 14 workers killed themselves in 2010. The factory, owned by Foxconn, produces iPads and iPhones for Apple and computers for Dell and Hewlett-Packard. By most accounts, the manufacturers’ unrelenting production demands had triggered the spate of\nsuicides.\n\nSo, who’s responsible? The Western companies, who rely increasingly on\nEastern contractors to produce their products for low wages and low\nprices? Or the Eastern manufacturer, whose plant managers and workers face\nincredible pressure to meet ambitious deadlines?\n\nIn his strategic management course “Strategic Thinking: Integrating East\nand West” this past spring, Darden School of Business Professor Ming-Jer\nChen asked his students to opine on the issue.\n\n“Chinese managers are shifting to the Western culture of produce,\nproduce, produce,” said Kristyn Kelly of the Class of 2011. “It’s the sort\nof hyper-productivity that only works if people are ready, willing and\nable to say ‘no.’” But Kelly says many Asians — long accustomed to rigid\nhierarchies — simply won’t say no. This time, the cultural clash appeared to have contributed to the tragedy.\n\nThe Foxconn case spotlights the challenges Eastern and Western managers\nface as they blend their businesses.\n\nAnd Chen is the perfect person to steer the conversation.\n\nA New Discipline\n\nChen’s work and life focus on balance. He grew up in Taitung on the\nsoutheast coast of Taiwan. As a youth, he studied philosophy and the\nChinese classics with a cousin of Puyi, “The Last Emperor” of China. In\n1981, Chen emigrated to the United States with a visionary quest: to “make\nthe world smaller.”\n\nBefore joining the Darden faculty in 2001, he was a professor at Columbia\nBusiness School and was founding director of the Global Chinese Business\nInitiative at the Wharton School of the University of Pennsylvania.\n\nChen focuses on ways to help managers combine the cultures, to narrow the\nEast-West divide. “I very much consider myself an academic entrepreneur,”\nsays Chen. And he’s a rather bold one. This summer, the management\nprofessor will blaze a new trail.\n\nAs vice president and program chair of the Academy of Management, Chen —\nwho will assume presidency of the group in 2012 — at this year’s annual\nconference intends to ask business scholars from around the world to study\nEastern and Western management techniques. His goal: find ways to\ncharacterize and quantify their di erences so executives can incorporate\nthe best — and avoid the worst — of each.\n\n“Ming-Jer has put his finger on a very important question,” says Jan\nRivkin, the Bruce V. Rauner professor and chair of Harvard Business\nSchool’s strategy unit. “Can a superior model of management emerge from\ncombining the best of both worlds?”\n\nThe academy conference should help Chen and his colleagues around the\nglobe find an answer. In August, the meeting will host more than 11,000 of\nthe organization’s 19,000 members. Among its ranks, the 75-year-old group\ncounts some of the world’s top scholars. For five days, they’ll meet in\nSan Antonio, Texas, to discuss the theme “West Meets East: Enlightening,\nBalancing and Transcending.”\n\nThe topic’s timing may be just right. “The United States still has the\nbest business system, but the system has also shown its vulnerability,”\nexplains Chen.\n\nIn 2008, a period of financial chicanery abruptly ended when the bubble it\ncreated in the U.S. housing market popped. Many still feel the e ects of\nthe recession that followed its explosion.\n\n“Because the economies in the West are soft, there are Westerners moving\nhere,” says Darden alumnus Peabody Hutton (MBA/JD ’77), general counsel of\nAjia Partners, a Hong Kong investment firm. Hutton says that for American\nAsians to set up shop on Eastern shores is not uncommon.\n\nThat’s one reason Chen thinks the market is ready to formally expand its\nhorizons.\n\nHe may be right. Harvard’s Rivkin leads the academy committee that\ndecides which sessions to feature during the annual meeting’s full-day\n“All-Academy Theme” program. Proposals have ranged from whether Asian\nbusiness schools should follow a Western model to yoga’s impact on an\norganization’s e ectiveness.\n\nThe variety of the proposed topics suggests that people may be ready for\nnew ideas. “For a long time, there was an assumption that Western\nmanagement was good management,” Rivkin says.\n\nThat may be changing, but can still be a hard sell.\n\nDefining the Eastern Paradox\n\nEasterners and Westerners think di erently.\nThe Foxconn suicides were a somber reminder of that. Yet\n\nthese di erences are often expressed more subtly than through questions\nabout workers’ rights.\n\n“Business [here] tends to be conducted less on the basis of merit and\nprice than on the basis of relationships,” says Ajia’s Hutton. The results\ncan be unpredictable.\n\nTo help explain the cultural nuances, Chen has lately been publishing\nabout an idea he calls “transparadox.”\n\nIt’s designed to o er Westerners a new way to think about ideas that\nappear to contradict each other but which may be two sides of the same\ncoin. In essence, transparadox proposes that notions that appear to be\noppositional — such as competition and cooperation — are interrelated or\neven interdependent, connected by a series of implicit links. Chen seeks\nto bridge a fundamental philosophical difference between the way\nEasterners and Westerners regard paradox. “By making these links\nexplicit,” says Chen, “we can enhance a mutual understanding that di\nerences are not irreconcilable.”\n\n“The Chinese are used to ambiguity,” says Hutton. Chen says there are\nplenty of reasons for Westerners to get used to it, and\n\nmoney is a big one.\nTraditionally, a corporation’s finances were managed at its\n\nWestern headquarters, says Leslie Grayson, professor emeritus of\ninternational business at Darden for whom Chen’s academic chair is named.\nToday, funds may move between foreign territories without passing\nthrough the West.\n\nAs a result, Easterners and Westerners have good reason to adapt to one\nanother.\n\n“If you don’t learn, there’s a penalty,” says Grayson. “You fail.”\nMeasuring Ambiculturality\n\nGiven their philosophical di erences, how do Easterners and Westerners\nsuccessfully combine their management strategies?\n\nThe answer could become one of Chen’s biggest hits. Last November, he\npublicly coined a term that may ultimately define not only this summer’s\nacademy conference but also the study of Eastern and Western management as\na whole: ambicultural.\n\nIt reads like intellectual popcorn. Say it aloud and ideas like\nambidexterity and cultural sensitivity come easily to mind. “The basic\npremise is that each culture in society has its own strengths and\nweaknesses when they’re applied to business practices,” Chen explains.\nCombining the best parts of each approach is ambicultural.\n\nBut this involves a trick. Strengths cannot be combined and weaknesses\navoided until they’ve been defined. So the professor is creating a survey\nto be sent to Eastern and Western managers later this year that he thinks\nwill do just that.\n\nFor instance, the survey may ask executives to rate the importance they\nplace on personal connections, and to numerically prioritize their\ninterest in employees, stakeholders and society.\n\n“I think there will be many di erent ways we can quantify the variables\nthat can reveal how ambicultural a company is,” Chen says. Already, he\nhopes to create a scale for companies to rate their use of cross-cultural\nmanagement strategies.\n\nThis wouldn’t be the first time Chen has developed a way to quantify the\nseemingly unquantifiable. In the mid-1980s, he spent months analyzing a\ndatabase of airline industry events that were covered by the trade\nnewspaper Aviation Daily. Thousands of articles were scored against\nvariables, such as “event visibility” or “response announcement speed,”\nthat Chen helped pioneer as a way to study airline competition over an\neight-year period.\n\nThe database made the competitive patterns that businesses fall into clear\nenough to study — and often, to predict.\n\nThe result: A popular new area of strategic theory named competitive\ndynamics emerged over the past 25 years in the management field and\ncontinues to thrive today. Competitive dynamics is the analysis of\ncompetition at the action and response level to predict how a firm will\nact or react toward opponents.\n\nAn Eastern or Western Face?\nAll the signs suggest “ambicultural” will be as big a hit.\n\nThe concept is not even a year old, yet management expertsare already\nstarting to buzz about it.\n\nIn March, an Asian edition of the Harvard Business Review\n\ntranslated the word into Chinese. Now, the editors of the U.S. edition are\ntalking to Chen about producing their own story on it. And next year, many\nbusiness students will study the term in the new edition of a well-known\ntextbook on strategic management.\n\nThe word’s surging popularity isn’t surprising. People are hungry for ways\nto sail between the East and West more easily.\n\n“Right now, what we need to do is to compare management systems from one\ncountry [against those of] another country,” says Grayson.\n\nThe hard part is doing that without judging the results harshly. Consider\njob interviews. Grayson says that rather than just examining competence,\nAsian companies focus on learning “who” they are considering hiring. This\nmay entail asking questions some Western countries deem illegal, such as\nwhether the candidate is married or plans on having children.\n\nChen’s ideas can’t solve legal problems like those, but they may help\nmanagers bridge the cultural chasm underlying them. Still, it’s a big task\n— certainly too big for one man to perform alone, and the strategy expert\nhas no intention of trying to do so single-handedly. Rather, his plan is\nto work through the Academy of Management to expose his colleagues to a\nframework they can use to study it on their own. The approach already\nseems to be working.\n\nDarden student Kelly — who worked for the U.S. Navy before coming to\nDarden and studying Foxconn with Chen — says he opened her eyes to the\nEast.\n\n“We’re still viewing China through a Western lens,” she says. “We’re not\nviewing the Chinese as partners.”\n","frontmatter":"headline: 'Charting an East/West Passage'\npublication: 'The Darden Report'\nposition: 'Freelance'"}

/***/ }),

/***/ "./app/data/clips/uva-is-the-wine-trade-recession-proof.md":
/*!*****************************************************************!*\
  !*** ./app/data/clips/uva-is-the-wine-trade-recession-proof.md ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"Is the Wine Trade Recession-Proof?","publication":"The Darden Report","position":"Freelance"},"body":"\nNO ONE GOT A CHANCE to put away the crate of Tignanello when it first\narrived at Young’s Fine Wines. Its six \\$109 bottles of wine barely had a\nchance to rest on the Manhasset, New York storeroom floor. Two hours\nlater, every bottle had been bought. That was two years ago, long before\nthe pain of recession set into people’s minds.\n\nThese days, Young’s wealthy Long Island clientele of Wall Street bankers\nand Madison Avenue advertising executives aren’t so quick to spend so big.\nThat’s why the store is pushing wines ranging in price from $15 to \\$25\nfrom a huge stock that regularly runs over 3,000 bottles. “At some point,\npeople are going to buy less,” said Young’s President Edward Wassmer (TEP\n’95).\n\nWithout a doubt, the recession has sharpened the senses and tightened the\nwallets of almost everyone. Like Wassmer, people throughout the wine trade\nare struggling to find ways to maintain sales without just slashing\nprices. While some markets, such as luxury clothing, have already moved to\nmassive discounts in the face of an economizing public, the wine industry\nhopes it can buck the trend—or at least embrace it slowly.\n\n“People are going to continue to drink. I think it’s one of our national\npastimes, isn’t it?” asked Gene Meoni, general manager of hospitality for\nthe Darden School Foundation, which includes a pub and a 300-seat dining\nroom. Recent sales at wine retailers suggest he’s right. They increased by 4.9 percent year-over-year to $8.2 billion for the 52 weeks ending January 10 (which includes the lucrative holiday season), according to Nielsen Scantrak. Indeed, for the four weeks ending January 10—just after the recession became official—retail sales grew 7.6 percent to \\$810 million.\n\nStill, pressure remains high to retain a big cut of those numbers.\n“Everybody can dance around it, but retailers want sharply reduced\nprices,” said Jack Kennard (MBA ’73), a senior vice president at Brown-Forman, one of the largest producers of wine and spirits in the world.\nKennard argues that giving into widespread and deep price reductions is a\nmistake that will permanently undermine a business’s product and a brand’s\nhealth. “Deep discounting is highly destructive to brand equity over the\nlong term,” he said.\n\nAs of early February, Brown-Forman was resisting deep price cuts. Instead,\nthe company was enticing sales by developing limited-time marketing\nprograms geared toward adding value at the point of purchase. For example,\nsome wines now include stemware boxed in gift sets, and the company is\ncreating more attractive gift cards and packaging to encourage sales.\nWhether people will buy the strategy for long is hard to say, as no one\nknows just how bad the economy will get—or when it will get better.\n\nOne thing is already clear, though— cheaper is better as far as consumers\nare concerned. Nielsen reports that the $3.00 – \\$5.99 category of wine\nbottles saw the strongest year-over-year growth at 12.9 percent to \\$189\nmillion for the four weeks ending January 10. Yet wines costing \\$15 or\nmore grew only 3.7 percent to \\$120 million during the same period. Indeed,\nthat was the only price range to shrink last fall as the economic strength\nof the U.S. plummeted, dropping 0.5 percent to \\$311 million over the 13\nweeks ending January 10.\n\nWithout a doubt, premium wines are in a tough spot. Judith Fowler (MBA\n’81), owner of the Clevedon, New Zealand– based winery Puriri Hills, knows\nthat only too well. With just 12,000 bottles of wine coming out of her\nwinery a year, Fowler agrees that cutting the price of her three labels,\nwhich range from $25 to \\$150 in the U.S., is a bad idea. “The price point\nhas to say something about quality,” she said. A strategy of massive price\ndiscounting is incompatible with the small volumes produced.\n\nThough the pressure is on, the 13-year- old winery is standing behind its\nconviction that “handmade, estate-bottled wines such as ours are becoming\nmore desirable as people shift from industrially produced foods to\nartisanal foods, even in the current tough market environment.” Puriri\nHills views the recession as an opportunity to grow within its market\nsegment, and the winery has found some palatable ways to inspire sales.\nLate last year, Fowler began giving some distributors price breaks or\ncredits for local taxes to help keep them in business to sell her cases.\n\n“You have to encourage your middle men in this kind of a time,” she said.\nFor instance, Fowler did not raise prices on a distributor in one Asian\nmarket whose native currency strengthened as much as 50 percent in the\nlast year against the New Zealand dollar. Though the distributor is e\nectively paying half as much for the same goods, keeping him on has helped\nPuriri Hills maintain and create sales in a tough environment.\n\nThose same currency fluctuations may also help Puriri Hills increase its\ndistribution. The New Zealand dollar has weakened by as much as 40 percent\nagainst the U.S. dollar in the last year, so Fowler is now looking into\nselling her wines in the U.S., in states beyond her native Virginia. As of\nFebruary, she was talking with her son—who distributes Puriri Hills in the\nU.S.—about selling them in New York City and Chicago. “You look for the\nspecific place where the customers want something unusual,” she said.\n\nShe may be on to something at a time when bars and restaurants are already\nstruggling to keep business up, said Darden’s Meoni. Wine sales are often\nan important component of their revenues because of what can be an\nextremely high markup on each bottle. But with people spending carefully,\nMeoni said both groups are thirsty for unusual labels from places such as\nNew Zealand that can sustain a similar markup at a lower price than super-high premium wines. “There’s a lot of stu that isn’t mainstream that is a very, very good value,” he said.\n\nStill, there is a strong demand for cheaper wines. That’s a big reason\nPleasant Valley Wine Company President Mike Doyle (MBA ’66) said business\nis booming right now. While the winery sells some of its own labels, much\nof its business comes from producing wines for third parties whose bottles\ngenerally run less than $20. “This is usually a slow time of year, and we’re pretty busy,” said Doyle. In fact, there are more opportunities than he can keep up with at the moment. And why not—he said most people can’t tell the difference between a \\$25 and a \\$125 bottle of Merlot.\n\nBrown-Forman’s Kennard doesn’t entirely agree. The “trade-down” effect,\nas the industry likes to call it, is only temporary, he said. By shying\naway from expensive wines and spirits, people aren’t casting a vote\nagainst the premium brands they’ve been loyal to for many years. “They\njust simply feel it’s not right for them right now as they attempt to\neconomize,” he said. “Luxury brands are ‘worn’ by consumers like badges,\nand premium sector wine and spirits consumers look forward rather\nhopefully to better times when they will confidently express themselves\nthrough luxury brands again.”\n\nWassmer of Young’s Fine Wines echoes the sentiment, but said these days he\nneeds to go with the flow. Despite strong sales in 2007, he decided it was\ntime to plan for a recession two years ago. Wall Street’s violent\nreactions to small slips in sales were one reason why. “You could see\npeople with just a little bit of softness were in a scramble,” he said. So\nhe cut back buying some popular—and pricey—vintages.\n\nAnd he did something curious: he started hiring. With some wine\ndiscounters nearby, competing on price alone was unlikely without a lot of\nattention to service and selection. “There’s really no way to e ectively\nsell that many items [over 3,000 bottles], but put out ‘shelf talkers’ to\nget the job done,” said Wassmer. Last year, he boosted the sales sta from\none full time person and two part-timers to three full time people and one\npart-timer, and developed a nine-week training course for them known as\n“Young’s U.”\n\nThere are early signs it’s working. An increase in customer count in\nJanuary—a traditionally weak month—of 11 percent to 7,684 people helped\ncushion a drop in sales of roughly one percent. In fairness, the recession\nmay be supercharging the strategy, driving people into retailers like\nYoung’s as they limit visits to bars and restaurants. Still, Wassmer said\nthe increase in count is a big reason he’s cautiously optimistic about 2009. But just in case, Wassmer may have hit upon a new way to ultimately\nlower some of the costs involved in educating his clientele—Internet\nvideo.\n\nThe store just launched a web-based video series named “Wine in a Minute.”\nEach short spot—which takes a day and a half to prepare—encourages\ncustomers to try new wines by educating them about new options. Right now,\nWassmer is not measuring the return on investment, but he’s already\noptimistic about the low-cost video programming based on anecdotal\nfeedback from customers. “It’s constantly a game of keeping your consumer\nexcited and educated,” he said. \n\nAnd coming back for more.\n","frontmatter":"headline: 'Is the Wine Trade Recession-Proof?'\npublication: 'The Darden Report'\nposition: 'Freelance'"}

/***/ }),

/***/ "./app/data/projects sync recursive \\.md$":
/*!**************************************!*\
  !*** ./app/data/projects sync \.md$ ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./arrow.md": "./app/data/projects/arrow.md",
	"./slingshot.md": "./app/data/projects/slingshot.md",
	"./tmmnews.md": "./app/data/projects/tmmnews.md"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app/data/projects sync recursive \\.md$";

/***/ }),

/***/ "./app/data/projects/arrow.md":
/*!************************************!*\
  !*** ./app/data/projects/arrow.md ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"projectName":"Arrow","type":"Personalize interactive video","technologies":"Cloud: AWS ∙ Language: PHP ∙ Transcoding: FFmpeg","contribution":"As Three Minute Media's founder, I oversaw platform development, managing our project lead and prioritizing features.","description":"Arrow makes it easy for editors, salespeople and others to customize both content and interactive features on a one-to-one basis without help from a service provider.","captions":["Arrow caption one","Arrow caption two","Arrow caption three"],"projectThumbnail":["https://picsum.photos/196/175/?random","https://picsum.photos/197/175/?random","https://picsum.photos/198/175/?random"],"full":["https://picsum.photos/873/569/?random","https://picsum.photos/874/569/?random","https://picsum.photos/875/569/?random"]},"body":"","frontmatter":"{\n  projectName: 'Arrow',\n  type: 'Personalize interactive video',\n  technologies: 'Cloud: AWS ∙ Language: PHP ∙ Transcoding: FFmpeg',\n  contribution: \"As Three Minute Media's founder, I oversaw platform development, managing our project lead and prioritizing features.\",\n  description: 'Arrow makes it easy for editors, salespeople and others to customize both content and interactive features on a one-to-one basis without help from a service provider.',\n  captions: [\n    'Arrow caption one',\n    'Arrow caption two',\n    'Arrow caption three'\n  ],\n  projectThumbnail: [\n    'https://picsum.photos/196/175/?random',\n    'https://picsum.photos/197/175/?random',\n    'https://picsum.photos/198/175/?random'\n  ],\n  full: [\n    'https://picsum.photos/873/569/?random',\n    'https://picsum.photos/874/569/?random',\n    'https://picsum.photos/875/569/?random'\n  ]\n}"}

/***/ }),

/***/ "./app/data/projects/index.js":
/*!************************************!*\
  !*** ./app/data/projects/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function () {
  var context = __webpack_require__("./app/data/projects sync recursive \\.md$");

  return context.keys().map(function (key) {
    return context(key);
  });
}();

/***/ }),

/***/ "./app/data/projects/slingshot.md":
/*!****************************************!*\
  !*** ./app/data/projects/slingshot.md ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"projectName":"Slingshot","type":"Global software demos","technologies":"Cloud: AWS ∙ Language: PHP ∙ Broadcasting: PubNub / Websockets","contribution":"As Three Minute Media's founder, I oversaw platform development, managing our project lead and prioritizing features.","description":"Unlike most presentation platforms, which prioritize slide/graphic design, SlingShot focuses on the choreography of live software demonstrations. It makes it easy for a presenter to give a non-linear presentation, switching between slides and live product features in order to tell the best story possible. Unlike most presentation platforms, which prioritize slide/graphic design, SlingShot focuses on the choreography of live software demonstrations. It makes it easy for a presenter to give a non-linear presentation, switching between slides and live product features in order to tell the best story possible. Unlike most presentation platforms, which prioritize slide/graphic design, SlingShot focuses on the choreography of live software demonstrations. It makes it easy for a presenter to give a non-linear presentation, switching between slides and live product features in order to tell the best story possible. Unlike most presentation platforms, which prioritize slide/graphic design, SlingShot focuses on the choreography of live software demonstrations. It makes it easy for a presenter to give a non-linear presentation, switching between slides and live product features in order to tell the best story possible.","captions":["Slingshot caption one","Slingshot caption two","Slingshot caption three"],"projectThumbnail":["https://picsum.photos/199/175/?random","https://picsum.photos/200/175/?random","https://picsum.photos/201/175/?random"],"full":["https://picsum.photos/876/569/?random","https://picsum.photos/877/569/?random","https://picsum.photos/878/569/?random"]},"body":"","frontmatter":"{\n  projectName: 'Slingshot',\n  type: 'Global software demos',\n  technologies: 'Cloud: AWS ∙ Language: PHP ∙ Broadcasting: PubNub / Websockets',\n  contribution:\n    \"As Three Minute Media's founder, I oversaw platform development, managing our project lead and prioritizing features.\",\n  description:\n    'Unlike most presentation platforms, which prioritize slide/graphic design, SlingShot focuses on the choreography of live software demonstrations. It makes it easy for a presenter to give a non-linear presentation, switching between slides and live product features in order to tell the best story possible. Unlike most presentation platforms, which prioritize slide/graphic design, SlingShot focuses on the choreography of live software demonstrations. It makes it easy for a presenter to give a non-linear presentation, switching between slides and live product features in order to tell the best story possible. Unlike most presentation platforms, which prioritize slide/graphic design, SlingShot focuses on the choreography of live software demonstrations. It makes it easy for a presenter to give a non-linear presentation, switching between slides and live product features in order to tell the best story possible. Unlike most presentation platforms, which prioritize slide/graphic design, SlingShot focuses on the choreography of live software demonstrations. It makes it easy for a presenter to give a non-linear presentation, switching between slides and live product features in order to tell the best story possible.',\n  captions: [\n    'Slingshot caption one',\n    'Slingshot caption two',\n    'Slingshot caption three'\n  ],\n  projectThumbnail: [\n    'https://picsum.photos/199/175/?random',\n    'https://picsum.photos/200/175/?random',\n    'https://picsum.photos/201/175/?random'\n  ],\n  full: [\n    'https://picsum.photos/876/569/?random',\n    'https://picsum.photos/877/569/?random',\n    'https://picsum.photos/878/569/?random'\n  ]\n}"}

/***/ }),

/***/ "./app/data/projects/tmmnews.md":
/*!**************************************!*\
  !*** ./app/data/projects/tmmnews.md ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"projectName":"TMMnews","type":"Bespoke video news","technologies":"Cloud: WordPress ∙ Language: JavaScript, HTML, CSS","contribution":"News anchor, oversaw platform development, managed dev team, prioritized features.","description":"TMMnews is a custom WordPress theme that programmatically assembles news shows from individual video segments.","captions":["TMMnews caption one","TMMnews caption two","TMMnews caption three"],"projectThumbnail":["https://picsum.photos/202/175/?random","https://picsum.photos/203/175/?random","https://picsum.photos/204/175/?random"],"full":["https://picsum.photos/879/569/?random","https://picsum.photos/880/569/?random","https://picsum.photos/881/569/?random"]},"body":"","frontmatter":"{\n  projectName: 'TMMnews',\n  type: 'Bespoke video news',\n  technologies: 'Cloud: WordPress ∙ Language: JavaScript, HTML, CSS',\n  contribution:\n    'News anchor, oversaw platform development, managed dev team, prioritized features.',\n  description:\n  'TMMnews is a custom WordPress theme that programmatically assembles news shows from individual video segments.',\n  captions: [\n    'TMMnews caption one',\n    'TMMnews caption two',\n    'TMMnews caption three'\n  ],\n  projectThumbnail: [\n    'https://picsum.photos/202/175/?random',\n    'https://picsum.photos/203/175/?random',\n    'https://picsum.photos/204/175/?random'\n  ],\n  full: [\n    'https://picsum.photos/879/569/?random',\n    'https://picsum.photos/880/569/?random',\n    'https://picsum.photos/881/569/?random'\n  ]\n}"}

/***/ }),

/***/ "./app/data/reveries sync recursive \\.md$":
/*!**************************************!*\
  !*** ./app/data/reveries sync \.md$ ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./02-02-2019-welcome-to-reverie.md": "./app/data/reveries/02-02-2019-welcome-to-reverie.md",
	"./02-03-2019-pedestal-sink.md": "./app/data/reveries/02-03-2019-pedestal-sink.md",
	"./03-19-2019-wherefore-im-forced-into-browser-testing.md": "./app/data/reveries/03-19-2019-wherefore-im-forced-into-browser-testing.md",
	"./03-30-2019-the-impossibility-of-web-images.md": "./app/data/reveries/03-30-2019-the-impossibility-of-web-images.md"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app/data/reveries sync recursive \\.md$";

/***/ }),

/***/ "./app/data/reveries/02-02-2019-welcome-to-reverie.md":
/*!************************************************************!*\
  !*** ./app/data/reveries/02-02-2019-welcome-to-reverie.md ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"type":"reverie","headline":"Welcome to Reverie","date":"March 2, 2019","slug":"Let's slip away"},"body":"\nHi. Welcome to Reverie.\n\nI'm not entirely sure what this is, but here's what it's not:\n\n* A click-bait machine\n* Something terribly serious\n* A place for regular commentary\n\nHere's what it may be:\n\nA spot for a few thoughts about whatever momentarily inspires me. That should keep it light, although, I have a couple longer pieces I'd like to do about things like:  \n\n* The state of broadcast TV Web sites\n* Some thoughts on Netflix and Amazon Prime\n* A question about privacy options on smartphones\n\nHere's how it works:\n\n* Reverie is accessed through the footer, not header, because it's like a daydream — irregular and ancillary to the the site.\n* Clicking Reverie from Reverie will take you back to whereever you were before it. If you came directly here, you'll go home.\n* I built this from scratch. It's an actual, real-life, home-grown blog. Half the point was to figure out how to do it. I'll write about that soon-ish.\n\nWhat about social sharing and the like?\n\nWell, let's see if I keep this up and if anyone reads, then I can explore. \n\nWhat about Medium, where all the cool kids write these days?\n\nMeh. Something to be said for going old school, for now.\n\nThat's it. Look around. Email me. Enjoy.\n\n-j","frontmatter":"type: reverie\nheadline: Welcome to Reverie\ndate: March 2, 2019\nslug: Let's slip away"}

/***/ }),

/***/ "./app/data/reveries/02-03-2019-pedestal-sink.md":
/*!*******************************************************!*\
  !*** ./app/data/reveries/02-03-2019-pedestal-sink.md ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"type":"reverie","headline":"Pedestal sinks","date":"March 3, 2019","slug":"Pedestal stinks"},"body":"\nSad to say, I have a pedestal sink. \n\nIt's got a wide, flat bottom. I'm sure I thought these things looked great in pictures once. Then I got one. Three problems:\n\n1. Don't lean too low if you spit after brushing your teeth. It often bounces back at you because the bottom's flat.\n\n2. The sink gets dirty very quickly. Flat bottoms don't drain well.\n\n3. There's almost nowhere to put anything because the pedestal's bezel is thin-n-narrow. \n   \nI know these things look great on Instagram, but they make lousy roommates.\n\n-j\n\n<!-- <iframe width=\"480\" height=\"270\" src=\"https://www.youtube.com/embed/XSpw22HPdHU\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe> -->\n","frontmatter":"type: reverie\nheadline: Pedestal sinks\ndate: March 3, 2019\nslug: Pedestal stinks"}

/***/ }),

/***/ "./app/data/reveries/03-19-2019-wherefore-im-forced-into-browser-testing.md":
/*!**********************************************************************************!*\
  !*** ./app/data/reveries/03-19-2019-wherefore-im-forced-into-browser-testing.md ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"type":"reverie","headline":"Wherefore I'm forced to browser test","date":"March 19, 2019","slug":"Browser testi"},"body":"\nI was forced into browser testing today. Why?\n\nI tried to run the site on an old iPad Mini (iOs 8, Safari 8) around 8 last night. Disaster. It wouldn't load. I eventually realized the problem — Safari 8 didn't understand some of my code (something like: 'meMyselfAndI'.includes('me')). \n\nSo I polyfilled it (meaning I used a plugin to add the missing method) via Bowser and Webpack. And I learned my lesson — with this much work in, browser testing is not optional.\n\nSo there I am talking to myself at all hours of the night, running my first test with Endtest. It's a browser-testing platform. You give it a URL, it takes a screenshot on whatever machine and browser you specify. I got a test running — one of their free ones. I liked the results, but Endtest wants $138 per month for the platform. Not for me. \n\nSo I Googled competitors and settled on BrowserStack because I've heard of them, their product's comprehensive, and, frankly, I found the $39 a month (if you go monthly) palatable. I think I only need a month's testing. \n\n(BrowserStack has a freelancer rate, but you can't do screenshots with it. Worthless.)\n\nA review's next, but I'll say this now — love what they're trying to do.\n\n-j\n\n\n\n\n\n\n","frontmatter":"type: reverie\nheadline: Wherefore I'm forced to browser test\ndate: March 19, 2019\nslug: Browser testi"}

/***/ }),

/***/ "./app/data/reveries/03-30-2019-the-impossibility-of-web-images.md":
/*!*************************************************************************!*\
  !*** ./app/data/reveries/03-30-2019-the-impossibility-of-web-images.md ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"3ype":"reverie","headline":"The impossibility of Web images","date":"March 30, 2019","slug":"Randomly choosing Web images"},"body":"\nFile Web images under life's great mysteries.\n\nI wanted my icon files — which I use for chapter and menu buttons — to be as small as possible. According to Google's guide to Web images, the best format for them is JPG. See the picture under [\"Selecting the right image format\"](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization).\n\nGoogle says that among rasters (files that encode color values for every pixel), JPG is great for images with few details and small color palettes.\n\nNow, let's look at practical reality. \n\nThe chapter icon (a filled-in circle image) is eight pixels by eight pixels and uses one color. This results in the following file sizes:\n\n* SVG (Inkscape): 2 kilobytes\n* SVG (Optimized): 722 bytes (Inkscape-specific data is stripped out)\n* JPG: 966 bytes (Exported from a PNG using the worst quality setting in a Mac's \"Preview\" app)\n* PNG: 674 bytes\n\nI went with PNG, obviously. \n\nSo, firstly, knowing what's best upfront may be clearer with more knowledge and experience. \n\nSecondly, look at the SVG. It uses plain English to describe how images should look (like HTML does for Web pages). Its two kilobytes no matter the image's size. If it got bigger, this format would be great becuse the file would still be two kilobytes. In this case, the image is fixed at eight pixels, so I don't think it matters. \n\nBut, here's the bottom line — \n\nWhen you factor all the variables in Google's article together, there's a lot of magic here. That's why my results don't follow the rules so well. It all comes down to trial and error. Kinda gives you the uncomfortable feeling that knowledge is overrated, right?\n\nAnyway, still owe a review on BrowserStack.\n\n-j\n","frontmatter":"3ype: reverie\nheadline: The impossibility of Web images\ndate: March 30, 2019\nslug: Randomly choosing Web images"}

/***/ }),

/***/ "./app/data/reveries/index.js":
/*!************************************!*\
  !*** ./app/data/reveries/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function () {
  var context = __webpack_require__("./app/data/reveries sync recursive \\.md$");

  return context.keys().map(function (key) {
    return context(key);
  }).sort(function (a, b) {
    var dateA = new Date(a.attributes.date);
    var dateB = new Date(b.attributes.date);
    return dateB - dateA;
  });
}();

/***/ }),

/***/ "./app/data/the-story sync recursive \\.md$":
/*!***************************************!*\
  !*** ./app/data/the-story sync \.md$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./story-chapter-four.md": "./app/data/the-story/story-chapter-four.md",
	"./story-chapter-one.md": "./app/data/the-story/story-chapter-one.md",
	"./story-chapter-three.md": "./app/data/the-story/story-chapter-three.md",
	"./story-chapter-two.md": "./app/data/the-story/story-chapter-two.md"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app/data/the-story sync recursive \\.md$";

/***/ }),

/***/ "./app/data/the-story/index.js":
/*!*************************************!*\
  !*** ./app/data/the-story/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function () {
  var context = __webpack_require__("./app/data/the-story sync recursive \\.md$");

  var keys = context.keys();
  return keys.map(function (key) {
    return context(key);
  }).sort(function (a, b) {
    return a.attributes.number - b.attributes.number;
  });
}();

/***/ }),

/***/ "./app/data/the-story/story-chapter-four.md":
/*!**************************************************!*\
  !*** ./app/data/the-story/story-chapter-four.md ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"Practical magic","image":"https://user-images.githubusercontent.com/30417590/55294138-43f3dd80-53cc-11e9-96c2-3c7f2977c24a.jpg","number":4},"body":"\nThe Six train sped through darkness.\n\nThe boy climbed out at Wall Street, and snaked through back alleys to Hanover Square. Magicians thronged the way.\n\n\"Coding school,\" he said. \n\nA white tower soared skyward. The boy logged into practical magic 11 flights up. Code covered computer screens across the floor. While smart and austere, the logic lacked something important.\n\n\"Purpose,\" he thought.\n\nPixelated colors flooded the floor, stirring memories of impractical magic. \"Software is a story,\" he said, as a blur zipped across the horizon. The city and its spires were drenched in warm autumn light. \n\n\"Code the way to tell it,\" he added as he wrote a small recursive loop to screen.\n\nThat night, a fairy darted inside the boy's room as he slept. She skid to a swift stop on the dark lamp beside him. \"He does believe,\" she cried down its spout. \n\nAn angry blue bolt shot out. \n\nThen the gold grew warm and took on a purple glow...but, that's another story.","frontmatter":"title: 'Practical magic'\nimage: 'https://user-images.githubusercontent.com/30417590/55294138-43f3dd80-53cc-11e9-96c2-3c7f2977c24a.jpg'\nnumber: 4"}

/***/ }),

/***/ "./app/data/the-story/story-chapter-one.md":
/*!*************************************************!*\
  !*** ./app/data/the-story/story-chapter-one.md ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"A magic quest","image":"https://user-images.githubusercontent.com/30417590/55294138-43f3dd80-53cc-11e9-96c2-3c7f2977c24a.jpg","number":1},"body":"\nThe cardboard fort crumbled.\n\nA small fairy destroyed it after zipping through the wide-eyed boy's window with all the force of a cannonball. \n\n\"Want to find a glowing purple lamp,\" she asked, beaming as she floated eye-level.\n\n\"Of course,\" he said. \"What do I do?\"\n\nShe laughed the sound of waves crashing ashore. Then she took his hand and flew them over the moon toward home — a land of grand adventure. \n\nBy day, they searched, soaring over pirate ships, chasing Jinns across sun-drenched sands. And, by night, they told amazing stories about their big adventures. \n\nLate one night, the fairy sighed. \"You've grown up,\" she said. \"Time to go home.\" \n\nThe boy started sniffling.\n\nShe smiled kindly, then knocked twice on the floor between them. A door opened. She dove in and flew out with the very thing they'd sought! A golden lamp, etched by purple incantations. \n\n\"The adventure matters most,\" she told a fast fading boy. Then she read one aloud. \n\n\"By bright day and black night, through tall tale and purple light, rub me twice and release my might, if...\" Too late. \n\nHe was out.","frontmatter":"title: 'A magic quest'\nimage: https://user-images.githubusercontent.com/30417590/55294138-43f3dd80-53cc-11e9-96c2-3c7f2977c24a.jpg\n# image: '/fantasy-scene-with-blue-dragon-treasure-chest-and-pile-of-golden-coins-d-illustration-707801968.jpg'\nnumber: 1"}

/***/ }),

/***/ "./app/data/the-story/story-chapter-three.md":
/*!***************************************************!*\
  !*** ./app/data/the-story/story-chapter-three.md ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"The reality glitch","image":"https://user-images.githubusercontent.com/30417590/55294138-43f3dd80-53cc-11e9-96c2-3c7f2977c24a.jpg","number":3},"body":"\nOne morning, the boy's room twinkled.\n\nDust, scattered by a broom, was catching the sun's pale winter light. The quiet was pierced by the hollow ring of the broom on metal. The boy knelt to pick it up.\n\n\"I forgot about you,\" he said, tracing the lamp's purple etchings with a finger.\n\nReality glitched. \n\nClear red rays shot between sparkles of dust, drawing a giant Jinn into view. It scowled at the dark gold lamp. \n\n\"What are you doing,\" it screamed.\n\nThe Jinn leaned forward, stabbing at the boy with crisp blue sparks. \"You've lost my secret,\" it roared. All seemed lost.\n\nThen the tick tock of time carried a small fairy through the improbable scene. She yelled violently at the Jinn, who shrank from her sight, then turned to speak.\n\nBut the Jinn, flushed and angry, tried to slam hands around her, waking the boy with thunder. A coding school website glowed beside the darkened lamp.\n\nFate seemed sealed.","frontmatter":"title: 'The reality glitch'\nimage: 'https://user-images.githubusercontent.com/30417590/55294138-43f3dd80-53cc-11e9-96c2-3c7f2977c24a.jpg'\nnumber: 3"}

/***/ }),

/***/ "./app/data/the-story/story-chapter-two.md":
/*!*************************************************!*\
  !*** ./app/data/the-story/story-chapter-two.md ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"True adventure","image":"https://user-images.githubusercontent.com/30417590/55294138-43f3dd80-53cc-11e9-96c2-3c7f2977c24a.jpg","number":2},"body":"\nThe boy woke at home the next day. \n\nThe gold lamp sat on his bedside table. It glowed slightly purple. \"What does that mean,\" he asked, hoping for a sign.\n\nNone came. It was just a lamp. \n\nSo he got on with life. He studied, became a lawyer, and then a journalist. He wrote about media, technology, and venture capital for Forbes and others.\n\nNo matter what he did, he kept the lamp nearby. The boy loved its mystery. \"Why do you get brighter when I tell stories,\" he'd wonder aloud sometimes. \n\nBest he didn't know. \n\nAdventure demands the unknown. Thus, there was nothing holding him back the day he met a software developer and began to build two Web platforms. \n\nOne ran interactive video networks, the other, remote software demos, smooth like silk. He pitched them tirelessly. \n\nBut neither took, and he tired of the tale. As he did, the golden lamp's purple glow grew dim. Then he stretched one night, knocking it beneath its table, dark.","frontmatter":"title: 'True adventure'\nimage: 'https://user-images.githubusercontent.com/30417590/55294138-43f3dd80-53cc-11e9-96c2-3c7f2977c24a.jpg'\nnumber: 2"}

/***/ }),

/***/ "./app/header-footer/Footer.jsx":
/*!**************************************!*\
  !*** ./app/header-footer/Footer.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterContainer; });
/* harmony import */ var _shared_Button_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/Button.jsx */ "./app/shared/Button.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../primitives/StyledLink.jsx */ "./app/primitives/StyledLink.jsx");




var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].footer.withConfig({
  displayName: "Footer__Container",
  componentId: "sc-13gwbe8-0"
})(["background-color:", ";flex-shrink:0;display:flex;justify-content:", ";align-items:center;height:55px;font-size:", ";position:relative;@media (min-width:", "){justify-content:flex-end;}"], function (p) {
  return p.home ? 'transparent' : p.reverie ? p.theme.colors.reverieBlue : p.theme.colors.white;
}, function (p) {
  return !p.story ? 'flex-end' : 'space-between';
}, function (p) {
  return p.theme.fontSizes.one;
}, function (p) {
  return p.theme.mediaQueries.desktopView;
});
var Line = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Footer__Line",
  componentId: "sc-13gwbe8-1"
})(["display:", ";position:absolute;z-index:0;left:25px;right:25px;top:0px;margin:0px;height:1px;transform:scaleY(0.5);background-color:", ";@media(min-width:", "){display:", ";}"], function (p) {
  return p.home || p.hide ? 'none' : '';
}, function (p) {
  return p.theme.colors.lightPink;
}, function (p) {
  return p.theme.mediaQueries.desktopView;
}, function (p) {
  return !p.showStoryText ? 'block' : '';
});
var StoryButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_shared_Button_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]).withConfig({
  displayName: "Footer__StoryButton",
  componentId: "sc-13gwbe8-2"
})(["color:", ";margin-left:25px;background-color:", ";border:", ";width:43px;padding:7px;@media (min-width:", "){display:none;}https://stackoverflow.com/a/18997800 &:after{position:absolute;top:0;left:0;width:200%;height:200%;border:1px #999 solid;;transform:scale(0.5);}"], function (p) {
  return !p.active ? p.theme.colors.yellow : p.theme.colors.blue;
}, function (p) {
  return !p.active ? p.theme.colors.pink : undefined;
}, function (p) {
  return "1px solid ".concat(!p.active ? p.theme.colors.pink : p.theme.colors.pink);
}, function (p) {
  return p.theme.mediaQueries.desktopView;
});
var Graf = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "Footer__Graf",
  componentId: "sc-13gwbe8-3"
})(["cursor:pointer;margin-right:20px;margin-bottom:0px;color:", ";padding-top:5px;padding-bottom:5px;padding-right:5px;font-weight:400;font-size:", ";"], function (p) {
  return p.active ? p.theme.colors.pink : p.theme.colors.blue;
}, function (p) {
  return p.theme.fontSizes.one;
});
var TextBox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Footer__TextBox",
  componentId: "sc-13gwbe8-4"
})(["display:flex;z-index:1;"]);
function FooterContainer(props) {
  var boundHandleClickForApp = props.boundHandleClickForApp,
      appState = props.appState;
  var currentCaller = appState.currentCaller,
      lastCaller = appState.lastCaller,
      showBusinessCard = appState.showBusinessCard,
      showLegalTerms = appState.showLegalTerms,
      showStoryText = appState.showStoryText;
  var isReverie = currentCaller === 'reverie';
  var isStory = currentCaller === 'chapter';
  var isHome = currentCaller === 'home'; // Remember: home is '/', not '/home'

  var whereItStarted = lastCaller !== 'home' && lastCaller !== 'i' ? "/".concat(lastCaller) : '/';
  var linkForReverie = isReverie ? whereItStarted : '/reverie';
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    home: isHome,
    story: isStory,
    reverie: isReverie
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Line, {
    home: isHome,
    hide: !showStoryText && !isReverie || showBusinessCard || showLegalTerms,
    showStoryText: showStoryText
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StoryButton, {
    active: showStoryText,
    clickFunction: function clickFunction() {
      return boundHandleClickForApp('toggleStoryText');
    },
    className: "story-button",
    conditional: true,
    show: isStory,
    text: showStoryText ? 'Show' : 'Hide'
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextBox, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    to: linkForReverie
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Graf, {
    active: isReverie && 'active' || undefined
  }, "Reverie")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Graf, {
    active: showBusinessCard,
    onClick: function onClick() {
      boundHandleClickForApp('toggleBusinessCard');
    }
  }, "Contact"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Graf, {
    active: showLegalTerms,
    onClick: function onClick() {
      return boundHandleClickForApp('toggleLegalTerms');
    }
  }, "Legal")));
}

/***/ }),

/***/ "./app/header-footer/Header.jsx":
/*!**************************************!*\
  !*** ./app/header-footer/Header.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/ClickHandling.js */ "./app/classes/ClickHandling.js");
/* harmony import */ var _public_header_nav_open_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/header-nav-open.png */ "./public/header-nav-open.png");
/* harmony import */ var _public_header_nav_open_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_header_nav_open_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_header_nav_closed_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/header-nav-closed.png */ "./public/header-nav-closed.png");
/* harmony import */ var _public_header_nav_closed_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_header_nav_closed_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _classes_Location_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/Location.js */ "./app/classes/Location.js");
/* harmony import */ var _shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/Mapper.jsx */ "./app/shared/Mapper.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../classes/Referrer.js */ "./app/classes/Referrer.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../primitives/StyledLink.jsx */ "./app/primitives/StyledLink.jsx");
/* harmony import */ var _primitives_UnorderedList_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../primitives/UnorderedList.jsx */ "./app/primitives/UnorderedList.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var headerLinks = [{
  name: 'The story',
  path: '/chapter'
}, {
  name: 'Projects',
  path: '/projects'
}, {
  name: 'Journalism',
  path: '/journalism'
}, {
  name: 'About',
  path: '/about'
}];
var Container = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].header.withConfig({
  displayName: "Header__Container",
  componentId: "sc-1rxr5md-0"
})(["background-color:", ";color:", ";flex-shrink:0;z-index:2;height:52px;display:flex;justify-content:", ";align-items:center;"], function (p) {
  return p.home ? 'transparent' : p.reverie === 'active' ? p.theme.colors.reverieBlue : p.theme.colors.white;
}, function (p) {
  return p.home ? p.theme.colors.white : p.reverie === 'active' ? p.theme.colors.lightBlack : p.theme.colors.mediumBlack;
}, function (p) {
  return p.home ? 'center' : undefined;
});
var RestyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(_primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_8__["default"]).withConfig({
  displayName: "Header__RestyledLink",
  componentId: "sc-1rxr5md-1"
})(["font-size:", ";font-weight:", ";margin-left:", ";color:", ";font-family:", ";margin-top:-4px;&&{text-decoration:", ";}@media (min-width:", "){font-size:", ";}"], function (p) {
  return p.theme.fontSizes.four;
}, function (p) {
  return p.home ? 400 : '';
}, function (p) {
  return p.num === 0 ? '0px' : '15px';
}, function (p) {
  return p.home ? 'white' : p.reverie === 'active' ? p.theme.colors.lightBlack : p.theme.colors.mediumBlack;
}, function (p) {
  return !p.home ? "'Aref Ruqaa', serif" : '';
}, function (p) {
  return p.active === 'active' ? 'underline' : undefined;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return !p.home ? p.theme.fontSizes.nine : p.theme.fontSizes.three;
});
var NameAsLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(RestyledLink).withConfig({
  displayName: "Header__NameAsLink",
  componentId: "sc-1rxr5md-2"
})(["display:", ";"], function (p) {
  return p.hide === 'active' ? 'none' : undefined;
});
var Motto = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].p.withConfig({
  displayName: "Header__Motto",
  componentId: "sc-1rxr5md-3"
})(["font-family:'Aref Ruqaa',serif;flex:1;display:", ";font-style:italic;font-size:", ";margin:0px 15px 2px 10px;min-width:0px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;@media (min-width:", "){font-size:", ";margin-left:13px;margin-right:0px;}"], function (p) {
  return p.hide ? 'none' : undefined;
}, function (p) {
  return p.theme.fontSizes.one;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.fontSizes.four;
});
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].nav.withConfig({
  displayName: "Header__Nav",
  componentId: "sc-1rxr5md-4"
})(["display:", ";padding:", ";background-color:", ";border-radius:", ";margin-top:-4px;", ";@media (min-width:", "){display:block;margin-right:", ";}"], function (p) {
  return p.home ? undefined : 'none';
}, function (p) {
  return p.home ? '7px 13px' : undefined;
}, function (p) {
  return p.home ? 'rgba(0,0,0,0.25)' : undefined;
}, function (p) {
  return p.home ? '10px' : undefined;
}, function (p) {
  return p.menu && Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["css"])(["flex:1;display:block;@media (min-width:", "){margin-left:32px;}"], p.theme.mediaQueries.tinyView);
}, function (p) {
  return p.theme.mediaQueries.narrowBreakTwo;
}, function (p) {
  return !p.home ? '15px' : undefined;
});
var NavList = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(_primitives_UnorderedList_jsx__WEBPACK_IMPORTED_MODULE_9__["default"]).withConfig({
  displayName: "Header__NavList",
  componentId: "sc-1rxr5md-5"
})(["display:flex;justify-content:center;margin:0px;padding:0px;list-style:none;"]);
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].img.withConfig({
  displayName: "Header__Icon",
  componentId: "sc-1rxr5md-6"
})(["display:", ";height:17px;width:17px;margin-left:auto;margin-right:10px;cursor:pointer;padding-top:5px;padding-bottom:5px;padding-left:5px;padding-right:5px;@media (min-width:", "){display:none;}"], function (p) {
  return p.home ? 'none' : undefined;
}, function (p) {
  return p.theme.mediaQueries.narrowBreakTwo;
});

var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));
    _this.timeoutId = undefined;
    _this.state = {
      menuIsOpen: false
    };
    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var appState = this.props.appState;
      var currentCaller = appState.currentCaller;
      var menuIsActive = this.state.menuIsOpen;
      var homeIsActive = currentCaller === 'home';
      var reverieIsActive = currentCaller === 'reverie' ? 'active' : '';
      var iconType = menuIsActive ? _public_header_nav_open_png__WEBPACK_IMPORTED_MODULE_1___default.a : _public_header_nav_closed_png__WEBPACK_IMPORTED_MODULE_2___default.a;
      var referrer = new _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_6__["default"](this.props);
      var hcForHeader = new _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_0__["default"]('header', this);
      var handleClickForHeader = hcForHeader.boundHandleClick; // const reverieOrRegularMotto = referrer.location !== 'reverie'
      //   ? 'Narrative coding and other adventures'
      //   : "Let's take a flight of fancy";

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Container, {
        home: homeIsActive,
        reverie: reverieIsActive
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NameAsLink, {
        reverie: reverieIsActive,
        hide: (menuIsActive || homeIsActive) && 'active' || undefined,
        to: '/'
      }, "James Abels"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Motto, {
        hide: menuIsActive || homeIsActive
      }, "Narrative coding and other adventures"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Nav, {
        home: homeIsActive,
        menu: menuIsActive
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavList, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        mapData: headerLinks,
        render: function render(link, idx) {
          var pathIsActive = link.path.includes(referrer.location);
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
            key: idx
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(RestyledLink, {
            reverie: reverieIsActive,
            active: pathIsActive && 'active' || undefined,
            home: homeIsActive && 'active' || undefined,
            num: idx,
            to: link.path
          }, link.name));
        }
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Icon, {
        home: homeIsActive,
        menu: menuIsActive,
        src: iconType,
        onClick: function onClick() {
          return handleClickForHeader();
        }
      }));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var location = new _classes_Location_js__WEBPACK_IMPORTED_MODULE_3__["default"]('/', this.props, prevProps);

      if (location.justChanged && this.timeoutId !== undefined) {
        var hcForApp = new _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_0__["default"]('header', this);
        var handleClickForHeader = hcForApp.boundHandleClick;
        handleClickForHeader();
      }
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./app/helpers/normalize.js":
/*!**********************************!*\
  !*** ./app/helpers/normalize.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalize; });
function normalize(text) {
  return text.replace(/\s+/g, '-').replace(/\./g, '').replace(/'+/g, '').replace(/,+/g, '').replace(/:/g, '').replace(/\//g, '-').replace(/\?/g, '').toLowerCase();
}

/***/ }),

/***/ "./app/home/Home.jsx":
/*!***************************!*\
  !*** ./app/home/Home.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../primitives/Main.jsx */ "./app/primitives/Main.jsx");
/* harmony import */ var _shared_Parallax_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/Parallax.jsx */ "./app/shared/Parallax.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _data_about_home_page_about_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/about/home-page-about.md */ "./app/data/about/home-page-about.md");
/* harmony import */ var _data_about_home_page_about_md__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_about_home_page_about_md__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_about_home_page_about_short_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/about/home-page-about-short.md */ "./app/data/about/home-page-about-short.md");
/* harmony import */ var _data_about_home_page_about_short_md__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_about_home_page_about_short_md__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_7__);








var RestyledMain = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]).withConfig({
  displayName: "Home__RestyledMain",
  componentId: "navei3-0"
})(["justify-content:flex-start;align-items:center;overflow:hidden;@media (min-width:", "){flex-direction:column;}"], function (p) {
  return p.theme.mediaQueries.desktopView;
});
var NameTag = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Home__NameTag",
  componentId: "navei3-1"
})(["display:", ";flex-direction:column;justify-content:center;align-items:center;z-index:2;cursor:pointer;"], function (p) {
  return p.tempContentIsOn ? 'none' : 'flex';
});
var Hed = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h1.withConfig({
  displayName: "Home__Hed",
  componentId: "navei3-2"
})(["font-family:'Aref Ruqaa',serif;font-size:4.5rem;text-shadow:1px 1px 2px rgba(0,0,0,.6);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:", ";font-weight:700;@media (min-width:", "){font-size:", ";}"], function (p) {
  return p.theme.colors.yellow;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.fontSizes.seventeen;
});
var Motto = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "Home__Motto",
  componentId: "navei3-3"
})(["font-family:'Aref Ruqaa',serif;margin-left:18px;text-shadow:1px 1px 2px rgba(0,0,0,.6);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:", ";margin-top:70px;color:", ";font-weight:700;@media (min-width:", "){font-size:", ";margin-top:100px;margin-left:20px;}"], function (p) {
  return p.theme.fontSizes.five;
}, function (p) {
  return p.theme.colors.yellow;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.fontSizes.fourteen;
});
var BioBox = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Home__BioBox",
  componentId: "navei3-4"
})(["width:80%;margin-top:30px;display:", ";z-index:2;@media (min-width:", "){margin-top:50px;width:360px;}"], function (p) {
  return p.tempContentIsOn ? 'none' : 'flex';
}, function (p) {
  return p.theme.mediaQueries.tinyView;
});
var Text = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].section.withConfig({
  displayName: "Home__Text",
  componentId: "navei3-5"
})(["overflow:auto;p{font-family:'Aref Ruqaa',serif;font-weight:700;margin-bottom:10px;font-size:", ";color:", ";text-shadow:1px 1px 2px rgba(0,0,0,.6);text-align:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;&:last-child{margin-bottom:0px;}@media (min-width:", "){font-size:", ";}}"], function (p) {
  return p.theme.fontSizes.three;
}, function (p) {
  return p.theme.colors.yellow;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.fontSizes.twelve;
});
var PictureBox = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Home__PictureBox",
  componentId: "navei3-6"
})(["position:fixed;top:0px;left:-1px;height:101%;width:101%;overflow:hidden;z-index:1;"]);
var BoyInForeground = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "Home__BoyInForeground",
  componentId: "navei3-7"
})(["position:absolute;z-index:2;pointer-events:none;display:block;width:100%;height:100%;object-fit:cover;"]);
var Portal = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Home__Portal",
  componentId: "navei3-8"
})(["position:absolute;height:100%;width:100%;background-color:rgba(0,0,0,0.25);z-index:1;"]);
var FantasyAsBackground = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(BoyInForeground).withConfig({
  displayName: "Home__FantasyAsBackground",
  componentId: "navei3-9"
})(["opacity:", ";transform:", ";transition:transform 1.75s,opacity 1.5s cubic-bezier(0.77,0,0.175,1);z-index:0;"], function (p) {
  return p.inCity ? '0' : '1';
}, function (p) {
  return p.inCity ? 'scale(1)' : 'scale(1.15)';
});
var CityAsBackground = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(FantasyAsBackground).withConfig({
  displayName: "Home__CityAsBackground",
  componentId: "navei3-10"
})(["opacity:", ";transform:", ";"], function (p) {
  return p.inCity ? '1' : '0';
}, function (p) {
  return p.inCity ? 'scale(1.15)' : 'scale(1)';
}); // const PulseKeyframes = keyframes`
//   0% {
//     background-color: rgba(0,0,0,.1);
//     box-shadow: 0 0 0 0 rgba(255,231,76, 0.2);
//   }
//   50% {
//     background-color: rgba(0,0,0,0);
//     box-shadow: 0 0 0 15px rgba(0,0,0, 0);
//   }
//   100% {
//     background-color: rgba(0,0,0,0);
//     box-shadow: 0 0 0 0 rgba(255,231,76, 0);
//   }
// `;
// const Ball = styled.div`
//   position: absolute;
//   width: 5px;
//   height: 5px;
//   border-radius: 50%;
//   margin-top: 227px;
//   margin-left: 125px;
//   // Easing function reference: https://easings.net/en
//   animation: ${PulseKeyframes} 2.5s ease-out -10s infinite;
//   padding: 7px;
//   z-index: 3;
//   @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
//     width: 5px;
//     height: 5px;
//     margin-top: 368px;
//     margin-left: 175px;
//     padding: 10px;
//   }
// `;

function Home(props) {
  var _props$appState = props.appState,
      inCity = _props$appState.inCity,
      showBusinessCard = _props$appState.showBusinessCard,
      showLegalTerms = _props$appState.showLegalTerms;
  var boundHandleClickForApp = props.boundHandleClickForApp;
  var aboutMeText = _data_about_home_page_about_short_md__WEBPACK_IMPORTED_MODULE_5___default.a.body;
  var screenSize = window.innerWidth;

  if (screenSize < 390) {
    aboutMeText = _data_about_home_page_about_short_md__WEBPACK_IMPORTED_MODULE_5___default.a.body;
  } else {
    aboutMeText = _data_about_home_page_about_md__WEBPACK_IMPORTED_MODULE_4___default.a.body;
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RestyledMain, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared_Parallax_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    render: function render(renderProps) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NameTag, {
        ref: function ref(el) {
          renderProps.scene = el;
        },
        onClick: function onClick() {
          return boundHandleClickForApp('swapHomePageImage');
        },
        "data-pointer-events": true,
        tempContentIsOn: showBusinessCard || showLegalTerms
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Hed, {
        normal: true,
        "data-depth": ".3",
        "data-friction-x": ".7",
        "data-friction-y": ".7"
      }, "James Abels"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Motto, {
        "data-depth": ".2",
        "data-friction-x": ".9",
        "data-friction-y": ".9"
      }, "Narrative coding and other adventures"));
    }
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared_Parallax_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    render: function render(renderProps) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BioBox, {
        ref: function ref(el) {
          renderProps.scene = el;
        },
        tempContentIsOn: showBusinessCard || showLegalTerms
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Text, {
        "data-depth": ".4",
        "data-friction-x": ".7",
        "data-friction-y": ".7"
      }, react_html_parser__WEBPACK_IMPORTED_MODULE_6___default()(marked__WEBPACK_IMPORTED_MODULE_7___default()(aboutMeText, {
        smartypants: true
      }))));
    }
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PictureBox, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BoyInForeground, {
    alt: "",
    src: "https://user-images.githubusercontent.com/30417590/55294127-2c1c5980-53cc-11e9-9848-5295cd05a9cc.png"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Portal, null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FantasyAsBackground, {
    alt: "",
    inCity: inCity,
    src: "https://user-images.githubusercontent.com/30417590/55294130-33436780-53cc-11e9-93cc-f61572bca6ef.png"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CityAsBackground, {
    alt: "",
    inCity: inCity,
    src: "https://user-images.githubusercontent.com/30417590/55294135-3c343900-53cc-11e9-8f9c-e66499ccd920.png"
  }))));
}

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_array_copy_within__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.copy-within */ "./node_modules/core-js/modules/es6.array.copy-within.js");
/* harmony import */ var core_js_modules_es6_array_copy_within__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_copy_within__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_every__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.every */ "./node_modules/core-js/modules/es6.array.every.js");
/* harmony import */ var core_js_modules_es6_array_every__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_every__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.fill */ "./node_modules/core-js/modules/es6.array.fill.js");
/* harmony import */ var core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.array.find-index */ "./node_modules/core-js/modules/es6.array.find-index.js");
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es7_array_flat_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es7.array.flat-map */ "./node_modules/core-js/modules/es7.array.flat-map.js");
/* harmony import */ var core_js_modules_es7_array_flat_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_flat_map__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.array.for-each */ "./node_modules/core-js/modules/es6.array.for-each.js");
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.array.index-of */ "./node_modules/core-js/modules/es6.array.index-of.js");
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.array.is-array */ "./node_modules/core-js/modules/es6.array.is-array.js");
/* harmony import */ var core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es6_array_last_index_of__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es6.array.last-index-of */ "./node_modules/core-js/modules/es6.array.last-index-of.js");
/* harmony import */ var core_js_modules_es6_array_last_index_of__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_last_index_of__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es6_array_of__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es6.array.of */ "./node_modules/core-js/modules/es6.array.of.js");
/* harmony import */ var core_js_modules_es6_array_of__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_of__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es6.array.reduce */ "./node_modules/core-js/modules/es6.array.reduce.js");
/* harmony import */ var core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es6_array_reduce_right__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es6.array.reduce-right */ "./node_modules/core-js/modules/es6.array.reduce-right.js");
/* harmony import */ var core_js_modules_es6_array_reduce_right__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_reduce_right__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es6_array_some__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es6.array.some */ "./node_modules/core-js/modules/es6.array.some.js");
/* harmony import */ var core_js_modules_es6_array_some__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_some__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es6.array.sort */ "./node_modules/core-js/modules/es6.array.sort.js");
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es6_array_species__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es6.array.species */ "./node_modules/core-js/modules/es6.array.species.js");
/* harmony import */ var core_js_modules_es6_array_species__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_species__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es6_date_now__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es6.date.now */ "./node_modules/core-js/modules/es6.date.now.js");
/* harmony import */ var core_js_modules_es6_date_now__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_now__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es6_date_to_iso_string__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es6.date.to-iso-string */ "./node_modules/core-js/modules/es6.date.to-iso-string.js");
/* harmony import */ var core_js_modules_es6_date_to_iso_string__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_to_iso_string__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es6_date_to_json__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es6.date.to-json */ "./node_modules/core-js/modules/es6.date.to-json.js");
/* harmony import */ var core_js_modules_es6_date_to_json__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_to_json__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es6_date_to_primitive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es6.date.to-primitive */ "./node_modules/core-js/modules/es6.date.to-primitive.js");
/* harmony import */ var core_js_modules_es6_date_to_primitive__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_to_primitive__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es6.function.bind */ "./node_modules/core-js/modules/es6.function.bind.js");
/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es6_function_has_instance__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es6.function.has-instance */ "./node_modules/core-js/modules/es6.function.has-instance.js");
/* harmony import */ var core_js_modules_es6_function_has_instance__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_has_instance__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es6.map */ "./node_modules/core-js/modules/es6.map.js");
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es6_math_acosh__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es6.math.acosh */ "./node_modules/core-js/modules/es6.math.acosh.js");
/* harmony import */ var core_js_modules_es6_math_acosh__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_math_acosh__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es6_math_asinh__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es6.math.asinh */ "./node_modules/core-js/modules/es6.math.asinh.js");
/* harmony import */ var core_js_modules_es6_math_asinh__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_math_asinh__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es6_math_atanh__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es6.math.atanh */ "./node_modules/core-js/modules/es6.math.atanh.js");
/* harmony import */ var core_js_modules_es6_math_atanh__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_math_atanh__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es6_math_cbrt__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es6.math.cbrt */ "./node_modules/core-js/modules/es6.math.cbrt.js");
/* harmony import */ var core_js_modules_es6_math_cbrt__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_math_cbrt__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es6_math_clz32__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es6.math.clz32 */ "./node_modules/core-js/modules/es6.math.clz32.js");
/* harmony import */ var core_js_modules_es6_math_clz32__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_math_clz32__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es6_math_cosh__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es6.math.cosh */ "./node_modules/core-js/modules/es6.math.cosh.js");
/* harmony import */ var core_js_modules_es6_math_cosh__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_math_cosh__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es6_math_expm1__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es6.math.expm1 */ "./node_modules/core-js/modules/es6.math.expm1.js");
/* harmony import */ var core_js_modules_es6_math_expm1__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_math_expm1__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es6_math_fround__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es6.math.fround */ "./node_modules/core-js/modules/es6.math.fround.js");
/* harmony import */ var core_js_modules_es6_math_fround__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_math_fround__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es6_math_hypot__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es6.math.hypot */ "./node_modules/core-js/modules/es6.math.hypot.js");
/* harmony import */ var core_js_modules_es6_math_hypot__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_math_hypot__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es6_math_imul__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es6.math.imul */ "./node_modules/core-js/modules/es6.math.imul.js");
/* harmony import */ var core_js_modules_es6_math_imul__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_math_imul__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_es6_math_log1p__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/es6.math.log1p */ "./node_modules/core-js/modules/es6.math.log1p.js");
/* harmony import */ var core_js_modules_es6_math_log1p__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_math_log1p__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_es6_math_log10__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/es6.math.log10 */ "./node_modules/core-js/modules/es6.math.log10.js");
/* harmony import */ var core_js_modules_es6_math_log10__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_math_log10__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_es6_math_log2__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/es6.math.log2 */ "./node_modules/core-js/modules/es6.math.log2.js");
/* harmony import */ var core_js_modules_es6_math_log2__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_math_log2__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var core_js_modules_es6_math_sign__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! core-js/modules/es6.math.sign */ "./node_modules/core-js/modules/es6.math.sign.js");
/* harmony import */ var core_js_modules_es6_math_sign__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_math_sign__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var core_js_modules_es6_math_sinh__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! core-js/modules/es6.math.sinh */ "./node_modules/core-js/modules/es6.math.sinh.js");
/* harmony import */ var core_js_modules_es6_math_sinh__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_math_sinh__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var core_js_modules_es6_math_tanh__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! core-js/modules/es6.math.tanh */ "./node_modules/core-js/modules/es6.math.tanh.js");
/* harmony import */ var core_js_modules_es6_math_tanh__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_math_tanh__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var core_js_modules_es6_math_trunc__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! core-js/modules/es6.math.trunc */ "./node_modules/core-js/modules/es6.math.trunc.js");
/* harmony import */ var core_js_modules_es6_math_trunc__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_math_trunc__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var core_js_modules_es6_number_epsilon__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! core-js/modules/es6.number.epsilon */ "./node_modules/core-js/modules/es6.number.epsilon.js");
/* harmony import */ var core_js_modules_es6_number_epsilon__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_epsilon__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var core_js_modules_es6_number_is_finite__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! core-js/modules/es6.number.is-finite */ "./node_modules/core-js/modules/es6.number.is-finite.js");
/* harmony import */ var core_js_modules_es6_number_is_finite__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_finite__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var core_js_modules_es6_number_is_integer__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! core-js/modules/es6.number.is-integer */ "./node_modules/core-js/modules/es6.number.is-integer.js");
/* harmony import */ var core_js_modules_es6_number_is_integer__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_integer__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! core-js/modules/es6.number.is-nan */ "./node_modules/core-js/modules/es6.number.is-nan.js");
/* harmony import */ var core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var core_js_modules_es6_number_is_safe_integer__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! core-js/modules/es6.number.is-safe-integer */ "./node_modules/core-js/modules/es6.number.is-safe-integer.js");
/* harmony import */ var core_js_modules_es6_number_is_safe_integer__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_safe_integer__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var core_js_modules_es6_number_max_safe_integer__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! core-js/modules/es6.number.max-safe-integer */ "./node_modules/core-js/modules/es6.number.max-safe-integer.js");
/* harmony import */ var core_js_modules_es6_number_max_safe_integer__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_max_safe_integer__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var core_js_modules_es6_number_min_safe_integer__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! core-js/modules/es6.number.min-safe-integer */ "./node_modules/core-js/modules/es6.number.min-safe-integer.js");
/* harmony import */ var core_js_modules_es6_number_min_safe_integer__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_min_safe_integer__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var core_js_modules_es6_number_parse_float__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! core-js/modules/es6.number.parse-float */ "./node_modules/core-js/modules/es6.number.parse-float.js");
/* harmony import */ var core_js_modules_es6_number_parse_float__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_parse_float__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var core_js_modules_es6_number_parse_int__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! core-js/modules/es6.number.parse-int */ "./node_modules/core-js/modules/es6.number.parse-int.js");
/* harmony import */ var core_js_modules_es6_number_parse_int__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_parse_int__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! core-js/modules/es6.object.create */ "./node_modules/core-js/modules/es6.object.create.js");
/* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_58__);
/* harmony import */ var core_js_modules_es7_object_define_getter__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! core-js/modules/es7.object.define-getter */ "./node_modules/core-js/modules/es7.object.define-getter.js");
/* harmony import */ var core_js_modules_es7_object_define_getter__WEBPACK_IMPORTED_MODULE_59___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_define_getter__WEBPACK_IMPORTED_MODULE_59__);
/* harmony import */ var core_js_modules_es7_object_define_setter__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! core-js/modules/es7.object.define-setter */ "./node_modules/core-js/modules/es7.object.define-setter.js");
/* harmony import */ var core_js_modules_es7_object_define_setter__WEBPACK_IMPORTED_MODULE_60___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_define_setter__WEBPACK_IMPORTED_MODULE_60__);
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! core-js/modules/es6.object.define-property */ "./node_modules/core-js/modules/es6.object.define-property.js");
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_61___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_61__);
/* harmony import */ var core_js_modules_es6_object_define_properties__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! core-js/modules/es6.object.define-properties */ "./node_modules/core-js/modules/es6.object.define-properties.js");
/* harmony import */ var core_js_modules_es6_object_define_properties__WEBPACK_IMPORTED_MODULE_62___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_properties__WEBPACK_IMPORTED_MODULE_62__);
/* harmony import */ var core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! core-js/modules/es7.object.entries */ "./node_modules/core-js/modules/es7.object.entries.js");
/* harmony import */ var core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_63___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_63__);
/* harmony import */ var core_js_modules_es6_object_freeze__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! core-js/modules/es6.object.freeze */ "./node_modules/core-js/modules/es6.object.freeze.js");
/* harmony import */ var core_js_modules_es6_object_freeze__WEBPACK_IMPORTED_MODULE_64___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_freeze__WEBPACK_IMPORTED_MODULE_64__);
/* harmony import */ var core_js_modules_es6_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! core-js/modules/es6.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es6_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_65___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_65__);
/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! core-js/modules/es7.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_66___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_66__);
/* harmony import */ var core_js_modules_es6_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! core-js/modules/es6.object.get-own-property-names */ "./node_modules/core-js/modules/es6.object.get-own-property-names.js");
/* harmony import */ var core_js_modules_es6_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_67___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_67__);
/* harmony import */ var core_js_modules_es6_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! core-js/modules/es6.object.get-prototype-of */ "./node_modules/core-js/modules/es6.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_68___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_68__);
/* harmony import */ var core_js_modules_es7_object_lookup_getter__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! core-js/modules/es7.object.lookup-getter */ "./node_modules/core-js/modules/es7.object.lookup-getter.js");
/* harmony import */ var core_js_modules_es7_object_lookup_getter__WEBPACK_IMPORTED_MODULE_69___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_lookup_getter__WEBPACK_IMPORTED_MODULE_69__);
/* harmony import */ var core_js_modules_es7_object_lookup_setter__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! core-js/modules/es7.object.lookup-setter */ "./node_modules/core-js/modules/es7.object.lookup-setter.js");
/* harmony import */ var core_js_modules_es7_object_lookup_setter__WEBPACK_IMPORTED_MODULE_70___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_lookup_setter__WEBPACK_IMPORTED_MODULE_70__);
/* harmony import */ var core_js_modules_es6_object_prevent_extensions__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! core-js/modules/es6.object.prevent-extensions */ "./node_modules/core-js/modules/es6.object.prevent-extensions.js");
/* harmony import */ var core_js_modules_es6_object_prevent_extensions__WEBPACK_IMPORTED_MODULE_71___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_prevent_extensions__WEBPACK_IMPORTED_MODULE_71__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_72___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_72__);
/* harmony import */ var core_js_modules_es6_object_is__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! core-js/modules/es6.object.is */ "./node_modules/core-js/modules/es6.object.is.js");
/* harmony import */ var core_js_modules_es6_object_is__WEBPACK_IMPORTED_MODULE_73___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_is__WEBPACK_IMPORTED_MODULE_73__);
/* harmony import */ var core_js_modules_es6_object_is_frozen__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! core-js/modules/es6.object.is-frozen */ "./node_modules/core-js/modules/es6.object.is-frozen.js");
/* harmony import */ var core_js_modules_es6_object_is_frozen__WEBPACK_IMPORTED_MODULE_74___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_is_frozen__WEBPACK_IMPORTED_MODULE_74__);
/* harmony import */ var core_js_modules_es6_object_is_sealed__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! core-js/modules/es6.object.is-sealed */ "./node_modules/core-js/modules/es6.object.is-sealed.js");
/* harmony import */ var core_js_modules_es6_object_is_sealed__WEBPACK_IMPORTED_MODULE_75___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_is_sealed__WEBPACK_IMPORTED_MODULE_75__);
/* harmony import */ var core_js_modules_es6_object_is_extensible__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! core-js/modules/es6.object.is-extensible */ "./node_modules/core-js/modules/es6.object.is-extensible.js");
/* harmony import */ var core_js_modules_es6_object_is_extensible__WEBPACK_IMPORTED_MODULE_76___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_is_extensible__WEBPACK_IMPORTED_MODULE_76__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_77___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_77__);
/* harmony import */ var core_js_modules_es6_object_seal__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! core-js/modules/es6.object.seal */ "./node_modules/core-js/modules/es6.object.seal.js");
/* harmony import */ var core_js_modules_es6_object_seal__WEBPACK_IMPORTED_MODULE_78___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_seal__WEBPACK_IMPORTED_MODULE_78__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_79___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_79__);
/* harmony import */ var core_js_modules_es7_object_values__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! core-js/modules/es7.object.values */ "./node_modules/core-js/modules/es7.object.values.js");
/* harmony import */ var core_js_modules_es7_object_values__WEBPACK_IMPORTED_MODULE_80___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_values__WEBPACK_IMPORTED_MODULE_80__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_81___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_81__);
/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! core-js/modules/es7.promise.finally */ "./node_modules/core-js/modules/es7.promise.finally.js");
/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_82___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_82__);
/* harmony import */ var core_js_modules_es6_reflect_apply__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! core-js/modules/es6.reflect.apply */ "./node_modules/core-js/modules/es6.reflect.apply.js");
/* harmony import */ var core_js_modules_es6_reflect_apply__WEBPACK_IMPORTED_MODULE_83___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_reflect_apply__WEBPACK_IMPORTED_MODULE_83__);
/* harmony import */ var core_js_modules_es6_reflect_construct__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! core-js/modules/es6.reflect.construct */ "./node_modules/core-js/modules/es6.reflect.construct.js");
/* harmony import */ var core_js_modules_es6_reflect_construct__WEBPACK_IMPORTED_MODULE_84___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_reflect_construct__WEBPACK_IMPORTED_MODULE_84__);
/* harmony import */ var core_js_modules_es6_reflect_define_property__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! core-js/modules/es6.reflect.define-property */ "./node_modules/core-js/modules/es6.reflect.define-property.js");
/* harmony import */ var core_js_modules_es6_reflect_define_property__WEBPACK_IMPORTED_MODULE_85___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_reflect_define_property__WEBPACK_IMPORTED_MODULE_85__);
/* harmony import */ var core_js_modules_es6_reflect_delete_property__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! core-js/modules/es6.reflect.delete-property */ "./node_modules/core-js/modules/es6.reflect.delete-property.js");
/* harmony import */ var core_js_modules_es6_reflect_delete_property__WEBPACK_IMPORTED_MODULE_86___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_reflect_delete_property__WEBPACK_IMPORTED_MODULE_86__);
/* harmony import */ var core_js_modules_es6_reflect_get__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! core-js/modules/es6.reflect.get */ "./node_modules/core-js/modules/es6.reflect.get.js");
/* harmony import */ var core_js_modules_es6_reflect_get__WEBPACK_IMPORTED_MODULE_87___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_reflect_get__WEBPACK_IMPORTED_MODULE_87__);
/* harmony import */ var core_js_modules_es6_reflect_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! core-js/modules/es6.reflect.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es6_reflect_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_88___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_reflect_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_88__);
/* harmony import */ var core_js_modules_es6_reflect_get_prototype_of__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! core-js/modules/es6.reflect.get-prototype-of */ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js");
/* harmony import */ var core_js_modules_es6_reflect_get_prototype_of__WEBPACK_IMPORTED_MODULE_89___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_reflect_get_prototype_of__WEBPACK_IMPORTED_MODULE_89__);
/* harmony import */ var core_js_modules_es6_reflect_has__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! core-js/modules/es6.reflect.has */ "./node_modules/core-js/modules/es6.reflect.has.js");
/* harmony import */ var core_js_modules_es6_reflect_has__WEBPACK_IMPORTED_MODULE_90___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_reflect_has__WEBPACK_IMPORTED_MODULE_90__);
/* harmony import */ var core_js_modules_es6_reflect_is_extensible__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! core-js/modules/es6.reflect.is-extensible */ "./node_modules/core-js/modules/es6.reflect.is-extensible.js");
/* harmony import */ var core_js_modules_es6_reflect_is_extensible__WEBPACK_IMPORTED_MODULE_91___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_reflect_is_extensible__WEBPACK_IMPORTED_MODULE_91__);
/* harmony import */ var core_js_modules_es6_reflect_own_keys__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! core-js/modules/es6.reflect.own-keys */ "./node_modules/core-js/modules/es6.reflect.own-keys.js");
/* harmony import */ var core_js_modules_es6_reflect_own_keys__WEBPACK_IMPORTED_MODULE_92___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_reflect_own_keys__WEBPACK_IMPORTED_MODULE_92__);
/* harmony import */ var core_js_modules_es6_reflect_prevent_extensions__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! core-js/modules/es6.reflect.prevent-extensions */ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js");
/* harmony import */ var core_js_modules_es6_reflect_prevent_extensions__WEBPACK_IMPORTED_MODULE_93___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_reflect_prevent_extensions__WEBPACK_IMPORTED_MODULE_93__);
/* harmony import */ var core_js_modules_es6_reflect_set__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! core-js/modules/es6.reflect.set */ "./node_modules/core-js/modules/es6.reflect.set.js");
/* harmony import */ var core_js_modules_es6_reflect_set__WEBPACK_IMPORTED_MODULE_94___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_reflect_set__WEBPACK_IMPORTED_MODULE_94__);
/* harmony import */ var core_js_modules_es6_reflect_set_prototype_of__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! core-js/modules/es6.reflect.set-prototype-of */ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_reflect_set_prototype_of__WEBPACK_IMPORTED_MODULE_95___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_reflect_set_prototype_of__WEBPACK_IMPORTED_MODULE_95__);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_96___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_96__);
/* harmony import */ var core_js_modules_es6_regexp_flags__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! core-js/modules/es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
/* harmony import */ var core_js_modules_es6_regexp_flags__WEBPACK_IMPORTED_MODULE_97___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_flags__WEBPACK_IMPORTED_MODULE_97__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_98___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_98__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_99___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_99__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_100___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_100__);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_101___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_101__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_102___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_102__);
/* harmony import */ var core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! core-js/modules/es6.set */ "./node_modules/core-js/modules/es6.set.js");
/* harmony import */ var core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_103___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_103__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_104___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_104__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_105___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_105__);
/* harmony import */ var core_js_modules_es6_string_anchor__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! core-js/modules/es6.string.anchor */ "./node_modules/core-js/modules/es6.string.anchor.js");
/* harmony import */ var core_js_modules_es6_string_anchor__WEBPACK_IMPORTED_MODULE_106___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_anchor__WEBPACK_IMPORTED_MODULE_106__);
/* harmony import */ var core_js_modules_es6_string_big__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! core-js/modules/es6.string.big */ "./node_modules/core-js/modules/es6.string.big.js");
/* harmony import */ var core_js_modules_es6_string_big__WEBPACK_IMPORTED_MODULE_107___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_big__WEBPACK_IMPORTED_MODULE_107__);
/* harmony import */ var core_js_modules_es6_string_blink__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! core-js/modules/es6.string.blink */ "./node_modules/core-js/modules/es6.string.blink.js");
/* harmony import */ var core_js_modules_es6_string_blink__WEBPACK_IMPORTED_MODULE_108___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_blink__WEBPACK_IMPORTED_MODULE_108__);
/* harmony import */ var core_js_modules_es6_string_bold__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! core-js/modules/es6.string.bold */ "./node_modules/core-js/modules/es6.string.bold.js");
/* harmony import */ var core_js_modules_es6_string_bold__WEBPACK_IMPORTED_MODULE_109___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_bold__WEBPACK_IMPORTED_MODULE_109__);
/* harmony import */ var core_js_modules_es6_string_code_point_at__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! core-js/modules/es6.string.code-point-at */ "./node_modules/core-js/modules/es6.string.code-point-at.js");
/* harmony import */ var core_js_modules_es6_string_code_point_at__WEBPACK_IMPORTED_MODULE_110___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_code_point_at__WEBPACK_IMPORTED_MODULE_110__);
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! core-js/modules/es6.string.ends-with */ "./node_modules/core-js/modules/es6.string.ends-with.js");
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_111___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_111__);
/* harmony import */ var core_js_modules_es6_string_fixed__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! core-js/modules/es6.string.fixed */ "./node_modules/core-js/modules/es6.string.fixed.js");
/* harmony import */ var core_js_modules_es6_string_fixed__WEBPACK_IMPORTED_MODULE_112___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_fixed__WEBPACK_IMPORTED_MODULE_112__);
/* harmony import */ var core_js_modules_es6_string_fontcolor__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! core-js/modules/es6.string.fontcolor */ "./node_modules/core-js/modules/es6.string.fontcolor.js");
/* harmony import */ var core_js_modules_es6_string_fontcolor__WEBPACK_IMPORTED_MODULE_113___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_fontcolor__WEBPACK_IMPORTED_MODULE_113__);
/* harmony import */ var core_js_modules_es6_string_fontsize__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! core-js/modules/es6.string.fontsize */ "./node_modules/core-js/modules/es6.string.fontsize.js");
/* harmony import */ var core_js_modules_es6_string_fontsize__WEBPACK_IMPORTED_MODULE_114___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_fontsize__WEBPACK_IMPORTED_MODULE_114__);
/* harmony import */ var core_js_modules_es6_string_from_code_point__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! core-js/modules/es6.string.from-code-point */ "./node_modules/core-js/modules/es6.string.from-code-point.js");
/* harmony import */ var core_js_modules_es6_string_from_code_point__WEBPACK_IMPORTED_MODULE_115___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_from_code_point__WEBPACK_IMPORTED_MODULE_115__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_116___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_116__);
/* harmony import */ var core_js_modules_es6_string_italics__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! core-js/modules/es6.string.italics */ "./node_modules/core-js/modules/es6.string.italics.js");
/* harmony import */ var core_js_modules_es6_string_italics__WEBPACK_IMPORTED_MODULE_117___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_italics__WEBPACK_IMPORTED_MODULE_117__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_118___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_118__);
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! core-js/modules/es6.string.link */ "./node_modules/core-js/modules/es6.string.link.js");
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_119___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_119__);
/* harmony import */ var core_js_modules_es7_string_pad_start__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! core-js/modules/es7.string.pad-start */ "./node_modules/core-js/modules/es7.string.pad-start.js");
/* harmony import */ var core_js_modules_es7_string_pad_start__WEBPACK_IMPORTED_MODULE_120___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_string_pad_start__WEBPACK_IMPORTED_MODULE_120__);
/* harmony import */ var core_js_modules_es7_string_pad_end__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! core-js/modules/es7.string.pad-end */ "./node_modules/core-js/modules/es7.string.pad-end.js");
/* harmony import */ var core_js_modules_es7_string_pad_end__WEBPACK_IMPORTED_MODULE_121___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_string_pad_end__WEBPACK_IMPORTED_MODULE_121__);
/* harmony import */ var core_js_modules_es6_string_raw__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! core-js/modules/es6.string.raw */ "./node_modules/core-js/modules/es6.string.raw.js");
/* harmony import */ var core_js_modules_es6_string_raw__WEBPACK_IMPORTED_MODULE_122___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_raw__WEBPACK_IMPORTED_MODULE_122__);
/* harmony import */ var core_js_modules_es6_string_repeat__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! core-js/modules/es6.string.repeat */ "./node_modules/core-js/modules/es6.string.repeat.js");
/* harmony import */ var core_js_modules_es6_string_repeat__WEBPACK_IMPORTED_MODULE_123___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_repeat__WEBPACK_IMPORTED_MODULE_123__);
/* harmony import */ var core_js_modules_es6_string_small__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! core-js/modules/es6.string.small */ "./node_modules/core-js/modules/es6.string.small.js");
/* harmony import */ var core_js_modules_es6_string_small__WEBPACK_IMPORTED_MODULE_124___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_small__WEBPACK_IMPORTED_MODULE_124__);
/* harmony import */ var core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! core-js/modules/es6.string.starts-with */ "./node_modules/core-js/modules/es6.string.starts-with.js");
/* harmony import */ var core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_125___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_125__);
/* harmony import */ var core_js_modules_es6_string_strike__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(/*! core-js/modules/es6.string.strike */ "./node_modules/core-js/modules/es6.string.strike.js");
/* harmony import */ var core_js_modules_es6_string_strike__WEBPACK_IMPORTED_MODULE_126___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_strike__WEBPACK_IMPORTED_MODULE_126__);
/* harmony import */ var core_js_modules_es6_string_sub__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(/*! core-js/modules/es6.string.sub */ "./node_modules/core-js/modules/es6.string.sub.js");
/* harmony import */ var core_js_modules_es6_string_sub__WEBPACK_IMPORTED_MODULE_127___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_sub__WEBPACK_IMPORTED_MODULE_127__);
/* harmony import */ var core_js_modules_es6_string_sup__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(/*! core-js/modules/es6.string.sup */ "./node_modules/core-js/modules/es6.string.sup.js");
/* harmony import */ var core_js_modules_es6_string_sup__WEBPACK_IMPORTED_MODULE_128___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_sup__WEBPACK_IMPORTED_MODULE_128__);
/* harmony import */ var core_js_modules_es6_string_trim__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(/*! core-js/modules/es6.string.trim */ "./node_modules/core-js/modules/es6.string.trim.js");
/* harmony import */ var core_js_modules_es6_string_trim__WEBPACK_IMPORTED_MODULE_129___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_trim__WEBPACK_IMPORTED_MODULE_129__);
/* harmony import */ var core_js_modules_es7_string_trim_left__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(/*! core-js/modules/es7.string.trim-left */ "./node_modules/core-js/modules/es7.string.trim-left.js");
/* harmony import */ var core_js_modules_es7_string_trim_left__WEBPACK_IMPORTED_MODULE_130___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_string_trim_left__WEBPACK_IMPORTED_MODULE_130__);
/* harmony import */ var core_js_modules_es7_string_trim_right__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(/*! core-js/modules/es7.string.trim-right */ "./node_modules/core-js/modules/es7.string.trim-right.js");
/* harmony import */ var core_js_modules_es7_string_trim_right__WEBPACK_IMPORTED_MODULE_131___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_string_trim_right__WEBPACK_IMPORTED_MODULE_131__);
/* harmony import */ var core_js_modules_es6_typed_array_buffer__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(/*! core-js/modules/es6.typed.array-buffer */ "./node_modules/core-js/modules/es6.typed.array-buffer.js");
/* harmony import */ var core_js_modules_es6_typed_array_buffer__WEBPACK_IMPORTED_MODULE_132___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_typed_array_buffer__WEBPACK_IMPORTED_MODULE_132__);
/* harmony import */ var core_js_modules_es6_typed_data_view__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(/*! core-js/modules/es6.typed.data-view */ "./node_modules/core-js/modules/es6.typed.data-view.js");
/* harmony import */ var core_js_modules_es6_typed_data_view__WEBPACK_IMPORTED_MODULE_133___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_typed_data_view__WEBPACK_IMPORTED_MODULE_133__);
/* harmony import */ var core_js_modules_es6_typed_int8_array__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(/*! core-js/modules/es6.typed.int8-array */ "./node_modules/core-js/modules/es6.typed.int8-array.js");
/* harmony import */ var core_js_modules_es6_typed_int8_array__WEBPACK_IMPORTED_MODULE_134___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_typed_int8_array__WEBPACK_IMPORTED_MODULE_134__);
/* harmony import */ var core_js_modules_es6_typed_uint8_array__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(/*! core-js/modules/es6.typed.uint8-array */ "./node_modules/core-js/modules/es6.typed.uint8-array.js");
/* harmony import */ var core_js_modules_es6_typed_uint8_array__WEBPACK_IMPORTED_MODULE_135___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_typed_uint8_array__WEBPACK_IMPORTED_MODULE_135__);
/* harmony import */ var core_js_modules_es6_typed_uint8_clamped_array__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(/*! core-js/modules/es6.typed.uint8-clamped-array */ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js");
/* harmony import */ var core_js_modules_es6_typed_uint8_clamped_array__WEBPACK_IMPORTED_MODULE_136___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_typed_uint8_clamped_array__WEBPACK_IMPORTED_MODULE_136__);
/* harmony import */ var core_js_modules_es6_typed_int16_array__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(/*! core-js/modules/es6.typed.int16-array */ "./node_modules/core-js/modules/es6.typed.int16-array.js");
/* harmony import */ var core_js_modules_es6_typed_int16_array__WEBPACK_IMPORTED_MODULE_137___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_typed_int16_array__WEBPACK_IMPORTED_MODULE_137__);
/* harmony import */ var core_js_modules_es6_typed_uint16_array__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(/*! core-js/modules/es6.typed.uint16-array */ "./node_modules/core-js/modules/es6.typed.uint16-array.js");
/* harmony import */ var core_js_modules_es6_typed_uint16_array__WEBPACK_IMPORTED_MODULE_138___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_typed_uint16_array__WEBPACK_IMPORTED_MODULE_138__);
/* harmony import */ var core_js_modules_es6_typed_int32_array__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(/*! core-js/modules/es6.typed.int32-array */ "./node_modules/core-js/modules/es6.typed.int32-array.js");
/* harmony import */ var core_js_modules_es6_typed_int32_array__WEBPACK_IMPORTED_MODULE_139___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_typed_int32_array__WEBPACK_IMPORTED_MODULE_139__);
/* harmony import */ var core_js_modules_es6_typed_uint32_array__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(/*! core-js/modules/es6.typed.uint32-array */ "./node_modules/core-js/modules/es6.typed.uint32-array.js");
/* harmony import */ var core_js_modules_es6_typed_uint32_array__WEBPACK_IMPORTED_MODULE_140___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_typed_uint32_array__WEBPACK_IMPORTED_MODULE_140__);
/* harmony import */ var core_js_modules_es6_typed_float32_array__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(/*! core-js/modules/es6.typed.float32-array */ "./node_modules/core-js/modules/es6.typed.float32-array.js");
/* harmony import */ var core_js_modules_es6_typed_float32_array__WEBPACK_IMPORTED_MODULE_141___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_typed_float32_array__WEBPACK_IMPORTED_MODULE_141__);
/* harmony import */ var core_js_modules_es6_typed_float64_array__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(/*! core-js/modules/es6.typed.float64-array */ "./node_modules/core-js/modules/es6.typed.float64-array.js");
/* harmony import */ var core_js_modules_es6_typed_float64_array__WEBPACK_IMPORTED_MODULE_142___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_typed_float64_array__WEBPACK_IMPORTED_MODULE_142__);
/* harmony import */ var core_js_modules_es6_weak_map__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(/*! core-js/modules/es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js");
/* harmony import */ var core_js_modules_es6_weak_map__WEBPACK_IMPORTED_MODULE_143___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_weak_map__WEBPACK_IMPORTED_MODULE_143__);
/* harmony import */ var core_js_modules_es6_weak_set__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(/*! core-js/modules/es6.weak-set */ "./node_modules/core-js/modules/es6.weak-set.js");
/* harmony import */ var core_js_modules_es6_weak_set__WEBPACK_IMPORTED_MODULE_144___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_weak_set__WEBPACK_IMPORTED_MODULE_144__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_145___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_145__);
/* harmony import */ var core_js_modules_web_immediate__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(/*! core-js/modules/web.immediate */ "./node_modules/core-js/modules/web.immediate.js");
/* harmony import */ var core_js_modules_web_immediate__WEBPACK_IMPORTED_MODULE_146___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_immediate__WEBPACK_IMPORTED_MODULE_146__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_147___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_147__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_148__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_148___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_148__);
/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_149__ = __webpack_require__(/*! ./App.jsx */ "./app/App.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_150__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _shared_ErrorBoundary_jsx__WEBPACK_IMPORTED_MODULE_151__ = __webpack_require__(/*! ./shared/ErrorBoundary.jsx */ "./app/shared/ErrorBoundary.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_152__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_152___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_152__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_153__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_153___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_153__);





















































































































































// Must come first so everything benefits from it!





react_dom__WEBPACK_IMPORTED_MODULE_153___default.a.render(react__WEBPACK_IMPORTED_MODULE_152___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_150__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_152___default.a.createElement(_shared_ErrorBoundary_jsx__WEBPACK_IMPORTED_MODULE_151__["default"], null, react__WEBPACK_IMPORTED_MODULE_152___default.a.createElement(_App_jsx__WEBPACK_IMPORTED_MODULE_149__["default"], null))), document.getElementById('app'));

/***/ }),

/***/ "./app/menu/Menu.jsx":
/*!***************************!*\
  !*** ./app/menu/Menu.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var _primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../primitives/Main.jsx */ "./app/primitives/Main.jsx");
/* harmony import */ var _shared_MenuButton_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/MenuButton.jsx */ "./app/shared/MenuButton.jsx");
/* harmony import */ var _primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../primitives/Overflow.jsx */ "./app/primitives/Overflow.jsx");
/* harmony import */ var _primitives_Right_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../primitives/Right.jsx */ "./app/primitives/Right.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  @media (min-width: ", ") {\n    margin-top: 10px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @media (min-width: ", ") {\n    flex-direction: column;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var RestyledMain = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(_primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_0__["default"])(_templateObject(), function (p) {
  return p.theme.mediaQueries.desktopView;
});
var RestyledRight = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(_primitives_Right_jsx__WEBPACK_IMPORTED_MODULE_3__["default"])(_templateObject2(), function (p) {
  return p.theme.mediaQueries.desktopView;
});
function Menu(props) {
  var appState = props.appState,
      children = props.children;
  var currentCaller = appState.currentCaller;
  var isReverie = currentCaller === 'reverie';
  /** Props explanation
   *
   * 1. props (above) go to <MenuButton />
   * 2. { children } get props, params, and data
   * from cD.getMenuContent(props, params)
   * in Contentloader.jsx
   */

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(RestyledMain, {
    reverie: isReverie
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(RestyledRight, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_shared_MenuButton_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], props), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null, children)));
}

/***/ }),

/***/ "./app/not-found/NotFound.jsx":
/*!************************************!*\
  !*** ./app/not-found/NotFound.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotFound; });
/* harmony import */ var _primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../primitives/Main.jsx */ "./app/primitives/Main.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _primitives_Right_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../primitives/Right.jsx */ "./app/primitives/Right.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");




var RestyledRight = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_primitives_Right_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "NotFound__RestyledRight",
  componentId: "sc-1milcn9-0"
})(["flex:1;margin-right:25px;@media (min-width:", "){margin-top:10px;}"], function (p) {
  return p.theme.mediaQueries.desktopView;
});
var Hed = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h1.withConfig({
  displayName: "NotFound__Hed",
  componentId: "sc-1milcn9-1"
})(["font-size:", ";margin-bottom:15px;"], function (p) {
  return p.theme.fontSizes.sixteen;
});
var FailWhale = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].section.withConfig({
  displayName: "NotFound__FailWhale",
  componentId: "sc-1milcn9-2"
})(["flex:1;background-color:cornflowerblue;"]);
function NotFound(props) {
  console.log('Not Found: ', props);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RestyledRight, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Hed, null, "Uh oh. Not found!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FailWhale, null)));
}

/***/ }),

/***/ "./app/primitives/Left.jsx":
/*!*********************************!*\
  !*** ./app/primitives/Left.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav.withConfig({
  displayName: "Left",
  componentId: "sc-1jppfql-0"
})(["display:none;@media (min-width:", "){display:flex;margin:25px 0px 25px 25px;min-width:327px;border-right:0.5px solid ", ";}"], function (p) {
  return p.theme.mediaQueries.desktopView;
}, function (p) {
  return !p.reverie ? p.theme.colors.lightBlue : p.theme.colors.lightBlue;
}));

/***/ }),

/***/ "./app/primitives/Main.jsx":
/*!*********************************!*\
  !*** ./app/primitives/Main.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].main.withConfig({
  displayName: "Main",
  componentId: "sc-1kukgok-0"
})(["height:0px;display:flex;flex-direction:column;flex:1;background-color:", ";height:", "px;flex-grow:1;flex-shrink:0;flex-basis:auto;@media (min-width:", "){flex-direction:row;}"], function (p) {
  return p.reverie ? p.theme.colors.reverieBlue : p.theme.colors.white;
}, function (p) {
  return parseInt(p.theme.pageHeight) - 107;
}, function (p) {
  return p.theme.mediaQueries.desktopView;
}));

/***/ }),

/***/ "./app/primitives/Overflow.jsx":
/*!*************************************!*\
  !*** ./app/primitives/Overflow.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Overflow",
  componentId: "x3zr0c-0"
})(["overflow:auto;padding-right:25px;"]));

/***/ }),

/***/ "./app/primitives/Right.jsx":
/*!**********************************!*\
  !*** ./app/primitives/Right.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "Right",
  componentId: "sc-2yw0f1-0"
})(["margin:10px 0px 25px 25px;display:flex;flex-direction:column;overflow:auto;@media (min-width:", "){margin-top:25px;}"], function (p) {
  return p.theme.mediaQueries.desktopView;
}));

/***/ }),

/***/ "./app/primitives/StyledLink.jsx":
/*!***************************************!*\
  !*** ./app/primitives/StyledLink.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_CustomLink_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/CustomLink.jsx */ "./app/shared/CustomLink.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_shared_CustomLink_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]).withConfig({
  displayName: "StyledLink",
  componentId: "ujazr7-0"
})(["&:focus,&:visited,&:link{text-decoration:none;}"]));

/***/ }),

/***/ "./app/primitives/UnorderedList.jsx":
/*!******************************************!*\
  !*** ./app/primitives/UnorderedList.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.withConfig({
  displayName: "UnorderedList",
  componentId: "bqelba-0"
})(["padding:0px;margin:0px;list-style-type:none;"]));

/***/ }),

/***/ "./app/projects/DesktopProjectNav.jsx":
/*!********************************************!*\
  !*** ./app/projects/DesktopProjectNav.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DesktopProjectNav; });
/* harmony import */ var _shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/Mapper.jsx */ "./app/shared/Mapper.jsx");
/* harmony import */ var _ProjectNav_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectNav.jsx */ "./app/projects/ProjectNav.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _primitives_UnorderedList_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../primitives/UnorderedList.jsx */ "./app/primitives/UnorderedList.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var RestyledList = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_primitives_UnorderedList_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "DesktopProjectNav__RestyledList",
  componentId: "sc-1d67ncp-0"
})(["height:100%;overflow:auto;margin-right:25px;width:", ";", ";"], function (p) {
  return !p.menu ? '327px' : undefined;
}, function (p) {
  return p.menu && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["display:block;max-width:590px;margin-right:0;"]);
});
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].li.withConfig({
  displayName: "DesktopProjectNav__ListItem",
  componentId: "sc-1d67ncp-1"
})(["&:not(:last-child){margin-bottom:20px;}"]);
var Graf = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "DesktopProjectNav__Graf",
  componentId: "sc-1d67ncp-2"
})(["font-size:", ";color:", ";margin-bottom:9px;font-weight:400;@media (min-width:", "){font-size:", ";}"], function (p) {
  return p.theme.fontSizes.six;
}, function (p) {
  return p.theme.colors.blue;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.menu && p.theme.fontSizes.twelve;
});
function DesktopProjectNav(props) {
  var appState = props.appState,
      bodyState = props.bodyState,
      data = props.data,
      location = props.location,
      params = props.params;
  var isMenu = appState.isMenu;
  var indexForProjectData;
  var indexForProjectPics;
  var finalData;

  if (location.pathname.split('/')[2] !== 'menu') {
    indexForProjectData = params.projectNameToIndex();
    indexForProjectPics = params.projectThumbnailToIndex();
    finalData = data.filter(function (_, index) {
      return indexForProjectData !== index;
    });
  } else {
    indexForProjectData = bodyState.indexForProjectData;
    indexForProjectPics = bodyState.indexForProjectPics;
    finalData = data;
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RestyledList, {
    menu: isMenu
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], {
    mapData: finalData,
    render: function render(project, idx) {
      var _project$attributes = project.attributes,
          projectName = _project$attributes.projectName,
          type = _project$attributes.type;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ListItem, {
        key: idx
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Graf, {
        menu: isMenu,
        num: idx
      }, "".concat(projectName, " | ").concat(type)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ProjectNav_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, props, {
        isActive: indexForProjectData === idx,
        indexForProjectPics: indexForProjectPics,
        num: idx,
        project: project
      })));
    }
  }));
}

/***/ }),

/***/ "./app/projects/ProjectNav.jsx":
/*!*************************************!*\
  !*** ./app/projects/ProjectNav.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectNav; });
/* harmony import */ var _shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/Mapper.jsx */ "./app/shared/Mapper.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../primitives/StyledLink.jsx */ "./app/primitives/StyledLink.jsx");
/* harmony import */ var _primitives_UnorderedList_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../primitives/UnorderedList.jsx */ "./app/primitives/UnorderedList.jsx");





var Group = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_primitives_UnorderedList_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "ProjectNav__Group",
  componentId: "sc-1lgrx38-0"
})(["display:flex;margin:0px;padding:0px 0px ", " 0px;list-style-type:none;", ";", ";"], function (p) {
  return !p.menu ? '0px' : '10px';
}, function (p) {
  return p.menu && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["margin-bottom:", ";padding-bottom:0;max-width:100%;"], p.num !== 2 ? '15px' : undefined);
}, function (p) {
  return p.isRight && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["@media (min-width:", "){flex-direction:column;margin-top:25px;padding:0;border:0;}@media (min-width:", "){display:flex;flex-direction:row;margin-top:0;}@media (min-width:", "){flex-direction:column;justify-content:flex-start;margin-top:27px;padding:0;border:0;}"], p.theme.mediaQueries.narrowBreakThree, p.theme.mediaQueries.desktopView, p.theme.mediaQueries.desktopWide);
});
var Item = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li.withConfig({
  displayName: "ProjectNav__Item",
  componentId: "sc-1lgrx38-1"
})(["margin-right:", ";&:first-child{margin-left:", ";}@media (min-width:", "){margin-right:", ";margin-bottom:", ";}@media (min-width:", "){margin-right:", ";margin-bottom:", ";}@media (min-width:", "){margin-right:", ";margin-bottom:", ";}"], function (p) {
  return p.padding ? '5px' : undefined;
}, function (p) {
  return !p.isRight ? '0px' : undefined;
}, function (p) {
  return p.theme.mediaQueries.narrowBreakThree;
}, function (p) {
  return p.isRight ? '0px' : undefined;
}, function (p) {
  return p.isRight ? '5px' : undefined;
}, function (p) {
  return p.theme.mediaQueries.desktopView;
}, function (p) {
  return p.padding ? '5px' : undefined;
}, function (p) {
  return p.isRight ? '0px' : undefined;
}, function (p) {
  return p.theme.mediaQueries.desktopWide;
}, function (p) {
  return p.isRight ? '0px' : undefined;
}, function (p) {
  return p.isRight ? '5px' : undefined;
});
var RestyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "ProjectNav__RestyledLink",
  componentId: "sc-1lgrx38-2"
})(["display:flex;justify-content:center;align-items:center;min-width:0;position:relative;"]);
var Image = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "ProjectNav__Image",
  componentId: "sc-1lgrx38-3"
})(["flex:1;min-width:0;max-width:100%;vertical-align:bottom;"]);
var Highlighter = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ProjectNav__Highlighter",
  componentId: "sc-1lgrx38-4"
})(["width:100%;height:4px;bottom:0px;left:0px;position:absolute;background-color:", ";"], function (p) {
  return p.theme.colors.yellow;
});
function ProjectNav(props) {
  var appState = props.appState,
      indexForProjectPics = props.indexForProjectPics,
      isActive = props.isActive,
      isRight = props.isRight,
      num = props.num,
      project = props.project;
  var _project$attributes = project.attributes,
      projectName = _project$attributes.projectName,
      projectThumbnail = _project$attributes.projectThumbnail;
  var isMenu;

  if (appState) {
    isMenu = appState.isMenu;
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Group, {
    isRight: isRight,
    menu: isMenu,
    num: num
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], {
    mapData: projectThumbnail,
    render: function render(thumb, idx) {
      var padding = idx < 2;
      var thumbnailNumber = idx + 1;
      var highlightActiveThumbnail;

      if (isMenu && isActive && indexForProjectPics === idx) {
        highlightActiveThumbnail = true;
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
        key: idx,
        isRight: isRight,
        padding: padding
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RestyledLink, {
        to: "/projects/".concat(projectName.toLowerCase(), "/").concat(thumbnailNumber)
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Image, {
        alt: "Thumbnail ".concat(thumbnailNumber),
        src: thumb
      }), highlightActiveThumbnail && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Highlighter, null)));
    }
  }));
}

/***/ }),

/***/ "./app/projects/Projects.jsx":
/*!***********************************!*\
  !*** ./app/projects/Projects.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Projects; });
/* harmony import */ var _DesktopProjectNav_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DesktopProjectNav.jsx */ "./app/projects/DesktopProjectNav.jsx");
/* harmony import */ var _primitives_Left_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../primitives/Left.jsx */ "./app/primitives/Left.jsx");
/* harmony import */ var _primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../primitives/Main.jsx */ "./app/primitives/Main.jsx");
/* harmony import */ var _shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/Mapper.jsx */ "./app/shared/Mapper.jsx");
/* harmony import */ var _shared_MenuButton_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/MenuButton.jsx */ "./app/shared/MenuButton.jsx");
/* harmony import */ var _primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../primitives/Overflow.jsx */ "./app/primitives/Overflow.jsx");
/* harmony import */ var _ProjectNav_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProjectNav.jsx */ "./app/projects/ProjectNav.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _primitives_Right_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../primitives/Right.jsx */ "./app/primitives/Right.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











var ProjectName = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].h1.withConfig({
  displayName: "Projects__ProjectName",
  componentId: "e6bzkp-0"
})(["font-size:", ";color:", ";margin-top:-8px;"], function (p) {
  return p.theme.fontSizes.sixteen;
}, function (p) {
  return p.theme.colors.pink;
});
var Hed = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].h3.withConfig({
  displayName: "Projects__Hed",
  componentId: "e6bzkp-1"
})(["font-size:", ";font-weight:400;color:", ";margin-bottom:8px;"], function (p) {
  return p.theme.fontSizes.eight;
}, function (p) {
  return p.theme.colors.blue;
});
var Dek = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].h2.withConfig({
  displayName: "Projects__Dek",
  componentId: "e6bzkp-2"
})(["font-size:", ";margin-top:4px;margin-bottom:15px;font-weight:300;"], function (p) {
  return p.theme.fontSizes.thirteen;
});
var Graf = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].p.withConfig({
  displayName: "Projects__Graf",
  componentId: "e6bzkp-3"
})(["margin-bottom:10px;margin-right:0px;"]);
var Images = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].section.withConfig({
  displayName: "Projects__Images",
  componentId: "e6bzkp-4"
})(["display:flex;flex-direction:column;@media (min-width:", "){flex-direction:row-reverse;justify-content:flex-end;}@media (min-width:", "){flex-direction:column;}@media (min-width:", "){flex-direction:row-reverse;}"], function (p) {
  return p.theme.mediaQueries.narrowBreakThree;
}, function (p) {
  return p.theme.mediaQueries.desktopView;
}, function (p) {
  return p.theme.mediaQueries.desktopWide;
});
var Figure = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].figure.withConfig({
  displayName: "Projects__Figure",
  componentId: "e6bzkp-5"
})(["margin:0px;@media (min-width:", "){display:flex;flex-direction:column;}"], function (p) {
  return p.theme.mediaQueries.narrowBreakThree;
});
var Caption = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].figcaption.withConfig({
  displayName: "Projects__Caption",
  componentId: "e6bzkp-6"
})(["display:flex;margin:10px 10px 8px 0px;font-size:", ";color:", ";font-weight:300;@media (min-width:", "){margin-top:0;}@media (min-width:", "){margin-top:10px;}@media (min-width:", "){margin-top:0;}"], function (p) {
  return p.theme.fontSizes.eight;
}, function (p) {
  return p.theme.colors.blue;
}, function (p) {
  return p.theme.mediaQueries.narrowBreakThree;
}, function (p) {
  return p.theme.mediaQueries.desktopView;
}, function (p) {
  return p.theme.mediaQueries.desktopWide;
});
var Image = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].img.withConfig({
  displayName: "Projects__Image",
  componentId: "e6bzkp-7"
})(["flex:1;max-width:100%;object-fit:cover;vertical-align:bottom;@media (min-width:", "){margin-right:10px;}@media (min-width:", "){margin-right:0px;}@media (min-width:", "){margin-right:10px;}"], function (p) {
  return p.theme.mediaQueries.narrowBreakThree;
}, function (p) {
  return p.theme.mediaQueries.desktopView;
}, function (p) {
  return p.theme.mediaQueries.desktopWide;
});
function Projects(props) {
  var data = props.data,
      overflowRef = props.overflowRef,
      params = props.params;
  var indexForProjectData = params.projectNameToIndex();
  var indexForProjectPics = params.projectThumbnailToIndex();
  var project = data[indexForProjectData];
  var _project$attributes = project.attributes,
      captions = _project$attributes.captions,
      contribution = _project$attributes.contribution,
      description = _project$attributes.description,
      full = _project$attributes.full,
      projectName = _project$attributes.projectName,
      technologies = _project$attributes.technologies,
      type = _project$attributes.type;
  var caption = captions[indexForProjectPics];
  var source = full[indexForProjectPics];
  var mapData = [{
    technologies: technologies
  }, {
    contribution: contribution
  }, {
    description: description
  }];
  var keys = mapData.map(function (item) {
    return Object.keys(item)[0];
  });
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_primitives_Left_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_DesktopProjectNav_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({}, props, {
    data: data,
    params: params
  }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_primitives_Right_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_shared_MenuButton_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, props, {
    noOffset: true
  })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ref: function ref(_ref) {
      return overflowRef.current = _ref;
    }
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ProjectName, null, projectName), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Dek, null, type), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    mapData: mapData,
    render: function render(proj, idx) {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
        key: idx
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Hed, null, keys[idx][0].toUpperCase() + keys[idx].slice(1)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Graf, null, proj[keys[idx]]));
    }
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Images, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ProjectNav_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    indexForProjectPics: indexForProjectPics,
    isRight: true,
    project: project
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Figure, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Caption, null, caption), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Image, {
    alt: "mainPic",
    src: source
  })))))));
}

/***/ }),

/***/ "./app/reload/ReloadRoute.jsx":
/*!************************************!*\
  !*** ./app/reload/ReloadRoute.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReloadRoute; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _classes_Reload_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/Reload.js */ "./app/classes/Reload.js");



/** Redirect users via bodyState */

function ReloadRoute(props) {
  var reload = new _classes_Reload_js__WEBPACK_IMPORTED_MODULE_2__["default"](props);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: reload.path
  });
}

/***/ }),

/***/ "./app/shared/Button.jsx":
/*!*******************************!*\
  !*** ./app/shared/Button.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var Structure = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Button__Structure",
  componentId: "sc-7v6ekz-0"
})(["font-size:", ";font-weight:400;width:80px;padding:10px;text-align:center;cursor:pointer;"], function (p) {
  return p.theme.fontSizes.three;
});
var Text = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Button__Text",
  componentId: "sc-7v6ekz-1"
})(["font-size:", ";font-weight:400;margin-bottom:0px;"], function (p) {
  return p.theme.fontSizes.one;
});
function Button(props) {
  if (props.conditional && !props.show) {
    return null;
  }

  var className = props.className,
      clickFunction = props.clickFunction,
      text = props.text;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Structure, {
    className: className,
    onClick: clickFunction
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, null, text));
}

/***/ }),

/***/ "./app/shared/ContentLoader.jsx":
/*!**************************************!*\
  !*** ./app/shared/ContentLoader.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentLoader; });
/* harmony import */ var _classes_ComponentData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/ComponentData.js */ "./app/classes/ComponentData.js");
/* harmony import */ var _classes_Location_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/Location.js */ "./app/classes/Location.js");
/* harmony import */ var _menu_Menu_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/Menu.jsx */ "./app/menu/Menu.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/Referrer.js */ "./app/classes/Referrer.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _classes_ScrollHandling_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../classes/ScrollHandling.js */ "./app/classes/ScrollHandling.js");
/* harmony import */ var _classes_State_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../classes/State.js */ "./app/classes/State.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var ContentLoader =
/*#__PURE__*/
function (_Component) {
  _inherits(ContentLoader, _Component);

  function ContentLoader(props) {
    var _this;

    _classCallCheck(this, ContentLoader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContentLoader).call(this, props));
    var referrer = new _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_4__["default"](props);
    var location = new _classes_Location_js__WEBPACK_IMPORTED_MODULE_1__["default"](referrer.pathToMatch, props);
    _this.overflowRef = react__WEBPACK_IMPORTED_MODULE_3___default.a.createRef();
    _this.state = {
      isNotFound: !location.pathIsValid,
      needsRedirect: location.needsRedirect
    };
    return _this;
  }

  _createClass(ContentLoader, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          isNotFound = _this$state.isNotFound,
          needsRedirect = _this$state.needsRedirect;
      var componentData;
      var location;
      var referrer;
      /** ComponentData contains configured Components
       *
       * Includes data from props, e.g., section
       * data (AKA, 'contentData').
       *
       * Note: ContentaLoader unmounts when users swap
       * sections, so there's no need to update
       * contentData when cDU() runs.
       */

      if (!needsRedirect && !isNotFound) {
        referrer = new _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_4__["default"](this.props);
        componentData = new _classes_ComponentData_js__WEBPACK_IMPORTED_MODULE_0__["default"](referrer.location, this.props);
        location = new _classes_Location_js__WEBPACK_IMPORTED_MODULE_1__["default"](referrer.pathToMatch, this.props);
      }

      return needsRedirect ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__["Redirect"], {
        to: "/i"
      }) : isNotFound ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__["Redirect"], {
        to: "/not-found"
      }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__["Route"], {
        exact: true,
        path: "/".concat(location.type, "/menu"),
        render: function render() {
          if (location.type === 'chapter') {
            return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__["Redirect"], {
              to: "/not-found"
            });
          }

          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_menu_Menu_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], _this2.props, componentData.getMenuContent(_this2.props, location.params));
        }
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__["Route"], {
        path: referrer.finalPath,
        render: function render() {
          return componentData.getSection(_this2.props, _this2.overflowRef, location.params);
        }
      }));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var referrer = new _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_4__["default"](this.props);
      var location = new _classes_Location_js__WEBPACK_IMPORTED_MODULE_1__["default"](referrer.pathToMatch, this.props, prevProps);

      if (location.needsRedirect) {
        this.setState({
          needsRedirect: true
        });
      } else if (location.isSwappingContent) {
        var state = new _classes_State_js__WEBPACK_IMPORTED_MODULE_7__["default"](this.props, location); // Pass handleClick to save new path params
        // (converted to index) to bodyState

        state.rebuild(this.props.boundHandleClickForBody); // ContentLoader is still mounted on the /menu
        // path, but it may not contain an overflowRef,
        // so we filter it to prevent error

        if (!location.params.isMenu) {
          var scrollHandler = new _classes_ScrollHandling_js__WEBPACK_IMPORTED_MODULE_6__["default"](location);
          scrollHandler.resetElementTop(this.overflowRef, prevProps);
        }
      }
    }
  }]);

  return ContentLoader;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);



/***/ }),

/***/ "./app/shared/CustomLink.jsx":
/*!***********************************!*\
  !*** ./app/shared/CustomLink.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



 // This link comes courtesy of the below link:
// https://stackoverflow.com/a/51580782
// It prevents the identical location from
// being added to the history stack
// See also: https://github.com/ReactTraining/history/issues/470
// We'll now replace current location w/new location, rather than adding
// a location to the history stack, if the location is /x... and the
// link is to /x.... This is ok b/c these links are used AFTER the
// site loads, meaning we can ignore them without losing out on
// analytics!
// sameLocation is a custom test that makes sure we replace the current
// location with the two come from the same base route, e.g., /chapter.
// This is particularly important for headerLinks, which might otherwise
// result in multiple identical locations on the history stack.

var Link = function Link(_ref) {
  var to = _ref.to,
      replace = _ref.replace,
      props = _objectWithoutProperties(_ref, ["to", "replace"]);

  var sameLocation = window.location.pathname.includes(to);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: typeof to === 'string' ? to : Object(history__WEBPACK_IMPORTED_MODULE_2__["createPath"])(to),
    exact: true
  }, function (_ref2) {
    var match = _ref2.match;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], _extends({}, props, {
      to: to,
      replace: sameLocation || replace || !!match
    }));
  });
};

Link.propTypes = react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"].propTypes;
Link.defaultProps = react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"].defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ }),

/***/ "./app/shared/ErrorBoundary.jsx":
/*!**************************************!*\
  !*** ./app/shared/ErrorBoundary.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorBoundary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // import ReactGA from 'react-ga';

var ErrorBoundary =
/*#__PURE__*/
function (_Component) {
  _inherits(ErrorBoundary, _Component);

  function ErrorBoundary(props) {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ErrorBoundary).call(this, props));
    _this.state = {
      error: null,
      errorInfo: null,
      hasError: false,
      initialLoad: true
    };
    _this.handleLoad = _this.handleLoad.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          hasError = _this$state.hasError,
          initialLoad = _this$state.initialLoad;
      var children = this.props.children;
      var errorText = initialLoad ? "This site doesn't support your browser or there was an \n      error. Please try back with a different browser. Modern \n      versions of Chrome, Firefox, and Safari work best. In \n      the meantime, here's the 4-1-1. Thanks!" : 'So sorry, there was an error. Try again or come back later.';

      if (hasError) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            maxWidth: '1078px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
          style: {
            backgroundColor: 'lightyellow',
            padding: '5px 25px'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, errorText)), initialLoad && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            paddingLeft: '25px',
            paddingRight: '25px'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "About"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "James Abels is a NYC-based Web developer."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "A lawyer\xA0and former start-up founder, Abels was a staff reporter for Forbes and Mergermarket (then Pearson, now Acuris). He wrote about technology, digital media, venture capital, and mergers and acquisitions."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Abels is available for front- and back-end technology projects, particularly those involving creative consumer narratives. He's currently working with Upendra Shardanand on a new type of media product for Facebook Messenger, slated for soft launch in 2019.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
          style: {
            paddingLeft: '25px',
            paddingRight: '25px',
            marginTop: !initialLoad ? '25px' : ''
          }
        }, "Email: abelsj60__at__gmail.com")));
      }

      return children;
    } // Catch errors re-render

  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      // const { initialLoad } = this.state;
      this.setState({
        hasError: true,
        error: error,
        errorInfo: errorInfo
      }); // ReactGA.exception({
      //   description: `An error ${error} occurred. Initial load: ${initialLoad}. Info: ${errorInfo}`
      // });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // Must be done onload to avoid React's re-render
      window.addEventListener('load', this.handleLoad);
    }
  }, {
    key: "handleLoad",
    value: function handleLoad() {
      var _this$state2 = this.state,
          initialLoad = _this$state2.initialLoad,
          hasError = _this$state2.hasError;

      if (initialLoad && !hasError) {
        this.setState({
          initialLoad: false
        });
        window.removeEventListener('load', this.handleLoad);
      }
    }
  }]);

  return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./app/shared/Mapper.jsx":
/*!*******************************!*\
  !*** ./app/shared/Mapper.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mapper; });
function Mapper(props) {
  return props.mapData.map(function (d, index) {
    return props.render(d, index);
  });
}

/***/ }),

/***/ "./app/shared/MenuButton.jsx":
/*!***********************************!*\
  !*** ./app/shared/MenuButton.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuButton; });
/* harmony import */ var _public_arrow_up_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/arrow-up.png */ "./public/arrow-up.png");
/* harmony import */ var _public_arrow_up_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_arrow_up_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_arrow_down_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/arrow-down.png */ "./public/arrow-down.png");
/* harmony import */ var _public_arrow_down_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_arrow_down_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../primitives/StyledLink.jsx */ "./app/primitives/StyledLink.jsx");





var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "MenuButton__Container",
  componentId: "sc-1ixu6px-0"
})(["min-height:34px;width:52px;@media (min-width:", "){display:", ";}"], function (p) {
  return p.theme.mediaQueries.desktopView;
}, function (p) {
  return p.menu !== 'active' ? 'none' : undefined;
});
var RestyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "MenuButton__RestyledLink",
  componentId: "sc-1ixu6px-1"
})(["display:flex;flex-shrink:0;margin-right:auto;margin-bottom:13px;position:relative;padding-bottom:3px;justify-content:space-between;"]);
var Label = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "MenuButton__Label",
  componentId: "sc-1ixu6px-2"
})(["font-size:", ";color:", ";margin:0px;cursor:pointer;margin-top:-2px;font-weight:400;"], function (p) {
  return p.theme.fontSizes.two;
}, function (p) {
  return p.theme.colors.blue;
});
var IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "MenuButton__IconContainer",
  componentId: "sc-1ixu6px-3"
})(["margin-top:2px;margin-bottom:5px;display:flex;align-items:center;"]);
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "MenuButton__Icon",
  componentId: "sc-1ixu6px-4"
})(["height:3px;width:7px;background:", " no-repeat;background-size:contain;"], function (p) {
  return "url(".concat(p.image, ")");
});
var Line = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "MenuButton__Line",
  componentId: "sc-1ixu6px-5"
})(["position:absolute;width:100%;left:0px;bottom:0px;margin:0px;height:", ";background-color:", ";"], function (p) {
  return !p.menu ? '1px' : '2px';
}, function (p) {
  return p.theme.colors.lightBlue;
});
function MenuButton(props) {
  var _props$appState = props.appState,
      isMenu = _props$appState.isMenu,
      lastCaller = _props$appState.lastCaller,
      currentCaller = _props$appState.currentCaller;
  var isReverie = currentCaller === 'reverie';
  var link = isReverie && isMenu ? '/reverie' : isMenu ? "/".concat(lastCaller) : "/".concat(currentCaller, "/menu");
  var arrowIcon = !isMenu ? _public_arrow_down_png__WEBPACK_IMPORTED_MODULE_1___default.a : _public_arrow_up_png__WEBPACK_IMPORTED_MODULE_0___default.a;
  var menuIsActive = isMenu ? 'active' : undefined;
  var offsetIsActive = props.noOffset ? 'active' : '';
  var text = isMenu ? 'Close' : 'Menu';
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
    offset: offsetIsActive,
    menu: menuIsActive
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RestyledLink, {
    to: link
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Label, {
    menu: isMenu,
    reverie: isReverie
  }, text), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(IconContainer, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Icon, {
    image: arrowIcon
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Line, {
    menu: isMenu,
    reverie: isReverie
  })));
}

/***/ }),

/***/ "./app/shared/Parallax.jsx":
/*!*********************************!*\
  !*** ./app/shared/Parallax.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ParallaxComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'parallax-js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ParallaxComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(ParallaxComponent, _Component);

  function ParallaxComponent() {
    _classCallCheck(this, ParallaxComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(ParallaxComponent).apply(this, arguments));
  }

  _createClass(ParallaxComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.parallax = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'parallax-js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.scene);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.parallax.disable();
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.render(this);
    }
  }]);

  return ParallaxComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./app/story/ChapterNav.jsx":
/*!**********************************!*\
  !*** ./app/story/ChapterNav.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChapterNav; });
/* harmony import */ var _public_dot_full_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/dot-full.png */ "./public/dot-full.png");
/* harmony import */ var _public_dot_full_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_dot_full_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_dot_empty_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/dot-empty.png */ "./public/dot-empty.png");
/* harmony import */ var _public_dot_empty_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_dot_empty_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/Mapper.jsx */ "./app/shared/Mapper.jsx");
/* harmony import */ var _helpers_normalize_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/normalize.js */ "./app/helpers/normalize.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../primitives/StyledLink.jsx */ "./app/primitives/StyledLink.jsx");
/* harmony import */ var _primitives_UnorderedList_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../primitives/UnorderedList.jsx */ "./app/primitives/UnorderedList.jsx");








var Nav = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].nav.withConfig({
  displayName: "ChapterNav__Nav",
  componentId: "sc-1slo339-0"
})(["margin:-7px 0px 16px -13px;max-width:150px;display:flex;flex-shrink:0;position:relative;"]);
var StyledList = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(_primitives_UnorderedList_jsx__WEBPACK_IMPORTED_MODULE_7__["default"]).withConfig({
  displayName: "ChapterNav__StyledList",
  componentId: "sc-1slo339-1"
})(["display:flex;flex:1;padding-bottom:2px;"]);
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].li.withConfig({
  displayName: "ChapterNav__ListItem",
  componentId: "sc-1slo339-2"
})(["flex:1;"]);
var SelectorContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "ChapterNav__SelectorContainer",
  componentId: "sc-1slo339-3"
})(["padding-top:8px;padding-bottom:8px;"]);
var Selector = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "ChapterNav__Selector",
  componentId: "sc-1slo339-4"
})(["height:7px;background:", " center no-repeat;background-size:contain;"], function (p) {
  return "url(".concat(p.image, ")");
});
var Line = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "ChapterNav__Line",
  componentId: "sc-1slo339-5"
})(["position:absolute;left:0px;bottom:0px;margin:0px;height:", ";background-color:", ";width:80%;margin-left:15px;"], function (p) {
  return !p.menu ? '1px' : '2px';
}, function (p) {
  return p.theme.colors.lightBlue;
});
function ChapterNav(props) {
  var bodyState = props.bodyState,
      data = props.data,
      location = props.location,
      params = props.params;
  var indexForChapterData;

  if (location.pathname.split('/')[2] !== 'menu') {
    indexForChapterData = params.titleToIndex();
  } else {
    indexForChapterData = bodyState.indexForChapterData;
  }

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Nav, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(StyledList, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    mapData: data,
    render: function render(_chapter, idx) {
      var itemIsActive = indexForChapterData === idx;
      var normalizedTitle = Object(_helpers_normalize_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data[idx].attributes.title);
      var dot = itemIsActive ? _public_dot_full_png__WEBPACK_IMPORTED_MODULE_0___default.a : _public_dot_empty_png__WEBPACK_IMPORTED_MODULE_1___default.a;
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ListItem, {
        key: idx
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
        to: "/chapter/".concat(normalizedTitle)
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(SelectorContainer, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Selector, {
        image: dot,
        item: itemIsActive,
        num: idx
      }))));
    }
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Line, null));
}

/***/ }),

/***/ "./app/story/Story.jsx":
/*!*****************************!*\
  !*** ./app/story/Story.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Story; });
/* harmony import */ var _ChapterNav_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChapterNav.jsx */ "./app/story/ChapterNav.jsx");
/* harmony import */ var _primitives_Left_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../primitives/Left.jsx */ "./app/primitives/Left.jsx");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../primitives/Main.jsx */ "./app/primitives/Main.jsx");
/* harmony import */ var _primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../primitives/Overflow.jsx */ "./app/primitives/Overflow.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _primitives_Right_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../primitives/Right.jsx */ "./app/primitives/Right.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
 // import Dek from '../primitives/Dek.jsx';









var RestyledLeft = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(_primitives_Left_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]).withConfig({
  displayName: "Story__RestyledLeft",
  componentId: "sc-1gwc67d-0"
})(["display:", ";flex-direction:column;flex:1;padding:0px 0px 25px 25px;margin-top:10px;overflow:auto;@media (min-width:", "){max-width:327px;padding:0px;}"], function (p) {
  return p.text === 'hidden' ? 'none' : 'flex';
}, function (p) {
  return p.theme.mediaQueries.desktopView;
});
var RestyledRight = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(_primitives_Right_jsx__WEBPACK_IMPORTED_MODULE_7__["default"]).withConfig({
  displayName: "Story__RestyledRight",
  componentId: "sc-1gwc67d-1"
})(["display:", ";flex:1;overflow:hidden;margin:0px;position:relative;@media (min-width:", "){display:flex;margin:25px;}"], function (p) {
  return p.text !== 'hidden' ? 'none' : 'flex';
}, function (p) {
  return p.theme.mediaQueries.desktopView;
});
var Chapter = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].h2.withConfig({
  displayName: "Story__Chapter",
  componentId: "sc-1gwc67d-2"
})(["color:", ";font-weight:400;font-size:", ";"], function (p) {
  return p.theme.colors.blue;
}, function (p) {
  return p.theme.fontSizes.nine;
});
var Title = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].h1.withConfig({
  displayName: "Story__Title",
  componentId: "sc-1gwc67d-3"
})(["font-size:", ";color:", ";margin-bottom:12px;"], function (p) {
  return p.theme.fontSizes.sixteen;
}, function (p) {
  return p.theme.colors.pink;
});
var Image = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].img.withConfig({
  displayName: "Story__Image",
  componentId: "sc-1gwc67d-4"
})(["object-fit:cover;overflow:hidden;position:absolute;height:100%;width:100%;"]);
var StoryText = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].section.withConfig({
  displayName: "Story__StoryText",
  componentId: "sc-1gwc67d-5"
})(["font-size:", ";p{margin-bottom:12px;&:last-child{margin-bottom:0px;}}"], function (p) {
  return p.theme.fontSizes.twelve;
});
function Story(props) {
  var appState = props.appState,
      data = props.data,
      overflowRef = props.overflowRef,
      params = props.params;
  var showStoryText = appState.showStoryText;
  var indexForChapterData = params.titleToIndex();
  var chapter = data[indexForChapterData];
  var _chapter$attributes = chapter.attributes,
      image = _chapter$attributes.image,
      title = _chapter$attributes.title;
  var chapterArray = ['one', 'two', 'three', 'four'];
  var textStatus = !showStoryText ? 'hidden' : undefined;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(RestyledLeft, {
    as: "section",
    text: textStatus
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ChapterNav_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], props), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ref: function ref(_ref) {
      return overflowRef.current = _ref;
    }
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Chapter, null, "Chapter ", chapterArray[indexForChapterData]), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Title, null, title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(StoryText, null, react_html_parser__WEBPACK_IMPORTED_MODULE_6___default()(marked__WEBPACK_IMPORTED_MODULE_2___default()(chapter.body, {
    smartypants: true
  }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(RestyledRight, {
    rightMargin: true,
    text: textStatus
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Image, {
    alt: "fantasy illustration",
    src: image
  })));
}

/***/ }),

/***/ "./app/temp-content/LegalTermsOrBizCard.jsx":
/*!**************************************************!*\
  !*** ./app/temp-content/LegalTermsOrBizCard.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LegalTermsOrBizCard; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-clipboard.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../primitives/StyledLink.jsx */ "./app/primitives/StyledLink.jsx");
/* harmony import */ var _shared_Parallax_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/Parallax.jsx */ "./app/shared/Parallax.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




 // import ReactGA from 'react-ga';


var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].section.withConfig({
  displayName: "LegalTermsOrBizCard__Container",
  componentId: "sc-171ayyj-0"
})(["display:flex;justify-content:center;align-items:center;position:absolute;top:", ";bottom:", ";width:100%;background-color:", ";transition:background-color .75s;z-index:1;", ";"], function (p) {
  return !p.home ? '52px' : '0px';
}, function (p) {
  return !p.home ? '55px' : '0px';
}, function (p) {
  return !p.copying ? 'rgba(0, 0, 0, 0.7)' : 'rgba(253,17,114, 0.7)';
}, function (p) {
  return p.home && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["z-index:1;background-color:", ";"], !p.copying ? 'rgba(0, 0, 0, 0.35)' : 'rgba(255,231,76, 0.25)');
});
var CardHolder = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "LegalTermsOrBizCard__CardHolder",
  componentId: "sc-171ayyj-1"
})(["display:flex;justifyContent:center;"]);
var InnerContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "LegalTermsOrBizCard__InnerContainer",
  componentId: "sc-171ayyj-2"
})(["margin-top:", ";"], function (p) {
  return p.home ? '-135px' : undefined;
});
var Card = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].section.withConfig({
  displayName: "LegalTermsOrBizCard__Card",
  componentId: "sc-171ayyj-3"
})(["height:160px;width:275px;background-color:", ";pointer-events:all;@media (min-width:", "){height:200px;width:350px;}"], function (p) {
  return p.reverie ? p.theme.colors.reverieBlue : p.theme.colors.white;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
});
var CardContentArea = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "LegalTermsOrBizCard__CardContentArea",
  componentId: "sc-171ayyj-4"
})(["display:flex;justify-content:center;align-items:center;height:100%;box-shadow:7px 7px 5px -1px rgba(0,0,0,0.3);"]);
var StyledClipboardButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-clipboard.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())).withConfig({
  displayName: "LegalTermsOrBizCard__StyledClipboardButton",
  componentId: "sc-171ayyj-5"
})(["border:", ";background-color:", ";padding:0px;height:85%;width:90%;display:flex;align-items:center;pointer-events:all;:active{color:black;}:focus{outline:0px;}https://stackoverflow.com/a/18997800 &:after{position:absolute;top:0;left:0;width:200%;height:200%;border:1px #999 solid;;transform:scale(0.5);}"], function (p) {
  return p.businessCard ? "1px solid ".concat(p.theme.colors.pink) : 'none';
}, function (p) {
  return p.reverie ? p.theme.colors.reverieBlue : p.theme.colors.white;
});
var Graf = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].p.withConfig({
  displayName: "LegalTermsOrBizCard__Graf",
  componentId: "sc-171ayyj-6"
})(["font-weight:400;flex:1;font-size:", ";margin-bottom:0px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;@media (min-width:", "){font-size:", ";}"], function (p) {
  return p.theme.fontSizes.six;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.fontSizes.ten;
});
var MyCopyright = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].span.withConfig({
  displayName: "LegalTermsOrBizCard__MyCopyright",
  componentId: "sc-171ayyj-7"
})(["font-size:", ";display:block;margin-bottom:3px;font-family:'Montserrat',sans-serif;@media (min-width:", "){font-size:", ";}"], function (p) {
  return p.theme.fontSizes.three;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.fontSizes.nine;
});
var ClipCopyright = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].span.withConfig({
  displayName: "LegalTermsOrBizCard__ClipCopyright",
  componentId: "sc-171ayyj-8"
})(["font-size:", ";font-style:italic;font-family:'Montserrat',sans-serif;@media (min-width:", "){font-size:", ";}"], function (p) {
  return p.theme.fontSizes.zero;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.fontSizes.two;
});

var LegalTermsOrBizCard =
/*#__PURE__*/
function (_Component) {
  _inherits(LegalTermsOrBizCard, _Component);

  function LegalTermsOrBizCard(props) {
    var _this;

    _classCallCheck(this, LegalTermsOrBizCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LegalTermsOrBizCard).call(this, props));
    _this.timeoutId = null;
    _this.state = {
      copying: false
    };
    _this.makeCopies = _this.makeCopies.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LegalTermsOrBizCard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!this.props.appState.showBusinessCard && !this.props.appState.showLegalTerms) return null;
      var makeCopies = this.makeCopies,
          state = this.state;
      var copying = state.copying;
      var _this$props = this.props,
          appState = _this$props.appState,
          boundHandleClickForApp = _this$props.boundHandleClickForApp;
      var showBusinessCard = appState.showBusinessCard,
          showLegalTerms = appState.showLegalTerms,
          currentCaller = appState.currentCaller;
      var homeIsActive = currentCaller === 'home';
      var reverieIsActive = currentCaller === 'reverie'; // Styled as attribute for simplicity,
      // breaking it out above's a headache

      var linkOrTextForClips = currentCaller !== 'journalism' ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        style: {
          color: 'black',
          textDecoration: 'underline'
        },
        to: "/journalism"
      }, "clips") : 'clips'; // The following HTML is span, not a <p>, b/c it's nested in
      // a <p> (React doesn't allow <p> nesting, kicks a warning)

      var legalNotice = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(MyCopyright, null, "\xA9 ", new Date().getFullYear(), ", James Abels. All rights reserved."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ClipCopyright, null, "(All ", linkOrTextForClips, " owned by their respective publisher.)")); // Real email address shouldn't be a problem here b/c it isn't
      // on a real route. It'd be hard to scrape w/o special effort.

      var cardText = showBusinessCard ? !copying ? 'abelsj60@gmail.com' : 'Copied!' : legalNotice; // StyledClipboardButton triggers success handler
      // AFTER it's copied something to the DOM. So, we
      // need to prevent its operation if we want to
      // share this component with legalTerms. Turns
      // out, it won't copy empty strings.

      var textToCopy = showBusinessCard ? 'abelsj60@gmail.com' : '';
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Container, {
        home: homeIsActive,
        copying: copying && !showLegalTerms,
        onClick: function onClick() {
          if (showBusinessCard) {
            boundHandleClickForApp('toggleBusinessCard');
          } else {
            boundHandleClickForApp('toggleLegalTerms');
          }
        }
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CardHolder, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_shared_Parallax_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        render: function render(renderProps) {
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(InnerContainer, {
            home: homeIsActive,
            ref: function ref(_ref) {
              return renderProps.scene = _ref;
            },
            onClick: function onClick(event) {
              return event.stopPropagation();
            }
          }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Card, {
            "data-depth": ".6",
            "data-friction-x": ".5",
            "data-friction-y": ".5",
            "data-limit-x": "2" // Value unclear
            ,
            "data-limit-y": "2" // Value unclear
            ,
            home: homeIsActive,
            reverie: reverieIsActive
          }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CardContentArea, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StyledClipboardButton, {
            businessCard: showBusinessCard,
            "data-clipboard-text": textToCopy,
            reverie: reverieIsActive,
            onSuccess: function onSuccess() {
              // Use this.props... so the value's updateed
              // after the listener's added to Clipboard.
              // There's a problem w/'this' otherwise.
              if (_this2.props.appState.showBusinessCard && _this2.timeoutId === null) {
                // Technically runs after copy is made!
                // ReactGA.event({
                //   category: 'Copy email address',
                //   action: 'Start copier'
                // });
                makeCopies();
                _this2.timeoutId = setTimeout(function () {
                  _this2.timeoutId = null;
                  makeCopies();
                }, 1150);
              }
            }
          }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Graf, {
            key: cardText,
            copying: !showLegalTerms && copying
          }, cardText)))));
        }
      })));
    } // Not added to ClickHandling. Dealing w/'this'
    // binding inside the class is nightmarish.
    // K.I.S.S.

  }, {
    key: "makeCopies",
    value: function makeCopies() {
      var copying = this.state.copying;
      this.setState({
        copying: !copying
      });
    }
  }]);

  return LegalTermsOrBizCard;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);



/***/ }),

/***/ "./public/arrow-down.png":
/*!*******************************!*\
  !*** ./public/arrow-down.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAANCAYAAABcrsXuAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAuIwAALiMBeKU/dgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAOdEVYdFRpdGxlAERyb3Bkb3duLT8XnQAAAXJJREFUOI21kj1LQnEUxp/zvyloi0H4BSoUURKioVeSwAa5RcMtGhpbam9prS/QHHEpQgyUvJdCtBeXqKGlSDPCxiCQEMIXUu+/JUHLq0b2jM9zzvPjwCHv3OImJ2zgn0QcW0L6MXHeZ3eaAYx1nMD5dix8uC4AwHMqcdZvd1oBDHesH7R7Gg6sAgCretGjwBoIO50AEGFv3G1fAcABQKgNh1yOk6LGBgC4/sAIlbKvy7IsV6pGHSSZTPKeyVHFlC8OAmT7dT1x5c1qWbgKBst1dqNZSZKM2Q8KgcjXPoHHShbzbFyWiz/YeisjkmTqLrNj4vC07sclFYwz0eh+rlGsCwEAURTNBcEcIWCiCeDaxAteRVHe9UaYXgAAqqrmYdBEADc6I7fMqPmaAYAWl1Q1JS71GgTtAoCzxr4vVZgnrvozrfabXlJVXPVniIzTAB6+rCfGDN52AMC3F26mdOouZ3O4wxqvuLuYYT4SOnhpd/cTV/B458yL5p4AAAAASUVORK5CYII="

/***/ }),

/***/ "./public/arrow-up.png":
/*!*****************************!*\
  !*** ./public/arrow-up.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAANCAYAAABcrsXuAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAuIwAALiMBeKU/dgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAOdEVYdFRpdGxlAERyb3Bkb3duLT8XnQAAAXFJREFUOI1jZCABeAZFy/z592fxXybmhH3rlj0kVh8TsQrdAmPF/vz7s4uBgcGB+d/f3e5BMZJUtcTBN1Lk//9fexkYGDShQqr//v3e5eAbKUIVS1xCQ/lZmf9tZ2Bg0EGT0mFl/rfHPTRUiCJLfH19uRh+M21mYGAwwaFE/98vpq1+fn68+MxhxCVhGRrKyf2HaSvjfwZHQi5l+M9wlPE7m/uuXYu/YpPG6pPQ0FA2nl+Mq4myAOJU6/9cP9c7JCRwYJNmRhcwTktjZfzycw0DA6MvURYgbFJm/vlbT9DOeu3zs2f/4bQkNDSUmfHz70UMDAwhpFkAt0id8+tPbTkJ0XUPHjyAW4QcXIwf/jDNYGD4H0meBXAQxCYoPrehoQFuNozB6BYQPpXhP0MKhRYwMDAwMPz/zxB35MKN2QzQhMXMwMDA4BoQ3snAwFBADQtggJGBwVBZXVvw3s2rOxjd/MNb/jMyVFPTAhTL/jO0AgAaN2i+BdwntAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./public/dot-empty.png":
/*!******************************!*\
  !*** ./public/dot-empty.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAuIwAALiMBeKU/dgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANUSURBVEiJrZbdT9tVGMc/z/m1YTAdIKZr2i2+XCwhJm6miBo1qXtp1qRIO/w5EZfoTf8DLzQxqVwa/QNctoRpXMY6oTCSKrAFY+YLgW1czd0sbrqAsllAk0FbzuNFgSACG/r7Xp4n5/s53+ecnHOETRRJp/0N039GrdqkQZ5RdBdQDxQE+VXVXlbIFXbWfTN+/HhpIx9ZbzCTyZhLE9faUD4CHt9sIUsut0Wls9a/eDKbzS6uLZu1A/EjHbsuXb32I8rZCkDGVXhPsE3WmuBQrttYa4KCbRL0feAKSljRT2dKznf7E2540ySxpBtBzYAKQYXrRvXdwb6z5+8X5GDqaKtUUu8BnTRGEl/3dF/+F+TQq2+EcHQUJQzk1W/bh7PZ2fsBlhV13Yd8JfO5QFKUKZDmwb4zv6y0KxqN+jD0o4QR7X9xX2NiKwCAkWz2r5f2NbYB51UIqmiP67rOCsRXH3gHNILyU/Xi/FuZTMZuBbCsTCZjq+29DoXrQNNsyXkbQOLxeFW5ascNICRCy2Bv98B/AaxWrPX1FhXpR7hd57NPmuK2uleAEDDmBQBg6bCMoYRnSiZqRG2qUtKsF4AVqZwDEEgaQSIAas2Qlwzj6BCAQpMBGwJQZ+GWl5CyFm8CIIQMSAOgL+/dW/AScqG39w/AojxqQO8C8u3ERL2XkGhLewNgEO4YRSYBjPp2ewnxiVb8lEljVMYBRMwhLyFibMVPZcxYhz4AVdq8hIBpAxDRflPese1C5ULjuQOp9sNe2MeSR+OgzaCTzsLcRTPS1TVvhU4Ag/04Fju2/X8BYse2K3wCgMqH+Xx+wQAUArUngAmUp6gpnmKDF/MBJFpT/AxoBK6UZn87yWqz/UfefMyx5VGQgMKAf8HXkc9/MbeVBNQUTym0gdxVxzQPf3n6Bqx6fi/2nL6pRlqBOwKJclX5+wfdowOp9sNaUxytAJhWo4llwD+SrKyoxX0Cn8mp8jQAyg+InrPWGVo0926N5HIz0WSyzqf+3SISQ+U1hOeXpl91kNRXuTM/r/Zct/eRdNr/yPRcGtUPgJ1rypY1HxBRpqzQWQjUnljva7TpBr/gutUPF+WgirSK8KyqBkECoL+LyJTCqEBfsbZ6eKSra34jn78Bof5VglqizUwAAAAASUVORK5CYII="

/***/ }),

/***/ "./public/dot-full.png":
/*!*****************************!*\
  !*** ./public/dot-full.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAuIwAALiMBeKU/dgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIfSURBVEiJtdZPSBRhGMfx7/OMm1LoEsSG0qXEoKhDt+gPhG5bEouajGIRhKcOgUeJDu21oHNitwrSxtL1EO1K0SG7dWwpMumkGeFGFtTuzj4dWmXTktV2frd535fn87wMzDxCZZHWzt49KsVG0IiiS1Jgzn7WfEin736vqMB6m9GzvYfFuIgRB5rWHDB+gD015GF2Z/jeq+Hh/Iagk93nWsz3bwh0VtJtKTNiciWdHBmrCGrr6jutVhwBwhtAVmIwnI2EL6++3R9QrKun30xuA7oZpCypxUg4Xo6tFIx2ucfM5FYVEIBT2z99HSpfcACirhsWX16ANFQBAUDgUPO+A5nZN68zUOpe8s4gSKRayEqM6+3t7bUAGnXdMNhA1ZHf2e3X1Z8HUHLOGWBrQBBm0g2ggsWDQkppi8UubFNR9gcM1fp1hWY1ozFgCByaFKM+aEfMb1CEhaAhLfJRMeaDhixUM68I0wE7C0cP7n2vapIMUjFIJhKJojZs8V8C74KCRO0OgHqe5yNcDQSB5NSjB9NQ+qhOjY+OgT2rsvNNi8XB5Yflf49pyFxgpkqIIfQ/mfTeroZIed6iOBoHZv8TKQhyaWp81CtfXDMznIj37Qg5/ihI6yaQzyLamx6/v+Y1/HPcinX0xE3kJtBSAZDDbCgvuWvPJya+/O3AunOd67pONu8cV6zDkCNgu4AIsIQwh5EBm9SQPU553uJ6tX4BPa+w3KvrJXQAAAAASUVORK5CYII="

/***/ }),

/***/ "./public/header-nav-closed.png":
/*!**************************************!*\
  !*** ./public/header-nav-closed.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAA1CAYAAADVn2JsAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAuIwAALiMBeKU/dgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAaMSURBVGiB7ZpdbFtnGcd///c4aZNWVX1st4WKwtQB2kUvGKoQF4PR5YMCaZIiJ2lLb+BibOKmVEyIgRSu+KjEJCTQKBIqWumSWssHo4I6Wam2oQLaqAqMgYRA3UBN69jux0bT2ud9uHCapkuTxombdlJ/knVkH5/n+R37nPf9v5bFAmjq7PqBTI8DyyZf+osi3559PvPvhdSrFlftAVu273y/THuAMcEo6GVgEzE9Xnu9m1O1tItKqwDMOJwd6m+2KNoF4E2rai03G7GlajQbH0+nGxouE7qAUI5QkSy/bvWJV/fvL812TM2khZY1b+t5rwILDZ/AB6FEiCw0LAFKYIRAKBGaWQgKKdE4ZWFgDsJzF05u2b6z89jAodM37zWNdDpdX7gSiwd1xCNfjjuvuJzi3ogLxU0+LvgApk7gNOgsWAq4r8pz9EABKGAUEAVQAfMFpPuANiDnvHUf/eXh384mreaOnl+AdQFBNd0NLglywJhBQVCEiogZBUwFcyrErFwo4fINpaBw5Mih4lw1mzu69oK+B5ikvdnBvh/OkG7q7H5Axt+AN4HXDYoyFRFFyYrmKZqsGHgK3lnRgrqL5at2kUtnzh8/frxczUnOl5bOHc1mvg8IQT8vrV7+5eMHDkxMSW/p6N4YwD+Fvp0d6uu9HRILoaW9530mBsE+CpyMXNB5bODQaQfQUAoKlbdZeAcdZ5Ad7ntT/6v7JJABPhKLot+3tPd8zAFs3vyhC0DkK3f3XUU2+8zbI0P93ZieNLHGnD3nAHp7ez3ovHT3SU9izmsYuIDn0rRx2gqgxB3TmoMtHd0bPT4L1Hvnvzh9cimA3XXSWz6XXh/ACJAStL8wmDkxPXvk4e66PB5u25EMYi4LbJBpd3ao/9dwQ2BSAVjd29tbdYi6HWzdumtVXWC/AR4w2WPZ4b7+a/uuC5ovAO7Ea6+tvgOON9DW1tZYXl5+vjI+29dHBw//dPr+qWtackXD4AohlVxw29m6desy35AIzUoJIgtxhIhwwtiF8QnQd0aG+r//zuOmpD2WF4Bb2HX9yLYda1E5UYmXQUUAn0CEeBciS1RudIVAAgjLsAI/mUDdZAyyyYJmPxoZ7v/GzXpNSbtKwMGjjS2f33GRsoU4C80UBwsxQom4r2xDjDiVcX3y4R24SlN3rbMqz2UAEahgUHDoPx475VRJeYYqSc98JWQ5vTE6dPj12T6g60Oec68S+TLokEW+kkps2qkLzJiQuASkgAngHJWElwROgZ6b3twCFaQgjyvlRzOZC/P7zm7NDXm6tb3nIQ8PmeyisDwob145LMq7K8vz2ewzbze1pzdJ7s9m7Bsd7n+iqS29QYE7bbB/dKj/0VqJzcUNK5ejw30vAS8tRePFcFeMydUyY43Y0rJ7BY2lr3mz+53IeTHuTGPmyUmMV27OO6F6nRuv6W3p+71zA8CmeRx7FvgrZhNInwVOIQbkGTdHzkw5JxuX6vLjycbxuVbXC5Zubu/6DNJBIA4c8N495ZylzFgrWcpQUrJ1MlJWGT2SwHpgxTz6XDG0b3So71u1klZzR883wXqBsow92eH+H8+3wMPp9MrlV1hvCtZ4SOL8WhlJQ0kzkhIp4EEg4ep88mgms+jZVs2d3U9jPAp2Bkd6ZODw7xZb9J00dXT3CbrrS0F4q5X4fIhh9ADFqGybj/0q898aOM5AWApUOnLk0Pla1HOgISAexNyeWhS8OUqBjXM9WSwK91Zd9BjiRWBvc0fXE7UoOhNbCzpXq2ruRCZzOTYRawNOgr7b0tHzpVoVB6gsKhRO/gpVE6aGvNbtX3iP96WXgQ0YX/EBfwoijV2qj8ZPZDKXF9rgkc7OhLP6cdCzI0N9O2shPTUjHh04eKZ1W7rVO72I9LTzYDJWlhzNHd1vCc6Czpl8DnNF5MfMNOZEDtwZH1mxLhbkVgZXz2UymavX6gZuecoiD+Zr/0lfo6Vz9xqzUiv4NRLrzFwK80nkUmDrqEwqjbeoWwTGEDmDSManZPpqdrjvqdsifSumoin6WUD0E5P7oBkHgVPAK4KkGUkggSa38Iqr85+uxcQCi/lR3Sx/dDjzx6a29JgCh8EflipPvyuj6T3ppeKe9FJxT3qpuCe9VNyTXireldLVB6Z63qBMl3n3D4AGJsYn1NjlzP+r5nazUFU0bd3e/aD3PCmY8YcUg0jihexg/77a6d2cqqSbOrr/LvjwnAXlWrKDz44sTmtu/g8RDLCWVt8odAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./public/header-nav-open.png":
/*!************************************!*\
  !*** ./public/header-nav-open.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAA1CAYAAADVn2JsAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAuIwAALiMBeKU/dgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAARtSURBVGiB7ZpNaFxVGIaf90ymPxFKZ5JKcGEVqtJFQIQuXHRTkrQY2vzAJCFSBDfa7kQUoQquXFhwIYhYQSr9McnQzqRSSqapihWL0lKqolVEbTemyczYVmvTTu75XDRNJzbJZNKbSQp5NnM5M/c9zz2cOee7lyvmQENbxzsy7QSWjzd9r8C3ZD5N/j6XvHJx5Z6wqb17rUwvAUOCQdBXQD1V2hm+3tSULe2CwioAM/oy6d5GC4JnAbxpVdhy01FVqY6m4+lEYuXK68RdhLgccQWyXN3qU2f27ClMd05o0kLLG7d1PaSIxQ1fg4/EJeLI4obVgGow4kBcIm5mcVCcAtUTFgbmID585eym9u62zw4fvDB1X0UkEoll+RtVsUiUWODHYs4rJqeYN2JCMZOPCR7B1AZcAF0CWwM8GtbFFzHivHUOHOn7fDppNbZ2HQDrACLzIDBXxiS9nEn1vFvcKICGts71Mn5cGK/ZoI8Lq1e8+MXevaMwvnp44+bCSpXCnotevv71pvbutTA+0s3N3bGb0SC/sGKlkTEEanUAGzY8fgUIFtipJCbqzNmhidWjsbUrC1azkFKzwjhftCPaop8ewDXv/PPF2/hily4IEidSyVPF0rkF0ylNINP2TLr3GEwqmLRYR9pMtiPT39N7u+GOtPlFKm2vDab6PixumZCW3F+VFyqB7K3j6b63/988Ie2xxTWnzd47nurbNdVXE6WpE3mzedUIgLxB3qG8x3JO5DHyhvKIPObzZuRxujiY7vtpuqA79bRzZwj8GDPV2MYo4m9gzfjxMHANWA+cAx0q7twiykuRHK6QG0wmr4R19ZPq6c0tXRs9bDTZVWE5UM68RrAg526syGUy+641tCTqJfedGbsH+3tfbdiaeFgRd8Fgz2C694WwxGZi0qgO9PecBE5WouN7oewb28XAXfO3qWn7A1QXXvFm65wY8SLrTEPmGZHI4iw+z3/Ykkye09sS67xzh4H6WZx7CfgBs1GkZuAc4rA8WXOMmGnEybJSNJetrc7OdHc9Z+nGlo5nkPYDsbDCi7hhaPdguueNMMLErZva18HeZH7nuLmorx1IJu+5XKhqbOt8H7NKLFWq+jcayr/BYXSFETQLCkePHrwcRpADpcMIKo1lgXBG+p9osAPxZRhhM6PhsJLcqWTyetVo1VbgbFihUyEYCSvLARw7duCqtGwL8EtYwVMQ3kjfPsik9g0775vB/gwrvBgzy4aVNblgOpL8talt+5Nmhc3gH5SoM3Nrbj0ZVS1YHVALVJfbkXB/hOQ8eRsv8TsDmChN0UcRgg9M7jEz9gPngNOCWjNqgRo0/gmnXdRvCWNjgdk/VL97qTLLDfQnv23YmhhSxGHwTaXq6fuyNF2SrhRL0pViSbpSLElXiiXpSnFfSpf/FsIyLjJGh3n3M8BKRrOjqu5w5n8L3W4aZluaArC5vfMp79kluOuFFINA4kQm1bs7PL2pKUu6obXzvOCJGQPlmjKpT47fm9bM/AdNC6YRHs0vhQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./public/linked-in-icon.png":
/*!***********************************!*\
  !*** ./public/linked-in-icon.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABACAYAAACTDsCFAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAuQwAALkMBFaxbiwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAw5SURBVHic7Zx9cFvVlcB/50nyR0zikBDCR7ewhQRib6I48YSGbTvxQmyTRHZMEs0ChRJoB8qWsrulZWmHrvuxlHaX2UBLCy2wnUJ3QElIZAUj2zDuFwwTHGLF2KbrDrRdEhKaQBPyYVvSPf1Dki3bifykyJZM+c145t37zjn3+Pj5vvPOu+8KSfiaXv9bLJ1FJojZ611dvj8j3VH4fD5H8ez55xCWueKUP1uDxXtXrZo3kA3b+YIA+ALdyyzkCYX5p2NMlV8her3XU/7HTPSfaeta4DB6J6p1CGclnTqB0oZYP6ivWdh2Oj7mC+Jr7psj0chroGdnxaLScdb0A8urqqoidlV8Pp+jYOb8/xCVOwHHOPabBhzhG7wrKw+frqu5xJJouD5rQQcQKt99f06FXfHGRrUKSy95SlTuYjjoBugUaAZ9CehPsl9XqAUv+YLdmU2JeYIT5eLYhBNDhMcsNd9XKXjfjoGohs8T5H5gWaLPiMwHXrGjX7E89A2Q9cM9+mPLyTc9Vyzem+jxtXefURiO3oZqI1CMalmhRJ5W1WoRUTvj5BtOJDnsHDLHF9yy3ivRNGy8sTXQ83kDuxIdqmLZUdzW3HURmK8kdd1WX7P4R6PlvFXlR4HvNbWFfqWG54ES4Ep/a8gLPJ2Gr3nDqADpn7zpBT2Gi7czGtwytwMFACo8UV/jHhP0ZOpWul9G9c5EW5A7U8nnM7auzAlDqEscGrG+Y0dlRuF7jwLvxJtLAy90nj8Rrk00OQt8e/ubRcCF8ebeq1cu7LWjV1VVFUHkF/GmEJVLJ8C9CSdngT8Sfm8WDN1f/pSetklc8ajR2dnzavLIWeBdkemHgERGkl46qzJ36FjkYPa8mjxyFvh4CeDNePO8pmBnuR29Rzo6XMCKeFNVoq9PgHsTTk5vroL6E8eKfM2OzjkHC24B5sSbO+url+ybCN8mmpwGPmr0QSBW/BKu8beG7kglvz0Y+iSi30u0RfnPifVw4shp4Buuqvi9qt471KFs8reEfrrtud0XJsv52jpK/a2d94jQBhTHu4OemkXPTJ632cWZawfqa9zfamrZcynCNfGuz1iWdYO/dU8vqvsQKcWom/iDVpwuU2CumarlArAR+J+1hEqKBwq+iugVwAlBt722q+wHjY1iEjLRqOrIyoN9REQbG/XTSy7v6lPVuwEXIKiWAWXomNhupr/w5oaaS23VkvKVlIF/pKPDVbzP9QtEK4lVCJ2KrChf2rsU+Ey2nIj/Ef890Lr7SVXHlxRdC8xNEjmmELREvl9XveiX2Ro3l6QM/Jn7Sq6LBV1+rifMTeFp0RKXOpsFbtga6Hlgnafs1Ww646mu6ANuVdXPNzf3zDUOnTtooocOnh0+cEtlZTibY+WalIGX2JWOWua/vN7yQWBwy47uh1Tl44ouA7Ia+OFxRYH98Z+8oKUlVNIv1gJFzxYoIWqilkMOq9H9/YWuP8QrqLYZL/AlqoJl5Fiiz6gcE0CVMxJ9DoeIMSc1MaUJtHecZQZdG4F1/VCJGsfQncwSjAIiFA5G1B8M9YmlL2Isf/8Rx3PxC/WU5Dyr2dayZ6mFeQxkepqq74rqjXW1i7uTO9vb252Hw7MeF+Xv0zEm8Er/YecNXm/5oM/XXVBYGrnDDHIPYMcvQZivKvMR3VhYGtnfFNyzyWmKN53qJX3OA2/BP4O4M1D9GGLdDtya3HkkPPMyUa5P15jCx4pnhh9/pq3r/50mslVhQfJ5gXcVdgLvIBxHmSZwpsIsYlXW5PL0OSp6X9hx/OZAMPSPnlr3mCl5VOCleLSAHaKDVpFIpnONFmaoiKJj/FXjKM40vTeGOoeY6xRmJrqAJy0jD6+pXfhyqueGrcGOcx2Wa7UoNwMfj3fPM8KL21v3rFtbvag5WX70Ff9R347uOu+a8ia7zqqqbHm293ay8CgjIivGSxf9wVAtwnO27MH/1tW4r0tpryX0Y+BzcQf+KUm3V5RPn+xqPRnraivfBh4FHvUHQ7Vq8bAoFwBForq1qS1UVbfS/XJC3kI1uRYuorJ9c6Dn/zYHejpUxZPit7pjc6CnY8uO3r0o/zLilMgBO87mMcH+Aucyu0EfTX2tO+hwhSsRSbzwLzLKU7727qGExFIHzxP7l0ogwDxgKZDiJYN8JC5z7qgT7zkj/TszcTg/0DZXdNradNPD0XiqKg9arsFVwAEAUS4oGIjcnThveVeXd8ZLstlICI8J3NTQUPHnLNiaFBSSH8y6B6zIhmwtF/RUVR4UZXj6EvmC3//6dIhXJ72eBfeppUuBu1C+q7Ddvnl5EOW7iH4xEpG/W+8pS0M3D1CeAo4K9Doj0dXZXqFWV+veKrFsCNAZUjTghaSbq3d1eSfQCeALdK8HWWvHsCPMN6++uuxQNp2dTNbWun+NvVw9YxR+SnzBl4o0AI/lPI/PV/ytr54nxrFcLb1AjOVSy+x1qHSuqXG/lq6tAXU+XSiRh4hVXZdBHjxA5Ru+to7SgqhzEyrXqeBCBRUFFaKAPxj6jaC3jn5iToW3tvxdf0voDeAiYE7ghc7zc7ugKc/wt756XqFxdojIjcTeC4xF+ISK7Ay0dlanZVwIJQ6jUcv9YeDj+HzdBagjAHJxvGsA+Jmid4vKvwn63wyvYJtmVLYEWvbYXkylaF/i2FI998OpJk5BafhfQZbEm+8ZZGVDzaJdyTKB9o57ddD1rMZulNMN+hBwhR37ojKULRlkxlDgtwZ6lhhhJYYzFS6x63DUxdc3N/WcENF9Iq4d69bMf8Oubr7Q3v5m0fuDR76cqHqIysaG2pFBh1hevjXYsdYprl6gFPiH7S1dl6+tWfjSeGOoyBGJv8YUdIYFsDnQe7eBV1DuQ7hLwFYqGTf5RYS7FHnAaKTLF+hpsK+bH7w/cLguXmUE9KW62kX+U8muq618W0QeSLQFc6OtQYw5ntQqsbb4uytAv012lnpME3h827bdM8cXzR9UZMVwS54cV944nkhqrjiVXDKWZY0oI1rGkisZGXQD9BH70CDFg5G+FZfZO+rEzKir6DI7zuQRi4aOjPXieML1teW/I16DAS4OBDqmpTugZQ0vhwNQVOo3eMrmb/CUVYpo4JSaYm3a4CmrXL9mwd+A3p98ypgsflM1OQx9YTgg1lt2FAQSchItKEx7xfKI6UWEP2yoW7AjHQMiopa4fpjuwPmECkWJ4+Lwif5UskM6MDRnizHpX/EjjKnaGnQMzsiJjPT+ivnwASpHfBj4HJEy8Kqx9TTG0pLhzvh6GmNO6w3NXzvjLGiSV1QVy/Dl5ua+m45agyUSjr1REWUKv97LPSmv+Nkl+38O7FTk2mPR8GEJywHgMpD/WV9fvntyXPxgkjLwVVVVkSKOVwHfVtit6K8FvtC969LPTpJ/H1jGrU56PJXHgXviPznF39ZZoVE+mdlK/LE883zvbMsMfEqUtPPw02XKlIWbgnvq1eg2yfQLiFE0N/cVDprju0TlgmzYS5cpk06qpRdCdoIOcNR1uEh0zJqgSWPKBN4VmfYw8FWwt3xvPLwrKw9boh7gR8Ckp8ZTJvCrVs0bqK9xfwflwWzZ9FQvbq2vcd+mkqoKOzFMmcB/0JgyN9fGRrUqlu+5HuRTZGNpMrEsSaJWtaqWZsVgGkyZwC9Z3vVZhUeyFXRfe/cZDEZ+qaITuorsVEydqUZNVkvPxUdPGCDld0oTyZQJfF3t4idQrhKyc3P1eCqPOxyyTIXPkfIV58Rg6Yj/XZnj82nqfR9PRnhy8uH6WndQNTvpJMCaKxe9sbba/ajK5KeTThRNeiyZLcWv/8T3bPeDDnUdsWPAED4/qnK/JP39RPQD+PFldnEq9I18HNSNYmSjwe5GqYKMuuGJcfw2Q38a/S2h8bbJOseuMYVP+FtCPhuCc8aVSYXFJn9LKOXeCjq8/xoAzog4/C7Mvdnc4nb2jLc7bcuLaGKjCFVdkfZoo7BETVLnR+M/tjkxe9Bu2pQsVzu+tCYfq3Wt55KDlkbXgJ72FlOKtqvounT2FVZjgmSWIxpFx8z3/ersBMloH0xVXvBefrmt7OlkY9skLCItI2aZ09nGPBKNvHVt/cKMvvbb1tx1EQ5Nb/WZiR5quKri9yc71dz88owBx7R5admTaPSdWdHudDar8D8XusRYcsb4ksOYqB5Yt8r91l8AlEiZn8a0Y3wAAAAASUVORK5CYII="

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi @babel/polyfill ./app/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"./node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./app/index.js */"./app/index.js");


/***/ }),

/***/ 1:
/*!*********************************!*\
  !*** readable-stream (ignored) ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=main.e42ec5e88804b7d6093f.js.map