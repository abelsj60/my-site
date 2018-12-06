import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './Home.jsx';
import StoryLoader from './StoryLoader.jsx';
import ProjectLoader from './ProjectLoader.jsx';
import Journalism from './Journalism.jsx';
import About from './About.jsx';
import Menu from './Menu.jsx';
import Reverie from './Reverie.jsx';
import RestateRoute from './RestateRoute.jsx';
import NotFound from './NotFound.jsx';
import Location from './custom/Location';
import storyData from './data/the-story/index.js';
import { validateParam } from './helpers/utils.js';

import bodies from './data/bodies.md';

class Body extends Component {
  constructor(props) {
    super(props);

    const path = this.props.location.pathname;
    const referrer = path.split('/')[1];

    let indexForChapterData;

    /** Build initial return state.
     *
     * Renders are defined by path params. State is used
     * to return to current location when user moves
     * between sections or from section-to-menu.
     */

    switch (referrer) {
      case 'chapter':
        const location = new Location('/chapter/:title', props);

        if (location.pathIsJustRight) {
          const title = path.split('/')[2];
          indexForChapterData = validateParam('title', storyData, title);
        }
        break;
      default:
        console.log('BodyConstructor: Keep calm, carry on');
    }

    /** Return state */

    this.state = {
      indexForChapterData: indexForChapterData || 0
    };

    /** Method bindings */

    this.updateReturnState = this.updateReturnState.bind(this);
  }

  get bodyTypes() {
    return [
      { name: 'Home', body: Home },
      { name: 'StoryLoader', body: StoryLoader },
      { name: 'Projects', body: ProjectLoader },
      { name: 'Journalism', body: Journalism },
      { name: 'About', body: About },
      { name: 'Menu', body: Menu },
      { name: 'Reverie', body: Reverie },
      { name: 'RestateRoute', body: RestateRoute }
    ];
  }

  updateReturnState(newIndexForChapterData) {
    const referrer = this.props.location.pathname.split('/')[1];

    switch (referrer) {
      case 'chapter':
        this.setState({ indexForChapterData: newIndexForChapterData });
        break;
      default:
        console.log('updateReturnState: Keep calm, carry on');
    }
  }

  getBodyToRender(name) {
    return this.bodyTypes.filter(body => name === body.name)[0].body;
  }

  render() {
    console.log('Explore:', this.props);
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
                  updateReturnState={this.updateReturnState}
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

export default withRouter(Body);
