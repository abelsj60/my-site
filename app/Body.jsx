import About from './about/About.jsx';
import ClickHandling from './classes/ClickHandling.js';
import ContentLoader from './shared/ContentLoader.jsx';
import Debug from './debug/Debug.jsx';
import Home from './home/Home.jsx';
import Location from './classes/Location';
import NotFound from './not-found/NotFound.jsx';
import React, { Component } from 'react';
import Referrer from './classes/Referrer.js';
import ReloadRoute from './reload/ReloadRoute.jsx';
import {
  Route,
  Switch
} from 'react-router-dom';
import State from './classes/State.js';

export default class Body extends Component {
  constructor(props) {
    super(props);

    /* Initial bodyState:
     
      Renders are defined by path params. State is used
      to return to current location when user moves
      between sections, e.g., returns from a menu.

      Optional params: https://stackoverflow.com/a/35604855
    */

    const referrer = new Referrer(props);
    const location = new Location(referrer.pathToMatch, props);
    const state = new State(props, location);

    this.state = {
      indexForArticleData: state.getIndex('article'),
      indexForChapterData: state.getIndex('chapter'),
      indexForProjectData: state.getIndex('project'),
      indexForProjectPics: state.getIndex('projectPics'),
      indexForPublication: state.getIndex('publication'),
      indexForReverieData: state.getIndex('reverie')
    };
  }

  render() {
    const clickHandling = new ClickHandling('body', this);
    const boundHandleClickForBody = clickHandling.boundHandleClick;

    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Home
              {...this.props}
            />
          )}
        />
        {[
          '/chapter/:title?',
          '/journalism/:publication?/:headline?',
          '/projects/:projectName?/:projectThumbnail?',
          '/reverie/:headline?'
        ].map(
          (path, idx) => (
            <Route
              key={idx}
              path={path}
              render={({ match }) => (
                <ContentLoader
                  {...this.props}
                  bodyState={this.state}
                  boundHandleClickForBody={boundHandleClickForBody}
                  match={match}
                />
              )}
            />
          ))}
        <Route
          exact
          path="/i"
          render={() => (
            <ReloadRoute
              {...this.props}
              bodyState={this.state}
            />
          )}
        />
        <Route
          exact
          path="/about"
          render={() => (
            <About
              {...this.props}
            />
          )}
        />
        <Route
          exact
          path="/debug"
          render={() => (
            <Debug
              {...this.props}
            />
          )}
        />
        <Route
          render={() => (
            <NotFound 
              {...this.props}
            />
          )}
        />
      </Switch>
    );
  }
}
