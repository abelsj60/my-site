import Graf from '../primitives/Graf.jsx';
import Mapper from '../shared/Mapper.jsx';
import ProjectNav from './ProjectNav.jsx';
import React from 'react';
import styled, { css } from 'styled-components';
import UnorderedList from '../primitives/UnorderedList.jsx';

const StyledUL = styled(UnorderedList)`
  height: 100%;
  overflow: auto;
  margin-right: 25px;
  width: ${p => (!p.menu ? '327px' : undefined)};

  ${p => p.menu && css`
    display: block;
    max-width: 590px;
    margin-right: 0;
  `};
`;
const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
const RestyledGraf = styled(Graf)`
  font-size: ${p => p.theme.fontSizes.desktopProjectHed};

  @media (min-width: 390px) {
    font-size: ${p => (p.menu ? '1.6rem' : '')};
  }
`;

export default function DesktopProjectNav(props) {
  const {
    appState,
    bodyState,
    data,
    location,
    params
  } = props;
  const {
    isMenu
  } = appState;

  let indexForProjectData;
  let indexForProjectPics;
  let finalData;

  if (location.pathname.split('/')[2] !== 'menu') {
    indexForProjectData = params.projectNameToIndex();
    indexForProjectPics = params.projectThumbnailToIndex();
    finalData = data.filter(
      (_, index) => indexForProjectData !== index
    );
  } else {
    indexForProjectData = bodyState.indexForProjectData;
    indexForProjectPics = bodyState.indexForProjectPics;
    finalData = data;
  }

  return (
    <StyledUL menu={isMenu}>
      <Mapper
        mapData={finalData}
        render={
          (project, idx) => {
            const {
              projectName,
              type
            } = project.attributes;

            return (
              <ListItem key={idx}>
                <RestyledGraf
                  bottom="9"
                  color="blue"
                  weight="400"
                  menu={isMenu}
                  num={idx}
                >
                  {`${projectName} | ${type}`}
                </RestyledGraf>
                <ProjectNav
                  {...props}
                  isActive={indexForProjectData === idx}
                  indexForProjectPics={indexForProjectPics}
                  num={idx}
                  project={project}
                />
              </ListItem>
            );
          }
        }
      />
    </StyledUL>
  );
}
