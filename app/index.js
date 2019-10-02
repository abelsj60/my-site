import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from './shared/ErrorBoundary.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

import 'matchmedia-polyfill';
import 'matchmedia-polyfill/matchMedia.addListener';

ReactDOM.render(
  <Router>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Router>,
  document.getElementById('app')
);
