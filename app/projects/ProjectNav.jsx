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
  flex: ${p => p.imageLoaded && !p.isMenu && '1'};
  justify-content: ${p => p.imageLoaded && !p.isMenu && 'flex-end'};
  margin-left: ${p => !p.isMenu && '15px'};
  display: flex; // See note above
  // Ensures height is true on IE (empty space on top/bottom otherwise)
  ${isIE && 'flex-shrink: 0;'} 

  ${p => p.isMenu && css`
    margin-bottom: ${!p.finalGroup && '30px'};
    max-width: 100%;
  `};
`;
const ListItem = styled.li`
  height: 100%;
  margin-right: ${p => !p.finalThumbnail && '15px'};
  // Accounts for no { padding: 6px } on last image in IE 11
  ${p => isIE && p.finalThumbnail && 'flex-shrink: 1.0275;'} 
  
  &:first-child {
    margin-left: ${p => p.isMenu && '0px'};
  }
  
  @media (min-width: ${p => p.theme.mediaQueries.narrowBreakOne}) {
    margin-right: ${p => !p.finalThumbnail && p.isMenu && '20px'};
  }
`;
const RestyledLink = styled(
  // Filter out highlightThis, isMenu from StyledLink
  // eslint-disable-next-line
  ({ highlightThis, isMenu, ...rest }) => <StyledLink {...rest} />
)`
  height: ${p => !p.isMenu && '15px'};
  border: 1px solid ${p => p.highlightThis ? p.theme.colors.darkPinkTwo : p.theme.colors.blueTwo};
  display: block; // Ensures the entire image beneath it is clickable in Safari 10+, per CSS Tricks

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    height: ${p => !p.isMenu && '30px'};
  }
`;
const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  vertical-align: top;
  // Default is 'stretch', no good! (but it's not in a flex, so...?) **DOUBLE CHECK!
  // align-self: center; 
  
  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    max-height: ${p => !p.isMenu && '30px'};
  }
`;

export default function ProjectNav(props) {
  const {
    appState,
    boundHandleClickForApp,
    contentState,
    imageLoaded,
    mappedProject,
    mappedProjectIndex
  } = props;
  const { isMenu } = appState;
  const {
    allContentData,
    finalData,
    thumbnailIndex
  } = contentState;
  const {
    projectName,
    projectThumbnail
  } = finalData.attributes;

  const finalGroup = isMenu
    && mappedProjectIndex === allContentData.length - 1;
  const useThisData = !isMenu
    ? projectThumbnail
    : mappedProject.attributes.projectThumbnail;

  return (
    <Group
      isMenu={isMenu}
      finalGroup={finalGroup}
      imageLoaded={imageLoaded}
    >
      <Mapper
        mapData={useThisData}
        render={
          (thumb, idx) => {
            const isActive = isMenu
              && projectName === mappedProject.attributes.projectName;
            const highlightThis =
              (!isMenu && thumbnailIndex === idx)
                || (isActive && thumbnailIndex === idx);

            return (
              <ListItem
                key={idx}
                isMenu={isMenu}
                finalThumbnail={idx === useThisData.length - 1}
              >
                <RestyledLink
                  highlightThis={highlightThis}
                  isMenu={isMenu}
                  to={`/projects/${
                    normalize(
                      !isMenu
                        ? projectName
                        : mappedProject.attributes.projectName
                    )
                  }/${idx + 1}`}
                  boundHandleClickForApp={boundHandleClickForApp}
                >
                  <Image
                    alt={`Thumbnail ${idx + 1}`}
                    isMenu={isMenu}
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
