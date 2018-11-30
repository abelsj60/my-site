import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.jsx';
import StoryLoader from './StoryLoader.jsx';
import ProjectLoader from './ProjectLoader.jsx';
import Journalism from './Journalism.jsx';
import About from './About.jsx';
import Menu from './Menu.jsx';
import Reverie from './Reverie.jsx';
import NotFound from './NotFound.jsx';

import bodies from './data/bodies.md';

class Body extends Component {
  constructor(props) {
    super(props);
  }

  get bodyTypes() {
    return [
      { name: 'Home', body: Home },
      { name: 'StoryLoader', body: StoryLoader },
      { name: 'Projects', body: ProjectLoader },
      { name: 'Journalism', body: Journalism },
      { name: 'About', body: About },
      { name: 'Menu', body: Menu },
      { name: 'Reverie', body: Reverie }
    ];
  }

  getBodyToRender(name) {
    return this.bodyTypes.filter(body => name === body.name)[0].body;
  }

  render() {
    const state = this.props.state;
    return (
      <Switch>
        {bodies.attributes.routes.map(body => {
          const BodyToRender = this.getBodyToRender(body.component);

          return (
            <Route
              key={body.name}
              path={body.route}
              exact={body.route === body.link}
              render={props => <BodyToRender {...props} state={state} />}
            />
          );
        })}
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Body;
