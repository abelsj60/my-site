import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SingleProjectNav from './SingleProjectNav.jsx';
import ProjectImageContainer from './ProjectImageContainer.jsx';
import ProjectDescription from './ProjectDescription.jsx';
import MultiProjectNav from './MultiProjectNav.jsx';
import projects from './data/projects/index.js';
import { splitPath } from './helpers/utils.js';

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  get location() {
    return splitPath(this.props);
  }

  get project() {
    return projects.filter(
      project => project.attributes.name === this.props.state.projectName
    )[0];
  }

  get projectKeys() {
    return Object.keys(this.project.attributes.details);
  }

  render() {
    return (
      <main id="my-projects" className="">
        <section id="desktop-project-nav" className="left">
          <div id="content">
            <h1>My projects</h1>
            <h2>Technology projects for me, clients, and fun</h2>
            <MultiProjectNav
              state={this.props.state}
              currentProject={this.project}
            />
          </div>
        </section>
        <section id="active-project" className="right">
          <h1>{this.project.attributes.details.name}</h1>
          <section id="project-container">
            <ProjectDescription
              projectKeys={this.projectKeys}
              projectDetails={this.project.attributes.details}
            />
            <section id="project-images">
              <SingleProjectNav
                project={this.project}
                projectName={this.props.state.projectName}
              />
              <ProjectImageContainer
                state={this.props.state}
                project={this.project}
                projectDetails={this.project.attributes.details}
              />
            </section>
          </section>
        </section>
      </main>
    );
  }
}

export default withRouter(Projects);
