import About from './about/About.jsx';
import ContentLoader from './shared/ContentLoader.jsx';
import EventHandling from './classes/EventHandling.js';
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

    /** Build initial bodyState.
     *
     * Renders are defined by path params. State is used
     * to return to current location when user moves
     * between sections, e.g., returns from a menu.
     */

    const referrer = new Referrer(props);
    const location = new Location(
      referrer.pathToMatch,
      props
    );
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
    const eventHandling = new EventHandling('body', this);
    const boundHandleClickForBody = eventHandling.boundHandleClick;

    return (
      <Switch>
        <Route
          exact
          path="/"
          render={
            () => <Home {...this.props} />
          }
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
              render={
                ({ match }) => (
                  <ContentLoader
                    {...this.props}
                    bodyState={this.state}
                    boundHandleClickForBody={boundHandleClickForBody}
                    match={match}
                  />
                )
              }
            />
          ))}
        <Route
          exact
          path="/i"
          render={
            () => <ReloadRoute {...this.props} bodyState={this.state} />
          }
        />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}
