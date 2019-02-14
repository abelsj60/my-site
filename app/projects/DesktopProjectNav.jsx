import React from 'react';
import styled, { css } from 'styled-components';

import Hed from '../primitives/Hed.jsx';
import UnorderedList from '../primitives/UnorderedList.jsx';
import Mapper from '../shared/Mapper.jsx';
import ProjectNav from './ProjectNav.jsx';

const StyledUL = styled(UnorderedList)`
  height: 100%;
  overflow: auto;
  width: ${p => (!p.menu ? '327px' : '')};

  ${p =>
    p.menu &&
    css`
      display: block;
      max-width: 590px;
      margin: 0;
    `};
`;
const RestyledHed = styled(Hed)`
  font-size: ${p => (p.menu !== 'active' ? '1.4rem' : '1.6rem')};
`;

export default function DesktopProjectNav(props) {
  const { isMenu } = props.state;
  const { indexForProjectData } = props.localState;
  const filteredData = isMenu
    ? props.data
    : props.data.filter(
      (_, index) => props.localState.indexForProjectData !== index
    );
  const menuIsActive = isMenu;

  return (
    <StyledUL menu={menuIsActive}>
      <Mapper
        mapData={filteredData}
        render={(project, idx) => {
          const { name, type } = project.attributes.details;
          const isActiveProject = isMenu && indexForProjectData === idx;

          return (
            <li key={idx}>
              <RestyledHed
                normal
                color="blue"
                bottom="9"
                num={idx}
                menu={menuIsActive}
              >{`${name} | ${type}`}</RestyledHed>
              <ProjectNav
                {...props}
                num={idx}
                menu={menuIsActive}
                project={project}
                isDesktop={true}
                activeProject={isActiveProject}
              />
            </li>
          );
        }}
      />
    </StyledUL>
  );
}
