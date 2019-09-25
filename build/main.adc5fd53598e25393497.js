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
/* harmony import */ var _assets_fonts_aref_ruqaa_v8_latin_aref_ruqaa_v8_latin_700_woff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/fonts/aref-ruqaa-v8-latin/aref-ruqaa-v8-latin-700.woff */ "./app/assets/fonts/aref-ruqaa-v8-latin/aref-ruqaa-v8-latin-700.woff");
/* harmony import */ var _assets_fonts_aref_ruqaa_v8_latin_aref_ruqaa_v8_latin_700_woff__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_aref_ruqaa_v8_latin_aref_ruqaa_v8_latin_700_woff__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_fonts_aref_ruqaa_v8_latin_aref_ruqaa_v8_latin_700_woff2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/fonts/aref-ruqaa-v8-latin/aref-ruqaa-v8-latin-700.woff2 */ "./app/assets/fonts/aref-ruqaa-v8-latin/aref-ruqaa-v8-latin-700.woff2");
/* harmony import */ var _assets_fonts_aref_ruqaa_v8_latin_aref_ruqaa_v8_latin_700_woff2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_aref_ruqaa_v8_latin_aref_ruqaa_v8_latin_700_woff2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_fonts_montserrat_v14_latin_montserrat_v14_latin_300_woff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/fonts/montserrat-v14-latin/montserrat-v14-latin-300.woff */ "./app/assets/fonts/montserrat-v14-latin/montserrat-v14-latin-300.woff");
/* harmony import */ var _assets_fonts_montserrat_v14_latin_montserrat_v14_latin_300_woff__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_montserrat_v14_latin_montserrat_v14_latin_300_woff__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_fonts_montserrat_v14_latin_montserrat_v14_latin_regular_woff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/fonts/montserrat-v14-latin/montserrat-v14-latin-regular.woff */ "./app/assets/fonts/montserrat-v14-latin/montserrat-v14-latin-regular.woff");
/* harmony import */ var _assets_fonts_montserrat_v14_latin_montserrat_v14_latin_regular_woff__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_montserrat_v14_latin_montserrat_v14_latin_regular_woff__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_fonts_montserrat_v14_latin_montserrat_v14_latin_500_woff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/fonts/montserrat-v14-latin/montserrat-v14-latin-500.woff */ "./app/assets/fonts/montserrat-v14-latin/montserrat-v14-latin-500.woff");
/* harmony import */ var _assets_fonts_montserrat_v14_latin_montserrat_v14_latin_500_woff__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_montserrat_v14_latin_montserrat_v14_latin_500_woff__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_fonts_playfair_display_v15_latin_playfair_display_v15_latin_700_woff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-700.woff */ "./app/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-700.woff");
/* harmony import */ var _assets_fonts_playfair_display_v15_latin_playfair_display_v15_latin_700_woff__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_playfair_display_v15_latin_playfair_display_v15_latin_700_woff__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_fonts_playfair_display_v15_latin_playfair_display_v15_latin_700_woff2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-700.woff2 */ "./app/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-700.woff2");
/* harmony import */ var _assets_fonts_playfair_display_v15_latin_playfair_display_v15_latin_700_woff2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_playfair_display_v15_latin_playfair_display_v15_latin_700_woff2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_fonts_playfair_display_v15_latin_playfair_display_v15_latin_900_woff__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-900.woff */ "./app/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-900.woff");
/* harmony import */ var _assets_fonts_playfair_display_v15_latin_playfair_display_v15_latin_900_woff__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_playfair_display_v15_latin_playfair_display_v15_latin_900_woff__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_fonts_playfair_display_v15_latin_playfair_display_v15_latin_900_woff2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-900.woff2 */ "./app/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-900.woff2");
/* harmony import */ var _assets_fonts_playfair_display_v15_latin_playfair_display_v15_latin_900_woff2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_playfair_display_v15_latin_playfair_display_v15_latin_900_woff2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Body_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Body.jsx */ "./app/Body.jsx");
/* harmony import */ var _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./classes/ClickHandling.js */ "./app/classes/ClickHandling.js");
/* harmony import */ var intrinsic_scale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! intrinsic-scale */ "./node_modules/intrinsic-scale/dist/intrinsic-scale.common-js.js");
/* harmony import */ var intrinsic_scale__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(intrinsic_scale__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _header_footer_Footer_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header-footer/Footer.jsx */ "./app/header-footer/Footer.jsx");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var _header_footer_Header_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./header-footer/Header.jsx */ "./app/header-footer/Header.jsx");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/dist/index.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _temp_content_LegalTermsOrBizCard_jsx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./temp-content/LegalTermsOrBizCard.jsx */ "./app/temp-content/LegalTermsOrBizCard.jsx");
/* harmony import */ var _classes_Location_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./classes/Location.js */ "./app/classes/Location.js");
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! object-fit-images */ "./node_modules/object-fit-images/dist/ofi.common-js.js");
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(object_fit_images__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _shared_PasswordLogin_jsx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/PasswordLogin.jsx */ "./app/shared/PasswordLogin.jsx");
/* harmony import */ var _helpers_preloadBigImages__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./helpers/preloadBigImages */ "./app/helpers/preloadBigImages.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./classes/Referrer.js */ "./app/classes/Referrer.js");
/* harmony import */ var _classes_ScrollHandling_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./classes/ScrollHandling.js */ "./app/classes/ScrollHandling.js");
/* harmony import */ var _classes_State_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./classes/State.js */ "./app/classes/State.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
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
  var data = _taggedTemplateLiteral(["\n  @font-face {\n    font-family: 'Aref Ruqaa';\n    font-style: normal;\n    font-weight: 700;\n    src:\n      url('", "') format('woff2'),\n      url('", "') format('woff');\n  }\n  @font-face {\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: 300;\n    src:\n      url('", "') format('woff2'),\n      url('", "') format('woff');\n  }\n  @font-face {\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: normal;\n    src:\n      url('", "') format('woff2'),\n      url('", "') format('woff');\n  }\n  @font-face {\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: 500;\n    src:\n      url('", "') format('woff2'),\n      url('", "') format('woff');\n  }\n  @font-face {\n    font-family: 'Playfair Display';\n    font-style: normal;\n    font-weight: 700;\n    src:\n      url('", "') format('woff2'),\n      url('", "') format('woff');\n  }\n  @font-face {\n    font-family: 'Playfair Display';\n    font-style: normal;\n    font-weight: 900;\n    src:\n      url('", "') format('woff2'),\n      url('", "') format('woff');\n  }\n\n  html {\n    // Best practice to load fonts: \n    // https://stackoverflow.com/questions/12316501/including-google-web-fonts-link-or-import\n\n    font-family: 'Montserrat', sans-serif;\n    font-size: 62.5%;\n    font-weight: 300;\n    background-color: ", ";\n  }\n\n  body {\n    margin: 0px;\n    padding: 0px;\n    font-size: ", ";\n    -webkit-overflow-scrolling: touch;\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n\n    h1,\n    h2,\n    h3,\n    p,\n    ul {\n      margin: 0px;\n    }\n\n    h1 {\n      font-family: 'Playfair Display', serif;\n      font-weight: 900;\n    }\n\n    h1,\n    h2 {\n      margin-left: 2px;\n    }\n\n    p {\n      margin-bottom: ", ";\n      line-height: 1.6;\n    }\n  }\n"]);

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
  twentyTwo: '1.13rem',
  twentyThree: '1.36rem'
};
var mediaQueries = {
  tinyView: '390px',
  tinyViewTwo: '425px',
  narrowBreakOne: '500px',
  narrowBreakTwo: '690px',
  narrowBreakTwoB: '691px',
  desktop: '848px',
  huge: '1920px'
};
var bottomMargin = {
  regular: '20px'
};
var blurControl = {
  regular: 'blur(4px)'
};
var ZoomControl = styled_components__WEBPACK_IMPORTED_MODULE_12__["default"].div.withConfig({
  displayName: "App__ZoomControl",
  componentId: "sc-11u8va4-0"
})(["display:flex;flex-direction:column;align-items:center;height:", "px;overflow:hidden;position:relative;@media(orientation:landscape){", "}", ";"], function (p) {
  return p.theme.pageHeight;
}, function (p) {
  return p.fixMobileSafariBugOn7 && 'position: fixed; bottom: 0;';
}, function (p) {
  return p.home && Object(styled_components__WEBPACK_IMPORTED_MODULE_12__["css"])(["width:100%;overflow:hidden;"]);
});
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_12__["createGlobalStyle"])(_templateObject(), _assets_fonts_aref_ruqaa_v8_latin_aref_ruqaa_v8_latin_700_woff2__WEBPACK_IMPORTED_MODULE_1___default.a, _assets_fonts_aref_ruqaa_v8_latin_aref_ruqaa_v8_latin_700_woff__WEBPACK_IMPORTED_MODULE_0___default.a, _assets_fonts_montserrat_v14_latin_montserrat_v14_latin_300_woff__WEBPACK_IMPORTED_MODULE_2___default.a, _assets_fonts_montserrat_v14_latin_montserrat_v14_latin_300_woff__WEBPACK_IMPORTED_MODULE_2___default.a, _assets_fonts_montserrat_v14_latin_montserrat_v14_latin_regular_woff__WEBPACK_IMPORTED_MODULE_3___default.a, _assets_fonts_montserrat_v14_latin_montserrat_v14_latin_regular_woff__WEBPACK_IMPORTED_MODULE_3___default.a, _assets_fonts_montserrat_v14_latin_montserrat_v14_latin_500_woff__WEBPACK_IMPORTED_MODULE_4___default.a, _assets_fonts_montserrat_v14_latin_montserrat_v14_latin_500_woff__WEBPACK_IMPORTED_MODULE_4___default.a, _assets_fonts_playfair_display_v15_latin_playfair_display_v15_latin_700_woff2__WEBPACK_IMPORTED_MODULE_6___default.a, _assets_fonts_playfair_display_v15_latin_playfair_display_v15_latin_700_woff__WEBPACK_IMPORTED_MODULE_5___default.a, _assets_fonts_playfair_display_v15_latin_playfair_display_v15_latin_900_woff2__WEBPACK_IMPORTED_MODULE_8___default.a, _assets_fonts_playfair_display_v15_latin_playfair_display_v15_latin_900_woff__WEBPACK_IMPORTED_MODULE_7___default.a, function (p) {
  return p.reverie ? '#d2e7ff' : p.notFound ? '#fd1172' : '';
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
    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search;
    var images = Object(_helpers_preloadBigImages__WEBPACK_IMPORTED_MODULE_21__["default"])();
    var referrer = new _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_23__["default"](props);
    var location = new _classes_Location_js__WEBPACK_IMPORTED_MODULE_18__["default"](referrer.pathToMatch, {
      location: {
        pathname: pathname
      }
    });
    var illustrationState; // Check status of illustration for appState.chapter
    // Also updated in ReloadRoute (for section shifts)
    // and in contentLoader.cDU for swapped content

    if (location.caller === 'chapter') {
      var state = new _classes_State_js__WEBPACK_IMPORTED_MODULE_25__["default"]({
        location: {
          pathname: pathname
        }
      }, location);
      illustrationState = state.checkIllustrationState(images, true);
    } // Prevent loading animation and transitions when using the same tab
    // But, new tabs will always run the animation and transitions...
    // This may be a problem with gh-pages, look into later...


    var alreadyLoaded = images.alreadyLoaded.reduce(function (accum, currentVal) {
      return accum + currentVal;
    }, 0) > 3; // Let's deal w/height.
    //  1. Check value based on device type.
    //  2. If the screen is landscape:
    //    a. Set property on initial load,
    //    b. Resize on orientation change via updateHeight(),
    //    c. Keep resized height on subsequent orientation
    //    changes by rejecting w/n updateHeight() when
    //    this.minAllowedHeight > newHeight.

    var pageHeight = react_device_detect__WEBPACK_IMPORTED_MODULE_16__["isMobile"] && !react_device_detect__WEBPACK_IMPORTED_MODULE_16__["isMobileSafari"] ? document.documentElement.clientHeight : window.innerHeight;
    var coverVals = Object(intrinsic_scale__WEBPACK_IMPORTED_MODULE_11__["cover"])(window.innerWidth, pageHeight, 2131, 1244); // One way to block orientation change
    // https://css-tricks.com/snippets/css/orientation-lock/

    if (false) {} // Lower limit for resizing — (iPhone/SE form
    // factor uses default height, wider phones
    // use their true height).


    _this.minAllowedHeight = 324; // Narrow iPhones are 320px in width, larger ones are ~325px

    _this.defaultHeightWhenTooSmall = react_device_detect__WEBPACK_IMPORTED_MODULE_16__["isMobile"] && !react_device_detect__WEBPACK_IMPORTED_MODULE_16__["isMobileSafari"] ? document.documentElement.clientHeight : window.innerHeight; // Arbitrary (iPhone SE height)

    _this.resizeTimeoutId = undefined; // Let's debounce 'resize'!

    _this.resizeTimeoutId2 = undefined; // Let's debounce 'resize'!

    _this.headerMenuTimeoutId = undefined; // Prevent resize when scrolling oversized page. Not using state
    // b/c it causes overflowing divs (w/content in them) to 'jump'
    // when scrolling.

    _this.isAfterTouchWhenScrollingPage = false;
    _this.state = {
      currentCaller: location.caller !== 'i' ? location.caller : 'home',
      lastCaller: '',
      inCity: false,
      // Fantasy image on home if false
      isMenu: referrer.isMenu(props),
      // Menu page (/projects, /journalism, /reverie)
      height: // Sets height of <main />
      pageHeight > _this.minAllowedHeight ? pageHeight : _this.defaultHeightWhenTooSmall,
      showBusinessCard: false,
      // Show business card
      showLegalTerms: false,
      // Show legal terms
      headerMenuIsOpen: false,
      pinchZoomed: false,
      // We're zoomed! or not.
      isZooming: false,
      // True when pinch zooming is ongoing
      isAfterTouch: false,
      // Resize w/clientHeight when true
      heartbeat: alreadyLoaded ? 3 : 0,
      // 0 = not ready, 1 = ready (images loaded), 2 = run w/delay (left early), 3 = nevermore (b/c it ran in the past)
      finishedHomePageLoad: alreadyLoaded,
      illustrationLevel: 0,
      // Animate blur/transform on story images,
      illustrationDirection: 'enter',
      illustrationDelay: false,
      password: '',
      isValidUser: false,
      wrongPassword: '',
      spacerHeight: 0,
      // Set by 'handleResize', so must run here. Used by Home/NameTag.
      nameTagWidth: Math.floor(.27 * coverVals.width),
      // Orig. dimensions: 1349 / 5115
      images: images,
      chapter: illustrationState ? illustrationState : 0
    };
    _this.handleResize = _this.handleResize.bind(_assertThisInitialized(_this));
    _this.handleTouchEnd = _this.handleTouchEnd.bind(_assertThisInitialized(_this));
    _this.closeHeaderMenu = _this.closeHeaderMenu.bind(_assertThisInitialized(_this));
    _this.handleTouchMove = _this.handleTouchMove.bind(_assertThisInitialized(_this));
    _this.updateSpacerHeight = _this.updateSpacerHeight.bind(_assertThisInitialized(_this));
    _this.handleBackAndForth = _this.handleBackAndForth.bind(_assertThisInitialized(_this));
    _this.updateNameTagWidth = _this.updateNameTagWidth.bind(_assertThisInitialized(_this));
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
      var hcForApp = new _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_10__["default"]('app', this);
      var boundHandleClickForApp = hcForApp.boundHandleClick;
      var homeIsActive = this.state.currentCaller === 'home';
      var reverieIsActive = this.state.currentCaller === 'reverie';
      var isNotFound = this.state.currentCaller === 'not-found';
      var fixMobileSafariBugOn7 = react_device_detect__WEBPACK_IMPORTED_MODULE_16__["isTablet"] && react_device_detect__WEBPACK_IMPORTED_MODULE_16__["isMobileSafari"] && react_device_detect__WEBPACK_IMPORTED_MODULE_16__["osVersion"][0] === '7';
      return  false ? undefined : react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_12__["ThemeProvider"], {
        theme: {
          bottomMargin: bottomMargin,
          colors: colors,
          fontSizes: fontSizes,
          mediaQueries: mediaQueries,
          pageHeight: this.state.height.toString(),
          blur: blurControl.regular,
          blurForTempContent: this.state.showBusinessCard || this.state.showLegalTerms,
          blurForHeaderMenu: this.state.headerMenuIsOpen
        }
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_22__["Fragment"] // Use Fragment b/c ThemeProvider only accepts one child.
      , null, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(GlobalStyle, {
        reverie: reverieIsActive,
        notFound: isNotFound
      }), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(ZoomControl // Though an extra <div>, ZoomControl lets us add 'touch'
      // events to React (alt is to add them to the Window)
      , {
        home: homeIsActive,
        onTouchMove: this.handleTouchMove,
        onTouchEnd: this.handleTouchEnd,
        fixMobileSafariBugOn7: fixMobileSafariBugOn7
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(_header_footer_Header_jsx__WEBPACK_IMPORTED_MODULE_15__["default"], _extends({}, this.props, {
        appState: this.state,
        boundHandleClickForApp: boundHandleClickForApp
      })), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(_Body_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, this.props, {
        appState: this.state,
        boundHandleClickForApp: boundHandleClickForApp
      })), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(_temp_content_LegalTermsOrBizCard_jsx__WEBPACK_IMPORTED_MODULE_17__["default"], _extends({}, this.props, {
        appState: this.state,
        boundHandleClickForApp: boundHandleClickForApp
      })), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(_header_footer_Footer_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], _extends({}, this.props, {
        appState: this.state,
        boundHandleClickForApp: boundHandleClickForApp
      })))));
    }
  }, {
    key: "closeHeaderMenu",
    value: function closeHeaderMenu() {
      clearTimeout(this.state.headerMenuTimeoutId);
      this.state.headerMenuTimeoutId = undefined;
      this.setState({
        headerMenuIsOpen: false
      });
    }
  }, {
    key: "hasStyle",
    value: function hasStyle(type) {
      // https://johanronsse.be/2016/01/03/simple-flexbox-check/
      var document = window.document.body || window.document.documentElement;
      var documentStyle = document.style;

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
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.hasStyle('flexbox')) {
        throw new Error("Browser doesn't support Flexbox");
      } else if (react_device_detect__WEBPACK_IMPORTED_MODULE_16__["isOpera"] || react_device_detect__WEBPACK_IMPORTED_MODULE_16__["isIE"] && react_device_detect__WEBPACK_IMPORTED_MODULE_16__["browserVersion"] <= 10) {
        throw new Error("Uh oh. I don't currently support Opera or IE if it's less than 11.");
      }

      if (!this.hasStyle('object-fit')) {
        object_fit_images__WEBPACK_IMPORTED_MODULE_19___default()();
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
      // console.log('called handleResize');
      clearTimeout(this.resizeTimeoutId); // Still moving, kill timeout

      this.resizeTimeoutId = setTimeout(function () {
        // console.log('timeout handleResize');
        _this3.updateSpacerHeight();

        _this3.updateNameTagWidth();

        _this3.updateHeight();
      }, 50);
    }
  }, {
    key: "updateHeight",
    value: function updateHeight() {
      var _this4 = this;

      // On desktops, only resize if height's changing.
      if (!react_device_detect__WEBPACK_IMPORTED_MODULE_16__["isMobile"] && this.state.width !== window.innerWidth && this.state.height === window.innerHeight) {
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
      // after touchMove, Safari doesn't update
      // innerHeight correctly, so we'll use/
      // clientHeight 'isAfterTouch':

      var toggleHtmlHeight = function toggleHtmlHeight(mode) {
        if (mode === 'on') {
          if (react_device_detect__WEBPACK_IMPORTED_MODULE_16__["isMobileSafari"] && parseInt(react_device_detect__WEBPACK_IMPORTED_MODULE_16__["osVersion"]) >= 12) {
            document.getElementsByTagName('html')[0].style.height = '100vh';
          }
        } else if (mode === 'off') {
          if (react_device_detect__WEBPACK_IMPORTED_MODULE_16__["isMobileSafari"] && parseInt(react_device_detect__WEBPACK_IMPORTED_MODULE_16__["osVersion"]) >= 12) {
            setTimeout(function () {
              document.getElementsByTagName('html')[0].style.height = '';
            }, 250);
          }
        }
      };

      toggleHtmlHeight('on'); //  a. clientHeight. Mobile Chrome and after touchMove
      //  b. innerHeight. Mobile Safari

      var newHeight = react_device_detect__WEBPACK_IMPORTED_MODULE_16__["isMobile"] && (!react_device_detect__WEBPACK_IMPORTED_MODULE_16__["isMobileSafari"] || this.state.isAfterTouch) ? document.documentElement.clientHeight : window.innerHeight; // Do not resize height while pinchZoomed.

      if (this.state.pinchZoomed) {
        if (false) {}

        toggleHtmlHeight('off');
        return false;
      } // Ensure the window top at zero after resize change.
      // (This trigers another resize if height changes.)


      if (window.pageYOffset > 0 // Prevent resize when user scrolls oversized page.
      && !this.isAfterTouchWhenScrollingPage) {
        var scrollHandling = new _classes_ScrollHandling_js__WEBPACK_IMPORTED_MODULE_24__["default"](location);
        scrollHandling.resetWindowTop();
      } // Resize if height changes and newHeight > this.minAllowedHeight.
      // Note, mobile Brave slips through this test on /home. The image
      // 'resize' and Brave then resizes. No fix for now.


      if (newHeight === this.state.height) {
        if (false) {} // On orientation change, covers every section but /chapter
        // (at least on iPhone)


        toggleHtmlHeight('off');
        return false;
      } // Update page height when these factors are true:
      //  a. mobile device
      //  b. orientation change AND pinchZoom is off
      //  c. height changes (we've already discarded newHeight <= 350)


      if (false) {} // On orientation change, covers /chapter b/c of hidden image
      // (at least on iPhone)


      toggleHtmlHeight('off');
      this.setState(function () {
        return {
          height: _this4.minAllowedHeight < newHeight ? newHeight : _this4.minAllowedHeight,
          isAfterTouch: // True until handleMove says otherwise.
          _this4.state.isAfterTouch && false
        };
      });
    }
  }, {
    key: "handleBackAndForth",
    value: function handleBackAndForth() {
      var location = new _classes_Location_js__WEBPACK_IMPORTED_MODULE_18__["default"]('/', this.props);
      var hcForApp = new _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_10__["default"]('app', this);
      var boundHandleClickForApp = hcForApp.boundHandleClick; // Always the caller.
      // Update isMenu if it doesn't sync w/the window.

      var isMenu = window.location.pathname.split('/').indexOf('menu') === 2;
      var updateMenuForBackForthButton = isMenu !== this.state.isMenu;
      boundHandleClickForApp('updateApp', location.caller, updateMenuForBackForthButton);
    }
  }, {
    key: "calculateSpacerHeight",
    value: function calculateSpacerHeight() {
      var appHeight = this.state.height;
      var objectFitCoverVals = Object(intrinsic_scale__WEBPACK_IMPORTED_MODULE_11__["cover"])(window.innerWidth, appHeight, 2131, 1244);
      var imageHeight = objectFitCoverVals.height;
      var yImageTop = objectFitCoverVals.y;

      var makePositive = function makePositive(val) {
        return val * -1;
      }; // 1. 14.2 & 14.6 are arbitrary values (trial-n-error)
      // 2. 52px is the height of the header in pixels


      var calcSpacerHeight = function calcSpacerHeight(heightVal, percentage) {
        return heightVal * (percentage / 100) - 52;
      };

      var spacerHeight = Math.ceil(calcSpacerHeight(appHeight, 14.2)); // yImageTop < 0 when the image 'zooms' (the window's
      // width has grown beyond the image's max width, so
      // we cut off the top and bottom and zoom in.)

      if (Math.floor(yImageTop) < 0) {
        var newHeight = imageHeight - makePositive(yImageTop);
        var newSpacerHeight = calcSpacerHeight(newHeight, 14.6);
        var spacerHeightDifference = newSpacerHeight - spacerHeight;
        var changedPosition = makePositive(yImageTop) - spacerHeightDifference;
        var finalValue = Math.ceil(spacerHeight - changedPosition);
        spacerHeight = finalValue;
      }

      return spacerHeight >= 15 ? spacerHeight : 15;
    }
  }, {
    key: "calculateNameTagWidth",
    value: function calculateNameTagWidth() {
      var coverVals = Object(intrinsic_scale__WEBPACK_IMPORTED_MODULE_11__["cover"])(window.innerWidth, this.state.height, 2131, 1244);
      return Math.floor(.27 * coverVals.width);
    }
  }, {
    key: "updateSpacerHeight",
    value: function updateSpacerHeight() {
      this.setState({
        spacerHeight: this.calculateSpacerHeight()
      });
    }
  }, {
    key: "updateNameTagWidth",
    value: function updateNameTagWidth() {
      var nameTagWidth = this.calculateNameTagWidth();

      if (nameTagWidth !== this.state.nameTagWidth) {
        this.setState({
          nameTagWidth: nameTagWidth
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (false) { var _window$location3, pathname, search, _location; }
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_22__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_26__["withRouter"])(App));

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
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_not_found_NotFound_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], _this2.props);
        }
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
})(["overflow:auto;blockquote{margin:0px 0px 30px 0px;padding:0px 20px 0px 20px;color:", ";border-left:15px solid ", ";}li{margin-bottom:6px;}li p{margin-bottom:6px;}p{margin-bottom:", ";margin-left:2px;&:last-child{margin-bottom:0px;}}"], function (p) {
  return p.theme.colors.lightBlack;
}, function (p) {
  return p.theme.colors.lightBlack;
}, function (p) {
  return p.theme.bottomMargin.regular;
});
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "About__Icon",
  componentId: "sc-1ye68oq-3"
})(["height:20px;width:20px;margin-bottom:6px;margin-right:1px;background:url(", ") no-repeat;background-size:contain;"], function (p) {
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
    height: "32px"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Hed, null, "Hi! I'm James"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(IconContainer, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_ga__WEBPACK_IMPORTED_MODULE_7__["default"].OutboundLink, {
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
  var allContentData = contentState.allContentData,
      headlineIndex = contentState.headlineIndex,
      reverieIndex = contentState.reverieIndex,
      caller = contentState.caller;
  var isReverie = caller === 'reverie';
  var _allContentData$attri = allContentData[!isReverie ? headlineIndex : reverieIndex].attributes,
      date = _allContentData$attri.date,
      headline = _allContentData$attri.headline,
      position = _allContentData$attri.position,
      publication = _allContentData$attri.publication;
  var publicationOrReverieTag = caller !== 'reverie' ? publication : 'Reverie';
  var bylineOrDate = caller !== 'reverie' ? "by James Erik Abels | ".concat(position) : date;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], {
    reverie: isReverie
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_primitives_ContentHolder_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_shared_Shelf_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
    height: "20px"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_shared_MenuButton_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], props)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Dek, null, publicationOrReverieTag), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Hed, null, headline), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(BylineOrDate, null, bylineOrDate), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Text, null, react_html_parser__WEBPACK_IMPORTED_MODULE_5___default()(marked__WEBPACK_IMPORTED_MODULE_1___default()(allContentData[headlineIndex].body, {
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
      headlineIndex = contentState.headlineIndex;
  var isReverie = caller === 'reverie';
  var currentHed = Object(_helpers_normalize_js__WEBPACK_IMPORTED_MODULE_1__["default"])(allContentData[headlineIndex].attributes.headline);
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

/***/ "./app/assets/fonts/aref-ruqaa-v8-latin/aref-ruqaa-v8-latin-700.woff":
/*!***************************************************************************!*\
  !*** ./app/assets/fonts/aref-ruqaa-v8-latin/aref-ruqaa-v8-latin-700.woff ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/url-loader/dist/cjs.js):\nError: ENOENT: no such file or directory, open '/Users/james/Desktop/foundations/jamesabels.net/app/assets/fonts/aref-ruqaa-v8-latin/aref-ruqaa-v8-latin-700.woff'");

/***/ }),

/***/ "./app/assets/fonts/aref-ruqaa-v8-latin/aref-ruqaa-v8-latin-700.woff2":
/*!****************************************************************************!*\
  !*** ./app/assets/fonts/aref-ruqaa-v8-latin/aref-ruqaa-v8-latin-700.woff2 ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/url-loader/dist/cjs.js):\nError: ENOENT: no such file or directory, open '/Users/james/Desktop/foundations/jamesabels.net/app/assets/fonts/aref-ruqaa-v8-latin/aref-ruqaa-v8-latin-700.woff2'");

/***/ }),

