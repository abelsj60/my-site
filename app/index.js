import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './css/index.css';
import StateManagement from './StateManagement.jsx';

ReactDOM.render(
  <Router>
    <StateManagement />
  </Router>,
  document.getElementById('app')
);
