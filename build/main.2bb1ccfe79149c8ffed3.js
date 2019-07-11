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
/******/ 			if(installedChunks[chunkId]) {
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
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var _header_footer_Header_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header-footer/Header.jsx */ "./app/header-footer/Header.jsx");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/dist/index.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _temp_content_LegalTermsOrBizCard_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./temp-content/LegalTermsOrBizCard.jsx */ "./app/temp-content/LegalTermsOrBizCard.jsx");
/* harmony import */ var _classes_Location_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./classes/Location.js */ "./app/classes/Location.js");
/* harmony import */ var _shared_PasswordLogin_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/PasswordLogin.jsx */ "./app/shared/PasswordLogin.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./classes/Referrer.js */ "./app/classes/Referrer.js");
/* harmony import */ var _classes_ScrollHandling_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./classes/ScrollHandling.js */ "./app/classes/ScrollHandling.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
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
  var data = _taggedTemplateLiteral(["\n  html {\n    // Best practice to load fonts: \n    // https://stackoverflow.com/questions/12316501/including-google-web-fonts-link-or-import\n\n    font-family: 'Montserrat', sans-serif;\n    font-size: 62.5%;\n    background-color: ", ";\n    height: 100vh; // Ensures iOS/mobile Safari 12 fills height on rotation change\n  }\n  \n  body {\n    margin: 0px;\n    padding: 0px;\n    font-size: ", ";\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 300;\n    -webkit-overflow-scrolling: touch;\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n\n    h1,\n    h2,\n    h3,\n    p,\n    ul {\n      margin: 0px;\n    }\n\n    h1 {\n      font-family: 'Playfair Display', serif;\n      font-weight: 900;\n    }\n\n    h1,\n    h2 {\n      margin-left: 2px;\n    }\n\n    p {\n      margin-bottom: ", ";\n      line-height: 1.6;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }














 // A note on Flexbox compatibility: https://stackoverflow.com/a/35137869

var colors = {
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
  seventeen: '6.5rem',
  eighteen: '2.5rem',
  nineteen: '1.745rem',
  twenty: '4rem',
  twentyOne: '1rem',
  twentyTwo: '1.13rem'
};
var mediaQueries = {
  tinyView: '390px',
  tinyViewTwo: '425px',
  narrowBreakOne: '500px',
  narrowBreakTwo: '690px',
  desktop: '848px'
};
var bottomMargin = {
  regular: '20px'
};
var blurControl = {
  regular: 'blur(3px)'
};
var ZoomControl = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "App__ZoomControl",
  componentId: "sc-11u8va4-0"
})(["display:flex;flex-direction:column;align-items:center;height:", "px;position:relative;@media(orientation:landscape){", "}", ";"], function (p) {
  return p.theme.pageHeight;
}, function (p) {
  return p.fixMobileSafariBugOn7 && 'position: fixed; bottom: 0;';
}, function (p) {
  return p.home && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["width:100%;overflow:hidden;"]);
});
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"])(_templateObject(), function (p) {
  return p.reverie ? '#d2e7ff' : 'white';
}, function (p) {
  return p.theme.fontSizes.twelve;
}, function (p) {
  return p.theme.bottomMargin.regular;
});

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    var referrer = new _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_11__["default"](props);
    var location = referrer.location;
    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search; // Let's deal w/height.
    //  1. Check value based on device type.
    //  2. If the screen is landscape:
    //    a. Set property on load,
    //    b. Resize on orientation change due to updateHeight,
    //    c. Keep resized height on subsequent orientation
    //    changes by checking for this.minAllowedHeight
    //    in updateHeight().

    var height = react_device_detect__WEBPACK_IMPORTED_MODULE_6__["isMobile"] && !react_device_detect__WEBPACK_IMPORTED_MODULE_6__["isMobileSafari"] ? document.documentElement.clientHeight : window.innerHeight; // One way to block orientation change
    // https://css-tricks.com/snippets/css/orientation-lock/

    if (false) {} // Lower limit for resizing — (iPhone/SE form
    // factor uses default height, wider phones
    // use their true height).


    _this.minAllowedHeight = 324; // Narrow iPhones are 320px in width, larger ones are ~325px.

    _this.defaultHeightWhenTooSmall = 568; // Arbitrary (iPhone SE height)

    _this.resizeTimeoutId = undefined; // Let's debounce 'resize'!

    _this.resizeTimeoutId2 = undefined; // Let's debounce 'resize'!
    // Prevent resize when scrolling oversized page. Not using state
    // b/c it causes overflowing divs (w/content in them) to 'jump'
    // when scrolling.

    _this.isAfterTouchWhenScrollingPage = false;
    _this.state = {
      currentCaller: location !== 'i' ? location : 'home',
      lastCaller: '',
      inCity: false,
      // Fantasy image on home if false
      isMenu: referrer.isMenu(props),
      // Menu page (/projects, /journalism, /reverie)
      height: // Sets height of <main />
      height > _this.minAllowedHeight ? height : _this.defaultHeightWhenTooSmall,
      showBusinessCard: false,
      // Show business card
      showLegalTerms: false,
      // Show legal terms
      showStoryText: true,
      // Show story text, picture if false
      pinchZoomed: false,
      // We're zoomed! or not.
      isZooming: false,
      // True when pinch zooming is ongoing
      isAfterTouch: false,
      // Resize w/clientHeight when true
      // Small iPhones raise their app bar when touching the Footer area.
      // This test adds instructions to use these buttons (slide up).
      footerAlert: react_device_detect__WEBPACK_IMPORTED_MODULE_6__["isMobileSafari"] && height < _this.minAllowedHeight,
      password: '',
      isValidUser: false,
      wrongPassword: ''
    };
    _this.handleResize = _this.handleResize.bind(_assertThisInitialized(_this));
    _this.handleTouchEnd = _this.handleTouchEnd.bind(_assertThisInitialized(_this));
    _this.handleTouchMove = _this.handleTouchMove.bind(_assertThisInitialized(_this));
    _this.handleBackAndForth = _this.handleBackAndForth.bind(_assertThisInitialized(_this));
    _this.handlePasswordEntry = _this.handlePasswordEntry.bind(_assertThisInitialized(_this));
    _this.handlePasswordSubmit = _this.handlePasswordSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "handlePasswordSubmit",
    value: function handlePasswordSubmit(event) {
      event.preventDefault();

      if (this.state.password === 'enter' || this.state.password === 'Enter' || this.state.password === 'illustrator' || this.state.password === 'Illustrator' || this.state.password === 'boom!' || this.state.password === 'Boom!') {
        this.setState({
          isValidUser: true
        });
      } else {
        this.setState({
          wrongPassword: 'Incorrect',
          password: ''
        });
      }
    }
  }, {
    key: "handlePasswordEntry",
    value: function handlePasswordEntry(event) {
      this.setState({
        password: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var hcForApp = new _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_1__["default"]('app', this);
      var boundHandleClickForApp = hcForApp.boundHandleClick;
      var homeIsActive = this.state.currentCaller === 'home';
      var reverieIsActive = this.state.currentCaller === 'reverie';
      var fixMobileSafariBugOn7 = react_device_detect__WEBPACK_IMPORTED_MODULE_6__["isTablet"] && react_device_detect__WEBPACK_IMPORTED_MODULE_6__["isMobileSafari"] && react_device_detect__WEBPACK_IMPORTED_MODULE_6__["osVersion"][0] === '7';
      return  false ? undefined : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
        theme: {
          bottomMargin: bottomMargin,
          colors: colors,
          fontSizes: fontSizes,
          mediaQueries: mediaQueries,
          pageHeight: this.state.height.toString(),
          blur: blurControl.regular,
          blurForTempContent: this.state.showBusinessCard || this.state.showLegalTerms
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10__["Fragment"] // Use Fragment b/c ThemeProvider only accepts one child.
      , null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(GlobalStyle, {
        reverie: reverieIsActive
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(ZoomControl // Though an extra <div>, ZoomControl lets us add 'touch'
      // events to React (alt is to add them to the Window)
      , {
        home: homeIsActive,
        onTouchMove: this.handleTouchMove,
        onTouchEnd: this.handleTouchEnd,
        fixMobileSafariBugOn7: fixMobileSafariBugOn7
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_header_footer_Header_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, this.props, {
        appState: this.state,
        boundHandleClickForApp: boundHandleClickForApp
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Body_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({}, this.props, {
        appState: this.state,
        boundHandleClickForApp: boundHandleClickForApp
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_temp_content_LegalTermsOrBizCard_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, this.props, {
        appState: this.state,
        boundHandleClickForApp: boundHandleClickForApp
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_header_footer_Footer_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, this.props, {
        appState: this.state,
        boundHandleClickForApp: boundHandleClickForApp
      })))));
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
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.hasFlexbox()) {
        throw new Error("Browser doesn't support Flexbox");
      } else if (react_device_detect__WEBPACK_IMPORTED_MODULE_6__["isOpera"] || react_device_detect__WEBPACK_IMPORTED_MODULE_6__["isIE"] && react_device_detect__WEBPACK_IMPORTED_MODULE_6__["browserVersion"] <= 10) {
        throw new Error("Uh oh. I don't currently support Opera or IE if it's less than 11.");
      } // Heard after all React handlers run
      // https://fortes.com/2018/react-and-dom-events/


      window.addEventListener('resize', this.handleResize);
      window.addEventListener('popstate', this.handleBackAndForth);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // This will never be called, here as good practice.
      window.removeEventListener('resize', this.handleResize);
      window.removeEventListener('popstate', this.handleBackAndForth);
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(event) {
      var _this2 = this;

      // We're probably zooming if two fingers are down.
      if (event.touches.length === 2) {
        // Pinch zoom almost always moves the X, Y offset.
        // This is a more effective check than trying to
        // add points as coordinates or height/width.
        var stateToUpdate = {
          isAfterTouch: true,
          isZooming: true
        };

        if (window.pageXOffset > 0 && window.pageYOffset > 0) {
          stateToUpdate.pinchZoomed = true; // Set zoom state

          this.setState(stateToUpdate);
        } else if ( // Hard to hit 0 on the nose, so
        // let's look for negatives.
        window.pageXOffset <= 0 && window.pageYOffset <= 0) {
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
        this.resizeTimeoutId2 = setTimeout(function () {
          _this2.isAfterTouchWhenScrollingPage = false;
        }, 500);
      }
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd() {
      // Touch is over, have we been zooming?
      if (this.state.isZooming) {
        // Let's set intermediate values for resizing.
        this.setState({
          isZooming: false
        });
      }
    }
  }, {
    key: "handleResize",
    value: function handleResize() {
      var _this3 = this;

      // https://alvarotrigo.com/blog/firing-resize-event-only-once-when-resizing-is-finished/
      clearTimeout(this.resizeTimeoutId); // Still moving, kill timeout

      this.resizeTimeoutId = setTimeout(function () {
        return _this3.updateHeight();
      }, 50);
    }
  }, {
    key: "updateHeight",
    value: function updateHeight() {
      var _this4 = this;

      // On desktops, only resize if height's changing.
      if (!react_device_detect__WEBPACK_IMPORTED_MODULE_6__["isMobile"] && this.state.width !== window.innerWidth && this.state.height === window.innerHeight) {
        return false;
      } // Don't resize while zooming (e.g., there may be
      // a lag between isZooming and pinchZoomed).


      if (this.state.isZooming) {
        return false;
      }

      var _window$location2 = window.location,
          pathname = _window$location2.pathname,
          search = _window$location2.search; // Orientation change: https://stackoverflow.com/a/37493832
      // On mobile, we must account for browser differences.
      // Mobile Safari updates innerHeight on resize and
      // UI changes but mobile Chrome does not. Also,
      //  after touchMove, Safari doesn't update
      // innerHeight correctly, so we'll use
      // clientHeight 'isAfterTouch':
      //  a. clientHeight. Mobile Chrome and after touchMove
      //  b. innerHeight. Mobile Safari

      var newHeight = react_device_detect__WEBPACK_IMPORTED_MODULE_6__["isMobile"] && (!react_device_detect__WEBPACK_IMPORTED_MODULE_6__["isMobileSafari"] || this.state.isAfterTouch) ? document.documentElement.clientHeight : window.innerHeight; // Do not resize height while pinchZoomed.

      if (this.state.pinchZoomed) {
        if (false) {}

        return false;
      } // Ensure the window top at zero after resize change.
      // (This trigers another resize if height changes.)


      if (window.pageYOffset > 0 // Prevent resize when user scrolls oversized page.
      && !this.isAfterTouchWhenScrollingPage) {
        var scrollHandling = new _classes_ScrollHandling_js__WEBPACK_IMPORTED_MODULE_12__["default"](location);
        scrollHandling.resetWindowTop();
      } // Manage FooterAlert on small iPhones.


      if (react_device_detect__WEBPACK_IMPORTED_MODULE_6__["isMobileSafari"] && !window.navigator.standalone) {
        this.setState({
          footerAlert: window.innerHeight < this.minAllowedHeight
        });
      } // Resize if height changes and newHeight > this.minAllowedHeight.
      // Note, mobile Brave slips through this test on /home. The image
      // 'resize' and Brave then resizes. No fix for now.


      if (newHeight === this.state.height || this.minAllowedHeight > newHeight) {
        if (false) {}

        return false;
      } // Update page height when these factors are true:
      //  a. mobile device
      //  b. orientation change AND pinchZoom is off
      //  c. height changes (we've already discarded newHeight <= 350)


      if (false) {}

      this.setState(function () {
        return {
          height: newHeight,
          isAfterTouch: // True until handleMove says otherwise.
          _this4.state.isAfterTouch && false
        };
      });
    }
  }, {
    key: "handleBackAndForth",
    value: function handleBackAndForth() {
      var location = new _classes_Location_js__WEBPACK_IMPORTED_MODULE_8__["default"]('/', this.props);
      var hcForApp = new _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_1__["default"]('app', this);
      var boundHandleClickForApp = hcForApp.boundHandleClick; // Always the caller.
      // Update isMenu if it doesn't sync w/the window.

      var isMenu = window.location.pathname.split('/').indexOf('menu') === 2;
      var updateMenuForBackForthButton = isMenu !== this.state.isMenu;
      boundHandleClickForApp('updateApp', location.caller, updateMenuForBackForthButton);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (false) { var _window$location3, pathname, search, _location; }
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_13__["withRouter"])(App));

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
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

      var clickHandling = new _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_1__["default"]('body', this);
      var boundHandleClickForBody = clickHandling.boundHandleClick; // Optional params in React:
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
/* harmony import */ var _public_linked_in_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/linked-in-icon.png */ "./public/linked-in-icon.png");
/* harmony import */ var _public_linked_in_icon_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_linked_in_icon_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _primitives_ContentHolder_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../primitives/ContentHolder.jsx */ "./app/primitives/ContentHolder.jsx");
/* harmony import */ var _primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../primitives/Main.jsx */ "./app/primitives/Main.jsx");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../primitives/Overflow.jsx */ "./app/primitives/Overflow.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_Shelf_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/Shelf.jsx */ "./app/shared/Shelf.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");











var RestyledShelf = Object(styled_components__WEBPACK_IMPORTED_MODULE_10__["default"])(_shared_Shelf_jsx__WEBPACK_IMPORTED_MODULE_9__["default"]).withConfig({
  displayName: "About__RestyledShelf",
  componentId: "sc-1ye68oq-0"
})(["justify-content:space-between;"]);
var Hed = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].h1.withConfig({
  displayName: "About__Hed",
  componentId: "sc-1ye68oq-1"
})(["margin-top:-8px;font-size:", ";color:", ";"], function (p) {
  return p.theme.fontSizes.sixteen;
}, function (p) {
  return p.theme.colors.pink;
});
var Text = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].section.withConfig({
  displayName: "About__Text",
  componentId: "sc-1ye68oq-2"
})(["overflow:auto;blockquote{margin:0px 0px 30px 0px;padding:0px 20px 0px 20px;color:", ";border-left:15px solid ", ";}p{margin-bottom:", ";margin-left:2px;&:last-child{margin-bottom:0px;}}"], function (p) {
  return p.theme.colors.lightBlack;
}, function (p) {
  return p.theme.colors.lightBlack;
}, function (p) {
  return p.theme.bottomMargin.regular;
});
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "About__Icon",
  componentId: "sc-1ye68oq-3"
})(["height:20px;width:30px;margin-bottom:6px;margin-right:2px;background:url(", ") no-repeat;background-size:contain;"], function (p) {
  return p.src;
});
var IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "About__IconContainer",
  componentId: "sc-1ye68oq-4"
})(["margin-top:6px;"]);
function About() {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_primitives_ContentHolder_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    saveSerifs: true
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(RestyledShelf, {
    height: "27px"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Hed, null, "About"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(IconContainer, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_ga__WEBPACK_IMPORTED_MODULE_7__["default"].OutboundLink, {
    eventLabel: "To LinkedIn",
    to: "https://www.linkedin.com/in/jameserikabels",
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Icon, {
    src: _public_linked_in_icon_png__WEBPACK_IMPORTED_MODULE_1___default.a
  })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Text, null, react_html_parser__WEBPACK_IMPORTED_MODULE_8___default()(marked__WEBPACK_IMPORTED_MODULE_4___default()(_data_about_about_md__WEBPACK_IMPORTED_MODULE_0___default.a.body, {
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
/* harmony import */ var _primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../primitives/Main.jsx */ "./app/primitives/Main.jsx");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_MenuButton_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/MenuButton.jsx */ "./app/shared/MenuButton.jsx");
/* harmony import */ var _primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../primitives/Overflow.jsx */ "./app/primitives/Overflow.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _primitives_ContentHolder_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../primitives/ContentHolder.jsx */ "./app/primitives/ContentHolder.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _shared_Shelf_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/Shelf.jsx */ "./app/shared/Shelf.jsx");









var Dek = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].h2.withConfig({
  displayName: "ArticleOrReverie__Dek",
  componentId: "fwfi0q-0"
})(["font-size:", ";color:", ";font-weight:400;margin-left:0px;@media (min-width:", "){font-size:", ";}"], function (p) {
  return p.theme.fontSizes.seven;
}, function (p) {
  return p.theme.colors.pink;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.fontSizes.nine;
});
var Hed = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].h1.withConfig({
  displayName: "ArticleOrReverie__Hed",
  componentId: "fwfi0q-1"
})(["font-size:", ";margin-bottom:", ";"], function (p) {
  return p.theme.fontSizes.sixteen;
}, function (p) {
  return p.theme.bottomMargin.regular;
});
var Text = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].section.withConfig({
  displayName: "ArticleOrReverie__Text",
  componentId: "fwfi0q-2"
})(["overflow:auto;p{&:last-child{margin-bottom:0px;}}img{margin-top:0px;}ul,ol{margin-top:0px;margin-bottom:", ";}li{margin-bottom:10px;&:last-child{margin-bottom:0px;}}pre{white-space:pre-wrap;}"], function (p) {
  return p.theme.bottomMargin.regular;
});
var BylineOrDate = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].p.withConfig({
  displayName: "ArticleOrReverie__BylineOrDate",
  componentId: "fwfi0q-3"
})(["font-size:", ";font-style:italic;margin-bottom:", ";;"], function (p) {
  return p.theme.fontSizes.three;
}, function (p) {
  return p.theme.bottomMargin.regular;
});
function ArticleOrReverie(props) {
  var contentState = props.contentState;
  var caller = contentState.caller,
      finalData = contentState.finalData;
  var _finalData$attributes = finalData.attributes,
      date = _finalData$attributes.date,
      headline = _finalData$attributes.headline,
      position = _finalData$attributes.position,
      publication = _finalData$attributes.publication;
  var isReverie = caller === 'reverie';
  var publicationOrReverieTag = caller !== 'reverie' ? publication : 'Reverie';
  var bylineOrDate = caller !== 'reverie' ? "by James Erik Abels | ".concat(position) : date;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], {
    reverie: isReverie
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_primitives_ContentHolder_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_shared_Shelf_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
    height: "20px"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_shared_MenuButton_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], props)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Dek, null, publicationOrReverieTag), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Hed, null, headline), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(BylineOrDate, null, bylineOrDate), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Text, null, react_html_parser__WEBPACK_IMPORTED_MODULE_5___default()(marked__WEBPACK_IMPORTED_MODULE_1___default()(finalData.body, {
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






var NavigationDek = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "ArticleOrReverieNav__NavigationDek",
  componentId: "k2qkgh-0"
})(["color:", ";margin-bottom:0px;font-size:", ";font-style:italic;&:first-child{margin-top:0px;}"], function (p) {
  return !p.link ? p.theme.colors.black : p.theme.colors.blue;
}, function (p) {
  return p.theme.fontSizes.four;
});
var NavigationHed = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "ArticleOrReverieNav__NavigationHed",
  componentId: "k2qkgh-1"
})(["color:", ";font-size:", ";margin-top:-2px;margin-left:2px;margin-bottom:15px;font-weight:400;@media (min-width:", "){font-size:", ";}"], function (p) {
  return !p.link ? p.theme.colors.black : p.theme.colors.blue;
}, function (p) {
  return p.theme.fontSizes.fifteen;
}, function (p) {
  return p.theme.mediaQueries.narrowBreakOne;
}, function (p) {
  return p.theme.fontSizes.sixteen;
});
function ArticleOrReverieNav(props) {
  var contentState = props.contentState,
      boundHandleClickForApp = props.boundHandleClickForApp;
  var allContentData = contentState.allContentData,
      caller = contentState.caller,
      finalData = contentState.finalData;
  var isReverie = caller === 'reverie';
  var currentHed = Object(_helpers_normalize_js__WEBPACK_IMPORTED_MODULE_1__["default"])(finalData.attributes.headline);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_primitives_UnorderedList_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], {
    mapData: allContentData,
    render: function render(articleOrReverie, idx) {
      var _articleOrReverie$att = articleOrReverie.attributes,
          date = _articleOrReverie$att.date,
          headline = _articleOrReverie$att.headline,
          publication = _articleOrReverie$att.publication;
      var hedFromItem = Object(_helpers_normalize_js__WEBPACK_IMPORTED_MODULE_1__["default"])(headline);
      var dateOrPublicationFromItem = !isReverie ? publication : date;
      var linkIsActive = currentHed === hedFromItem;
      var articleLink = isReverie ? "/reverie/".concat(hedFromItem) : "/journalism/".concat(Object(_helpers_normalize_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateOrPublicationFromItem), "/").concat(hedFromItem);
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
        key: idx
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        to: articleLink,
        boundHandleClickForApp: boundHandleClickForApp
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NavigationDek, {
        link: linkIsActive
      }, dateOrPublicationFromItem), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NavigationHed, {
        link: linkIsActive
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
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var ClickHandling =
/*#__PURE__*/
function () {
  function ClickHandling(component, outsideThis, props) {
    _classCallCheck(this, ClickHandling);

    if (outsideThis.props.location === undefined) {
      throw new Error('Caller must carry location.');
    }

    var referrer = new _Referrer__WEBPACK_IMPORTED_MODULE_0__["default"](outsideThis.props);
    this._props = props;
    this._component = component;
    this._referrer = referrer;
    this.boundHandleClick = this._selectHandleClick(outsideThis);
  } // Binds a handleClick function to boundHandleClick; this
  // function will be invoked directly or passed as an arg.


  _createClass(ClickHandling, [{
    key: "_selectHandleClick",
    value: function _selectHandleClick(outerThis) {
      var selectedHandler;

      switch (this._component) {
        case 'app':
          selectedHandler = this._handleClickForApp;
          break;

        case 'body':
          selectedHandler = this._handleClickForBody;
          break;

        case 'header':
          selectedHandler = this._handleClickForHeader;
          break;

        case 'home':
          selectedHandler = this._handleClickForHome;
          break;

        case 'charm':
          selectedHandler = this._handleCharm;
          break;

        case 'contentLoader':
          selectedHandler = this._handleClickForContentLoader;

        default:
          break;
      }

      return selectedHandler.call(outerThis, this);
    } // Handles onClicks on App (top-level state).

  }, {
    key: "_handleClickForApp",
    value: function _handleClickForApp() {
      var _this = this;

      return function (updateValue, valueOne, valueTwo) {
        var _this$state = _this.state,
            currentCaller = _this$state.currentCaller,
            showBusinessCard = _this$state.showBusinessCard,
            showLegalTerms = _this$state.showLegalTerms,
            inCity = _this$state.inCity,
            showStoryText = _this$state.showStoryText,
            isMenu = _this$state.isMenu;
        var stateToUpdate = {};
        var category = '';
        var action = '';
        var label = '';

        switch (updateValue) {
          case 'toggleBusinessCard':
            stateToUpdate.showBusinessCard = !showBusinessCard;

            if (showLegalTerms) {
              stateToUpdate.showLegalTerms = !showLegalTerms;
            }

            category = 'App state';
            action = !showBusinessCard ? 'Open business card' : 'Close business card';
            label = showLegalTerms ? 'Legal notice was open' : '';
            break;

          case 'toggleLegalTerms':
            stateToUpdate.showLegalTerms = !showLegalTerms;

            if (showBusinessCard) {
              stateToUpdate.showBusinessCard = !showBusinessCard;
            }

            category = 'App state';
            action = !showLegalTerms ? 'Open legal terms' : 'Close legal terms';
            label = showBusinessCard ? 'Business card was open' : '';
            break;

          case 'toggleStoryText':
            stateToUpdate.showStoryText = !showStoryText;

            if (showBusinessCard) {
              stateToUpdate.showBusinessCard = !showBusinessCard;
            }

            if (showLegalTerms) {
              stateToUpdate.showLegalTerms = !showLegalTerms;
            }

            category = 'App state';
            action = showStoryText ? 'Hide story text' : 'Close story text';
            label = showBusinessCard ? 'Business card was open' : showLegalTerms ? 'Legal notice was open' : '';
            break;

          case 'swapBackground':
            stateToUpdate.inCity = !inCity;
            category = 'App state';
            action = !inCity ? 'Enter city' : 'Enter fantasy';
            break;

          case 'toggleMenu':
            stateToUpdate.isMenu = !isMenu;
            category = 'App state';
            action = !isMenu ? "Enter: ".concat(currentCaller, " menu") : "Leave: ".concat(currentCaller, " menu");
            break;

          case 'updateApp':
            if (valueOne !== undefined) {
              stateToUpdate.currentCaller = valueOne;
              stateToUpdate.lastCaller = currentCaller;
            }

            stateToUpdate.showBusinessCard = false;
            stateToUpdate.showLegalTerms = false; // 1. If any link is clicked, other than a MenuButton,
            // we'll rebuild the state and toggle the menu
            // (this will turn it off it it's on, i.e., a header
            // link was clicked instead of the MenuButton).
            // 2. If the back or forward button is clicked,
            // we'll rebuild the state and toggle the menu
            // (this will turn it on/off based on the
            // window.location).

            if (isMenu || valueTwo) {
              stateToUpdate.isMenu = !isMenu;
            } // We'll always hide the illustration when switching sections,
            // but not if going to, leaving, or changing the /reverie.


            if (valueOne !== undefined // Undefined when switching reveries
            && !(currentCaller === 'chapter' && valueOne === 'reverie') && !(currentCaller === 'reverie' && valueOne === 'chapter')) {
              stateToUpdate.showStoryText = true;
            }

            category = 'App state';
            action = 'Reset app';
            break;

          default:
            break;
        }

        if (updateValue !== 'updateApp') {
          if (false) {}
        }

        return _this.setState(function () {
          return stateToUpdate;
        });
      };
    } // Handles onClicks on Body (updates state for reloads).

  }, {
    key: "_handleClickForBody",
    value: function _handleClickForBody(self) {
      var _this2 = this;

      return function (valueOne, valueTwo) {
        var stateToUpdate = {};

        switch (self._referrer.location) {
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
    } // Handles onClicks for ContentLoader, if 'projects'

  }, {
    key: "_handleClickForContentLoader",
    value: function _handleClickForContentLoader() {
      var _this3 = this;

      return function () {
        var _this3$state = _this3.state,
            caller = _this3$state.caller,
            imageLoaded = _this3$state.imageLoaded;

        if (caller === 'projects') {
          _this3.setState({
            imageLoaded: !imageLoaded
          });
        }
      };
    } // Handles onClicks on Header (header menu).

  }, {
    key: "_handleClickForHeader",
    value: function _handleClickForHeader() {
      var _this4 = this;

      return function () {
        var menuIsOpen = _this4.state.menuIsOpen; // Let's define a function w/the Header's 'this'
        // value to control the header state.

        var toggleState = function toggleState() {
          this.setState({
            menuIsOpen: !menuIsOpen
          });
        };

        if (!menuIsOpen) {
          // We'll use .call to invoke our function so
          // as to ensure the 'this' value is right.
          // Alternative: We could define it externally
          // and pass it in.
          toggleState.call(_this4);
          _this4.timeoutId = setTimeout(function () {
            // Comment next line to suspend auto-close
            _this4.setState({
              menuIsOpen: false
            });
          }, 5000);
        } else {
          clearTimeout(_this4.timeoutId);
          _this4.timeoutId = undefined; // See comment above.

          toggleState.call(_this4);
        }
      };
    } // Handles onClicks on Home (spell, part one).

  }, {
    key: "_handleClickForHome",
    value: function _handleClickForHome() {
      var _this5 = this;

      return function (updateValue) {
        if (_this5.transition === 1) {
          return null;
        }

        var _this5$state = _this5.state,
            isCasting = _this5$state.isCasting,
            eventType = _this5$state.eventType;
        var stateToUpdate = {};

        switch (updateValue) {
          case 'toggleSpell':
            stateToUpdate.isCasting = !isCasting; // Reset the spell when it ends.

            if (isCasting) {
              var newPattern = _this5.createSpellPattern();

              stateToUpdate.pattern = newPattern;
              stateToUpdate.activeCharm = newPattern[0];
              stateToUpdate.castSpell = false;
              stateToUpdate.score = 0;
            }

            break;

          case 'castSpell':
            // The castSpell prop controls styling during a turn.
            // Note, the score never equals the goal b/c we cast
            // at score + 1.
            // Even so, DO NOT ADD 1 to score here. Anecdotally
            // speaking, it noticeably slows down the
            // background transition.
            stateToUpdate.castSpell = true; // Reset the eventType to 'click' if it was
            // last 'touch'-ed. This property prevents
            // unexpected and unwanted propagation.

            if (eventType === 'touch') {
              stateToUpdate.eventType = 'click';
            }

            break;

          case 'setTouchEvent':
            // Not currently used, but valid
            stateToUpdate.eventType = 'touch';

          case 'resetEventType':
            stateToUpdate.eventType = 'click';
        }

        _this5.setState(stateToUpdate);
      };
    } // Handles onClicks on Charms (spell, part two).

  }, {
    key: "_handleCharm",
    value: function _handleCharm() {
      var _this6 = this;

      return function (isActive) {
        var score = _this6.state.score;
        var abracadabra = score + 1 === _this6.goal; // Magic!
        // Either the Charm's inactive, or it's time for magic.

        if (!isActive || isActive && abracadabra) {
          // We can invoke ClickHandling with the proper 'this' b/c
          // we invoked it w/Home's 'this' value via .call()
          var hcForHome = new ClickHandling('home', _this6);
          var boundHandleClickForHome = hcForHome.boundHandleClick;

          if (isActive && abracadabra) {
            // We store the background value in App so it's remembered
            // as the user travels through the site.
            if (false) {}

            _this6.props.boundHandleClickForApp('swapBackground');

            boundHandleClickForHome('castSpell');
          } else {
            if (false) {}

            boundHandleClickForHome('toggleSpell');
          }

          return null;
        } //  The Charm is active, and the user isn't done yet.


        _this6.setState(function (state) {
          var newScore = state.score += 1;
          return {
            score: newScore,
            activeCharm: state.pattern[newScore]
          };
        });
      };
    }
  }]);

  return ClickHandling;
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
/* harmony import */ var _data_projects_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/projects/index.js */ "./app/data/projects/index.js");
/* harmony import */ var _data_reveries_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/reveries/index.js */ "./app/data/reveries/index.js");
/* harmony import */ var _data_the_story_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/the-story/index.js */ "./app/data/the-story/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Content =
/*#__PURE__*/
function () {
  function Content(caller) {
    _classCallCheck(this, Content);

    this.caller = caller;
  }

  _createClass(Content, [{
    key: "getContentData",
    value: function getContentData() {
      var caller = this.caller;

      switch (caller) {
        case 'chapter':
          return _data_the_story_index_js__WEBPACK_IMPORTED_MODULE_3__["default"];

        case 'projects':
          return _data_projects_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];

        case 'journalism':
          return _data_clips_index_js__WEBPACK_IMPORTED_MODULE_0__["default"];

        case 'reverie':
          return _data_reveries_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];

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
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
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

    this.caller = referrer.location;
    this.lastCaller = this._lastPath && referrer.getLocation(prevProps);
    this.isExact = this._matchPath && this._matchPath.isExact;
    this.params = this._loadParams(prevProps);
  }

  _createClass(Location, [{
    key: "_loadParams",
    value: function _loadParams(prevProps) {
      var caller = this.caller;
      var paramValues = this._matchPath.params;
      var ParamsClass;

      switch (caller) {
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

      return new ParamsClass(caller, paramValues, prevProps);
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
      // 2. The path is of the right caller (e.g. /chapter)
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

      switch (this.caller) {
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
        throw new Error('Location.justChanged() requires prevProps');
      }

      return this._currentPath !== this._lastPath;
    }
  }, {
    key: "_isCalledAfterReload",
    get: function get() {
      return this.lastCaller === 'i';
    }
  }, {
    key: "recordPageview",
    get: function get() {
      return this.justChanged && !this._isTopLevel && !this._isCalledAfterReload && window.location.pathname !== '/i';
    }
  }, {
    key: "_isTopLevel",
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
          var paramTestResults = searchData.filter(function (project) {
            var valueFromData = _this2._normalizeParam(project.attributes[paramName]);

            var paramToTest = _this2._normalizeParam(param);

            return valueFromData === paramToTest;
          });
          paramIsValid = paramTestResults.length > 0;
          break;

        case 'number':
          var paramAsIndex = parseInt(param) - 1;
          var projectIndex = searchData.findIndex(function (project) {
            return _this2._normalizeParam(project.attributes.projectName) === _this2._one;
          });
          paramIsValid = paramAsIndex >= 0 && paramAsIndex < searchData[projectIndex].attributes[paramName].length;
          break;

        default:
          paramIsValid = false;
          break;
      } // Return original to avoid problems
      // with falsy should index be 0.


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
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ScrollHandling =
/*#__PURE__*/
function () {
  function ScrollHandling(currentCaller) {
    _classCallCheck(this, ScrollHandling);

    this._caller = currentCaller;
  } // Only used by '/chapter'


  _createClass(ScrollHandling, [{
    key: "resetElementTop",
    value: function resetElementTop(overflowRef, prevProps) {
      var overflowRefExists = overflowRef.current !== null;

      if (overflowRefExists) {
        if (overflowRef.current.scrollTop !== 0) {
          var updateScrollTop = this._caller === 'projects' ? this._swappingProjects(prevProps) : true;

          if (updateScrollTop) {
            if (false) {}

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
        if (false) {}

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
    this._referrer = referrer;
    this._params = location.params;
  }

  _createClass(State, [{
    key: "getIndex",
    value: function getIndex(type) {
      var params = this._params;
      var referrer = this._referrer.location;
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
    value: function rebuild(setState) {
      var indices = this._convertParamsToIndices(); // Only -1 if explicitly set by a params method


      if (indices.one !== -1 && indices.two !== -1) {
        setState(indices.one, indices.two);
      }
    }
  }, {
    key: "_convertParamsToIndices",
    value: function _convertParamsToIndices() {
      var params = this._params;
      var referrer = this._referrer.location; // Variables will only be -1 if explicitly set by a params method
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

module.exports = {"attributes":{"page":"about","type":"description","updated":"11-11-18"},"body":"\nHi! I'm James. I write code for Web sites and software. \n\nI tell stories, too. Don't you? Stories are how you tell people about yourself, your products and services, and the world writ large. Stories define everything, especially software. Consider this example:\n\n1. Microsoft sells Word by telling people they can write documents with it. \n    That pitch is a story.  \n\n2. People write documents in Word in order to collect their thoughts. \n    Those thoughts are a story.\n\n3. Once done, people decide whether to share their document. \n    Their reason is a story.\n\nIt's all stories, all the way down. \n\nThat's where I come in. Rather than just mechanically coding sites and software, I try to figure out — and keep sight of — the stories driving them. I always have.\n\nAs a start-up founder, I told stories that pitched what we'd built. As a journalist for Forbes and others, I wrote stories that gave insights into tech, digital media, and venture capital. And as a lawyer, I told stories that made legal arguments.\n\nSo that's my story. What's yours?\n","frontmatter":"page: about\ntype: description\nupdated: 11-11-18"}

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

module.exports = {"attributes":{"headline":"All Things Considered Digitally","publication":"Forbes","position":"Staff reporter"},"body":"\nNational Public Radio has seen its share of shake-ups lately, including\nthe departure of chief executive Ken Stern in March. Soon after, an NPR\njournalist reported the reason was a failure \"to convince the board where\nlocal stations fit into the digital age, when listeners can bypass\nold-fashioned FM stations.\" Like all media, NPR — which supplies\nprogramming to over 860 local radio stations — is struggling with the\nresults of the Internet's ability to cheaply distribute content.\n\nLate last month, Kinsey Wilson joined NPR as senior vice president and\ngeneral manager of NPR Digital Media from Gannet-owned USA Today, where\nhe was executive editor. One early goal: to boost NPR's traffic, which\ncomScore estimates at some 2.2 million unique visitors in September.\nForbes.com talked with him about the future of public radio and the role\nof its 38-year old affiliate network. Here's an edited version of what he\nhad to say:\n\n**Forbes.com: What attracted you to the NPR job after running Internet\noperations at USA Today?**\n\nKinsey Wilson: I think NPR is at a point where it's really poised to take\nadvantage of digital. I don't think, in the long term, we can think of\nourselves as a radio or purely as an audio news organization.\n\n**Do you have any examples of how that's coming along?**\n\nWe're in the process of integrating our editorial digital staff and the\nrest of the editorial staff. Dick Meyer, who heads the Digital Editorial\nStaff, reports to me and to Ellen Weiss, who is the VP for news.\n\n**Increasing the unique visitors to NPR content is a priority online, how\ndo you accomplish that?**\n\nWe've moved from being primarily destination sites to moving into an arena\nwhere it is all about distributed media. We've got an architecture that\nsupports open distribution of our content. So you try to create a virtual\ncircle between high-quality content, ease of distribution and a connection\nwith audiences that inspires them to distribute links, etc. ... I think\nthat's where the real opportunity for traffic growth is.\n\n**So you are trying to work with the local affiliates digitally and not\nsupplant them?**\n\nDeepening and improving our relationships with our member stations is a\nbig priority. It's difficult to say exactly how technology will change the\nways in which the content is distributed and the relationship between the\nmember stations and NPR in Washington.\n\n**If you're looking at consumer preference, the answer may not be the\nlocal affiliate's site. What then?**\n\nIn this environment you cannot ultimately fight the tide of consumer\npreference. I think the good news is that that's the subject of open,\ntransparent, healthy conversation within the organization at this point.\n\n**But you think there's time to figure it out?**\n\nThe speed in which our business is being challenged is very different than\nthat of most of our commercial brethren. It does so far have the advantage\nof not being forced to react to things in quite the same kind of time\nframe. [One reason is] our audience is growing. There is a tremendous\nopportunity for the local stations, particularly with newspapers suffering\nthe kind of staff cuts and reductions that they have, to become an even\nmore robust provider of news to their communities.\n\n**Does NPR offer something particularly valuable to digital news\nconsumers?**\n\n[People] want analysis. I think they also want a connection with\nindividuals; they want to understand something about the person that\nstands behind the news report. I think the mix of authority and\nfamiliarity that NPR has managed to combine on air is something that\ntranslates very nicely to the Web, where the traditional, formal voice of\nauthority of a newspaper or even a traditional network television\nbroadcast does not meet the expectations of Web readers.\n","frontmatter":"headline: 'All Things Considered Digitally'\npublication: 'Forbes'\nposition: 'Staff reporter'"}

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

module.exports = {"attributes":{"headline":"Slowing Fast Company","publication":"Forbes","position":"Staff reporter"},"body":"\nWhile layoffs and hiring freezes are the topic du jour at media companies\nacross New York City, Mansueto Ventures remains a bright spot in the\nindustry. According to the Publisher's Information Bureau, magazine Fast\nCompany sold roughly $29 million in ad pages between January and\n  September, a change of 37.3% over last year. Another Mansueto title, Inc.,\n  sold roughly$64 million in ad pages, a change of 10% over last year.\n\nSo it was a surprise in early October when Mansueto Ventures closed its\nMansueto Digital division (funded by a \\$10 million war chest announced\nlast year) and laid off 20 employees. Responsibilities for its five Web\nsites have been given to the print magazines. Yet Chief Executive John\nKoten says digital remains imperative for the future. He started as editor\nof Inc. in 2002 and became CEO of Mansueto Ventures when it was formed by\nthe purchase of his magazine and Fast Company in 2005.\n\nWhat gives? Forbes.com sat down with Koten in his office on the 29th floor\nof Seven World Trade Center to ask. Here's an edited version of what he\nhad to say.\n\n**Forbes.com: The 2008 Inc. 500 winners reported total sales of $13.7\n  billion, 14% below last year's$16 billion. Seems like that gave you early\ninsight into the weakening market?**\n\nJohn Koten: We had the Inc. 500 conference in Washington about a month\nago. It was interesting to be with those people at that time. It did have\nan impact on me because these are all very successful people and they were\nthere to celebrate the growth of their companies and yet there was a\nsomberness at the conference that I haven't seen in the time I've been at\nInc.\n\n**Are your magazines particularly sensitive to the credit crunch of recent\nmonths?**\n\nWe're writing for fast-growth companies, and fast-growth companies need\ncredit to maintain their growth, so if there's no credit and they can't\nexpand, the people we're writing for are going to be hurt.\n\n**How has that played out for your businesses this year?**\n\nWe expected revenues to grow 20% to 25%, and they ended up growing across\nthe company between 8% and 12%. Because we put a lot of investment in\ndigital we expected our online revenues to grow faster than the rest of\nthe digital media industry. We decided to turn back now because the future\nis more uncertain over the next six months to a year than it [has been].\n\n**Across New York City, media is cutting jobs and tightening budgets, how\nmuch of it is cleaning up the ranks and how much of it is about lower\nrevenue expectations?**\n\nI'd say half the people that no longer have jobs here were just redundant\nin the reorganization and about half are things we decided we're going to\nstop doing until our business grows more.\n\n**What does the goal for three-year-old Mansueto Ventures become then?**\n\nOur goal is to increase market share when times are difficult, so I think\nas long as we're showing progress we'll be OK.\n\n**Combining print with digital will help you with that? Why?**\n\nThere's an incentive if you're in the digital department to keep what\nyou're doing close to your vest because it makes you the expert. I want\neveryone to know what our top 10 stories that generated the most traffic\nare each month, and I want the editors of the Web sites to share this\ninformation.\n\nI want the editor of Fastcompany.com and the editor of Inc.com — neither\nof whom have been named yet and the Fast Company job is still up for grabs\n— I want them to put out a weekly or monthly report saying here's what\ndrove our traffic this month.\n\nWe have these big video screens to help layout the magazine, but I'm\nthinking of converting them over to something we can use to report\ndigitally ... what's happening with traffic.\n\n**So in your mind the combination is a response to tougher economic times\nand a way to fuel digital growth?**\n\nIf anything, you could view this as a shift of resources from the print\nmagazines to the online department because they're [reporters and editors]\nnow going to be working 20% to 30% online. They do a lot of reporting, but\n[right now] they're thinking about just what they're going do for the\nmagazine and they're not thinking about how they might leverage that\nonline.\n\nI've told every employee here that at the end of the year I want a memo\nexplaining if [they] were an online employee how [they're] going to\ncontribute to print and if [they're] a print employee, I want to know how\n[they're] going to contribute to online.\n\nIf I'm a journalist, I need to be able to do online, print, video, audio —\nwhatever the heck is out there. I wanted to start a super- reporter\nprogram here, where we took two reporters from digital, two reporters from\nFast Company and two reporters from Inc. and have them cross-train like\nhell to create a super-reporter who could wear all nine hats. Then I\nthought: Why shouldn't everybody be doing that?\n\n**The story is bigger than just what the journalists do as storytellers\nthough, isn't it?**\n\nI think social publishing is going to play a bigger and bigger role in\njournalism whether we professional journalists like it or not.\n\nThe professional journalist becomes a coach and a mentor to people who are\ndoing this [blogging and writing] for free. Our strength is trying to be\nthe spokesman into communities and trying to build a business that works\naround that.\n\n**Then, the future of media/digital is about highlighting ideas and\nopinions, not flat factual reporting?**\n\nI think people with strong intelligent voices will find a way to monetize\nthose voices in the future, but I don't know that people who are just\nfollowing the traditional journalistic approach of gathering information\nand then presenting it in a stylistically pleasing way [are] going to\nsurvive. It's too dull.\n\n**And that will help you grow revenues through a recession?**\n\nHaving regularly updated, fresh content is different than having people\nwho are trying to break stories five or six times a day. I don't really\nsee us as a news-oriented media company at all. With social publishing,\nyou could invest in technology in a way that can help to boost your\ntraffic and on a dollar-for-dollar basis that may be a better investment\nthan investing in originally created content.\n","frontmatter":"headline: 'Slowing Fast Company'\npublication: 'Forbes'\nposition: 'Staff reporter'"}

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((function () {
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
})());

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

module.exports = {"attributes":{"headline":"Cracking the College Code","publication":"Seton Hall Magazine","position":"Freelance"},"body":"\nLast winter, 15 students from Newark’s Technology High School took part in\na six-month pilot program from Seton Hall’s Center for Mobile Research and\nInnovation. The “Young Developers Program” had a simple, yet important\ngoal: prepare the students — who hail from a traditionally underprivileged\ncommunity — to design and build mobile apps for smartphones and tablet\ncomputers on their own.\n\n“That’s of value no matter what you decide to do,” says associate\nprofessor of political science Michael Taylor, the CMRI’s academic\ndirector.\n\nThat’s probably true. Mobile devices are booming. In 2007, smartphones\nwere relatively rare and tablet computers were non-existent. Today, just\nsix years later, the United States has amassed 140 million smartphone and\n123 million tablet users, reports eMarketer, a tech consultant. As a\nresult, these devices have penetrated nearly every walk of life.\n\nBut not all teens are being given the skills and confidence needed to\nharness these forces.\n\nThe Young Developers program was designed to help by teaching students\nfrom disadvantaged areas to build mobile apps — a form of software — for\nsmartphones and tablets. Each of its 12 lessons, which range from computer\nlogic to user interfaces, includes a video lecture, in-class coding problem and\ntake-home lab. A \\$250,000 corporate gift from AT&T paid for the\ncurriculum, as well as smartphones and laptop-tablet hybrids running\nMicrosoft Windows.\n\nThe Newark Tech teens were also responsible for building their own mobile\napps. All told, it was a lot of work.\n\nTo keep them on track, the students were paired with mentors from Seton\nHall who had a similar socio-economic background. “I’ve lived in poverty,\nand I’ve seen poverty,” says Franck Nelson ’13, one of the six\nundergraduate mentors.\n\nA biology major, Nelson immigrated from Haiti to Trenton, N.J., when he\nwas 14. He joined the Young Developers pilot to offer tangible proof that\nnothing is out of reach. While the program’s focus is on coding, Nelson,\nwho just started a graduate program at Seton Hall’s College of Nursing,\nsays mentors spent as much time talking about college.\n\n“We had people believe in us to get here,” he says. “We believe we can\nreturn the favor.”\n\nTaylor, who is now running a second pilot project in Newark and trying to\nraise more money from AT&T to expand to two more cities in the next year,\nsays the program’s first run ended with an unexpected surprise. He wasn’t\nsure if all the teens would finish their software. But they did, on their\nown or in a small group, building 12 apps. “A lot of them weren’t\nsatisfied by what they created,” he adds.\n\nThat’s just fine. Now they know how to do better.\n","frontmatter":"headline: 'Cracking the College Code'\npublication: 'Seton Hall Magazine'\nposition: 'Freelance'"}

/***/ }),

/***/ "./app/data/clips/shu-giving-physics-a-good-name.md":
/*!**********************************************************!*\
  !*** ./app/data/clips/shu-giving-physics-a-good-name.md ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"Giving Physics a Good Name","publication":"Seton Hall Magazine","position":"Freelance"},"body":"\nThere’s a bolt of pure lightning that plays music in the basement of\nMcNulty Hall.\n\nAt least, it looks like lightning. It pulses, and music plays out of the\nthin air above it. Jose Lopez, the newest addition to Seton Hall’s\nDepartment of Physics, shows visitors his plasma speaker with a smile. The\n34-year-old assistant professor of physics likes a good attention-grabber.\n\n“In physics, we have very bad PR. We make it seem that it’s not\naccessible,” he says.\n\nIn a field forever dominated by Albert Einstein’s loopy personal style,\nLopez is an unexpected twist on the age-old vision of a brainy physicist.\nThe chatty Newark native is warm, amiable and plainspoken. And yet, one of\nthe 20 biggest brains in the state, according to Inside Jersey magazine,\nis also an expert in a little-known, but potentially up-and-coming field\nof study called microplasmas. Lopez creates these tiny plasma reactions in\norder to assemble chemicals as if they were made of Lego blocks.\n\nThat’s not as crazy as it sounds. Most people know there are three states\nof matter: solid, liquid and gas. Each is defined by the density and\narrangement of the atoms within it. Plasma is a fourth state that occurs\nwhen gases destabilize. That means their atoms break up into a mixture of\ncharged ions and electrons.\n\nOnce free, these ions and electrons can be recombined into something new.\nLopez studies ways to control them. “That’s the whole thing,” says Alfred\nFreilich, a longtime Lopez collaborator who joined Seton Hall with him in\n2011\n\nas a visiting research professor. It’s hard to reliably control plasma.\nIt’s hot — the sun and stars are made of it. And atoms like stability. On\nEarth, they don’t shift to plasma easily. Generally, a vacuum is needed to\ncoax them. They shift to it more easily in miniature. At scales of a millimeter or less, chemical\nelements will become plasma in the open air and at a temperature cool\nenough to touch.\n\nAs a result, there may be a lot of ways to put these tiny plasmas to work.\nLopez and Freilich look for them.\n\nFor instance, Degrémont Technologies uses their research to increase the\namount of oxygen it can turn into ozone inside of school bus-sized\nmicroplasma reactors. Municipalities and other groups buy the reactors so\nthey can kill bacteria with ozone rather than chlorine at their\nwater-treatment plants. The ozone is produced on-site because it breaks\ndown soon after it’s created.\n\nThe oxygen alchemy is cool, but Lopez uses the reactors to connect more\nthan just electrons and ions.\n\nHe also uses them to connect with people. By forcing a lot of tiny oxygen\nplasmas to create ozone, the reactors remind people that physics doesn’t\njust explain how the universe works. It also offers keys for controlling\nit.\n\nSo, when Degrémont asked for help on its microplasma reactors in 2005,\nLopez opted to make the field a long-term focus. At the time, he was\njoining the physics faculty at his alma mater, Saint Peter’s University in\nJersey City, N.J.\n\nThat found the newly minted academic looking for a way to connect with\nstudents directly.\n\nLopez already knew something about drawing students into science. Kurt\nBecker, his doctoral adviser at the Stevens Institute of Technology in\nHoboken, N.J., noticed that shortly after Lopez arrived in 2000. Becker\noften opened his lab to local high school and college students looking for\nhands-on research experience. They all flocked to Lopez.\n\n“It was almost his natural instinct to take them under his wing,” says\nBecker.\n\nThat’s not surprising. By then, Lopez had been teaching science for years\n— he tutored the entire women’s varsity basketball team in math and\nscience while a sophomore at Saint Peter’s.\n\nBut he did learn some new tricks under Becker, now the associate provost\nfor research and technology initiatives at the Polytechnic Institute of\nNew York University. Becker treated doctoral students like colleagues, not\nemployees. He encouraged them to story their own interests, and tried to\nget them whatever they needed to do it.\n\n“If someone had a good idea, my attitude was: Go try it out,” he says.\n\nBecker’s stance had a long-term effect on Lopez. Nothing is out of reach.\nLast spring, he applied the theory to one of his first courses at Seton\nHall. Rather than limiting his class on waves and oscillations to the\nuniversity’s labs, he added a set of online video lectures from the\nMassachusetts Institute of Technology.\n\nThe result really stood out to junior Stacie Ballou. The lectures gave her\na first-hand look at the type of experiments normally confined to big\nresearch universities. “It was a different experience,” she says.\n\nFor Lopez, that was the point. Students aren’t unlike the chemicals he\nassembles in microplasma.\n\nThey’re ready to become something new — if you can connect with them.\n","frontmatter":"headline: 'Giving Physics a Good Name'\npublication: 'Seton Hall Magazine'\nposition: 'Freelance'"}

/***/ }),

/***/ "./app/data/clips/shu-the-bone-doctors-knees.md":
/*!******************************************************!*\
  !*** ./app/data/clips/shu-the-bone-doctors-knees.md ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"The Bone Doctor's Knees","publication":"Seton Hall Magazine","position":"Freelance"},"body":"\nIt all started in the mid-’70s on scrap paper: cocktail napkins, lined\nyellow paper, whatever was near. Frederick Buechel ’67, M.D., and Michael\nPappas, Ph.D., were designing artificial joints. They worked on schematics\nwherever they were, sometimes even at a bar near their homes in northern\nNew Jersey. For Buechel, the work has never been far from his mind.\n\n“To this day, you’ll see a piece of paper on his desk with a drawing on\nit,” says his son, Frederick Buechel Jr., M.D. That’s no surprise. His\nfather is the co-inventor of one of the world’s best-known artificial knees. It was one of the first to\ntruly simulate the real thing — bending up and down while also twisting a\nlittle left and right as people walk. A version of it has been sold by\nDePuy Orthopaedics for more than 30 years. First known as the New Jersey\nKnee, it’s now called the N.J. LCS Mobile Bearing Total Knee System.\n\n“You should allow the ligaments and muscles to act in their own normal\nway,” says Buechel Sr., 67.\n\nWhile DePuy, now part of Johnson & Johnson, doesn’t discuss market share,\nit has been reported that the LCS Knee has been chosen by a million people\nworldwide. That’s a number that could grow rapidly. Knee replacements are\nincreasingly common. Between 2000 and 2011, the number of operations grew\nalmost 130 percent, the American Academy of Orthopaedic Surgeons says,\nwith more than 600,000 done each year in the U.S. alone.\n\n“It’s a hot topic,” says Daniel Brown, an orthopedic devices analyst at\nMillennium Research Group.\n\nThere are at least two reasons. People younger than 65 increasingly want\nto temper sport and other high-impact injuries, and those who are older\nare staying active longer.\n\nBut, in 1974, none of that was true yet.\n\nBuechel, then a 28-year-old orthopedic resident at New Jersey Medical\nSchool (now a part of Rutgers University) was overseeing a research\nproject on an ankle-replacement device. “Many of these were developed in\npersonal labs, almost in garages,” says Stuart Hirsch, M.D., a clinical\nprofessor of orthopedics at Seton Hall’s School of Health and Medical\nSciences.\n\nThe orthopedic surgeon has known Buechel since organizing a panel of knee\ndesigners for the New Jersey Orthopaedic Society about 30 years ago. Other\npresenters had more elite credentials, but Buechel’s dynamic,\ndata-driven presentation stood out. “I immediately switched over to the\nNew Jersey Knee,” says Hirsch.\n\nWhen Buechel first began work on his ankle replacement he sought help from\nPappas, at the time a 41-year-old mechanical engineer teaching at New\nJersey Medical School. “Any problem that I’m capable of solving is of\ninterest,” says Pappas, now 80.\n\nBuechel’s decision to ask for help wasn’t entirely surprising. The young\ndoctor, who won four New Jersey Amateur Athletic Union and three\nMetropolitan Intercollegiate Wrestling Championships while at Seton\nHall, liked a challenge — if evenly matched. Once he started working on\nthe replacement ankle, he realized he wasn’t well matched; he hadn’t\nthought about the technical aspects of building the device.\n\nPappas’s engineering know-how evened the odds.\n\nBy 1976, the two men were building joints on their own time. Their focus\nshifted to shoulders, and they were also considering the knee. Then, good\nluck struck. Buechel presented a paper about their shoulder at a\nconference, and caught the attention of an executive from DePuy, who\nwanted to license it.\n\nBuechel saw his shot, and made DePuy promise to sign a contract to sell\nhis artificial knee too. Bold move, as there was no knee yet.\n\nBut DePuy agreed.\n“You can’t live without being a business person,” says Buechel.\n\nDevelopment began. Buechel defined problems, Pappas designed solutions. At\nthe time, artificial knees had two major components. One attached to the\nfemur, a hip-to-knee bone; the other to the tibia, a knee-to-ankle bone.\nThese “fixed-bearing knees” bent like a hinge, but Bueche and Pappas\nweren’t satisfied by the results. Then a new idea arrived from a group\nfrom Oxford in the United Kingdom. It offered a way to make a knee that\ncould both bend and turn a bit. Buechel and Pappas quickly adopted this\n“mobile-bearing” design, and worked to improve it.\n\nBy 1977, their mobile-bearing knees were a lot like the real thing, and in\ntheory, would last longer than the fixed-bearing kind. DePuy, which sells\nboth types, says one independent study found that, after 15 years of use,\nBuechel’s LCS Knee still was in good shape 97 percent of the time.\n\n(The Buechel-Pappas partnership with DePuy ended some time ago, but the\nmen still work together on their own.)\n\nStill, knees are big business, and the technology keeps improving. Debates\nabout which type is best remain some of the hottest at orthopedic\nconferences today, says Millennium’s Brown, the device analyst.\n\nBuechel, always ready for a good challenge, is prepared to defend the\nmerits of his knee.\n\nThe doctor clearly likes his odds.\n","frontmatter":"headline: The Bone Doctor's Knees\npublication: Seton Hall Magazine\nposition: 'Freelance'"}

/***/ }),

/***/ "./app/data/clips/shu-the-clean-air-catalyst.md":
/*!******************************************************!*\
  !*** ./app/data/clips/shu-the-clean-air-catalyst.md ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"The Clean Air Catalyst","publication":"Seton Hall Magazine","position":"Freelance"},"body":"\nThe FedEx package from John Mooney ’55 arrives less than a week after our\nfirst meeting. Mooney — an 83-year-old man with a nimble step — has sent\ntwo reports.\n\nHe wrote the first paper for the United Nations in 2004 to convince a few\nholdout countries to eliminate lead from their gasoline. The other is a\nnew paper out of the University of Michigan asking if the 230 million or\nso automobiles in the United States represent a peak. (Unlikely.)\n\nMooney, a chemical engineer, chose the reports to illustrate how\ndangerous internal combustion engines can be. But something else is\npresent in the reports: Mooney’s passion for tough problems — and\ninnovative solutions.\n\n“If you don’t think there’s a solution, then you just haven’t asked the\nright question,” says daughter Elizabeth Convery, quoting a mantra her\nfather often tells his five children and 14 grandchildren to live by.\n\nThat fits. Mooney is the co-inventor of the three-way catalytic converter,\na small exhaust-cleaning device that hangs beneath about 80 percent of\nautomobiles. Each converter destroys about 98 percent of a car’s three\nmost noxious emissions — simultaneously.\n\n“That was a phenomenon that no one else thought was possible,” says\nMooney.\n\nNot for lack of interest. By the late ’60s, thick smog around Los Angeles\nsparked public demand for cleaner air, says Joseph Kubsh, executive\ndirector of the Manufacturers of Emission Controls Association (MECA). An\nextension of the 1963 Clean Air Act was on its way in 1970, with the\nEnvironmental Protection Agency and emissions standards in tow.\n\nThe standards would force most automakers to add a catalytic converter to\ntheir cars. A lot of companies wanted to sell it to them. That included\nEngelhard, Mooney’s then employer, a chemical company based in Iselin,\nN.J., now part of BASF.\n\nBut a good device wasn’t so easy to build.\n\nThe chemical reactions that clean up a car’s most noxious pollutants are\nvery different. Oxygen has to be stripped away from nitrous oxide, but\nmust also be added to carbon monoxide and unburnt hydrocarbons. Most\nthought this would require a bulky, two-stage system.\n\nMooney thought he could do it in one. He proved it by doing something\nunexpected.\n\nRather than looking at the exhaust, he focused on the gasoline being fed\ninto the engine. If it was mixed with the right amount of air, the exhaust\nwould offer a one-stage converter just enough oxygen to simultaneously\nrender all three pollutants harmless.\n\nMooney’s discovery seemed like magic. “No one really believed me,” he\nsays. “Probably our competitors didn’t either.” But Mooney was never one\nto give up easily. Take his first car, a 1941 Ford convertible he bought\nin 1949 to carry him to Seton Hall University, where he was starting work\non an undergraduate degree in chemistry. The car worked — but not\nwellenough. So Mooney, 19, took its engine apart, leaving more than 100\npieces scattered across a friend’s garage. Problem was, he didn’t know\nwhat they did.\n\nThat was no problem. Mooney talked to some mechanics, and soon knew what\nhe had to do. The big V8 was rebuilt in time to roar north fora summer\nroad trip to points unknown. A faint smile spreads across Mooney’s face as\nhe remembers the old car. “It had a nice noise to it,” he says. “It\npurred.”\n\nThat can-do spirit carried the day with the three-way catalytic converter\ntoo.\n\nIt inspired his boss and co-inventor at Engelhard, a scientist named Carl\nKeith, to send him around the world in the early ’70s to convince\nautomakers to add an oxygen sensor to their engines. The sensor would\nmonitor the fuel-to-air ratio so each engine could be tuned to the sweet\nspot where Mooney’s one-stage converter would work.\n\nVolvo listened first, and by 1976, the device was rolling off some of its\nassembly lines. Just about every automaker would soon follow suit.\n\nThe results are legendary. BASF says the three-way catalytic converter has\ndestroyed more than a billion tons of nitrous oxide, carbon monoxide, and\nhydrocarbons since it was released. More impressive: To protect the device\nfrom damage, highly poisonous lead has been removed from gasoline in\nnearly every country.\n\n“It’s really an amazing thing that’s been created,” says MECA’s Kubsh.\n\nMooney breathes, sucking in fresh, clean air. He couldn’t agree more.\n","frontmatter":"headline: 'The Clean Air Catalyst'\npublication: 'Seton Hall Magazine'\nposition: 'Freelance'"}

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

module.exports = {"attributes":{"headline":"Charting an East/West Passage","publication":"The Darden Report","position":"Freelance"},"body":"\nIn both the East and the West, it was hard to believe the story.\n\nAt a factory in Shenzen, China, at least 14 workers killed themselves in 2010. The factory, owned by Foxconn, produces iPads and iPhones for Apple and computers for Dell and Hewlett-Packard. By most accounts, the manufacturers’ unrelenting production demands had triggered the spate of\nsuicides.\n\nSo, who’s responsible? The Western companies, who rely increasingly on\nEastern contractors to produce their products for low wages and low\nprices? Or the Eastern manufacturer, whose plant managers and workers face\nincredible pressure to meet ambitious deadlines?\n\nIn his strategic management course “Strategic Thinking: Integrating East\nand West” this past spring, Darden School of Business Professor Ming-Jer\nChen asked his students to opine on the issue.\n\n“Chinese managers are shifting to the Western culture of produce,\nproduce, produce,” said Kristyn Kelly of the Class of 2011. “It’s the sort\nof hyper-productivity that only works if people are ready, willing and\nable to say ‘no.’” But Kelly says many Asians — long accustomed to rigid\nhierarchies — simply won’t say no. This time, the cultural clash appeared to have contributed to the tragedy.\n\nThe Foxconn case spotlights the challenges Eastern and Western managers\nface as they blend their businesses.\n\nAnd Chen is the perfect person to steer the conversation.\n\n**A New Discipline**\n\nChen’s work and life focus on balance. He grew up in Taitung on the\nsoutheast coast of Taiwan. As a youth, he studied philosophy and the\nChinese classics with a cousin of Puyi, “The Last Emperor” of China. In\n1981, Chen emigrated to the United States with a visionary quest: to “make\nthe world smaller.”\n\nBefore joining the Darden faculty in 2001, he was a professor at Columbia\nBusiness School and was founding director of the Global Chinese Business\nInitiative at the Wharton School of the University of Pennsylvania.\n\nChen focuses on ways to help managers combine the cultures, to narrow the\nEast-West divide. “I very much consider myself an academic entrepreneur,”\nsays Chen. And he’s a rather bold one. This summer, the management\nprofessor will blaze a new trail.\n\nAs vice president and program chair of the Academy of Management, Chen —\nwho will assume presidency of the group in 2012 — at this year’s annual\nconference intends to ask business scholars from around the world to study\nEastern and Western management techniques. His goal: find ways to\ncharacterize and quantify their di erences so executives can incorporate\nthe best — and avoid the worst — of each.\n\n“Ming-Jer has put his finger on a very important question,” says Jan\nRivkin, the Bruce V. Rauner professor and chair of Harvard Business\nSchool’s strategy unit. “Can a superior model of management emerge from\ncombining the best of both worlds?”\n\nThe academy conference should help Chen and his colleagues around the\nglobe find an answer. In August, the meeting will host more than 11,000 of\nthe organization’s 19,000 members. Among its ranks, the 75-year-old group\ncounts some of the world’s top scholars. For five days, they’ll meet in\nSan Antonio, Texas, to discuss the theme “West Meets East: Enlightening,\nBalancing and Transcending.”\n\nThe topic’s timing may be just right. “The United States still has the\nbest business system, but the system has also shown its vulnerability,”\nexplains Chen.\n\nIn 2008, a period of financial chicanery abruptly ended when the bubble it\ncreated in the U.S. housing market popped. Many still feel the e ects of\nthe recession that followed its explosion.\n\n“Because the economies in the West are soft, there are Westerners moving\nhere,” says Darden alumnus Peabody Hutton (MBA/JD ’77), general counsel of\nAjia Partners, a Hong Kong investment firm. Hutton says that for American\nAsians to set up shop on Eastern shores is not uncommon.\n\nThat’s one reason Chen thinks the market is ready to formally expand its\nhorizons.\n\nHe may be right. Harvard’s Rivkin leads the academy committee that\ndecides which sessions to feature during the annual meeting’s full-day\n“All-Academy Theme” program. Proposals have ranged from whether Asian\nbusiness schools should follow a Western model to yoga’s impact on an\norganization’s e ectiveness.\n\nThe variety of the proposed topics suggests that people may be ready for\nnew ideas. “For a long time, there was an assumption that Western\nmanagement was good management,” Rivkin says.\n\nThat may be changing, but can still be a hard sell.\n\n**Defining the Eastern Paradox**\n\nEasterners and Westerners think differently.\nThe Foxconn suicides were a somber reminder of that. Yet these differences are often expressed more subtly than through questions\nabout workers’ rights.\n\n“Business [here] tends to be conducted less on the basis of merit and\nprice than on the basis of relationships,” says Ajia’s Hutton. The results\ncan be unpredictable.\n\nTo help explain the cultural nuances, Chen has lately been publishing\nabout an idea he calls “transparadox.”\n\nIt’s designed to o er Westerners a new way to think about ideas that\nappear to contradict each other but which may be two sides of the same\ncoin. In essence, transparadox proposes that notions that appear to be\noppositional — such as competition and cooperation — are interrelated or\neven interdependent, connected by a series of implicit links. Chen seeks\nto bridge a fundamental philosophical difference between the way\nEasterners and Westerners regard paradox. “By making these links\nexplicit,” says Chen, “we can enhance a mutual understanding that di\nerences are not irreconcilable.”\n\n“The Chinese are used to ambiguity,” says Hutton. Chen says there are\nplenty of reasons for Westerners to get used to it, and\n\nmoney is a big one.\nTraditionally, a corporation’s finances were managed at its\n\nWestern headquarters, says Leslie Grayson, professor emeritus of\ninternational business at Darden for whom Chen’s academic chair is named.\nToday, funds may move between foreign territories without passing\nthrough the West.\n\nAs a result, Easterners and Westerners have good reason to adapt to one\nanother.\n\n“If you don’t learn, there’s a penalty,” says Grayson. “You fail.”\n\n**Measuring Ambiculturality**\n\nGiven their philosophical di erences, how do Easterners and Westerners\nsuccessfully combine their management strategies?\n\nThe answer could become one of Chen’s biggest hits. Last November, he\npublicly coined a term that may ultimately define not only this summer’s\nacademy conference but also the study of Eastern and Western management as\na whole: ambicultural.\n\nIt reads like intellectual popcorn. Say it aloud and ideas like\nambidexterity and cultural sensitivity come easily to mind. “The basic\npremise is that each culture in society has its own strengths and\nweaknesses when they’re applied to business practices,” Chen explains.\nCombining the best parts of each approach is ambicultural.\n\nBut this involves a trick. Strengths cannot be combined and weaknesses\navoided until they’ve been defined. So the professor is creating a survey\nto be sent to Eastern and Western managers later this year that he thinks\nwill do just that.\n\nFor instance, the survey may ask executives to rate the importance they\nplace on personal connections, and to numerically prioritize their\ninterest in employees, stakeholders and society.\n\n“I think there will be many di erent ways we can quantify the variables\nthat can reveal how ambicultural a company is,” Chen says. Already, he\nhopes to create a scale for companies to rate their use of cross-cultural\nmanagement strategies.\n\nThis wouldn’t be the first time Chen has developed a way to quantify the\nseemingly unquantifiable. In the mid-1980s, he spent months analyzing a\ndatabase of airline industry events that were covered by the trade\nnewspaper Aviation Daily. Thousands of articles were scored against\nvariables, such as “event visibility” or “response announcement speed,”\nthat Chen helped pioneer as a way to study airline competition over an\neight-year period.\n\nThe database made the competitive patterns that businesses fall into clear\nenough to study — and often, to predict.\n\nThe result: A popular new area of strategic theory named competitive\ndynamics emerged over the past 25 years in the management field and\ncontinues to thrive today. Competitive dynamics is the analysis of\ncompetition at the action and response level to predict how a firm will\nact or react toward opponents.\n\n**An Eastern or Western Face?**\n\nAll the signs suggest “ambicultural” will be as big a hit.\n\nThe concept is not even a year old, yet management expertsare already\nstarting to buzz about it.\n\nIn March, an Asian edition of the Harvard Business Review translated the word into Chinese. Now, the editors of the U.S. edition are\ntalking to Chen about producing their own story on it. And next year, many\nbusiness students will study the term in the new edition of a well-known\ntextbook on strategic management.\n\nThe word’s surging popularity isn’t surprising. People are hungry for ways\nto sail between the East and West more easily.\n\n“Right now, what we need to do is to compare management systems from one\ncountry [against those of] another country,” says Grayson.\n\nThe hard part is doing that without judging the results harshly. Consider\njob interviews. Grayson says that rather than just examining competence,\nAsian companies focus on learning “who” they are considering hiring. This\nmay entail asking questions some Western countries deem illegal, such as\nwhether the candidate is married or plans on having children.\n\nChen’s ideas can’t solve legal problems like those, but they may help\nmanagers bridge the cultural chasm underlying them. Still, it’s a big task\n— certainly too big for one man to perform alone, and the strategy expert\nhas no intention of trying to do so single-handedly. Rather, his plan is\nto work through the Academy of Management to expose his colleagues to a\nframework they can use to study it on their own. The approach already\nseems to be working.\n\nDarden student Kelly — who worked for the U.S. Navy before coming to\nDarden and studying Foxconn with Chen — says he opened her eyes to the\nEast.\n\n“We’re still viewing China through a Western lens,” she says. “We’re not\nviewing the Chinese as partners.”\n","frontmatter":"headline: 'Charting an East/West Passage'\npublication: 'The Darden Report'\nposition: 'Freelance'"}

/***/ }),

/***/ "./app/data/clips/uva-is-the-wine-trade-recession-proof.md":
/*!*****************************************************************!*\
  !*** ./app/data/clips/uva-is-the-wine-trade-recession-proof.md ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"headline":"Is the Wine Trade Recession-Proof?","publication":"The Darden Report","position":"Freelance"},"body":"\nNO ONE GOT A CHANCE to put away the crate of Tignanello when it first\narrived at Young’s Fine Wines. Its six \\$109 bottles of wine barely had a\nchance to rest on the Manhasset, New York storeroom floor. Two hours\nlater, every bottle had been bought. That was two years ago, long before\nthe pain of recession set into people’s minds.\n\nThese days, Young’s wealthy Long Island clientele of Wall Street bankers\nand Madison Avenue advertising executives aren’t so quick to spend so big.\nThat’s why the store is pushing wines ranging in price from $15 to \\$25\nfrom a huge stock that regularly runs over 3,000 bottles. “At some point,\npeople are going to buy less,” said Young’s President Edward Wassmer (TEP\n’95).\n\nWithout a doubt, the recession has sharpened the senses and tightened the\nwallets of almost everyone. Like Wassmer, people throughout the wine trade\nare struggling to find ways to maintain sales without just slashing\nprices. While some markets, such as luxury clothing, have already moved to\nmassive discounts in the face of an economizing public, the wine industry\nhopes it can buck the trend—or at least embrace it slowly.\n\n“People are going to continue to drink. I think it’s one of our national\npastimes, isn’t it?” asked Gene Meoni, general manager of hospitality for\nthe Darden School Foundation, which includes a pub and a 300-seat dining\nroom. Recent sales at wine retailers suggest he’s right. They increased by 4.9 percent year-over-year to $8.2 billion for the 52 weeks ending January 10 (which includes the lucrative holiday season), according to Nielsen Scantrak. Indeed, for the four weeks ending January 10—just after the recession became official—retail sales grew 7.6 percent to \\$810 million.\n\nStill, pressure remains high to retain a big cut of those numbers.\n“Everybody can dance around it, but retailers want sharply reduced\nprices,” said Jack Kennard (MBA ’73), a senior vice president at Brown-Forman, one of the largest producers of wine and spirits in the world.\nKennard argues that giving into widespread and deep price reductions is a\nmistake that will permanently undermine a business’s product and a brand’s\nhealth. “Deep discounting is highly destructive to brand equity over the\nlong term,” he said.\n\nAs of early February, Brown-Forman was resisting deep price cuts. Instead,\nthe company was enticing sales by developing limited-time marketing\nprograms geared toward adding value at the point of purchase. For example,\nsome wines now include stemware boxed in gift sets, and the company is\ncreating more attractive gift cards and packaging to encourage sales.\nWhether people will buy the strategy for long is hard to say, as no one\nknows just how bad the economy will get—or when it will get better.\n\nOne thing is already clear, though— cheaper is better as far as consumers\nare concerned. Nielsen reports that the $3.00 – \\$5.99 category of wine\nbottles saw the strongest year-over-year growth at 12.9 percent to \\$189\nmillion for the four weeks ending January 10. Yet wines costing \\$15 or\nmore grew only 3.7 percent to \\$120 million during the same period. Indeed,\nthat was the only price range to shrink last fall as the economic strength\nof the U.S. plummeted, dropping 0.5 percent to \\$311 million over the 13\nweeks ending January 10.\n\nWithout a doubt, premium wines are in a tough spot. Judith Fowler (MBA\n’81), owner of the Clevedon, New Zealand– based winery Puriri Hills, knows\nthat only too well. With just 12,000 bottles of wine coming out of her\nwinery a year, Fowler agrees that cutting the price of her three labels,\nwhich range from $25 to \\$150 in the U.S., is a bad idea. “The price point\nhas to say something about quality,” she said. A strategy of massive price\ndiscounting is incompatible with the small volumes produced.\n\nThough the pressure is on, the 13-year- old winery is standing behind its\nconviction that “handmade, estate-bottled wines such as ours are becoming\nmore desirable as people shift from industrially produced foods to\nartisanal foods, even in the current tough market environment.” Puriri\nHills views the recession as an opportunity to grow within its market\nsegment, and the winery has found some palatable ways to inspire sales.\nLate last year, Fowler began giving some distributors price breaks or\ncredits for local taxes to help keep them in business to sell her cases.\n\n“You have to encourage your middle men in this kind of a time,” she said.\nFor instance, Fowler did not raise prices on a distributor in one Asian\nmarket whose native currency strengthened as much as 50 percent in the\nlast year against the New Zealand dollar. Though the distributor is e\nectively paying half as much for the same goods, keeping him on has helped\nPuriri Hills maintain and create sales in a tough environment.\n\nThose same currency fluctuations may also help Puriri Hills increase its\ndistribution. The New Zealand dollar has weakened by as much as 40 percent\nagainst the U.S. dollar in the last year, so Fowler is now looking into\nselling her wines in the U.S., in states beyond her native Virginia. As of\nFebruary, she was talking with her son—who distributes Puriri Hills in the\nU.S.—about selling them in New York City and Chicago. “You look for the\nspecific place where the customers want something unusual,” she said.\n\nShe may be on to something at a time when bars and restaurants are already\nstruggling to keep business up, said Darden’s Meoni. Wine sales are often\nan important component of their revenues because of what can be an\nextremely high markup on each bottle. But with people spending carefully,\nMeoni said both groups are thirsty for unusual labels from places such as\nNew Zealand that can sustain a similar markup at a lower price than super-high premium wines. “There’s a lot of stu that isn’t mainstream that is a very, very good value,” he said.\n\nStill, there is a strong demand for cheaper wines. That’s a big reason\nPleasant Valley Wine Company President Mike Doyle (MBA ’66) said business\nis booming right now. While the winery sells some of its own labels, much\nof its business comes from producing wines for third parties whose bottles\ngenerally run less than $20. “This is usually a slow time of year, and we’re pretty busy,” said Doyle. In fact, there are more opportunities than he can keep up with at the moment. And why not—he said most people can’t tell the difference between a \\$25 and a \\$125 bottle of Merlot.\n\nBrown-Forman’s Kennard doesn’t entirely agree. The “trade-down” effect,\nas the industry likes to call it, is only temporary, he said. By shying\naway from expensive wines and spirits, people aren’t casting a vote\nagainst the premium brands they’ve been loyal to for many years. “They\njust simply feel it’s not right for them right now as they attempt to\neconomize,” he said. “Luxury brands are ‘worn’ by consumers like badges,\nand premium sector wine and spirits consumers look forward rather\nhopefully to better times when they will confidently express themselves\nthrough luxury brands again.”\n\nWassmer of Young’s Fine Wines echoes the sentiment, but said these days he\nneeds to go with the flow. Despite strong sales in 2007, he decided it was\ntime to plan for a recession two years ago. Wall Street’s violent\nreactions to small slips in sales were one reason why. “You could see\npeople with just a little bit of softness were in a scramble,” he said. So\nhe cut back buying some popular—and pricey—vintages.\n\nAnd he did something curious: he started hiring. With some wine\ndiscounters nearby, competing on price alone was unlikely without a lot of\nattention to service and selection. “There’s really no way to e ectively\nsell that many items [over 3,000 bottles], but put out ‘shelf talkers’ to\nget the job done,” said Wassmer. Last year, he boosted the sales sta from\none full time person and two part-timers to three full time people and one\npart-timer, and developed a nine-week training course for them known as\n“Young’s U.”\n\nThere are early signs it’s working. An increase in customer count in\nJanuary—a traditionally weak month—of 11 percent to 7,684 people helped\ncushion a drop in sales of roughly one percent. In fairness, the recession\nmay be supercharging the strategy, driving people into retailers like\nYoung’s as they limit visits to bars and restaurants. Still, Wassmer said\nthe increase in count is a big reason he’s cautiously optimistic about 2009. But just in case, Wassmer may have hit upon a new way to ultimately\nlower some of the costs involved in educating his clientele—Internet\nvideo.\n\nThe store just launched a web-based video series named “Wine in a Minute.”\nEach short spot—which takes a day and a half to prepare—encourages\ncustomers to try new wines by educating them about new options. Right now,\nWassmer is not measuring the return on investment, but he’s already\noptimistic about the low-cost video programming based on anecdotal\nfeedback from customers. “It’s constantly a game of keeping your consumer\nexcited and educated,” he said. \n\nAnd coming back for more.\n","frontmatter":"headline: 'Is the Wine Trade Recession-Proof?'\npublication: 'The Darden Report'\nposition: 'Freelance'"}

/***/ }),

/***/ "./app/data/home/home.md":
/*!*******************************!*\
  !*** ./app/data/home/home.md ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"page":"home","type":"home","name":"James Abels","motto":"Code beyond the mechanics...","updated":"11-23-18","boyInForegroundImage":"https://user-images.githubusercontent.com/30417590/55294127-2c1c5980-53cc-11e9-9848-5295cd05a9cc.png","zoomedBoyInForegroundImage":"","fantasyImage":"https://user-images.githubusercontent.com/30417590/55294130-33436780-53cc-11e9-93cc-f61572bca6ef.png","zoomedFantasyImage":"","cityImage":"https://user-images.githubusercontent.com/30417590/55294135-3c343900-53cc-11e9-8f9c-e66499ccd920.png","zoomedCityImage":""},"body":"\nHi. I'm a Web developer, start-up founder, and story teller. I used to write about technology, digital media, and M&A \nas a staff reporter for Forbes.com and Mergermarket. Now I use code to tell clear and compelling stories through design and\nfunction. Let's talk.\n","frontmatter":"page: home\ntype: home\nname: James Abels\nmotto: Code beyond the mechanics...\nupdated: 11-23-18\nboyInForegroundImage: https://user-images.githubusercontent.com/30417590/55294127-2c1c5980-53cc-11e9-9848-5295cd05a9cc.png\nzoomedBoyInForegroundImage: ''\nfantasyImage: https://user-images.githubusercontent.com/30417590/55294130-33436780-53cc-11e9-93cc-f61572bca6ef.png\nzoomedFantasyImage: ''\ncityImage: https://user-images.githubusercontent.com/30417590/55294135-3c343900-53cc-11e9-8f9c-e66499ccd920.png\nzoomedCityImage: ''"}

/***/ }),

/***/ "./app/data/projects sync recursive \\.md$":
/*!**************************************!*\
  !*** ./app/data/projects sync \.md$ ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./alexa.md": "./app/data/projects/alexa.md",
	"./arrow.md": "./app/data/projects/arrow.md",
	"./my-site.md": "./app/data/projects/my-site.md",
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

/***/ "./app/data/projects/alexa.md":
/*!************************************!*\
  !*** ./app/data/projects/alexa.md ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"number":1,"projectName":"Alexa skills","pitch":"Start-up ideas and fun toys","type":"Coding","technologies":"Cloud: AWS Lambda ∙ Language: Node.js, Javascript","responsibility":"Inventor and lead developer","story":"With smart speker ownership set to crest 200 million by the end of 2019, voice assistants sit atop the digital frontier. These are some experiments with them.","captions":["Washington Square is an experimental voice skill that connects strangers. It was the earliest stage start-up idea to make second-round interviews with Amazon for Alexa Accelerator II.","G's Rules of Funny is a small trivia skill that teaches anyone to be funny. G, who wishes to remain nameless, is a N.Y.C. comic who has caused laughter from Capital Hill to Radio City Music Hall.","Take on G picks up where G's Rules of Funny left off. It's a small trivia game that asks players a set of nonsensical, irrelvant, and perplexing questions. Can you get beat G like he beat Ninja Gaidan?"],"projectThumbnail":["https://user-images.githubusercontent.com/30417590/56868552-a89d5a80-69c1-11e9-9d2f-edbb585499f4.png","https://user-images.githubusercontent.com/30417590/56868548-a89d5a80-69c1-11e9-91b5-28f5ccad1015.png","https://user-images.githubusercontent.com/30417590/56868582-39743600-69c2-11e9-84cc-0b6a3cf13378.png"],"full":["https://user-images.githubusercontent.com/30417590/57550883-9d3d1e00-7335-11e9-94aa-ad21ede054ed.png","https://user-images.githubusercontent.com/30417590/56870193-d1314e80-69d9-11e9-9ff7-63af134a50c6.png","https://user-images.githubusercontent.com/30417590/56869785-17cf7a80-69d3-11e9-81d7-aefa52ffa98b.png"],"zoomed":["https://user-images.githubusercontent.com/30417590/57550273-e2f8e700-7333-11e9-8e0c-f40bfbde4163.png","https://user-images.githubusercontent.com/30417590/57550285-f1470300-7333-11e9-9068-bf3260ca39f5.png","https://user-images.githubusercontent.com/30417590/57550304-fefc8880-7333-11e9-8aff-4fb64309a649.png"],"showTheseAttributes":["story","responsibility","technologies"]},"body":"","frontmatter":"number: \n    1\nprojectName: \n    'Alexa skills'\npitch: \n    'Start-up ideas and fun toys'\ntype:\n  'Coding'\ntechnologies: \n    'Cloud: AWS Lambda ∙ Language: Node.js, Javascript'\nresponsibility: \n    'Inventor and lead developer'\nstory: \n    'With smart speker ownership set to crest 200 million by the end of 2019, voice assistants sit atop the digital frontier. These are some experiments with them.'\ncaptions: [\n    'Washington Square is an experimental voice skill that connects strangers. It was the earliest stage start-up idea to make second-round interviews with Amazon for Alexa Accelerator II.',\n    \"G's Rules of Funny is a small trivia skill that teaches anyone to be funny. G, who wishes to remain nameless, is a N.Y.C. comic who has caused laughter from Capital Hill to Radio City Music Hall.\",\n    \"Take on G picks up where G's Rules of Funny left off. It's a small trivia game that asks players a set of nonsensical, irrelvant, and perplexing questions. Can you get beat G like he beat Ninja Gaidan?\"\n]\nprojectThumbnail: [\n    'https://user-images.githubusercontent.com/30417590/56868552-a89d5a80-69c1-11e9-9d2f-edbb585499f4.png',\n    'https://user-images.githubusercontent.com/30417590/56868548-a89d5a80-69c1-11e9-91b5-28f5ccad1015.png',\n    'https://user-images.githubusercontent.com/30417590/56868582-39743600-69c2-11e9-84cc-0b6a3cf13378.png'\n]\nfull: [\n    'https://user-images.githubusercontent.com/30417590/57550883-9d3d1e00-7335-11e9-94aa-ad21ede054ed.png',\n    'https://user-images.githubusercontent.com/30417590/56870193-d1314e80-69d9-11e9-9ff7-63af134a50c6.png',\n    'https://user-images.githubusercontent.com/30417590/56869785-17cf7a80-69d3-11e9-81d7-aefa52ffa98b.png'\n]\nzoomed: [\n    'https://user-images.githubusercontent.com/30417590/57550273-e2f8e700-7333-11e9-8e0c-f40bfbde4163.png',\n    'https://user-images.githubusercontent.com/30417590/57550285-f1470300-7333-11e9-9068-bf3260ca39f5.png',\n    'https://user-images.githubusercontent.com/30417590/57550304-fefc8880-7333-11e9-8aff-4fb64309a649.png',\n]\nshowTheseAttributes: [\n    'story',\n    'responsibility',\n    'technologies'\n]"}

/***/ }),

/***/ "./app/data/projects/arrow.md":
/*!************************************!*\
  !*** ./app/data/projects/arrow.md ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"number":3,"projectName":"Arrow","pitch":"Simply personalize interactive video","type":"Founder","technologies":"Cloud: AWS ∙ Language: PHP ∙ Transcoding: FFmpeg","responsibility":"As the founder of Three Minute Media, I oversaw corporate affairs and platform development, including budgets, our product lead, and investor outreach.","story":"Arrow was a self-serve platform that made it easy for editorial and sales teams to personalize and syndicate interactive video based on first- and third-party data.","captions":["The Editor was used to build video programming by adding videos to a Stack and configuring it with dynamically generated settings. Users could buy and sell their videos through syndication.","The Developer Module was used to extend Arrow with custom media formats, settings, and live controls. Arrow delivered any code-based media, including video players, widgets, and more.","The Encapsulated Presentation Module allowed Arrow's extensibility. It was a mixture of PubML, our proprietary domain-specific programming language, and a user's proprietary source code.","Stack Settings configured video and other programming. They were dynamically generated from instructions in an Encapsulated Presentation Module. Users could create or license their EPMs.","Live controls modified media after deployment. Like Settings, they were dynamically generated from an Encapsulated Presentation Module, making Arrow a true end-to-end publishing system."],"projectThumbnail":["https://user-images.githubusercontent.com/30417590/56855911-09735700-691e-11e9-83a8-7ddf134fcfa1.png","https://user-images.githubusercontent.com/30417590/57551845-10479400-7338-11e9-8c8c-e3ae7019ddfb.png","https://user-images.githubusercontent.com/30417590/56855923-1db75400-691e-11e9-9657-0daeef8b6199.png","https://user-images.githubusercontent.com/30417590/56855926-26a82580-691e-11e9-9250-23871ffee641.png","https://user-images.githubusercontent.com/30417590/56855934-30ca2400-691e-11e9-841a-bf69f6e63dce.png"],"full":["https://user-images.githubusercontent.com/30417590/56855850-de3c3800-691c-11e9-9779-83c24b8b579a.png","https://user-images.githubusercontent.com/30417590/57551861-1c335600-7338-11e9-82e5-ba59d3b32d93.png","https://user-images.githubusercontent.com/30417590/56855857-f0b67180-691c-11e9-9457-6ce2d61f2647.png","https://user-images.githubusercontent.com/30417590/56855859-f8761600-691c-11e9-860f-e6dd7caef204.png","https://user-images.githubusercontent.com/30417590/56855862-fe6bf700-691c-11e9-93f1-0240b420dd49.png"],"zoomed":["https://user-images.githubusercontent.com/30417590/57548679-93b0b780-732f-11e9-9102-be683462cd8c.png","https://user-images.githubusercontent.com/30417590/57551871-26555480-7338-11e9-8dbb-46b314c83168.png","https://user-images.githubusercontent.com/30417590/57548833-f5712180-732f-11e9-8c35-aa60966c15cf.png","https://user-images.githubusercontent.com/30417590/57548863-06219780-7330-11e9-85c1-f612060534a8.png","https://user-images.githubusercontent.com/30417590/57548888-16397700-7330-11e9-8349-1b4d818fbddd.png"],"showTheseAttributes":["story","responsibility","technologies"]},"body":"","frontmatter":"number: \n  3\nprojectName: \n  'Arrow'\npitch: \n  'Simply personalize interactive video'\ntype:\n  'Founder'\ntechnologies: \n  'Cloud: AWS ∙ Language: PHP ∙ Transcoding: FFmpeg'\nresponsibility: \n  \"As the founder of Three Minute Media, I oversaw corporate affairs and platform development, including budgets, our product lead, and investor outreach.\"\nstory: \n  'Arrow was a self-serve platform that made it easy for editorial and sales teams to personalize and syndicate interactive video based on first- and third-party data.'\ncaptions: [\n  \"The Editor was used to build video programming by adding videos to a Stack and configuring it with dynamically generated settings. Users could buy and sell their videos through syndication.\",\n  \"The Developer Module was used to extend Arrow with custom media formats, settings, and live controls. Arrow delivered any code-based media, including video players, widgets, and more.\",\n  \"The Encapsulated Presentation Module allowed Arrow's extensibility. It was a mixture of PubML, our proprietary domain-specific programming language, and a user's proprietary source code.\",\n  \"Stack Settings configured video and other programming. They were dynamically generated from instructions in an Encapsulated Presentation Module. Users could create or license their EPMs.\",\n  \"Live controls modified media after deployment. Like Settings, they were dynamically generated from an Encapsulated Presentation Module, making Arrow a true end-to-end publishing system.\"\n]\nprojectThumbnail: [\n  'https://user-images.githubusercontent.com/30417590/56855911-09735700-691e-11e9-83a8-7ddf134fcfa1.png',\n  'https://user-images.githubusercontent.com/30417590/57551845-10479400-7338-11e9-8c8c-e3ae7019ddfb.png',\n  'https://user-images.githubusercontent.com/30417590/56855923-1db75400-691e-11e9-9657-0daeef8b6199.png',\n  'https://user-images.githubusercontent.com/30417590/56855926-26a82580-691e-11e9-9250-23871ffee641.png',\n  'https://user-images.githubusercontent.com/30417590/56855934-30ca2400-691e-11e9-841a-bf69f6e63dce.png'\n]\nfull: [\n  'https://user-images.githubusercontent.com/30417590/56855850-de3c3800-691c-11e9-9779-83c24b8b579a.png',\n  'https://user-images.githubusercontent.com/30417590/57551861-1c335600-7338-11e9-82e5-ba59d3b32d93.png',\n  'https://user-images.githubusercontent.com/30417590/56855857-f0b67180-691c-11e9-9457-6ce2d61f2647.png',\n  'https://user-images.githubusercontent.com/30417590/56855859-f8761600-691c-11e9-860f-e6dd7caef204.png',\n  'https://user-images.githubusercontent.com/30417590/56855862-fe6bf700-691c-11e9-93f1-0240b420dd49.png'\n]\nzoomed: [\n  'https://user-images.githubusercontent.com/30417590/57548679-93b0b780-732f-11e9-9102-be683462cd8c.png',\n  'https://user-images.githubusercontent.com/30417590/57551871-26555480-7338-11e9-8dbb-46b314c83168.png',\n  'https://user-images.githubusercontent.com/30417590/57548833-f5712180-732f-11e9-8c35-aa60966c15cf.png',\n  'https://user-images.githubusercontent.com/30417590/57548863-06219780-7330-11e9-85c1-f612060534a8.png',\n  'https://user-images.githubusercontent.com/30417590/57548888-16397700-7330-11e9-8349-1b4d818fbddd.png'\n]\nshowTheseAttributes: [\n  'story',\n  'responsibility',\n  'technologies'\n]"}

/***/ }),

/***/ "./app/data/projects/index.js":
/*!************************************!*\
  !*** ./app/data/projects/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((function () {
  var context = __webpack_require__("./app/data/projects sync recursive \\.md$");

  var keys = context.keys();
  return keys.map(function (key) {
    return context(key);
  }).sort(function (a, b) {
    return a.attributes.number - b.attributes.number;
  });
})());

/***/ }),

/***/ "./app/data/projects/my-site.md":
/*!**************************************!*\
  !*** ./app/data/projects/my-site.md ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"number":2,"projectName":"My site","pitch":"A personal site about stories and code","type":"Coding","technologies":"Cloud: Github Pages ∙ Language: Javascript, HTML, CSS ∙ Framework: React","responsibility":"Creator and developer","story":"My site is a Single Page Application masquerading as a Web site. It explores the intersection between storytelling and hand-crafted code. Built with ❤️ in N.Y.C.","captions":["Floating text gives an overview about me, and a big, bold illustration teases the site's main story.","The story of my life, featuring magical creatures, custom illustrations, and wide-eyed enthusiasm.","A project page showcasing the software I oversaw as founder of Three Minute Media. A menu button and thumbnails are stored on the shelf above the content so they're easily accessible.","An article page featuring one of the clips that I wrote as a staff reporter at Forbes. The component that creates this page is shared with Reverie, the site's blog, to make site maintenance easier.","Reverie is the site's blog. It's accessed via a text button in the Footer. Reading a Reverie means taking a break from the main site. Exiting the Reverie will return the user to his original spot."],"projectThumbnail":["https://user-images.githubusercontent.com/30417590/56870458-a1844580-69dd-11e9-83b7-239783e2d5e9.png","https://user-images.githubusercontent.com/30417590/56870461-a5b06300-69dd-11e9-9027-74175f51bbf2.png","https://user-images.githubusercontent.com/30417590/56870463-ad700780-69dd-11e9-90ea-6672bd9865c0.png","https://user-images.githubusercontent.com/30417590/56870464-b234bb80-69dd-11e9-8e47-481a0ab6e317.png","https://user-images.githubusercontent.com/30417590/56870466-b6f96f80-69dd-11e9-81ea-67981608e285.png"],"full":["https://user-images.githubusercontent.com/30417590/56870415-0ee3a680-69dd-11e9-84c2-0bf3898ac283.png","https://user-images.githubusercontent.com/30417590/56870414-0ee3a680-69dd-11e9-8ba8-442eb3acc890.png","https://user-images.githubusercontent.com/30417590/56870417-0ee3a680-69dd-11e9-9dc2-51f5c70dca4e.png","https://user-images.githubusercontent.com/30417590/56870416-0ee3a680-69dd-11e9-84d8-cd541f9d6930.png","https://user-images.githubusercontent.com/30417590/56870418-0ee3a680-69dd-11e9-915a-c230800f6463.png"],"zoomed":["https://user-images.githubusercontent.com/30417590/57550562-cd37f180-7334-11e9-8a5b-8f15e0e5dac9.png","https://user-images.githubusercontent.com/30417590/57550611-eb055680-7334-11e9-8a21-c5b885b73678.png","https://user-images.githubusercontent.com/30417590/57550639-f5bfeb80-7334-11e9-9ad2-cf351f8d6937.png","https://user-images.githubusercontent.com/30417590/57550666-02444400-7335-11e9-8bd2-3616e11dc77e.png","https://user-images.githubusercontent.com/30417590/57550687-0d976f80-7335-11e9-9e21-84d47d9dfee6.png"],"showTheseAttributes":["story","responsibility","technologies"]},"body":"","frontmatter":"number: \n    2\nprojectName: \n    'My site'\npitch: \n    'A personal site about stories and code'\ntype:\n  'Coding'\ntechnologies: \n    'Cloud: Github Pages ∙ Language: Javascript, HTML, CSS ∙ Framework: React'\nresponsibility: \n    'Creator and developer'\nstory: \n    'My site is a Single Page Application masquerading as a Web site. It explores the intersection between storytelling and hand-crafted code. Built with ❤️ in N.Y.C.'\ncaptions: [\n    \"Floating text gives an overview about me, and a big, bold illustration teases the site's main story.\",\n    'The story of my life, featuring magical creatures, custom illustrations, and wide-eyed enthusiasm.',\n    \"A project page showcasing the software I oversaw as founder of Three Minute Media. A menu button and thumbnails are stored on the shelf above the content so they're easily accessible.\",\n    \"An article page featuring one of the clips that I wrote as a staff reporter at Forbes. The component that creates this page is shared with Reverie, the site's blog, to make site maintenance easier.\",\n    \"Reverie is the site's blog. It's accessed via a text button in the Footer. Reading a Reverie means taking a break from the main site. Exiting the Reverie will return the user to his original spot.\"\n]\nprojectThumbnail: [\n    'https://user-images.githubusercontent.com/30417590/56870458-a1844580-69dd-11e9-83b7-239783e2d5e9.png',\n    'https://user-images.githubusercontent.com/30417590/56870461-a5b06300-69dd-11e9-9027-74175f51bbf2.png',\n    'https://user-images.githubusercontent.com/30417590/56870463-ad700780-69dd-11e9-90ea-6672bd9865c0.png',\n    'https://user-images.githubusercontent.com/30417590/56870464-b234bb80-69dd-11e9-8e47-481a0ab6e317.png',\n    'https://user-images.githubusercontent.com/30417590/56870466-b6f96f80-69dd-11e9-81ea-67981608e285.png'\n]\nfull: [\n    'https://user-images.githubusercontent.com/30417590/56870415-0ee3a680-69dd-11e9-84c2-0bf3898ac283.png',\n    'https://user-images.githubusercontent.com/30417590/56870414-0ee3a680-69dd-11e9-8ba8-442eb3acc890.png',\n    'https://user-images.githubusercontent.com/30417590/56870417-0ee3a680-69dd-11e9-9dc2-51f5c70dca4e.png',\n    'https://user-images.githubusercontent.com/30417590/56870416-0ee3a680-69dd-11e9-84d8-cd541f9d6930.png',\n    'https://user-images.githubusercontent.com/30417590/56870418-0ee3a680-69dd-11e9-915a-c230800f6463.png'\n]\nzoomed: [\n    'https://user-images.githubusercontent.com/30417590/57550562-cd37f180-7334-11e9-8a5b-8f15e0e5dac9.png',\n    'https://user-images.githubusercontent.com/30417590/57550611-eb055680-7334-11e9-8a21-c5b885b73678.png',\n    'https://user-images.githubusercontent.com/30417590/57550639-f5bfeb80-7334-11e9-9ad2-cf351f8d6937.png',\n    'https://user-images.githubusercontent.com/30417590/57550666-02444400-7335-11e9-8bd2-3616e11dc77e.png',\n    'https://user-images.githubusercontent.com/30417590/57550687-0d976f80-7335-11e9-9e21-84d47d9dfee6.png'\n]\nshowTheseAttributes: [\n    'story',\n    'responsibility',\n    'technologies'\n]"}

/***/ }),

/***/ "./app/data/projects/slingshot.md":
/*!****************************************!*\
  !*** ./app/data/projects/slingshot.md ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"number":4,"projectName":"Slingshot","pitch":"Easily direct global software demos","type":"Founder","technologies":"Cloud: AWS ∙ Language: PHP ∙ Broadcasting: PubNub / Websockets","responsibility":"As the founder of Three Minute Media, I oversaw corporate affairs and platform development, including budgets, our product lead, and investor outreach.","story":"Slingshot let presenters touch a few simple buttons in order to control the HTML elements that guests saw on screen in real time, no matter where they were.","captions":["Presenters used the Remote on a dedicated device to control what guests saw on a separate screen during software demos. In this view, the Remote is being used to control a slide deck.","After logging in, users were greeted by a plain white Web page. The presenter then used the Remote to add HTML elements to screen in real time. In this case, a slide image was added.","Presenters were not limited to slides. The Remote could also be used to control a variety of live 'props', such as YouTube videos, spotlights, and any other element that punctuated a point.","The Remote let presenters show guests live HTML 'props', such as YouTube videos, playing cards, and more. In this view, a YouTube video and embed code are shown. Each is a separate element.","Slingshot's ultimate goal was to help presenters make key points during software demos. In this view, an embed code is being spotlighted in yellow to make a  point about video delivery."],"projectThumbnail":["https://user-images.githubusercontent.com/30417590/56821138-941f5d80-681b-11e9-8ee0-034ec6d3949f.png","https://user-images.githubusercontent.com/30417590/56821155-9f728900-681b-11e9-913b-db3a2c0cbe8c.png","https://user-images.githubusercontent.com/30417590/56821177-a8fbf100-681b-11e9-92c3-408d5ec44294.png","https://user-images.githubusercontent.com/30417590/56821194-b2855900-681b-11e9-80eb-0047353ef6ac.png","https://user-images.githubusercontent.com/30417590/56821215-bc0ec100-681b-11e9-9ae9-a287c0473413.png"],"full":["https://user-images.githubusercontent.com/30417590/56821143-9681b780-681b-11e9-8a75-12b29591fae6.png","https://user-images.githubusercontent.com/30417590/56821163-a13c4c80-681b-11e9-8db0-126edc9fd76f.png","https://user-images.githubusercontent.com/30417590/56821181-ab5e4b00-681b-11e9-9422-efaac9b446f2.png","https://user-images.githubusercontent.com/30417590/56821199-b4e7b300-681b-11e9-897f-7dc96af514f5.png","https://user-images.githubusercontent.com/30417590/56821220-bdd88480-681b-11e9-9d81-8a362516c080.png"],"zoomed":["https://user-images.githubusercontent.com/30417590/57549226-f48cbf80-7330-11e9-8394-0bab2d3368c1.png","https://user-images.githubusercontent.com/30417590/57549266-0d957080-7331-11e9-8d84-99e5a323345b.png","https://user-images.githubusercontent.com/30417590/57549287-21d96d80-7331-11e9-8951-a2934a2fc723.png","https://user-images.githubusercontent.com/30417590/57549304-30278980-7331-11e9-8285-eeb1110c89c7.png","https://user-images.githubusercontent.com/30417590/57549331-40d7ff80-7331-11e9-8dbd-c82a0653cc0f.png"],"showTheseAttributes":["story","responsibility","technologies"]},"body":"","frontmatter":"number: \n  4\nprojectName: \n  'Slingshot'\npitch: \n  'Easily direct global software demos'\ntype:\n  'Founder'\ntechnologies: \n  'Cloud: AWS ∙ Language: PHP ∙ Broadcasting: PubNub / Websockets'\nresponsibility:\n  \"As the founder of Three Minute Media, I oversaw corporate affairs and platform development, including budgets, our product lead, and investor outreach.\"\nstory:\n  \"Slingshot let presenters touch a few simple buttons in order to control the HTML elements that guests saw on screen in real time, no matter where they were.\"\ncaptions: [\n  \"Presenters used the Remote on a dedicated device to control what guests saw on a separate screen during software demos. In this view, the Remote is being used to control a slide deck.\",\n  \"After logging in, users were greeted by a plain white Web page. The presenter then used the Remote to add HTML elements to screen in real time. In this case, a slide image was added.\",\n  \"Presenters were not limited to slides. The Remote could also be used to control a variety of live 'props', such as YouTube videos, spotlights, and any other element that punctuated a point.\",\n  \"The Remote let presenters show guests live HTML 'props', such as YouTube videos, playing cards, and more. In this view, a YouTube video and embed code are shown. Each is a separate element.\",\n  \"Slingshot's ultimate goal was to help presenters make key points during software demos. In this view, an embed code is being spotlighted in yellow to make a  point about video delivery.\"\n]\nprojectThumbnail: [\n  'https://user-images.githubusercontent.com/30417590/56821138-941f5d80-681b-11e9-8ee0-034ec6d3949f.png',\n  'https://user-images.githubusercontent.com/30417590/56821155-9f728900-681b-11e9-913b-db3a2c0cbe8c.png',\n  'https://user-images.githubusercontent.com/30417590/56821177-a8fbf100-681b-11e9-92c3-408d5ec44294.png',\n  'https://user-images.githubusercontent.com/30417590/56821194-b2855900-681b-11e9-80eb-0047353ef6ac.png',\n  'https://user-images.githubusercontent.com/30417590/56821215-bc0ec100-681b-11e9-9ae9-a287c0473413.png'\n]\nfull: [\n  'https://user-images.githubusercontent.com/30417590/56821143-9681b780-681b-11e9-8a75-12b29591fae6.png',\n  'https://user-images.githubusercontent.com/30417590/56821163-a13c4c80-681b-11e9-8db0-126edc9fd76f.png',\n  'https://user-images.githubusercontent.com/30417590/56821181-ab5e4b00-681b-11e9-9422-efaac9b446f2.png',\n  'https://user-images.githubusercontent.com/30417590/56821199-b4e7b300-681b-11e9-897f-7dc96af514f5.png',\n  'https://user-images.githubusercontent.com/30417590/56821220-bdd88480-681b-11e9-9d81-8a362516c080.png'\n]\nzoomed: [\n  'https://user-images.githubusercontent.com/30417590/57549226-f48cbf80-7330-11e9-8394-0bab2d3368c1.png',\n  'https://user-images.githubusercontent.com/30417590/57549266-0d957080-7331-11e9-8d84-99e5a323345b.png',\n  'https://user-images.githubusercontent.com/30417590/57549287-21d96d80-7331-11e9-8951-a2934a2fc723.png',\n  'https://user-images.githubusercontent.com/30417590/57549304-30278980-7331-11e9-8285-eeb1110c89c7.png',\n  'https://user-images.githubusercontent.com/30417590/57549331-40d7ff80-7331-11e9-8dbd-c82a0653cc0f.png'\n]\nshowTheseAttributes: [\n  'story',\n  'responsibility',\n  'technologies'\n]"}

/***/ }),