/***/ "./app/assets/fonts/montserrat-v14-latin/montserrat-v14-latin-300.woff":
/*!*****************************************************************************!*\
  !*** ./app/assets/fonts/montserrat-v14-latin/montserrat-v14-latin-300.woff ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/url-loader/dist/cjs.js):\nError: ENOENT: no such file or directory, open '/Users/james/Desktop/foundations/jamesabels.net/app/assets/fonts/montserrat-v14-latin/montserrat-v14-latin-300.woff'");

/***/ }),

/***/ "./app/assets/fonts/montserrat-v14-latin/montserrat-v14-latin-500.woff":
/*!*****************************************************************************!*\
  !*** ./app/assets/fonts/montserrat-v14-latin/montserrat-v14-latin-500.woff ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/url-loader/dist/cjs.js):\nError: ENOENT: no such file or directory, open '/Users/james/Desktop/foundations/jamesabels.net/app/assets/fonts/montserrat-v14-latin/montserrat-v14-latin-500.woff'");

/***/ }),

/***/ "./app/assets/fonts/montserrat-v14-latin/montserrat-v14-latin-regular.woff":
/*!*********************************************************************************!*\
  !*** ./app/assets/fonts/montserrat-v14-latin/montserrat-v14-latin-regular.woff ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/url-loader/dist/cjs.js):\nError: ENOENT: no such file or directory, open '/Users/james/Desktop/foundations/jamesabels.net/app/assets/fonts/montserrat-v14-latin/montserrat-v14-latin-regular.woff'");

/***/ }),

/***/ "./app/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-700.woff":
/*!*****************************************************************************************!*\
  !*** ./app/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-700.woff ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/url-loader/dist/cjs.js):\nError: ENOENT: no such file or directory, open '/Users/james/Desktop/foundations/jamesabels.net/app/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-700.woff'");

/***/ }),

/***/ "./app/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-700.woff2":
/*!******************************************************************************************!*\
  !*** ./app/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-700.woff2 ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/url-loader/dist/cjs.js):\nError: ENOENT: no such file or directory, open '/Users/james/Desktop/foundations/jamesabels.net/app/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-700.woff2'");

/***/ }),

/***/ "./app/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-900.woff":
/*!*****************************************************************************************!*\
  !*** ./app/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-900.woff ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/url-loader/dist/cjs.js):\nError: ENOENT: no such file or directory, open '/Users/james/Desktop/foundations/jamesabels.net/app/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-900.woff'");

/***/ }),

/***/ "./app/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-900.woff2":
/*!******************************************************************************************!*\
  !*** ./app/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-900.woff2 ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/url-loader/dist/cjs.js):\nError: ENOENT: no such file or directory, open '/Users/james/Desktop/foundations/jamesabels.net/app/assets/fonts/playfair-display-v15-latin/playfair-display-v15-latin-900.woff2'");

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
            illustrationLevel = _this$state.illustrationLevel,
            chapter = _this$state.chapter,
            currentCaller = _this$state.currentCaller,
            lastCaller = _this$state.lastCaller,
            illustrationDelay = _this$state.illustrationDelay,
            heartbeat = _this$state.heartbeat,
            illustrationDirection = _this$state.illustrationDirection,
            showBusinessCard = _this$state.showBusinessCard,
            showLegalTerms = _this$state.showLegalTerms,
            inCity = _this$state.inCity,
            isMenu = _this$state.isMenu,
            headerMenuIsOpen = _this$state.headerMenuIsOpen;
        var stateToUpdate = {};

        var toggleStoryTextSequence = function toggleStoryTextSequence() {
          if (illustrationDelay) {
            stateToUpdate.illustrationDelay = !illustrationDelay;
          }

          if (illustrationLevel === 0) {
            stateToUpdate.illustrationLevel = 1;
          } else {
            stateToUpdate.illustrationLevel = 2; // 3 --> 2

            stateToUpdate.illustrationDirection = 'exit';
          }

          if (showBusinessCard) {
            stateToUpdate.showBusinessCard = !showBusinessCard;
          }

          if (showLegalTerms) {
            stateToUpdate.showLegalTerms = !showLegalTerms;
          }
        };

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
            toggleStoryTextSequence();
            category = 'App state';
            action = illustrationLevel > 0 ? 'Hide story text' : 'Close story text';
            label = showBusinessCard ? 'Business card was open' : showLegalTerms ? 'Legal notice was open' : '';
            break;

          case 'updateStoryAnimation':
            stateToUpdate.illustrationLevel = valueOne;

            if (valueOne === 0) {
              stateToUpdate.illustrationDirection = 'enter';
            }

            break;

          case 'setChapter':
            stateToUpdate.chapter = valueOne;

            if (valueTwo) {
              toggleStoryTextSequence();
            }

            break;

          case 'toggleShowDelay':
            stateToUpdate.illustrationDelay = !illustrationDelay;
            break;

          case 'swapBackground':
            stateToUpdate.inCity = !inCity;
            category = 'App state';
            action = !inCity ? 'Enter city' : 'Enter fantasy';
            break;

          case 'updateSpacerHeight':
            stateToUpdate.spacerHeight = _this.calculateSpacerHeight(valueOne);
            category = 'App state';
            action = 'Updated spacer height for /home';

          case 'toggleMenu':
            stateToUpdate.isMenu = !isMenu;
            category = 'App state';
            action = !isMenu ? "Enter: ".concat(currentCaller, " menu") : "Leave: ".concat(currentCaller, " menu");
            break;

          case 'updateHeartbeat':
            if (heartbeat < 1) {
              stateToUpdate.heartbeat = 1;
            } else {
              stateToUpdate.heartbeat = 3;
            }

            break;

          case 'finishedHomePageLoad':
            stateToUpdate.finishedHomePageLoad = true;
            category = 'App state';
            action = 'Finished home page loading';
            break;

          case 'toggleHeaderMenu':
            stateToUpdate.headerMenuIsOpen = !headerMenuIsOpen;

            if (!headerMenuIsOpen) {
              // Disable setTimeout to suspend auto-close
              _this.headerMenuTimeoutId = setTimeout(function () {
                _this.setState({
                  headerMenuIsOpen: false
                }, function () {
                  // Reset timeout after timeout successfully runs
                  _this.headerMenuTimeoutId = undefined;
                });
              }, 5000);
            } else {
              // Clear timeout if closing via the icon (img))
              clearTimeout(_this.headerMenuTimeoutId);
              _this.headerMenuTimeoutId = undefined;
            }

            break;

          case 'updateApp':
            if (valueOne !== undefined) {
              stateToUpdate.currentCaller = valueOne;
              stateToUpdate.lastCaller = currentCaller;
            } // Clear timeout when clicking a link in the headerMenu


            if (_this.headerMenuTimeoutId) {
              clearTimeout(_this.headerMenuTimeoutId);
              _this.headerMenuTimeoutId = undefined;
            }

            stateToUpdate.headerMenuIsOpen = false;
            stateToUpdate.showBusinessCard = false;
            stateToUpdate.showLegalTerms = false;

            if (heartbeat === 1) {
              stateToUpdate.heartbeat = 2;
            } // 1. If any link is clicked, other than a MenuButton,
            // we'll rebuild the state and toggle the menu
            // (this will turn it off it it's on, i.e., a header
            // link was clicked instead of the MenuButton).
            // 2. If the back or forward button is clicked,
            // we'll rebuild the state and toggle the menu
            // (this will turn it on/off based on the
            // window.location).


            if (isMenu || valueTwo) {
              stateToUpdate.isMenu = !isMenu;
            }

            if (illustrationDelay && valueOne !== 'chapter') {
              stateToUpdate.illustrationDelay = !illustrationDelay;
            } // We'll always hide the illustration when switching sections,
            // but not if going to, leaving, or changing the /reverie.


            if (valueOne !== 'chapter' && valueOne !== 'reverie' && !(lastCaller === 'chapter' && currentCaller === 'reverie')) {
              if (illustrationLevel) {
                if (illustrationDirection !== 'exit') {
                  stateToUpdate.illustrationDirection = 'enter';
                }

                stateToUpdate.illustrationLevel = 0;
              }

              if (chapter > 0 || chapter < 0) {
                stateToUpdate.chapter = 0;
              }
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
    } // Handles onClicks for ContentLoader (/projects only)

  }, {
    key: "_handleClickForContentLoader",
    value: function _handleClickForContentLoader() {
      var _this3 = this;

      return function (type, valueOne, valueTwo) {
        var stateToUpdate = {};
        var caller = _this3.state.caller;

        switch (type) {
          case 'imageLoader':
            stateToUpdate.imageLoaded = valueOne;
            break;

          case 'updateState':
            if (caller === 'chapter') {
              var blurredIllustrationState = _this3.props.appState.images["chapter-".concat(valueOne + 1, "-blurred")].complete ? 2 : 0;
              stateToUpdate.chapterIndex = valueOne;
              stateToUpdate.imageLoaded = blurredIllustrationState;
            }

            if (caller === 'projects') {
              stateToUpdate.projectIndex = valueOne;
              stateToUpdate.thumbnailIndex = valueTwo; // stateToUpdate.imageLoaded = false;

              stateToUpdate.imageLoaded = 0;
            }

            if (caller === 'journalism') {
              stateToUpdate.headlineIndex = valueTwo;
            }

            if (caller === 'reverie') {
              stateToUpdate.reverieIndex = valueOne;
            }

            break;
        }

        _this3.setState(stateToUpdate);
      };
    } // Handles onClicks on Home (spell, part one).

  }, {
    key: "_handleClickForHome",
    value: function _handleClickForHome() {
      var _this4 = this;

      return function (updateValue, propName) {
        var _this4$state = _this4.state,
            eventType = _this4$state.eventType,
            movement = _this4$state.movement,
            spellLevel = _this4$state.spellLevel;
        var stateToUpdate = {};

        switch (updateValue) {
          case 'toggleSpell':
            // Note: We toggleSpell after the spell
            // is cast in order to reset its state.
            stateToUpdate.movement = movement === 'enter' ? 'exit' : 'enter';

            if (spellLevel < 1) {
              stateToUpdate.spellLevel = 1;
            } else {
              stateToUpdate.spellLevel = 3;
            } // Reset spell after background transform


            if (propName === 'transform') {
              // The spellLevel is only reset to 0 after
              // casting. It otherwise ends at 4 and
              // restarts at 1.
              stateToUpdate.score = 0;
              stateToUpdate.movement = '';
              stateToUpdate.spellLevel = 0;
            }

            break;

          case 'cast':
            // Note, the score never equals the goal 
            // b/c we cast at score + 1.
            stateToUpdate.spellLevel = 5;
            stateToUpdate.pattern = _this4.createSpellPattern();
            stateToUpdate.activeCharm = stateToUpdate.pattern[0];
            stateToUpdate.score = 0; // Reset the eventType to 'click' if it was
            // 'touch'-ed. This prevents unexpected
            // and unwanted propagation.

            if (eventType === 'touch') {
              stateToUpdate.eventType = 'click';
            }

            break;

          case 'resetEventType':
            stateToUpdate.eventType = 'click';
            break;
        }

        _this4.setState(stateToUpdate);
      };
    } // Handles onClicks on Charms (spell, part two).

  }, {
    key: "_handleCharm",
    value: function _handleCharm() {
      var _this5 = this;

      return function (isActive) {
        var _this5$state = _this5.state,
            goal = _this5$state.goal,
            score = _this5$state.score;
        var abracadabra = score + 1 === goal; // Magic!

        var boundHandleClickForApp = _this5.props.boundHandleClickForApp; // Either the Charm's inactive, or it's time for magic.

        if (!isActive || isActive && abracadabra) {
          // We can invoke ClickHandling with the proper 'this' b/c
          // we invoked it w/Home's 'this' value via .call()
          var hcForHome = new ClickHandling('home', _this5);
          var boundHandleClickForHome = hcForHome.boundHandleClick;

          if (isActive && abracadabra) {
            // We store the background value in App so it's remembered
            // as the user travels through the site.
            if (false) {}

            boundHandleClickForHome('cast');
            boundHandleClickForApp('swapBackground');
          } else {
            if (false) {}

            boundHandleClickForHome('toggleSpell');
          }

          return null;
        } //  The Charm is active, and the user isn't done yet.


        _this5.setState(function (state) {
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
  } // Only used by '/chapter' at present


  _createClass(ScrollHandling, [{
    key: "resetElementTop",
    value: function resetElementTop(overflowRef, prevProps) {
      // B/c it doesn't exist on first render of this.state.needsRedirect
      var overflowRefExists = overflowRef.current !== null;

      if (overflowRefExists) {
        if (overflowRef.current.scrollTop !== 0) {
          if (false) {}

          overflowRef.current.scrollTop = 0;
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
    this._props = props;
    this._referrer = referrer;
    this._params = location.params;
  } // A convenience method for the constructor in
  // Body and ContentLoader for initial state


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

      return index && index > -1 ? index : 0;
    } // Filters out naked calls to, e.g., /chapter

  }, {
    key: "_indicesAreGreaterThanOrEqualToZero",
    value: function _indicesAreGreaterThanOrEqualToZero(indices) {
      return indices.one !== -1 && indices.two !== -1;
    }
  }, {
    key: "rebuildBody",
    value: function rebuildBody(setState) {
      var indices = this._convertParamsToIndices(); // Only -1 if explicitly set by a params method


      if (this._indicesAreGreaterThanOrEqualToZero(indices)) {
        setState(indices.one, indices.two);
      }
    }
  }, {
    key: "rebuildContentLoader",
    value: function rebuildContentLoader(setState) {
      var indices = this._convertParamsToIndices(); // Only -1 if explicitly set by a params method


      if (this._indicesAreGreaterThanOrEqualToZero(indices)) {
        setState('updateState', indices.one, indices.two);
      }
    }
  }, {
    key: "_illustrationState",
    value: function _illustrationState(images) {
      var titleIndex = this._convertParamsToIndices().one > -1 ? this._convertParamsToIndices().one : 0;
      var state = images["chapter-".concat(titleIndex + 1, "-main")].complete;
      return !state ? (titleIndex + 1) * -1 : titleIndex + 1;
    }
  }, {
    key: "checkIllustrationState",
    value: function checkIllustrationState(images, external) {
      if (external) {
        // Can only be called if /chapter...
        return this._illustrationState(images);
      } else {
        var _this$_props$appState = this._props.appState,
            currentCaller = _this$_props$appState.currentCaller,
            _images = _this$_props$appState.images;

        if (currentCaller === 'chapter') {
          return this._illustrationState(_images);
        }

        return 0;
      }
    }
  }, {
    key: "resetIllustrationState",
    value: function resetIllustrationState(setState) {
      setState('setChapter', this.checkIllustrationState());
    } // Returns: { one: val, two: val }

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

module.exports = {"attributes":{"page":"about","type":"description","updated":"11-11-18"},"body":"\nI write code for Web sites and software. I tell stories, too. \n \nThat's important. Stories define everything. Consider this:\n\n1. Microsoft sells Word by telling people they can write things with it.\n    * That pitch is a story.\n\n2. People use Word to collect and organize their thoughts. \n    * Those thoughts are a story.\n\n3. Word saves these thoughts to a 'document'. \n    * That file name tells a story.\n\nIt's all stories, all the way down. \n\nThat's where I come in. Rather than just mechanically coding sites and software, I try to figure out — and keep sight of — the stories that drive them. I always have.\n\nAs a start-up founder, I told stories that pitched our software. As a staff reporter for Forbes and Mergermarket, I wrote stories that gave insight into technology and venture capital. And as a lawyer, I crafted stories that made legal arguments. \n\nLike I said — stories all the way down. \n\nThat's mine. What's yours?\n","frontmatter":"page: about\ntype: description\nupdated: 11-11-18"}

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

module.exports = {"attributes":{"headline":"Can Apple Be Out-Appled?","publication":"Blouin News","position":"Freelance"},"body":"\nCan Apple wow the world a third time? It certainly seems to think so.\n\nTim Cook, Apple’s chief executive, gave a long interview to the Wall\nStreet Journal this month. The top executive used the conversation to\naddress persistent concerns among investors that Apple is fresh out of\ninnovative new ideas. He assured it that Apple is working on new product\ncategories.\n\nIn other words, it’s working on products that are different from the\ncomputers, smartphones and tablets, it sells today. But, that doesn’t mean\nApple is working on products that no one has ever seen before. That’s what\npeople expect from it these days. After all, its most recent successes\nstemmed from its uncanny ability to release products that no one’s ever\nseen before.\n\nFor instance, Google built a phone prior to the iPhone’s arrival. But, it\nwasn’t anything like the all-glass, futuristic smartphone Apple imagined.\nAs a result, Google reportedly scrapped its project to start again. The\niPad offers a similar story. Microsoft called tablets the future of\ncomputing for years. And yet, people ignored the message.\n\nWhy? They didn’t really like Microsoft’s Windows-centric vision of tablet\ncomputing. But, they liked Apple’s. So, as far as anyone is concerned, it\ninvented both markets from whole cloth.\n\nBut, things have changed. The world watched Apple’s incredible magic trick\ntwice now. So, a lot of equally wealthy and intelligent companies have\ninvested a lot of money in following suit. This is especially clear in \nthe arena of “wearable computers.”\n\nIn 2012, a lot of people decided these devices were the best way to\nout-Apple Apple.\n\nThe idea was arguably jump-started by a small startup named inPusle (now\nPebble). The company shattered records in mid-2012 when people gave it\nover \\$10 million on Kickstarter to help it build its Pebble smartwatch.\nThe Pebble moment made it famous, and suggested a huge untapped market for\nwearable computers.\n\nGoogle reinforced the point by showing off a Google Glass prototype around\nthe same time. Glass is a monocle that people wear over one eye to project\na digital landscape on the world around them.\n\nThen, the floodgates seemed to open.\n\nNike released the Fuelband in 2012, helping to kick off a genre of\nhigh-tech bracelets that track telemetry about the human body. A year\nlater, Samsung released its Galaxy Gear smartwatch. And, companies like\nGoPro released a new generation of small wearable video cameras to help\npeople record themselves 24/7. They must be somewhat popular. GoPro is now\ngoing public.\n\nNot enough? Oculus VR also blew people’s minds in 2012 when it\nsuccessfully Kickstarted its new take on virtual reality goggles. Like the\nPebble, the Oculus Rift inspired the imagination. Since then, several\ncompetitors have appeared with their own take on Oculus’s inspired idea.\n\nThe point here is that new product categories have exploded.\n\nNew ones could still come along, but that’s probably less likely than\never. Let’s consider this in the context of some of biggest and brightest\nrumors about Apple’s new technologies. The next version of iOS is said to\nbe focused on tracking health stats about its users. This would put it in\ndirect competition with a limitless universe of Apple-compatible health\ngadgets.\n\nSimilarly, Apple is said to be working on some sort computer-based TV or\nset-top box. This market is already flooded with entrants. And, a new\nrumor surfaced just this month that Apple has 200 people working on a new\nsmartwatch.\n\nApple has a better shot than anyone at getting these products just right.\nBut, for the first time in years, its new technologies could also just get\nlost in a sea of gadgets — like tears in rain.\n","frontmatter":"headline: 'Can Apple Be Out-Appled?'\npublication: 'Blouin News'\nposition: 'Freelance'"}

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

module.exports = {"attributes":{"page":"home","type":"home","name":"James Abels","motto":"Coder ∙ Founder ∙ Storyteller","updated":"11-23-18","descriptionBoy":"boy description","descriptionFantasy":"fantasy description","descriptionCity":"city description","descriptionBoyBlurred":"blurred boy","descriptionFantasyBlurred":"blurred fantasy","descriptionCityBlurred":"blurred city","boyInForegroundImage":"https://user-images.githubusercontent.com/30417590/64035529-06cc7c80-cb1f-11e9-91e2-93db0422b410.png","cityImage":"https://user-images.githubusercontent.com/30417590/63110286-11044d80-bf59-11e9-992e-91d837d0d0c7.png","fantasyImage":"https://user-images.githubusercontent.com/30417590/63110285-11044d80-bf59-11e9-9e4e-0e08319f3436.png","zoomedBoyInForegroundImage":"","zoomedCityImage":"","zoomedFantasyImage":"","boyInForegroundImageBlurred":"https://user-images.githubusercontent.com/30417590/65292407-4afedb80-db25-11e9-894f-7d34e463bdf9.png","cityImageBlurred":"https://user-images.githubusercontent.com/30417590/63664327-1866fa80-c794-11e9-89cd-bf3544c1ccfc.png","fantasyImageBlurred":"https://user-images.githubusercontent.com/30417590/63658897-3d4f7380-c77c-11e9-8611-9d64766ab426.png","preloadTheseImages":["boyInForegroundImage","boyInForegroundImageBlurred","fantasyImage","fantasyImageBlurred"]},"body":"\nI write code that tells clear and compelling stories. Let's talk about yours.","frontmatter":"page: home\ntype: home\nname: James Abels\nmotto: Coder ∙ Founder ∙ Storyteller\nupdated: 11-23-18\ndescriptionBoy: 'boy description'\ndescriptionFantasy: 'fantasy description'\ndescriptionCity: 'city description'\ndescriptionBoyBlurred: 'blurred boy'\ndescriptionFantasyBlurred: 'blurred fantasy'\ndescriptionCityBlurred: 'blurred city'\nboyInForegroundImage: 'https://user-images.githubusercontent.com/30417590/64035529-06cc7c80-cb1f-11e9-91e2-93db0422b410.png'\ncityImage: 'https://user-images.githubusercontent.com/30417590/63110286-11044d80-bf59-11e9-992e-91d837d0d0c7.png'\nfantasyImage: 'https://user-images.githubusercontent.com/30417590/63110285-11044d80-bf59-11e9-9e4e-0e08319f3436.png'\nzoomedBoyInForegroundImage: ''\nzoomedCityImage: ''\nzoomedFantasyImage: ''\nboyInForegroundImageBlurred: 'https://user-images.githubusercontent.com/30417590/65292407-4afedb80-db25-11e9-894f-7d34e463bdf9.png'\ncityImageBlurred: 'https://user-images.githubusercontent.com/30417590/63664327-1866fa80-c794-11e9-89cd-bf3544c1ccfc.png'\nfantasyImageBlurred: 'https://user-images.githubusercontent.com/30417590/63658897-3d4f7380-c77c-11e9-8611-9d64766ab426.png'\npreloadTheseImages: [\n  boyInForegroundImage,\n  boyInForegroundImageBlurred,\n  fantasyImage,\n  fantasyImageBlurred\n]"}

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

module.exports = {"attributes":{"number":1,"projectName":"Alexa skills","pitch":"Start-up ideas and fun toys","type":"Coding","technologies":"Cloud: AWS Lambda ∙ Language: Node.js, Javascript","responsibility":"Inventor and lead developer","story":"With smart speaker ownership set to crest 200 million by the end of 2019, voice assistants sit atop the digital frontier. These are some experiments with them.","captions":["Washington Square is an experimental voice skill that connects strangers. It was the earliest stage start-up idea to make second-round interviews with Amazon for Alexa Accelerator II.","G's Rules of Funny is a small trivia skill that teaches anyone to be funny. G, who wishes to remain nameless, is a N.Y.C. comic who has caused laughter from Capital Hill to Radio City Music Hall.","Take on G picks up where G's Rules of Funny left off. This trivia game asks players nonsensical, irrelevant, and perplexing questions. Can you get beat G as easily as he beat Ninja Gaidan?"],"projectThumbnail":["https://user-images.githubusercontent.com/30417590/56868552-a89d5a80-69c1-11e9-9d2f-edbb585499f4.png","https://user-images.githubusercontent.com/30417590/56868548-a89d5a80-69c1-11e9-91b5-28f5ccad1015.png","https://user-images.githubusercontent.com/30417590/56868582-39743600-69c2-11e9-84cc-0b6a3cf13378.png"],"full":["https://user-images.githubusercontent.com/30417590/57550883-9d3d1e00-7335-11e9-94aa-ad21ede054ed.png","https://user-images.githubusercontent.com/30417590/56870193-d1314e80-69d9-11e9-9ff7-63af134a50c6.png","https://user-images.githubusercontent.com/30417590/56869785-17cf7a80-69d3-11e9-81d7-aefa52ffa98b.png"],"zoomed":["https://user-images.githubusercontent.com/30417590/57550273-e2f8e700-7333-11e9-8e0c-f40bfbde4163.png","https://user-images.githubusercontent.com/30417590/57550285-f1470300-7333-11e9-9068-bf3260ca39f5.png","https://user-images.githubusercontent.com/30417590/57550304-fefc8880-7333-11e9-8aff-4fb64309a649.png"],"showTheseAttributes":["story","responsibility","technologies"]},"body":"","frontmatter":"number: \n    1\nprojectName: \n    'Alexa skills'\npitch: \n    'Start-up ideas and fun toys'\ntype:\n  'Coding'\ntechnologies: \n    'Cloud: AWS Lambda ∙ Language: Node.js, Javascript'\nresponsibility: \n    'Inventor and lead developer'\nstory: \n    'With smart speaker ownership set to crest 200 million by the end of 2019, voice assistants sit atop the digital frontier. These are some experiments with them.'\ncaptions: [\n    'Washington Square is an experimental voice skill that connects strangers. It was the earliest stage start-up idea to make second-round interviews with Amazon for Alexa Accelerator II.',\n    \"G's Rules of Funny is a small trivia skill that teaches anyone to be funny. G, who wishes to remain nameless, is a N.Y.C. comic who has caused laughter from Capital Hill to Radio City Music Hall.\",\n    \"Take on G picks up where G's Rules of Funny left off. This trivia game asks players nonsensical, irrelevant, and perplexing questions. Can you get beat G as easily as he beat Ninja Gaidan?\"\n]\nprojectThumbnail: [\n    'https://user-images.githubusercontent.com/30417590/56868552-a89d5a80-69c1-11e9-9d2f-edbb585499f4.png',\n    'https://user-images.githubusercontent.com/30417590/56868548-a89d5a80-69c1-11e9-91b5-28f5ccad1015.png',\n    'https://user-images.githubusercontent.com/30417590/56868582-39743600-69c2-11e9-84cc-0b6a3cf13378.png'\n]\nfull: [\n    'https://user-images.githubusercontent.com/30417590/57550883-9d3d1e00-7335-11e9-94aa-ad21ede054ed.png',\n    'https://user-images.githubusercontent.com/30417590/56870193-d1314e80-69d9-11e9-9ff7-63af134a50c6.png',\n    'https://user-images.githubusercontent.com/30417590/56869785-17cf7a80-69d3-11e9-81d7-aefa52ffa98b.png'\n]\nzoomed: [\n    'https://user-images.githubusercontent.com/30417590/57550273-e2f8e700-7333-11e9-8e0c-f40bfbde4163.png',\n    'https://user-images.githubusercontent.com/30417590/57550285-f1470300-7333-11e9-9068-bf3260ca39f5.png',\n    'https://user-images.githubusercontent.com/30417590/57550304-fefc8880-7333-11e9-8aff-4fb64309a649.png',\n]\nshowTheseAttributes: [\n    'story',\n    'responsibility',\n    'technologies'\n]"}

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

module.exports = {"attributes":{"number":2,"projectName":"My site","pitch":"A personal site about stories and code","type":"Coding","technologies":"Cloud: Github Pages ∙ Language: Javascript, HTML, CSS ∙ Framework: React","responsibility":"Creator and developer","story":"My site is a Single Page Application masquerading as a Web site. It explores the intersection between storytelling and hand-crafted code. Built with ❤️ in N.Y.C.","captions":["Floating text gives an overview about me, and a big, bold illustration teases the site's main story.","The story of my life, featuring magical creatures, custom illustrations, and wide-eyed enthusiasm.","A project page showcasing the software I oversaw as founder of Three Minute Media. A menu button and thumbnails are stored on the shelf above the content so they're easily accessible.","An article page featuring one of the clips that I wrote as a staff reporter at Forbes. The component that creates this page is shared with Reverie, the site's blog, to make site maintenance easier."],"projectThumbnail":["https://user-images.githubusercontent.com/30417590/61604947-6f1b6a80-ac11-11e9-9d24-2b8682e95a9b.png","https://user-images.githubusercontent.com/30417590/61604963-82c6d100-ac11-11e9-8f23-9ae507e91909.png","https://user-images.githubusercontent.com/30417590/61605169-40ea5a80-ac12-11e9-930f-007ef313fe26.png","https://user-images.githubusercontent.com/30417590/61605215-6bd4ae80-ac12-11e9-89f3-5849e1931f37.png"],"full":["https://user-images.githubusercontent.com/30417590/56870415-0ee3a680-69dd-11e9-84c2-0bf3898ac283.png","https://user-images.githubusercontent.com/30417590/56870414-0ee3a680-69dd-11e9-8ba8-442eb3acc890.png","https://user-images.githubusercontent.com/30417590/56870417-0ee3a680-69dd-11e9-9dc2-51f5c70dca4e.png","https://user-images.githubusercontent.com/30417590/56870416-0ee3a680-69dd-11e9-84d8-cd541f9d6930.png"],"zoomed":["https://user-images.githubusercontent.com/30417590/57550562-cd37f180-7334-11e9-8a5b-8f15e0e5dac9.png","https://user-images.githubusercontent.com/30417590/57550611-eb055680-7334-11e9-8a21-c5b885b73678.png","https://user-images.githubusercontent.com/30417590/57550639-f5bfeb80-7334-11e9-9ad2-cf351f8d6937.png","https://user-images.githubusercontent.com/30417590/57550666-02444400-7335-11e9-8bd2-3616e11dc77e.png"],"showTheseAttributes":["story","responsibility","technologies"]},"body":"","frontmatter":"number: \n    2\nprojectName: \n    'My site'\npitch: \n    'A personal site about stories and code'\ntype:\n  'Coding'\ntechnologies: \n    'Cloud: Github Pages ∙ Language: Javascript, HTML, CSS ∙ Framework: React'\nresponsibility: \n    'Creator and developer'\nstory: \n    'My site is a Single Page Application masquerading as a Web site. It explores the intersection between storytelling and hand-crafted code. Built with ❤️ in N.Y.C.'\ncaptions: [\n    \"Floating text gives an overview about me, and a big, bold illustration teases the site's main story.\",\n    'The story of my life, featuring magical creatures, custom illustrations, and wide-eyed enthusiasm.',\n    \"A project page showcasing the software I oversaw as founder of Three Minute Media. A menu button and thumbnails are stored on the shelf above the content so they're easily accessible.\",\n    \"An article page featuring one of the clips that I wrote as a staff reporter at Forbes. The component that creates this page is shared with Reverie, the site's blog, to make site maintenance easier.\"\n]\nprojectThumbnail: [\n    https://user-images.githubusercontent.com/30417590/61604947-6f1b6a80-ac11-11e9-9d24-2b8682e95a9b.png,\n    https://user-images.githubusercontent.com/30417590/61604963-82c6d100-ac11-11e9-8f23-9ae507e91909.png,\n    https://user-images.githubusercontent.com/30417590/61605169-40ea5a80-ac12-11e9-930f-007ef313fe26.png,\n    'https://user-images.githubusercontent.com/30417590/61605215-6bd4ae80-ac12-11e9-89f3-5849e1931f37.png'\n]\nfull: [\n    'https://user-images.githubusercontent.com/30417590/56870415-0ee3a680-69dd-11e9-84c2-0bf3898ac283.png',\n    'https://user-images.githubusercontent.com/30417590/56870414-0ee3a680-69dd-11e9-8ba8-442eb3acc890.png',\n    'https://user-images.githubusercontent.com/30417590/56870417-0ee3a680-69dd-11e9-9dc2-51f5c70dca4e.png',\n    'https://user-images.githubusercontent.com/30417590/56870416-0ee3a680-69dd-11e9-84d8-cd541f9d6930.png'\n]\nzoomed: [\n    'https://user-images.githubusercontent.com/30417590/57550562-cd37f180-7334-11e9-8a5b-8f15e0e5dac9.png',\n    'https://user-images.githubusercontent.com/30417590/57550611-eb055680-7334-11e9-8a21-c5b885b73678.png',\n    'https://user-images.githubusercontent.com/30417590/57550639-f5bfeb80-7334-11e9-9ad2-cf351f8d6937.png',\n    'https://user-images.githubusercontent.com/30417590/57550666-02444400-7335-11e9-8bd2-3616e11dc77e.png'\n]\nshowTheseAttributes: [\n    'story',\n    'responsibility',\n    'technologies'\n]"}

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
	"./06-23-19-alexa-off.md": "./app/data/reveries/06-23-19-alexa-off.md",
	"./08-05-19-netflix-chromecast.md": "./app/data/reveries/08-05-19-netflix-chromecast.md"
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

/***/ "./app/data/reveries/08-05-19-netflix-chromecast.md":
/*!**********************************************************!*\
  !*** ./app/data/reveries/08-05-19-netflix-chromecast.md ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"type":"reverie","headline":"Netflix, meet Chromecast","date":"August 5, 2019","slug":"Silence the trailers when using Chromecast"},"body":"\nDear Netflix,\n\nI know you lead the industry when it comes to software development.\n\nUnfortunately, I have several problems with your platform. This one involves your autoplaying trailers. You can reproduce the problem via the following steps: \n\n1. Load the Netflix site.\n2. Start a show or movie. \n3. Cast it to a television via a Google Chromecast. \n4. (It does not matter if you use Chrome's internal menu or the Chromecast icon that appears in your video player.)\n5. Sit down to enjoy the show.\n6. Cringe when it's interrupted by the sound of a trailer.\n7. Look around wildly to find the computer where Netflix.com is loaded. \n8. Groan. \n9. Ask the Gods why Netflix's developers don't disable these trailers when a video is being Cast.\n10. Futz with the Netflix site to silence the trailers, probably by slamming the spacebar twice to skip both of them.\n\nThe whole thing is very annoying. \n\nI've begun to wonder if I should switch to Disney+ or CBS All Access. Well, no, not really...but \"Star Trek: Picard.\" Can't say no to that...\n\nAll the best.\n\n-j\n","frontmatter":"type: reverie\nheadline: Netflix, meet Chromecast\ndate: August 5, 2019\nslug: Silence the trailers when using Chromecast"}

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

module.exports = {"attributes":{"title":"Practical magic","image":"https://user-images.githubusercontent.com/30417590/63110330-28dbd180-bf59-11e9-9371-f99d29b312af.png","blurredImage":"https://user-images.githubusercontent.com/30417590/63657632-2c9a0000-c772-11e9-9b33-32185d2ff719.png","description":"xyz 4","number":4},"body":"\nThe Six train sped through darkness.\n\nThe young man climbed out at Wall Street. Financial magicians thronged the way as he snaked through back alleys toward Hanover Square. \n\nA white tower soared skyward. \n\n\"Coding school,\" he said. \n\nEleven flights up, the young man logged into practical magic. \n\nComputer code covered screens across the floor. It was smart and austere, but lacked something important. \n\n\"Purpose,\" he said, leaning toward the logic on screen.\n\nWhen he looked up, he stared out at a city drenched in warm autumn light. A small blur zipped across the horizon, neon trailing behind it. The young man smiled to himself. \n\n\"Software is a story,\" he said. \"Code the way to tell it.\"\n\nMemories of impractical magic washed over him as code filled his screen in pixelated color. \n\nTime melted away. Hours later, as the young man slept, the fairy hung over her old friend. She peeked into his dreams and spied far-off lands. There were Jinns, and fairies, and desert sands— all within reach of his outstretched hands.\n\nDelighted, she flit to the gold lamp beside him. It bathed the room in purple light. \"Yoo-hoo,\" she sang inside, a mischievious smile spreading across her face.\n\nTime again for adventure.\n","frontmatter":"title: 'Practical magic'\nimage: 'https://user-images.githubusercontent.com/30417590/63110330-28dbd180-bf59-11e9-9371-f99d29b312af.png'\nblurredImage: 'https://user-images.githubusercontent.com/30417590/63657632-2c9a0000-c772-11e9-9b33-32185d2ff719.png'\ndescription: 'xyz 4'\nnumber: 4"}

/***/ }),

