import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home.jsx';
import TheStory from './TheStory.jsx';
import Projects from './Projects.jsx';
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

  get components() {
    return [
      { name: 'Home', value: Home },
      { name: 'TheStory', value: TheStory },
      { name: 'Projects', value: Projects },
      { name: 'Journalism', value: Journalism },
      { name: 'About', value: About },
      { name: 'Menu', value: Menu },
      { name: 'Reverie', value: Reverie }
    ];
  }

  getBodyToRender(name) {
    return this.components.filter(component => name === component.name)[0]
      .value;
  }

  render() {
    return (
      <Switch>
        {bodies.attributes.routes.map(body => {
          const BodyToRender = this.getBodyToRender(body.componentName);
          return (
            <Route
              key={body.name}
              exact={body.link === body.route}
              path={body.route}
              render={({ match }) => (
                <BodyToRender match={match} state={this.props.state} />
              )}
            />
          );
        })}

        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Body;
