import React, { Component } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home.jsx';
import TheStory from './TheStory.jsx';
import Projects from './Projects.jsx';
import Journalism from './Journalism.jsx';
import About from './About.jsx';
import Menu from './Menu.jsx';
import Reverie from './Reverie.jsx';
import NotFound from './NotFound.jsx';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Home state={this.props.state} />}
        />

        <Route
          exact
          path="/chapter"
          render={() => (
            <Redirect to={`/chapter/${this.props.state.chapterTitle}`} />
          )}
        />

        <Route
          exact
          path="/chapter/:title"
          render={() => <TheStory state={this.props.state} />}
        />

        <Route
          exact
          path="/projects"
          render={() => (
            <Redirect
              to={`/projects/${this.props.state.projectName}/${
                this.props.state.projectThumbnail
              }`}
            />
          )}
        />

        <Route
          exact
          path="/projects/:name"
          render={() => (
            <Redirect
              to={`/projects/${this.props.state.projectName}/${
                this.props.state.projectThumbnail
              }`}
            />
          )}
        />

        <Route
          path="/projects/:name/:projectThumbnail"
          render={() => <Projects state={this.props.state} />}
        />

        <Route
          exact
          path="/journalism"
          render={() => (
            <Redirect
              to={`/journalism/${this.props.state.publication}/${
                this.props.state.headline
              }`}
            />
          )}
        />

        <Route
          exact
          path="/journalism/:publication"
          render={() => (
            <Redirect
              to={`/journalism/${this.props.state.publication}/${
                this.props.state.headline
              }`}
            />
          )}
        />

        <Route
          path="/journalism/:publication/:headline"
          render={() => <Journalism state={this.props.state} />}
        />

        <Route
          exact
          path="/menu"
          render={() => <Redirect to={'/menu/projects'} />}
        />

        <Route
          path="/menu/:section"
          render={({ match }) => {
            return (
              <Menu
                state={this.props.state}
                section={match.params.section.toLowerCase()}
              />
            );
          }}
        />

        <Route path="/reverie" render={() => <Reverie />} />
        <Route path="/about" render={() => <About />} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default withRouter(Main);