/***/ "./app/data/the-story/story-chapter-one.md":
/*!*************************************************!*\
  !*** ./app/data/the-story/story-chapter-one.md ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"A magic quest","image":"https://user-images.githubusercontent.com/30417590/63110316-21b4c380-bf59-11e9-957d-eff23fc175c3.png","blurredImage":"https://user-images.githubusercontent.com/30417590/63657612-ffe5e880-c771-11e9-8d1c-8e7bc403d1c0.png","description":"xyz 1","number":1},"body":"\nThe cardboard fort crumbled.\n\nA small fairy destroyed it after zipping through the wide-eyed boy's window with all the force of a cannonball. A neon streak twinkled behind her as she hovered amidst the mess. She looked the boy up and down, then nodded.\n\n\"Want to find a magic lamp,\" she asked, floating eye-level. \n\nThe boy burst with delight.\n\n\"Of course,\" he shrieked. \"What do I do?\"\n\nA coy grin spread across the fairy's bright face, filling the room with magic. \n\nIt worked wonders. The boy began to float. The sprite then raced to grab his hand before he could settle back to the floor. Out the window they went, flying high over the moon toward her home — a magical land of grand adventure. \n\nBy day, they searched for the magic lamp, soaring over pirate ships and chasing Jinns across sun-drenched sands. By night, they told amazing stories about the day's big adventures, each competing to tell taller tales. It was wonderful.\n\nThen, one night, when it was already late, the fairy sighed. \n\n\"You're growing up,\" she said. \"Time to go back.\" \n\nThe boy began to sniffle.\n\nShe smiled kindly, then knocked twice on the floor between them. A secret door opened. She dove in, disappearing for what seemed like hours. The boy's eyes were heavy when she flew out, clutching the very thing they'd sought — a glowing gold lamp that was etched by purple incantations. \n\n\"The adventure,\" she said, \"matters most.\" \n\nShe gazed fondly at her young friend, then read one aloud. \"In bright day or black night, through tall tale and purple light, rub me twice and release my might, if...\" \n\nToo late. He was out.\n","frontmatter":"title: 'A magic quest'\nimage: 'https://user-images.githubusercontent.com/30417590/63110316-21b4c380-bf59-11e9-957d-eff23fc175c3.png'\nblurredImage: 'https://user-images.githubusercontent.com/30417590/63657612-ffe5e880-c771-11e9-8d1c-8e7bc403d1c0.png'\ndescription: 'xyz 1'\nnumber: 1"}

/***/ }),

/***/ "./app/data/the-story/story-chapter-three.md":
/*!***************************************************!*\
  !*** ./app/data/the-story/story-chapter-three.md ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"The reality glitch","image":"https://user-images.githubusercontent.com/30417590/63284751-41fac000-c282-11e9-9014-01670d4872f9.png","blurredImage":"https://user-images.githubusercontent.com/30417590/63657624-1f7d1100-c772-11e9-8424-151e0223d6cd.png","description":"xyz 3","number":3},"body":"\nThe young man's room twinkled one morning.\n\nDust, scattered high by a broom, was catching the sun's pale winter light. The quiet was soon pierced by the hollow ring of the broom brushing metal. \n\nThe young man knelt to grab it.\n\n\"I forgot about you,\" he said, twice tracing the lamp's dusty etchings with a finger. Something about the motion made him feel light and excited.\n\nHe was right to be giddy. \n\nReality began to glitch. Clear red rays shot between particles of dust, drawing a giant Jinn into view. \n\n\"You've forgotten my secret,\" it boomed. \n\nMenace filled the room. Impulse pulled the young man toward bedsheets while pride kept him still. \n\n\"I have not,\" he said, memory stirring. \"I've rubbed you twice, I've released your might!\" \n\nThe logic seemed sound, but the Jinn was unmoved. Blue sparks began dancing around the mysterious creature. So the young man raised his fists, ready for a fight he couldn't win, but wouldn't duck.\n\nAll seemed lost. And then— \n\nA little fairy blurred to an unexpected stop between them.\n\nShe yelled at the Jinn, banging its nose with a tiny fist. The Jinn, at first amazed, roared with laughter. The young man stared slack jawed at the impossible sight. \n\nA strong purple glow suddenly lit the lamp, which lay forgotton on the floor. \n\nIt charged the room with possibility, filling the young man with hopes and dreams of anything and everything. This was magic.\n\nThe Jinn drank it in — slaking an almost unquenchable thirst — then struck hands together. Sleep came to the young man as time shattered and crashed to the floor. He was startled awake hours later by the rumble of thunder. \n\nA coding school Web site glowed on the computer beside him. \n\nFate, ever changing, was sealed anew.\n","frontmatter":"title: 'The reality glitch'\nimage: 'https://user-images.githubusercontent.com/30417590/63284751-41fac000-c282-11e9-9014-01670d4872f9.png'\nblurredImage: 'https://user-images.githubusercontent.com/30417590/63657624-1f7d1100-c772-11e9-8424-151e0223d6cd.png'\ndescription: 'xyz 3'\nnumber: 3"}

/***/ }),

/***/ "./app/data/the-story/story-chapter-two.md":
/*!*************************************************!*\
  !*** ./app/data/the-story/story-chapter-two.md ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"attributes":{"title":"True adventure","image":"https://user-images.githubusercontent.com/30417590/65457097-cd82e600-de18-11e9-96c4-591da3d26789.jpg","blurredImage":"https://user-images.githubusercontent.com/30417590/63657618-11c78b80-c772-11e9-99e9-ae7358492d50.png","description":"xyz 2","number":2},"body":"\nThe boy woke at home the next day. \n\nThe gold lamp sat on his bedside table. He looked at it. \n\n\"Why do you glow purple,\" he asked, hoping for a sign. There was none. \n\nSo he got on with life. He became a lawyer, then a journalist. He covered media, technology, and venture capital as a staff reporter for Forbes and others.\n\nBut — no matter what he did — he kept the lamp nearby. \n\n\"Why do you get brighter when I tell stories,\" he'd ask aloud sometimes.\n\nThe lamp never answered. It was, after all, just a lamp. That was fine. The mystery of its glow promised adventure. And the boy loved adventure. \n\nSo it's no surprise that he got to work the day he befriended a software developer. They were soon building their own software platforms. \n\nOne ran interactive video networks, the other, silky smooth global software demos. The boy pitched them tirelessly and in many different ways. \n\nBut neither took, and he slowly grew tired of the tale. \n\nAs he did, the lamp's purple glow grew dim. \n\nOne night, as the boy tossed and turned, he knocked the lamp to the floor. It rolled beneath its table, dark and forgotten.\n","frontmatter":"title: 'True adventure'\nimage: 'https://user-images.githubusercontent.com/30417590/65457097-cd82e600-de18-11e9-96c4-591da3d26789.jpg'\nblurredImage: 'https://user-images.githubusercontent.com/30417590/63657618-11c78b80-c772-11e9-99e9-ae7358492d50.png'\ndescription: 'xyz 2'\nnumber: 2"}

/***/ }),