/***/ "./app/data/projects/tmmnews.md":
/*!**************************************!*\
  !*** ./app/data/projects/tmmnews.md ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"number":5,"projectName":"TMMnews","pitch":"Video news stories about media-tech","type":"Founder","technologies":"Cloud: WordPress ∙ Language: JavaScript, HTML, CSS","responsibility":"As the founder of Three Minute Media, I oversaw corporate affairs and platform development, including budgets, our product lead, and investor outreach.","story":"TMMnews was a video news site. The goal was to sell video ads inside stories that were widely distributed by using online ad networks to buy lower-cost ad slots.","captions":["TMMnews was a dedicated home for video stories about media-tech. The site featured original videos, reporter's notes, and aggregated headlines from Daylife, a New York-based start-up.","Original news stories were anchored by James Erik Abels, a former media reporter from Forbes and Mergermarket. Over 100 stories were produced, ranging from exclusives to news analyses.","In 2011, TMM was asked to contribute to New York City's FIRST Robotics Competition. A team of ten media professionals volunteered to run a three-hour live Internet broadcast of the event."],"projectThumbnail":["https://user-images.githubusercontent.com/30417590/56821255-d052be00-681b-11e9-93d4-51c96d3413e2.png","https://user-images.githubusercontent.com/30417590/56821273-d8126280-681b-11e9-98fc-b3f85c964a17.png","https://user-images.githubusercontent.com/30417590/56821292-e19bca80-681b-11e9-9a3b-3792c98e31c3.png"],"full":["https://user-images.githubusercontent.com/30417590/56821257-d21c8180-681b-11e9-9507-c10972d82474.png","https://user-images.githubusercontent.com/30417590/56821279-db0d5300-681b-11e9-9ea1-861afa45b95b.png","https://user-images.githubusercontent.com/30417590/56821339-ff692f80-681b-11e9-9d6a-e9ecc0802d44.png"],"zoomed":["https://user-images.githubusercontent.com/30417590/57549472-a3c99680-7331-11e9-8f43-458bf8f39255.png","https://user-images.githubusercontent.com/30417590/57549491-b17f1c00-7331-11e9-9345-32768b78d652.png","https://user-images.githubusercontent.com/30417590/57549513-bc39b100-7331-11e9-886e-3b473660e926.png"],"showTheseAttributes":["story","responsibility","technologies"]},"body":"","frontmatter":"number: \n  5\nprojectName: \n  'TMMnews'\npitch: \n  'Video news stories about media-tech'\ntype:\n  'Founder'\ntechnologies: \n  'Cloud: WordPress ∙ Language: JavaScript, HTML, CSS'\nresponsibility:\n  'As the founder of Three Minute Media, I oversaw corporate affairs and platform development, including budgets, our product lead, and investor outreach.'\nstory:\n  'TMMnews was a video news site. The goal was to sell video ads inside stories that were widely distributed by using online ad networks to buy lower-cost ad slots.'\ncaptions: [\n  \"TMMnews was a dedicated home for video stories about media-tech. The site featured original videos, reporter's notes, and aggregated headlines from Daylife, a New York-based start-up.\",\n  'Original news stories were anchored by James Erik Abels, a former media reporter from Forbes and Mergermarket. Over 100 stories were produced, ranging from exclusives to news analyses.',\n  \"In 2011, TMM was asked to contribute to New York City's FIRST Robotics Competition. A team of ten media professionals volunteered to run a three-hour live Internet broadcast of the event.\"\n]\nprojectThumbnail: [\n  'https://user-images.githubusercontent.com/30417590/56821255-d052be00-681b-11e9-93d4-51c96d3413e2.png',\n  'https://user-images.githubusercontent.com/30417590/56821273-d8126280-681b-11e9-98fc-b3f85c964a17.png',\n  'https://user-images.githubusercontent.com/30417590/56821292-e19bca80-681b-11e9-9a3b-3792c98e31c3.png'\n]\nfull: [\n  'https://user-images.githubusercontent.com/30417590/56821257-d21c8180-681b-11e9-9507-c10972d82474.png',\n  'https://user-images.githubusercontent.com/30417590/56821279-db0d5300-681b-11e9-9ea1-861afa45b95b.png',\n  'https://user-images.githubusercontent.com/30417590/56821339-ff692f80-681b-11e9-9d6a-e9ecc0802d44.png'\n]\nzoomed: [\n  'https://user-images.githubusercontent.com/30417590/57549472-a3c99680-7331-11e9-8f43-458bf8f39255.png',\n  'https://user-images.githubusercontent.com/30417590/57549491-b17f1c00-7331-11e9-9345-32768b78d652.png',\n  'https://user-images.githubusercontent.com/30417590/57549513-bc39b100-7331-11e9-886e-3b473660e926.png',\n]\nshowTheseAttributes: [\n  'story',\n  'responsibility',\n  'technologies'\n]"}

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
	"./03-30-2019-randomly-choosing-web-image-formats.md": "./app/data/reveries/03-30-2019-randomly-choosing-web-image-formats.md",
	"./04-13-2019-when-css-styles-break.md": "./app/data/reveries/04-13-2019-when-css-styles-break.md",
	"./04-17-19-the-imperfections-of-browser-testing-one.md": "./app/data/reveries/04-17-19-the-imperfections-of-browser-testing-one.md",
	"./04-18-19-the-imperfections-of-browser-testing-two.md": "./app/data/reveries/04-18-19-the-imperfections-of-browser-testing-two.md",
	"./06-17-19-private-methods.md": "./app/data/reveries/06-17-19-private-methods.md",
	"./06-19-19-netflix-survey.md": "./app/data/reveries/06-19-19-netflix-survey.md",
	"./06-23-19-alexa-off.md": "./app/data/reveries/06-23-19-alexa-off.md"
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

module.exports = {"attributes":{"type":"reverie","headline":"Welcome to Reverie","date":"March 2, 2019","slug":"Let's slip away"},"body":"\nHi. Welcome to Reverie.\n\nI'm not entirely sure what this is, but here's what it's not:\n\n* A click-bait machine\n* Something terribly serious\n* A place for regular commentary\n\nHere's what it may be:\n\nA spot for a few thoughts about whatever momentarily inspires me. That should keep it light, although, I have a couple longer pieces I'd like to do about things like:  \n\n* The state of broadcast TV Web sites\n* Some thoughts on Netflix and Amazon Prime\n* A question about privacy options on smartphones\n\nHere's how it works:\n\n* Reverie is accessed through the footer, not header, because it's like a daydream — irregular and ancillary to the site.\n* Clicking Reverie from Reverie will take you back to whereever you were before it. If you came directly here, you'll go home.\n* I built this from scratch. It's an actual, real-life, home-grown blog. Half the point was to figure out how to do it. I'll write about that soon-ish.\n\nWhat about social sharing and the like?\n\nWell, let's see if I keep this up and if anyone reads, then I can explore. \n\nWhat about Medium, where all the cool kids write these days?\n\nMeh. Something to be said for going old school, for now.\n\nThat's it. Look around. Email me. Enjoy.\n\n-j","frontmatter":"type: reverie\nheadline: Welcome to Reverie\ndate: March 2, 2019\nslug: Let's slip away"}

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

/***/ "./app/data/reveries/03-30-2019-randomly-choosing-web-image-formats.md":
/*!*****************************************************************************!*\
  !*** ./app/data/reveries/03-30-2019-randomly-choosing-web-image-formats.md ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"3ype":"reverie","headline":"A groan about Web image formats","date":"March 30, 2019","slug":"Randomly choosing Web images"},"body":"\nFile Web images under life's great mysteries.\n\nI wanted my icon files — which I use for chapter and menu buttons — to be as small as possible. According to Google's guide to Web images, the best format for them is JPG. See the picture under [\"Selecting the right image format\"](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization).\n\nGoogle says that among rasters (files that encode color values for every pixel), JPG is great for images with few details and small color palettes.\n\nNow, let's look at practical reality. \n\nThe chapter icon (a filled-in circle image) is eight pixels by eight pixels and uses one color. This results in the following file sizes:\n\n* SVG (Inkscape): 2 kilobytes\n* SVG (Optimized): 722 bytes (Inkscape-specific data is stripped out)\n* JPG: 966 bytes (Exported from a PNG using the worst quality setting in a Mac's \"Preview\" app)\n* PNG: 674 bytes\n\nI went with PNG, obviously. \n\nSo, firstly, knowing what's best upfront may be clearer with more knowledge and experience. \n\nSecondly, look at the SVG. It uses plain English to describe how images should look (like HTML does for Web pages). Its two kilobytes no matter the image's size. If it got bigger, this format would be great becuse the file would still be two kilobytes. In this case, the image is fixed at eight pixels, so I don't think it matters. \n\nAnyway, point is that it all basically came down to guessing. Who needs the article?\n\n-j\n","frontmatter":"3ype: reverie\nheadline: A groan about Web image formats\ndate: March 30, 2019\nslug: Randomly choosing Web images"}

/***/ }),

