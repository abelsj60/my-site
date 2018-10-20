import React, { Component } from 'react';
import SingleProjectNav from './SingleProjectNav.jsx';
import ProjectImageContainer from './ProjectImageContainer.jsx';
import ProjectDescription from './ProjectDescription.jsx';
import projectData from './data/projectData';

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  get projectData() {
    return projectData.filter(
      project => project.name === this.props.state.projectName
    )[0];
  }

  get projectDescriptions() {
    return this.projectData.details;
  }

  get projectKeys() {
    return Object.keys(this.projectDescriptions);
  }

  render() {
    return (
      <main id="my-projects" className="">
        <h1>{this.projectData.details.name}</h1>
        <section id="project-container">
          <ProjectDescription
            projectKeys={this.projectKeys}
            projectDescriptions={this.projectDescriptions}
          />
          <section id="project-images">
            <SingleProjectNav projectData={this.projectData} />
            <ProjectImageContainer
              projectDescriptions={this.projectDescriptions}
              projectData={this.projectData}
              state={this.props.state}
            />
          </section>
        </section>
      </main>
    );
  }
}

export default Projects;