/***/ "./app/header-footer/Button.jsx":
/*!**************************************!*\
  !*** ./app/header-footer/Button.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var Structure = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "Button__Structure",
  componentId: "sc-1t2o95m-0"
})(["display:", ";margin-left:25px;width:69px;padding:7px 0px;text-align:center;cursor:pointer;position:relative;background-color:unset;border:1px rgba(255,255,255,.6) solid;box-shadow:", ";transition:", ";user-select:none;z-index:0;:focus{outline:0;}"], function (p) {
  return !p.isStory ? 'none' : '';
}, function (p) {
  return !p.showBusinessCard && !p.showLegalTerms && p.illustrationLevel >= 2 && !p.headerMenuIsOpen && '2px 2px 2.5px rgba(0, 0, 0, .4)';
}, function (p) {
  return p.illustrationLevel > 0 && p.illustrationLevel < 3 ? 'box-shadow .35s' : '';
});
var Cover = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Button__Cover",
  componentId: "sc-1t2o95m-1"
})(["background-color:", ";opacity:", ";transition:", ";position:absolute;height:100%;width:100%;top:0px;left:0px;z-index:-1;"], function (p) {
  return p.theme.colors.black;
}, function (p) {
  return p.illustrationLevel >= 2 ? '.2' : '.125';
}, function (p) {
  return p.illustrationLevel > 0 && 'opacity .35s';
});
var Text = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Button__Text",
  componentId: "sc-1t2o95m-2"
})(["color:", ";font-size:", ";font-weight:400;margin-bottom:0px;"], function (p) {
  return p.theme.colors.white;
}, function (p) {
  return p.theme.fontSizes.one;
});
function Button(props) {
  var illustrationLevel = props.illustrationLevel,
      headerMenuIsOpen = props.headerMenuIsOpen,
      className = props.className,
      clickFunction = props.clickFunction,
      isStory = props.isStory,
      showBusinessCard = props.showBusinessCard,
      showLegalTerms = props.showLegalTerms,
      text = props.text;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Structure, {
    className: className,
    isStory: isStory,
    headerMenuIsOpen: headerMenuIsOpen,
    showBusinessCard: showBusinessCard,
    showLegalTerms: showLegalTerms,
    illustrationLevel: illustrationLevel,
    onClick: clickFunction
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Cover, {
    illustrationLevel: illustrationLevel
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, null, text));
}

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
/* harmony import */ var _Button_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.jsx */ "./app/header-footer/Button.jsx");
/* harmony import */ var intrinsic_scale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! intrinsic-scale */ "./node_modules/intrinsic-scale/dist/intrinsic-scale.common-js.js");
/* harmony import */ var intrinsic_scale__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(intrinsic_scale__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/eventManagement.js */ "./app/helpers/eventManagement.js");
/* harmony import */ var _shared_Loader_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/Loader.jsx */ "./app/shared/Loader.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../primitives/StyledLink.jsx */ "./app/primitives/StyledLink.jsx");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var shadow = '2px 2px 2.5px rgba(0, 0, 0, .4)';
var Container = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].footer.withConfig({
  displayName: "Footer__Container",
  componentId: "sc-13gwbe8-0"
})(["flex-shrink:0;display:flex;justify-content:", ";align-items:center;height:55px;font-size:", ";position:relative;width:100%;max-width:70rem;"], function (p) {
  return !p.story ? 'flex-end' : 'space-between';
}, function (p) {
  return p.theme.fontSizes.one;
});
var Line = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Footer__Line",
  componentId: "sc-13gwbe8-1"
})(["display:", ";position:absolute;z-index:1;left:25px;right:25px;top:0px;margin:0px;height:1px;background-color:", ";opacity:", ";transition:", ";@media (min-width:", "){left:5px;right:5px;}"], function (p) {
  return p.home ? 'none' : '';
}, function (p) {
  return !p.isNotFound ? p.theme.colors.pink : p.theme.colors.white;
}, function (p) {
  return p.isReverie || p.illustrationDirection === 'exit' && p.illustrationLevel < 2 || p.illustrationDirection === 'enter' && p.illustrationLevel < 1 ? '1' : '0';
}, function (p) {
  return p.illustrationLevel > 0 && p.illustrationLevel < 3 && 'opacity .35s';
}, function (p) {
  return p.theme.mediaQueries.desktop;
});
var RestyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(function (_ref) {
  var isStory = _ref.isStory,
      rest = _objectWithoutProperties(_ref, ["isStory"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], rest);
}).withConfig({
  displayName: "Footer__RestyledLink",
  componentId: "sc-13gwbe8-2"
})(["margin-right:13px;@media (min-width:", "){margin-right:20px;}"], function (p) {
  return p.theme.mediaQueries.tinyView;
});
var Graf = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].p.withConfig({
  displayName: "Footer__Graf",
  componentId: "sc-13gwbe8-3"
})(["cursor:pointer;margin-right:", "};margin-bottom:0px;color:", ";padding-top:5px;padding-bottom:5px;font-weight:400;font-size:", ";user-select:none;text-shadow:", ";transition:", ";@media (min-width:", "){padding-right:5px;margin-right:", ";}"], function (p) {
  return p.smallMarginRight && Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(["", "px"], p.smallMarginRight);
}, function (p) {
  return p.active ? !p.home && !p.isStory && !p.isNotFound ? p.theme.colors.pink : p.theme.colors.yellow : !p.home && !p.isStory && !p.isNotFound ? p.theme.colors.blue : p.theme.colors.white;
}, function (p) {
  return p.theme.fontSizes.one;
}, function (p) {
  return !p.isReverie && !p.showBusinessCard && !p.showLegalTerms && !p.headerMenuIsOpen && (p.home && p.coverValY < 0 || p.illustrationLevel >= 2) && shadow;
}, function (p) {
  return p.illustrationLevel > 0 && p.illustrationLevel < 3 && '.35s';
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return !p.isLink && '20px';
});
var TextBox = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Footer__TextBox",
  componentId: "sc-13gwbe8-4"
})(["display:flex;z-index:1;margin-right:25px;flex:1;justify-content:flex-end;@media (min-width:", "){margin-right:0px;}"], function (p) {
  return p.theme.mediaQueries.tinyView;
});
function FooterContainer(props) {
  var appState = props.appState,
      boundHandleClickForApp = props.boundHandleClickForApp;
  var illustrationLevel = appState.illustrationLevel,
      chapter = appState.chapter,
      currentCaller = appState.currentCaller,
      headerMenuIsOpen = appState.headerMenuIsOpen,
      height = appState.height,
      illustrationDirection = appState.illustrationDirection,
      lastCaller = appState.lastCaller,
      showBusinessCard = appState.showBusinessCard,
      illustrationDelay = appState.illustrationDelay,
      showLegalTerms = appState.showLegalTerms;

  var onClickContactHandler = function onClickContactHandler(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(event);
    boundHandleClickForApp('toggleBusinessCard');
  };

  var onClickLegalHandler = function onClickLegalHandler(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(event);
    boundHandleClickForApp('toggleLegalTerms');
  };

  var eventHandlerForStoryButton = function eventHandlerForStoryButton(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(event);

    if (chapter < 0) {
      boundHandleClickForApp('toggleShowDelay');
    } else {
      boundHandleClickForApp('toggleStoryText');
    }
  };

  var isReverie = currentCaller === 'reverie';
  var isStory = currentCaller === 'chapter';
  var isHome = currentCaller === 'home';
  var isNotFound = currentCaller === 'not-found';
  var coverVals = Object(intrinsic_scale__WEBPACK_IMPORTED_MODULE_1__["cover"])(window.innerWidth, height, 2131, 1244);
  var reverieLink = isReverie ? "/".concat(lastCaller !== 'home' ? lastCaller : '' // No text b/c 'home' is '/'
  ) : '/reverie';
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Container, {
    story: isStory
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Line, {
    home: isHome,
    isNotFound: isNotFound,
    hide: illustrationLevel,
    isReverie: isReverie,
    illustrationLevel: illustrationLevel,
    illustrationDirection: illustrationDirection
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Button_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], {
    isReverie: isReverie,
    headerMenuIsOpen: headerMenuIsOpen,
    clickFunction: eventHandlerForStoryButton,
    illustrationLevel: illustrationLevel,
    showBusinessCard: showBusinessCard,
    showLegalTerms: showLegalTerms,
    illustrationDirection: illustrationDirection,
    isStory: isStory,
    text: illustrationDelay ? 'Cancel' : illustrationDirection === 'enter' && illustrationLevel > 0 ? 'Text on' : 'Text off'
  }), isStory && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_shared_Loader_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    marginBottom: "2",
    marginLeft: "20",
    smallMarginLeft: "10",
    smallMarginRight: "17",
    fontSize: "small",
    maxWidth: "33",
    white: true,
    smallFont: true // done={illustrationLevel > 0}
    ,
    show: illustrationDelay
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(TextBox, {
    isStory: isStory
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(RestyledLink, {
    to: reverieLink,
    isStory: isStory,
    boundHandleClickForApp: boundHandleClickForApp
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Graf, {
    coverValsY: coverVals.y,
    active: isReverie,
    isLink: true,
    home: isHome,
    isStory: isStory,
    isNotFound: isNotFound,
    isReverie: isReverie,
    showBusinessCard: showBusinessCard,
    showLegalTerms: showLegalTerms,
    headerMenuIsOpen: headerMenuIsOpen,
    illustrationLevel: illustrationLevel,
    illustrationDirection: illustrationDirection
  }, "Reverie")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Graf, {
    coverValsY: coverVals.y,
    active: showBusinessCard,
    onClick: onClickContactHandler,
    home: isHome,
    isStory: isStory,
    isReverie: isReverie,
    isNotFound: isNotFound,
    showBusinessCard: showBusinessCard,
    showLegalTerms: showLegalTerms,
    headerMenuIsOpen: headerMenuIsOpen,
    illustrationLevel: illustrationLevel,
    illustrationDirection: illustrationDirection,
    smallMarginRight: "13"
  }, "Contact"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Graf, {
    coverValsY: coverVals.y,
    active: showLegalTerms,
    onClick: onClickLegalHandler,
    isReverie: isReverie,
    showBusinessCard: showBusinessCard,
    showLegalTerms: showLegalTerms,
    home: isHome,
    isStory: isStory,
    isNotFound: isNotFound,
    headerMenuIsOpen: headerMenuIsOpen,
    illustrationLevel: illustrationLevel,
    illustrationDirection: illustrationDirection
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
/* harmony import */ var _data_home_home_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/home/home.md */ "./app/data/home/home.md");
/* harmony import */ var _data_home_home_md__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_home_home_md__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_header_nav_open_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/header-nav-open.png */ "./public/header-nav-open.png");
/* harmony import */ var _public_header_nav_open_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_header_nav_open_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_header_nav_closed_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/header-nav-closed.png */ "./public/header-nav-closed.png");
/* harmony import */ var _public_header_nav_closed_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_header_nav_closed_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var intrinsic_scale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! intrinsic-scale */ "./node_modules/intrinsic-scale/dist/intrinsic-scale.common-js.js");
/* harmony import */ var intrinsic_scale__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(intrinsic_scale__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/Mapper.jsx */ "./app/shared/Mapper.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../classes/Referrer.js */ "./app/classes/Referrer.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../primitives/StyledLink.jsx */ "./app/primitives/StyledLink.jsx");
/* harmony import */ var _primitives_UnorderedList_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../primitives/UnorderedList.jsx */ "./app/primitives/UnorderedList.jsx");
/* harmony import */ var _helpers_eventManagement__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/eventManagement */ "./app/helpers/eventManagement.js");
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
var initialShadow = '2px 2px 2.5px';
var textShadow = initialShadow + ' rgba(0, 0, 0, .4)';
var iconShadow = initialShadow + ' rgba(0,0,0,.9)';
var Container = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].header.withConfig({
  displayName: "Header__Container",
  componentId: "sc-1rxr5md-0"
})(["color:", ";flex-shrink:0;z-index:2;height:52px;display:flex;justify-content:", ";align-items:center;width:100%;max-width:75rem;"], function (p) {
  return p.theme.colors.white;
}, function (p) {
  return p.isHome && 'center';
});
var HeaderBackground = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Header__HeaderBackground",
  componentId: "sc-1rxr5md-1"
})(["position:absolute;width:100%;height:52px;top:", ";bottom:", ";width:", ";left:0px;background-color:", ";opacity:", ";transition:", ";z-index:-1;@media (min-width:", "){opacity:", ";}"], function (p) {
  return !p.menu ? '0px' : '52px';
}, function (p) {
  return p.menu && '0px';
}, function (p) {
  return p.menu && '100%';
}, function (p) {
  return !p.isHome ? p.menu ? 'rgba(175, 18, 90, .8)' : p.theme.colors.darkPink : '';
}, function (p) {
  return p.headerMenuIsOpen || p.isReverie || p.illustrationDirection === 'exit' && p.illustrationLevel < 2 || p.illustrationDirection === 'enter' && p.illustrationLevel < 1 ? '1' : '0';
}, function (p) {
  return p.illustrationLevel > 0 && p.illustrationLevel < 3 && Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["css"])(["opacity .35s"]);
}, function (p) {
  return p.theme.mediaQueries.narrowBreakTwo;
}, function (p) {
  return p.illustrationLevel > 0 && p.theme.blurForHeaderMenu && '0';
});
var RestyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])( // Filter out isHome and isActive from StyledLink
// eslint-disable-next-line
function (_ref) {
  var illustrationLevel = _ref.illustrationLevel,
      headerMenuIsOpen = _ref.headerMenuIsOpen,
      isHome = _ref.isHome,
      isActive = _ref.isActive,
      isReverie = _ref.isReverie,
      menu = _ref.menu,
      textShadow = _ref.textShadow,
      nameAsLink = _ref.nameAsLink,
      showBusinessCard = _ref.showBusinessCard,
      showLegalTerms = _ref.showLegalTerms,
      rest = _objectWithoutProperties(_ref, ["illustrationLevel", "headerMenuIsOpen", "isHome", "isActive", "isReverie", "menu", "textShadow", "nameAsLink", "showBusinessCard", "showLegalTerms"]);

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], rest);
}).withConfig({
  displayName: "Header__RestyledLink",
  componentId: "sc-1rxr5md-2"
})(["font-size:", ";font-weight:", ";margin-left:", ";color:", ";text-shadow:", ";transition:", ";&&{text-decoration:", ";}@media (min-width:", "){margin-left:", ";font-size:", ";}@media (min-width:0px) and (max-width:", "){font-size:", ";margin-left:", ";}@media (min-width:", ") and (max-width:", "){font-size:", ";margin-left:", ";}"], function (p) {
  return p.theme.fontSizes.twentyOne;
}, function (p) {
  return p.isHome ? '400' : fontWeight;
}, function (p) {
  return p.num === 0 ? '0px' : '10px';
}, function (p) {
  return p.theme.colors.white;
}, function (p) {
  return !p.isReverie && !p.showBusinessCard && !p.showLegalTerms && !p.headerMenuIsOpen && p.illustrationLevel >= 2 ? textShadow : '';
}, function (p) {
  return p.illustrationLevel > 0 && p.illustrationLevel < 3 && 'text-shadow .35s';
}, function (p) {
  return p.isActive ? 'underline' : undefined;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.num === 0 ? '0px' : '15px';
}, function (p) {
  return p.isHome ? p.theme.fontSizes.three : p.theme.fontSizes.three;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return !p.nameAsLink && p.menu && p.theme.fontSizes.eighteen;
}, function (p) {
  return !p.nameAsLink && p.menu && '0px';
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.mediaQueries.narrowBreakTwo;
}, function (p) {
  return !p.nameAsLink && p.menu && p.theme.fontSizes.twenty;
}, function (p) {
  return !p.nameAsLink && p.menu && '0px';
});
var NameAsLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(RestyledLink).withConfig({
  displayName: "Header__NameAsLink",
  componentId: "sc-1rxr5md-3"
})(["display:", ";font-size:", ";margin-left:15px;@media (max-width:", "){z-index:", ";}"], function (p) {
  return p.isHome && 'none';
}, function (p) {
  return p.theme.fontSizes.six;
}, function (p) {
  return p.theme.mediaQueries.narrowBreakTwo;
}, function (p) {
  return p.menu && '1';
});
var Motto = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].span.withConfig({
  displayName: "Header__Motto",
  componentId: "sc-1rxr5md-4"
})(["font-weight:", ";flex:1;display:", ";font-style:italic;font-size:", ";margin:1px 10px 0px 13px;min-width:0px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-shadow:", ";transition:", ";@media (min-width:", "){font-size:", ";margin-right:0px;}@media (max-width:", "){z-index:", ";}"], fontWeight, function (p) {
  return p.isHome && 'none';
}, function (p) {
  return p.theme.fontSizes.two;
}, function (p) {
  return !p.isReverie && !p.showBusinessCard && !p.showLegalTerms && p.illustrationLevel >= 2 && !p.headerMenuIsOpen ? textShadow : '';
}, function (p) {
  return p.illustrationLevel > 0 && p.illustrationLevel < 3 && 'text-shadow .35s';
}, function (p) {
  return p.theme.mediaQueries.tinyViewTwo;
}, function (p) {
  return p.theme.fontSizes.four;
}, function (p) {
  return p.theme.mediaQueries.narrowBreakTwo;
}, function (p) {
  return p.menu && '1';
});
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].nav.withConfig({
  displayName: "Header__Nav",
  componentId: "sc-1rxr5md-5"
})(["display:", ";margin-top:-2px;padding:", ";background-color:", ";max-width:", ";position:relative;@media (min-width:", "){display:block;margin-right:", ";max-width:", ";}@media (max-width:", "){", ";}"], function (p) {
  return !p.isHome && 'none';
}, function (p) {
  return p.isHome && '6px 12px';
}, function (p) {
  return p.isHome && (p.coverValY || p.spacerHeight) && !p.showBusinessCard && !p.showLegalTerms && 'rgba(0, 0, 0, .125)';
}, function (p) {
  return p.isHome && '350px';
}, function (p) {
  return p.theme.mediaQueries.narrowBreakTwo;
}, function (p) {
  return !p.isHome && '15px';
}, function (p) {
  return p.isHome && '350px';
}, function (p) {
  return p.theme.mediaQueries.narrowBreakTwo;
}, function (p) {
  return p.menu && Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["css"])(["background-color:rgba(175,18,90,.8);position:fixed;top:54px;bottom:0px;width:100%;display:flex;justify-content:center;"]);
});
var NavList = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(_primitives_UnorderedList_jsx__WEBPACK_IMPORTED_MODULE_9__["default"]).withConfig({
  displayName: "Header__NavList",
  componentId: "sc-1rxr5md-6"
})(["display:flex;justify-content:center;margin:", ";justify-content:", ";@media (max-width:", "){", ";}"], function (p) {
  return !p.menu ? Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["css"])(["", " 0px ", " 0px}"], !p.isHome && 'auto', !p.isHome && 'auto') : '';
}, function (p) {
  return p.menu && 'space-evenly';
}, function (p) {
  return p.theme.mediaQueries.narrowBreakTwo;
}, function (p) {
  return p.menu && Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["css"])(["flex-direction:column;margin-bottom:55px;"]);
});
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].img.withConfig({
  displayName: "Header__Icon",
  componentId: "sc-1rxr5md-7"
})(["display:", ";height:22px;margin-left:auto;margin-right:10px;cursor:pointer;padding-top:5px;padding-bottom:5px;padding-left:5px;padding-right:5px;filter:", ";z-index:1;@media (min-width:", "){display:none;}"], function (p) {
  return p.isHome && 'none';
}, function (p) {
  return !p.isReverie && !p.showBusinessCard && !p.showLegalTerms && p.illustrationLevel >= 2 && !p.headerMenuIsOpen && Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["css"])(["drop-shadow(", ")"], iconShadow);
}, function (p) {
  return p.theme.mediaQueries.narrowBreakTwoB;
});

var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          appState = _this$props.appState,
          boundHandleClickForApp = _this$props.boundHandleClickForApp;
      var illustrationLevel = appState.illustrationLevel,
          currentCaller = appState.currentCaller,
          headerMenuIsOpen = appState.headerMenuIsOpen,
          height = appState.height,
          illustrationDirection = appState.illustrationDirection,
          showBusinessCard = appState.showBusinessCard,
          showLegalTerms = appState.showLegalTerms,
          spacerHeight = appState.spacerHeight;
      var isHome = currentCaller === 'home';
      var isReverie = currentCaller === 'reverie';
      var isStory = currentCaller == 'chapter';
      var iconType = headerMenuIsOpen ? _public_header_nav_open_png__WEBPACK_IMPORTED_MODULE_1___default.a : _public_header_nav_closed_png__WEBPACK_IMPORTED_MODULE_2___default.a;
      var coverVals = Object(intrinsic_scale__WEBPACK_IMPORTED_MODULE_3__["cover"])(window.innerWidth, height, 2131, 1244);
      var referrer = new _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_6__["default"](this.props);

      var onClickMenuHandler = function onClickMenuHandler(event) {
        Object(_helpers_eventManagement__WEBPACK_IMPORTED_MODULE_10__["default"])(event);
        boundHandleClickForApp('toggleHeaderMenu');
      };

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Container, {
        isHome: isHome
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(HeaderBackground, {
        isHome: isHome,
        isStory: isStory,
        isReverie: isReverie,
        headerMenuIsOpen: headerMenuIsOpen,
        illustrationLevel: illustrationLevel,
        illustrationDirection: illustrationDirection
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NameAsLink, {
        isHome: isHome,
        nameAsLink: true,
        isReverie: isReverie,
        menu: headerMenuIsOpen,
        showBusinessCard: showBusinessCard,
        showLegalTerms: showLegalTerms,
        headerMenuIsOpen: headerMenuIsOpen,
        illustrationLevel: illustrationLevel,
        boundHandleClickForApp: boundHandleClickForApp,
        to: '/'
      }, "James Abels"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Motto, {
        hide: isHome,
        isHome: isHome,
        isReverie: isReverie,
        menu: headerMenuIsOpen,
        showBusinessCard: showBusinessCard,
        showLegalTerms: showLegalTerms,
        headerMenuIsOpen: headerMenuIsOpen,
        illustrationLevel: illustrationLevel
      }, _data_home_home_md__WEBPACK_IMPORTED_MODULE_0___default.a.attributes.motto), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Nav, {
        isHome: isHome,
        menu: headerMenuIsOpen,
        coverValY: coverVals.y < 0,
        spacerHeight: spacerHeight < 20,
        showBusinessCard: showBusinessCard,
        showLegalTerms: showLegalTerms
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavList, {
        isHome: isHome,
        menu: headerMenuIsOpen
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        mapData: headerLinks,
        render: function render(link, idx) {
          var isActive = link.path.includes(referrer.location);
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
            key: idx
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(RestyledLink, {
            isActive: isActive,
            isHome: isHome,
            isReverie: isReverie,
            menu: headerMenuIsOpen,
            num: idx,
            to: link.path,
            illustrationLevel: illustrationLevel,
            showBusinessCard: showBusinessCard,
            showLegalTerms: showLegalTerms,
            headerMenuIsOpen: headerMenuIsOpen,
            boundHandleClickForApp: boundHandleClickForApp
          }, link.name));
        }
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Icon, {
        isHome: isHome,
        menu: headerMenuIsOpen,
        src: iconType,
        illustrationLevel: illustrationLevel,
        showBusinessCard: showBusinessCard,
        showLegalTerms: showLegalTerms,
        headerMenuIsOpen: headerMenuIsOpen,
        onClick: onClickMenuHandler
      }));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./app/helpers/eventManagement.js":
/*!****************************************!*\
  !*** ./app/helpers/eventManagement.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (event) {
  event.preventDefault();
  event.stopPropagation();
});

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

/***/ "./app/helpers/preloadBigImages.js":
/*!*****************************************!*\
  !*** ./app/helpers/preloadBigImages.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return prelodBigImages; });
/* harmony import */ var _data_home_home_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/home/home.md */ "./app/data/home/home.md");
/* harmony import */ var _data_home_home_md__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_home_home_md__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_the_story_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/the-story/index.js */ "./app/data/the-story/index.js");

 // Create multiple images
// The first set will have a 1x in their name
// Each image should be be full height of screen
// Each image should be >= the largest width at that height
// -Ie, no image should be < one of the widths at that height
// The second set will have a 2x in their name
// These images will be used when the pixel density is > 1
// Each of these images will be double the size of each original image 
// This means a second set of images must be created, at double the size of the first set
// This set will have a 2x in their name
// When selecting images:
// a. Determine pixel density — will be i) 1x or ii) 2x if density is > 1 (window.devicePixelRatio)
// b. Check the screen height
// c. Select the first height that is >= to the screen height
// d. Check if the screen width is <= the image width
// e. If the width meets the test, use it
// f. If the width does not meet the test, try again.
// Build the name, add the generic key to the object, and pair it with the selected file
// All images will be treated as having the original dimensions: 
// a. 768-1440-1x --> 768x1440
// b. 768-1440-2x --> 1536x2880
// 
// OPTION 2
// 1 set of 2x images for all supported sizes
// Each image should be be full height of screen
// Each image should be >= the largest width at that height
// -Ie, no image should be < one of the widths at that height
//

function prelodBigImages() {
  var images = {};
  images.alreadyLoaded = [];
  _data_the_story_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(function (chapter) {
    var imageA = new Image();
    var imageB = new Image();
    imageA.src = chapter.attributes.image;
    imageB.src = chapter.attributes.blurredImage;
    images["chapter-".concat(chapter.attributes.number, "-main")] = imageA;
    images["chapter-".concat(chapter.attributes.number, "-blurred")] = imageB;
  });
  _data_home_home_md__WEBPACK_IMPORTED_MODULE_0___default.a.attributes.preloadTheseImages.forEach(function (name) {
    var image = new Image();
    image.src = _data_home_home_md__WEBPACK_IMPORTED_MODULE_0___default.a.attributes[name];
    images[name] = image;

    if (image.complete) {
      images.alreadyLoaded.push(1);
    }
  });
  ['https://user-images.githubusercontent.com/30417590/64480217-8696be80-d191-11e9-994f-b8bd71243766.png', 'https://user-images.githubusercontent.com/30417590/64972267-ff270a80-d876-11e9-8af9-552472d29216.png'].forEach(function (src, idx) {
    var image = new Image();
    image.src = src;
    images[idx < 1 ? 'businessCardImage' : 'notFoundImage'] = image;
  });
  return images;
}

/***/ }),

/***/ "./app/home/BlurredBoyForeground.jsx":
/*!*******************************************!*\
  !*** ./app/home/BlurredBoyForeground.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "BlurredBoyForeground",
  componentId: "ivi2fi-0"
})(["position:absolute;display:block;object-fit:cover;font-family:'object-fit: cover;';width:100%;height:100%;pointer-events:none;opacity:", ";transition:", ";z-index:3;@media (min-width:", "){opacity:", ";transition:", ";}"], function (p) {
  return !p.finishedHomePageLoad && p.loadLevelBlurs >= 2 && p.loadLevelAll < 6 || p.theme.blurForTempContent || p.spellLevel < 5 && p.enter && p.spellLevel >= 2 || p.exit && p.spellLevel > 2 ? '1' : '0';
}, function (p) {
  return !p.finishedHomePageLoad || p.spellLevel > 0 && p.spellLevel < 5 ? 'opacity 1s ease-in' : '';
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.spellLevel > 0 ? 0 : '';
}, function (p) {
  return p.spellLevel > 0 && 'unset';
}));

/***/ }),

/***/ "./app/home/BlurredCityBackground.jsx":
/*!********************************************!*\
  !*** ./app/home/BlurredCityBackground.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "BlurredCityBackground",
  componentId: "sc-1035bmz-0"
})(["position:absolute;display:block;object-fit:cover;font-family:'object-fit: cover;';width:100%;height:100%;pointer-events:none;opacity:", ";transition:", ";z-index:", ";", ""], function (p) {
  return p.enter && p.spellLevel >= 2 || p.exit && p.spellLevel > 2 || p.theme.blurForTempContent ? '1' : '0';
}, function (p) {
  return p.spellLevel > 0 ? 'opacity .55s ease-in' : '';
}, function (p) {
  return !p.inCity && p.spellLevel < 5 ? '-1' : '1';
}, function (p) {
  return (p.spellLevel === 5 || !p.inCity) && 'display: none;';
}));

/***/ }),

/***/ "./app/home/BlurredFantasyBackground.jsx":
/*!***********************************************!*\
  !*** ./app/home/BlurredFantasyBackground.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "BlurredFantasyBackground",
  componentId: "sc-10dga40-0"
})(["position:absolute;display:block;object-fit:cover;font-family:'object-fit: cover;';width:100%;height:100%;pointer-events:none;opacity:", ";transition:", ";z-index:", ";", ";"], function (p) {
  return !p.finishedHomePageLoad && p.loadLevelBlurs >= 2 && p.loadLevelAll < 6 || p.theme.blurForTempContent || p.enter && p.spellLevel >= 2 || p.exit && p.spellLevel > 2 ? '1' : '0';
}, function (p) {
  return !p.finishedHomePageLoad || p.spellLevel > 0 ? "opacity ".concat(p.spellLevel > 0 ? '.65s' : '1s', " ease-in") : '';
}, function (p) {
  return !p.inCity && p.spellLevel < 5 ? '1' : '-1';
}, function (p) {
  return (p.spellLevel === 5 || p.inCity) && 'display: none';
}));

/***/ }),

