import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home.jsx';
import OneLoader from './OneLoader.jsx';
import About from './About.jsx';
import Menu from './Menu.jsx';
import Reverie from './Reverie.jsx';
import RestateRoute from './RestateRoute.jsx';
import NotFound from './NotFound.jsx';
import Location from './custom/Location';
import EventHandling from './custom/EventHandling.js';
import Referrer from './custom/Referrer.js';

import bodies from './data/bodies.md';

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
      indexForChapterData: l.params.toIndex('title') || 0,
      indexForProjectData: l.params.toIndex('projectName') || 0,
      indexForProjectPictures: l.params.toIndex('projectThumbnail') || 0,
      indexForPublicationData: l.params.toIndex('publication') || 0,
      indexForArticleData:
        l.params.toIndex('headline') || l.params.defaultHeadline || 0
    };

    console.log('---BODY---');
  }

  getBodyToRender(name) {
    return [
      { name: 'Home', body: Home },
      { name: 'OneLoader', body: OneLoader },
      { name: 'About', body: About },
      { name: 'Menu', body: Menu },
      { name: 'Reverie', body: Reverie },
      { name: 'RestateRoute', body: RestateRoute }
    ].filter(body => name === body.name)[0].body;
  }

  render() {
    const eventHandlingForBody = new EventHandling('body', this);
    const boundHandleClickForBody = eventHandlingForBody.boundHandleClick;

    return (
      <Switch>
        {bodies.attributes.routes.map((body, index) => {
          const BodyToRender = this.getBodyToRender(body.component);

          return (
            <Route
              key={index}
              path={body.route}
              exact={body.route === body.link}
              render={props => {
                return (
                  <BodyToRender
                    {...props}
                    localState={this.state}
                    state={this.props.state}
                    boundHandleClickForBody={boundHandleClickForBody}
                  />
                );
              }}
            />
          );
        })}
        <Route component={NotFound} />
      </Switch>
    );
  }
}
