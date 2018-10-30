import React, { Fragment, Component } from 'react';

class ProjectDescription extends Component {
  constructor(props) {
    super(props);
  }

  getKey(name) {
    return this.props.projectKeys.find(key => key === name);
  }

  formatKeyForDisplay(name) {
    const keyName = this.getKey(name);
    return keyName[0].toUpperCase() + keyName.slice(1);
  }

  render() {
    return (
      <Fragment>
        <p id="type">{this.props.projectDescriptions.type}</p>
        <h2>{this.formatKeyForDisplay('contribution')}</h2>
        <p>{this.props.projectDescriptions.contribution}</p>
        <h2>{this.formatKeyForDisplay('description')}</h2>
        <p>{this.props.projectDescriptions.description}</p>
      </Fragment>
    );
  }
}

export default ProjectDescription;
