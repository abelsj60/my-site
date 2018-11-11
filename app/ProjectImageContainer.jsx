import React, { Component } from 'react';

class ProjectImageContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="main-image">
        <p>{this.props.projectDetails.captions[0]}</p>
        <img
          src={
            this.props.project.attributes.full[
              this.props.state.projectThumbnail - 1
            ]
          }
          alt="mainPic"
        />
      </section>
    );
  }
}

export default ProjectImageContainer;
