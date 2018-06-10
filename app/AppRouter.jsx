import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { Header } from 'semantic-ui-react';
import Header from './Header.jsx';
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
        <section className='page'>
          <section className='router'>
            <Header />
            <Switch>
              <Route exact path='/chapter' render={ () =>
                (
                  <Redirect to='/chapter/1' />
                )}
              />
              <Route path='/chapter/:num' render={ ({match}) =>
                {
                  var chNum = match.params.num;
                  if(chNum <= 4) {
                    return (
                      <Chapter urlNum={chNum} />
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
              <Route exact path='/project/:name' render={ ({match}) =>
                  {
                    var project = match.params.name;
                    return (
                      <Redirect to={'/project/' + project + '/1'} component={Projects} />
                  )}
                }
              />
              <Route path='/project/:name/:thumbnail' component={Projects} />
              <Route path='/alexa' component={AlexaStories} />
              <Route exact path='/jnl' render={ () =>
                (
                  <Redirect to='/jnl/forbes/1' component={JandL} />
                )}
              />
              <Route exact path='/jnl/:name' render={ ({match}) =>
                  {
                    var publication = match.params.name;
                    return (
                      <Redirect to={'/jnl/' + publication + '/1'} component={JandL} />
                  )}
                }
              />
              <Route path='/jnl/:publication/:id' render={ ({match}) =>
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
          </section>
          <Footer />
        </section>
    )
  }

}

export default App;
