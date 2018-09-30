import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import NotFound from './NotFound.jsx';
import Projects from './Projects.jsx';
import JandL from './JandL.jsx';
import Chapter from './Chapter.jsx';
import AlexaStories from './AlexaStories.jsx';
import FullPageIndexMenu from './FullPageIndexMenu.jsx';
import storyData from './helpers/storyData.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="inner-page">
        <Header />
        <Switch>
          <Route
            exact
            path="/chapter"
            render={() => <Redirect to="/chapter/1" />}
          />
          <Route
            path="/chapter/:num"
            render={({ match }) => {
              const chapterNumber = match.params.num;
              if (chapterNumber <= 4) {
                return <Chapter chapterNumber={chapterNumber} />;
              } else {
                return <Route component={NotFound} />;
              }
            }}
          />
          <Route
            exact
            path="/projects"
            render={() => (
              <Redirect to="/projects/arrow/1" component={Projects} />
            )}
          />
          <Route
            exact
            path="/projects/:name"
            render={({ match }) => {
              const projectName = match.params.name;
              return (
                <Redirect
                  to={'/projects/' + projectName + '/1'}
                  component={Projects}
                />
              );
            }}
          />
          <Route path="/projects/:name/:thumbnail" component={Projects} />
          <Route path="/alexa" component={AlexaStories} />
          <Route
            exact
            path="/jnl"
            render={() => <Redirect to="/jnl/forbes/1" component={JandL} />}
          />
          <Route
            exact
            path="/jnl/:name"
            render={({ match }) => {
              const publication = match.params.name;
              return (
                <Redirect to={'/jnl/' + publication + '/1'} component={JandL} />
              );
            }}
          />
          <Route
            path="/jnl/:publication/:id"
            render={({ match }) => {
              const publication = match.params.publication.toLowerCase();
              const id = parseInt(match.params.id) - 1;

              if (storyData[publication][id]) {
                return <JandL publication={publication} id={id} />;
              } else {
                return <Route component={NotFound} />;
              }
            }}
          />
          <Route
            exact
            path="/index"
            render={() => {
              return <Redirect to={'/index/jnl'} />;
            }}
          />
          <Route
            path="/index/:section"
            render={({ match }) => {
              const section = match.params.section.toLowerCase();

              return <FullPageIndexMenu section={section} />;
            }}
          />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </section>
    );
  }
}

export default App;
