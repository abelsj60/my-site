import React from 'react';
import SingleProjectNav from './SingleProjectNav.jsx';

export default function MultiProjectNav(props) {
  const { isProjectMenu, localState } = props;
  const { indexForProjectData } = props.localState;
  const filteredData = props.isProjectMenu
    ? props.data
    : props.data.filter((_, index) => {
      return props.localState.indexForProjectData !== index;
    });

  return filteredData.map((project, index) => (
    <section id="nav-group" key={index}>
      <h1
        className={
          isProjectMenu && indexForProjectData === index ? 'active' : ''
        }
      >
        {`${project.attributes.details.name} | ${
          project.attributes.details.type
        }`}
      </h1>
      <SingleProjectNav
        project={project}
        localState={localState}
        isCurrentProject={isProjectMenu ? indexForProjectData === index : false}
      />
    </section>
  ));
}
