import Mapper from '../shared/Mapper.jsx';
import ProjectNav from './ProjectNav.jsx';
import React from 'react';
import styled from 'styled-components';
import UnorderedList from '../primitives/UnorderedList.jsx';

const RestyledList = styled(UnorderedList)`
  height: 100%;
  // margin-right: 25px;
`;
const Graf = styled.p`
  font-size: ${p => p.theme.fontSizes.six};
  color: ${p => p.theme.colors.blue};
  margin-bottom: 13px;
  font-weight: 400;
`;

export default function DesktopProjectNav(props) {
  const {
    bodyState,
    data
  } = props;

  // Must use bodyState because the '/menu' url doesn't
  // have the project and thumbnail number in it
  const indexForProjectData = bodyState.indexForProjectData;
  const finalData = data;

  return (
    <RestyledList>
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
                <Graf>
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
