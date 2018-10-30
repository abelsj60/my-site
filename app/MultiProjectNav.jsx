import React, { Component } from 'react';
import SingleProjectNav from './SingleProjectNav.jsx';
import projectData from './data/projectData';
import { formatProjectName } from './helpers/utils.js';

class MultiProjectNav extends Component {
  constructor(props) {
    super(props);
  }

  get projectDataForDisplay() {
    return this.props.currentProject
      ? projectData.filter(
        project => project.name !== this.props.currentProject.name
      )
      : projectData;
  }

  render() {
    return this.projectDataForDisplay.map((project, index) => (
      <section id="nav-group" key={index}>
        <h1>
          {formatProjectName(project.name)} | {project.details.type}
        </h1>
        <SingleProjectNav state={this.props.state} projectData={project} />
      </section>
    ));
  }
}

export default MultiProjectNav;
