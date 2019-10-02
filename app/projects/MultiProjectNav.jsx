import Mapper from '../shared/Mapper.jsx';
import ProjectNav from './ProjectNav.jsx';
import React from 'react';
import styled from 'styled-components';
import UnorderedList from '../primitives/UnorderedList.jsx';

const RestyledList = styled(UnorderedList)`
  height: 100%;
`;
const Type = styled.p`
  font-size: ${p => p.theme.fontSizes.three};
  color: ${p => p.theme.colors.pink};
  margin-bottom: 2px;
  font-style: italic;
`;
const Graf = styled.p`
  font-size: ${p => p.theme.fontSizes.ten};
  color: ${p => p.theme.colors.black};
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
              pitch,
              projectName,
              type
            } = mappedProject.attributes;

            return (
              <li
                key={idx}
              >
                <Type>
                  {type}
                </Type>
                <Graf>
                  {`${projectName} | ${pitch}`}
                </Graf>
                <ProjectNav
                  {...props}
                  mappedProject={mappedProject}
                  mappedProjectIndex={idx}
                />
              </li>
            );
          }
        }
      />
    </RestyledList>
  );
}