/***/ "./app/data/reveries/04-13-2019-when-css-styles-break.md":
/*!***************************************************************!*\
  !*** ./app/data/reveries/04-13-2019-when-css-styles-break.md ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"type":"reverie","headline":"When CSS styles break","date":"April 13, 2019","slug":"Styled components are unchangeable"},"body":"\nLost four hours last night.\n\nFor some reason, I stopped being able to modify the site's CSS. I was fixing some overflowing header text on my iPhone SE. I practically screamed in public, banged some keys, and felt marginally better. \n\n\nThing was, I was almost done. I was tweaking design and getting production and development 'builds' in order. Basically, this means telling Webpack to generate different types of code based on the build type. Webpack 'bundles' javascript files together so a user's machine can run them.\n\nAnyway, in the middle of all this, my CSS stopped working. Or at least my ability to edit it on the fly did. Chrome just greyed out all the rules. Googling the problem was heartbreaking. Most commentary called it a stylesheet error. There's a workaround, but it's a hack. And, anyway, a portfolio site can't be broken.\n\nSo I started futzing about. First I created a bunch of new branches from old code (a branch is a complete set of folders, files, and code that represent my entire project at a given point in time). I hoped to find one where the CSS worked. \n\nDidn't. \n\nSo then I disabled most of my code and threw a plain box of text on screen. That worked, sorta, so I got suspicous of Styled Components.\n\nStyled Components is an open-source javascript project. It lets me write CSS rules directly inside my javascript, as opposed to putting them in a separate stylesheet. I started the site with one of these stylesheets. I spent half my time maintaining it — debugging it, making stuff work, getting lost inside it at some later date.\n\nI'd like to say I'll never do that again, but I'm sure lots of people still use stylesheets. And suffer. Anyway, I began Googling again for greyed out CSS rules in Chrome when using Styled Components. And I [found my diagnosis](https://stackoverflow.com/questions/51544215/styled-component-styles-are-disabled-in-chrome-devtools).\n\nWhen in production mode, Styled Components create a type of CSS that can't be edited in Chrome. It can only be edited when in development mode. Remember what I said earlier, I'd been messing around with this very thing the last couple days. So, I changed some code — no joy. \n\nI changed more code — no joy.\n\nA lot of painful time went by before I had another brainstorm. I'm doing something really smart with my production build. I'm using a \"content delivery network\" (CDN) to deliver some of the site's dependencies, rather than bundling them all together into a package that I deliver. I'll explain why later (hint: bandwidth usage limits). \n\nPoint is, I told the CDN to deliver a production version of Styled Components. I hard coded it (which devs don't like for a reason). And that's my problem! \n\nLessons learned:\n\n1. Managing production and development builds requires thoughtfulness.\n2. Clever ideas may not be so clever (remember that scene at the end of \"Miracle on 34th Street\" when Fred Gailey sees Santa's cane?)\n3. Documentation tends to fall down when it comes to the fundamentals — I can't find this issue on the Styled Components site. If it's there, it's hard to find. I think it should be front-and-center in a \"Gotchas\" section.\n\nAnyway, there's more to say...but I think I've milked this for all it's worth.\n\n-j","frontmatter":"type: reverie\nheadline: When CSS styles break\ndate: April 13, 2019\nslug: Styled components are unchangeable"}

/***/ }),

