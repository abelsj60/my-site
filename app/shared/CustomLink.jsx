import { createPath } from 'history';
import React from 'react';
import { Route, Link as ReactRouterLink } from 'react-router-dom';

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

export default ({
  to,
  replace,
  boundHandleClickForApp,
  isCalledByMenu,
  ...props
}) => {
  const { pathname } = window.location;
  const splitTheCaller = to.split('/');
  const callerWillBe = splitTheCaller[1].length !== 0
    ? splitTheCaller[1]
    : 'home';
  const isMenu =
    pathname.includes('menu')
      && pathname.split('/')[2] === 'menu'; // Ensures this is a /menu.
  const iSayNoMatch =
    window.location.pathname.includes(to)
      && !isMenu
      && to.length > 1;

  const eventHandler =
    event => {
      if (!boundHandleClickForApp) {
        return null;
      }

      event.stopPropagation();

      if (!isCalledByMenu) {
        boundHandleClickForApp('updateApp', 
          splitTheCaller.length === 2
            ? callerWillBe
            : undefined
        );
      } else {
        boundHandleClickForApp('toggleMenu');
      }
    };

  return (
    <Route
      path={
        typeof to === 'string'
          ? to
          : createPath(to)
      }
      exact
    >
      {
        ({ match }) => {
          return (
            <ReactRouterLink
              {...props}
              to={to}
              replace={iSayNoMatch || replace || !!match}
              onClick={eventHandler}
            />
          );
        }
      }
    </Route>
  );
};
