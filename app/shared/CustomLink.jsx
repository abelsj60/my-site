import React from 'react';
import { Route, Link as ReactRouterLink } from 'react-router-dom';
import { createPath } from 'history';

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

const Link = ({ to, replace, ...props }) => {
  const sameLocation = window.location.pathname.includes(to);

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
