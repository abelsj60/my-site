import React from 'react';

import SingleProjectNav from './SingleProjectNav.jsx';
import ProjectImageContainer from './ProjectImageContainer.jsx';
import ProjectDescription from './ProjectDescription.jsx';
import MultiProjectNav from './MultiProjectNav.jsx';

import Referrer from './custom/Referrer.js';
import Location from './custom/Location.js';

export default function Projects(props) {
  const { localState, data, projectIndex } = props;

  const r = new Referrer(props);
  const l = new Location(r.pathToMatch, props);

  const indexForProjectData = l.params.oneToIndex();
  const project = data[indexForProjectData];

  return (
    <main id="my-projects" className="">
      <section id="desktop-project-nav" className="left">
        <div id="content">
          <h1>My projects</h1>
          <h2>Technology projects for me, clients, and fun</h2>
          <MultiProjectNav
            section={'projects'}
            isProjectMenu={false}
            data={data}
            projectIndex={projectIndex}
            localState={localState}
          />
        </div>
      </section>
      <section id="active-project" className="right">
        <h1>{project.attributes.details.name}</h1>
        <section id="project-container">
          <ProjectDescription project={project} />
          <section id="project-images">
            <SingleProjectNav
              project={project}
              isCurrentProject={true}
              localState={localState}
            />
            <ProjectImageContainer project={project} localState={localState} />
          </section>
        </section>
      </section>
    </main>
  );
}
