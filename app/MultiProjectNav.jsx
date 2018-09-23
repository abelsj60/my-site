import React, { Component } from 'react';
import SingleProjectNav from './SingleProjectNav.jsx';

class MultiProjectNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.projectData.map((project, index) => (
      <div id="main-nav-group" key={index}>
        <h1>
          {this.props.prepName(project.name)} | {project.caption}
        </h1>
        <section className="project-thumbnails">
          <SingleProjectNav
            thumbnails={project.thumbnails}
            projName={project.name}
            updatePicIndex={this.props.updatePicIndex}
          />
        </section>
      </div>
    ));
  }
}

export default MultiProjectNav;