/***/ "./app/data/reveries/04-17-19-the-imperfections-of-browser-testing-one.md":
/*!********************************************************************************!*\
  !*** ./app/data/reveries/04-17-19-the-imperfections-of-browser-testing-one.md ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"type":"reverie","headline":"The imperfections of browser testing, one","date":"April 17, 2019","slug":"Virtual machines may lie, really"},"body":"\nWhite flag!\n\nBrowserStack says my design is breaking on some old machines. It took a long time, but I finally realized that a second, hidden scrollbar is being added to the right side of the screen. This element allows users to scroll content when it's too long for the page. \n\nThe hidden scrollbar creates an ugly gap, and brings up two questions: \n\n1. Are virtual machines always true to reality?\n2. Does React always understand what browsers are doing?\n\nNow, I don't know anything much about anything much. Worse, sometimes I find out that I'm wrong. But I'm pretty sure the answer is no, no, it depends, and, at least occasionally, no. Always cover your bets.\n\nI. Are virtual machines always true to reality?\n\nA virtual machine allows you to run an entire computer that isn't yours on top of your computer. So, for example, I can run Windows XP in a virtual machine while also running OS X on my Mac.\n\nThis allows me to test a lot of browsers without spending bazillions on equipment. I'm not doing this directly. BrowserStack has made a whole bunch of virtual machines for me (or, at least, this is my understanding of what's going on). That's what $39/month gets you.\n\nSo the question is, can I trust what these machines are telling me about my site's design? Most of the time, \"yes,\" but not always.\n\nProof, right? \n\nAfter seeing the hidden scrollbar on a whole bunch of virtual machines running Mac OS and Windows, I tried one running Chrome 73 on Mac OS X High Sierra. \n\nSure enough, the hidden scrollbar appeared.\n\nExcept— my real-life computer is a Macbook Air running OS X High Sierra and Chrome 73. There's no hidden scrollbar on it.\n\nNONE. ZERO. ZILCH!\n\nMethinks the virtual machine doth protest too much. Hard to tell because I can't buy all these machines to test them. Still, the world's funny: I had the original Macbook Air and I read once that Apple built a special version of OS X for it. This version had its own quirks (sadly — it was a lousy machine).\n\nMaybe I'm confronting the same situation here, my 13'ers little quirk.\n\nBut...I've a feeling it's a nonexistent problem.\n\nTime'll tell.\n\n-j\n","frontmatter":"type: reverie\nheadline: The imperfections of browser testing, one\ndate: April 17, 2019\nslug: Virtual machines may lie, really"}

/***/ }),

