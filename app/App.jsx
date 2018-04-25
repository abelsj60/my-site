import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import SiteHeader from './SiteHeader.jsx';
import Home from './Home.jsx';
import AppRouter from './AppRouter.jsx';
import Footer from './Footer.jsx';
import ParTest from './ParTest.jsx';

// Double div seems to lmt hight of page to viewport

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='AppContainer'>
        <Switch>
          <Route exact path='/' component={ParTest} />
          <Route component={AppRouter} />
        </Switch>
      </div>
    )
  }

}

export default App;
