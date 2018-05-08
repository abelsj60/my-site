import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { Header } from 'semantic-ui-react';
import SiteHeader from './SiteHeader.jsx';
import Home from './Home.jsx';
import Footer from './Footer.jsx';
import NotFound from './NotFound.jsx';
import Projects from './Projects.jsx';
import JandL from './JandL.jsx';
import Topics from './Topics.jsx';
import Chapter from './Chapter.jsx';
import AlexaStories from './AlexaStories.jsx';
import storyData from './helpers/storyData.jsx';

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
              )}
            />
            <Route path='/chapter/:num' render={({match}) =>
              {
                var goHere = match.params.num;
                if(goHere <= 4) {
                  return (
                    <Chapter urlNum={goHere} />
                  )
                } else {
                  return (
                    <Route component={NotFound} />
                )}
              }
            } />
            <Route exact path='/project' render={ () =>
              (
                <Redirect to='/project/arrow/1' component={Projects} />
              )}
            />
            <Route path='/project/:name/:thumbnail' component={Projects} />
            <Route path='/alexa' component={AlexaStories} />
            <Route exact path='/jnl' render={ () =>
              (
                <Redirect to='/jnl/forbes/1' component={JandL} />
              )}
            />
            <Route path='/jnl/:publication/:id' render={({match}) =>
              {
                var publication = match.params.publication.toLowerCase();
                var id = parseInt(match.params.id) - 1;

                if(storyData[publication][id]) {
                  return <JandL publication={publication} id={id} />
                } else {
                  return <Route component={NotFound} />
                }}
              }
            />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    )
  }

}

export default App;
