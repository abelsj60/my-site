import React, { Component } from 'react';

class ProjectImageContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="main-image">
        <p>{this.props.projectDescriptions.captions[0]}</p>
        <img
          src={
            this.props.projectData.full[this.props.state.projectThumbnail - 1]
          }
          alt="mainPic"
        />
      </section>
    );
  }
}

export default ProjectImageContainer;
