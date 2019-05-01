import Mapper from '../shared/Mapper.jsx';
import normalize from '../helpers/normalize.js';
import React from 'react';
import styled, { css } from 'styled-components';
import StyledLink from '../primitives/StyledLink.jsx';
import UnorderedList from '../primitives/UnorderedList.jsx';
import {
  isIE
} from 'react-device-detect';

const Group = styled(UnorderedList)`
  flex: ${p => p.isProjectPage && '1'};
  justify-content: ${p => p.isProjectPage && 'flex-end'};
  margin-left: ${p => p.isProjectPage && '25px'};
  display: flex; // See note above
  ${isIE && 'flex-shrink: 0;'} // Ensures height is true on IE (empty space on top/bottom otherwise)

  ${p => p.menu && css`
    margin-bottom: ${!p.lastGroup && '30px'};
    max-width: 100%;
  `};
`;
const ListItem = styled.li`
  height: 100%;
  margin-right: ${p => !p.lastItem && '15px'};
  ${p => isIE && p.lastItem && 'flex-shrink: 1.0275;'} // Accounts for no { padding: 6px } on last image in IE 11
  
  &:first-child {
    margin-left: ${p => !p.isProjectPage && '0px'};
  }
  
  @media (min-width: ${p => p.theme.mediaQueries.narrowBreakOne}) {
    margin-right: ${p => !p.lastItem && !p.isProjectPage && '20px'};
  }
`;
const RestyledLink = styled(
  // Filter out highlightThis, isProjectPage from StyledLink
  // eslint-disable-next-line
  ({ highlightThis, isProjectPage, ...rest }) => <StyledLink {...rest} />
)`
  height: ${p => p.isProjectPage && '15px'};
  border: 1px solid ${p => p.highlightThis ? p.theme.colors.darkPinkTwo : p.theme.colors.blueTwo};
  display: block; // Ensures the entire image beneath it is clickable in Safari 10+, per CSS Tricks

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    height: ${p => p.isProjectPage && '30px'};
  }
`;
const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  vertical-align: top;
  // align-self: center; // Default is 'stretch', no good! (but it's not in a flex, so...?)
  
  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    max-height: ${p => p.isProjectPage && '30px'};
  }
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
                  highlightThis={highlightThis}
                  isProjectPage={isProjectPage}
                  to={`/projects/${
                    normalize(projectName)
                  }/${thumbnailNumber}`}
                >
                  <Image
                    alt={`Thumbnail ${thumbnailNumber}`}
                    isProjectPage={isProjectPage}
                    src={thumb}
                  />
                </RestyledLink>
              </ListItem>
            );
          }
        }
      />
    </Group>
  );
}
