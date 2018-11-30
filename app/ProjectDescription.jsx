import React, { Fragment, Component } from 'react';

class ProjectDescription extends Component {
  constructor(props) {
    super(props);
  }

  formatKeyForDisplay(name, data) {
    const key = data.find(k => k === name);
    return key[0].toUpperCase() + key.slice(1);
  }

  render() {
    const project = this.props.project;
    const projectKeys = Object.keys(this.props.project.attributes.details);

    return (
      <Fragment>
        <p id="type">{project.attributes.details.type}</p>
        <h2>{this.formatKeyForDisplay('contribution', projectKeys)}</h2>
        <p>{project.attributes.details.contribution}</p>
        <h2>{this.formatKeyForDisplay('description', projectKeys)}</h2>
        <p>{project.attributes.details.description}</p>
      </Fragment>
    );
  }
}

export default ProjectDescription;
