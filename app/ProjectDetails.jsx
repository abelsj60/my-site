import React, { Component } from 'react';

class ProjectDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className={`project-details ${this.props.detailsClass}`}>
        <h1> {this.props.formatProjectName(this.props.projectName)} </h1>
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
      </section>
    );
  }
}

export default ProjectDetails;
