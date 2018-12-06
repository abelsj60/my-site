import React from 'react';
import { matchPath } from 'react-router';
import storyData from './data/the-story/index.js';
import { validateParam } from './helpers/utils.js';
import { Redirect } from 'react-router-dom';

export default function RedirectUser(props) {
  const path = props.location.pathname;

  const pathMatch = matchPath(path, { path: '/chapter/:title' });
  const isFullPath = pathMatch && pathMatch.isExact;

  let isBadTitle = path.split('/').length > 3;

  if (isFullPath) {
    const title = pathMatch.params.title;
    const validatedTitle = validateParam('title', storyData, title);

    isBadTitle = validatedTitle === -1;
  }

  return !isFullPath && !isBadTitle ? (
    <Redirect to={{ pathname: '/i', state: props.referrer }} />
  ) : isBadTitle ? (
    <Redirect to="/notFound" />
  ) : null;
}

// function PathMatch(props) {
//   /** Usage:
//    *   <PathMatch
//    *      path={path}
//    *      pathToMatch='/chapter/:title'
//    *    /> */

//   const path = props.location.pathname;
//   const fullPath = matchPath(path, { path: props.pathToMatch });

//   return fullPath && fullPath.isExact;
// }

// export default PathMatch;