/***/ "./app/data/reveries/04-18-19-the-imperfections-of-browser-testing-two.md":
/*!********************************************************************************!*\
  !*** ./app/data/reveries/04-18-19-the-imperfections-of-browser-testing-two.md ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"type":"reverie","headline":"The imperfections of browser testing, two","date":"April 18, 2019","slug":"React lies too sometimes"},"body":"\nNow it's React's turn. This was a mind-boggling trip through \"The Twilight Zone.\"\n\nII. Does React always understand what browsers are doing?\n\nReact is a free javascript framework from Facebook that makes it easy for Web developers to build slick software. It makes it easy to use javascript to generate HTML and update it in real time as users interact with a program. This makes it feel less like CNN.com more like Microsoft Word.\n\nReact has a lot of opinions about how to program software.\n\n(It also has an army of followers who have equally strong opinions about it. I'll belabor the whole thing as soon as I know enough to have an opinion about why it's so horrible to have an opinion.)\n\nAnyway, people refer to React's opinions as \"the React way.\" \n\nSticking to it seems to be a good idea. Fighting it often leads to trouble. \n\nStill, the React way isn't always good enough. That's where \"refs\" come in. \n\nReact's official documentation calls them an \"escape hatch.\" They give you a way to reach under React's hood and work with HTML directly. The general idea is that React sits between your code and the Web page. React calculates values, imagines the result, and then paints the completed picture to screen when done.\n\nUnfortunately, I ran into weird and bizarre problems with this. Remember my problem:\n\nAccording to my eyes, there's a 17px gap between page content and the on-screen scroll bar. This gap shouldn't be there. I believe it represents a second hidden scrollbar that only shows up on BrowserStack's virtual machines. My initial idea was to identify these \"narrow\" elements and force them to widen by dynamically calculating the missing width so I could add it back into the element.\n\nSo I added \"refs\" to my elements, and examined their .offsetWidth and .getBoundingClientRect() properties to determine their width. \n\nHere's the problem — both properties reported that the offending element was correctly sized. My eyes tell me this isn't true. Sigh.\n\nSo what gives?! I'm not entirely sure.\n\nI think it's a painting problem. React generates HTML behind the scenes, imagines the results, then paints it to screen. The width is right at the time of generation. Unfortunately, React doesn't seem to see what happens AFTER the paint.\n\nI'm pretty sure because someone on StackOverflow lead me to this [issue on the React development site](https://github.com/facebook/react/issues/2659). \n\nSomeone suggested trying to use requestAnimationFrame() as an alternative. It runs after HTML has been painted to screen by the browser. \n\nSuffice it to say, this didn't work. Neither did any of the other things I tried over the course of, what, a two week period of time?\n\nGiven the last post's conclusion on virtual machines, I've decided to chalk this up to a ghost in the machine.\n\nIn other words, I give up. Who you gonna call?\n\n-j\n","frontmatter":"type: reverie\nheadline: The imperfections of browser testing, two\ndate: April 18, 2019\nslug: React lies too sometimes"}

/***/ }),

/***/ "./app/data/reveries/06-17-19-private-methods.md":
/*!*******************************************************!*\
  !*** ./app/data/reveries/06-17-19-private-methods.md ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"type":"reverie","headline":"JavaScript bullies and private methods","date":"June 17, 2019","slug":"It's my code, I can do what I want to"},"body":"\nIn \"developer world,\" how do you ebb and flow between your natural predisposition and the realities of what others want?\n\nThis question hit me in the face recently. I'd done something with my JavaScript that I liked. Then I read that other people don't. \n\nBasically, I wanted to make some of my code's methods and properties \"private,\" meaning limit them to certain places. For instance, my Location class has a \"path\" property that should only be used inside of it. So, I took some Stack Overflow advice and put an underscore in front of \"path\", creating \"_path\", to remind myself not to use it outside the Location class. Works for me.\n\nBut not for everyone. \n\nI recently [ran into a discussion](https://www.crockford.com/code.html) that said JavaScript developers shouldn't use the underscore because it looks amateurish. The reason is that it doesn't work. Not really. JavaScript doesn't care if I break the promise and use \"_path\" outside the Location class. Apparently, some langauges do.\n\nTo be clear, JavaScript's loosy goosy nature doesn't really bother me.\n\nBut, what if most developers are underscore haters? \n\nI figured I should check myself before I wreck my site fixing something that isn't broken. So I emailed Omri Bernstein, my Fullstack instructor, to get his take. His response was so good I'm including an edited version here:\n\n>The Web site you sent me [about \"underscore prefixing\" doesn't seem](https://www.crockford.com/code.html) to be talking about ES5 JavaScript....\n\n>Anyways, I think that using closures instead of prefixed underscores is a viable option in some circumstances, but classes in particular (e.g. a \"private\" class methods) don’t really lend themself to such a solution, including ES5 classses. I mean you can, but it either doesn’t [involve prototype methods at all](https://stackoverflow.com/a/55637), [looks kinda yucky](https://modernweb.com/private-variables-in-javascript-with-es6-weakmaps/), or is [not-yet-fully-agreed-upon](https://github.com/tc39/proposal-private-methods)....\n\n>My feeling is that \"underscore prefixing\" is a reasonable convention for class methods. And if you’re going to break the \"no-underscore prefixing\" rule for classes, my feeling is you might as well not have the rule at all. That being said, a \"better\" (in my opinion) version of underscore prefixing is to [use symbols for private methods](http://2ality.com/2016/01/private-data-classes.html) (number four). It’s technically not private, but is difficult to accidentally access outside the class definition....\n\nMore homework — symbols. Oh well. Thanks Omri!\n\n-j","frontmatter":"type: reverie\nheadline: JavaScript bullies and private methods\ndate: June 17, 2019\nslug: It's my code, I can do what I want to"}

/***/ }),

/***/ "./app/data/reveries/06-19-19-netflix-survey.md":
/*!******************************************************!*\
  !*** ./app/data/reveries/06-19-19-netflix-survey.md ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"type":"reverie","headline":"Say it ain't so, Netflix","date":"June 19, 2019","slug":"Netflix wouldn't let me take its survey"},"body":"\nNetflix rejected me today.\n\nThe company had just sent me a survey request. I'd get a free month for every survey I take. I qualified for three daily surveys and would get a bonus month if I did them all. COOL!\n\nLet's do it.\n\nNetflix asked me my name, rank, and serial number.\n\nThen it asked what I do. I clicked software development.\n\nThe survey ended on the next screen. \n\nWhere's the collegiality, the intellectual curiosity, the trust? \n\nSay it ain't so, Netflix! Say it ain't so!\n\n-j\n","frontmatter":"type: reverie\nheadline: Say it ain't so, Netflix\ndate: June 19, 2019\nslug: Netflix wouldn't let me take its survey"}

/***/ }),

/***/ "./app/data/reveries/06-23-19-alexa-off.md":
/*!*************************************************!*\
  !*** ./app/data/reveries/06-23-19-alexa-off.md ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"type":"reverie","headline":"Alexa, turn yourself off","date":"June 23, 2019","slug":"Make Alexa to turn herself off"},"body":"\nI taught Alexa to turn herself off last night. \n\nThe idea comes courtesy of my friend John Loconsolo.\n\nI have an Echo Show 2. I got it as a freebie from Amazon because I published a second Alexa skill just after the Show 2 launched. \n\nLike a lot of people, I think Alexa's cool, but I don't like wondering if she's listening even when she's not supposed to be. So here's what I did. I got a smartplug and named it \"yourself.\" Then I plugged the Echo Show into it. Then I paired it with Alexa. It took about ten minutes. \n\nNow I can say \"Alexa, turn yourself off.\" And she does! Thanks, John!\n\n-j\n","frontmatter":"type: reverie\nheadline: Alexa, turn yourself off\ndate: June 23, 2019\nslug: Make Alexa to turn herself off"}

/***/ }),

/***/ "./app/data/reveries/index.js":
/*!************************************!*\
  !*** ./app/data/reveries/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((function () {
  var context = __webpack_require__("./app/data/reveries sync recursive \\.md$");

  return context.keys().map(function (key) {
    return context(key);
  }).sort(function (a, b) {
    var dateA = new Date(a.attributes.date);
    var dateB = new Date(b.attributes.date);
    return dateB - dateA;
  });
})());

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((function () {
  var context = __webpack_require__("./app/data/the-story sync recursive \\.md$");

  var keys = context.keys();
  return keys.map(function (key) {
    return context(key);
  }).sort(function (a, b) {
    return a.attributes.number - b.attributes.number;
  });
})());

/***/ }),

/***/ "./app/data/the-story/story-chapter-four.md":
/*!**************************************************!*\
  !*** ./app/data/the-story/story-chapter-four.md ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"Practical magic","image":"https://user-images.githubusercontent.com/30417590/55294138-43f3dd80-53cc-11e9-96c2-3c7f2977c24a.jpg","number":4},"body":"\nThe Six train sped through darkness.\n\nThe young man climbed out at Wall Street. Financial magicians thronged the way as he snaked through back alleys toward Hanover Square. \n\nA white tower soared skyward. \n\n\"Coding school,\" he said. \n\nEleven flights up, the young man logged into practical magic. \n\nComputer code covered screens across the floor. It was smart and austere, but lacked something important. \n\n\"Purpose,\" he said, leaning toward the logic on screen.\n\nWhen he looked up, he stared out at a city drenched in warm autumn light. A small blur zipped across the horizon, neon trailing behind it. The young man smiled to himself. \n\n\"Software is a story,\" he said. \"Code the way to tell it.\"\n\nMemories of impractical magic washed over him as code filled his screen in pixelated color. \n\nTime melted away. Hours later, as the young man slept, the fairy hung over her old friend. She peeked into his dreams and spied far-off lands. There were Jinns, and more fairies, and desert sands— all within reach of his outstretched hands.\n\nDelighted, she flit to the gold lamp beside him. It bathed the room in purple light. \"Yoo-hoo,\" she sang inside, a mischievious smile spreading across her face.\n\nTime again for adventure.\n","frontmatter":"title: 'Practical magic'\nimage: 'https://user-images.githubusercontent.com/30417590/55294138-43f3dd80-53cc-11e9-96c2-3c7f2977c24a.jpg'\nnumber: 4"}

/***/ }),

/***/ "./app/data/the-story/story-chapter-one.md":
/*!*************************************************!*\
  !*** ./app/data/the-story/story-chapter-one.md ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"A magic quest","image":"https://user-images.githubusercontent.com/30417590/55294138-43f3dd80-53cc-11e9-96c2-3c7f2977c24a.jpg","number":1},"body":"\nThe cardboard fort crumbled.\n\nIt was destroyed by a small fairy zipping through the wide-eyed boy's window with all the force of a cannonball. A neon streak twinkled behind her as she hovered amidst the mess. She looked the boy up and down and nodded.\n\n\"Want to find a magic lamp,\" she asked, floating eye-level. \n\nThe boy burst with delight.\n\n\"Of course,\" he shrieked. \"What should I do?\"\n\nA coy grin spread across the fairy's bright face, filling the room with magic. \n\nIt soon separated the boy from gravity's grasp. The sprite then raced to grab his hand before he could settle back to the floor. Out the window they went, flying high, over the moon, toward her home — a magical land of grand adventure. \n\nBy day, they searched for the magic lamp, soaring over pirate ships and chasing Jinns across sun-drenched sands. By night, they told amazing stories about the day's big adventures, each competing to tell taller tales. It was wonderful.\n\nThen, one night, when it was already late, the fairy sighed. \n\n\"You're growing up,\" she said. \"Time to go back.\" \n\nThe boy began to sniffle.\n\nShe smiled kindly, then knocked twice on the floor between them. A secret door opened. She dove in, disappearing for what seemed like hours. The boy's eyes were heavy when she flew out, clutching the very thing they'd sought — a glowing gold lamp that was etched by purple incantations. \n\n\"The adventure,\" she said, \"matters most.\" \n\nShe gazed fondly at her young friend, then read one aloud. \"In bright day or black night, through tall tale and purple light, rub me twice and release my might, if...\" \n\nToo late. He was out.\n","frontmatter":"title: 'A magic quest'\nimage: https://user-images.githubusercontent.com/30417590/55294138-43f3dd80-53cc-11e9-96c2-3c7f2977c24a.jpg\n# image: '/fantasy-scene-with-blue-dragon-treasure-chest-and-pile-of-golden-coins-d-illustration-707801968.jpg'\nnumber: 1"}

/***/ }),

/***/ "./app/data/the-story/story-chapter-three.md":
/*!***************************************************!*\
  !*** ./app/data/the-story/story-chapter-three.md ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"The reality glitch","image":"https://user-images.githubusercontent.com/30417590/55294138-43f3dd80-53cc-11e9-96c2-3c7f2977c24a.jpg","number":3},"body":"\nThe young man's room twinkled one morning.\n\nDust, scattered high by a broom, was catching the sun's pale winter light. The quiet was soon pierced by the hollow ring of the broom brushing metal. \n\nThe young man knelt to grab it.\n\n\"I forgot about you,\" he said, twice tracing the lamp's dusty etchings with a finger. Something about the motion made him feel light and excited.\n\nHe was right to be giddy. \n\nReality began to glitch. Clear red rays shot between particles of dust, drawing a giant Jinn into view. \n\n\"You've forgotten my secret,\" it boomed. \n\nMenace filled the room. Impulse pulled the young man toward bedsheets while pride kept him still. \n\n\"I have not,\" he said, memory stirring. \"I've rubbed you twice, I've released your might!\" \n\nThe logic seemed sound, but the Jinn was unmoved. Blue sparks began dancing around the mysterious creature. So the young man raised his fists, ready for a fight he couldn't win, but wouldn't duck.\n\nAll seemed lost. And then— \n\nA little fairy blurred to an unexpected stop between them.\n\nShe yelled at the Jinn, banging its nose with a tiny fist. The Jinn, at first amazed, roared with laughter. The young man stared slack jawed at the impossible sight. \n\nA strong purple glow suddenly lit the lamp, which lay forgotton on the floor. \n\nIt charged the room with possibility, filling the young man with hopes and dreams of anything and everything. This was magic.\n\nThe Jinn drank it in — slaking an almost unquenchable thirst — then struck hands together. Sleep came to the young man as time shattered and crashed to the floor. He was startled awake hours later by the rumble of thunder. \n\nA coding school Web site glowed on the computer beside him. \n\nFate, ever changing, was sealed anew.\n","frontmatter":"title: 'The reality glitch'\nimage: 'https://user-images.githubusercontent.com/30417590/55294138-43f3dd80-53cc-11e9-96c2-3c7f2977c24a.jpg'\nnumber: 3"}

/***/ }),

/***/ "./app/data/the-story/story-chapter-two.md":
/*!*************************************************!*\
  !*** ./app/data/the-story/story-chapter-two.md ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"True adventure","image":"https://user-images.githubusercontent.com/30417590/55294138-43f3dd80-53cc-11e9-96c2-3c7f2977c24a.jpg","number":2},"body":"\nThe boy woke at home the next day. \n\nThe gold lamp sat on his bedside table. He looked at it. \n\n\"Why do you glow purple,\" he asked, hoping for a sign. There was none. \n\nSo he got on with life. He became a lawyer, then a journalist. He covered media, technology, and venture capital as a staff reporter for Forbes and others.\n\nBut — no matter what he did — he kept the lamp nearby. \n\n\"Why do you get brighter when I tell stories,\" he'd ask aloud sometimes.\n\nThe lamp never answered. It was, after all, just a lamp. That was fine. The mystery of its glow promised adventure. And the boy loved adventure. \n\nSo it's no surprise that he got to work the day he befriended a software developer. They were soon building their own software platforms. \n\nOne ran interactive video networks, the other, silky smooth global software demos. The boy pitched them tirelessly and in many different ways. \n\nBut neither took, and he slowly grew tired of the tale. \n\nAs he did, the lamp's purple glow grew dim. \n\nOne night, as the boy tossed and turned, he knocked the lamp to the floor. It rolled beneath its table, dark and forgotten.\n","frontmatter":"title: 'True adventure'\nimage: 'https://user-images.githubusercontent.com/30417590/55294138-43f3dd80-53cc-11e9-96c2-3c7f2977c24a.jpg'\nnumber: 2"}

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
/* harmony import */ var _FooterAlert_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterAlert.jsx */ "./app/header-footer/FooterAlert.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../primitives/StyledLink.jsx */ "./app/primitives/StyledLink.jsx");





var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].footer.withConfig({
  displayName: "Footer__Container",
  componentId: "sc-13gwbe8-0"
})(["flex-shrink:0;display:flex;justify-content:", ";align-items:center;height:55px;font-size:", ";position:relative;width:100%;max-width:70rem;"], function (p) {
  return !p.story ? 'flex-end' : 'space-between';
}, function (p) {
  return p.theme.fontSizes.one;
});
var Line = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Footer__Line",
  componentId: "sc-13gwbe8-1"
})(["display:", ";position:absolute;z-index:1;left:25px;right:25px;top:0px;margin:0px;height:1px;background-color:", ";@media (min-width:", "){left:5px;right:5px;}"], function (p) {
  return p.home || p.hide ? 'none' : '';
}, function (p) {
  return p.theme.colors.pink;
}, function (p) {
  return p.theme.mediaQueries.desktop;
});
var StoryButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_shared_Button_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]).withConfig({
  displayName: "Footer__StoryButton",
  componentId: "sc-13gwbe8-2"
})(["color:white;margin-left:25px;background-color:", ";width:65px;padding:7px;"], function (p) {
  return !p.active ? p.theme.colors.pink : p.theme.colors.blue;
});
var RestyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "Footer__RestyledLink",
  componentId: "sc-13gwbe8-3"
})(["margin-right:20px;"]);
var Graf = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "Footer__Graf",
  componentId: "sc-13gwbe8-4"
})(["cursor:pointer;margin-right:", ";margin-bottom:0px;color:", ";padding-top:5px;padding-bottom:5px;padding-right:5px;font-weight:400;font-size:", ";"], function (p) {
  return !p.isLink ? '20px' : '';
}, function (p) {
  return p.active ? p.theme.colors.pink : !p.home ? p.theme.colors.blue : p.theme.colors.white;
}, function (p) {
  return p.theme.fontSizes.one;
});
var TextBox = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Footer__TextBox",
  componentId: "sc-13gwbe8-5"
})(["display:flex;z-index:1;flex:1;justify-content:flex-end;"]);
function FooterContainer(props) {
  var appState = props.appState,
      boundHandleClickForApp = props.boundHandleClickForApp;
  var currentCaller = appState.currentCaller,
      lastCaller = appState.lastCaller,
      showBusinessCard = appState.showBusinessCard,
      showLegalTerms = appState.showLegalTerms,
      showStoryText = appState.showStoryText;

  var eventHandlerToToggleBusinessCard = function eventHandlerToToggleBusinessCard() {
    return boundHandleClickForApp('toggleBusinessCard');
  };

  var eventHandlerToToggleLegalTerms = function eventHandlerToToggleLegalTerms() {
    return boundHandleClickForApp('toggleLegalTerms');
  };

  var isReverie = currentCaller === 'reverie';
  var isStory = currentCaller === 'chapter';
  var isHome = currentCaller === 'home';
  var reverieLink = isReverie ? "/".concat(lastCaller !== 'home' ? lastCaller : '' // Add no text b/c 'home' is just a '/'
  ) : '/reverie';
  var callerWillBe = reverieLink.length > 1 ? reverieLink.slice(1) : 'home'; // It's 'home' when the address is '/'

  var eventHandlerForStoryButton = function eventHandlerForStoryButton() {
    return boundHandleClickForApp('toggleStoryText');
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
    home: isHome,
    story: isStory,
    reverie: isReverie,
    storyPicActive: !showStoryText
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Line, {
    home: isHome,
    hide: !showStoryText && !isReverie,
    showStoryText: showStoryText
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StoryButton, {
    active: showStoryText,
    clickFunction: eventHandlerForStoryButton,
    className: "story-button",
    conditional: true,
    show: isStory,
    text: showStoryText ? 'See it!' : 'Read it!'
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_FooterAlert_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], props), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextBox, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RestyledLink, {
    to: reverieLink,
    callerWillBe: callerWillBe,
    boundHandleClickForApp: boundHandleClickForApp
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Graf, {
    active: isReverie && 'active' || undefined,
    isLink: true,
    home: isHome
  }, "Reverie")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Graf, {
    active: showBusinessCard,
    onClick: eventHandlerToToggleBusinessCard,
    home: isHome
  }, "Contact"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Graf, {
    active: showLegalTerms,
    onClick: eventHandlerToToggleLegalTerms,
    home: isHome
  }, "Legal")));
}

