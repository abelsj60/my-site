import React, { Fragment, Component } from 'react';

class ProjectDescription extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <p id="type">{this.props.type}</p>
        <h2>{this.props.contributionLabel}</h2>
        <p>{this.props.contribution}</p>
        <h2>{this.props.descriptionLabel}</h2>
        <p>{this.props.description}</p>
      </Fragment>
    );
  }
}

export default ProjectDescription;
