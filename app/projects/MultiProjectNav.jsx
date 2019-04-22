import Mapper from '../shared/Mapper.jsx';
import ProjectNav from './ProjectNav.jsx';
import React from 'react';
import styled, { css } from 'styled-components';
import UnorderedList from '../primitives/UnorderedList.jsx';

const RestyledList = styled(UnorderedList)`
  height: 100%;
  margin-right: 25px;
  width: ${p => (!p.menu ? '327px' : undefined)};

  ${p => p.menu && css`
    display: block;
    margin-right: 0;
  `};
`;
const Graf = styled.p`
  font-size: ${p => p.theme.fontSizes.six};
  color: ${p => p.theme.colors.blue};
  margin-bottom: 5px;
  font-weight: 400;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    font-size: ${p => (p.menu && p.theme.fontSizes.twelve)};
  }
`;

export default function DesktopProjectNav(props) {
  const {
    appState,
    bodyState,
    data
  } = props;
  const {
    isMenu
  } = appState;

  // Must use bodyState because the '/menu' url doesn't
  // have the project and thumbnail number in it
  const indexForProjectData = bodyState.indexForProjectData;
  const finalData = data;

  return (
    <RestyledList
      menu={isMenu}
    >
      <Mapper
        mapData={finalData}
        render={
          (project, idx) => {
            const {
              projectName,
              type
            } = project.attributes;
            const lastGroup = idx === finalData.length - 1;

            return (
              <li
                key={idx}
              >
                <Graf
                  menu={isMenu}
                >
                  {`${projectName} | ${type}`}
                </Graf>
                <ProjectNav
                  {...props}
                  activeGroup={indexForProjectData === idx} // active group
                  lastGroup={lastGroup} // conditional CSS
                  project={project} // attributes
                />
              </li>
            );
          }
        }
      />
    </RestyledList>
  );
}
