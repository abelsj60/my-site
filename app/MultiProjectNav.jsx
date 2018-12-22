import React from 'react';
import styled, { css } from 'styled-components';

import Mapper from './Mapper.jsx';
import SingleProjectNav from './SingleProjectNav.jsx';

const DesktopNavGroup = styled.section`
  flex-direction: column;
  margin-bottom: 5px;
  display: flex;

  ${props =>
    props.menu === 'active' &&
    css`
      display: block;
      max-width: 590px;
      margin: 0;
      margin-top: ${() => (props.padding === 'active' ? '15px' : '')};
      // margin-left: 25px;
      // margin-right: 25px;
    `};
`;
const Hed = styled.section`
  font-size: 1.5rem;
  margin-bottom: 9px;
  color: ${props => (props.active === 'active' ? 'deepskyblue' : 'white')};

  ${DesktopNavGroup}:hover & {
    color: lightgoldenrodyellow;
  }
`;

export default function MultiProjectNav(props) {
  const { isMenu } = props;
  const { indexForProjectData } = props.localState;
  const filteredData = props.isMenu
    ? props.data
    : props.data.filter((_, index) => {
      return props.localState.indexForProjectData !== index;
    });
  const menuIsActive = isMenu ? 'active' : '';

  return (
    <Mapper
      mapData={filteredData}
      render={(proj, idx) => {
        const { name, type } = proj.attributes.details;
        const isActiveProject = isMenu && indexForProjectData === idx;
        const hedIsActive = isActiveProject ? 'active' : '';
        const thumbnailNeedsTopPadding = idx > 0 ? 'active' : '';

        return (
          <DesktopNavGroup
            key={idx}
            menu={menuIsActive}
            padding={thumbnailNeedsTopPadding}
          >
            <Hed active={hedIsActive}>{`${name} | ${type}`}</Hed>
            <SingleProjectNav
              {...props}
              menu={isMenu}
              project={proj}
              isDesktop={true}
              activeProject={isActiveProject}
            />
          </DesktopNavGroup>
        );
      }}
    />
  );
}