/***/ "./app/home/BoyForeground.jsx":
/*!************************************!*\
  !*** ./app/home/BoyForeground.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "BoyForeground",
  componentId: "upigzs-0"
})(["position:absolute;display:block;object-fit:cover;font-family:'object-fit: cover;';width:100%;height:100%;pointer-events:none;opacity:", ";transition:", ";z-index:2;"], function (p) {
  return !p.finishedHomePageLoad && p.loadLevelAll < 6 ? '0' : '1';
}, function (p) {
  return !p.finishedHomePageLoad && 'opacity 1s ease-in';
}));

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
/* harmony import */ var _helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/eventManagement.js */ "./app/helpers/eventManagement.js");
/* harmony import */ var _kennethormandy_react_fittext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kennethormandy/react-fittext */ "./node_modules/@kennethormandy/react-fittext/lib/FitText.js");
/* harmony import */ var _kennethormandy_react_fittext__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kennethormandy_react_fittext__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/Mapper.jsx */ "./app/shared/Mapper.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _SubHed_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SubHed.jsx */ "./app/home/SubHed.jsx");






var bigPinkPulse = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["keyframes"])(["0%{box-shadow:0 0 0 0 rgba(253,17,114,1);}75%{box-shadow:0 0 0 15px rgba(253,17,114,0);}100%{transform:rotate(1turn);box-shadow:0 0 0 0 rgba(253,17,114,0);}"]);
var pinkPulse = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["keyframes"])(["0%{box-shadow:0 0 0 0 rgba(253,17,114,1);}75%{box-shadow:0 0 0 15px rgba(253,17,114,0);}100%{box-shadow:0 0 0 0 rgba(253,17,114,0);}"]);
var bigYellowPulse = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["keyframes"])(["0%{box-shadow:0 0 0 0 rgba(255,231,76,1);}75%{box-shadow:0 0 0 15px rgba(255,231,76,0);}100%{transform:rotate(1turn);box-shadow:0 0 0 0 rgba(255,231,76,0);}"]);
var yellowPulse = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["keyframes"])(["0%{box-shadow:0 0 0 0 rgba(255,231,76,1);}75%{box-shadow:0 0 0 15px rgba(255,231,76,0);}100%{box-shadow:0 0 0 0 rgba(255,231,76,0);}"]);
var OuterContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Charms__OuterContainer",
  componentId: "sc-1w1k612-0"
})(["display:", ";flex-direction:column;justify-content:space-between;z-index:2;opacity:", ";transition:opacity ", " ease-in;", ";"], function (p) {
  return p.spellLevel < 5 && !p.tempContentIsOn ? 'flex' : 'none';
}, function (p) {
  return p.enter && p.spellLevel >= 3 || p.exit && p.spellLevel > 3 ? '1' : '0';
}, function (p) {
  return p.enter ? '.65s' : '.45s';
}, function (p) {
  return p.nameTagWidth && "width: ".concat(p.nameTagWidth, "px");
});
var InnerContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Charms__InnerContainer",
  componentId: "sc-1w1k612-1"
})(["display:flex;flex-direction:column;margin-top:5px;width:200px;align-self:center;margin-left:1.17em;@media (min-width:", "){width:240px;margin-left:1.6em;}@media (min-width:", "){width:330px;}"], function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.mediaQueries.huge;
});
var CharmBox = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Charms__CharmBox",
  componentId: "sc-1w1k612-2"
})(["display:flex;justify-content:space-between;"]);
var Charm = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Charms__Charm",
  componentId: "sc-1w1k612-3"
})(["animation:", ";border:2px dotted ", ";width:45px;height:45px;border-radius:50%;z-index:3;user-select:none;display:flex;justify-content:center;align-items:center;cursor:pointer;position:relative;@media (min-width:", "){width:50px;height:50px;}@media (min-width:", "){width:75px;height:75px;}"], function (p) {
  return (p.enter && p.spellLevel > 3 || p.exit && p.spellLevel >= 3) && p.isActive && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["1.5s -.15s ", " infinite"], p.isReady ? bigYellowPulse : bigPinkPulse);
}, function (p) {
  return p.theme.colors.pink;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.mediaQueries.huge;
});
var CharmShadow = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Charms__CharmShadow",
  componentId: "sc-1w1k612-4"
})(["background-color:", ";box-shadow:0px 0px 22px -8px rgba(0,0,0,.8);border-radius:50%;position:absolute;top:0px;left:0px;height:100%;width:100%;"], function (p) {
  return p.isReady && p.isActive ? 'rgba(255, 231, 76, .6)' : 'rgba(253, 17, 114, .6)';
});
var Eye = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Charms__Eye",
  componentId: "sc-1w1k612-5"
})(["animation:", ";background-color:", ";height:18px;width:5px;border-radius:50%;z-index:1;@media (min-width:", "){height:23px;width:6px;}@media (min-width:", "){height:35px;width:8px;}"], function (p) {
  return (p.enter && p.spellLevel > 3 || p.exit && p.spellLevel >= 3) && p.isActive && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["1.5s -.15s ", " infinite"], p.isReady ? pinkPulse : yellowPulse);
}, function (p) {
  return p.isReady && p.isActive ? p.theme.colors.pink : p.theme.colors.yellow;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.mediaQueries.huge;
});
var EyeShadow = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Charms__EyeShadow",
  componentId: "sc-1w1k612-6"
})(["border-radius:50%;box-shadow:inset 0px 0px 2px 1px rgba(0,0,0,.15);height:100%;width:100%;z-index:1;"]);
var Dashboard = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Charms__Dashboard",
  componentId: "sc-1w1k612-7"
})(["margin-top:18px;display:flex;flex-direction:column;align-self:center;width:100px;@media (min-width:", "){margin-top:32px;}"], function (p) {
  return p.theme.mediaQueries.tinyView;
});
var Score = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].p.withConfig({
  displayName: "Charms__Score",
  componentId: "sc-1w1k612-8"
})(["font-size:", ";font-weight:400;color:", ";transition:color .5s ease-out;margin-bottom:5px;"], function (p) {
  return p.theme.fontSizes.six;
}, function (p) {
  return p.theme.colors.black;
});
var OuterBar = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Charms__OuterBar",
  componentId: "sc-1w1k612-9"
})(["height:1px;width:100%;align-self:center;background-color:", ";"], function (p) {
  return p.theme.colors.white;
});
var InnerBar = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Charms__InnerBar",
  componentId: "sc-1w1k612-10"
})(["width:", "%;height:100%;background-color:", ";transition:width .5s ease-out,background-color .5s ease-out;"], function (p) {
  return p.barWidth;
}, function (p) {
  return p.theme.colors.black;
});
function Charms(props) {
  if (props.homeState.spellLevel < 2) {
    return null;
  }

  var appState = props.appState,
      charmRefs = props.charmRefs,
      homeState = props.homeState,
      setSpellLevels = props.setSpellLevels;
  var inCity = appState.inCity,
      nameTagWidth = appState.nameTagWidth,
      showBusinessCard = appState.showBusinessCard,
      showLegalTerms = appState.showLegalTerms;
  var activeCharm = homeState.activeCharm,
      goal = homeState.goal,
      spellLevel = homeState.spellLevel,
      movement = homeState.movement,
      score = homeState.score; // Let's set up a progress bar.

  var onTransitionEndHandler = function onTransitionEndHandler(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(event);
    setSpellLevels.two(movement === 'exit', 'OuterContainer');
    setSpellLevels.four(movement === 'enter', 'OuterContainer');
  };

  var barWidth = score * (100 / (goal - 1));
  var isReady = score === goal - 1;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(OuterContainer, {
    spellLevel: spellLevel,
    enter: movement === 'enter',
    exit: movement === 'exit',
    tempContentIsOn: showBusinessCard || showLegalTerms,
    nameTagWidth: nameTagWidth,
    onTransitionEnd: onTransitionEndHandler
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_kennethormandy_react_fittext__WEBPACK_IMPORTED_MODULE_1___default.a, {
    compressor: 2.3
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SubHed_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    marginLeft: "1.17em"
  }, !inCity ? "Tap the pulses to travel home" : "Tap the pulses for adventure")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InnerContainer, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CharmBox, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    mapData: ['one', 'two', 'three'],
    render: function render(_, idx) {
      var isActive = activeCharm === idx + 1;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Charm, {
        key: idx,
        isActive: isActive,
        spellLevel: spellLevel,
        enter: movement === 'enter',
        exit: movement === 'exit',
        isReady: isReady,
        ref: charmRefs[idx] // Add a ref to each Charm when mounted

      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CharmShadow, {
        isActive: isActive,
        spellLevel: spellLevel,
        isReady: isReady
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Eye, {
        isActive: isActive,
        spellLevel: spellLevel,
        enter: movement === 'enter',
        exit: movement === 'exit',
        isReady: isReady
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(EyeShadow, {
        isActive: isActive,
        spellLevel: spellLevel,
        isReady: isReady
      })));
    }
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Dashboard, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Score, {
    isReady: isReady
  }, "Cast spell in ", goal - score, "..."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(OuterBar, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InnerBar, {
    barWidth: barWidth,
    isReady: isReady
  })))));
}

/***/ }),

/***/ "./app/home/CityBackground.jsx":
/*!*************************************!*\
  !*** ./app/home/CityBackground.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "CityBackground",
  componentId: "jz2e50-0"
})(["position:absolute;display:block;object-fit:cover;font-family:'object-fit: cover;';width:100%;height:100%;pointer-events:none;opacity:", ";transform:", ";transition:transform 1.75s,opacity 1.35s cubic-bezier(0.77,0,0.175,1);z-index:", ";"], function (p) {
  return p.inCity ? '1' : '0';
}, function (p) {
  return p.inCity ? 'scale(1)' : 'scale(1.35)';
}, function (p) {
  return !p.inCity && p.spellLevel < 5 ? '-2' : '0';
}));

/***/ }),

/***/ "./app/home/FantasyBackground.jsx":
/*!****************************************!*\
  !*** ./app/home/FantasyBackground.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "FantasyBackground",
  componentId: "sc-5cs8nt-0"
})(["position:absolute;display:block;object-fit:cover;font-family:'object-fit: cover;';width:100%;height:100%;pointer-events:none;opacity:", ";transform:", ";transform-origin:50% 5%;transition:", ";z-index:", ";"], function (p) {
  return !p.finishedHomePageLoad && p.loadLevelAll < 6 || p.inCity ? '0' : '1';
}, function (p) {
  return p.inCity ? 'scale(1.35)' : 'scale(1)';
}, function (p) {
  return !p.finishedHomePageLoad && p.loadLevelAll < 6 || p.spellLevel > 0 && 'transform 1.75s, opacity 1.35s cubic-bezier(0.77, 0, 0.175, 1)';
}, function (p) {
  return !p.inCity && p.spellLevel < 5 ? '0' : '-2';
}));

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

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this, props));
    _this.charmRefs = [react__WEBPACK_IMPORTED_MODULE_4___default.a.createRef(), react__WEBPACK_IMPORTED_MODULE_4___default.a.createRef(), react__WEBPACK_IMPORTED_MODULE_4___default.a.createRef()]; // Create an initial spell pattern. If we've gone
    // to /reverie and come back, we'll use the last
    // created spell pattern (stored on appState as
    // a back-up). Otherwise, make a new one.

    var initialPattern = _this.createSpellPattern();

    _this.props.boundHandleClickForApp('updateSpacerHeight', _this.props.appState.height);

    _this.state = {
      goal: 5,
      score: 0,
      // Used to select an active Charm and cast spell
      pattern: initialPattern,
      // arr
      activeCharm: initialPattern[0],
      eventType: 'click',
      // Type of event triggered Charm
      movement: '',
      // 'enter' = Charms / 'exit' = NameTag
      loadLevel: [0, 0, 0, 0],
      // [bBoy, bFant., boy, fant.], [2, 2, 1, 1] for initial load, [1, 1, 1, 1] after traveling (disregarded)
      spellLevel: 0
    };
    _this.eventHandlerForMouseDown = _this.eventHandlerForMouseDown.bind(_assertThisInitialized(_this));
    _this.eventHandlerForTouchStart = _this.eventHandlerForTouchStart.bind(_assertThisInitialized(_this));
    _this.setLoadLevelOne = _this.setLoadLevelOne.bind(_assertThisInitialized(_this));
    _this.setLoadLevelTwo = _this.setLoadLevelTwo.bind(_assertThisInitialized(_this));
    _this.setLoadLevelThree = _this.setLoadLevelThree.bind(_assertThisInitialized(_this));
    _this.setLoadLevelFour = _this.setLoadLevelFour.bind(_assertThisInitialized(_this));
    _this.setLoadLevelFive = _this.setLoadLevelFive.bind(_assertThisInitialized(_this));
    _this.setLoadLevelSix = _this.setLoadLevelSix.bind(_assertThisInitialized(_this));
    _this.sumLoadLevels = _this.sumLoadLevels.bind(_assertThisInitialized(_this));
    _this.setSpellLevelOne = _this.setSpellLevelOne.bind(_assertThisInitialized(_this));
    _this.setSpellLevelTwo = _this.setSpellLevelTwo.bind(_assertThisInitialized(_this));
    _this.setSpellLevelThree = _this.setSpellLevelThree.bind(_assertThisInitialized(_this));
    _this.setSpellLevelFour = _this.setSpellLevelFour.bind(_assertThisInitialized(_this));
    _this.resetSpell = _this.resetSpell.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Home, [{
    key: "setLoadLevel",
    value: function setLoadLevel(idx) {
      // Doesn't need to be bound in constructor b/c the
      // calling values are bound (creating a closure)
      if (this.state.loadLevel[idx] < 2) {
        var newArr = [].concat(this.state.loadLevel);
        var lastValue = newArr[idx];
        newArr[idx] = lastValue + 1;
        this.setState({
          loadLevel: newArr
        });
      }
    }
  }, {
    key: "setLoadLevelOne",
    value: function setLoadLevelOne() {
      // onLoad/blurredBoy
      this.setLoadLevel(0);
    }
  }, {
    key: "setLoadLevelTwo",
    value: function setLoadLevelTwo() {
      // onLoad/blurredFantasy
      this.setLoadLevel(1);
    }
  }, {
    key: "setLoadLevelThree",
    value: function setLoadLevelThree() {
      // onTransitionEnd/blurredBoy
      this.setLoadLevel(0);
    }
  }, {
    key: "setLoadLevelFour",
    value: function setLoadLevelFour() {
      // onTransitionEnd/blurredFantasy
      this.setLoadLevel(1);
    }
  }, {
    key: "setLoadLevelFive",
    value: function setLoadLevelFive() {
      // onLoad/boy
      this.setLoadLevel(2);
    }
  }, {
    key: "setLoadLevelSix",
    value: function setLoadLevelSix() {
      // onLoad/fantasy
      this.setLoadLevel(3);
    }
  }, {
    key: "sumLoadLevels",
    value: function sumLoadLevels() {
      var blurs = this.state.loadLevel[0] + this.state.loadLevel[1];
      var full = this.state.loadLevel[2] + this.state.loadLevel[3];
      return {
        blurs: blurs,
        full: full,
        all: blurs + full
      };
    }
  }, {
    key: "setSpellLevel",
    value: function setSpellLevel(val) {
      // Doesn't need to be bound in constructor b/c the
      // calling values are bound (creating a closure)
      this.setState({
        spellLevel: val
      });
    }
  }, {
    key: "setSpellLevelOne",
    value: function setSpellLevelOne(isValid, caller) {
      if (!isValid) return null;

      if (caller === 'BlurredFantasy' || caller === 'BlurredCity') {
        // onTransitionEnd
        this.setSpellLevel(1);
      }
    }
  }, {
    key: "setSpellLevelTwo",
    value: function setSpellLevelTwo(isValid, caller) {
      if (!isValid) return null;

      if (caller === 'OuterContainer' || caller === 'InnerContainer') {
        // a. Charms/OuterContainer, b. NameTag/InnerContainer --> onTransitionEnd
        this.setSpellLevel(2);
      }

      ;
    }
  }, {
    key: "setSpellLevelThree",
    value: function setSpellLevelThree(isValid, caller) {
      if (!isValid) return null;

      if (caller === 'BlurredFantasy' || caller === 'BlurredCity') {
        // onTransitionEnd
        this.setSpellLevel(3);
      }
    }
  }, {
    key: "setSpellLevelFour",
    value: function setSpellLevelFour(isValid, caller) {
      if (!isValid) return null;

      if (caller === 'OuterContainer') {
        // Charms --> onTransitionEnd
        this.setSpellLevel(4);
      }
    }
  }, {
    key: "resetSpell",
    value: function resetSpell(isValid, caller) {
      if (!isValid) return null;

      if (caller === 'InnerContainer') {
        // NameTag --> onTransitionEnd
        var newPattern = this.createSpellPattern();
        this.setState({
          spellLevel: 0,
          movement: '',
          pattern: newPattern,
          activeCharm: newPattern[0],
          score: 0
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var hcForHome = new _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_1__["default"]('home', this);
      var boundHandleClickForHome = hcForHome.boundHandleClick;
      var setSpellLevels = {
        one: function one(v, c) {
          return _this2.setSpellLevelOne(v, c);
        },
        two: function two(v, c) {
          return _this2.setSpellLevelTwo(v, c);
        },
        three: function three(v, c) {
          return _this2.setSpellLevelThree(v, c);
        },
        four: function four(v, c) {
          return _this2.setSpellLevelFour(v, c);
        },
        reset: function reset(v, c) {
          return _this2.resetSpell(v, c);
        }
      };
      var setLoadLevels = {
        one: function one() {
          return _this2.setLoadLevelOne();
        },
        two: function two() {
          return _this2.setLoadLevelTwo();
        },
        three: function three() {
          return _this2.setLoadLevelThree();
        },
        four: function four() {
          return _this2.setLoadLevelFour();
        },
        five: function five() {
          return _this2.setLoadLevelFive();
        },
        six: function six() {
          return _this2.setLoadLevelSix();
        },
        sum: function sum() {
          return _this2.sumLoadLevels();
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(RestyledMain, {
        home: true
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_NameTag_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, this.props, {
        homeState: this.state,
        boundHandleClickForHome: boundHandleClickForHome,
        setSpellLevels: setSpellLevels,
        setLoadLevels: setLoadLevels
      })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Charms_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({}, this.props, {
        homeState: this.state,
        charmRefs: this.charmRefs,
        setSpellLevels: setSpellLevels
      })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_PictureBox_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, this.props, {
        homeState: this.state,
        boundHandleClickForHome: boundHandleClickForHome,
        setSpellLevels: setSpellLevels,
        setLoadLevels: setLoadLevels
      })));
    }
  }, {
    key: "createSpellPattern",
    value: function createSpellPattern() {
      var pattern = [];

      for (var i = 0; i < 5; i++) {
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
    key: "eventHandlerForMouseDown",
    value: function eventHandlerForMouseDown(num) {
      var _this3 = this;

      return function () {
        var _this3$state = _this3.state,
            activeCharm = _this3$state.activeCharm,
            eventType = _this3$state.eventType;

        if (eventType === 'click') {
          var _hcCharm = new _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_1__["default"]('charm', _this3);

          var boundHandleCharm = _hcCharm.boundHandleClick;
          boundHandleCharm(activeCharm === num);
        } else if (eventType === 'touch') {
          // Resets event type to 'click' if a mouse suddenly works
          var hcHome = new _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_1__["default"]('home', _this3);
          var boundHandleClick = hcHome.boundHandleClick;
          var _boundHandleCharm = hcCharm.boundHandleClick;
          boundHandleClick('resetEventType');

          _boundHandleCharm(activeCharm === num); // Async/other probs?

        }
      };
    }
  }, {
    key: "eventHandlerForTouchStart",
    value: function eventHandlerForTouchStart(num) {
      var _this4 = this;

      return function () {
        var hcCharm = new _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_1__["default"]('charm', _this4);
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

        _this4.setState({
          eventType: 'touch'
        });

        boundHandleCharm(_this4.state.activeCharm === num);
      };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this5 = this;

      // Let's add our eventHandler whenever cDU runs as a result of
      // toggling NameTag (which causes refs to be added to our
      // charmsRef array mounting Charms.
      // See full explanation in handleTouchStart.
      if (this.charmRefs[0].current) {
        this.charmRefs.forEach(function (ref, idx) {
          if (!ref.current.onclick) {
            ref.current.onmousedown = _this5.eventHandlerForMouseDown(idx + 1);
            ref.current.ontouchstart = _this5.eventHandlerForTouchStart(idx + 1);
          }
        });
      }
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]); // SPELL PROCESS:
// 1. Movement is '' on initial load
// 2. Movement becomes 'enter' and spellLevel is 1 on first click
// 3. spellLevel 1 transitions NameTag Bio to 0 (previously 1)
// 4. spellLevel 1 becomes 2 onTransitionEnd for Home/NameTag/InnerContainer (opacity)
// 5. spellLevel 2 sets display: none for Home/NameTag/InnerContainer
// 6. spellLevel 2 transitions opacity to 1 for BlurredFantasyImage
// 7. spellLevel 2 becomes 3 onTransitionEnd for PictureBox/BlurredFantasyImage (opacity)
// 8. spellLevel 3 transitions opacity to 1 for Charms/OuterContainer (previously: 0)
// 9. spellLevel 3 becomes 4 onTransitionEnd for Charms/OuterContainer (opacity)
// --
// 10. Movement becomes 'exit' and spellLevel 4 becomes 3 on click
// 11. spellLevel 3 transitions Charms to 0 (previously 1)
// 12. spellLevel 3 becomes 2 onTransitionEnd for Charms/OuterContainer (opacity)
// 13. spellLevel 2 sets display: block for Home/NameTag/InnerContainer
// 14. spellLevel 2 transtions opacity to 0 for PictureBox/BlurredFantasyImage
// 15. spellLevel 2 becomes 1 onTransitionEnd for PictureBox/BlurredFantasyImage (opacity)
// 16. spellLevel 1 transitions opacity to 1 for Home/NameTag/InnerContainer
// 17. spellLevel becomes 0 onTransitionEnd for Home/NameTag/InnerContainer (opacity)
// 18. Movement is reset to '' onTransitionEnd in PictureBox/FantasyImage or PictureBox/CityImage (opacity)
// --
// 18. spellLevel becomes 5 when the spell is cast
// 19. spellLevel is reset to 0 onTransitionEnd in PictureBox/CityImage (transform)
// 20. Movement is reset to '' onTransitionEnd in PictureBox/FantasyImage (transform)




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
/* harmony import */ var _helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/eventManagement.js */ "./app/helpers/eventManagement.js");
/* harmony import */ var _kennethormandy_react_fittext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kennethormandy/react-fittext */ "./node_modules/@kennethormandy/react-fittext/lib/FitText.js");
/* harmony import */ var _kennethormandy_react_fittext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_kennethormandy_react_fittext__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_Loader_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/Loader.jsx */ "./app/shared/Loader.jsx");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _SubHed_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SubHed.jsx */ "./app/home/SubHed.jsx");










