import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SingleProjectNav from './SingleProjectNav.jsx';
import projectData from './data/projectData';
import { formatProjectName } from './helpers/utils.js';
import { splitPath } from './helpers/utils.js';

class MultiProjectNav extends Component {
  constructor(props) {
    super(props);
  }

  get location() {
    return splitPath(this.props);
  }

  get projectDataForDisplay() {
    return this.props.currentProject
      ? projectData.filter(
        project => project.name !== this.props.currentProject.name
      )
      : projectData;
  }

  addCssToShowActiveProjectName(name) {
    if (this.props.state.projectName === name) {
      return 'active';
    }
  }

  render() {
    return this.projectDataForDisplay.map((project, index) => (
      <section id="nav-group" key={index}>
        <h1
          className={
            this.location.includes('menu')
              ? this.addCssToShowActiveProjectName(project.name)
              : ''
          }
        >
          {formatProjectName(project.name)} | {project.details.type}
        </h1>
        <SingleProjectNav projectData={project} state={this.props.state} />
      </section>
    ));
  }
}

export default withRouter(MultiProjectNav);
