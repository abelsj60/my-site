import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import { Header } from 'semantic-ui-react';
import Home from './Home.jsx';
import AppRouter from './AppRouter.jsx';
import Footer from './Footer.jsx';

// Double div seems to lmt hight of page to viewport

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className='appContainer'>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route component={AppRouter} />
        </Switch>
      </section>
    )
  }

}

export default App;
