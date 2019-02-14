import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home/Home.jsx';
import ContentLoader from './shared/ContentLoader.jsx';
import About from './about/About.jsx';
import ReloadRoute from './reload/ReloadRoute.jsx';
import NotFound from './not-found/NotFound.jsx';

import Location from './classes/Location';
import Referrer from './classes/Referrer.js';
import InitialState from './classes/InitialState.js';
import EventHandling from './classes/EventHandling.js';

export default class Body extends Component {
  constructor(props) {
    super(props);

    /** Build initial return state.
     *
     * Renders are defined by path params. State is used
     * to return to current location when user moves
     * between sections or from section-to-menu.
     */

    const r = new Referrer(props);
    const l = new Location(r.pathToMatch, props);
    const s = new InitialState(props, l);

    this.state = {
      indexForChapterData: s.build('indexForChapterData'),
      indexForProjectData: s.build('indexForProjectData'),
      indexForProjectPics: s.build('indexForProjectPics'),
      indexForPublication: s.build('indexForPublication'),
      indexForArticleData: s.build('indexForArticleData'),
      indexForReverieData: s.build('indexForReverieData')
    };
  }

  render() {
    const eH = new EventHandling('body', this);
    const boundHandleClickForBody = eH.boundHandleClick;

    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Home {...this.props} />;
          }}
        />
        <Route
          path="/chapter/:title?"
          render={({ match }) => {
            return (
              <ContentLoader
                {...this.props}
                match={match}
                localState={this.state}
                boundHandleClickForBody={boundHandleClickForBody}
              />
            );
          }}
        />
        <Route
          path="/projects/:projectName?/:projectThumbnail?"
          render={({ match }) => {
            return (
              <ContentLoader
                {...this.props}
                localState={this.state}
                match={match}
                boundHandleClickForBody={boundHandleClickForBody}
              />
            );
          }}
        />
        <Route
          path="/journalism/:publication?/:headline?"
          render={({ match }) => {
            return (
              <ContentLoader
                {...this.props}
                localState={this.state}
                match={match}
                boundHandleClickForBody={boundHandleClickForBody}
              />
            );
          }}
        />
        <Route
          path="/reverie/:headline?"
          render={({ match }) => {
            return (
              <ContentLoader
                {...this.props}
                localState={this.state}
                match={match}
                boundHandleClickForBody={boundHandleClickForBody}
              />
            );
          }}
        />
        <Route
          exact
          path="/about"
          render={() => {
            return <About />;
          }}
        />
        <Route
          exact
          path="/i"
          render={() => {
            return <ReloadRoute {...this.props} localState={this.state} />;
          }}
        />
        <Route component={NotFound} />
      </Switch>
    );
  }
}
