import React from 'react';
import { Redirect } from 'react-router-dom';

import Reload from './custom/Reload.js';

/** Redirect users via returnState on Body */

export default function ReloadRoute(props) {
  const reload = new Reload(props);
  return <Redirect to={reload.path} />;
}
