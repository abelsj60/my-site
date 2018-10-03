import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './css/index.css';
import App from './App.jsx';

// const customHistory = createBrowserHistory();

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);
