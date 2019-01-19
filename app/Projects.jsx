import React from 'react';
import styled from 'styled-components';

import MenuSelector from './MenuSelector.jsx';
import SingleProjectNav from './SingleProjectNav.jsx';
import ProjectImageContainer from './ProjectImageContainer.jsx';
import ProjectDescription from './ProjectDescription.jsx';
import MultiProjectNav from './MultiProjectNav.jsx';

import Referrer from './custom/Referrer.js';
import Location from './custom/Location.js';

const ProjectContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: black;
  line-height: normal;
  // background-color: whitesmoke;

  @media (min-width: 848px) {
    flex-direction: row;
  }
`;
const Project = styled.section`
  flex: 2;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  margin-bottom: 25px;
  margin-left: 24px;
  margin-right: 25px;
  overflow: auto;
  padding-left: 1px;

  @media (min-width: 848px) {
    margin-top: 25px;
    margin-left: 0px;
  }
`;
const Hed = styled.h1`
  color: #fd1172;
  font-size: 2.5rem;
  margin-top: 0px;
  margin-bottom: 5px;

  @media (min-width: 838px) {
    margin-top: -4px;
  }
`;
const ImageFrame = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 10px;
  border: 0.5px solid #6e7dab;

  @media (min-width: 672px) {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }

  @media (min-width: 848px) {
    flex-direction: column;
  }

  @media (min-width: 1072px) {
    flex-direction: row-reverse;
  }
`;
const ProjectSelector = styled.nav`
  display: none;

  @media (min-width: 848px) {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    margin-left: 25px;
    margin-right: 24px;
    margin-bottom: 25px;
    padding-right: 25px;
    max-width: 20%;
    min-width: 327px;
    color: white;
    border-right: 0.5px solid #6e7dab;
  }
`;

export default function Projects(props) {
  const { localState, data, projectIndex } = props;

  const r = new Referrer(props);
  const l = new Location(r.pathToMatch, props);

  const indexForProjectData = l.params.oneToIndex();
  const project = data[indexForProjectData];
  const { name } = project.attributes.details;

  return (
    <ProjectContainer>
      <ProjectSelector>
        <MultiProjectNav
          data={data}
          section={'projects'}
          localState={localState}
          projectIndex={projectIndex}
        />
      </ProjectSelector>
      <MenuSelector
        link={{
          hash: undefined,
          state: 'menu',
          pathname: '/projects/menu'
        }}
        text={'Menu'}
      />
      <Project>
        <Hed>{name}</Hed>
        <section>
          <ProjectDescription project={project} />
          <ImageFrame>
            <SingleProjectNav
              project={project}
              activeProject={true}
              localState={localState}
            />
            <ProjectImageContainer project={project} localState={localState} />
          </ImageFrame>
        </section>
      </Project>
    </ProjectContainer>
  );
}

// <Hed>My projects</Hed>
// <Blurb>{text}</Blurb>

// const Blurb = styled.p`
//   color: white;
//   font-style: italic;
//   padding-bottom: 7px;
//   margin-top: 0px;
//   margin-bottom: 10px;
//   border-bottom: white dotted 0.5px;
// `;

// <ImageFrame>
//   <SingleProjectNav
//     project={project}
//     activeProject={true}
//     localState={localState}
//   />
//   <ProjectImageContainer project={project} localState={localState} />
// </ImageFrame>
