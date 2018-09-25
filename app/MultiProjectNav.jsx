import React, { Component } from 'react';
import SingleProjectNav from './SingleProjectNav.jsx';

class MultiProjectNav extends Component {
  constructor(props) {
    super(props);

    this.prepName = this.prepName.bind(this);
  }

  prepName(name) {
    // ~ja Needed b/c we're listing ALL projects, not just the active one

    if (name === 'tmmnews') {
      return name.slice(0, 3).toUpperCase() + name.slice(3);
    } else {
      return name.slice(0, 1).toUpperCase() + name.slice(1);
    }
  }

  render() {
    return this.props.projectData.map((project, index) => (
      <section id="nav-group" key={index}>
        <h1>
          {this.prepName(project.name)} | {project.caption}
        </h1>
        <nav className="project-thumbnails">
          <SingleProjectNav
            project={project}
            updateState={this.props.updateState}
          />
        </nav>
      </section>
    ));
  }
}

export default MultiProjectNav;
