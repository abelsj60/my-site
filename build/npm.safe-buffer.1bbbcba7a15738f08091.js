(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{212:function(r,n,e){var o=e(106),f=o.Buffer;function t(r,n){for(var e in r)n[e]=r[e]}function u(r,n,e){return f(r,n,e)}f.from&&f.alloc&&f.allocUnsafe&&f.allocUnsafeSlow?r.exports=o:(t(o,n),n.Buffer=u),t(f,u),u.from=function(r,n,e){if("number"==typeof r)throw new TypeError("Argument must not be a number");return f(r,n,e)},u.alloc=function(r,n,e){if("number"!=typeof r)throw new TypeError("Argument must be a number");var o=f(r);return void 0!==n?"string"==typeof e?o.fill(n,e):o.fill(n):o.fill(0),o},u.allocUnsafe=function(r){if("number"!=typeof r)throw new TypeError("Argument must be a number");return f(r)},u.allocUnsafeSlow=function(r){if("number"!=typeof r)throw new TypeError("Argument must be a number");return o.SlowBuffer(r)}}}]);