/***/ }),

/***/ "./app/header-footer/FooterAlert.jsx":
/*!*******************************************!*\
  !*** ./app/header-footer/FooterAlert.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterAlert; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var AlertText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "FooterAlert__AlertText",
  componentId: "b4mqn9-0"
})(["display:", ";margin-bottom:0px;margin-left:25px;color:", ";z-index:", ";"], function (p) {
  return !p.footerAlert && 'none';
}, function (p) {
  return !p.isHome ? p.theme.colors.pink : p.theme.colors.white;
}, function (p) {
  return p.isHome && '1';
});
function FooterAlert(props) {
  var _props$appState = props.appState,
      currentCaller = _props$appState.currentCaller,
      footerAlert = _props$appState.footerAlert;
  var isHome = currentCaller === 'home';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AlertText, {
    isHome: isHome,
    footerAlert: footerAlert
  }, "\u26A0\uFE0F Slide up slowly to use these buttons!");
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
/* harmony import */ var _data_home_home_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/home/home.md */ "./app/data/home/home.md");
/* harmony import */ var _data_home_home_md__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_home_home_md__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/ClickHandling.js */ "./app/classes/ClickHandling.js");
/* harmony import */ var _public_header_nav_open_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/header-nav-open.png */ "./public/header-nav-open.png");
/* harmony import */ var _public_header_nav_open_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_header_nav_open_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_header_nav_closed_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/header-nav-closed.png */ "./public/header-nav-closed.png");
/* harmony import */ var _public_header_nav_closed_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_header_nav_closed_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _classes_Location_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/Location.js */ "./app/classes/Location.js");
/* harmony import */ var _shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Mapper.jsx */ "./app/shared/Mapper.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../classes/Referrer.js */ "./app/classes/Referrer.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../primitives/StyledLink.jsx */ "./app/primitives/StyledLink.jsx");
/* harmony import */ var _primitives_UnorderedList_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../primitives/UnorderedList.jsx */ "./app/primitives/UnorderedList.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












var headerLinks = [{
  name: 'About',
  path: '/about'
}, {
  name: 'Projects',
  path: '/projects'
}, {
  name: 'Journalism',
  path: '/journalism'
}, {
  name: 'A not-so-true story',
  path: '/chapter'
}];
var fontWeight = '500';
var Container = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].header.withConfig({
  displayName: "Header__Container",
  componentId: "sc-1rxr5md-0"
})(["color:", ";flex-shrink:0;z-index:2;height:52px;display:flex;justify-content:", ";align-items:center;width:100%;max-width:75rem;"], function (p) {
  return p.theme.colors.white;
}, function (p) {
  return p.isHome ? 'center' : undefined;
});
var HeaderBackground = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Header__HeaderBackground",
  componentId: "sc-1rxr5md-1"
})(["position:absolute;width:100%;height:52px;top:0px;left:0px;background-color:", ";z-index:-1;"], function (p) {
  return !p.hide ? p.theme.colors.darkPink : '';
});
var RestyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])( // Filter out isHome and isActive from StyledLink
// eslint-disable-next-line
function (_ref) {
  var isHome = _ref.isHome,
      isActive = _ref.isActive,
      rest = _objectWithoutProperties(_ref, ["isHome", "isActive"]);

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], rest);
}).withConfig({
  displayName: "Header__RestyledLink",
  componentId: "sc-1rxr5md-2"
})(["font-size:", ";font-weight:", ";margin-left:", ";color:", ";font-weight:", ";&&{text-decoration:", ";}@media (min-width:", "){margin-left:", ";font-size:", ";}"], function (p) {
  return p.theme.fontSizes.twentyOne;
}, function (p) {
  return p.isHome && '400';
}, function (p) {
  return p.num === 0 ? '0px' : '10px';
}, function (p) {
  return p.theme.colors.white;
}, fontWeight, function (p) {
  return p.isActive ? 'underline' : undefined;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.num === 0 ? '0px' : '15px';
}, function (p) {
  return !p.isHome ? p.theme.fontSizes.six : p.theme.fontSizes.three;
});
var NameAsLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])( // Filter out hide from RestyledLink
// eslint-disable-next-line
function (_ref2) {
  var hide = _ref2.hide,
      rest = _objectWithoutProperties(_ref2, ["hide"]);

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(RestyledLink, rest);
}).withConfig({
  displayName: "Header__NameAsLink",
  componentId: "sc-1rxr5md-3"
})(["display:", ";font-size:", ";margin-left:15px;"], function (p) {
  return p.hide && 'none';
}, function (p) {
  return p.theme.fontSizes.six;
});
var Motto = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].span.withConfig({
  displayName: "Header__Motto",
  componentId: "sc-1rxr5md-4"
})(["font-weight:", ";flex:1;display:", ";font-style:italic;font-size:", ";margin:1px 10px 0px 13px;min-width:0px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;@media (min-width:", "){font-size:", ";margin-right:0px;}"], fontWeight, function (p) {
  return p.hide && 'none';
}, function (p) {
  return p.theme.fontSizes.two;
}, function (p) {
  return p.theme.mediaQueries.tinyViewTwo;
}, function (p) {
  return p.theme.fontSizes.four;
});
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].nav.withConfig({
  displayName: "Header__Nav",
  componentId: "sc-1rxr5md-5"
})(["display:", ";margin-top:-2px;padding:", ";background-color:", ";max-width:", ";border-radius:", ";position:relative;", ";@media (min-width:", "){display:block;margin-right:", ";max-width:", ";}"], function (p) {
  return !p.isHome && 'none';
}, function (p) {
  return p.isHome && '8px 15px';
}, function (p) {
  return p.isHome && 'rgba(0,0,0,0.25)';
}, function (p) {
  return p.isHome && '350px';
}, function (p) {
  return p.isHome && '10px';
}, function (p) {
  return p.menu && Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["css"])(["flex:1;display:block;"]);
}, function (p) {
  return p.theme.mediaQueries.narrowBreakTwo;
}, function (p) {
  return !p.isHome && '15px';
}, function (p) {
  return p.isHome && '350px';
});
var NavList = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(_primitives_UnorderedList_jsx__WEBPACK_IMPORTED_MODULE_10__["default"]).withConfig({
  displayName: "Header__NavList",
  componentId: "sc-1rxr5md-6"
})(["display:flex;justify-content:center;margin:0px;padding:0px;list-style:none;"]);
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].img.withConfig({
  displayName: "Header__Icon",
  componentId: "sc-1rxr5md-7"
})(["display:", ";height:22px;margin-left:auto;margin-right:10px;cursor:pointer;padding-top:5px;padding-bottom:5px;padding-left:5px;padding-right:5px;@media (min-width:", "){display:none;}"], function (p) {
  return p.isHome && 'none';
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
      var _this$props = this.props,
          appState = _this$props.appState,
          boundHandleClickForApp = _this$props.boundHandleClickForApp;
      var currentCaller = appState.currentCaller,
          showStoryText = appState.showStoryText;
      var menuIsOpen = this.state.menuIsOpen;
      var isHome = currentCaller === 'home';
      var isReverie = currentCaller === 'reverie';
      var iconType = menuIsOpen ? _public_header_nav_open_png__WEBPACK_IMPORTED_MODULE_2___default.a : _public_header_nav_closed_png__WEBPACK_IMPORTED_MODULE_3___default.a;
      var hideBackground = isHome || !showStoryText && !isReverie;
      var hideNameAndMotto = menuIsOpen || isHome;
      var referrer = new _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_7__["default"](this.props);
      var hcForHeader = new _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_1__["default"]('header', this);
      var handleClickForHeader = hcForHeader.boundHandleClick;

      var eventHandlerHeaderMenu = function eventHandlerHeaderMenu() {
        return handleClickForHeader();
      };

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Container, {
        isHome: isHome
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(HeaderBackground, {
        hide: hideBackground
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(NameAsLink, {
        hide: hideNameAndMotto,
        callerWillBe: 'home',
        boundHandleClickForApp: boundHandleClickForApp,
        to: '/'
      }, "James Abels"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Motto, {
        hide: hideNameAndMotto
      }, _data_home_home_md__WEBPACK_IMPORTED_MODULE_0___default.a.attributes.motto), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Nav, {
        isHome: isHome,
        menu: menuIsOpen
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(NavList, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        mapData: headerLinks,
        render: function render(link, idx) {
          var isActive = link.path.includes(referrer.location);
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
            key: idx
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(RestyledLink, {
            isActive: isActive,
            isHome: isHome,
            num: idx,
            to: link.path,
            callerWillBe: link.path.slice(1),
            boundHandleClickForApp: boundHandleClickForApp
          }, link.name));
        }
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Icon, {
        isHome: isHome,
        menu: menuIsOpen,
        src: iconType,
        onClick: eventHandlerHeaderMenu
      }));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props$appState = this.props.appState,
          currentCaller = _this$props$appState.currentCaller,
          lastCaller = _this$props$appState.lastCaller;
      var location = new _classes_Location_js__WEBPACK_IMPORTED_MODULE_4__["default"]('/', this.props, prevProps); // Don't automatically close menu if
      // entering or exiting /reverie.

      var isWasReverie = currentCaller === 'reverie' || lastCaller === 'reverie';
      var sameSection = currentCaller === prevProps.appState.currentCaller;

      if (location.justChanged && !isWasReverie && !sameSection && this.timeoutId !== undefined) {
        var hcForApp = new _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_1__["default"]('header', this);
        var handleClickForHeader = hcForApp.boundHandleClick;
        handleClickForHeader();
      }
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



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

/***/ "./app/home/Charms.jsx":
/*!*****************************!*\
  !*** ./app/home/Charms.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Charms; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/Mapper.jsx */ "./app/shared/Mapper.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var pinkPulse = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["0%{box-shadow:0 0 0 0 rgba(253,17,114,1);}75%{box-shadow:0 0 0 15px rgba(253,17,114,0);}100%{box-shadow:0 0 0 0 rgba(253,17,114,0);}"]);
var yellowPulse = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["0%{box-shadow:0 0 0 0 rgba(255,231,76,1);}75%{box-shadow:0 0 0 15px rgba(255,231,76,0);}100%{box-shadow:0 0 0 0 rgba(255,231,76,0);}"]);
var fadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["0%{opacity:.1;}100%{opacity:1;}"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Charms__Container",
  componentId: "sc-1w1k612-0"
})(["display:none;display:", ";flex-direction:column;justify-content:space-between;width:195px;z-index:2;margin-top:15px;animation:", ";@media (min-width:", "){width:240px;}"], function (p) {
  return p.tempContentIsOn || p.magicIsHappening ? 'none' : 'flex';
}, function (p) {
  return p.isCasting && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])([".65s ", " cubic-bezier(0.19,1,0.22,1)"], fadeIn);
}, function (p) {
  return p.theme.mediaQueries.tinyViewTwo;
});
var CharmBox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Charms__CharmBox",
  componentId: "sc-1w1k612-1"
})(["display:flex;justify-content:space-between;"]);
var Charm = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Charms__Charm",
  componentId: "sc-1w1k612-2"
})(["animation:", ";border:2px solid ", ";background-color:rgba(0,0,0,.5);width:40px;height:40px;border-radius:50%;z-index:3;user-select:none;display:flex;justify-content:center;align-items:center;cursor:pointer;@media (min-width:", "){width:50px;height:50px;}"], function (p) {
  return p.isActive && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["1.5s -.15s ", " infinite"], p.isReady && p.isActive ? yellowPulse : pinkPulse);
}, function (p) {
  return p.isReady && p.isActive ? p.theme.colors.yellow : p.theme.colors.pink;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
});
var InnerRing = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Charms__InnerRing",
  componentId: "sc-1w1k612-3"
})(["animation:", ";border:2px solid ", ";height:15px;width:15px;border-radius:50%;"], function (p) {
  return p.isActive && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["1.5s -.15s ", " infinite"], p.isReady && p.isActive ? pinkPulse : yellowPulse);
}, function (p) {
  return p.isReady && p.isActive ? p.theme.colors.pink : p.theme.colors.yellow;
});
var SpellBox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Charms__SpellBox",
  componentId: "sc-1w1k612-4"
})(["margin-top:28px;display:flex;flex-direction:column;margin-left:35px;margin-right:35px;@media (min-width:", "){margin-top:32px;}"], function (p) {
  return p.theme.mediaQueries.tinyView;
});
var Text = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "Charms__Text",
  componentId: "sc-1w1k612-5"
})(["font-size:", ";color:", ";transition:color .5s ease-out;margin-bottom:5px;"], function (p) {
  return p.theme.fontSizes.six;
}, function (p) {
  return p.theme.colors.yellow;
});
var ProgressContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Charms__ProgressContainer",
  componentId: "sc-1w1k612-6"
})(["height:1px;width:100%;align-self:center;background-color:", ";@media (min-width:", "){}"], function (p) {
  return p.theme.colors.black;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
});
var ProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Charms__ProgressBar",
  componentId: "sc-1w1k612-7"
})(["width:", "%;height:100%;background-color:", ";transition:width .5s ease-out,background-color .5s ease-out;"], function (p) {
  return p.barWidth;
}, function (p) {
  return p.theme.colors.yellow;
});
function Charms(props) {
  if (!props.homeState.isCasting) {
    return null;
  }

  var appState = props.appState,
      charmRefs = props.charmRefs,
      goal = props.goal,
      homeState = props.homeState;
  var showBusinessCard = appState.showBusinessCard,
      showLegalTerms = appState.showLegalTerms;
  var activeCharm = homeState.activeCharm,
      castSpell = homeState.castSpell,
      isCasting = homeState.isCasting,
      score = homeState.score; // Let's set up a progress bar.

  var barWidth = score * (100 / (goal - 1));
  var isReady = score === goal - 1;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    isCasting: isCasting,
    magicIsHappening: castSpell // Don't show while in progress
    ,
    tempContentIsOn: showBusinessCard || showLegalTerms
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CharmBox, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    mapData: ['one', 'two', 'three'],
    render: function render(_, idx) {
      var isActive = activeCharm === idx + 1;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Charm, {
        key: idx,
        isActive: isActive,
        isReady: isReady,
        ref: charmRefs[idx] // Add a ref to each Charm when mounted

      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerRing, {
        isActive: isActive,
        isReady: isReady
      }));
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SpellBox, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {
    isReady: isReady
  }, "Spell (", "".concat(score, "/5"), ")"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProgressContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProgressBar, {
    barWidth: barWidth,
    isReady: isReady
  }))));
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
/* harmony import */ var _Charms_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Charms.jsx */ "./app/home/Charms.jsx");
/* harmony import */ var _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/ClickHandling.js */ "./app/classes/ClickHandling.js");
/* harmony import */ var _primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../primitives/Main.jsx */ "./app/primitives/Main.jsx");
/* harmony import */ var _NameTag_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NameTag.jsx */ "./app/home/NameTag.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _PictureBox_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PictureBox.jsx */ "./app/home/PictureBox.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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








var RestyledMain = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(_primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "Home__RestyledMain",
  componentId: "navei3-0"
})(["justify-content:flex-start;align-items:center;overflow:hidden;flex-direction:column;position:relative;"]);

var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    var _this;

    _classCallCheck(this, Home);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this, props)); // 1. this.goal defines when to cast a spell.
    // 2. this.transition prevents 'onTransitionEnd' from
    // toggling Charms on/off in rapid succession.

    _this.goal = 5;
    _this.transition = 0;
    _this.charmRefs = [react__WEBPACK_IMPORTED_MODULE_4___default.a.createRef(), react__WEBPACK_IMPORTED_MODULE_4___default.a.createRef(), react__WEBPACK_IMPORTED_MODULE_4___default.a.createRef()]; // Create an initial spell pattern. If we've gone
    // to /reverie and come back, we'll use the last
    // created spell pattern (stored on appState as
    // a back-up). Otherwise, make a new one.

    var pattern = _this.createSpellPattern();

    _this.state = {
      isCasting: false,
      castSpell: false,
      score: 0,
      // Used to select an active Charm and cast spell
      pattern: pattern,
      activeCharm: pattern[0],
      // Initial Charm is always [0].
      eventType: 'click' // Event that triggered Charm

    };
    _this.trackTransitionEnd = _this.trackTransitionEnd.bind(_assertThisInitialized(_this));
    _this.eventHandlerForMouseDown = _this.eventHandlerForMouseDown.bind(_assertThisInitialized(_this));
    _this.eventHandlerForTouchStart = _this.eventHandlerForTouchStart.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      // const { pinchZoomed } = props.appState;
      // const foregroundImage = pinchZoomed
      //   ? bio.attributes.boyInForegroundImage
      //   : bio.attributes.zoomedBoyInForegroundImage;
      // const fantasyImage = pinchZoomed
      //   ? bio.attributes.fantasyImage
      //   : bio.attributes.zoomedFantasyImage;
      // const cityImage = pinchZoomed
      //   ? bio.attributes.cityImage
      //   : bio.attributes.zoomedCityImage;
      var hcForHome = new _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_1__["default"]('home', this);
      var boundHandleClickForHome = hcForHome.boundHandleClick;
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(RestyledMain, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_NameTag_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, this.props, {
        homeState: this.state,
        boundHandleClickForHome: boundHandleClickForHome
      })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Charms_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({}, this.props, {
        goal: this.goal,
        homeState: this.state,
        charmRefs: this.charmRefs
      })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_PictureBox_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, this.props, {
        homeState: this.state,
        trackTransitionEnd: this.trackTransitionEnd,
        boundHandleClickForHome: boundHandleClickForHome
      })));
    }
  }, {
    key: "createSpellPattern",
    value: function createSpellPattern() {
      var pattern = [];

      for (var i = 0; i < this.goal; i++) {
        var randomNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1; // Let's ensure our Charm order isn't redundant.

        if (i > 0) {
          while (pattern[i - 1] === randomNum) {
            randomNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
          }
        }

        pattern.push(randomNum);
      }

      return pattern;
    }
  }, {
    key: "trackTransitionEnd",
    value: function trackTransitionEnd() {
      // Track the two firings of 'onTransitionEnd'.
      if (this.transition === 0) {
        this.transition = 1;
      } else {
        this.transition = 0;
      }
    }
  }, {
    key: "eventHandlerForMouseDown",
    value: function eventHandlerForMouseDown(num) {
      var _this2 = this;

      return function () {
        if (_this2.state.eventType === 'click') {
          var hcCharm = new _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_1__["default"]('charm', _this2);
          var boundHandleCharm = hcCharm.boundHandleClick;
          boundHandleCharm(_this2.state.activeCharm === num);
        } else if (_this2.state.eventType === 'touch') {
          var hcHome = new _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_1__["default"]('home', _this2);
          var boundHandleClick = hcHome.boundHandleClick;
          boundHandleClick('resetEventType');
        }
      };
    }
  }, {
    key: "eventHandlerForTouchStart",
    value: function eventHandlerForTouchStart(num) {
      var _this3 = this;

      return function () {
        var hcCharm = new _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_1__["default"]('charm', _this3);
        var boundHandleCharm = hcCharm.boundHandleClick; // Update the eventType on State if the Charm was
        // touched. This allows our onMouseDown listener
        // to reject its call due to even propagation.
        // There is a bug in React that prevents us from
        // simply calling event.stopPropagation() here.
        // Dan Abramov offers a solution, however, it
        // does not seem to work cleanly here. I've
        // come up w/my own hybridized approach.
        // I add handlers as he suggests so as to avoid
        // React's own propagation, then use State to
        // reject calls to mouseDown handler touch.
        // https://github.com/facebook/react/issues/9809#issuecomment-413978405

        _this3.setState({
          eventType: 'touch'
        });

        boundHandleCharm(_this3.state.activeCharm === num);
      };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this4 = this;

      // Let's add our eventHandler whenever cDU runs as a result of
      // toggling NameTag (which causes refs to be added to our
      // charmsRef array mounting Charms.
      // See full explanation in handleTouchStart.
      if (this.charmRefs[0].current) {
        this.charmRefs.forEach(function (ref, idx) {
          if (!ref.current.onclick) {
            ref.current.onmousedown = _this4.eventHandlerForMouseDown(idx + 1);
            ref.current.ontouchstart = _this4.eventHandlerForTouchStart(idx + 1);
          }
        });
      }
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);



/***/ }),

/***/ "./app/home/NameTag.jsx":
/*!******************************!*\
  !*** ./app/home/NameTag.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NameTag; });
/* harmony import */ var _data_home_home_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/home/home.md */ "./app/data/home/home.md");
/* harmony import */ var _data_home_home_md__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_home_home_md__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");






var blurInKeyframes = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(["0%{filter:blur(12px);opacity:0;}100%{filter:blur(0px);opacity:1;}"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "NameTag__Container",
  componentId: "sc-1tuguaa-0"
})(["display:", ";animation:", ";pointer-events:", ";flex-direction:column;align-items:center;z-index:2;cursor:pointer;"], function (p) {
  return p.tempContentIsOn ? 'none' : 'flex';
}, function (p) {
  return p.castSpell && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["", " 1.215s cubic-bezier(0.550,0.085,0.680,0.530) both"], blurInKeyframes);
}, function (p) {
  return p.castSpell && 'none';
});
var Hed = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h1.withConfig({
  displayName: "NameTag__Hed",
  componentId: "sc-1tuguaa-1"
})(["font-family:'Aref Ruqaa',serif;font-size:4.5rem;text-shadow:2px 2px 2px rgba(0,0,0,.6);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:", ";font-weight:700;@media (min-width:", "){font-size:", ";}"], function (p) {
  return p.theme.colors.yellow;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.fontSizes.seventeen;
});
var Motto = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "NameTag__Motto",
  componentId: "sc-1tuguaa-2"
})(["font-family:'Aref Ruqaa',serif;text-shadow:1.5px 1.5px 2px rgba(0,0,0,.6);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:", ";color:", ";font-weight:700;margin-top:-6px;margin-left:16px;@media (min-width:", "){margin-left:10px;font-size:", ";}"], function (p) {
  return p.theme.fontSizes.twelve;
}, function (p) {
  return !p.isCasting || p.castSpell ? p.theme.colors.yellow : p.theme.colors.white;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return !p.isCasting ? p.theme.fontSizes.eighteen : p.theme.fontSizes.eighteen;
});
var Text = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].section.withConfig({
  displayName: "NameTag__Text",
  componentId: "sc-1tuguaa-3"
})(["overflow:auto;width:80%;display:", ";z-index:2;@media (min-width:338px){width:260px;}@media (min-width:", "){width:55%;}p{font-weight:500;margin-bottom:10px;font-size:", ";color:", ";text-shadow:1px 1px 2px rgba(0,0,0,.6);text-align:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;&:last-child{margin-bottom:0px;}@media (min-width:", "){font-size:", ";}}display:", ";"], function (p) {
  return p.tempContentIsOn ? 'none' : 'block';
}, function (p) {
  return p.theme.mediaQueries.tinyViewTwo;
}, function (p) {
  return p.theme.fontSizes.three;
}, function (p) {
  return p.theme.colors.white;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.fontSizes.twelve;
}, function (p) {
  return p.isCasting && !p.castSpell ? 'none' : '';
});
function NameTag(props) {
  var appState = props.appState,
      boundHandleClickForHome = props.boundHandleClickForHome,
      homeState = props.homeState;
  var showBusinessCard = appState.showBusinessCard,
      showLegalTerms = appState.showLegalTerms;
  var isCasting = homeState.isCasting,
      castSpell = homeState.castSpell,
      eventType = homeState.eventType,
      score = homeState.score;
  var attributes = _data_home_home_md__WEBPACK_IMPORTED_MODULE_0___default.a.attributes,
      body = _data_home_home_md__WEBPACK_IMPORTED_MODULE_0___default.a.body;
  var motto = attributes.motto,
      name = attributes.name;
  var tagline = !isCasting || castSpell ? motto : 'Tap active charms to cast a spell';

  var eventHandler = function eventHandler() {
    if (eventType === 'touch') {
      boundHandleClickForHome('resetEventType');
      return false;
    }

    if (false) {}

    boundHandleClickForHome('toggleSpell');
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
    castSpell: castSpell,
    onClick: eventHandler,
    tempContentIsOn: showBusinessCard || showLegalTerms
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Hed, null, name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Motto, {
    isCasting: isCasting,
    castSpell: castSpell
  }, tagline), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Text, {
    isCasting: isCasting,
    castSpell: castSpell,
    tempContentIsOn: showBusinessCard || showLegalTerms
  }, react_html_parser__WEBPACK_IMPORTED_MODULE_4___default()(marked__WEBPACK_IMPORTED_MODULE_1___default()(body, {
    smartypants: true
  }))));
}

/***/ }),

/***/ "./app/home/PictureBox.jsx":
/*!*********************************!*\
  !*** ./app/home/PictureBox.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PictureBox; });
/* harmony import */ var _data_home_home_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/home/home.md */ "./app/data/home/home.md");
/* harmony import */ var _data_home_home_md__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_home_home_md__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var largeScale = 1.15;
var PictureHolder = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PictureBox__PictureHolder",
  componentId: "sc-1oco850-0"
})(["position:fixed;top:0px;left:-1px;height:101%;width:101%;overflow:hidden;z-index:1;"]);
var BoyInForeground = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PictureBox__BoyInForeground",
  componentId: "sc-1oco850-1"
})(["position:absolute;display:block;background-image:url(", ");background-size:cover;background-position:center;background-repeat:no-repeat;width:100%;height:100%;pointer-events:none;z-index:2;filter:", ";"], function (p) {
  return p.srcImage;
}, function (p) {
  return p.isCasting && !p.castSpell || p.theme.blurForTempContent ? p.theme.blur : 'blur(0)';
});
var Portal = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PictureBox__Portal",
  componentId: "sc-1oco850-2"
})(["position:absolute;height:100%;width:100%;z-index:1;background-color:", ";opacity:.1;"], function (p) {
  return p.theme.colors.black;
});
var FantasyAsBackground = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(BoyInForeground).withConfig({
  displayName: "PictureBox__FantasyAsBackground",
  componentId: "sc-1oco850-3"
})(["background-image:url(", ");opacity:", ";transform:", ";transition:transform 1.75s,opacity 1.5s cubic-bezier(0.77,0,0.175,1);z-index:0;"], function (p) {
  return p.srcImage;
}, function (p) {
  return p.inCity ? '0' : '1';
}, function (p) {
  return p.inCity ? 'scale(1)' : Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["scale(", ")"], largeScale);
});
var CityAsBackground = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(FantasyAsBackground).withConfig({
  displayName: "PictureBox__CityAsBackground",
  componentId: "sc-1oco850-4"
})(["background-image:url(", ");opacity:", ";transform:", ";"], function (p) {
  return p.srcImage;
}, function (p) {
  return p.inCity ? '1' : '0';
}, function (p) {
  return p.inCity ? Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["scale(", ")"], largeScale) : 'scale(1)';
});
function PictureBox(props) {
  var _bio$attributes = _data_home_home_md__WEBPACK_IMPORTED_MODULE_0___default.a.attributes,
      boyInForegroundImage = _bio$attributes.boyInForegroundImage,
      cityImage = _bio$attributes.cityImage,
      fantasyImage = _bio$attributes.fantasyImage;
  var appState = props.appState,
      boundHandleClickForHome = props.boundHandleClickForHome,
      homeState = props.homeState,
      trackTransitionEnd = props.trackTransitionEnd;
  var inCity = appState.inCity;
  var castSpell = homeState.castSpell,
      isCasting = homeState.isCasting;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PictureHolder, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BoyInForeground, {
    srcImage: boyInForegroundImage
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Portal, {
    isCasting: isCasting,
    castSpell: castSpell
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FantasyAsBackground, {
    inCity: inCity,
    isCasting: isCasting,
    castSpell: castSpell,
    srcImage: fantasyImage,
    onTransitionEnd: function onTransitionEnd(event) {
      event.stopPropagation(); // Set transition to '1' after the first call,
      // so toggle won't re-run on the second call.
      // (Two images = two transitionEnd events.)

      trackTransitionEnd();
      boundHandleClickForHome('toggleSpell');
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CityAsBackground, {
    inCity: inCity,
    isCasting: isCasting,
    castSpell: castSpell,
    srcImage: cityImage
  }));
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
/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.jsx */ "./app/App.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _shared_ErrorBoundary_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/ErrorBoundary.jsx */ "./app/shared/ErrorBoundary.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);





react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.render(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_shared_ErrorBoundary_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_App_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], null))), document.getElementById('app'));

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
/* harmony import */ var _primitives_ContentHolder_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../primitives/ContentHolder.jsx */ "./app/primitives/ContentHolder.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_Shelf_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Shelf.jsx */ "./app/shared/Shelf.jsx");






