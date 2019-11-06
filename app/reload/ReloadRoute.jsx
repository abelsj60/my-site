import React from 'react';
import { isMobile } from 'react-device-detect';
import { Redirect } from 'react-router-dom';
import Reload from '../classes/Reload.js';

/** Redirect users via bodyState */

export default function ReloadRoute(props) {
  const { boundHandleClickForApp } = props;
  const { currentCaller } = props.appState;
  const { indexForChapterData } = props.bodyState;
  const reload = new Reload(props);

  // Update appStateillustrationState when link points to /chapter
  if (currentCaller === 'chapter') {
    let number = indexForChapterData + 1;

    if (isMobile || !props.appState.images[`chapter-${number}-main`].complete) {
      number = number * -1;
    }

    // Note: Duplicated by State.rebuildApp, but breaks here w/o this.
    boundHandleClickForApp('updateIllustrationState', number);
  }

  return <Redirect to={reload.path} />;
}
