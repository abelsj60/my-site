import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router';
import Projects from './Projects.jsx';
import Menu from './Menu.jsx';
import MultiProjectNav from './MultiProjectNav.jsx';
import Location from './custom/Location.js';
import projectData from './data/projects/index.js';

export default class ProjectLoader extends Component {
  constructor(props) {
    super(props);

    const pathToMatch = '/projects/:projectName/:projectThumbnail';
    const location = new Location(pathToMatch, props);

    this.state = {
      pathToMatch,
      isNotFound: !location.pathIsJustRight,
      needsRedirect: location.needsRedirect
    };
  }

  componentDidUpdate(prevProps) {
    const location = new Location(
      this.state.pathToMatch,
      this.props,
      prevProps
    );

    if (location.needsRedirect) {
      const startRedirect = !this.state.needsRedirect;

      if (startRedirect) {
        this.setState({ needsRedirect: startRedirect });
      }
    } else if (location.isSwappingContent) {
      const newDataIndex = location.params.toIndex('projectName');
      const newPictureIndex = location.params.toIndex('projectThumbnail');

      if (
        typeof newDataIndex === 'number' &&
        typeof newPictureIndex === 'number'
      ) {
        this.props.boundHandleClickForBody(newDataIndex, newPictureIndex);
      }
    }
  }

  render() {
    const projectIndex = this.props.localState.indexForProjectData;
    return this.state.needsRedirect ? (
      <Redirect to={{ pathname: '/i', state: 'projects' }} />
    ) : this.state.isNotFound ? (
      <Redirect to="/not-found" />
    ) : (
      <Switch>
        <Route
          path="/projects/menu"
          render={() => (
            <Menu
              section="projects"
              link="/projects"
              text="Technology projects for me, clients, and fun"
            >
              <MultiProjectNav
                data={projectData}
                section="projects"
                isProjectMenu={true}
                projectIndex={projectIndex}
                localState={this.props.localState}
              />
            </Menu>
          )}
        />

        <Route
          path="/projects/:projectName/:projectThumbnail"
          render={({ match }) => (
            <Projects
              match={match}
              data={projectData}
              localState={this.props.localState}
            />
          )}
        />
      </Switch>
    );
  }
}