var blurInKeyframes = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["keyframes"])(["0%{filter:blur(12px);opacity:0;}100%{filter:blur(0px);opacity:1;}"]);
var heartbeatKeyframes = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["keyframes"])(["from{transform:scale(1);transform-origin:center center;animation-timing-function:ease-out;}10%{transform:scale(1.03);animation-timing-function:ease-in;}19%{transform:scale(0.97);animation-timing-function:ease-out;}35%{transform:scale(1.05);animation-timing-function:ease-in;}45%{transform:scale(1);animation-timing-function:ease-out;}"]);
var OuterContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "NameTag__OuterContainer",
  componentId: "sc-1tuguaa-0"
})(["display:", ";", ";", ";pointer-events:", ";text-align:center;z-index:2;", ";"], function (p) {
  return p.tempContentIsOn ? 'none' : 'block';
}, function (p) {
  return p.heartbeat && Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["css"])(["animation:1.15s ", " ease-in-out ", " 3 both"], p.delayHeartbeat ? '.825s' : '.6s', heartbeatKeyframes);
}, function (p) {
  return p.spellLevel === 5 && Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["css"])(["animation:", " ", " cubic-bezier(0.550,0.085,0.680,0.530) both"], blurInKeyframes, !p.inCity ? '1.52s' : '1.5s');
}, function (p) {
  return p.spellLevel === 5 && 'none';
}, function (p) {
  return p.nameTagWidth && "width: ".concat(p.nameTagWidth, "px");
});
var Spacer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "NameTag__Spacer",
  componentId: "sc-1tuguaa-1"
})(["height:", ";width:100%;z-index:3;"], function (p) {
  return p.spacerHeight + 'px';
});
var Hed = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].h1.withConfig({
  displayName: "NameTag__Hed",
  componentId: "sc-1tuguaa-2"
})(["font-family:'Aref Ruqaa',serif;text-shadow:2px 1.5px 5px black;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:", ";font-weight:700;line-height:1;margin-top:-9px;margin-bottom:10px;cursor:pointer;user-select:none;opacity:", ";transition:", ";@media (min-width:", "){margin-top:-17px;}"], function (p) {
  return p.theme.colors.yellow;
}, function (p) {
  return !p.finishedHomePageLoad && p.loadLevelBlurs < 2 ? '0' : '1';
}, function (p) {
  return p.loadLevelAll < 6 && 'opacity 1s ease-in';
}, function (p) {
  return p.theme.mediaQueries.tinyView;
});
var InnerContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "NameTag__InnerContainer",
  componentId: "sc-1tuguaa-3"
})(["transition:opacity ", " ease-in;display:", ";opacity:", ";"], function (p) {
  return p.loadLevelAll < 6 ? '.55s' : p.enter ? '.45s' : '.65s';
}, function (p) {
  return p.spellLevel < 5 && (p.enter && p.spellLevel >= 2 || p.exit && p.spellLevel > 2) ? 'none' : 'block';
}, function (p) {
  return !p.finishedHomePageLoad && p.loadLevelAll < 6 || p.spellLevel < 5 && p.enter && p.spellLevel >= 1 || p.exit && p.spellLevel > 1 ? '0' : '1';
});
var Pitch = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].section.withConfig({
  displayName: "NameTag__Pitch",
  componentId: "sc-1tuguaa-4"
})(["overflow:auto;z-index:2;p{font-weight:500;margin-left:1.7em;margin-bottom:10px;color:", ";text-shadow:1.5px 1px 2px white;text-align:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}"], function (p) {
  return p.theme.colors.black;
});
function NameTag(props) {
  var appState = props.appState,
      boundHandleClickForApp = props.boundHandleClickForApp,
      boundHandleClickForHome = props.boundHandleClickForHome,
      homeState = props.homeState,
      setSpellLevels = props.setSpellLevels,
      setLoadLevels = props.setLoadLevels;
  var heartbeat = appState.heartbeat,
      finishedHomePageLoad = appState.finishedHomePageLoad,
      showBusinessCard = appState.showBusinessCard,
      showLegalTerms = appState.showLegalTerms,
      spacerHeight = appState.spacerHeight,
      nameTagWidth = appState.nameTagWidth;
  var eventType = homeState.eventType,
      spellLevel = homeState.spellLevel,
      movement = homeState.movement,
      score = homeState.score;
  var attributes = _data_home_home_md__WEBPACK_IMPORTED_MODULE_0___default.a.attributes,
      body = _data_home_home_md__WEBPACK_IMPORTED_MODULE_0___default.a.body;
  var motto = attributes.motto,
      name = attributes.name;

  var onClickHandler = function onClickHandler(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event);

    if (heartbeat > 2 // Ends at 3
    && (spellLevel === 0 || spellLevel === 4)) {
      if (eventType === 'touch') {
        boundHandleClickForHome('resetEventType');
        return false;
      }

      if (false) {}

      boundHandleClickForHome('toggleSpell');
    }
  };

  var onAnimationStartHandler = function onAnimationStartHandler(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event);

    if (event.animationName === 'cHArim' // StyledComponents className
    && !finishedHomePageLoad) {
      boundHandleClickForApp('finishedHomePageLoad');
    }
  };

  var onAnimationEndHandler = function onAnimationEndHandler(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event);
    boundHandleClickForApp('updateHeartbeat'); // --> 3
  };

  var onTransitionEndHandler = function onTransitionEndHandler(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event);
    setSpellLevels.two(movement === 'enter', 'InnerContainer');
    setSpellLevels.reset(movement === 'exit', 'InnerContainer');
  };

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Spacer, {
    spacerHeight: spacerHeight
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(OuterContainer, {
    nameTagWidth: nameTagWidth,
    spellLevel: spellLevel,
    heartbeat: heartbeat > 0 && heartbeat < 3,
    delayHeartbeat: finishedHomePageLoad && heartbeat > 1 && heartbeat < 3,
    tempContentIsOn: showBusinessCard || showLegalTerms,
    onAnimationStart: onAnimationStartHandler,
    onAnimationEnd: onAnimationEndHandler
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_kennethormandy_react_fittext__WEBPACK_IMPORTED_MODULE_2___default.a, {
    compressor: 1.154
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Hed, {
    onClick: onClickHandler,
    loadLevelBlurs: setLoadLevels.sum().blurs,
    loadLevelAll: setLoadLevels.sum().all,
    finishedHomePageLoad: finishedHomePageLoad
  }, name)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(InnerContainer, {
    tempContentIsOn: showBusinessCard || showLegalTerms,
    loadLevelAll: setLoadLevels.sum().all,
    spellLevel: spellLevel,
    finishedHomePageLoad: finishedHomePageLoad,
    enter: movement === 'enter',
    exit: movement === 'exit',
    onTransitionEnd: onTransitionEndHandler
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_kennethormandy_react_fittext__WEBPACK_IMPORTED_MODULE_2___default.a, {
    compressor: 2.3
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_SubHed_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
    marginLeft: ".9em"
  }, motto)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Pitch, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_kennethormandy_react_fittext__WEBPACK_IMPORTED_MODULE_2___default.a, {
    compressor: 2.5
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, react_html_parser__WEBPACK_IMPORTED_MODULE_6___default()(marked__WEBPACK_IMPORTED_MODULE_4___default()(body, {
    smartypants: true
  })))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_shared_Loader_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    marginBottom: "7",
    done: finishedHomePageLoad,
    show: setLoadLevels.sum().all < 6
  })));
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
/* harmony import */ var _BlurredCityBackground_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlurredCityBackground.jsx */ "./app/home/BlurredCityBackground.jsx");
/* harmony import */ var _BoyForeground_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoyForeground.jsx */ "./app/home/BoyForeground.jsx");
/* harmony import */ var _BlurredBoyForeground_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BlurredBoyForeground.jsx */ "./app/home/BlurredBoyForeground.jsx");
/* harmony import */ var _BlurredFantasyBackground_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BlurredFantasyBackground.jsx */ "./app/home/BlurredFantasyBackground.jsx");
/* harmony import */ var _CityBackground_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CityBackground.jsx */ "./app/home/CityBackground.jsx");
/* harmony import */ var _helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/eventManagement.js */ "./app/helpers/eventManagement.js");
/* harmony import */ var _FantasyBackground_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FantasyBackground.jsx */ "./app/home/FantasyBackground.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");










var PictureHolder = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "PictureBox__PictureHolder",
  componentId: "sc-1oco850-0"
})(["position:fixed;top:0px;left:0px;height:100%;width:100%;overflow:hidden;z-index:1;"]);
function PictureBox(props) {
  var _bio$attributes = _data_home_home_md__WEBPACK_IMPORTED_MODULE_0___default.a.attributes,
      cityImage = _bio$attributes.cityImage,
      cityImageBlurred = _bio$attributes.cityImageBlurred,
      descriptionBoy = _bio$attributes.descriptionBoy,
      descriptionFantasy = _bio$attributes.descriptionFantasy,
      descriptionCity = _bio$attributes.descriptionCity,
      preloadTheseImages = _bio$attributes.preloadTheseImages;
  var appState = props.appState,
      boundHandleClickForHome = props.boundHandleClickForHome,
      boundHandleClickForApp = props.boundHandleClickForApp,
      homeState = props.homeState,
      setSpellLevels = props.setSpellLevels,
      setLoadLevels = props.setLoadLevels;
  var finishedHomePageLoad = appState.finishedHomePageLoad,
      images = appState.images,
      inCity = appState.inCity;
  var spellLevel = homeState.spellLevel,
      loadLevel = homeState.loadLevel,
      movement = homeState.movement;
  var imageNames = preloadTheseImages.map(function (name) {
    return name;
  });
  var bigBoySrc = images[imageNames[0]].src;
  var bigFantasySrc = images[imageNames[2]].src;
  var blurredBoySrc = images[imageNames[1]].src;
  var blurredFantasySrc = images[imageNames[3]].src; // Trigger toggle after we swap backgrounds
  // Requires a closure to pass all params...

  var regularBackgroundOnTransitionEndHandler = function regularBackgroundOnTransitionEndHandler(penultimateSpellLevel, activeBackground) {
    return function (event) {
      Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(event);

      if (penultimateSpellLevel // Psst. Second to last...
      && activeBackground && event.propertyName === 'transform') {
        boundHandleClickForHome('toggleSpell', event.propertyName);
      }
    };
  };

  var blurredBoyOnLoadHandler = function blurredBoyOnLoadHandler(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(event);
    setLoadLevels.one();
  };

  var regularBoyOnLoadHandler = function regularBoyOnLoadHandler(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(event);
    setLoadLevels.five();
  };

  var blurredFantasyOnLoadHandler = function blurredFantasyOnLoadHandler(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(event);
    setLoadLevels.two();
  };

  var regularFantasyOnLoadHandler = function regularFantasyOnLoadHandler(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(event);
    setLoadLevels.six();
  };

  var blurredBoyOnTransitionEndHandler = function blurredBoyOnTransitionEndHandler(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(event);
    setLoadLevels.three();

    if (setLoadLevels.sum().all === 6) {
      boundHandleClickForApp('updateHeartbeat'); // --> 1
    }
  };

  var blurredFantasyOnTransitionEndHandler = function blurredFantasyOnTransitionEndHandler() {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(event);
    setLoadLevels.four();
    setSpellLevels.three(movement === 'enter', 'BlurredFantasy');
    setSpellLevels.one(movement === 'exit', 'BlurredFantasy');
  };

  var blurredCityOnTransitionEndHandler = function blurredCityOnTransitionEndHandler() {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(event);
    setSpellLevels.three(movement === 'enter', 'BlurredCity');
    setSpellLevels.one(movement === 'exit', 'BlurredCity');
  };

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(PictureHolder, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_BlurredBoyForeground_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    finishedHomePageLoad: finishedHomePageLoad,
    enter: movement === 'enter',
    exit: movement === 'exit',
    loadLevelBlurs: setLoadLevels.sum().blurs,
    loadLevelAll: setLoadLevels.sum().all,
    spellLevel: spellLevel,
    src: blurredBoySrc,
    alt: descriptionBoy,
    onLoad: blurredBoyOnLoadHandler,
    onTransitionEnd: blurredBoyOnTransitionEndHandler
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_BoyForeground_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: bigBoySrc,
    alt: descriptionBoy,
    loadLevelAll: setLoadLevels.sum().all,
    finishedHomePageLoad: finishedHomePageLoad,
    onLoad: regularBoyOnLoadHandler
  }), (!inCity || inCity && spellLevel > 0) && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_BlurredFantasyBackground_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: blurredFantasySrc,
    finishedHomePageLoad: finishedHomePageLoad,
    inCity: inCity,
    enter: movement === 'enter',
    exit: movement === 'exit',
    spellLevel: spellLevel,
    loadLevelBlurs: setLoadLevels.sum().blurs,
    loadLevelAll: setLoadLevels.sum().all,
    loadLevelFantasy: loadLevel[3] > 0,
    onLoad: blurredFantasyOnLoadHandler,
    onTransitionEnd: blurredFantasyOnTransitionEndHandler
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_FantasyBackground_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
    inCity: inCity,
    finishedHomePageLoad: finishedHomePageLoad,
    src: bigFantasySrc,
    alt: descriptionFantasy,
    spellLevel: spellLevel,
    loadLevelAll: setLoadLevels.sum().all,
    onLoad: regularFantasyOnLoadHandler // Trigger toggle after backgrounds are swapped
    ,
    onTransitionEnd: regularBackgroundOnTransitionEndHandler(spellLevel > 4, inCity)
  })), (inCity || !inCity && spellLevel > 0) && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_BlurredCityBackground_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    src: cityImageBlurred,
    inCity: inCity,
    enter: movement === 'enter',
    exit: movement === 'exit',
    spellLevel: spellLevel,
    onTransitionEnd: blurredCityOnTransitionEndHandler
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_CityBackground_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    inCity: inCity,
    spellLevel: spellLevel,
    src: cityImage,
    alt: descriptionCity // Trigger toggle after backgrounds are swapped
    ,
    onTransitionEnd: regularBackgroundOnTransitionEndHandler(spellLevel > 4, !inCity)
  })));
}

/***/ }),

/***/ "./app/home/SubHed.jsx":
/*!*****************************!*\
  !*** ./app/home/SubHed.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h2.withConfig({
  displayName: "SubHed",
  componentId: "sc-1rejtdv-0"
})(["font-family:'Aref Ruqaa',serif;text-shadow:1.5px 1px 2px white;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:", ";font-weight:700;margin-left:", ";margin-bottom:17px;"], function (p) {
  return p.theme.colors.black;
}, function (p) {
  return p.marginLeft;
}));

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
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
/* harmony import */ var _primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../primitives/Main.jsx */ "./app/primitives/Main.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _primitives_ContentHolder_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../primitives/ContentHolder.jsx */ "./app/primitives/ContentHolder.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var RestyledContentHolder = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_primitives_ContentHolder_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "NotFound__RestyledContentHolder",
  componentId: "sc-1milcn9-0"
})(["flex:1;flex-wrap:wrap;justify-content:center;flex-direction:row;align-items:center;margin-right:25px;"]);
var Hed = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h1.withConfig({
  displayName: "NotFound__Hed",
  componentId: "sc-1milcn9-1"
})(["color:", ";font-size:", ";text-shadow:3px 2px 2.5px rgba(0,0,0,.4);margin-right:20px;@media (min-width:559px){}"], function (p) {
  return p.theme.colors.white;
}, function (p) {
  return p.theme.fontSizes.twenty;
});
var Jinn = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "NotFound__Jinn",
  componentId: "sc-1milcn9-2"
})(["margin-bottom:auto;pointer-events:none;@media (min-width:554px){margin-bottom:unset;}"]);

var NotFound =
/*#__PURE__*/
function (_Component) {
  _inherits(NotFound, _Component);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, _getPrototypeOf(NotFound).apply(this, arguments));
  }

  _createClass(NotFound, [{
    key: "render",
    value: function render() {
      var src = this.props.appState.images.notFoundImage.src;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RestyledContentHolder, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Hed, null, "Not found."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Jinn // Inline styles used to allocate img space on load
      , {
        style: {
          height: 'auto',
          width: '100%',
          maxWidth: '310px'
        },
        alt: "404",
        src: src
      })));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.boundHandleClickForApp('updateApp', 'not-found');
    }
  }]);

  return NotFound;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



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
})(["margin:18px 0px 18px ", ";display:flex;flex-direction:column;filter:", ";", ";@media (min-width:", "){margin:25px 0px 25px ", ";}@media (max-width:", "){filter:", ";}"], function (p) {
  return !p.saveSerifs ? '25px' : '23px';
}, function (p) {
  return p.theme.blurForTempContent && p.theme.blur;
}, react_device_detect__WEBPACK_IMPORTED_MODULE_1__["isIE"] && 'overflow: auto;', function (p) {
  return p.theme.mediaQueries.tinyViewTwo;
}, function (p) {
  return !p.saveSerifs ? '25px' : '23px';
}, function (p) {
  return p.theme.mediaQueries.narrowBreakTwo;
}, function (p) {
  return p.theme.blurForHeaderMenu && p.theme.blur;
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
})(["height:0px;display:flex;height:", "px;flex-grow:1;flex-shrink:0;flex-basis:auto;width:100%;max-width:", ";"], function (p) {
  return parseInt(p.theme.pageHeight) - 107;
}, function (p) {
  return !p.home ? '70rem' : '';
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
  return p.imageLoaded > 1 && !p.isMenu && '1';
}, function (p) {
  return p.imageLoaded > 1 && !p.isMenu && 'flex-end';
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
})(["height:", ";border:1px solid ", ";display:flex;align-items:center;@media (min-width:", "){height:", ";}"], function (p) {
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
})(["vertical-align:top;height:", ";width:", ";"], function (p) {
  return !p.isMenu && '100%';
}, function (p) {
  return p.isMenu && '100%';
});
function ProjectNav(props) {
  var boundHandleClickForApp = props.boundHandleClickForApp,
      contentState = props.contentState,
      imageLoaded = props.imageLoaded,
      mappedProject = props.mappedProject,
      mappedProjectIndex = props.mappedProjectIndex;
  var allContentData = contentState.allContentData,
      projectIndex = contentState.projectIndex,
      thumbnailIndex = contentState.thumbnailIndex;
  var _allContentData$proje = allContentData[projectIndex].attributes,
      projectName = _allContentData$proje.projectName,
      projectThumbnail = _allContentData$proje.projectThumbnail;
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
/* harmony import */ var _helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/eventManagement.js */ "./app/helpers/eventManagement.js");
/* harmony import */ var _shared_Loader_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/Loader.jsx */ "./app/shared/Loader.jsx");
/* harmony import */ var _primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../primitives/Main.jsx */ "./app/primitives/Main.jsx");
/* harmony import */ var _primitives_ContentHolder_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../primitives/ContentHolder.jsx */ "./app/primitives/ContentHolder.jsx");
/* harmony import */ var _shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/Mapper.jsx */ "./app/shared/Mapper.jsx");
/* harmony import */ var _shared_MenuButton_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/MenuButton.jsx */ "./app/shared/MenuButton.jsx");
/* harmony import */ var _primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../primitives/Overflow.jsx */ "./app/primitives/Overflow.jsx");
/* harmony import */ var _ProjectNav_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProjectNav.jsx */ "./app/projects/ProjectNav.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/dist/index.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared_Shelf_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/Shelf.jsx */ "./app/shared/Shelf.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













var Type = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].p.withConfig({
  displayName: "Projects__Type",
  componentId: "e6bzkp-0"
})(["font-size:", ";color:", ";margin-bottom:4px;font-style:italic;"], function (p) {
  return p.theme.fontSizes.three;
}, function (p) {
  return p.theme.colors.lightBlack;
});
var ProjectName = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].h1.withConfig({
  displayName: "Projects__ProjectName",
  componentId: "e6bzkp-1"
})(["font-size:", ";color:", ";margin-top:-8px;margin-bottom:4px;"], function (p) {
  return p.theme.fontSizes.sixteen;
}, function (p) {
  return p.theme.colors.pink;
});
var Hed = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].h3.withConfig({
  displayName: "Projects__Hed",
  componentId: "e6bzkp-2"
})(["font-size:", ";font-weight:400;color:", ";margin-bottom:8px;margin-left:2px;"], function (p) {
  return p.theme.fontSizes.eight;
}, function (p) {
  return p.theme.colors.blue;
});
var Dek = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].h2.withConfig({
  displayName: "Projects__Dek",
  componentId: "e6bzkp-3"
})(["font-size:", ";margin-bottom:", ";font-weight:300;color:", ";"], function (p) {
  return p.theme.fontSizes.thirteen;
}, function (p) {
  return p.theme.bottomMargin.regular;
}, function (p) {
  return p.theme.colors.pink;
});
var Graf = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].p.withConfig({
  displayName: "Projects__Graf",
  componentId: "e6bzkp-4"
})(["margin-right:0px;margin-bottom:", ";margin-left:2px;"], function (p) {
  return !p.lastItem ? p.theme.bottomMargin.regular : '15px';
});
var Figure = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].figure.withConfig({
  displayName: "Projects__Figure",
  componentId: "e6bzkp-5"
})(["margin:0px;padding-top:15px;border-top:1px solid ", ";"], function (p) {
  return p.theme.colors.blueTwo;
});
var Caption = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].figcaption.withConfig({
  displayName: "Projects__Caption",
  componentId: "e6bzkp-6"
})(["margin-bottom:10px;font-size:", ";line-height:1.5;color:", ";"], function (p) {
  return p.theme.fontSizes.seven;
}, function (p) {
  return p.theme.colors.lightBlack;
});
var ImageHolder = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "Projects__ImageHolder",
  componentId: "e6bzkp-7"
})(["padding:15px;min-height:155px;background-color:", ";"], function (p) {
  return p.theme.colors.reverieBlue;
});
var MainImage = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].img.withConfig({
  displayName: "Projects__MainImage",
  componentId: "e6bzkp-8"
})(["opacity:", ";width:100%;height:auto;vertical-align:top;box-shadow:2px 4px 12px rgba(0,0,0,.3);"], function (p) {
  return p.imageLoaded ? '1' : '0';
});
function Projects(props) {
  var appState = props.appState,
      boundHandleClickForContentLoader = props.boundHandleClickForContentLoader,
      contentState = props.contentState;
  var pinchZoomed = appState.pinchZoomed;
  var allContentData = contentState.allContentData,
      imageLoaded = contentState.imageLoaded,
      projectIndex = contentState.projectIndex,
      thumbnailIndex = contentState.thumbnailIndex;
  var _allContentData$proje = allContentData[projectIndex].attributes,
      captions = _allContentData$proje.captions,
      full = _allContentData$proje.full,
      pitch = _allContentData$proje.pitch,
      projectName = _allContentData$proje.projectName,
      showTheseAttributes = _allContentData$proje.showTheseAttributes,
      type = _allContentData$proje.type,
      zoomed = _allContentData$proje.zoomed;
  var caption = captions[thumbnailIndex]; // Larger res ('zoomed') image if:
  //  a. desktop
  //  b. pinchZoomed

  var source = !react_device_detect__WEBPACK_IMPORTED_MODULE_9__["isMobile"] || pinchZoomed ? zoomed[thumbnailIndex] : full[thumbnailIndex];
  var attributeArray = showTheseAttributes.map(function (name) {
    return allContentData[projectIndex].attributes[name];
  });

  var onLoadMainImageHandler = function onLoadMainImageHandler(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(event);
    boundHandleClickForContentLoader('imageLoader', 1);
  };

  var onTransitionEndForLoader = function onTransitionEndForLoader(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(event);
    boundHandleClickForContentLoader('imageLoader', 2);
  };

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_primitives_ContentHolder_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shared_Shelf_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
    height: "32px",
    tinyHeight: "20px"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shared_MenuButton_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], props), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shared_Loader_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    spinner: true,
    marginLeft: "auto",
    show: imageLoaded < 1,
    done: imageLoaded > 1,
    forTransition: onTransitionEndForLoader
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ProjectNav_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, props, {
    imageLoaded: imageLoaded
  }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Type, null, type), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ProjectName, null, projectName), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Dek, null, pitch), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shared_Mapper_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    mapData: attributeArray,
    render: function render(text, idx) {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
        key: idx
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Hed, null, showTheseAttributes[idx][0].toUpperCase() + showTheseAttributes[idx].slice(1)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Graf, null, text));
    }
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Figure, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Caption, null, caption), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ImageHolder, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MainImage, {
    alt: "mainPic",
    src: source,
    imageLoaded: imageLoaded,
    onLoad: onLoadMainImageHandler
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _classes_Reload_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/Reload.js */ "./app/classes/Reload.js");



/** Redirect users via bodyState */

