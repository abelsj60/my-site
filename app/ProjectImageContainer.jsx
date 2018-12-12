import React, { Component } from 'react';

class ProjectImageContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="main-image">
        <p>
          {
            this.props.project.attributes.details.captions[
              this.props.localState.indexForProjectPictures
            ]
          }
        </p>
        <img
          src={
            this.props.project.attributes.full[
              this.props.localState.indexForProjectPictures
            ]
          }
          alt="mainPic"
        />
      </section>
    );
  }
}

export default ProjectImageContainer;
