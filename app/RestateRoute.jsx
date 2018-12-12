import React from 'react';
import { Redirect } from 'react-router-dom';
import { normalize } from './helpers/utils.js';
import storyData from './data/the-story/index.js';
import projectData from './data/projects/index.js';
import articleData from './data/clips/index.js';

/** Redirect users w/body.returnState */

export default function RestateRoute(props) {
  const localState = props.localState;
  const referrer = props.location.state
    ? props.location.state.toLowerCase()
    : '';

  console.log('RestateRoute called by (/' + referrer + ')');

  switch (referrer) {
    case 'chapter':
      const title = storyData[localState.indexForChapterData].attributes.title;
      const normalizedTitle = normalize(title);

      return <Redirect to={`/${referrer}/${normalizedTitle}`} />;
    case 'projects':
      const projectName =
        projectData[localState.indexForProjectData].attributes.name;
      const normalizedProjectName = normalize(projectName);
      const indexForProjectPictures = localState.indexForProjectPictures;
      const thumbnailNumber = indexForProjectPictures + 1;

      return (
        <Redirect
          to={`/${referrer}/${normalizedProjectName}/${thumbnailNumber}`}
        />
      );
    case 'journalism':
      const publication =
        articleData[localState.indexForPublicationData].attributes.publication;
      const headline =
        articleData[localState.indexForPublicationData].attributes.headline;
      const normalizedPublication = normalize(publication);
      const normalizedHeadline = normalize(headline);

      return (
        <Redirect
          to={`/${referrer}/${normalizedPublication}/${normalizedHeadline}`}
        />
      );
    default:
      return <Redirect to={'/'} />;
  }
}
