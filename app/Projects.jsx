import React, { Component } from 'react';
import ReactFitText from 'react-fittext';
import MultiProjectNav from './MultiProjectNav.jsx';
import SingleProjectNav from './SingleProjectNav.jsx';
import BlockQuote from './BlockQuote.jsx';
import ProjectDetails from './ProjectDetails.jsx';
import projectData from './helpers/projectData.js';

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  formatProjectName(name) {
    if (name === 'tmmnews') {
      return name.slice(0, 3).toUpperCase() + name.slice(3);
    } else {
      return name.slice(0, 1).toUpperCase() + name.slice(1);
    }
  }

  toggleDetailsClass(state) {
    return !state ? '' : 'show-details';
  }

  render() {
    const filteredProjectData = projectData.filter(
      project => project.name === this.props.projectName
    )[0];
    const projectName = filteredProjectData.name;
    const formattedProjectName = this.formatProjectName(
      filteredProjectData.name
    );
    const projectCaption = filteredProjectData.caption;
    const fullSizeProjectImages = filteredProjectData.full;
    const indexForFullSizeProjectImages = this.props.projectImageIndex;

    return (
      <main id="my-projects" className="">
        <ProjectDetails
          formatProjectName={this.formatProjectName}
          projectName={projectName}
          detailsClass={this.toggleDetailsClass(this.props.projectDetails)}
        />
        <section id="desktop-nav" className="left">
          <MultiProjectNav
            projectData={projectData.filter(
              project => project.name !== projectName
            )}
            formatProjectName={this.formatProjectName}
          />
        </section>
        <section id="project-images" className="right">
          <ReactFitText compressor={1} minFontSize={48}>
            <BlockQuote text={formattedProjectName} />
          </ReactFitText>
          <section id="images-container">
            <section className="project-image">
              <img
                src={fullSizeProjectImages[indexForFullSizeProjectImages - 1]}
                alt="mainPic"
              />
            </section>
            <section id="thumbnails-main" className="project-thumbnails">
              {<SingleProjectNav project={filteredProjectData} />}
            </section>
          </section>
          <BlockQuote elementId="new-block" text={projectCaption} />
        </section>
      </main>
    );
  }
}

export default Projects;
