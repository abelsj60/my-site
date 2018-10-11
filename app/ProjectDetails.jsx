import React, { Component } from 'react';

class ProjectDetails extends Component {
  constructor(props) {
    super(props);
  }

  toggleDetailsClass(state) {
    return !state ? '' : 'show-details';
  }

  render() {
    return (
      <section
        className={`project-details ${this.toggleDetailsClass(
          this.props.showProjectDetails
        )}`}
      >
        <h1> {this.props.projectName} </h1>
        <p className="project-description">Project</p>
        <p className="project-description">Type</p>
        <p>Answer</p>
        <p className="project-description">What I did</p>
        <p>Answer</p>
        <p className="project-description">Key technologies</p>
        <p>Answer</p>
        <p className="project-description">Description</p>
        <p>Answer</p>
        <p className="project-description">What you're looking at</p>
        <p>Answer</p>
        <section
          id="close-details-from-inside"
          onClick={() => this.props.toggleDetails()}
        >
          <p>Close</p>
        </section>
      </section>
    );
  }
}

export default ProjectDetails;
