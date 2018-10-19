import React, { Component } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import TheStory from './TheStory.jsx';
import Projects from './Projects.jsx';
import Journalism from './Journalism.jsx';
import Menu from './Menu.jsx';
import Toys from './Toys.jsx';
import About from './About.jsx';
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
  10. x Clean up data structures
  11. Layout, design
  12. Browser testing, polyfills, etc
  x 13. Make state defaults dynamic via reference
  x 14. Home scroll events, tighten
*/

class Router extends Component {
  constructor(props) {
    super(props);

    // LC: http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

    // ~ja Technically, we don't need the location checks/ternaries in state
    // b/c the location of each number type is different in each section of
    // the site, but explicitly checking seems like a better practice

    // ~ja E.g., No collisions

    // ~ja ! Note, state is not updated when we come through to the links, so we hit render, then we cDU, where a setState occurs, then re-render (I think the lag between the log and the completion of setState is reconciliation). Do do something other than relying on state; setState w/func? Call earlier? build param differently?

    // ~ja ? Inconsistent: Use CSS attribute in one, className in other
  }

  addCssForPageControl() {
    return this.props.location.pathname.split('/')[1] === '' ? 'home' : 'inner';
  }

  render() {
    return (
      <section id="page" className={this.addCssForPageControl()}>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                magicOpacity={this.props.state.magicOpacity}
                magicClicks={this.props.state.magicClicks}
              />
            )}
          />

          <Route
            exact
            path="/test"
            render={() => (
              <ProjectsBackup
                projectName={this.props.state.projectName}
                projectThumbnail={this.props.state.projectThumbnail}
                toggleDetails={this.props.toggleDetails}
                showProjectDetails={this.props.state.showProjectDetails}
              />
            )}
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
            render={() => (
              <TheStory
                chapterTitle={this.props.state.chapterTitle}
                storyText={this.props.state.storyText}
                state={this.props.state}
              />
            )}
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
            render={() => (
              <Projects
                projectName={this.props.state.projectName}
                projectThumbnail={this.props.state.projectThumbnail}
                toggleDetails={this.props.toggleDetails}
                showProjectDetails={this.props.state.showProjectDetails}
              />
            )}
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
        <Footer
          storyText={this.props.state.storyText}
          toggleText={this.props.toggleText}
          magicOpacity={this.props.state.magicOpacity}
          magicClicks={this.props.state.magicClicks}
        />
      </section>
    );
  }
}

export default withRouter(Router);
