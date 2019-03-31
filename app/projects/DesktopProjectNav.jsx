import Mapper from '../shared/Mapper.jsx';
import ProjectNav from './ProjectNav.jsx';
import React from 'react';
import styled, { css } from 'styled-components';
import UnorderedList from '../primitives/UnorderedList.jsx';

const RestyledList = styled(UnorderedList)`
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
    margin-bottom: 20px;
  }
`;
const Graf = styled.p`
  font-size: ${p => p.theme.fontSizes.six};
  color: ${p => p.theme.colors.blue};
  margin-bottom: 9px;
  font-weight: 400;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    font-size: ${p => (p.menu && p.theme.fontSizes.twelve)};
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
    <RestyledList menu={isMenu}>
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
                <Graf
                  menu={isMenu}
                  num={idx}
                >
                  {`${projectName} | ${type}`}
                </Graf>
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
    </RestyledList>
  );
}
