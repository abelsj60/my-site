import React, { Component } from 'react';
import SingleProjectNav from './SingleProjectNav.jsx';

class MultiProjectNav extends Component {
  constructor(props) {
    super(props);
  }

  get projectsForDisplay() {
    return this.props.isProjectMenu
      ? this.props.data
      : this.props.data.filter((_, index) => {
        return this.props.localState.indexForProjectData !== index;
      });
  }

  render() {
    return this.projectsForDisplay.map((project, index) => (
      <section id="nav-group" key={index}>
        <h1
          className={
            this.props.isProjectMenu &&
            this.props.localState.indexForProjectData === index
              ? 'active'
              : ''
          }
        >
          {`${project.attributes.details.name} | ${
            project.attributes.details.type
          }`}
        </h1>
        <SingleProjectNav
          project={project}
          localState={this.props.localState}
          isCurrentProject={
            this.props.isProjectMenu
              ? this.props.localState.indexForProjectData === index
              : false
          }
        />
      </section>
    ));
  }
}

export default MultiProjectNav;
