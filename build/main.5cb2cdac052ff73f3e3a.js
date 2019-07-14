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
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/james/Desktop/foundations/my-site/app/App.jsx: Unexpected token, expected \",\" (227:57)\n\n\u001b[0m \u001b[90m 225 | \u001b[39m    \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mhandleResize \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mhandleResize\u001b[33m.\u001b[39mbind(\u001b[36mthis\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 226 | \u001b[39m    \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mhandleTouchEnd \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mhandleTouchEnd\u001b[33m.\u001b[39mbind(\u001b[36mthis\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 227 | \u001b[39m    \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcloseHeaderMenu \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcloseHeaderMenu\u001b[33m.\u001b[39mbind(\u001b[36mthis\u001b[39m\u001b[33m;\u001b[39m)\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m                                                         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 228 | \u001b[39m    \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mhandleTouchMove \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mhandleTouchMove\u001b[33m.\u001b[39mbind(\u001b[36mthis\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 229 | \u001b[39m    \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mhandleBackAndForth \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mhandleBackAndForth\u001b[33m.\u001b[39mbind(\u001b[36mthis\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 230 | \u001b[39m    \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mhandlePasswordEntry \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mhandlePasswordEntry\u001b[33m.\u001b[39mbind(\u001b[36mthis\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n    at Object.raise (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:6344:17)\n    at Object.unexpected (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:7659:16)\n    at Object.expect (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:7645:28)\n    at Object.parseCallExpressionArguments (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:8605:14)\n    at Object.parseSubscript (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:8515:29)\n    at Object.parseSubscripts (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:8434:19)\n    at Object.parseExprSubscripts (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:8423:17)\n    at Object.parseMaybeUnary (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:8393:21)\n    at Object.parseExprOps (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:8280:23)\n    at Object.parseMaybeConditional (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:8253:23)\n    at Object.parseMaybeAssign (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:8200:21)\n    at Object.parseMaybeAssign (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:8239:25)\n    at Object.parseExpression (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:8148:23)\n    at Object.parseStatementContent (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:9917:23)\n    at Object.parseStatement (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:9788:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:10364:25)\n    at Object.parseBlockBody (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:10351:10)\n    at Object.parseBlock (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:10335:10)\n    at Object.parseFunctionBody (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:9408:24)\n    at Object.parseFunctionBodyAndFinish (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:9378:10)\n    at Object.parseMethod (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:9332:10)\n    at Object.pushClassMethod (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:10767:30)\n    at Object.parseClassMemberWithIsStatic (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:10692:12)\n    at Object.parseClassMember (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:10631:10)\n    at withTopicForbiddingContext (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:10586:14)\n    at Object.withTopicForbiddingContext (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:9683:14)\n    at Object.parseClassBody (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:10563:10)\n    at Object.parseClass (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:10537:22)\n    at Object.parseStatementContent (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:9830:21)\n    at Object.parseStatement (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:9788:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:10364:25)\n    at Object.parseBlockBody (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:10351:10)\n    at Object.parseTopLevel (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:9717:10)\n    at Object.parse (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:11233:17)\n    at parse (/Users/james/Desktop/foundations/my-site/node_modules/@babel/parser/lib/index.js:11269:38)\n    at parser (/Users/james/Desktop/foundations/my-site/node_modules/@babel/core/lib/transformation/normalize-file.js:170:34)");

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

/***/ 0:
/*!********************************************!*\
  !*** multi @babel/polyfill ./app/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"./node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./app/index.js */"./app/index.js");


/***/ })

/******/ });
//# sourceMappingURL=main.5cb2cdac052ff73f3e3a.js.map