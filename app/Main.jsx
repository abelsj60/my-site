import React, { Component } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home.jsx';
import TheStory from './TheStory.jsx';
import Projects from './Projects.jsx';
import Journalism from './Journalism.jsx';
import About from './About.jsx';
import Toys from './Toys.jsx';
import Menu from './Menu.jsx';
import NotFound from './NotFound.jsx';

/*

  1. Use setState() instead of links in most nav locations?
    https://stackoverflow.com/questions/45089386/what-is-the-best-way-to-redirect-a-page-using-react-router
    https://tylermcginnis.com/react-router-programmatically-navigate/
  2. Layout, design
  3. Browser testing, polyfills, etc
  4. When navigating away from home, reset scrollTop to 0 ?
  5. Image storage in sight? / Bundling?
  6. When using menu to navigate away from Menu, shut off menu
  7. Remove extra space from last thumbnail group in menu/
  8. Refactor StateManagement (tighten?)

  --Debouncing: https://stackoverflow.com/questions/23123138/perform-debounce-in-react-js

  --Rendering:
  https://robots.thoughtbot.com/react-rendering-misconception

*/

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
                toggleMenu={this.props.toggleMenu}
                section={match.params.section.toLowerCase()}
              />
            );
          }}
        />

        <Route path="/toys" render={() => <Toys />} />
        <Route path="/about" render={() => <About />} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default withRouter(Main);
