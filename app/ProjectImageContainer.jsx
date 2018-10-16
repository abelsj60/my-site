import React, { Component } from 'react';

class ProjectImageContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="main-image">
        <p>{this.props.caption}</p>
        <img src={this.props.fullSizeImage} alt="mainPic" />
      </section>
    );
  }
}

export default ProjectImageContainer;