function ReloadRoute(props) {
  var boundHandleClickForApp = props.boundHandleClickForApp;
  var currentCaller = props.appState.currentCaller;
  var indexForChapterData = props.bodyState.indexForChapterData;
  var reload = new _classes_Reload_js__WEBPACK_IMPORTED_MODULE_2__["default"](props); // Update appState.chapter when link
  // points to /chapter

  if (currentCaller === 'chapter') {
    var number = indexForChapterData + 1;

    if (!props.appState.images["chapter-".concat(number, "-main")].complete) {
      number = number * -1;
    } // Note: Duplicated by State.rebuildApp, but 
    // it breaks here. Refactor at a later date.


    boundHandleClickForApp('setChapter', number);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: reload.path
  });
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
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
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

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContentLoader).call(this, props)); // DO NOT USE props.currentCaller or props.isMenu to avoid problems
    // w/BACK/FORWARD. Both are out-of-date b/c the eventListener for
    // BACK/FORWARD runs AFTER ContentLoader runs.

    var isMenu = window.location.pathname.split('/').indexOf('menu') === 2;
    var referrer = new _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_9__["default"](props);
    var location = new _classes_Location_js__WEBPACK_IMPORTED_MODULE_4__["default"](referrer.pathToMatch, props);
    var state = new _classes_State_js__WEBPACK_IMPORTED_MODULE_12__["default"](props, location);
    var content = new _classes_Content_js__WEBPACK_IMPORTED_MODULE_3__["default"](location.caller);
    var allContentData = content.getContentData();
    var checkStateOfBlurredIllustration = location.caller === 'chapter' && !isMenu && referrer.path.split('/').length > 2;
    _this.overflowRef = location.caller === 'chapter' ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef() : {}; // Don't need to store publication here.
    // The Clip list is a single level, meaning that 
    // we don't use publication to sort.
    // Instead, publication will show the starting
    // index item as a default when needed.

    _this.state = {
      isNotFound: !location.pathIsValid,
      needsRedirect: location.needsRedirect,
      imageLoaded: checkStateOfBlurredIllustration ? props.appState.images["chapter-".concat(state.getIndex('chapter') + 1, "-blurred")].complete ? 2 : 0 : location.caller === 'projects' ? 0 : -1,
      allContentData: allContentData,
      caller: location.caller,
      chapterIndex: state.getIndex('chapter'),
      projectIndex: state.getIndex('project'),
      thumbnailIndex: state.getIndex('projectPics'),
      headlineIndex: state.getIndex('article'),
      reverieIndex: state.getIndex('reverie')
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

          if (caller === 'projects' || caller === 'chapter') {
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
      var referrer = new _classes_Referrer_js__WEBPACK_IMPORTED_MODULE_9__["default"](this.props);
      var location = new _classes_Location_js__WEBPACK_IMPORTED_MODULE_4__["default"](referrer.pathToMatch, this.props, prevProps);

      if (location.needsRedirect) {
        this.setState({
          needsRedirect: true
        });
      } else if (location.isSwappingContent) {
        var _this$props = this.props,
            appState = _this$props.appState,
            boundHandleClickForApp = _this$props.boundHandleClickForApp,
            boundHandleClickForBody = _this$props.boundHandleClickForBody;
        var state = new _classes_State_js__WEBPACK_IMPORTED_MODULE_12__["default"](this.props, location);
        var clickHandling = new _classes_ClickHandling_js__WEBPACK_IMPORTED_MODULE_2__["default"]('contentLoader', this);
        var boundHandleClickForContentLoader = clickHandling.boundHandleClick;
        state.rebuildBody(boundHandleClickForBody);
        state.resetIllustrationState(boundHandleClickForApp);
        state.rebuildContentLoader(boundHandleClickForContentLoader); // The scrollTop reset is not currently applied to
        // the /projects, and /journalism routes b/c
        // they can only be changed via /menu.
        // If you want to expand this to include the
        // /projects and /journalism, remember to 
        // filter /menu paths, as they don't have an
        // overflowRef, and so will kick an error.

        if (location.caller === 'chapter') {
          var currentCaller = appState.currentCaller;
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
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



 // This code comes courtesy of: https://stackoverflow.com/a/51580782
// See also: https://github.com/ReactTraining/history/issues/470
// It keeps history tidy for the user.
// iSayNoMatch is a custom test. It tries to account for the
// vagaries of this site. Consider an example.
// If we were to click /chapter in the header menu while we're on
// /chapter/practical-magic, we'll add /chapter to the history
// stack (whch will then call subroutes of /chapter, adding
// them, too). Bottom line, this causes the back button
// to feel like quicksand, we'll keep ending up in
// the same place.
// Note 1: /XYZ/menu is an exception to this rule. We DO want to
// save /menu button toggles to history, meaning that /projects
// and /projects/menu should be on the stack, sequentially.
// Note 2: Home has its own quirks. Because it's a single '/',
// it's found w/n every string with a '/'. We can deal w/this
// by checking the length of 'to' --> iSayNoMatch if > 1 in
// the context of multiple checks (see code).
// *** ASIDE ***
// When the user clicks a link:
// a. window.location.pathname updates instantly, meaning it will show
// the new location, not the one we were on when it was clicked
// b. props.to will carry the actual current location, the one we
// want to ADD to the history stack (one time, not multiple).
// Yes. This use of 'to' (or its name) is confusing.
// *** END ASIDE ***
// This component updates all of appState when navigating between
// sections. Here's a rundown of how this works:
// a. It does not update appState if called by a Menu button,
//    it just toggles the isMenu property on appState.
// b. It does update appState if called by a header link or
//    the reverie link because it must be 'reset'.
// c. It will also toggle the header menu off if called by
//    a header link (but not the reverie link).
// d. Worth noting, appState is updated when the back or forth
//    buttons are used via an event listener that is added
//    to 'pop' in the App Component.

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var to = _ref.to,
      replace = _ref.replace,
      boundHandleClickForApp = _ref.boundHandleClickForApp,
      isCalledByMenu = _ref.isCalledByMenu,
      props = _objectWithoutProperties(_ref, ["to", "replace", "boundHandleClickForApp", "isCalledByMenu"]);

  var pathname = window.location.pathname;
  var splitTheCaller = to.split('/');
  var callerWillBe = splitTheCaller[1].length !== 0 ? splitTheCaller[1] : 'home';
  var isMenu = pathname.includes('menu') && pathname.split('/')[2] === 'menu'; // Ensures this is a /menu.

  var iSayNoMatch = window.location.pathname.includes(to) && !isMenu && to.length > 1;

  var onClickHandler = function onClickHandler(event) {
    if (!boundHandleClickForApp) {
      return null;
    }

    event.stopPropagation();

    if (!isCalledByMenu) {
      boundHandleClickForApp('updateApp', splitTheCaller.length === 2 ? callerWillBe : undefined);
    } else {
      boundHandleClickForApp('toggleMenu');
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: typeof to === 'string' ? to : Object(history__WEBPACK_IMPORTED_MODULE_0__["createPath"])(to),
    exact: true
  }, function (_ref2) {
    var match = _ref2.match;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], _extends({}, props, {
      to: to,
      replace: iSayNoMatch || replace || !!match,
      onClick: onClickHandler
    }));
  });
});

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
      var errorText = initialLoad ? "Error. Please use Chrome, Firefox, or Safari." : "Error. Something's wrong. Please try again.";

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
            padding: '15px 0px'
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
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "About"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "I write code for Web sites and software. I tell stories, too."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "That's important. Stories define everything. Consider this:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "1. Microsoft sells Word by telling people they can write things with it. That pitch is a story."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "2. People use Word to collect and organize their thoughts. Those thoughts are a story."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "3. Word saves these thoughts to a 'document'. That file name tells a story."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "It's all stories, all the way down."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "That's where I come in. Rather than just mechanically coding sites and software, I try to figure out \u2014 and keep sight of \u2014\xA0the stories that drive them. I always have."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "As a start-up founder, I told stories that pitched our software. As a staff reporter for Forbes and Mergermarket, I wrote stories that gave insight into technology and venture capital. And as a lawyer, I crafted stories that made legal arguments."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Like I said \u2014 stories all the way down."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "That's mine. What's yours?")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
          style: {
            paddingLeft: '25px',
            paddingRight: '25px',
            marginTop: !initialLoad ? '25px' : ''
          }
        }, "Say\xA0hello__@__jamesabels.net")));
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

/***/ "./app/shared/Loader.jsx":
/*!*******************************!*\
  !*** ./app/shared/Loader.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_image_loader_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/image-loader.gif */ "./public/image-loader.gif");
/* harmony import */ var _public_image_loader_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_image_loader_gif__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var loaderKeyframes = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["0%{width:0%;}100%{width:100%;}"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Loader__Container",
  componentId: "sdg3px-0"
})(["display:flex;justify-content:center;margin-left:", ";margin-right:", ";opacity:", ";transition:opacity .2s;width:", ";max-width:", ";@media (min-width:", "){margin-left:", ";}"], function (p) {
  return p.smallMarginLeft && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["", ""], p.smallMarginLeft.includes('auto') ? p.smallMarginLeft : p.smallMarginLeft + 'px');
}, function (p) {
  return p.smallMarginRight && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["", ""], p.smallMarginRight.includes('auto') ? p.smallMarginRight : p.smallMarginRight + 'px');
}, function (p) {
  return p.show ? '1' : '0';
}, function (p) {
  return p.cWidth && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["", "px"], p.cWidth);
}, function (p) {
  return p.maxWidth && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["", "px"], p.maxWidth);
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.marginLeft && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["", ""], p.marginLeft.length <= 2 ? p.marginLeft + 'px' : p.marginLeft);
});
var ImgContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Loader__ImgContainer",
  componentId: "sdg3px-1"
})(["height:16px;width:16px;"]);
var ImgLoader = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Loader__ImgLoader",
  componentId: "sdg3px-2"
})(["width:100%;height:100%;background-image:url(", ");background-size:cover;"], function (p) {
  return p.spinner;
});
var Text = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "Loader__Text",
  componentId: "sdg3px-3"
})(["color:", ";margin-bottom:", ";font-size:", ";"], function (p) {
  return !p.white ? p.theme.colors.black : p.theme.colors.white;
}, function (p) {
  return p.marginBottom + 'px';
}, function (p) {
  return p.smallFont ? p.theme.fontSizes.zero : p.theme.fontSizes.six;
});
var LoadingBar = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Loader__LoadingBar",
  componentId: "sdg3px-4"
})(["height:1px;background-color:", ";"], function (p) {
  return !p.white ? p.theme.colors.white : p.theme.colors.black;
});
var ProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Loader__ProgressBar",
  componentId: "sdg3px-5"
})(["width:100%;height:1px;background-color:", ";animation:", ";"], function (p) {
  return !p.white ? p.theme.colors.black : p.theme.colors.white;
}, function (p) {
  return p.show && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["1.25s ", " infinite"], loaderKeyframes);
});
function Loader(props) {
  if (props.done) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    show: props.show,
    cWidth: props.cWidth,
    maxWidth: props.maxWidth,
    marginLeft: props.marginLeft,
    onTransitionEnd: props.forTransition,
    smallMarginLeft: props.smallMarginLeft,
    smallMarginRight: props.smallMarginRight
  }, props.spinner ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImgContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImgLoader, {
    spinner: _public_image_loader_gif__WEBPACK_IMPORTED_MODULE_1___default.a
  })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {
    white: props.white,
    smallFont: props.smallFont,
    marginBottom: props.marginBottom
  }, "Loading..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingBar, {
    white: props.white
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProgressBar, {
    show: props.show,
    white: props.white
  }))));
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
})(["position:absolute;width:100%;left:0px;bottom:0px;margin:0px;height:1px;background-color:", ";"], function (p) {
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
/* harmony import */ var _helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/eventManagement.js */ "./app/helpers/eventManagement.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../primitives/Main.jsx */ "./app/primitives/Main.jsx");
/* harmony import */ var _primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../primitives/Overflow.jsx */ "./app/primitives/Overflow.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _primitives_ContentHolder_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../primitives/ContentHolder.jsx */ "./app/primitives/ContentHolder.jsx");
/* harmony import */ var _shared_Shelf_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/Shelf.jsx */ "./app/shared/Shelf.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _public_jea_story_chapter_one_50blur_3px_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/jea-story-chapter-one-50blur-3px.png */ "./public/jea-story-chapter-one-50blur-3px.png");
/* harmony import */ var _public_jea_story_chapter_one_50blur_3px_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_jea_story_chapter_one_50blur_3px_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_jea_story_chapter_two_50blur_3px_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../public/jea-story-chapter-two-50blur-3px.png */ "./public/jea-story-chapter-two-50blur-3px.png");
/* harmony import */ var _public_jea_story_chapter_two_50blur_3px_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_jea_story_chapter_two_50blur_3px_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_jea_story_chapter_three_50blur_3px_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../public/jea-story-chapter-three-50blur-3px.png */ "./public/jea-story-chapter-three-50blur-3px.png");
/* harmony import */ var _public_jea_story_chapter_three_50blur_3px_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_jea_story_chapter_three_50blur_3px_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_jea_story_chapter_four_50blur_3px_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../public/jea-story-chapter-four-50blur-3px.png */ "./public/jea-story-chapter-four-50blur-3px.png");
/* harmony import */ var _public_jea_story_chapter_four_50blur_3px_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_jea_story_chapter_four_50blur_3px_png__WEBPACK_IMPORTED_MODULE_13__);














var RestyledContentHolder = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(_primitives_ContentHolder_jsx__WEBPACK_IMPORTED_MODULE_7__["default"]).withConfig({
  displayName: "Story__RestyledContentHolder",
  componentId: "sc-1gwc67d-0"
})(["opacity:", ";transition:", ";pointer-events:", ";flex-direction:column;"], function (p) {
  return !p.showBusinessCard && !p.showLegalTerms && !p.headerMenuIsOpen && (p.illustrationDirection === 'exit' && p.illustrationLevel < 2 || p.illustrationDirection === 'enter' && p.illustrationLevel < 1) ? '1' : '0';
}, function (p) {
  return p.illustrationLevel > 0 && p.illustrationLevel < 3 && 'opacity .35s';
}, function (p) {
  return p.illustrationLevel > 0 && 'none';
});
var RestyledShelf = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(_shared_Shelf_jsx__WEBPACK_IMPORTED_MODULE_8__["default"]).withConfig({
  displayName: "Story__RestyledShelf",
  componentId: "sc-1gwc67d-1"
})(["flex-direction:column;align-items:center;"]);
var PictureHolder = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].section.withConfig({
  displayName: "Story__PictureHolder",
  componentId: "sc-1gwc67d-2"
})(["z-index:-1;"]);
var Chapter = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].h2.withConfig({
  displayName: "Story__Chapter",
  componentId: "sc-1gwc67d-3"
})(["color:#fff7c9;font-weight:400;font-size:", ";font-style:italic;margin-bottom:1px;"], function (p) {
  return p.theme.fontSizes.nine;
});
var BookTitle = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].h1.withConfig({
  displayName: "Story__BookTitle",
  componentId: "sc-1gwc67d-4"
})(["font-family:'Playfair Display',serif;margin:0px auto 35px;font-size:2rem;font-weight:700;color:", ";text-align:center;text-shadow:1px 1px 3px rgba(0,0,0,.6);max-width:500px;@media (min-width:", "){font-size:2.5rem;}@media (min-width:", "){font-size:3.3rem;}"], function (p) {
  return p.theme.colors.yellow;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.mediaQueries.narrowBreakOne;
});
var TagLine = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].p.withConfig({
  displayName: "Story__TagLine",
  componentId: "sc-1gwc67d-5"
})(["font-style:italic;font-size:", ";color:#fff093;text-shadow:1px 1px 3px rgba(0,0,0,.6);text-align:center;margin-top:-4px;margin-bottom:3px;@media (min-width:", "){font-size:", ";}"], function (p) {
  return p.theme.fontSizes.twentyTwo;
}, function (p) {
  return p.theme.mediaQueries.tinyViewTwo;
}, function (p) {
  return p.theme.fontSizes.six;
});
var ChapterTitle = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].h2.withConfig({
  displayName: "Story__ChapterTitle",
  componentId: "sc-1gwc67d-6"
})(["font-family:'Aref Ruqaa',serif;font-size:3.3rem;font-weight:600;margin-top:-8px;margin-bottom:15px;color:", ";-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;"], function (p) {
  return p.theme.colors.yellow;
});
var Portal = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "Story__Portal",
  componentId: "sc-1gwc67d-7"
})(["position:absolute;top:0px;left:0px;height:100%;width:100%;z-index:0;background-color:midnightblue;opacity:", ";transition:", ";"], function (p) {
  return p.illustrationDirection === 'exit' && p.illustrationLevel > 2 || p.illustrationDirection === 'enter' && p.illustrationLevel >= 1 ? '0' : '.35';
}, function (p) {
  return p.illustrationLevel > 0 && p.illustrationLevel < 3 && 'opacity .35s';
});
var Image = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].img.withConfig({
  displayName: "Story__Image",
  componentId: "sc-1gwc67d-8"
})(["position:absolute;object-fit:cover;font-family:'object-fit: cover;';top:0px;left:0px;z-index:-3;height:100%;width:100%;"]);
var BlurredFallback = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].img.withConfig({
  displayName: "Story__BlurredFallback",
  componentId: "sc-1gwc67d-9"
})(["position:absolute;object-fit:cover;font-family:'object-fit: cover;';top:0px;left:0px;z-index:-1;height:100%;width:100%;opacity:", ";transition:", ";"], function (p) {
  return p.imageLoaded < 1 || p.illustrationLevel >= 2 && !p.showBusinessCard && !p.showLegalTerms && !p.headerMenuIsOpen ? '1' : '0';
}, function (p) {
  return p.imageLoaded < 2 ? 'opacity .5s' : p.illustrationLevel > 0 && p.illustrationLevel < 3 && p.illustrationLevel < 3 ? 'opacity .35s' : '';
});
var BlurredImage = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].img.withConfig({
  displayName: "Story__BlurredImage",
  componentId: "sc-1gwc67d-10"
})(["position:absolute;object-fit:cover;font-family:'object-fit: cover;';top:0px;left:0px;z-index:-2;height:100%;width:100%;opacity:", ";transition:", ";@media (min-width:", "){opacity:", ";}"], function (p) {
  return p.imageLoaded < 1 || !p.showBusinessCard && !p.showLegalTerms && !p.headerMenuIsOpen && (p.illustrationDirection === 'exit' && p.illustrationLevel > 2 || p.illustrationDirection === 'enter' && p.illustrationLevel >= 2) ? '0' : '1';
}, function (p) {
  return p.illustrationLevel > 0 && p.illustrationLevel < 3 && 'opacity .5s ease-in';
}, function (p) {
  return p.theme.mediaQueries.narrowBreakTwo;
}, function (p) {
  return p.illustrationLevel > 0 && p.theme.blurForHeaderMenu && '0';
});
var StoryText = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].section.withConfig({
  displayName: "Story__StoryText",
  componentId: "sc-1gwc67d-11"
})(["font-size:", ";p{color:", ";margin-bottom:", ";margin-left:2px;&:last-child{margin-bottom:0px;}}"], function (p) {
  return p.theme.fontSizes.twelve;
}, function (p) {
  return p.theme.colors.white;
}, function (p) {
  return p.theme.bottomMargin.regular;
});
function Story(props) {
  var appState = props.appState,
      boundHandleClickForApp = props.boundHandleClickForApp,
      boundHandleClickForContentLoader = props.boundHandleClickForContentLoader,
      contentState = props.contentState,
      overflowRef = props.overflowRef;
  var chapter = appState.chapter,
      illustrationDelay = appState.illustrationDelay,
      headerMenuIsOpen = appState.headerMenuIsOpen,
      illustrationDirection = appState.illustrationDirection,
      images = appState.images,
      showBusinessCard = appState.showBusinessCard,
      showLegalTerms = appState.showLegalTerms,
      illustrationLevel = appState.illustrationLevel;
  var allContentData = contentState.allContentData,
      chapterIndex = contentState.chapterIndex,
      imageLoaded = contentState.imageLoaded;
  var _allContentData$chapt = allContentData[chapterIndex].attributes,
      description = _allContentData$chapt.description,
      number = _allContentData$chapt.number,
      title = _allContentData$chapt.title;
  var bookTitle = 'The Magical, Semi-Fictional Biography of a Real Boy';
  var dek = 'An experiment in digital + traditional storytelling';
  var bigImageSrc = images["chapter-".concat(number, "-main")].src;
  var blurredImageSrc = images["chapter-".concat(number, "-blurred")].src;

  var onLoadBlurredImageHandler = function onLoadBlurredImageHandler(event) {
    // 0 --> 1
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event);

    if (imageLoaded < 1) {
      boundHandleClickForContentLoader('imageLoader', 1);
    }
  };

  var onTransitionEndEndRestyledContentHolderHandler = function onTransitionEndEndRestyledContentHolderHandler(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event);
    boundHandleClickForApp('updateStoryAnimation', illustrationDirection === 'enter' ? 2 : 0);
  };

  var onTransitionEndBlurredFallbackImageHandler = function onTransitionEndBlurredFallbackImageHandler(event) {
    // 1 --> 2
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event);

    if (imageLoaded < 2) {
      boundHandleClickForContentLoader('imageLoader', 2);
    }
  };

  var onTransitionEndBlurredImageHandler = function onTransitionEndBlurredImageHandler(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event);
    boundHandleClickForApp('updateStoryAnimation', illustrationDirection === 'enter' ? 3 : 1);
  };

  var onLoadImageHandler = function onLoadImageHandler(event) {
    Object(_helpers_eventManagement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event);

    if (chapter < 0) {
      boundHandleClickForApp('setChapter', number, illustrationDelay);
    }
  };

  var chapterNumber;
  var fallbackBlur;

  switch (number) {
    case 1:
      chapterNumber = 'one';
      fallbackBlur = _public_jea_story_chapter_one_50blur_3px_png__WEBPACK_IMPORTED_MODULE_10___default.a;
      break;

    case 2:
      chapterNumber = 'two';
      fallbackBlur = _public_jea_story_chapter_two_50blur_3px_png__WEBPACK_IMPORTED_MODULE_11___default.a;
      break;

    case 3:
      chapterNumber = 'three';
      fallbackBlur = _public_jea_story_chapter_three_50blur_3px_png__WEBPACK_IMPORTED_MODULE_12___default.a;
      break;

    default:
      chapterNumber = 'four';
      fallbackBlur = _public_jea_story_chapter_four_50blur_3px_png__WEBPACK_IMPORTED_MODULE_13___default.a;
      break;
  }

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_primitives_Main_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(RestyledContentHolder, {
    saveSerifs: true,
    showLegalTerms: showLegalTerms,
    illustrationLevel: illustrationLevel,
    headerMenuIsOpen: headerMenuIsOpen,
    showBusinessCard: showBusinessCard,
    illustrationDirection: illustrationDirection,
    onTransitionEnd: onTransitionEndEndRestyledContentHolderHandler
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(RestyledShelf, {
    height: "18px"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ChapterNav_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], props)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_primitives_Overflow_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ref: overflowRef
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(TagLine, null, dek), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(BookTitle, null, bookTitle), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Chapter, null, "Chapter ", chapterNumber), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ChapterTitle, null, title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(StoryText, null, react_html_parser__WEBPACK_IMPORTED_MODULE_6___default()(marked__WEBPACK_IMPORTED_MODULE_2___default()(allContentData[chapterIndex].body, {
    smartypants: true
  }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(PictureHolder, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Portal, {
    imageLoaded: imageLoaded,
    illustrationLevel: illustrationLevel,
    illustrationDirection: illustrationDirection
  }), imageLoaded < 2 && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(BlurredFallback, {
    src: fallbackBlur,
    alt: "blurred fallback",
    imageLoaded: imageLoaded,
    showLegalTerms: showLegalTerms,
    illustrationLevel: illustrationLevel,
    headerMenuIsOpen: headerMenuIsOpen,
    showBusinessCard: showBusinessCard,
    illustrationDirection: illustrationDirection,
    onTransitionEnd: onTransitionEndBlurredFallbackImageHandler
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(BlurredImage, {
    alt: description,
    src: blurredImageSrc,
    imageLoaded: imageLoaded,
    showLegalTerms: showLegalTerms,
    onLoad: onLoadBlurredImageHandler,
    illustrationLevel: illustrationLevel,
    headerMenuIsOpen: headerMenuIsOpen,
    showBusinessCard: showBusinessCard,
    illustrationDirection: illustrationDirection,
    onTransitionEnd: onTransitionEndBlurredImageHandler
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Image, {
    alt: description,
    src: bigImageSrc,
    onLoad: onLoadImageHandler
  })));
}

/***/ }),

/***/ "./app/temp-content/BusinessCard.jsx":
/*!*******************************************!*\
  !*** ./app/temp-content/BusinessCard.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BusinessCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var BoyImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "BusinessCard__BoyImage",
  componentId: "sc-1yqsfk9-0"
})(["position:absolute;top:0px;left:0px;height:100%;pointer-events:none;"]);
var InfoContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "BusinessCard__InfoContainer",
  componentId: "sc-1yqsfk9-1"
})(["position:absolute;top:4.5rem;right:1.5rem;color:", ";@media (min-width:", "){right:2.1rem;}"], function (p) {
  return p.theme.colors.white;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
});
var Name = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "BusinessCard__Name",
  componentId: "sc-1yqsfk9-2"
})(["border-bottom:1px solid white;padding-bottom:6px;font-size:", ";@media (min-width:", "){font-size:", ";}"], function (p) {
  return p.theme.fontSizes.fifteen;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.fontSizes.eighteen;
});
var Pitch = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "BusinessCard__Pitch",
  componentId: "sc-1yqsfk9-3"
})(["padding-top:5px;font-size:", ";@media (min-width:", "){font-size:", ";}"], function (p) {
  return p.theme.fontSizes.one;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.fontSizes.twentyThree;
});
var Email = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "BusinessCard__Email",
  componentId: "sc-1yqsfk9-4"
})(["position:absolute;bottom:0rem;right:1.5rem;color:", ";font-size:", ";@media (min-width:", "){font-size:", ";right:2.1rem;}"], function (p) {
  return p.theme.colors.white;
}, function (p) {
  return p.theme.fontSizes.one;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.fontSizes.eight;
});
function BusinessCard(props) {
  var src = props.appState.images.businessCardImage.src;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BoyImage, {
    src: src
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InfoContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Name, null, "James Abels"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Pitch, null, "Let's code your story")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Email, null, "hello@jamesabels.net"));
}

/***/ }),

/***/ "./app/temp-content/LegalTerms.jsx":
/*!*****************************************!*\
  !*** ./app/temp-content/LegalTerms.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LegalTerms; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../primitives/StyledLink.jsx */ "./app/primitives/StyledLink.jsx");



