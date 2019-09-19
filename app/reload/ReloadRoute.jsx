import React from 'react';
import { Redirect } from 'react-router-dom';
import Reload from '../classes/Reload.js';

/** Redirect users via bodyState */

export default function ReloadRoute(props) {
  const { boundHandleClickForApp } = props;
  const { currentCaller } = props.appState;
  const { indexForChapterData } = props.bodyState;
  const reload = new Reload(props);

  // Update appState.chapter when link
  // points to /chapter
  if (currentCaller === 'chapter') {
    let number = indexForChapterData + 1;

    if (
      !props.appState.images[
        `chapter-${number}-main`
      ].complete
    ) {
      number = number * -1;
    }

    // Note: Duplicated by State.rebuildApp, but 
    // it breaks here. Refactor at a later date.
    boundHandleClickForApp('setChapter', number);
  }

  return <Redirect to={reload.path} />;
}
