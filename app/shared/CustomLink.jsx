import React from 'react';
import { Route, Link as ReactRouterLink } from 'react-router-dom';
import { createPath } from 'history';

// This code comes courtesy of: https://stackoverflow.com/a/51580782
// See also: https://github.com/ReactTraining/history/issues/470


// This code prevents the same location from being added to the
// history stack twice.

// sameLocation is a custom test. It ensures that we don't place
// the same location on the stack when we hit a base url (which
// varies from the current location, even if we're already in
// that section. For instance, header links work like this:
// /chapter --> /chapter/... Multiple hits would create
// mutliple identical entires on the history stack because
// the current URL doesn't exactly match the link location.
// The result is that nothing seems to change when the user
// hits the back button. This looks and feels...weird.

// Note: /<section>/menu is an exception to this rule. We DO want
// to save /menu button toggles to history. The user expects it.

const Link = ({ to, replace, ...props }) => {
  const { pathname } = window.location;
  const isMenu = pathname.includes('menu') && pathname.split('/')[2] === 'menu';
  const sameLocation = !isMenu && window.location.pathname.includes(to);

  return (
    <Route path={typeof to === 'string' ? to : createPath(to)} exact>
      {({ match }) => (
        <ReactRouterLink {...props} to={to} replace={sameLocation || replace || !!match} />
      )}
    </Route>
  );
};

Link.propTypes = ReactRouterLink.propTypes;
Link.defaultProps = ReactRouterLink.defaultProps;

export default Link;
