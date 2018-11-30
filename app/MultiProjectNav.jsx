import React, { Component } from 'react';
import SingleProjectNav from './SingleProjectNav.jsx';

class MultiProjectNav extends Component {
  constructor(props) {
    super(props);
  }

  get projectsForDisplay() {
    return this.props.state.isProjectMenu
      ? this.props.data
      : this.props.data.filter(
        (_, index) => this.props.state.indexForProjectData !== index
      );
  }

  render() {
    return this.projectsForDisplay.map((project, index) => (
      <section id="nav-group" key={index}>
        <h1
          className={
            this.props.state.isProjectMenu &&
            this.props.state.indexForProjectData === index
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
          state={this.props.state}
          handleClick={this.props.handleClick}
          isCurrentProject={
            this.props.state.isProjectMenu
              ? this.props.state.indexForProjectData === index
              : false
          }
        />
      </section>
    ));
  }
}

export default MultiProjectNav;
