import React from 'react';
import { Route, Link as ReactRouterLink } from 'react-router-dom';
import { createPath } from 'history';

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
// by checking the length of the 'to' prop. iSayNoMatch if 1.

const Link = ({ to, replace, ...props }) => {
  const { pathname } = window.location;
  const isMenu =
    pathname.includes('menu')
    && pathname.split('/')[2] === 'menu'; // Ensures this is a /menu.
  const iSayNoMatch =
    window.location.pathname.includes(to)
      && !isMenu
      && to.length > 1;

  return (
    <Route
      path={typeof to === 'string'
        ? to
        : createPath(to)}
      exact
    >
      {({ match }) =>
        (<ReactRouterLink
          {...props}
          to={to}
          replace={iSayNoMatch || replace || !!match}
        />)}
    </Route>
  );
};

Link.propTypes = ReactRouterLink.propTypes;
Link.defaultProps = ReactRouterLink.defaultProps;

export default Link;
