import React from 'react';
import { Redirect } from 'react-router-dom';
import Reload from '../classes/Reload.js';

/** Redirect users via bodyState */

export default function ReloadRoute(props) {
  const { boundHandleClickForApp } = props;
  const { currentCaller, type } = props.appState;
  const { indexForChapterData } = props.bodyState;
  const reload = new Reload(props);

  // Update appState.illustrationState when link points to /chapter
  if (currentCaller === 'chapter') {
    let number = indexForChapterData + 1;

    if (type === 'mobile' || !props.appState.images[`chapter-${number}-main`].complete) {
      number = number * -1;
    }

    // Note: Duplicated by State.rebuildApp, but breaks w/o this.
    boundHandleClickForApp('updateIllustrationState', number);
  }

  return <Redirect to={reload.path} />;
}
