import React from 'react';
import styled from 'styled-components';

import Mapper from './Mapper.jsx';
import SingleProjectNav from './SingleProjectNav.jsx';

const DesktopNavGroup = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;
const Hed = styled.section`
  font-size: 1.5rem;
  margin-bottom: 7px;
  color: ${props => (props.active === 'active' ? 'deepskyblue' : 'white')};

  &:hover {
    color: lightgoldenrodyellow;
  }
`;

export default function MultiProjectNav(props) {
  const { isProjectMenu } = props;
  const { indexForProjectData } = props.localState;
  const filteredData = props.isProjectMenu
    ? props.data
    : props.data.filter((_, index) => {
      return props.localState.indexForProjectData !== index;
    });

  return (
    <Mapper
      mapData={filteredData}
      render={(proj, idx) => {
        const { name, type } = proj.attributes.details;
        const isActiveProject = isProjectMenu && indexForProjectData === idx;
        const hedIsActive = isActiveProject ? 'active' : '';

        return (
          <DesktopNavGroup key={idx}>
            <Hed active={hedIsActive}>{`${name} | ${type}`}</Hed>
            <SingleProjectNav
              {...props}
              project={proj}
              isCurrentProject={isActiveProject}
            />
          </DesktopNavGroup>
        );
      }}
    />
  );
}

// return filteredData.map((project, index) => (
//   <section id="nav-group" key={index}>
//     <h1
//       className={
//         isProjectMenu && indexForProjectData === index ? 'active' : ''
//       }
//     >
//       {`${project.attributes.details.name} | ${
//         project.attributes.details.type
//       }`}
//     </h1>
//     <SingleProjectNav
//       project={project}
//       localState={localState}
//       isCurrentProject={isProjectMenu ? indexForProjectData === index : false}
//     />
//   </section>
// ));
