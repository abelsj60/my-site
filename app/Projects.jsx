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
  overflow: hidden;

  @media (min-width: 848px) {
    flex-direction: row;
  }
`;
const Project = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  margin-bottom: 25px;
  margin-left: 24px;
  margin-right: 25px;
  overflow: auto;

  @media (min-width: 848px) {
    margin-top: 25px;
  }
`;
const Hed = styled.h1`
  color: #fd1172;
  font-size: 2.5rem;
  margin-top: 0px;
  margin-bottom: 4px;

  @media (min-width: 848px) {
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

  @media (min-width: 1048px) {
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
    margin-bottom: 25px;
    padding-right: 25px;
    width: 327px;
    color: white;
    border-right: 0.5px solid #6e7dab;
  }
`;
const OverflowContainer = styled.div`
  overflow: auto;
  padding-left: 1px;
`;

export default function Projects(props) {
  const { localState, data, projectIndex, overflowRef } = props;

  const r = new Referrer(props);
  const l = new Location(r.pathToMatch, props);

  const indexForProjectData = l.params.projectNameToIndex();
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
      <Project>
        <MenuSelector {...props} />
        <OverflowContainer ref={ref => (overflowRef.current = ref)}>
          <Hed>{name}</Hed>
          <section>
            <ProjectDescription project={project} />
            <ImageFrame>
              <SingleProjectNav
                project={project}
                activeProject={true}
                localState={localState}
              />
              <ProjectImageContainer
                project={project}
                localState={localState}
              />
            </ImageFrame>
          </section>
        </OverflowContainer>
      </Project>
    </ProjectContainer>
  );
}
