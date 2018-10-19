import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './css/index.css';
import AppState from './AppState.jsx';

ReactDOM.render(
  <Router>
    <AppState />
  </Router>,
  document.getElementById('app')
);