var VerticleLine = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "LegalTerms__VerticleLine",
  componentId: "sc-182jt2m-0"
})(["width:", ";height:100%;position:absolute;left:", ";top:0px;background-color:", ";"], function (p) {
  return p.width;
}, function (p) {
  return p.left;
}, function (p) {
  return p.theme.colors.yellow;
});
var HorizontalLine = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "LegalTerms__HorizontalLine",
  componentId: "sc-182jt2m-1"
})(["width:100%;height:", ";position:absolute;bottom:", ";left:0px;background-color:", ";"], function (p) {
  return p.height;
}, function (p) {
  return p.bottom;
}, function (p) {
  return p.theme.colors.yellow;
});
var Legal = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "LegalTerms__Legal",
  componentId: "sc-182jt2m-2"
})(["position:absolute;right:2rem;bottom:1rem;color:", ";font-size:2.25rem;"], function (p) {
  return p.theme.colors.yellow;
});
var MyCopyright = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "LegalTerms__MyCopyright",
  componentId: "sc-182jt2m-3"
})(["display:block;margin-bottom:6px;font-size:", ";font-weight:700;@media (min-width:", "){margin-bottom:12px;font-size:", ";}"], function (p) {
  return p.theme.fontSizes.one;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.fontSizes.eight;
});
var ClipCopyright = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "LegalTerms__ClipCopyright",
  componentId: "sc-182jt2m-4"
})(["font-size:", ";@media (min-width:", "){font-size:", ";;}"], function (p) {
  return p.theme.fontSizes.zero;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
}, function (p) {
  return p.theme.fontSizes.one;
});
function LegalTerms(props) {
  // Styled as attribute for simplicity,
  // breaking it out above's a headache
  var linkOrTextForClips = props.appState.currentCaller !== 'journalism' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primitives_StyledLink_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      color: 'white',
      textDecoration: 'underline'
    },
    to: "/journalism",
    boundHandleClickForApp: props.boundHandleClickForApp
  }, "clips") : 'clips'; // The following HTML is span, not a <p>, b/c it's nested in
  // a <p> (React doesn't allow <p> nesting, kicks a warning).

  var legalNotice = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      position: 'absolute',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
      paddingLeft: '2.25rem',
      boxSizing: 'border-box'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyCopyright, null, "\xA9 ", new Date().getFullYear(), ", James Abels. All rights reserved."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClipCopyright, null, "All ", linkOrTextForClips, " owned by their respective publisher."));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VerticleLine, {
    width: "1px",
    left: "1.25rem"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VerticleLine, {
    width: "1px",
    left: "1.75rem"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VerticleLine, {
    width: "1px",
    left: "2.25rem"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HorizontalLine, {
    height: "1px",
    bottom: "5.5rem"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HorizontalLine, {
    height: "1px",
    bottom: "4.85rem"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Legal, null, "Legal"), legalNotice);
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
/* harmony import */ var _BusinessCard_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BusinessCard.jsx */ "./app/temp-content/BusinessCard.jsx");
/* harmony import */ var _LegalTerms_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LegalTerms.jsx */ "./app/temp-content/LegalTerms.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].section.withConfig({
  displayName: "LegalTermsOrBizCard__Container",
  componentId: "sc-171ayyj-0"
})(["display:flex;justify-content:center;align-items:center;position:absolute;top:0px;left:0px;bottom:0px;width:100%;background-color:", ";z-index:1;"], Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["rgba(115,192,232,", ")}"], function (p) {
  return !p.homeIsActive ? '.7' : '.2';
}));
var CardHolder = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "LegalTermsOrBizCard__CardHolder",
  componentId: "sc-171ayyj-1"
})(["width:100%;display:flex;justify-content:center;align-items:center;position:absolute;top:0px;left:0px;bottom:55px;"]);
var Card = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].section.withConfig({
  displayName: "LegalTermsOrBizCard__Card",
  componentId: "sc-171ayyj-2"
})(["height:160px;width:275px;background-color:", ";box-shadow:7px 7px 5px -1px rgba(0,0,0,0.3);position:relative;@media (min-width:", "){height:200px;width:350px;}"], function (p) {
  return p.showBusinessCard ? p.theme.colors.pink : p.theme.colors.pink;
}, function (p) {
  return p.theme.mediaQueries.tinyView;
});

var LegalTermsOrBizCard =
/*#__PURE__*/
function (_Component) {
  _inherits(LegalTermsOrBizCard, _Component);

  function LegalTermsOrBizCard() {
    _classCallCheck(this, LegalTermsOrBizCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(LegalTermsOrBizCard).apply(this, arguments));
  }

  _createClass(LegalTermsOrBizCard, [{
    key: "render",
    value: function render() {
      if (!this.props.appState.showBusinessCard && !this.props.appState.showLegalTerms) return null;
      var _this$props = this.props,
          appState = _this$props.appState,
          boundHandleClickForApp = _this$props.boundHandleClickForApp;
      var showBusinessCard = appState.showBusinessCard,
          currentCaller = appState.currentCaller;
      var homeIsActive = currentCaller === 'home';

      var stopOnClickPropagation = function stopOnClickPropagation(event) {
        return event.stopPropagation();
      };

      var onClickHandler = function onClickHandler() {
        if (showBusinessCard) {
          boundHandleClickForApp('toggleBusinessCard');
        } else {
          boundHandleClickForApp('toggleLegalTerms');
        }
      };

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
        homeIsActive: homeIsActive,
        onClick: onClickHandler
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CardHolder, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Card, {
        showBusinessCard: showBusinessCard,
        onClick: stopOnClickPropagation
      }, showBusinessCard ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_BusinessCard_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], this.props) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_LegalTerms_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], this.props))));
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
    }
  }]);

  return LegalTermsOrBizCard;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);



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

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAuIwAALiMBeKU/dgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHdSURBVEiJrZbPTlNBFIe/uVa6sGqkaqKJmPgC/kF8AI0KRIJP4Mo07txo4juZKgvd6lag4AqCD1BAxQdAjZ+Lnptem1Ju7T2byZw58/vumZl7ZhIjTK0D94Bl4DZwCWgCP4BdYANYAT6klA5HaQ0Tr6ktdddy9k19rtbKAq6qnwsCn9QX6nW1GTHT0X8Z47ltqDPHAe6oX2PCljpf8sMW1O2Yt6/OjcogB7xTz5RKvT+/obZj/nf12mBArbBEbTUbB1DQydQ3obP5zx6pzwpLdOp/AAMZbYVeK3fW7Z+ihUkABdBi6HXVetGxWgWgAFoN3fkMeBz+11VCgHa0y6idIN6okqDeDN111L3oTFcMmc73JamHwEmgllL6UyEkAb+BXxm9YpeAc1UBwppABhxk9KopwOiaM77lensZ0InO/YohD6Jdy4ub6lqVBHU9dB8O/vGLFQEeFf74qdzZCue22pgQcFrdCb2nxYGavQtH9e2EVXgldDrqicGAGXsXjup79eyYgIb9Mr+vXjkqcK4A2lGXSgKW1C8FwPCbcSCjTfvWUV+ps+rFiLmg3gp/ZyB2eAZDQJn6JE5HGevaOzxDXyvpGNgUcJfedTALXAbOAwdAl/6762NK6edROn8BvWWlP4imsRYAAAAASUVORK5CYII="

/***/ }),

/***/ "./public/dot-full.png":
/*!*****************************!*\
  !*** ./public/dot-full.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAuIwAALiMBeKU/dgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAE2SURBVEiJvZZNLkNRGEDPvYQFMNEE0RUQZe5nzgoMJEztQCxJN8ACtLUEo774XUBNjsFtK5rXeql3nQV8J9+9319gBuoycAScAC1gDVgBPoAC6AK3wF0IYTArVlnwRfVSLazGq3qlLlYVbKqPFYNP0lU3fhPsqy9zCkY8q3uzMvirYMSb2iz7g3mfaBo9h38Uh54LYLvSp1VnBzgHCKYyfSKVZ90UQDMCx5kEAA3gIJIaLScnkdTJOWlF8j3ViEZQB8BSRskgkoZdTt4jqcxyUkSgk1nyEIF2Zkn7Pzp+Kw432k0GAcB1COETGE/hbs1TuKMu/FCqG6aFUwfP6nppbupeDaLpm3Eio96cgs7UDEpEUT1T+xWD903XTem1En6RLQGHwCmwS9oPq8A70Of77rofV1EJX4ZaC+8QlX64AAAAAElFTkSuQmCC"

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

module.exports = "data:image/gif;base64,R0lGODlhGAAYAPeeAP39/fz8/Pf4+ODi4+/w8crNz/b39/P09Ozt7tXX2YSLkOrr7Lm9wLS4u/Lz8294ffHy8vn6+s7R0+7v8Obn6KWqrmBqcNze34yTl3uDiJuhpX2Fiufp6sjLzbi8v/r7+/v8/MvO0NDT1e3u79bY2vT09dfZ21hiaPv7++fo6amusWdwdszP0cPGydvd3+7v7+Pk5sfKzKqvsrzAw2lyd5KYnWx1e15nbtTX2HV9gpWbn4iQlMXIyoqQlXN7gGZvdaGnqnd/hLC1uP7+/urs7Jmfo/f3+Pj4+Z+lqPr6++Tl5vDx8vX19t3f4KKnq/X29tja3LG2uNnb3L3BxNnc3a2ytfb298DExunr65acoGVvdIGJjZKZnW93feTm546UmdLV1ltkasLFyIeOkrq/wW12fLe7vq6ztoGJjuvt7cTHyvLy8/n5+evs7Wx1evT19ePl5s3Q0t/h4tHU1uXm593f4YiPk52iprK3up6kp+Hj5MrOz3R8gdrd3lxla3iAhXZ+g4uRlmJsca+0tqasr6uws/j4+JqgpJedoYePk8HFx5GXnIGIjqKoq3d+hKuvs1ReZa6zt8LGx2t0eoWMkVdhaGtzebK2uZieon+HjMXJy7/DxbvAwrC0uNbY2fz9/aitsKyxtPj5+dPV1/7///v7/Onq611mbHJ6gLO4ut7f4ayxs/Dx8eLk5ePk5b/Cxd7g4fz8/dTW2L7CxXF6f/Hy856kqI2Tl19pb3B4fuzt7aarrs/S1Pr6+pCXm4+Wmra6vaSprOjp6ujq67u/wsLGyFZgZ87S03mBhrq+wXqCh2Vuc9fZ2uvs7H6Gi5OZnqOorKSqreTl511nbXyEia2xtWJscp2jp5SanmpzeJacoVJcY1VfZrG1uXF5fo+VmZOanWhyd8nMzoKKjtze4P39/lFbYv3+/tjb3KGmqoqSlmFrcJidoYCIjGRtc1pjapmfonV9g2JqcYaNkl9obrW6vMbJzP7+/6CmqYeOk6musnB5f4OKj9vc3p+lqZGYmyH/C05FVFNDQVBFMi4wAwEAAAAh/i1NYWRlIGJ5IEtyYXNpbWlyYSBOZWpjaGV2YSAod3d3LmxvYWRpbmZvLm5ldCkAIfkEBQoAngAsAAAAABgAGAAACP8APQkcKDAWqwEJZMGaEICgQ4cCSAzKsgNNJkY9Gkmw8pDgED0qbo1RsGVDhj+AfPDhYmJIRwAiMGEIZEeBAkqMMuSg9cCGo00NHc5BtOjLrTtToMBplaBBoi6WaJSZ4nIgHCQ6amRRVOvhhDMPfmh5IGsgmwZFEB0SAaCjp1gzJgmysOONwCa2NByK0dbtWxW4bljQ5AnAFSR5qhzwO7BNED9hFgUo0ckJEBaMCVY4cSLXAiyPKhBylXlggUqQbiSAU4hQIQSl73ZZ4SYOnCoyIsGO/SENESKG2lyqMohCbE9Dkgt8wklIFBLHQURIAgJ5HDwNxBgoPcSIEQEfBFKO8GDGA5WqfgU4KGEllsAPBRiQueIF/UMjEwjUMoAegaIps6ghBxsPBbAGEWmMsER1BMEhiSItxACGEhBYYcAbL6RABwdYIHDEQ0PQ0QEPHewRxxwkSNFHHQPAQMcC27nFSgJ7hCDBHLKYQMUFcsDQBoGMgTBCHSTgkIAULuixABN9cRfBGxA4YAAK9hEUEAAh+QQFCgBmACwAAAAAGAAYAAAI/wDNCBwo8NMaJVSktGIVi6BDh6JcMHCSxdeXb9pCjTLwkCApLw006KjxC0OPMQq2jLvmoqNAE7s0FMnyjAu4XztSbsigQNNDUlIqILmmQYWmJikoUJmBbYOyIBlakCLIoRo0INEKHHi4BJizHD42QBkYYROoXaBMuDTzSQ0yWg/AMRHoqpoMFbyGrGXbrYyNLiHMDClQpRqDuXvNjFCQjYaGWE+mRBGCI/HAKit+UNM1wkODBiksC5SwwpoNKRwYAEtGQLSZC+EsaAkhjBODGaxcu9AyzVqBCVeITSHiOsSNMMtMGOkw6wos18FOnPC2YAgJMcUkiLJMgNY2br8CmI9ppolHjFZT94oi88BYC4EgPHUoIIFI+o4AABDAQmyrQAjHsCDBKByg8NAQvQiQRAD3DbSACLyAkQAsujwRQS+iPOHAAVYc8YFeD6XhiSzMUHHBANKkgAUCBKxRggCfuERKCQNIQUUTA8BAwTBETACBAQ3t9YkDHLTSSooLvHBALyBaRgoKR1hhRASfNEhQQAAh+QQFCgBDACwAAAAAGAAYAAAI/wCHCBwoEMABDrDqUHDwiaBDhxEGFDsTzNadO9CAoTP0kOA9U5tUBAOSRwM8Hc98+VIhp+OQc3VSyQBVwUm6dHnY1fiFIVCNELEewmpwJpSMehL0LDAFS40/DHbm9Shwj2CbZHiE4Jnz5KGDVxgUjFNHbiCKAmYaAIN1ziWAEInabbBlQKAwTgw8mGjrcggABhsybBAhUNYMYprq9hVIwBeyPxU+CRC3adaFxQSBAcqx48USe8VaIMA8cFQ8VMqaIIjBo4MD0gLlBHmQg9eIAuJCHIA9BJYPG7SOOYizhwUB3rzc0ODjgk2COLwo8C70Y8WG0QNEzOnXi3SaDILcHZYKygqHLBILqvYNQOiGhWUdBMYawAwdOQjqHwYwI8/PtERvDPTGBX00MQABQTnERgWnnPAODaM4tAQssAwgTTNv9BIAAACcIwoG5hhDjwf5CXRPLXDAQIcwbUxQyxMClEIAFOtYYAYILgnQRgrDpOEiEwJEEEssHkjAl0vnCAABAQQ4UIIAHwBwT4mL3QMACihsSCVBAQEAIfkEBQoArgAsAAAAABgAGAAACP8AXQkcOPBJGzgwTJUAQLBhww8UWHC6VKXQo05X6rBxSJAUggIe8AipIoNQBSdIkKSCw9HVEDiKGJhpEGVQpFWEgOTRUATJnE8O6UiaQoaBGBIURiCAwyKUBkQ6EIkgRZBAB0Wbrkgx4vBAjEM1FmEaMBCEJx4t1HgZ0tKViCxfMKjg6mrEng6a5LBt60oRhkAYSAisE2IPGFF8BUK4Y2fMIAARSEiIoyTxwCkKFGRh9QbHnDlLLAuEomDLjgEQEowi8US0q1aUNqBJ4ECKCSkGXOthlCETDgMuqPQp4TpBhj+M5KDQc6HJC9cNcgDq8YLUAjkDUgSw/CIRKh+NgDKRgQGDzhrLZ8o84BNHIIA2dDgQodtyxgNLNri0FshmAZY0EwiwF0EIgDLJDzQ4YkJDBiAwAgEOGAECKR+oUkAFQVggiBZlbEJVR0cssUYJRkQwRBpdVHKCHzdY8MAU23EEggFWCJDEEESsAMkJYViQSAIDckRKAB+UQkobbpzywCIxvOGaK6SgYEgcCSxQSksBAQAh+QQFCgBLACwAAAAAGAAYAAAI/wCXCBwocIiRCcI4jLBSjqBDhyCakehwhRMDD1MKuIrw0CGEBJrEzCLGAFiDKFWqbBLWUeCCYx14FLsyZUqyBkKqyQBVTQqAh2lEsCgQQwKsNqwIcMDBQMYuaBVMODzgiZcECa3YPHzCCxQQJLu8DPw0QBaYUURaLilnItg1DQ2OCHQghVkCDmoFlhN3qIgGFwI5UKECK0legQdUZNHBAACKVk0u6Do8UBO2Gk5qHWk1YMATygLJcfmlTYkVaTCkcQRNgQsGX1SMpKCQohfoJRR+9fgiJcKCYVi0gpayY8yvVp9eEEHwGfQMBQoQsVpyYMIEBw0PE8C2ZUsogb0g1Ik6YDvvJzPUNqAZVdBACSsCfrb8pMaZsgzXDAyMJeBIkliGEPDQBN0gk0MQCgBG0CcfBEAAGbQEw8IFTfBSBT8P0OJDBpp01BAWD2xzwg1a0LDCCtnY8AA1LeRFjDHcnBDGNBZY8wMNXXABxWEHtPCNN8tYo4Ub1GjAQnOUlbKACQWEIIUuAbQUEAAh+QQFCgBOACwAAAAAGAAYAAAI/wCdCBw4kI2DEQiWCBhCsGHDT6wGJIhTIIY9cbKEoXDY8M0AHCLi7BHHo9imGZwKpLnH8d6SC8xkzeHFIkSHFrOIMTCTTM45h7Vg9UFHog8FAgcOILigyUMDPA3qsBwoAA6sJuQWJHFoxAQwIWdSDRt4rg2MAQMgTHV4DhaeUDI2RRAoIAUdJQTWchwyRx8oFQOc3IMwTFizABw71qsQrEU5AATSEHmT2KEEaEAGHUBBYMKEXpUb6kmXJxoHFA5q1YoVmqCpdBqQwApQggkTAK0HDssD704dAAKC487tBBY7HXco3PsQoVQ54k7U1HgWbI0TALEmiDqSGwK+X77MDJMHgE5dBcSVAbxSh8EXuoEe1pk7ZQY9xwIY7ARSIWCgBAvGnCAPISM4xAoDdigwTw1yEHSPGfS844cFGYQighwDyAKML860M04PLOjlBAgerHCDBYL84AYfQcQDCDIZOKNOAZ/sJUs+y7izAg02PIBKDn9sYAs5rb0hThEb+LAPH8rsUIEIBkAXAAIuHMPLBS9UFhAAIfkEBQoAmgAsAAAAABgAGAAACP8ANQkcOBCFAQcQ3kQgyLAhACYL9LiQkgAHiTojQDRkyKYNDDkXqJiQNUdCiD0JWG0UaGABHRgDmvSR4mlOnD0deHSgM6ThEQRYONBJ8aKEASsQlICJ0UKRJDgMQSwZkYbImgAN2chRM2uKIgQDhxioRWCCkZWahni5QoZBgQ8CY1kp4UAA2oFUPJjxQEHgBwFGjPS8q8mAmAZ44gwBACJJBI2EBXqKImTGE4FDMkcWSGFQlUttDBEhkgbuZgSRZFSBE8fNii5NNmvSVYhQITgJbkCqVEC2K0IVHmFZkOvEiV2yWQBxIqREgEVh/ARpE/lAlTxIrgiMYeEGLhWxCMeJOKTBVmxNb3ZYEDRpRviNAEQcQlSkAZuBsh5o+fHgzISGtSiSRQ06IAFVWFOUQYMlXSTSQAKtwAHFFHfc8sUiiMzRUACvOGLDA7TkkAEalCiggB2BYICJCACsZAIXfPgAyB8ZbLCFAmPcooIehFkRRyM9MJIJGnboMAgJdsk2ASyyJDAAK+81FBAAIfkEBQoAaQAsAAAAABgAGAAACP8A0wgcKJDUpwhGrBxBQYqgQ4dDeh14sSCFtFatODj49NBhLAMQJhAZRgHGgCZUpAwo0bDjJwElahFAgMXigAtUmMnypKvjkA9HrBxw8ERUrwhPdMFKAIaXiAUPSQVIIqDXkIcfOIySwOIYhIEHiGEhAABAx4JEJBTokACEwBbGHpARdXYgqVYxeGhqlibAL27baBGoO1CUhGJiSAxZ4O3EiWCECcK6MquDERPLwtwIEXkgkSnErhAoYG2aFhedBbKawYDTsBBaLIS7kDoNgWTAGAiTYsPaCgm1UzRo4GGELmo/VpypjUNIlClPYmmgkU3BiM5MGFQ7U+BqiC42ynSO41h3CC8VMqq4EsgE3ANayHiQ72gC1C5QmyIMhLLBRw5nZizx0AHiRAMENNVwQBApLWQQhDIbYDMDFRSk0IQmKmhwDRIVQNESQZookMEGWyiwwy/gcPFMFkVosIsJdV1wDRoljtEDBr/UoIMGDXjxYUcGjBKKNt984UsWTjDgAl2pxcJKK1JQoUQt8zkUEAAh+QQFCgBCACwAAAAAGAAYAAAI/wCFCBw4cAiAAChQACDIsKFAAB8ElHBAgAAEAeccDjwnwUOsWBEEMKk1Ic2wFG0EaARhxsI6KARKCXgCYQIRYXRgwKnVcIgHesbMYRB1DsDBXm+aSRsAC9YShqNovDtxqgKbhgEIDGjS58KbgW8STfMjz0wAjUIgkEPHbEAsgR2WWbhB6CzaIQtIyMLBSkisIu4EZUiDdmCvfnNEDBiCYMOKH6EKE6TAK04CNi740HDDS/JAAiz2xHFwjJYNH7A8CzwQQlyBEbxyPAgiR7UQBx14xBhxQRmqeKNsI2hRzB6EFztyAAJm+8KsTeIEfKrwB5kvAp4NaCI2Q5ZAERsybJJgsBDtORMeGHASJtCArQ3t7IQo3/AcLGANzBT4MJCcunEKYPCKAw09MQceUeCRDGEFFdDDPHZggI8asJiygB4S1CNDKGc0kBpDsYTwTyAY/FIDO3mkk44TFYAiQyp1ZOSQHKD44sszOsCjQR5ABKPCJqYMUZgh6AADzR132BLMGcUMEIFtn6xBQR2wcHAAfQwFBAAh+QQFCgCsACwAAAAAGAAYAAAI/wBZCRwosNSCBHEMoSBFsKHDNzEWPTjlpg2pUh8CMHQ4cEiCRBbCnIC0gsiQJAKsGADBkVWAKQ8s3PBzolKXNEMiGCmxZsmRjQNJvSqjRZCFIBUKqFoIwogDAiMQGGhIwhGNH5NAIXA4RMCENFgWsBn4hIsNSw9mtBRohAgHOm0ACIzD50GZM2sHrqEDAwYTVp8a+UBl50VegQFSDJCzgNSLHoByNDg88EWTC3pQyGH0J0MCygJL9KHiwgCOTBkY6QHNyoAUE1IcJECzgZIr1k88jUoAYcCOLQqgsF4yZw6ONwSyKFAwhbWSOBJIRAAwaIydOxAoiwKzJ0QdgZ4wBI/CoOjwEDmaOuwZwVYFhi9ZRKwd4kVNCx6eWAocgGlRjUMxHOCQEVJcsYkiHRBAECkiIKIDIhqEwgIcCIxAAQliMEDGFJLQ4dAncyBRhAZ5AEHIKpEMEkUDZjCgCBxDtARHKkgg4UQFhMhQhRB4eFAAAkBxxEYdV3TySCFVXMIJCxR8wBoAJZjiChxtPLFWQAAh+QQFCgBLACwAAAAAGAAYAAAI/wCXCBwoMIAuKSEKmFhQiqBDh09YaKDmRou1Zd5+qTnw0CEULl1o/LBmYVqYE9yMEes4sAW1BzayrVhBQ8uNE9seYFkypKOmDD5oPeBXhVeTCyGC0SJDIMCHTw5dKAiSA1m3Fw8JGIqV5IiAWAMN2MqgzJkaqCwBCLBSwkDPJaPQbKBmBgDLgb0O1ILQawmAUFu2YCNwd+AQBxMmcGSFSIGCGYUJPkFA5MWnVt/G7JASeaAoLMMWRJDypYcvCp0F9kpBIYURKr4wcEGdmo00GNKsKNH2iwu51EueDBjQ6kgtJzWeaQKu60KTVigAMNCRRQXHyElgUaHCQaALDUUOFYnozCEBMykOBB5poOFaMChvOxIZBUbWALRLvOxCAgQUrycPsdGKBBLw4sl1A5FQATS7yMAADhwQwEobsEgQQwEsiJDGQwBAUQ0oMlQjRAPJTDHFFcXw0MExC9wlzCZVVBFFA8AwQMwsYmiSAASRReBKATN4wAAnV3RAQjMgABfcCBwIM4ER8TkUEAAh+QQFCgBNACwAAAAAGAAYAAAI/wCbCBw48MUFXsdcIAhAsGFDAyIq7FDGZ5+PDUXEvXHYkJytDX9yoHpgg8YKd8vyyRrC8VMBdc4yIAMULwgfNz8EWbixwgOIhvdC9BjXzpkvYLIGyBFRKIMFP+/omWkop8Y8BXYYsHKIoIK8E8YsSBgoQEUgOxgKAODYJICZU+bWeRiIzhcGda/YDgxQQR26tQLN+PqFD4LegUdETYi1dk2wZzXUHCZYrlSED/co3NHBDtbkgQAEiAZQ5w68PMM+CwTAhEmJALCQaEhnSnXbWrUcoOAQLE86PbZ7TZhAAMWBQUCcjFX9hkgaAgDKtQhWod7GyQGaCRsG4V6TASpA6ZKbw1LvPQJK6KQQIDDCJhmh8MA6x/YehAEDYLShL3BYqjNCAGOCEQ4lsQA55MACB3sD3VNHA3g04IEmFyBwwAEEUNAHCej0AUstDp0jRzJmMEDMLC10EAILvMwhCzMXLOGdQ/ekUQAnM2xSDA/i7BGHCDgMcJ1eHwgjizj2xFBAHAkMwEostg0hwBIIjOAAG3oFBAA7"

/***/ }),

/***/ "./public/jea-story-chapter-four-50blur-3px.png":
/*!******************************************************!*\
  !*** ./public/jea-story-chapter-four-50blur-3px.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./public/jea-story-chapter-one-50blur-3px.png":
/*!*****************************************************!*\
  !*** ./public/jea-story-chapter-one-50blur-3px.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./public/jea-story-chapter-three-50blur-3px.png":
/*!*******************************************************!*\
  !*** ./public/jea-story-chapter-three-50blur-3px.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./public/jea-story-chapter-two-50blur-3px.png":
/*!*****************************************************!*\
  !*** ./public/jea-story-chapter-two-50blur-3px.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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
//# sourceMappingURL=main.adc5fd53598e25393497.js.map