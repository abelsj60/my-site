import React, { Component } from 'react';
import ReactFitText from 'react-fittext';
import MultiProjectNav from './MultiProjectNav.jsx';
import SingleProjectNav from './SingleProjectNav.jsx';
import BlockQuote from './BlockQuote.jsx';
import ProjectDetails from './ProjectDetails.jsx';
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

  formatProjectName(name) {
    if (name === 'tmmnews') {
      return name.slice(0, 3).toUpperCase() + name.slice(3);
    }

    return name.slice(0, 1).toUpperCase() + name.slice(1);
  }

  render() {
    return (
      <main id="my-projects" className="">
        <ProjectDetails
          projectName={this.formatProjectName(this.projectData.name)}
          toggleDetails={this.props.toggleDetails}
          projectData={this.projectData}
          showProjectDetails={this.props.showProjectDetails}
        />
        <section id="desktop-nav" className="left">
          <MultiProjectNav
            projectData={projectData}
            formatProjectName={this.formatProjectName}
          />
        </section>
        <section id="project-images" className="right">
          <ReactFitText compressor={1} minFontSize={48}>
            <BlockQuote text={this.formatProjectName(this.projectData.name)} />
          </ReactFitText>
          <section id="images-container">
            <section className="project-image">
              <img
                src={this.projectData.full[this.props.projectImageIndex - 1]}
                alt="mainPic"
              />
            </section>
            <section id="thumbnails-main" className="project-thumbnails">
              <SingleProjectNav project={this.projectData} />
            </section>
            <section
              className="details-button"
              onClick={() => this.props.toggleDetails()}
            >
              <p>Details</p>
            </section>
          </section>
          <BlockQuote
            elementId="new-block"
            text={this.projectData.details.captions.filter(
              (caption, index) => index === this.props.projectImageIndex - 1
            )}
          />
        </section>
      </main>
    );
  }
}

export default Projects;
