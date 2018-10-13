import React, { Component } from 'react';
import SingleProjectNav from './SingleProjectNav.jsx';

class MultiProjectNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.projectData.map((project, index) => (
      <section id="nav-group" key={index}>
        <h1>
          {this.props.formatProjectName(project.name)} | {project.details.type}
        </h1>
        <nav className="project-thumbnails">
          <SingleProjectNav project={project} />
        </nav>
      </section>
    ));
  }
}

export default MultiProjectNav;
