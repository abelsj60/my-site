import Mapper from '../shared/Mapper.jsx';
import ProjectNav from './ProjectNav.jsx';
import React from 'react';
import styled from 'styled-components';
import UnorderedList from '../primitives/UnorderedList.jsx';

const RestyledList = styled(UnorderedList)`
  height: 100%;
`;
const Graf = styled.p`
  font-size: ${p => p.theme.fontSizes.six};
  color: ${p => p.theme.colors.blue};
  margin-bottom: 13px;
  font-weight: 400;
`;

export default function DesktopProjectNav(props) {
  const { contentState } = props;
  const { allContentData } = contentState;

  return (
    <RestyledList>
      <Mapper
        mapData={allContentData}
        render={
          (mappedProject, idx) => {
            const {
              projectName,
              type
            } = mappedProject.attributes;

            return (
              <li
                key={idx}
              >
                <Graf>
                  {`${projectName} | ${type}`}
                </Graf>
                <ProjectNav
                  {...props}
                  mappedProjectIndex={idx}
                  mappedProject={mappedProject}
                />
              </li>
            );
          }
        }
      />
    </RestyledList>
  );
}
