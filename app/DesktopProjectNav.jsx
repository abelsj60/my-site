import React from 'react';
import styled, { css } from 'styled-components';

import UnorderedList from './UnorderedList.jsx';
import Mapper from './Mapper.jsx';
import SingleProjectNav from './SingleProjectNav.jsx';

const StyledUL = styled(UnorderedList)`
  height: 100%;
  overflow: auto;
  width: ${p => (p.menu !== 'active' ? '327px' : '')};

  ${p =>
    p.menu === 'active' &&
    css`
      display: block;
      max-width: 590px;
      margin: 0;
    `};
`;
const HedAndNav = styled.li``;
const Hed = styled.section`
  font-size: ${p => (p.menu !== 'active' ? '1.4rem' : '1.6rem')};
  margin-bottom: 9px;
  color: #6e7dab;
`;

export default function DesktopProjectNav(props) {
  const { isMenu } = props;
  const { indexForProjectData } = props.localState;
  const filteredData = props.isMenu
    ? props.data
    : props.data.filter(
      (_, index) => props.localState.indexForProjectData !== index
    );
  const menuIsActive = isMenu ? 'active' : '';

  return (
    <StyledUL menu={menuIsActive}>
      <Mapper
        mapData={filteredData}
        render={(project, idx) => {
          const { name, type } = project.attributes.details;
          const isActiveProject = isMenu && indexForProjectData === idx;
          const hedIsActive = isActiveProject ? 'active' : '';

          return (
            <HedAndNav key={idx}>
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
            </HedAndNav>
          );
        }}
      />
    </StyledUL>
  );
}
