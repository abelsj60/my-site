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
  x 1. Hold state between /home and rest of app
  x 2. Add content to NotFound, About, Details (x needs data structure, too)
  x 3. Need to access details on projects pages
  x 4. Swap chapter names for numbers in state/urls
  x 5. Refactor js
  6. Edit story
  x 7. Get real project data
  x 8. Refactor CSS
  9. Use setState() instead of links in most nav locations?
    https://stackoverflow.com/questions/45089386/what-is-the-best-way-to-redirect-a-page-using-react-router
    https://tylermcginnis.com/react-router-programmatically-navigate/
  10. x Clean up data structures
  11. Layout, design
  12. Browser testing, polyfills, etc
  x 13. Make state defaults dynamic via reference
  x 14. Home scroll events, tighten

  Debouncing: https://stackoverflow.com/questions/23123138/perform-debounce-in-react-js
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

        {/* <Route
            exact
            path="/chapter/menu"
            render={() => {
              const section = 'chapter';

              return <Menu section={section} />;
            }}
          /> */}

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
                section={match.params.section.toLowerCase()}
                state={this.props.state}
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
