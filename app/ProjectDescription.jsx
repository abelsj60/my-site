import React, { Fragment, Component } from 'react';

class ProjectDescription extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <p id="type">{this.props.projectDescriptions.type}</p>
        <h2>
          {this.props.projectKeys[2][0].toUpperCase() +
            this.props.projectKeys[2].slice(1)}
        </h2>
        <p>{this.props.projectDescriptions.contribution}</p>
        <h2>
          {this.props.projectKeys[5][0].toUpperCase() +
            this.props.projectKeys[5].slice(1)}
        </h2>
        <p>{this.props.projectDescriptions.description}</p>
      </Fragment>
    );
  }
}

export default ProjectDescription;
