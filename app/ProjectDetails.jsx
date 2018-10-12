import React, { Component } from 'react';

class ProjectDetails extends Component {
  constructor(props) {
    super(props);
  }

  toggleDetailsClass(state) {
    return !state ? '' : 'show-details';
  }

  render() {
    const projectData = this.props.projectData.details;
    console.log(projectData);

    return (
      <section
        className={`project-details ${this.toggleDetailsClass(
          this.props.showProjectDetails
        )}`}
      >
        <h1> {this.props.projectName} </h1>
        <p className="project-description">Type</p>
        <p>{projectData.type}</p>
        <p className="project-description">What I did</p>
        <p>{projectData.contribution}</p>
        <p className="project-description">Key technologies</p>
        <p>{projectData.technologies}</p>
        <p className="project-description">Description</p>
        <p>{projectData.description}</p>
        <section
          id="close-details-from-inside"
          onClick={() => this.props.toggleDetails()}
        >
          <p>CLOSE</p>
        </section>
      </section>
    );
  }
}

export default ProjectDetails;
