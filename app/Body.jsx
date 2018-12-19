import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home.jsx';
import ContentLoader from './ContentLoader.jsx';
import Reverie from './Reverie.jsx';
import About from './About.jsx';
import ReloadRoute from './ReloadRoute.jsx';
import NotFound from './NotFound.jsx';

import Location from './custom/Location';
import Referrer from './custom/Referrer.js';
import BuildState from './custom/BuildState.js';
import EventHandling from './custom/EventHandling.js';

export default class Body extends Component {
  constructor(props) {
    super(props);

    /** Build initial return state.
     *
     * Renders are defined by path params. State is used
     * to return to current location when user moves
     * between sections or from section-to-menu.
     */

    const referrer = new Referrer(props);
    const location = new Location(referrer.pathToMatch, props);
    const buildState = new BuildState('body', props, location);

    this.state = {
      indexForChapterData: buildState.now('indexForChapterData') || 0,
      indexForProjectData: buildState.now('indexForProjectData') || 0,
      indexForProjectPics: buildState.now('indexForProjectPics') || 0,
      indexForPublication: buildState.now('indexForPublication') || 0,
      indexForArticleData: buildState.now('indexForArticleData') || 0
    };

    console.log('---BODY---');
  }

  render() {
    const eventHandlingForBody = new EventHandling('body', this);
    const boundHandleClickForBody = eventHandlingForBody.boundHandleClick;

    return (
      <Switch>
        <Route
          exact
          path="/"
          render={props => {
            return <Home {...props} {...this.props} />;
          }}
        />
        <Route
          path="/story/:chapter?/:title?"
          render={props => {
            return (
              <ContentLoader
                {...props}
                localState={this.state}
                state={this.props.state}
                boundHandleClickForBody={boundHandleClickForBody}
              />
            );
          }}
        />
        <Route
          path="/projects/:projectName?/:projectThumbnail?"
          render={props => {
            return (
              <ContentLoader
                {...props}
                localState={this.state}
                state={this.props.state}
                boundHandleClickForBody={boundHandleClickForBody}
              />
            );
          }}
        />
        <Route
          path="/journalism/:publication?/:headline?"
          render={props => {
            return (
              <ContentLoader
                {...props}
                localState={this.state}
                state={this.props.state}
                boundHandleClickForBody={boundHandleClickForBody}
              />
            );
          }}
        />
        <Route
          path="/reverie"
          render={() => {
            return <Reverie />;
          }}
        />
        <Route
          path="/about"
          render={() => {
            return <About />;
          }}
        />
        <Route
          path="/i"
          render={props => {
            return <ReloadRoute {...props} localState={this.state} />;
          }}
        />
        <Route component={NotFound} />
      </Switch>
    );
  }
}