function Menu(props) {
  var children = props.children;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_primitives_ContentHolder_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_shared_Shelf_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    height: "19px"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_shared_MenuButton_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], props)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null, children)));
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
/* harmony import */ var _public_antacid_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/antacid.png */ "./public/antacid.png");
/* harmony import */ var _public_antacid_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_antacid_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../primitives/Main.jsx */ "./app/primitives/Main.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _primitives_ContentHolder_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../primitives/ContentHolder.jsx */ "./app/primitives/ContentHolder.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");





var RestyledContentHolder = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_primitives_ContentHolder_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "NotFound__RestyledContentHolder",
  componentId: "sc-1milcn9-0"
})(["flex:1;margin-right:25px;"]);
var Hed = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h1.withConfig({
  displayName: "NotFound__Hed",
  componentId: "sc-1milcn9-1"
})(["color:", ";font-size:", ";margin-bottom:15px;"], function (p) {
  return p.theme.colors.pink;
}, function (p) {
  return p.theme.fontSizes.sixteen;
});
var FailWhale = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].section.withConfig({
  displayName: "NotFound__FailWhale",
  componentId: "sc-1milcn9-2"
})(["flex:1;background:", " no-repeat;background-position:center;background-size:contain;"], function (p) {
  return "url(".concat(p.image, ")");
});
function NotFound() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RestyledContentHolder, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Hed, null, "Fizzzz, Pop!"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FailWhale, {
    image: _public_antacid_png__WEBPACK_IMPORTED_MODULE_0___default.a
  })));
}

/***/ }),

/***/ "./app/primitives/ContentHolder.jsx":
/*!******************************************!*\
  !*** ./app/primitives/ContentHolder.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/dist/index.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "ContentHolder",
  componentId: "sc-1g8tkhf-0"
})(["margin:18px 0px 18px ", ";display:flex;flex-direction:column;filter:", ";", ";"], function (p) {
  return !p.saveSerifs ? '25px' : '23px';
}, function (p) {
  return p.theme.blurForTempContent && p.theme.blur;
}, react_device_detect__WEBPACK_IMPORTED_MODULE_1__["isIE"] && 'overflow: auto;'));

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
})(["height:0px;display:flex;height:", "px;flex-grow:1;flex-shrink:0;flex-basis:auto;width:100%;max-width:70rem;"], function (p) {
  return parseInt(p.theme.pageHeight) - 107;
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
  componentId: "wu4si4-0"
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
})(["padding:0px;list-style-type:none;"]));

/***/ }),

/***/ "./app/projects/MultiProjectNav.jsx":
/*!******************************************!*\
  !*** ./app/projects/MultiProjectNav.jsx ***!
  \******************************************/
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
  displayName: "MultiProjectNav__RestyledList",
  componentId: "gvpxwc-0"
})(["height:100%;"]);
var Type = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "MultiProjectNav__Type",
  componentId: "gvpxwc-1"
})(["font-size:", ";color:", ";margin-bottom:2px;font-style:italic;"], function (p) {
  return p.theme.fontSizes.three;
}, function (p) {
  return p.theme.colors.pink;
});
var Graf = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "MultiProjectNav__Graf",
  componentId: "gvpxwc-2"
})(["font-size:", ";color:", ";margin-bottom:13px;font-weight:400;"], function (p) {
  return p.theme.fontSizes.ten;
}, function (p) {
  return p.theme.colors.black;
});
function DesktopProjectNav(props) {
  var contentState = props.contentState;
  var allContentData = contentState.allContentData;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RestyledList, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], {
    mapData: allContentData,
    render: function render(mappedProject, idx) {
      var _mappedProject$attrib = mappedProject.attributes,
          pitch = _mappedProject$attrib.pitch,
          projectName = _mappedProject$attrib.projectName,
          type = _mappedProject$attrib.type;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
        key: idx
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Type, null, type), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Graf, null, "".concat(projectName, " | ").concat(pitch)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ProjectNav_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, props, {
        mappedProjectIndex: idx,
        mappedProject: mappedProject
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
/* harmony import */ var _helpers_normalize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/normalize.js */ "./app/helpers/normalize.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../primitives/StyledLink.jsx */ "./app/primitives/StyledLink.jsx");
/* harmony import */ var _primitives_UnorderedList_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../primitives/UnorderedList.jsx */ "./app/primitives/UnorderedList.jsx");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/dist/index.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_6__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var Group = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_primitives_UnorderedList_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "ProjectNav__Group",
  componentId: "sc-1lgrx38-0"
})(["flex:", ";justify-content:", ";margin-left:", ";display:flex;", "  ", ";"], function (p) {
  return p.imageLoaded && !p.isMenu && '1';
}, function (p) {
  return p.imageLoaded && !p.isMenu && 'flex-end';
}, function (p) {
  return !p.isMenu && '15px';
}, react_device_detect__WEBPACK_IMPORTED_MODULE_6__["isIE"] && 'flex-shrink: 0;', function (p) {
  return p.isMenu && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["margin-bottom:", ";max-width:100%;"], !p.finalGroup && '30px');
});
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].li.withConfig({
  displayName: "ProjectNav__ListItem",
  componentId: "sc-1lgrx38-1"
})(["height:100%;margin-right:", ";", "  &:first-child{margin-left:", ";}@media (min-width:", "){margin-right:", ";}"], function (p) {
  return !p.finalThumbnail && '15px';
}, function (p) {
  return react_device_detect__WEBPACK_IMPORTED_MODULE_6__["isIE"] && p.finalThumbnail && 'flex-shrink: 1.0275;';
}, function (p) {
  return p.isMenu && '0px';
}, function (p) {
  return p.theme.mediaQueries.narrowBreakOne;
}, function (p) {
  return !p.finalThumbnail && p.isMenu && '20px';
});
var RestyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])( // Filter out highlightThis, isMenu from StyledLink
// eslint-disable-next-line
function (_ref) {
  var highlightThis = _ref.highlightThis,
      isMenu = _ref.isMenu,
      rest = _objectWithoutProperties(_ref, ["highlightThis", "isMenu"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], rest);
}).withConfig({
  displayName: "ProjectNav__RestyledLink",
  componentId: "sc-1lgrx38-2"
})(["height:", ";border:1px solid ", ";display:block;@media (min-width:", "){height:", ";}"], function (p) {
  return !p.isMenu && '15px';
}, function (p) {
  return p.highlightThis ? p.theme.colors.darkPinkTwo : p.theme.colors.blueTwo;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return !p.isMenu && '30px';
});
var Image = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "ProjectNav__Image",
  componentId: "sc-1lgrx38-3"
})(["max-height:100%;max-width:100%;vertical-align:top;@media (min-width:", "){max-height:", ";}"], function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return !p.isMenu && '30px';
});
function ProjectNav(props) {
  var boundHandleClickForApp = props.boundHandleClickForApp,
      contentState = props.contentState,
      imageLoaded = props.imageLoaded,
      mappedProject = props.mappedProject,
      mappedProjectIndex = props.mappedProjectIndex;
  var allContentData = contentState.allContentData,
      finalData = contentState.finalData,
      thumbnailIndex = contentState.thumbnailIndex;
  var _finalData$attributes = finalData.attributes,
      projectName = _finalData$attributes.projectName,
      projectThumbnail = _finalData$attributes.projectThumbnail;
  var isMenu = mappedProjectIndex !== undefined;
  var finalGroup = isMenu && mappedProjectIndex === allContentData.length - 1;
  var useThisData = !isMenu ? projectThumbnail : mappedProject.attributes.projectThumbnail;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Group, {
    isMenu: isMenu,
    finalGroup: finalGroup,
    imageLoaded: imageLoaded
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], {
    mapData: useThisData,
    render: function render(thumb, idx) {
      var isActive = isMenu && projectName === mappedProject.attributes.projectName;
      var highlightThis = !isMenu && thumbnailIndex === idx || isActive && thumbnailIndex === idx;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ListItem, {
        key: idx,
        isMenu: isMenu,
        finalThumbnail: idx === useThisData.length - 1
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RestyledLink, {
        highlightThis: highlightThis,
        isMenu: isMenu,
        to: "/projects/".concat(Object(_helpers_normalize_js__WEBPACK_IMPORTED_MODULE_1__["default"])(!isMenu ? projectName : mappedProject.attributes.projectName), "/").concat(idx + 1),
        boundHandleClickForApp: boundHandleClickForApp
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Image, {
        alt: "Thumbnail ".concat(idx + 1),
        isMenu: isMenu,
        src: thumb
      })));
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
/* harmony import */ var _shared_ImageLoader_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ImageLoader.jsx */ "./app/shared/ImageLoader.jsx");
/* harmony import */ var _primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../primitives/Main.jsx */ "./app/primitives/Main.jsx");
/* harmony import */ var _primitives_ContentHolder_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../primitives/ContentHolder.jsx */ "./app/primitives/ContentHolder.jsx");
/* harmony import */ var _shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/Mapper.jsx */ "./app/shared/Mapper.jsx");
/* harmony import */ var _shared_MenuButton_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/MenuButton.jsx */ "./app/shared/MenuButton.jsx");
/* harmony import */ var _primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../primitives/Overflow.jsx */ "./app/primitives/Overflow.jsx");
/* harmony import */ var _ProjectNav_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProjectNav.jsx */ "./app/projects/ProjectNav.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/dist/index.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_Shelf_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/Shelf.jsx */ "./app/shared/Shelf.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












var Type = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].p.withConfig({
  displayName: "Projects__Type",
  componentId: "e6bzkp-0"
})(["font-size:", ";color:", ";margin-bottom:2px;font-style:italic;"], function (p) {
  return p.theme.fontSizes.three;
}, function (p) {
  return p.theme.colors.lightBlack;
});
var ProjectName = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].h1.withConfig({
  displayName: "Projects__ProjectName",
  componentId: "e6bzkp-1"
})(["font-size:", ";color:", ";margin-top:-8px;margin-bottom:4px;"], function (p) {
  return p.theme.fontSizes.twenty;
}, function (p) {
  return p.theme.colors.pink;
});
var Hed = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].h3.withConfig({
  displayName: "Projects__Hed",
  componentId: "e6bzkp-2"
})(["font-size:", ";font-weight:400;color:", ";margin-bottom:8px;margin-left:2px;"], function (p) {
  return p.theme.fontSizes.eight;
}, function (p) {
  return p.theme.colors.blue;
});
var Dek = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].h2.withConfig({
  displayName: "Projects__Dek",
  componentId: "e6bzkp-3"
})(["font-size:", ";margin-bottom:", ";font-weight:300;color:", ";"], function (p) {
  return p.theme.fontSizes.thirteen;
}, function (p) {
  return p.theme.bottomMargin.regular;
}, function (p) {
  return p.theme.colors.pink;
});
var Graf = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].p.withConfig({
  displayName: "Projects__Graf",
  componentId: "e6bzkp-4"
})(["margin-right:0px;margin-bottom:", ";margin-left:2px;"], function (p) {
  return !p.lastItem ? p.theme.bottomMargin.regular : '15px';
});
var Figure = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].figure.withConfig({
  displayName: "Projects__Figure",
  componentId: "e6bzkp-5"
})(["margin:0px;padding-top:15px;border-top:1px solid ", ";"], function (p) {
  return p.theme.colors.blueTwo;
});
var Caption = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].figcaption.withConfig({
  displayName: "Projects__Caption",
  componentId: "e6bzkp-6"
})(["margin-bottom:10px;font-size:", ";line-height:1.5;color:", ";"], function (p) {
  return p.theme.fontSizes.seven;
}, function (p) {
  return p.theme.colors.lightBlack;
});
var ImageHolder = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "Projects__ImageHolder",
  componentId: "e6bzkp-7"
})(["padding:15px;background-color:", ";"], function (p) {
  return p.theme.colors.reverieBlue;
});
var Image = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].img.withConfig({
  displayName: "Projects__Image",
  componentId: "e6bzkp-8"
})(["opacity:", ";width:100%;height:auto;vertical-align:top;box-shadow:2px 4px 12px rgba(0,0,0,.3);"], function (p) {
  return p.imageLoaded ? '1' : '0';
});
function Projects(props) {
  var appState = props.appState,
      boundHandleClickForContentLoader = props.boundHandleClickForContentLoader,
      contentState = props.contentState;
  var pinchZoomed = appState.pinchZoomed;
  var finalData = contentState.finalData,
      imageLoaded = contentState.imageLoaded,
      thumbnailIndex = contentState.thumbnailIndex;
  var _finalData$attributes = finalData.attributes,
      captions = _finalData$attributes.captions,
      full = _finalData$attributes.full,
      pitch = _finalData$attributes.pitch,
      projectName = _finalData$attributes.projectName,
      showTheseAttributes = _finalData$attributes.showTheseAttributes,
      type = _finalData$attributes.type,
      zoomed = _finalData$attributes.zoomed;
  var caption = captions[thumbnailIndex]; // Larger res ('zoomed') image if:
  //  a. desktop
  //  b. pinchZoomed

  var source = !react_device_detect__WEBPACK_IMPORTED_MODULE_8__["isMobile"] || pinchZoomed ? zoomed[thumbnailIndex] : full[thumbnailIndex];
  var attributeArray = showTheseAttributes.map(function (name) {
    return finalData.attributes[name];
  });
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_primitives_ContentHolder_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_shared_Shelf_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
    height: "32px",
    tinyHeight: "20px"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_shared_MenuButton_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], props), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_shared_ImageLoader_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], {
    imageLoaded: imageLoaded
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ProjectNav_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, props, {
    imageLoaded: imageLoaded
  }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Type, null, type), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ProjectName, null, projectName), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Dek, null, pitch), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    mapData: attributeArray,
    render: function render(text, idx) {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
        key: idx
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Hed, null, showTheseAttributes[idx][0].toUpperCase() + showTheseAttributes[idx].slice(1)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Graf, null, text));
    }
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Figure, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Caption, null, caption), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ImageHolder, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Image, {
    alt: "mainPic",
    src: source,
    imageLoaded: imageLoaded,
    onLoad: boundHandleClickForContentLoader
  }))))));
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
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
/* harmony import */ var _article_n_reverie_ArticleOrReverie_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../article-n-reverie/ArticleOrReverie.jsx */ "./app/article-n-reverie/ArticleOrReverie.jsx");
/* harmony import */ var _article_n_reverie_ArticleOrReverieNav_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../article-n-reverie/ArticleOrReverieNav.jsx */ "./app/article-n-reverie/ArticleOrReverieNav.jsx");
/* harmony import */ var _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/ClickHandling.js */ "./app/classes/ClickHandling.js");
/* harmony import */ var _classes_Content_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/Content.js */ "./app/classes/Content.js");
/* harmony import */ var _classes_Location_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/Location.js */ "./app/classes/Location.js");
/* harmony import */ var _menu_Menu_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu/Menu.jsx */ "./app/menu/Menu.jsx");
/* harmony import */ var _projects_MultiProjectNav_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../projects/MultiProjectNav.jsx */ "./app/projects/MultiProjectNav.jsx");
/* harmony import */ var _projects_Projects_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../projects/Projects.jsx */ "./app/projects/Projects.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../classes/Referrer.js */ "./app/classes/Referrer.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var _classes_ScrollHandling_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../classes/ScrollHandling.js */ "./app/classes/ScrollHandling.js");
/* harmony import */ var _classes_State_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../classes/State.js */ "./app/classes/State.js");
/* harmony import */ var _story_Story_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../story/Story.jsx */ "./app/story/Story.jsx");
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














 // For future refactoring: https://stackoverflow.com/a/51753410

var ContentLoader =
/*#__PURE__*/
function (_Component) {
  _inherits(ContentLoader, _Component);

  function ContentLoader(props) {
    var _this;

    _classCallCheck(this, ContentLoader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContentLoader).call(this, props));
    var isMenu = props.appState.isMenu;
    var referrer = new _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_9__["default"](props);
    var location = new _classes_Location_js__WEBPACK_IMPORTED_MODULE_4__["default"](referrer.pathToMatch, props); // DO NOT USE currentCaller to avoid problems with BACK/FORWARD:
    // If the user hits back/forward, currentCaller will be out-of-sync
    // with props and the window until App.cDU runs. The same problem
    // occurs with path matching for /menu. These values must be certain
    // at the time of mounting, and can't wait for an update to AppState.

    var content = new _classes_Content_js__WEBPACK_IMPORTED_MODULE_3__["default"](location.caller);
    var allContentData = content.getContentData();
    var chapterIndex = !isMenu && location.caller === 'chapter' ? location.params.titleToIndex() : 0;
    var projectIndex = !isMenu && location.caller === 'projects' ? location.params.projectNameToIndex() : 0;
    var thumbnailIndex = !isMenu && location.caller === 'projects' ? location.params.projectThumbnailToIndex() : 0;
    var headlineIndex = !isMenu && location.caller === 'journalism' || location.caller === 'reverie' ? location.params.headlineToIndex() : 0;
    var dataIndex;

    switch (location.caller) {
      case 'chapter':
        dataIndex = chapterIndex;
        break;

      case 'projects':
        dataIndex = projectIndex;
        break;

      default:
        dataIndex = headlineIndex;
    }

    var finalData = allContentData[dataIndex];
    _this.overflowRef = location.caller === 'chapter' ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef() : {};
    _this.state = {
      isNotFound: !location.pathIsValid,
      needsRedirect: location.needsRedirect,
      imageLoaded: false,
      allContentData: allContentData,
      finalData: finalData,
      caller: location.caller,
      chapterIndex: chapterIndex,
      projectIndex: projectIndex,
      thumbnailIndex: thumbnailIndex,
      headlineIndex: headlineIndex
    };
    return _this;
  }

  _createClass(ContentLoader, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          caller = _this$state.caller,
          isNotFound = _this$state.isNotFound,
          needsRedirect = _this$state.needsRedirect;
      var referrer = new _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_9__["default"](this.props);
      return needsRedirect ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_10__["Redirect"], {
        to: "/i"
      }) : isNotFound ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_10__["Redirect"], {
        to: "/not-found"
      }) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_10__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_10__["Route"], {
        exact: true,
        path: "/".concat(caller, "/menu"),
        render: function render() {
          if (caller === 'chapter') {
            return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_10__["Redirect"], {
              to: "/not-found"
            });
          }

          var MenuContent = _this2.getMenuContent(caller);

          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_menu_Menu_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], _this2.props, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MenuContent, _extends({}, _this2.props, {
            contentState: _this2.state
          })));
        }
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_10__["Route"], {
        path: referrer.finalPath,
        render: function render() {
          var PageContent = _this2.getPage(caller);

          var boundHandleClickForContentLoader;

          if (caller === 'projects') {
            var clickHandling = new _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_2__["default"]('contentLoader', _this2);
            boundHandleClickForContentLoader = clickHandling.boundHandleClick;
          }

          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(PageContent, _extends({}, _this2.props, {
            overflowRef: _this2.overflowRef,
            contentState: _this2.state,
            boundHandleClickForContentLoader: boundHandleClickForContentLoader
          }));
        }
      }));
    }
  }, {
    key: "getMenuContent",
    value: function getMenuContent(caller) {
      switch (caller) {
        case 'journalism':
          return _article_n_reverie_ArticleOrReverieNav_jsx__WEBPACK_IMPORTED_MODULE_1__["default"];

        case 'projects':
          return _projects_MultiProjectNav_jsx__WEBPACK_IMPORTED_MODULE_6__["default"];

        case 'reverie':
          return _article_n_reverie_ArticleOrReverieNav_jsx__WEBPACK_IMPORTED_MODULE_1__["default"];
      }
    }
  }, {
    key: "getPage",
    value: function getPage(caller) {
      switch (caller) {
        case 'chapter':
          return _story_Story_jsx__WEBPACK_IMPORTED_MODULE_13__["default"];

        case 'journalism':
          return _article_n_reverie_ArticleOrReverie_jsx__WEBPACK_IMPORTED_MODULE_0__["default"];

        case 'projects':
          return _projects_Projects_jsx__WEBPACK_IMPORTED_MODULE_7__["default"];

        case 'reverie':
          return _article_n_reverie_ArticleOrReverie_jsx__WEBPACK_IMPORTED_MODULE_0__["default"];
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var currentCaller = this.props.appState.currentCaller;
      var referrer = new _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_9__["default"](this.props);
      var location = new _classes_Location_js__WEBPACK_IMPORTED_MODULE_4__["default"](referrer.pathToMatch, this.props, prevProps); // Manage component state

      if (location.needsRedirect) {
        this.setState({
          needsRedirect: true
        });
      } else if (location.isSwappingContent) {
        var _this$state2 = this.state,
            allContentData = _this$state2.allContentData,
            caller = _this$state2.caller;
        var boundHandleClickForBody = this.props.boundHandleClickForBody;
        var bodyState = new _classes_State_js__WEBPACK_IMPORTED_MODULE_12__["default"](this.props, location);
        var stateToUpdate = {};

        switch (caller) {
          case 'chapter':
            var titleIndex = location.params.titleToIndex();
            stateToUpdate.chapterIndex = titleIndex;
            stateToUpdate.finalData = allContentData[titleIndex];
            break;

          case 'projects':
            var _projectIndex = location.params.projectNameToIndex();

            var thumbnailIndex = location.params.projectThumbnailToIndex();
            stateToUpdate.projectIndex = _projectIndex;
            stateToUpdate.thumbnailIndex = thumbnailIndex;
            stateToUpdate.finalData = allContentData[_projectIndex];
            stateToUpdate.imageLoaded = false;
            break;

          default:
            var _headlineIndex = location.params.headlineToIndex();

            stateToUpdate.headlineIndex = _headlineIndex;
            stateToUpdate.finalData = allContentData[_headlineIndex];
            break;
        }

        bodyState.rebuild(boundHandleClickForBody);
        this.setState(stateToUpdate); // The scrollTop reset is not currently applied to
        // the /projects, and /journalism routes b/c
        // they can only be changed via /menu.
        // It works for /chapter, because it's changed
        // from w/n the /chapter route.
        // If you want to expand this to include the
        // /projects and /journalism, filter out
        // /menu paths, as they don't have an
        // overflowRef, so will kick an error.

        if (location.caller === 'chapter') {
          var scrollHandler = new _classes_ScrollHandling_js__WEBPACK_IMPORTED_MODULE_11__["default"](currentCaller);
          scrollHandler.resetElementTop(this.overflowRef, prevProps);
        }
      }
    }
  }]);

  return ContentLoader;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



 // This code comes courtesy of: https://stackoverflow.com/a/51580782
// See also: https://github.com/ReactTraining/history/issues/470
// It keeps history tidy for the user.
// iSayNoMatch is a custom test. It tries to account for the
// vagaries of this site. Consider an example.
// If we were to click /chapter in the header menu while we're
// on /chapter/practcal-magic, we'll add /chapter to the history
// stack over and over again. This pollutes it, and also prevents
// the 'back' and 'forth' buttons from working properly. This is
// b/c the site will try to re-direct us to /chapter/prctical-magic
// every time we click a link pointing to /chapter.
// This will cause the back button to feel like quicksand,
// we'll keep ending up in the same place.
// *** ASIDE ***
// When the user clicks a link, the location's instantly updated
// to wherever the link pointed. So...when we check:
// 'window.location.pathname' from this component, we get the new
// location, not the old one. And, when we check:
// 'to' from this component, we get the last location, not the
// next one. As a result, 'to' is what we want to ADD to history).
// The above is confusing, 'to' implies the next spot, but React
// Router doesn't seem to work that way. Rather, when a RR link
// is clicked, the window instantly moves to the new location
// and the link gets a 'to' prop representing where we Were.
// *** END ASIDE ***
// Note 1: /projects/menu is an exception to this rule. We DO want
// to save /menu button toggles to history. The user expects it.
// Note 2: Home has its own quirks. Because it's a single '/',
// it's found w/n every string with a '/'. We can deal w/this
// by checking the length of 'to' --> iSayNoMatch if 1.
// This component also updates appState as all navigation is
// handled through links. It updates state when called by
// any link other than MenuButton. It also updates state
// when called by an event listener on window ('popstate').

var Link = function Link(_ref) {
  var to = _ref.to,
      replace = _ref.replace,
      boundHandleClickForApp = _ref.boundHandleClickForApp,
      callerWillBe = _ref.callerWillBe,
      isCalledByMenu = _ref.isCalledByMenu,
      props = _objectWithoutProperties(_ref, ["to", "replace", "boundHandleClickForApp", "callerWillBe", "isCalledByMenu"]);

  var pathname = window.location.pathname;
  var isMenu = pathname.includes('menu') && pathname.split('/')[2] === 'menu'; // Ensures this is a /menu.

  var iSayNoMatch = window.location.pathname.includes(to) && !isMenu && to.length > 1;

  var eventHandler = function eventHandler(event) {
    if (!boundHandleClickForApp) {
      return null;
    }

    event.stopPropagation();

    if (!isCalledByMenu) {
      boundHandleClickForApp('updateApp', callerWillBe);
    } else {
      boundHandleClickForApp('toggleMenu');
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: typeof to === 'string' ? to : Object(history__WEBPACK_IMPORTED_MODULE_2__["createPath"])(to),
    exact: true
  }, function (_ref2) {
    var match = _ref2.match;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], _extends({}, props, {
      to: to,
      replace: iSayNoMatch || replace || !!match,
      onClick: eventHandler
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
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




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
      var errorText = initialLoad ? "Oops. I don't support your browser yet. Please try back with a modern \n      version of Chrome, Firefox, or Safari." : 'Error! Try again or come back later.';

      if (hasError) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            maxWidth: '1078px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
          style: {
            backgroundColor: '#fd1172',
            paddingBottom: '5px',
            margin: '20px 25px',
            padding: '20px 0px'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          style: {
            color: 'white',
            margin: '0px 20px'
          }
        }, errorText)), initialLoad && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
        }, "Contact: hello__at__jamesabels.net")));
      }

      return children;
    } // Catch errors re-render

  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      var initialLoad = this.state.initialLoad;
      this.setState({
        hasError: true,
        error: error,
        errorInfo: errorInfo
      });

      if (false) {}
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

/***/ "./app/shared/ImageLoader.jsx":
/*!************************************!*\
  !*** ./app/shared/ImageLoader.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageLoader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_image_loader_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/image-loader.gif */ "./public/image-loader.gif");
/* harmony import */ var _public_image_loader_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_image_loader_gif__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ImageLoader__Container",
  componentId: "oh8nxn-0"
})(["height:16px;width:16px;margin-left:auto;"]);
var Loader = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ImageLoader__Loader",
  componentId: "oh8nxn-1"
})(["width:100%;height:100%;background-image:url(", ");background-size:cover;"], _public_image_loader_gif__WEBPACK_IMPORTED_MODULE_1___default.a);
function ImageLoader(props) {
  if (props.imageLoaded) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Loader, null));
}

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
})(["min-width:50px;width:50px;"]);
var RestyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "MenuButton__RestyledLink",
  componentId: "sc-1ixu6px-1"
})(["display:flex;flex-shrink:0;margin-right:auto;position:relative;padding-bottom:3px;justify-content:space-between;"]);
var Label = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "MenuButton__Label",
  componentId: "sc-1ixu6px-2"
})(["font-size:", ";color:", ";margin:0px;cursor:pointer;margin-top:-2px;font-weight:400;"], function (p) {
  return p.theme.fontSizes.one;
}, function (p) {
  return p.theme.colors.pink;
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
  return !p.reverie ? p.theme.colors.blueTwo : p.theme.colors.white;
});
function MenuButton(props) {
  var boundHandleClickForApp = props.boundHandleClickForApp;
  var _props$appState = props.appState,
      isMenu = _props$appState.isMenu,
      currentCaller = _props$appState.currentCaller;
  var isReverie = currentCaller === 'reverie';
  var link = isReverie && isMenu ? '/reverie' : isMenu ? "/".concat(currentCaller) : "/".concat(currentCaller, "/menu");
  var arrowIcon = !isMenu ? _public_arrow_down_png__WEBPACK_IMPORTED_MODULE_1___default.a : _public_arrow_up_png__WEBPACK_IMPORTED_MODULE_0___default.a;
  var menuIsActive = isMenu && 'active';
  var text = !isMenu ? 'See all' : 'Close';
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
    menu: menuIsActive
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RestyledLink, {
    to: link,
    isCalledByMenu: "menu",
    boundHandleClickForApp: boundHandleClickForApp
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Label, null, text), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(IconContainer, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Icon, {
    image: arrowIcon
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Line, {
    menu: isMenu,
    reverie: isReverie ? 'active' : ''
  })));
}

