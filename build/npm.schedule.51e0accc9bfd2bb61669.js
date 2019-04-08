(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["npm.schedule"],{

/***/ "./node_modules/schedule/cjs/schedule-tracking.development.js":
/*!********************************************************************!*\
  !*** ./node_modules/schedule/cjs/schedule-tracking.development.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.5.1
 * schedule-tracking.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// Exports ReactDOM.createRoot


// Experimental error-boundary API that can recover from errors within a single
// render phase

// Suspense

// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:


// In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:


// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.


// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:


// Warn about legacy context API


// Gather advanced timing metrics for Profiler subtrees.


// Track which interactions trigger each commit.
var enableSchedulerTracking = true;

// Only used in www builds.


// Only used in www builds.


// React Fire: prevent the value and checked attributes from syncing
// with their related DOM properties

var DEFAULT_THREAD_ID = 0;

// Counters used to generate unique IDs.
var interactionIDCounter = 0;
var threadIDCounter = 0;

// Set of currently tracked interactions.
// Interactions "stack"–
// Meaning that newly tracked interactions are appended to the previously active set.
// When an interaction goes out of scope, the previous set (if any) is restored.
exports.__interactionsRef = null;

// Listener(s) to notify when interactions begin and end.
exports.__subscriberRef = null;

if (enableSchedulerTracking) {
  exports.__interactionsRef = {
    current: new Set()
  };
  exports.__subscriberRef = {
    current: null
  };
}

function unstable_clear(callback) {
  if (!enableSchedulerTracking) {
    return callback();
  }

  var prevInteractions = exports.__interactionsRef.current;
  exports.__interactionsRef.current = new Set();

  try {
    return callback();
  } finally {
    exports.__interactionsRef.current = prevInteractions;
  }
}

function unstable_getCurrent() {
  if (!enableSchedulerTracking) {
    return null;
  } else {
    return exports.__interactionsRef.current;
  }
}

function unstable_getThreadID() {
  return ++threadIDCounter;
}

function unstable_track(name, timestamp, callback) {
  var threadID = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_THREAD_ID;

  if (!enableSchedulerTracking) {
    return callback();
  }

  var interaction = {
    __count: 1,
    id: interactionIDCounter++,
    name: name,
    timestamp: timestamp
  };

  var prevInteractions = exports.__interactionsRef.current;

  // Tracked interactions should stack/accumulate.
  // To do that, clone the current interactions.
  // The previous set will be restored upon completion.
  var interactions = new Set(prevInteractions);
  interactions.add(interaction);
  exports.__interactionsRef.current = interactions;

  var subscriber = exports.__subscriberRef.current;
  var returnValue = void 0;

  try {
    if (subscriber !== null) {
      subscriber.onInteractionTracked(interaction);
    }
  } finally {
    try {
      if (subscriber !== null) {
        subscriber.onWorkStarted(interactions, threadID);
      }
    } finally {
      try {
        returnValue = callback();
      } finally {
        exports.__interactionsRef.current = prevInteractions;

        try {
          if (subscriber !== null) {
            subscriber.onWorkStopped(interactions, threadID);
          }
        } finally {
          interaction.__count--;

          // If no async work was scheduled for this interaction,
          // Notify subscribers that it's completed.
          if (subscriber !== null && interaction.__count === 0) {
            subscriber.onInteractionScheduledWorkCompleted(interaction);
          }
        }
      }
    }
  }

  return returnValue;
}

function unstable_wrap(callback) {
  var threadID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_THREAD_ID;

  if (!enableSchedulerTracking) {
    return callback;
  }

  var wrappedInteractions = exports.__interactionsRef.current;

  var subscriber = exports.__subscriberRef.current;
  if (subscriber !== null) {
    subscriber.onWorkScheduled(wrappedInteractions, threadID);
  }

  // Update the pending async work count for the current interactions.
  // Update after calling subscribers in case of error.
  wrappedInteractions.forEach(function (interaction) {
    interaction.__count++;
  });

  var hasRun = false;

  function wrapped() {
    var prevInteractions = exports.__interactionsRef.current;
    exports.__interactionsRef.current = wrappedInteractions;

    subscriber = exports.__subscriberRef.current;

    try {
      var returnValue = void 0;

      try {
        if (subscriber !== null) {
          subscriber.onWorkStarted(wrappedInteractions, threadID);
        }
      } finally {
        try {
          returnValue = callback.apply(undefined, arguments);
        } finally {
          exports.__interactionsRef.current = prevInteractions;

          if (subscriber !== null) {
            subscriber.onWorkStopped(wrappedInteractions, threadID);
          }
        }
      }

      return returnValue;
    } finally {
      if (!hasRun) {
        // We only expect a wrapped function to be executed once,
        // But in the event that it's executed more than once–
        // Only decrement the outstanding interaction counts once.
        hasRun = true;

        // Update pending async counts for all wrapped interactions.
        // If this was the last scheduled async work for any of them,
        // Mark them as completed.
        wrappedInteractions.forEach(function (interaction) {
          interaction.__count--;

          if (subscriber !== null && interaction.__count === 0) {
            subscriber.onInteractionScheduledWorkCompleted(interaction);
          }
        });
      }
    }
  }

  wrapped.cancel = function cancel() {
    subscriber = exports.__subscriberRef.current;

    try {
      if (subscriber !== null) {
        subscriber.onWorkCanceled(wrappedInteractions, threadID);
      }
    } finally {
      // Update pending async counts for all wrapped interactions.
      // If this was the last scheduled async work for any of them,
      // Mark them as completed.
      wrappedInteractions.forEach(function (interaction) {
        interaction.__count--;

        if (subscriber && interaction.__count === 0) {
          subscriber.onInteractionScheduledWorkCompleted(interaction);
        }
      });
    }
  };

  return wrapped;
}

var subscribers = null;
if (enableSchedulerTracking) {
  subscribers = new Set();
}

function unstable_subscribe(subscriber) {
  if (enableSchedulerTracking) {
    subscribers.add(subscriber);

    if (subscribers.size === 1) {
      exports.__subscriberRef.current = {
        onInteractionScheduledWorkCompleted: onInteractionScheduledWorkCompleted,
        onInteractionTracked: onInteractionTracked,
        onWorkCanceled: onWorkCanceled,
        onWorkScheduled: onWorkScheduled,
        onWorkStarted: onWorkStarted,
        onWorkStopped: onWorkStopped
      };
    }
  }
}

function unstable_unsubscribe(subscriber) {
  if (enableSchedulerTracking) {
    subscribers.delete(subscriber);

    if (subscribers.size === 0) {
      exports.__subscriberRef.current = null;
    }
  }
}

function onInteractionTracked(interaction) {
  var didCatchError = false;
  var caughtError = null;

  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onInteractionTracked(interaction);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

function onInteractionScheduledWorkCompleted(interaction) {
  var didCatchError = false;
  var caughtError = null;

  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onInteractionScheduledWorkCompleted(interaction);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

function onWorkScheduled(interactions, threadID) {
  var didCatchError = false;
  var caughtError = null;

  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onWorkScheduled(interactions, threadID);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

function onWorkStarted(interactions, threadID) {
  var didCatchError = false;
  var caughtError = null;

  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onWorkStarted(interactions, threadID);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

function onWorkStopped(interactions, threadID) {
  var didCatchError = false;
  var caughtError = null;

  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onWorkStopped(interactions, threadID);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

function onWorkCanceled(interactions, threadID) {
  var didCatchError = false;
  var caughtError = null;

  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onWorkCanceled(interactions, threadID);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

exports.unstable_clear = unstable_clear;
exports.unstable_getCurrent = unstable_getCurrent;
exports.unstable_getThreadID = unstable_getThreadID;
exports.unstable_track = unstable_track;
exports.unstable_wrap = unstable_wrap;
exports.unstable_subscribe = unstable_subscribe;
exports.unstable_unsubscribe = unstable_unsubscribe;
  })();
}


/***/ }),

