import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import { Header } from 'semantic-ui-react';
import Home from './Home.jsx';
import InnerContentRouter from './InnerContentRouter.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={InnerContentRouter} />
      </Switch>
    );
  }
}

export default App;
