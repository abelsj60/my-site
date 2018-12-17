import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home.jsx';
import ContentLoader from './ContentLoader.jsx';
import About from './About.jsx';
import Reverie from './Reverie.jsx';
import RestateRoute from './RestateRoute.jsx';
import Location from './custom/Location';
import NotFound from './NotFound.jsx';

import EventHandling from './custom/EventHandling.js';
import Referrer from './custom/Referrer.js';

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

    this.state = {
      indexForChapterData:
        l.params.toIndex('title') !== -1 ? l.params.toIndex('title') : 0,
      indexForProjectData:
        l.params.toIndex('projectName') !== -1
          ? l.params.toIndex('projectName')
          : 0,
      indexForProjectPictures:
        l.params.toIndex('projectThumbnail') !== -1
          ? l.params.toIndex('projectThumbnail')
          : 0,
      indexForPublicationData:
        l.params.toIndex('publication') !== -1
          ? l.params.toIndex('publication')
          : 0,
      indexForArticleData:
        l.params.toIndex('headline') !== -1
          ? l.params.toIndex('headline')
          : l.params.defaultHeadline !== undefined &&
            l.params.defaultHeadline !== -1
            ? l.params.defaultHeadline
            : 0
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
            return <RestateRoute {...props} localState={this.state} />;
          }}
        />
        <Route component={NotFound} />
      </Switch>
    );
  }
}
