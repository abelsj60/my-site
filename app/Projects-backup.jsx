import React, { Component } from 'react';
// import ReactFitText from 'react-fittext';
// import MultiProjectNav from './MultiProjectNav.jsx';
import SingleProjectNav from './SingleProjectNav.jsx';
// import BlockQuote from './BlockQuote.jsx';
// import ProjectDetails from './ProjectDetails.jsx';
import projectData from './data/projectData';

class ProjectsBackup extends Component {
  constructor(props) {
    super(props);
  }

  get projectData() {
    return projectData.filter(
      project => project.name === this.props.projectName
    )[0];
  }

  get projectDescriptions() {
    return this.projectData.details;
  }

  get projectDescriptionKeys() {
    return Object.keys(this.projectDescriptions);
  }

  render() {
    return (
      <main id="my-projects" className="">
        <h1 id="project-title">{this.projectData.details.name}</h1>
        <section id="project-content-container">
          <p id="project-description">{this.projectData.details.type}</p>
          <section id="project-discussion">
            <h2>
              {this.projectDescriptionKeys[2][0].toUpperCase() +
                this.projectDescriptionKeys[2].slice(1)}
            </h2>
            <p>{this.projectDescriptions.contribution}</p>
            <h2>
              {this.projectDescriptionKeys[5][0].toUpperCase() +
                this.projectDescriptionKeys[5].slice(1)}
            </h2>
            <p>{this.projectDescriptions.description}</p>
          </section>
          <section id="project-images">
            <section id="project-image-nav">
              <SingleProjectNav project={this.projectData} />
            </section>
            <section id="project-image-container">
              <p id="project-image-caption">
                {this.projectDescriptions.captions[0]}
              </p>
              <img
                id="project-image-main-pic"
                src={this.projectData.full[this.props.projectImageIndex - 1]}
                alt="mainPic"
              />
            </section>
          </section>
        </section>
      </main>
    );
  }
}

export default ProjectsBackup;
