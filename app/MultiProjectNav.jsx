import React from 'react';
import styled, { css } from 'styled-components';

import Mapper from './Mapper.jsx';
import SingleProjectNav from './SingleProjectNav.jsx';

const DesktopNavGroup = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  padding: 0px;
  list-style-type: none;

  ${props =>
    props.menu === 'active' &&
    css`
      display: block;
      max-width: 590px;
      margin: 0;
    `};
`;
const ProjectGroup = styled.li``;
const Hed = styled.section`
  font-size: ${props => (props.menu !== 'active' ? '1.4rem' : '1.6rem')};
  // margin-top: ${props => (props.num !== 0 ? '15px' : '')};
  margin-bottom: 9px;
  color: #6e7dab;
  // color: ${props => (props.active === 'active' ? '#6E7DAB' : 'black')};

  // ${ProjectGroup}:hover & {
  //   color: #FD1172;
  // }
`;

export default function MultiProjectNav(props) {
  const { isMenu } = props;
  const { indexForProjectData } = props.localState;
  const filteredData = props.isMenu
    ? props.data
    : props.data.filter(
      (_, index) => props.localState.indexForProjectData !== index
    );
  const menuIsActive = isMenu ? 'active' : '';

  return (
    <DesktopNavGroup menu={menuIsActive}>
      <Mapper
        mapData={filteredData}
        render={(project, idx) => {
          const { name, type } = project.attributes.details;
          const isActiveProject = isMenu && indexForProjectData === idx;
          const hedIsActive = isActiveProject ? 'active' : '';

          return (
            <ProjectGroup key={idx}>
              <Hed
                num={idx}
                menu={menuIsActive}
                active={hedIsActive}
              >{`${name} | ${type}`}</Hed>
              <SingleProjectNav
                {...props}
                num={idx}
                menu={menuIsActive}
                project={project}
                isDesktop={true}
                activeProject={isActiveProject}
              />
            </ProjectGroup>
          );
        }}
      />
    </DesktopNavGroup>
  );
}
