import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Chapter from './Chapter.jsx';
import Projects from './Projects.jsx';
import JandL from './JandL.jsx';
import IndexMenu from './IndexMenu.jsx';
import About from './About.jsx';
import NotFound from './NotFound.jsx';

/*
  x 1. Hold state between /home and rest of app
  2. Add content to NotFound, About, Details (needs data structure, too)
  3. Swap chapter names for numbers in state/urls
  4. Use setState() instead of links in most nav locations?
  5. Refactor js
  6. Refactor CSS
  7. Layout, design
  8. Browser testing, polyfills, etc
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
    console.log('State in Render: ', this.props.state);

    return (
      <section className="inner-page">
        <Header />
        <Switch>
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
            path="/chapter"
            render={() => (
              <Redirect to={`/chapter/${this.props.state.chapter}`} />
            )}
          />
          <Route
            path="/chapter/:num"
            render={() => {
              if (this.props.state.chapter) {
                return (
                  <Chapter
                    chapterNumber={this.props.state.chapter}
                    storyText={this.props.state.storyText}
                  />
                );
              } else {
                return <NotFound />;
              }
            }}
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
            render={() => {
              if (
                this.props.state.projectName &&
                this.props.state.projectImageIndex
              ) {
                return (
                  <Projects
                    projectName={this.props.state.projectName}
                    projectImageIndex={this.props.state.projectImageIndex}
                    projectDetails={this.props.state.projectDetails}
                  />
                );
              } else {
                return <NotFound />;
              }
            }}
          />
          <Route
            exact
            path="/jnl"
            render={() => (
              <Redirect
                to={`/jnl/${this.props.state.publication}/${
                  this.props.state.headline
                }`}
              />
            )}
          />
          <Route
            exact
            path="/jnl/:publication"
            render={() => {
              return (
                <Redirect
                  to={`/jnl/${this.props.state.publication}/${
                    this.props.state.headline
                  }`}
                />
              );
            }}
          />
          <Route
            path="/jnl/:publication/:headline"
            render={() => {
              return (
                <JandL
                  publication={this.props.state.publication}
                  headline={this.props.state.headline}
                />
              );
            }}
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
              const section = match.params.section.toLowerCase();

              return <IndexMenu section={section} />;
            }}
          />
          <Route
            path="/about"
            render={() => {
              return <About />;
            }}
          />
          ;<Route component={NotFound} />
        </Switch>
        <Footer
          storyText={this.props.state.storyText}
          projectDetails={this.props.state.projectDetails}
          toggleText={this.props.toggleText}
          toggleDetails={this.props.toggleDetails}
        />
      </section>
    );
  }
}

export default InnerRouter;
