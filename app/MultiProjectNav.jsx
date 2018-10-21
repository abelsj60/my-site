import React, { Component } from 'react';
import SingleProjectNav from './SingleProjectNav.jsx';
import projectData from './data/projectData';

class MultiProjectNav extends Component {
  constructor(props) {
    super(props);
  }

  get inactiveProjects() {
    return projectData.filter(
      project => project.name !== this.props.currentProject.name
    );
  }

  formatProjectName(name) {
    if (name === 'tmmnews') {
      return name.slice(0, 3).toUpperCase() + name.slice(3);
    } else {
      return name.slice(0, 1).toUpperCase() + name.slice(1);
    }
  }

  render() {
    return this.inactiveProjects.map((project, index) => (
      <section id="nav-group" key={index}>
        <h1>
          {this.formatProjectName(project.name)} | {project.details.type}
        </h1>
        <SingleProjectNav projectData={project} />
      </section>
    ));
  }
}

export default MultiProjectNav;
