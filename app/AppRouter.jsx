import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import SiteHeader from './SiteHeader.jsx';
import Home from './Home.jsx';
import Footer from './Footer.jsx';
import NotFound from './NotFound.jsx';
import Projects from './Projects.jsx';
import JandL from './JandL.jsx';
import Topics from './Topics.jsx';
import Chapter from './Chapter.jsx';
import AlexaStories from './AlexaStories.jsx'

const pageStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh'
};

const sectionStyles = {
  flex: '1',
  display: 'flex',
  flexDirection: 'column'
};

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='PageContainer'>
        <div id='RouterContainer'>
          <SiteHeader />
          <Switch>
            <Route exact path='/chapter' render={ () =>
              (
                <Redirect to='/chapter/1' />
              )
            } />
            <Route exact path='/chapter/:num' component={Chapter} />
            <Route path='/projects' component={Projects} />
            <Route path='/jnl' component={JandL} />
            <Route path='/alexa' component={AlexaStories} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    )
  }

}

export default App;
