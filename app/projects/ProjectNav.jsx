import Mapper from '../shared/Mapper.jsx';
import React from 'react';
import styled, { css } from 'styled-components';
import StyledLink from '../primitives/StyledLink.jsx';
import UnorderedList from '../primitives/UnorderedList.jsx';
import {
  isIE
} from 'react-device-detect';

const Group = styled(UnorderedList)`
  max-width: 150px;
  display: flex; // See note above
  ${isIE && 'flex-shrink: 0;'} // Ensures height is true on IE (empty space on top/bottom otherwise)

${p => p.menu && css`
    margin-bottom: ${!p.lastGroup ? '30px' : undefined};
    max-width: 100%;
  `};
`;
const ListItem = styled.li`
  margin-right: ${p => (!p.lastItem ? '20px' : undefined)}; // 6px
  ${p => isIE && p.lastItem ? 'flex-shrink: 1.0275;' : ''} // Accounts for no { padding: 6px } on last image in IE 11

  &:first-child {
    margin-left: ${p => (!p.isProjectPage ? '0px' : undefined)};
  }
`;
const RestyledLink = styled(StyledLink)`
  border: 1px solid #b9dff3;
  display: block; // Ensures proper placement of images wrapped by <a> in Safari 10, per CSS Tricks
  position: relative; // Positions <Highlighter />
`;
const Image = styled.img`
  width: 100%;
  max-width: 100%;
  vertical-align: top;
  align-self: center; // Default is 'stretch', no good!
`;
const Highlighter = styled.div`
  width: 100%;
  height: ${p => p.isProjectPage ? '100%' : '4px'};
  left: 0px;
  bottom: 0px;
  position: absolute;
  background-color: ${p => p.isProjectPage ? 'rgba(115,192,232,0.2)' : p.theme.colors.yellow};
`;

export default function ProjectNav(props) {
  const {
    activeGroup,
    appState,
    bodyState,
    lastGroup,
    project
  } = props;
  const {
    projectName,
    projectThumbnail
  } = project.attributes;
  const indexForProjectPics = bodyState.indexForProjectPics;
  const isProjectPage = activeGroup === undefined;
  const isMenu = appState.isMenu;

  return (
    <Group
      isProjectPage={isProjectPage}
      lastGroup={lastGroup}
      menu={isMenu}
    >
      <Mapper
        mapData={projectThumbnail}
        render={
          (thumb, idx) => {
            const thumbnailNumber = idx + 1;
            const lastItem = idx === projectThumbnail.length - 1;
            const highlightThis =
              (isProjectPage && indexForProjectPics === idx)
                || (activeGroup && indexForProjectPics === idx);

            return (
              <ListItem
                key={idx}
                isProjectPage={isProjectPage}
                lastItem={lastItem}
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
                  {highlightThis &&
                    <Highlighter
                      isProjectPage={isProjectPage}
                    />}
                </RestyledLink>
              </ListItem>
            );
          }
        }
      />
    </Group>
  );
}
