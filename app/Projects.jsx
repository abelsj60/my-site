import React, { Component } from 'react';
import SingleProjectNav from './SingleProjectNav.jsx';
import ProjectImageContainer from './ProjectImageContainer.jsx';
import ProjectDescription from './ProjectDescription.jsx';
import MultiProjectNav from './MultiProjectNav.jsx';
import { normalize } from 'path';

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;
    const project = data.find(p => {
      return (
        normalize(p.attributes.name) === this.props.match.params.projectName
      );
    });
    const projectIndex = data.findIndex(p => {
      return (
        normalize(p.attributes.name) === this.props.match.params.projectName
      );
    });

    return (
      <main id="my-projects" className="">
        <section id="desktop-project-nav" className="left">
          <div id="content">
            <h1>My projects</h1>
            <h2>Technology projects for me, clients, and fun</h2>
            <MultiProjectNav
              section={'projects'}
              isProjectMenu={false}
              data={this.props.data}
              projectIndex={projectIndex}
              localState={this.props.localState}
            />
          </div>
        </section>
        <section id="active-project" className="right">
          <h1>{project.attributes.details.name}</h1>
          <section id="project-container">
            <ProjectDescription project={project} />
            <section id="project-images">
              <SingleProjectNav
                project={project}
                isCurrentProject={true}
                localState={this.props.localState}
              />
              <ProjectImageContainer
                project={project}
                localState={this.props.localState}
              />
            </section>
          </section>
        </section>
      </main>
    );
  }
}

export default Projects;
