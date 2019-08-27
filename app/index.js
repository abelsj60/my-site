import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from './shared/ErrorBoundary.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

// Fade out 'hang on' message (see index.html), then
// remove in App.jsx so it has a chance to fade out
const element = document.getElementById('hang-on');
element.style.transition = 'opacity .1s';
element.style.opacity = '0';

ReactDOM.render(
  <Router>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Router>,
  document.getElementById('app')
);
