import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SingleProjectNav from './SingleProjectNav.jsx';
import projects from './data/projects/index.js';
import { formatProjectName } from './helpers/utils.js';
import { splitPath } from './helpers/utils.js';

class MultiProjectNav extends Component {
  constructor(props) {
    super(props);
  }

  get location() {
    return splitPath(this.props);
  }

  get projectsForDisplay() {
    return this.props.currentProject
      ? projects.filter(
        project =>
          project.attributes.name !==
            this.props.currentProject.attributes.name
      )
      : projects;
  }

  addCssToShowActiveProjectName(name) {
    if (this.props.state.projectName === name) {
      return 'active';
    }
  }

  render() {
    return this.projectsForDisplay.map((project, index) => (
      <section id="nav-group" key={index}>
        <h1
          className={
            this.location.includes('menu')
              ? this.addCssToShowActiveProjectName(project.attributes.name)
              : ''
          }
        >
          {formatProjectName(project.attributes.name)} |{' '}
          {project.attributes.details.type}
        </h1>
        <SingleProjectNav project={project} state={this.props.state} />
      </section>
    ));
  }
}

export default withRouter(MultiProjectNav);
