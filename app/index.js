import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);
