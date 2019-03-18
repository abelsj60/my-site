import React from 'react';
import { Route, Link as ReactRouterLink } from 'react-router-dom';
import { createPath } from 'history';

// This link comes courtesy of the below link:
// https://stackoverflow.com/a/51580782
// It prevents the identical location from
// being added to the history stack

// See also: https://github.com/ReactTraining/history/issues/470

export default ({ to, replace, ...props }) => (
  <Route path={typeof to === 'string' ? to : createPath(to)} exact>
    {({ match }) => (
      <ReactRouterLink {...props} to={to} replace={replace || !!match} />
    )}
  </Route>
);
