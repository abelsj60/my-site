import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './css/index.css';
import OuterRouter from './OuterRouter.jsx';

ReactDOM.render(
  <Router>
    <OuterRouter />
  </Router>,
  document.getElementById('app')
);
