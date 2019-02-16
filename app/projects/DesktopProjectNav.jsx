import React from 'react';
import styled, { css } from 'styled-components';

import Hed from '../primitives/Hed.jsx';
import UnorderedList from '../primitives/UnorderedList.jsx';
import Mapper from '../shared/Mapper.jsx';
import ProjectNav from './ProjectNav.jsx';

const StyledUL = styled(UnorderedList)`
  height: 100%;
  overflow: auto;
  width: ${p => (!p.menu ? '327px' : undefined)};

  ${p =>
    p.menu &&
    css`
      display: block;
      max-width: 590px;
      margin: 0;
    `};
`;
const RestyledHed = styled(Hed)`
  font-size: ${p => (!p.menu ? '1.4rem' : '1.6rem')};
`;

export default function DesktopProjectNav(props) {
  const { params, appState, bodyState, location, data } = props;
  const { isMenu } = appState;

  let indexForProjectData;
  let indexForProjectPics;
  let finalData;

  if (location.pathname.split('/')[2] !== 'menu') {
    indexForProjectData = params.projectNameToIndex();
    indexForProjectPics = params.projectThumbnailToIndex();
    finalData = data.filter((_, index) => indexForProjectData !== index);
  } else {
    indexForProjectData = bodyState.indexForProjectData;
    indexForProjectPics = bodyState.indexForProjectPics;
    finalData = data;
  }

  return (
    <StyledUL menu={isMenu}>
      <Mapper
        mapData={finalData}
        render={(project, idx) => {
          const { name, type } = project.attributes.details;

          return (
            <li key={idx}>
              <RestyledHed
                normal
                color="blue"
                bottom="9"
                num={idx}
                menu={isMenu}
              >{`${name} | ${type}`}</RestyledHed>
              <ProjectNav
                {...props}
                num={idx}
                project={project}
                isActive={indexForProjectData === idx}
                indexForProjectPics={indexForProjectPics}
              />
            </li>
          );
        }}
      />
    </StyledUL>
  );
}
