import React from 'react';
import { Redirect } from 'react-router-dom';
import { normalize } from './helpers/utils.js';
import storyData from './data/the-story/index.js';

/** Redirect users w/body.returnState */

export default function RestateRoute(props) {
  const referrer = props.location.state.toLowerCase();

  let dataIndex;
  let normalizedParam;

  console.log('R:', referrer);

  switch (referrer) {
    case 'chapter':
      dataIndex = props.localState.indexForChapterData;
      normalizedParam = normalize(storyData[dataIndex].attributes.title);
      break;
    default:
      console.log('RestateRoute: Keep calm, carry on');
  }

  return <Redirect to={`/${referrer}/${normalizedParam}`} />;
}
