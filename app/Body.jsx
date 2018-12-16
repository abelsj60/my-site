import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.jsx';
import StoryLoader from './StoryLoader.jsx';
import ProjectLoader from './ProjectLoader.jsx';
import JournalismLoader from './JournalismLoader.jsx';
import About from './About.jsx';
import Menu from './Menu.jsx';
import Reverie from './Reverie.jsx';
import RestateRoute from './RestateRoute.jsx';
import NotFound from './NotFound.jsx';
import Location from './custom/Location';
import EventHandling from './custom/EventHandling.js';
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

    const path = this.props.location.pathname;
    const referrer = path.split('/')[1];

    let pathToMatch;

    switch (referrer) {
      case 'chapter':
        pathToMatch = '/chapter/:title?';
        break;
      case 'projects':
        pathToMatch = '/projects/:projectName?/:projectThumbnail?';
        break;
      case 'journalism':
        pathToMatch = '/journalism/:publication?/:headline?';
        break;
      default:
        console.log('BodyConstructor: Keep calm, carry on');
    }

    /** Return state */

    const location = new Location(pathToMatch, props);
    const lParams = location.params;

    this.state = {
      indexForChapterData: lParams.toIndex('title') || 0,
      indexForProjectData: lParams.toIndex('projectName') || 0,
      indexForProjectPictures: lParams.toIndex('projectThumbnail') || 0,
      indexForPublicationData: lParams.toIndex('publication') || 0,
      indexForArticleData:
        lParams.toIndex('headline') || lParams.defaultHeadline || 0
    };

    console.log('---BODY---');
  }

  get bodyTypes() {
    return [
      { name: 'Home', body: Home },
      { name: 'StoryLoader', body: StoryLoader },
      { name: 'ProjectLoader', body: ProjectLoader },
      { name: 'JournalismLoader', body: JournalismLoader },
      { name: 'About', body: About },
      { name: 'Menu', body: Menu },
      { name: 'Reverie', body: Reverie },
      { name: 'RestateRoute', body: RestateRoute }
    ];
  }

  getBodyToRender(name) {
    return this.bodyTypes.filter(body => name === body.name)[0].body;
  }

  render() {
    const eventHandlingForBody = new EventHandling('body', this);
    const boundHandleClickForBody = eventHandlingForBody.boundHandleClick;

    return (
      <Switch>
        {bodies.attributes.routes.map(body => {
          const BodyToRender = this.getBodyToRender(body.component);

          return (
            <Route
              key={body.name}
              path={body.route}
              exact={body.route === body.link}
              render={props => (
                <BodyToRender
                  {...props}
                  localState={this.state}
                  state={this.props.state}
                  setMagicScale={this.props.setMagicScale}
                  setMagicOpacity={this.props.setMagicOpacity}
                  boundHandleClickForBody={boundHandleClickForBody}
                />
              )}
            />
          );
        })}
        <Route component={NotFound} />
      </Switch>
    );
  }
}
