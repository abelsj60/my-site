(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{36:function(a,t,e){"use strict";e(6),e(17);var h=e(112),n=e(113),r=function(a){var t=a.pathname,e=a.search,n=a.hash,r=t||"/";return e&&"?"!==e&&(r+="?"===e.charAt(0)?e:"?"+e),n&&"#"!==n&&(r+="#"===n.charAt(0)?n:"#"+n),r},s=Object.assign||function(a){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n])}return a},c=function(a,t,e,n){var r=void 0;"string"==typeof a?(r=function(a){var t=a||"/",e="",n="",r=t.indexOf("#");-1!==r&&(n=t.substr(r),t=t.substr(0,r));var h=t.indexOf("?");return-1!==h&&(e=t.substr(h),t=t.substr(0,h)),{pathname:t,search:"?"===e?"":e,hash:"#"===n?"":n}}(a)).state=t:(void 0===(r=s({},a)).pathname&&(r.pathname=""),r.search?"?"!==r.search.charAt(0)&&(r.search="?"+r.search):r.search="",r.hash?"#"!==r.hash.charAt(0)&&(r.hash="#"+r.hash):r.hash="",void 0!==t&&void 0===r.state&&(r.state=t));try{r.pathname=decodeURI(r.pathname)}catch(a){throw a instanceof URIError?new URIError('Pathname "'+r.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):a}return e&&(r.key=e),n?r.pathname?"/"!==r.pathname.charAt(0)&&(r.pathname=Object(h.a)(r.pathname,n.pathname)):r.pathname=n.pathname:r.pathname||(r.pathname="/"),r},o=function(a,t){return a.pathname===t.pathname&&a.search===t.search&&a.hash===t.hash&&a.key===t.key&&Object(n.a)(a.state,t.state)};"undefined"==typeof window||!window.document||window.document.createElement,"function"==typeof Symbol&&Symbol.iterator,Object.assign,Object.assign,"function"==typeof Symbol&&Symbol.iterator,Object.assign;e.d(t,"a",function(){return c}),e.d(t,"c",function(){return o}),e.d(t,"b",function(){return r})}}]);