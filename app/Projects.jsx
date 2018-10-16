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
      project => project.name === this.props.projectName
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
            contributionLabel={
              this.projectKeys[2][0].toUpperCase() +
              this.projectKeys[2].slice(1)
            }
            descriptionLabel={
              this.projectKeys[5][0].toUpperCase() +
              this.projectKeys[5].slice(1)
            }
            projectKeys={this.projectKeys}
            type={this.projectDescriptions.type}
            description={this.projectDescriptions.description}
            contribution={this.projectDescriptions.contribution}
          />
          <section id="project-images">
            <SingleProjectNav project={this.projectData} />
            <ProjectImageContainer
              caption={this.projectDescriptions.captions[0]}
              fullSizeImage={
                this.projectData.full[this.props.projectThumbnail - 1]
              }
            />
          </section>
        </section>
      </main>
    );
  }
}

export default Projects;
