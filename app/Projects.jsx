import React from 'react';
import styled from 'styled-components';

import Main from './Main.jsx';
import Right from './Right.jsx';
import Left from './Left.jsx';
import Overflow from './Overflow.jsx';
import MenuSelector from './MenuSelector.jsx';
import SingleProjectNav from './SingleProjectNav.jsx';
import ProjectImageContainer from './ProjectImageContainer.jsx';
import ProjectDescription from './ProjectDescription.jsx';
import DesktopProjectNav from './DesktopProjectNav.jsx';

import Referrer from './custom/Referrer.js';
import Location from './custom/Location.js';

const Hed = styled.h1`
  color: #fd1172;
  font-size: 2.5rem;
  margin-top: 0px;
  margin-bottom: 6px;

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

export default function Projects(props) {
  const { localState, data, projectIndex, overflowRef } = props;

  const r = new Referrer(props);
  const l = new Location(r.pathToMatch, props);

  const indexForProjectData = l.params.projectNameToIndex();
  const project = data[indexForProjectData];
  const { name } = project.attributes.details;

  return (
    <Main>
      <Left>
        <DesktopProjectNav
          data={data}
          section={'projects'}
          localState={localState}
          projectIndex={projectIndex}
        />
      </Left>
      <Right>
        <MenuSelector {...props} />
        <Overflow ref={ref => (overflowRef.current = ref)}>
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
        </Overflow>
      </Right>
    </Main>
  );
}
