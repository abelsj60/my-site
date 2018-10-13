import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Chapter from './Chapter.jsx';
import Projects from './Projects.jsx';
import Journalism from './Journalism.jsx';
import IndexMenu from './IndexMenu.jsx';
import About from './About.jsx';
import NotFound from './NotFound.jsx';

/*
  x 1. Hold state between /home and rest of app
  2. Add content to NotFound, About, Details (x needs data structure, too)
  x 3. Need to access details on projects pages
  x 4. Swap chapter names for numbers in state/urls
  5. Refactor js
  6. Edit story
  7. Get real project data
  8. Refactor CSS
  9. Use setState() instead of links in most nav locations?
  10. x Clean up data structures
  11. Layout, design
  12. Browser testing, polyfills, etc
  x 13. Make state defaults dynamic via reference
  14. Home scroll events, tighten
*/

class InnerRouter extends Component {
  constructor(props) {
    super(props);

    // LC: http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

    // ~ja Technically, we don't need the location checks/ternaries in state
    // b/c the location of each number type is different in each section of
    // the site, but explicitly checking seems like a better practice

    // ~ja E.g., No collisions

    // ~ja ! Note, state is not updated when we come through to the links, so we hit render, then we cDU, where a setState occurs, then re-render (I think the lag between the log and the completion of setState is reconciliation). Do do something other than relying on state; setState w/func? Call earlier? build param differently?
  }

  render() {
    return (
      <section className="inner-page">
        <Header />
        <Switch>
          <Route
            exact
            path="/test"
            render={() => (
              <ProjectsBackup
                projectName={this.props.state.projectName}
                projectImageIndex={this.props.state.projectImageIndex}
                toggleDetails={this.props.toggleDetails}
                showProjectDetails={this.props.state.showProjectDetails}
              />
            )}
          />
          {/*
            <Route
              exact
              path="/chapter/index"
              render={() => {
                const section = 'chapter';

                return <IndexMenu section={section} />;
            }}
            />
          */}
          <Route
            exact
            path="/about"
            render={() => {
              if (this.props.location.pathname.split('/').length > 2) {
                return (
                  <Redirect to={`/about/${this.props.state.chapterTitle}`} />
                );
              } else {
                return <About />;
              }
            }}
          />
          <Route
            exact
            path="/about/:title"
            render={() => (
              <Chapter
                chapterTitle={this.props.state.chapterTitle}
                showStoryText={this.props.state.showStoryText}
              />
            )}
          />
          <Route
            exact
            path="/projects"
            render={() => (
              <Redirect
                to={`/projects/${this.props.state.projectName}/${
                  this.props.state.projectImageIndex
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
                  this.props.state.projectImageIndex
                }`}
              />
            )}
          />
          <Route
            path="/projects/:name/:projectImageIndex"
            render={() => (
              <Projects
                projectName={this.props.state.projectName}
                projectImageIndex={this.props.state.projectImageIndex}
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
            render={() => {
              return (
                <Redirect
                  to={`/journalism/${this.props.state.publication}/${
                    this.props.state.headline
                  }`}
                />
              );
            }}
          />
          <Route
            path="/journalism/:publication/:headline"
            render={() => <Journalism state={this.props.state} />}
          />
          <Route
            exact
            path="/index"
            render={() => {
              return <Redirect to={'/index/projects'} />;
            }}
          />
          <Route
            path="/index/:section"
            render={({ match }) => {
              return (
                <IndexMenu
                  section={match.params.section.toLowerCase()}
                  state={this.props.state}
                />
              );
            }}
          />
          <Route
            path="/about"
            render={() => {
              return <About />;
            }}
          />
          <Route component={NotFound} />
        </Switch>
        <Footer
          showStoryText={this.props.state.showStoryText}
          showProjectDetails={this.props.state.showProjectDetails}
          toggleText={this.props.toggleText}
          toggleDetails={this.props.toggleDetails}
        />
      </section>
    );
  }
}

export default InnerRouter;
