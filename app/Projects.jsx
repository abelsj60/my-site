import React, { Component } from 'react';
import SingleProjectNav from './SingleProjectNav.jsx';
import ProjectImageContainer from './ProjectImageContainer.jsx';
import ProjectDescription from './ProjectDescription.jsx';
import MultiProjectNav from './MultiProjectNav.jsx';
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
        <section id="desktop-project-nav" className="left">
          <div id="content">
            <h1>My projects</h1>
            <h2>Technology projects for me, clients, and fun</h2>
            <MultiProjectNav currentProject={this.projectData} />
          </div>
        </section>
        <section id="active-project" className="right">
          <h1>{this.projectData.details.name}</h1>
          <section id="project-container">
            <ProjectDescription
              projectKeys={this.projectKeys}
              projectDescriptions={this.projectDescriptions}
            />
            <section id="project-images">
              <SingleProjectNav projectData={this.projectData} />
              <ProjectImageContainer
                state={this.props.state}
                projectData={this.projectData}
                projectDescriptions={this.projectDescriptions}
              />
            </section>
          </section>
        </section>
      </main>
    );
  }
}

export default Projects;
