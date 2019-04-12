import Mapper from '../shared/Mapper.jsx';
import React from 'react';
import styled, { css } from 'styled-components';
import StyledLink from '../primitives/StyledLink.jsx';
import UnorderedList from '../primitives/UnorderedList.jsx';

const Group = styled(UnorderedList)`
  display: flex;
  margin: 0px;
  padding: 0px 0px ${p => !p.menu ? '0px' : '10px'} 0px;
  list-style-type: none;
  margin-bottom: ${p => !p.menu ? '15px' : undefined};

  ${p => p.menu && css`
    margin-bottom: ${p.num !== 2 ? '20px' : undefined};
    padding-bottom: 0;
    max-width: 100%;
  `};
`;
const Item = styled.li`
  margin-right: ${p => (p.padding ? '5px' : undefined)};

  &:first-child {
    margin-left: ${p => (!p.isProjectPage ? '0px' : undefined)};
  }
`;
const RestyledLink = styled(StyledLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 0;
  position: relative;
`;
const Image = styled.img`
  flex: 1;
  min-width: 0;
  max-width: 100%;
  vertical-align: bottom;
`;
const Highlighter = styled.div`
  width: 100%;
  height: 4px;
  bottom: 0px;
  left: 0px;
  position: absolute;
  background-color: ${p => p.theme.colors.yellow};
`;

export default function ProjectNav(props) {
  const {
    appState,
    indexForProjectPics,
    isActive,
    isProjectPage,
    num,
    project
  } = props;
  const {
    projectName,
    projectThumbnail
  } = project.attributes;
  let isMenu;

  if (appState) {
    isMenu = appState.isMenu;
  }

  return (
    <Group
      isProjectPage={isProjectPage}
      menu={isMenu}
      num={num}
    >
      <Mapper
        mapData={projectThumbnail}
        render={
          (thumb, idx) => {
            const padding = idx < 2;
            const thumbnailNumber = idx + 1;
            let highlightActiveThumbnail;

            if (
              isMenu
                && isActive
                && indexForProjectPics === idx
            ) {
              highlightActiveThumbnail = true;
            }

            return (
              <Item
                key={idx}
                isProjectPage={isProjectPage}
                padding={padding}
              >
                <RestyledLink
                  to={`/projects/${
                    projectName.toLowerCase()
                  }/${thumbnailNumber}`}
                >
                  <Image
                    alt={`Thumbnail ${thumbnailNumber}`}
                    src={thumb}
                  />
                  {highlightActiveThumbnail && <Highlighter />}
                </RestyledLink>
              </Item>
            );
          }
        }
      />
    </Group>
  );
}