/***/ "./node_modules/schedule/cjs/schedule.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/schedule/cjs/schedule.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.5.1
 * schedule.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * A scheduling library to allow scheduling work with more granular priority and
 * control than requestAnimationFrame and requestIdleCallback.
 * Current TODO items:
 * X- Pull out the scheduleWork polyfill built into React
 * X- Initial test coverage
 * X- Support for multiple callbacks
 * - Support for two priorities; serial and deferred
 * - Better test coverage
 * - Better docblock
 * - Polish documentation, API
 */

// This is a built-in polyfill for requestIdleCallback. It works by scheduling
// a requestAnimationFrame, storing the time for the start of the frame, then
// scheduling a postMessage which gets scheduled after paint. Within the
// postMessage handler do as much work as possible until time + frame rate.
// By separating the idle call into a separate event tick we ensure that
// layout, paint and other browser work is counted against the available time.
// The frame rate is dynamically adjusted.

// We capture a local reference to any global, in case it gets polyfilled after
// this module is initially evaluated.
// We want to be using a consistent implementation.
var localDate = Date;

// This initialization code may run even on server environments
// if a component just imports ReactDOM (e.g. for findDOMNode).
// Some environments might not have setTimeout or clearTimeout.
// However, we always expect them to be defined on the client.
// https://github.com/facebook/react/pull/13088
var localSetTimeout = typeof setTimeout === 'function' ? setTimeout : undefined;
var localClearTimeout = typeof clearTimeout === 'function' ? clearTimeout : undefined;

