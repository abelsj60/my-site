import React from 'react';
import styled from 'styled-components';

import SingleProjectNav from './SingleProjectNav.jsx';
import ProjectImageContainer from './ProjectImageContainer.jsx';
import ProjectDescription from './ProjectDescription.jsx';
import MultiProjectNav from './MultiProjectNav.jsx';

import Referrer from './custom/Referrer.js';
import Location from './custom/Location.js';

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: black;
  line-height: normal;

  @media (min-width: 848px) {
    flex-direction: row;
  }
`;
const Project = styled.section`
  flex: 2;
  display: flex;
  flex-direction: column;
  margin: 25px;
  overflow: auto;

  @media (min-width: 848px) {
    margin-left: 0;
  }
`;
const Hed = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;
const Images = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 10px;
  border: lightgrey dotted 0.5px;

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
const DPSelector = styled.section`
  display: none;

  @media (min-width: 848px) {
    display: flex;
    flex-direction: column;
    margin: 25px;
    padding: 25px;
    max-width: 20%;
    min-width: 327px;
    background-color: #6100f2;
    background-image: url('https://www.transparenttextures.com/patterns/debut-light.png');
    color: white;
  }
`;
// const DPSHed = styled.h1`
//   font-size: 2.5rem;
//   margin-bottom: 10px;
// `;
const DPSDescripton = styled.p`
  color: white;
  font-style: italic;
  padding-bottom: 7px;
  margin-bottom: 10px;
  border-bottom: white dotted 0.5px;
`;

export default function Projects(props) {
  const { localState, data, projectIndex } = props;

  const r = new Referrer(props);
  const l = new Location(r.pathToMatch, props);

  const indexForProjectData = l.params.oneToIndex();
  const project = data[indexForProjectData];
  const { name } = project.attributes.details;

  return (
    <Main>
      <DPSelector>
        <Hed>My projects</Hed>
        <DPSDescripton>{props.text}</DPSDescripton>
        <MultiProjectNav
          section={'projects'}
          isProjectMenu={false}
          data={data}
          projectIndex={projectIndex}
          localState={localState}
        />
      </DPSelector>
      <Project>
        <Hed>{name}</Hed>
        <ProjectDescription project={project} />
        <Images>
          <SingleProjectNav
            project={project}
            isCurrentProject={true}
            localState={localState}
          />
          <ProjectImageContainer project={project} localState={localState} />
        </Images>
      </Project>
    </Main>
  );
}

// return (
//   <Main id="my-projects" className="">
//     <DesktopProjectSelector className="left">
//       <div id="content">
//         <h1>My projects</h1>
//         <h2>{props.text}</h2>
//         <MultiProjectNav
//           section={'projects'}
//           isProjectMenu={false}
//           data={data}
//           projectIndex={projectIndex}
//           localState={localState}
//         />
//       </div>
//     </DesktopProjectSelector>
//     <section id="active-project" className="right">
//       <h1>{project.attributes.details.name}</h1>
//       <section id="project-container">
//         <ProjectDescription project={project} />
//         <section id="project-images">
//           <SingleProjectNav
//             project={project}
//             isCurrentProject={true}
//             localState={localState}
//           />
//           <ProjectImageContainer project={project} localState={localState} />
//         </section>
//       </section>
//     </section>
//   </Main>
// );
