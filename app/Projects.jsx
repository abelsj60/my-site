import React, { Component } from 'react';
import SingleProjectNav from './SingleProjectNav.jsx';
import ProjectImageContainer from './ProjectImageContainer.jsx';
import ProjectDescription from './ProjectDescription.jsx';
import MultiProjectNav from './MultiProjectNav.jsx';

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const project = this.props.data[this.props.state.indexForProjectData];

    return (
      <main id="my-projects" className="">
        <section id="desktop-project-nav" className="left">
          <div id="content">
            <h1>My projects</h1>
            <h2>Technology projects for me, clients, and fun</h2>
            <MultiProjectNav
              section={'projects'}
              data={this.props.data}
              state={this.props.state}
              handleClick={this.props.handleClick}
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
                state={this.props.state}
                handleClick={this.props.handleClick}
              />
              <ProjectImageContainer
                project={project}
                state={this.props.state}
              />
            </section>
          </section>
        </section>
      </main>
    );
  }
}

export default Projects;
