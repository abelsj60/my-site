import Mapper from '../shared/Mapper.jsx';
import React from 'react';
import styled, { css } from 'styled-components';
import StyledLink from '../primitives/StyledLink.jsx';
import UnorderedList from '../primitives/UnorderedList.jsx';
import {
  isIE
} from 'react-device-detect';

const Group = styled(UnorderedList)`
  display: flex; // See note above
  ${isIE && 'flex-shrink: 0;'} // Ensures height is true on IE (empty space on top/bottom otherwise)
  list-style-type: none;
  margin-bottom: ${p => !p.menu ? '15px' : undefined};

  ${p => p.menu && css`
    margin-bottom: ${p.num !== 2 ? '20px' : undefined};
    padding-bottom: 0;
    max-width: 100%;
  `};
`;
const ListItem = styled.li`
  margin-right: ${p => (!p.lastItem ? '6px' : undefined)};
  ${p => isIE && p.lastItem ? 'flex-shrink: 1.0275;' : ''} // Accounts for no { padding: 6px } on last image in IE 11

  &:first-child {
    margin-left: ${p => (!p.isProjectPage ? '0px' : undefined)};
  }
`;
const RestyledLink = styled(StyledLink)`
  display: block; // Ensures proper placement of images wrapped by <a> in Safari 10, per CSS Tricks
  position: relative; // Positions <Highlighter />
`;
const Image = styled.img`
  width: 100%;
  max-width: 100%;
  vertical-align: bottom;
  align-self: center; // Default is 'stretch', no good!
`;
const Highlighter = styled.div`
  width: 100%;
  height: 4px;
  left: 0px;
  bottom: 0px;
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
            const lastItem = idx > 1;
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
                  {highlightActiveThumbnail && <Highlighter />}
                </RestyledLink>
              </ListItem>
            );
          }
        }
      />
    </Group>
  );
}