// We don't expect either of these to necessarily be defined,
// but we will error later if they are missing on the client.
var localRequestAnimationFrame = typeof requestAnimationFrame === 'function' ? requestAnimationFrame : undefined;
var localCancelAnimationFrame = typeof cancelAnimationFrame === 'function' ? cancelAnimationFrame : undefined;

var hasNativePerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';

exports.unstable_now = void 0;
if (hasNativePerformanceNow) {
  var Performance = performance;
  exports.unstable_now = function () {
    return Performance.now();
  };
} else {
  exports.unstable_now = function () {
    return localDate.now();
  };
}

exports.unstable_scheduleWork = void 0;
exports.unstable_cancelScheduledWork = void 0;

if (!canUseDOM) {
  var timeoutIds = new Map();

  exports.unstable_scheduleWork = function (callback, options) {
    // keeping return type consistent
    var callbackConfig = {
      scheduledCallback: callback,
      timeoutTime: 0,
      next: null,
      prev: null
    };
    var timeoutId = localSetTimeout(function () {
      callback({
        timeRemaining: function () {
          return Infinity;
        },

        didTimeout: false
      });
    });
    timeoutIds.set(callback, timeoutId);
    return callbackConfig;
  };
  exports.unstable_cancelScheduledWork = function (callbackId) {
    var callback = callbackId.scheduledCallback;
    var timeoutId = timeoutIds.get(callback);
    timeoutIds.delete(callbackId);
    localClearTimeout(timeoutId);
  };
} else {
  {
    if (typeof console !== 'undefined') {
      if (typeof localRequestAnimationFrame !== 'function') {
        console.error("This browser doesn't support requestAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://fb.me/react-polyfills');
      }
      if (typeof localCancelAnimationFrame !== 'function') {
        console.error("This browser doesn't support cancelAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://fb.me/react-polyfills');
      }
    }
  }

  var headOfPendingCallbacksLinkedList = null;
  var tailOfPendingCallbacksLinkedList = null;

  // We track what the next soonest timeoutTime is, to be able to quickly tell
  // if none of the scheduled callbacks have timed out.
  var nextSoonestTimeoutTime = -1;

  var isIdleScheduled = false;
  var isAnimationFrameScheduled = false;

  // requestAnimationFrame does not run when the tab is in the background.
  // if we're backgrounded we prefer for that work to happen so that the page
  // continues	to load in the background.
  // so we also schedule a 'setTimeout' as a fallback.
  var animationFrameTimeout = 100;
  var rafID = void 0;
  var timeoutID = void 0;
  var scheduleAnimationFrameWithFallbackSupport = function (callback) {
    // schedule rAF and also a setTimeout
    rafID = localRequestAnimationFrame(function (timestamp) {
      // cancel the setTimeout
      localClearTimeout(timeoutID);
      callback(timestamp);
    });
    timeoutID = localSetTimeout(function () {
      // cancel the requestAnimationFrame
      localCancelAnimationFrame(rafID);
      callback(exports.unstable_now());
    }, animationFrameTimeout);
  };

  var frameDeadline = 0;
  // We start out assuming that we run at 30fps but then the heuristic tracking
  // will adjust this value to a faster fps if we get more frequent animation
  // frames.
  var previousFrameTime = 33;
  var activeFrameTime = 33;

  var frameDeadlineObject = {
    didTimeout: false,
    timeRemaining: function () {
      var remaining = frameDeadline - exports.unstable_now();
      return remaining > 0 ? remaining : 0;
    }
  };

  /**
   * Handles the case where a callback errors:
   * - don't catch the error, because this changes debugging behavior
   * - do start a new postMessage callback, to call any remaining callbacks,
   * - but only if there is an error, so there is not extra overhead.
   */
  var callUnsafely = function (callbackConfig, arg) {
    var callback = callbackConfig.scheduledCallback;
    var finishedCalling = false;
    try {
      callback(arg);
      finishedCalling = true;
    } finally {
      // always remove it from linked list
      exports.unstable_cancelScheduledWork(callbackConfig);

      if (!finishedCalling) {
        // an error must have been thrown
        isIdleScheduled = true;
        window.postMessage(messageKey, '*');
      }
    }
  };

  /**
   * Checks for timed out callbacks, runs them, and then checks again to see if
   * any more have timed out.
   * Keeps doing this until there are none which have currently timed out.
   */
  var callTimedOutCallbacks = function () {
    if (headOfPendingCallbacksLinkedList === null) {
      return;
    }

    var currentTime = exports.unstable_now();
    // TODO: this would be more efficient if deferred callbacks are stored in
    // min heap.
    // Or in a linked list with links for both timeoutTime order and insertion
    // order.
    // For now an easy compromise is the current approach:
    // Keep a pointer to the soonest timeoutTime, and check that first.
    // If it has not expired, we can skip traversing the whole list.
    // If it has expired, then we step through all the callbacks.
    if (nextSoonestTimeoutTime === -1 || nextSoonestTimeoutTime > currentTime) {
      // We know that none of them have timed out yet.
      return;
    }
    // NOTE: we intentionally wait to update the nextSoonestTimeoutTime until
    // after successfully calling any timed out callbacks.
    // If a timed out callback throws an error, we could get stuck in a state
    // where the nextSoonestTimeoutTime was set wrong.
    var updatedNextSoonestTimeoutTime = -1; // we will update nextSoonestTimeoutTime below
    var timedOutCallbacks = [];

    // iterate once to find timed out callbacks and find nextSoonestTimeoutTime
    var currentCallbackConfig = headOfPendingCallbacksLinkedList;
    while (currentCallbackConfig !== null) {
      var _timeoutTime = currentCallbackConfig.timeoutTime;
      if (_timeoutTime !== -1 && _timeoutTime <= currentTime) {
        // it has timed out!
        timedOutCallbacks.push(currentCallbackConfig);
      } else {
        if (_timeoutTime !== -1 && (updatedNextSoonestTimeoutTime === -1 || _timeoutTime < updatedNextSoonestTimeoutTime)) {
          updatedNextSoonestTimeoutTime = _timeoutTime;
        }
      }
      currentCallbackConfig = currentCallbackConfig.next;
    }

    if (timedOutCallbacks.length > 0) {
      frameDeadlineObject.didTimeout = true;
      for (var i = 0, len = timedOutCallbacks.length; i < len; i++) {
        callUnsafely(timedOutCallbacks[i], frameDeadlineObject);
      }
    }

    // NOTE: we intentionally wait to update the nextSoonestTimeoutTime until
    // after successfully calling any timed out callbacks.
    nextSoonestTimeoutTime = updatedNextSoonestTimeoutTime;
  };

  // We use the postMessage trick to defer idle work until after the repaint.
  var messageKey = '__reactIdleCallback$' + Math.random().toString(36).slice(2);
  var idleTick = function (event) {
    if (event.source !== window || event.data !== messageKey) {
      return;
    }
    isIdleScheduled = false;

    if (headOfPendingCallbacksLinkedList === null) {
      return;
    }

    // First call anything which has timed out, until we have caught up.
    callTimedOutCallbacks();

    var currentTime = exports.unstable_now();
    // Next, as long as we have idle time, try calling more callbacks.
    while (frameDeadline - currentTime > 0 && headOfPendingCallbacksLinkedList !== null) {
      var latestCallbackConfig = headOfPendingCallbacksLinkedList;
      frameDeadlineObject.didTimeout = false;
      // callUnsafely will remove it from the head of the linked list
      callUnsafely(latestCallbackConfig, frameDeadlineObject);
      currentTime = exports.unstable_now();
    }
    if (headOfPendingCallbacksLinkedList !== null) {
      if (!isAnimationFrameScheduled) {
        // Schedule another animation callback so we retry later.
        isAnimationFrameScheduled = true;
        scheduleAnimationFrameWithFallbackSupport(animationTick);
      }
    }
  };
  // Assumes that we have addEventListener in this environment. Might need
  // something better for old IE.
  window.addEventListener('message', idleTick, false);

  var animationTick = function (rafTime) {
    isAnimationFrameScheduled = false;
    var nextFrameTime = rafTime - frameDeadline + activeFrameTime;
    if (nextFrameTime < activeFrameTime && previousFrameTime < activeFrameTime) {
      if (nextFrameTime < 8) {
        // Defensive coding. We don't support higher frame rates than 120hz.
        // If we get lower than that, it is probably a bug.
        nextFrameTime = 8;
      }
      // If one frame goes long, then the next one can be short to catch up.
      // If two frames are short in a row, then that's an indication that we
      // actually have a higher frame rate than what we're currently optimizing.
      // We adjust our heuristic dynamically accordingly. For example, if we're
      // running on 120hz display or 90hz VR display.
      // Take the max of the two in case one of them was an anomaly due to
      // missed frame deadlines.
      activeFrameTime = nextFrameTime < previousFrameTime ? previousFrameTime : nextFrameTime;
    } else {
      previousFrameTime = nextFrameTime;
    }
    frameDeadline = rafTime + activeFrameTime;
    if (!isIdleScheduled) {
      isIdleScheduled = true;
      window.postMessage(messageKey, '*');
    }
  };

  exports.unstable_scheduleWork = function (callback, options) /* CallbackConfigType */{
    var timeoutTime = -1;
    if (options != null && typeof options.timeout === 'number') {
      timeoutTime = exports.unstable_now() + options.timeout;
    }
    if (nextSoonestTimeoutTime === -1 || timeoutTime !== -1 && timeoutTime < nextSoonestTimeoutTime) {
      nextSoonestTimeoutTime = timeoutTime;
    }

    var scheduledCallbackConfig = {
      scheduledCallback: callback,
      timeoutTime: timeoutTime,
      prev: null,
      next: null
    };
    if (headOfPendingCallbacksLinkedList === null) {
      // Make this callback the head and tail of our list
      headOfPendingCallbacksLinkedList = scheduledCallbackConfig;
      tailOfPendingCallbacksLinkedList = scheduledCallbackConfig;
    } else {
      // Add latest callback as the new tail of the list
      scheduledCallbackConfig.prev = tailOfPendingCallbacksLinkedList;
      // renaming for clarity
      var oldTailOfPendingCallbacksLinkedList = tailOfPendingCallbacksLinkedList;
      if (oldTailOfPendingCallbacksLinkedList !== null) {
        oldTailOfPendingCallbacksLinkedList.next = scheduledCallbackConfig;
      }
      tailOfPendingCallbacksLinkedList = scheduledCallbackConfig;
    }

    if (!isAnimationFrameScheduled) {
      // If rAF didn't already schedule one, we need to schedule a frame.
      // TODO: If this rAF doesn't materialize because the browser throttles, we
      // might want to still have setTimeout trigger scheduleWork as a backup to ensure
      // that we keep performing work.
      isAnimationFrameScheduled = true;
      scheduleAnimationFrameWithFallbackSupport(animationTick);
    }
    return scheduledCallbackConfig;
  };

  exports.unstable_cancelScheduledWork = function (callbackConfig /* CallbackConfigType */
  ) {
    if (callbackConfig.prev === null && headOfPendingCallbacksLinkedList !== callbackConfig) {
      // this callbackConfig has already been cancelled.
      // cancelScheduledWork should be idempotent, a no-op after first call.
      return;
    }

    /**
     * There are four possible cases:
     * - Head/nodeToRemove/Tail -> null
     *   In this case we set Head and Tail to null.
     * - Head -> ... middle nodes... -> Tail/nodeToRemove
     *   In this case we point the middle.next to null and put middle as the new
     *   Tail.
     * - Head/nodeToRemove -> ...middle nodes... -> Tail
     *   In this case we point the middle.prev at null and move the Head to
     *   middle.
     * - Head -> ... ?some nodes ... -> nodeToRemove -> ... ?some nodes ... -> Tail
     *   In this case we point the Head.next to the Tail and the Tail.prev to
     *   the Head.
     */
    var next = callbackConfig.next;
    var prev = callbackConfig.prev;
    callbackConfig.next = null;
    callbackConfig.prev = null;
    if (next !== null) {
      // we have a next

      if (prev !== null) {
        // we have a prev

        // callbackConfig is somewhere in the middle of a list of 3 or more nodes.
        prev.next = next;
        next.prev = prev;
        return;
      } else {
        // there is a next but not a previous one;
        // callbackConfig is the head of a list of 2 or more other nodes.
        next.prev = null;
        headOfPendingCallbacksLinkedList = next;
        return;
      }
    } else {
      // there is no next callback config; this must the tail of the list

      if (prev !== null) {
        // we have a prev

        // callbackConfig is the tail of a list of 2 or more other nodes.
        prev.next = null;
        tailOfPendingCallbacksLinkedList = prev;
        return;
      } else {
        // there is no previous callback config;
        // callbackConfig is the only thing in the linked list,
        // so both head and tail point to it.
        headOfPendingCallbacksLinkedList = null;
        tailOfPendingCallbacksLinkedList = null;
        return;
      }
    }
  };
}
  })();
}


/***/ }),

/***/ "./node_modules/schedule/index.js":
/*!****************************************!*\
  !*** ./node_modules/schedule/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/schedule.development.js */ "./node_modules/schedule/cjs/schedule.development.js");
}


/***/ }),

/***/ "./node_modules/schedule/tracking.js":
/*!*******************************************!*\
  !*** ./node_modules/schedule/tracking.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/schedule-tracking.development.js */ "./node_modules/schedule/cjs/schedule-tracking.development.js");
}


/***/ })

}]);
//# sourceMappingURL=npm.schedule.51e0accc9bfd2bb61669.js.map