/***/ }),

/***/ "./app/shared/PasswordLogin.jsx":
/*!**************************************!*\
  !*** ./app/shared/PasswordLogin.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PasswordLogin; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var FormHolder = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PasswordLogin__FormHolder",
  componentId: "sc-18zvb0x-0"
})(["position:absolute;top:0px;bottom:0px;left:0px;right:0px;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#fd1172;"]);
var Feedback = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "PasswordLogin__Feedback",
  componentId: "sc-18zvb0x-1"
})(["position:absolute;font-size:50px;top:10%;"]);
var ExplanationContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PasswordLogin__ExplanationContainer",
  componentId: "sc-18zvb0x-2"
})(["max-height:300px;max-width:200px;overflow:scroll;margin-bottom:25px;@media (min-width:425px){max-width:300px;}"]);
var ExplanationText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "PasswordLogin__ExplanationText",
  componentId: "sc-18zvb0x-3"
})(["color:yellow;margin-top:0px;margin-bottom:0px;text-align:center;"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].form.withConfig({
  displayName: "PasswordLogin__Form",
  componentId: "sc-18zvb0x-4"
})(["display:flex;flex-direction:column;align-items:center;"]);
var InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PasswordLogin__InputContainer",
  componentId: "sc-18zvb0x-5"
})(["display:flex;flex-direction:column;align-items:center;"]);
var Label = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].label.withConfig({
  displayName: "PasswordLogin__Label",
  componentId: "sc-18zvb0x-6"
})(["margin-bottom:15px;font-size:20px;color:white;"]);
var PasswordInput = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input.withConfig({
  displayName: "PasswordLogin__PasswordInput",
  componentId: "sc-18zvb0x-7"
})(["font-size:16px;"]);
var Submit = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PasswordLogin__Submit",
  componentId: "sc-18zvb0x-8"
})(["margin-top:15px;"]);
var Enter = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input.withConfig({
  displayName: "PasswordLogin__Enter",
  componentId: "sc-18zvb0x-9"
})([""]);
function PasswordLogin(props) {
  // Excellent primer on form use in React:
  // https://stackoverflow.com/a/36683831
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormHolder, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Feedback, null, props.appState.wrongPassword), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ExplanationContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ExplanationText, null, "Hi! Welcome to my prototype site. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " As of 7/4/19, it's in the final stages of development! ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " A fantastically talented illustrator is hard at work on custom art. In the meantime, it relies on placeholder images from Shutterstock (on the home and chapter pages). ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " If you've got the password, check it out, but be sure to come back later this summer when the final artwork's done!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form, {
    action: "",
    onSubmit: props.handlePasswordSubmit
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, null, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PasswordInput, {
    autoFocus: true,
    required: true,
    type: "text",
    value: props.appState.password,
    onChange: props.handlePasswordEntry
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Submit, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Enter, {
    type: "submit",
    value: "Enter"
  }))));
}

/***/ }),

/***/ "./app/shared/Shelf.jsx":
/*!******************************!*\
  !*** ./app/shared/Shelf.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])( // Filter out height from div
// eslint-disable-next-line
function (_ref) {
  var height = _ref.height,
      tinyHeight = _ref.tinyHeight,
      rest = _objectWithoutProperties(_ref, ["height", "tinyHeight"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", rest);
}).withConfig({
  displayName: "Shelf",
  componentId: "eu5beg-0"
})(["height:", ";display:flex;flex-shrink:0;margin-right:25px;margin-bottom:18px;@media (min-width:", "){height:", ";}"], function (p) {
  return p.tinyHeight ? p.tinyHeight : p.height;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.height;
}));

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
})(["max-width:200px;display:flex;flex-shrink:0;position:relative;@media (min-width:", "){max-width:225px;}@media (min-width:", "){max-width:250px;}"], function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.mediaQueries.narrowBreakOne;
});
var StyledList = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(_primitives_UnorderedList_jsx__WEBPACK_IMPORTED_MODULE_7__["default"]).withConfig({
  displayName: "ChapterNav__StyledList",
  componentId: "sc-1slo339-1"
})(["width:250px;height:25px;display:flex;flex:1;"]);
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
function ChapterNav(props) {
  var boundHandleClickForApp = props.boundHandleClickForApp,
      contentState = props.contentState;
  var allContentData = contentState.allContentData,
      chapterIndex = contentState.chapterIndex;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Nav, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(StyledList, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    mapData: allContentData,
    render: function render(_chapter, idx) {
      var normalizedTitle = Object(_helpers_normalize_js__WEBPACK_IMPORTED_MODULE_3__["default"])(allContentData[idx].attributes.title);
      var dotType = chapterIndex === idx ? _public_dot_full_png__WEBPACK_IMPORTED_MODULE_0___default.a : _public_dot_empty_png__WEBPACK_IMPORTED_MODULE_1___default.a;
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ListItem, {
        key: idx
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
        to: "/chapter/".concat(normalizedTitle),
        boundHandleClickForApp: boundHandleClickForApp
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(SelectorContainer, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Selector, {
        image: dotType,
        num: idx
      }))));
    }
  })));
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
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../primitives/Main.jsx */ "./app/primitives/Main.jsx");
/* harmony import */ var _primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../primitives/Overflow.jsx */ "./app/primitives/Overflow.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _primitives_ContentHolder_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../primitives/ContentHolder.jsx */ "./app/primitives/ContentHolder.jsx");
/* harmony import */ var _shared_Shelf_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/Shelf.jsx */ "./app/shared/Shelf.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");









var RestyledContentHolder = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(_primitives_ContentHolder_jsx__WEBPACK_IMPORTED_MODULE_6__["default"]).withConfig({
  displayName: "Story__RestyledContentHolder",
  componentId: "sc-1gwc67d-0"
})(["display:", ";flex-direction:column;flex:1;"], function (p) {
  return p.showStoryText ? 'flex' : 'none';
});
var RestyledShelf = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(_shared_Shelf_jsx__WEBPACK_IMPORTED_MODULE_7__["default"]).withConfig({
  displayName: "Story__RestyledShelf",
  componentId: "sc-1gwc67d-1"
})(["flex-direction:column;align-items:center;@media (min-width:", "){height:117px;}@media (min-width:", "){height:131px;}"], function (p) {
  return p.theme.mediaQueries.tinyViewTwo;
}, function (p) {
  return p.theme.mediaQueries.narrowBreakOne;
});
var PictureHolder = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].section.withConfig({
  displayName: "Story__PictureHolder",
  componentId: "sc-1gwc67d-2"
})(["visibility:", ";flex:", ";"], function (p) {
  return p.showStoryText ? 'hidden' : 'visible';
}, function (p) {
  return p.showStoryText ? '0' : '1';
});
var Chapter = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].h2.withConfig({
  displayName: "Story__Chapter",
  componentId: "sc-1gwc67d-3"
})(["color:", ";font-weight:400;font-size:", ";"], function (p) {
  return p.theme.colors.lightBlack;
}, function (p) {
  return p.theme.fontSizes.nine;
});
var BookTitle = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].h1.withConfig({
  displayName: "Story__BookTitle",
  componentId: "sc-1gwc67d-4"
})(["font-family:'Playfair Display',serif;margin:0px 0px 10px;font-size:2rem;font-weight:900;color:#fd1172;text-align:center;max-width:500px;@media (min-width:", "){font-size:2.5rem;}@media (min-width:", "){font-size:3rem;}"], function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.mediaQueries.narrowBreakOne;
});
var TagLine = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].p.withConfig({
  displayName: "Story__TagLine",
  componentId: "sc-1gwc67d-5"
})(["font-style:italic;font-size:", ";color:", ";text-align:center;margin-bottom:5px;@media (min-width:", "){font-size:", ";}"], function (p) {
  return p.theme.fontSizes.twentyTwo;
}, function (p) {
  return p.theme.colors.lightBlack;
}, function (p) {
  return p.theme.mediaQueries.tinyViewTwo;
}, function (p) {
  return p.theme.fontSizes.six;
});
var ChapterTitle = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].h2.withConfig({
  displayName: "Story__ChapterTitle",
  componentId: "sc-1gwc67d-6"
})(["font-family:'Aref Ruqaa',serif;font-size:3rem;font-weight:300;margin-top:-8px;margin-bottom:10px;color:", ";"], function (p) {
  return p.theme.colors.blue;
});
var Image = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Story__Image",
  componentId: "sc-1gwc67d-7"
})(["position:absolute;top:0px;left:0px;background-image:url(", ");background-position:center;background-size:cover;height:100%;width:100%;filter:", ";"], function (p) {
  return p.src;
}, function (p) {
  return p.theme.blurForTempContent && p.theme.blur;
});
var StoryText = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].section.withConfig({
  displayName: "Story__StoryText",
  componentId: "sc-1gwc67d-8"
})(["font-size:", ";p{margin-bottom:", ";margin-left:2px;&:last-child{margin-bottom:0px;}}"], function (p) {
  return p.theme.fontSizes.twelve;
}, function (p) {
  return p.theme.bottomMargin.regular;
});
function Story(props) {
  var appState = props.appState,
      contentState = props.contentState,
      overflowRef = props.overflowRef;
  var showStoryText = appState.showStoryText;
  var finalData = contentState.finalData;
  var _finalData$attributes = finalData.attributes,
      image = _finalData$attributes.image,
      number = _finalData$attributes.number,
      title = _finalData$attributes.title;
  var bookTitle = 'The Magical, Semi-Fictional Biography of a Real Boy';
  var dek = 'An experiment in digital + traditional storytelling';
  var isCover = number === 1;
  var chapterNumber;

  switch (number) {
    case 1:
      chapterNumber = 'one';
      break;

    case 2:
      chapterNumber = 'two';
      break;

    case 3:
      chapterNumber = 'three';
      break;

    default:
      chapterNumber = 'four';
      break;
  }

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(RestyledContentHolder, {
    showStoryText: showStoryText,
    saveSerifs: true
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(RestyledShelf, {
    height: "103px"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(TagLine, null, dek), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(BookTitle, null, bookTitle), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ChapterNav_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], props)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ref: overflowRef
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Chapter, {
    isCover: isCover
  }, "Chapter ", chapterNumber), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ChapterTitle, {
    isCover: isCover
  }, title), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(StoryText, null, react_html_parser__WEBPACK_IMPORTED_MODULE_5___default()(marked__WEBPACK_IMPORTED_MODULE_1___default()(finalData.body, {
    smartypants: true
  }))))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(PictureHolder, {
    showStoryText: showStoryText
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Image, {
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
/* harmony import */ var react_clipboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-clipboard.js */ "./node_modules/react-clipboard.js/dist/react-clipboard.js");
/* harmony import */ var react_clipboard_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_clipboard_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../primitives/StyledLink.jsx */ "./app/primitives/StyledLink.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
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






var myEmailAddress = 'hello@jamesabels.net';
var PageCover = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].section.withConfig({
  displayName: "LegalTermsOrBizCard__PageCover",
  componentId: "sc-171ayyj-0"
})(["display:flex;justify-content:center;align-items:center;position:absolute;top:0px;left:0px;bottom:0px;width:100%;background-color:", ";transition:background-color .75s;z-index:1;"], function (p) {
  return !p.copying ? Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["rgba(115,192,232,", ")"], !p.home ? '.7' : '.2') : Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["rgba(253,17,114,", ")"], !p.home ? '.7' : '.2');
});
var CardHolder = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "LegalTermsOrBizCard__CardHolder",
  componentId: "sc-171ayyj-1"
})(["width:100%;display:flex;justify-content:center;align-items:center;position:absolute;top:0px;left:0px;bottom:55px;"]);
var Card = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].section.withConfig({
  displayName: "LegalTermsOrBizCard__Card",
  componentId: "sc-171ayyj-2"
})(["height:160px;width:275px;background-color:", ";pointer-events:all;display:flex;justify-content:center;align-items:center;box-shadow:7px 7px 5px -1px rgba(0,0,0,0.3);@media (min-width:", "){height:200px;width:350px;}"], function (p) {
  return p.theme.colors.white;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
});
var StyledClipboardButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(react_clipboard_js__WEBPACK_IMPORTED_MODULE_0___default.a).withConfig({
  displayName: "LegalTermsOrBizCard__StyledClipboardButton",
  componentId: "sc-171ayyj-3"
})(["border:", ";background-color:", ";padding:0px;height:85%;width:90%;display:flex;align-items:center;pointer-events:all;:active{color:black;}:focus{outline:0px;}&:after{position:absolute;top:0;left:0;width:200%;height:200%;border:1px #999 solid;;transform:scale(0.5);}"], function (p) {
  return p.businessCard ? "1px solid ".concat(p.theme.colors.pink) : 'none';
}, function (p) {
  return p.theme.colors.white;
});
var Graf = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].p.withConfig({
  displayName: "LegalTermsOrBizCard__Graf",
  componentId: "sc-171ayyj-4"
})(["font-weight:500;flex:1;font-size:", ";margin-bottom:0px;@media (min-width:", "){font-size:", ";}"], function (p) {
  return p.theme.fontSizes.six;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.fontSizes.ten;
});
var MyCopyright = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].span.withConfig({
  displayName: "LegalTermsOrBizCard__MyCopyright",
  componentId: "sc-171ayyj-5"
})(["font-size:", ";display:block;margin-bottom:3px;font-family:'Montserrat',sans-serif;@media (min-width:", "){font-size:", ";}"], function (p) {
  return p.theme.fontSizes.three;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.fontSizes.nine;
});
var ClipCopyright = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].span.withConfig({
  displayName: "LegalTermsOrBizCard__ClipCopyright",
  componentId: "sc-171ayyj-6"
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

      var linkOrTextForClips = currentCaller !== 'journalism' ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        style: {
          color: 'black',
          textDecoration: 'underline'
        },
        to: "/journalism"
      }, "clips") : 'clips'; // The following HTML is span, not a <p>, b/c it's nested in
      // a <p> (React doesn't allow <p> nesting, kicks a warning).

      var legalNotice = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MyCopyright, null, "\xA9 ", new Date().getFullYear(), ", James Abels. All rights reserved."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ClipCopyright, null, "(All ", linkOrTextForClips, " owned by their respective publisher.)")); // Real email address shouldn't be a problem here b/c it isn't
      // on a real route. It'd be hard to scrape w/o special effort.

      var cardText = showBusinessCard ? !copying ? myEmailAddress : 'Copied!' : legalNotice; // StyledClipboardButton triggers success handler
      // AFTER it's copied something to the DOM. We
      // need to stop it from running if we want to
      // share it with legalTerms. Turns out, it
      // won't copy empty strings.

      var textToCopy = showBusinessCard ? myEmailAddress : '';

      var eventHandler = function eventHandler() {
        if (showBusinessCard) {
          boundHandleClickForApp('toggleBusinessCard');
        } else {
          boundHandleClickForApp('toggleLegalTerms');
        }
      };

      var stopPropagation = function stopPropagation(event) {
        return event.stopPropagation();
      };

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PageCover, {
        home: homeIsActive,
        copying: copying && !showLegalTerms,
        onClick: eventHandler
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CardHolder, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Card, {
        home: homeIsActive,
        reverie: reverieIsActive,
        onClick: stopPropagation
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledClipboardButton, {
        businessCard: showBusinessCard,
        "data-clipboard-text": textToCopy,
        reverie: reverieIsActive,
        onSuccess: function onSuccess() {
          // Must use 'this.props..' to get updated value
          // after adding the listener to the Clipboard.
          // There's a problem w/'this' otherwise.
          if (_this2.props.appState.showBusinessCard && _this2.timeoutId === null) {
            // Technically runs after the copy is made.
            if (false) {}

            makeCopies();
            _this2.timeoutId = setTimeout(function () {
              _this2.timeoutId = null;
              makeCopies();
            }, 1150);
          }
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Graf, {
        key: cardText,
        copying: !showLegalTerms && copying
      }, cardText)))));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var showBusinessCard = this.props.appState.showBusinessCard;
      var pathname = window.location.pathname;

      if (false) {}
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props$appState = this.props.appState,
          showBusinessCard = _this$props$appState.showBusinessCard,
          showLegalTerms = _this$props$appState.showLegalTerms;
      var _prevProps$appState = prevProps.appState,
          businessCardWasActive = _prevProps$appState.businessCardWasActive,
          legalTermsWereActive = _prevProps$appState.legalTermsWereActive;
      var pathname = window.location.pathname;

      if (false) {}
    } // Not added to ClickHandling. Dealing w/'this' binding
    // inside the class is a nightmare. K.I.S.S.

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
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);



/***/ }),

/***/ "./public/antacid.png":
/*!****************************!*\
  !*** ./public/antacid.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA1CAYAAADh5qNwAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAuQwAALkMBFaxbiwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKCSURBVGiB7Zk/axRBGId/40VIY4iCkFNBzuOMhSBoZ2EhfgBPsM+3kIiFoFE7wcJop+TUEFBLI3YWQuwvYhFSaWxiIRokp3ksbhc3l51bZ27uX9ynnczze2dv8u4yI+Xk5OTk/A8Ao0Ch33UkAQrAaLu/2ZPhaEhaAC4DJlxpfgAXJD2T9KtTUZUmS8D5INW513AWeBvVcTGU9B1/eQOcCSLOzj0JLCSyl4LtGOAc29mKwipBAnbmHQUeAr9bcsPuFGCRnWxG4YcCZRwE7gA/U7JehchoDTyV8uRifkTF7Pd07wOuAN8s/i3gdOg1xeHzltCYdWDK0TkVzWvHvIszq6W3Mi1ps834AUkTjs5iNM9GQ9I1R6cbwGzGU5109FUyfPe7tZZkEUXgu6WAuqdz2eLbAA67+ly3n4wxa5LuWYZfuPoy5t01xnzydLoBjLP9n7sOzABFT18xml9PONeBcR+f99uZZpebkPTSGPPR15PinZRUlfTFGPMolHfo6cmXN1CWVJK0aoxZ6UVm1wDGgCctHa0GjPW7Nm+Ap5ZWXet3bV4AZcuCYo51K9v5PeVAKWN8KBe1mjE+nA0DmLNsvcf9rs2bqPvVWhY01+3u16v3VElSWdKKMSZrW+akkX/7JYIH+ivdC+C2pavd9PTNWHy3QtduK6BI8/QojWVP5weLbwM4EnoNaQU8sBQQc8LRdzzDN9uttcQFVGgeYLZj2tF5NcPXcH1Qrp9JNyTtbTP+VdKao/NzNM/GiKTrjs5/g/6f0Ia/lABep4T18ix9MURGMmz33XowOPdT7wlxPwVcioSDcpNY7VRWAJ4zQHe+0S830olkKG/nc3JycnJ2DX8AhegvLjR++EIAAAAASUVORK5CYII="

/***/ }),

/***/ "./public/header-nav-open.png":
/*!************************************!*\
  !*** ./public/header-nav-open.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA1CAYAAADh5qNwAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAuQwAALkMBFaxbiwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAATiSURBVGiB3ZpdaB5VEIbnmNjGSv8igqkSm8Ta1gqpCrZVK63kzsZasSgVJFf2Rqko1EaFClp/8MKftooggiRqEa0UtVYFBZFiBXMhpI1gSHKhQWgiiJbP1HyPF2eWbDZ7dvfsftmEvjfJ5sy8M7NndnfOTERKArC9LFulAGgEBubaj5oCeACLdWXYu6gMIyKyTX9eGCkI1APjulOn5tqfmgDYyhSqwFWzbbOM9NsW+t2IyJ0l2HQDaADqCnL8wnQcL8hXBzQUJfgY2AmYHPrXMBMVYElOfzqAD4H6PPphoh3BQw7c4an7eExQADs9eW4BvlPdu/0icJOeDDn0NXBTRr1vHUH1ZtS/XncmwKk8GeMivz3iVFWNrUrQWQpMOIL6E7g4Qfdq4C1gMqLnlSlZAjsR49yEGl8RI3+/IyCng8DlwIvY5y6KL2oakBpsj7lzAf5RZ5aH5HtTgnotJLsYeAL4yyFbBW6seVBq/EiKo2NAF/ateTZFdgQwKj+WInvEx0/fj2+3iEwkrDeKyBUicquIXJbC1Swi7SLSpHounBeRpz189AvKGDMkIu+kiH0i06uIJGwXkY9SZN42xvyakS8fgCbgb0ea9KvM6ZR0CtCXIn8OuNLXR+/azxgzKiKvO5aPAq0isjYj3Q3AShE56lh/xRjzm6eL+QAsizzc/cAB3cVHM+5SgEdU74DyBBgDlpUSUCiwLmAfsFqvW4E9wGDIsSFgL3Czrm/Q6+GQzKDqtSrPauXtKjUgNV4HbAZeitzhAAeBBQ7dhcChGJ1+5dtMwdOBTyCXAp3YKmI0IaUORvTasBV2W+TvhxM4xrCl2IPUOg01bR4CPgX+TXAiwBCwUHWXAO9F1nvRowewgOnp6sJ/wPfYquO6PEHUA1uAl4GBDAaj2Bviet8h0xuS2ZfDxoD6twXX2Qrbl9sFfMBUkyQvNihnW4pc8GLYWNDeONbvXUBjEFAn+XbEhcDZjhS5jlB61woDQGd4t9YB3diDWLUAcdadalG5TQVsVbH+dpPWKAVWALuB48SfbZIQfqZ6HDLvFnimKurXbmLOcZkALGLqNf5HBqPDTH/7Rc9VPUy9/RqwR5A0jDP1el+aK5CEAOuA27AHwmjrK4xDEb0W7DPWEvn7mwkcI9gb2YnjIz4rANYD+4G+GKcOozsWo9cAvBGj06d860sLIuJYtPZrxhan4Y/psMpsxL7lNul1OOUGVa9Zeeam9iO5St+TkFJxeJj5UKUDLzgcfA7/785KDSgOz5cVUBO2exSH0yoTV7XH4SeVP+NYP0eOKUmeqcd+EVnkWFsLrBGRzzJyHQOuFZE1jvVLROQpT//8AKzC3XUN0I09D2VBO/Bkisx5vVGZ4btTz4qIs10sIuMiMioiJ0XkbArXiIj8LCK/q54L9SLyTHYXPYB/h9ZVIgV4NSSbpUObaSjhG9SXMcaSeun3pQS1NUYnqZd+otYBXXhTD/LPp75xBNWTUT86n/qRWsyngHuUMM8k8TFHUPd68oQniTv8IphJVnTmG3dQrACLc/pTfOZLbabz0VbB5wX5Uqfzid8pY0zFGDNZxAmZWV0cK0JmjJk0xlSKcBQGto0VoEqOKca8A9Onij+UYXPW/41H0/crvSyUevMK2EYj5GkZz1cAy4Ezc+1HzQHcVZat/wEAObyw/uqVnQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./public/image-loader.gif":
/*!*********************************!*\
  !*** ./public/image-loader.gif ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhEAAQAPYAAP///wAAANTU1JSUlGBgYEBAQERERG5ubqKiotzc3KSkpCQkJCgoKDAwMDY2Nj4+Pmpqarq6uhwcHHJycuzs7O7u7sLCwoqKilBQUF5eXr6+vtDQ0Do6OhYWFoyMjKqqqlxcXHx8fOLi4oaGhg4ODmhoaJycnGZmZra2tkZGRgoKCrCwsJaWlhgYGAYGBujo6PT09Hh4eISEhPb29oKCgqioqPr6+vz8/MDAwMrKyvj4+NbW1q6urvDw8NLS0uTk5N7e3s7OzsbGxry8vODg4NjY2PLy8tra2np6erS0tLKyskxMTFJSUlpaWmJiYkJCQjw8PMTExHZ2djIyMurq6ioqKo6OjlhYWCwsLB4eHqCgoE5OThISEoiIiGRkZDQ0NMjIyMzMzObm5ri4uH5+fpKSkp6enlZWVpCQkEpKSkhISCIiIqamphAQEAwMDKysrAQEBJqamiYmJhQUFDg4OHR0dC4uLggICHBwcCAgIFRUVGxsbICAgAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAHjYAAgoOEhYUbIykthoUIHCQqLoI2OjeFCgsdJSsvgjcwPTaDAgYSHoY2FBSWAAMLE4wAPT89ggQMEbEzQD+CBQ0UsQA7RYIGDhWxN0E+ggcPFrEUQjuCCAYXsT5DRIIJEBgfhjsrFkaDERkgJhswMwk4CDzdhBohJwcxNB4sPAmMIlCwkOGhRo5gwhIGAgAh+QQJCgAAACwAAAAAEAAQAAAHjIAAgoOEhYU7A1dYDFtdG4YAPBhVC1ktXCRfJoVKT1NIERRUSl4qXIRHBFCbhTKFCgYjkII3g0hLUbMAOjaCBEw9ukZGgidNxLMUFYIXTkGzOmLLAEkQCLNUQMEAPxdSGoYvAkS9gjkyNEkJOjovRWAb04NBJlYsWh9KQ2FUkFQ5SWqsEJIAhq6DAAIBACH5BAkKAAAALAAAAAAQABAAAAeJgACCg4SFhQkKE2kGXiwChgBDB0sGDw4NDGpshTheZ2hRFRVDUmsMCIMiZE48hmgtUBuCYxBmkAAQbV2CLBM+t0puaoIySDC3VC4tgh40M7eFNRdH0IRgZUO3NjqDFB9mv4U6Pc+DRzUfQVQ3NzAULxU2hUBDKENCQTtAL9yGRgkbcvggEq9atUAAIfkECQoAAAAsAAAAABAAEAAAB4+AAIKDhIWFPygeEE4hbEeGADkXBycZZ1tqTkqFQSNIbBtGPUJdD088g1QmMjiGZl9MO4I5ViiQAEgMA4JKLAm3EWtXgmxmOrcUElWCb2zHkFQdcoIWPGK3Sm1LgkcoPrdOKiOCRmA4IpBwDUGDL2A5IjCCN/QAcYUURQIJIlQ9MzZu6aAgRgwFGAFvKRwUCAAh+QQJCgAAACwAAAAAEAAQAAAHjIAAgoOEhYUUYW9lHiYRP4YACStxZRc0SBMyFoVEPAoWQDMzAgolEBqDRjg8O4ZKIBNAgkBjG5AAZVtsgj44VLdCanWCYUI3txUPS7xBx5AVDgazAjC3Q3ZeghUJv5B1cgOCNmI/1YUeWSkCgzNUFDODKydzCwqFNkYwOoIubnQIt244MzDC1q2DggIBACH5BAkKAAAALAAAAAAQABAAAAeJgACCg4SFhTBAOSgrEUEUhgBUQThjSh8IcQo+hRUbYEdUNjoiGlZWQYM2QD4vhkI0ZWKCPQmtkG9SEYJURDOQAD4HaLuyv0ZeB4IVj8ZNJ4IwRje/QkxkgjYz05BdamyDN9uFJg9OR4YEK1RUYzFTT0qGdnduXC1Zchg8kEEjaQsMzpTZ8avgoEAAIfkECQoAAAAsAAAAABAAEAAAB4iAAIKDhIWFNz0/Oz47IjCGADpURAkCQUI4USKFNhUvFTMANxU7KElAhDA9OoZHH0oVgjczrJBRZkGyNpCCRCw8vIUzHmXBhDM0HoIGLsCQAjEmgjIqXrxaBxGCGw5cF4Y8TnybglprLXhjFBUWVnpeOIUIT3lydg4PantDz2UZDwYOIEhgzFggACH5BAkKAAAALAAAAAAQABAAAAeLgACCg4SFhjc6RhUVRjaGgzYzRhRiREQ9hSaGOhRFOxSDQQ0uj1RBPjOCIypOjwAJFkSCSyQrrhRDOYILXFSuNkpjggwtvo86H7YAZ1korkRaEYJlC3WuESxBggJLWHGGFhcIxgBvUHQyUT1GQWwhFxuFKyBPakxNXgceYY9HCDEZTlxA8cOVwUGBAAA7AAAAAAAAAAAA"

/***/ }),

/***/ "./public/linked-in-icon.png":
/*!***********************************!*\
  !*** ./public/linked-in-icon.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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
//# sourceMappingURL=main.2bb1ccfe79149c8ffed3.js.map