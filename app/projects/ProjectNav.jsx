import Mapper from '../shared/Mapper.jsx';
import React from 'react';
import styled, { css } from 'styled-components';
import StyledLink from '../primitives/StyledLink.jsx';

const Group = styled.ul`
  display: flex;
  margin: 0;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 10px;
  list-style-type: none;

  ${p =>
    p.menu &&
    css`
      margin-bottom: ${p.num !== 2 ? '15px' : undefined};
      padding-bottom: 0;
      max-width: 100%;
      flex-direction: row;
    `};

  ${p =>
    p.isRight &&
    css`
      border-bottom: #6e7dab solid 0.5px;

      @media (min-width: 672px) {
        flex-direction: column;
        margin-top: 26px;
        padding: 0;
        border: 0;
      }

      @media (min-width: 848px) {
        display: flex;
        flex-direction: row;
        margin: 0;
        padding-bottom: 7px;
        border-bottom: #6e7dab solid 0.5px;
      }

      @media (min-width: 1026px) {
        flex-direction: column;
        justify-content: flex-start;
        margin-top: 26px;
        padding: 0;
        border: 0;
      }
    `}};
`;
const Item = styled.li`
  margin-right: ${p => (p.padding ? '5px' : undefined)};
  margin-left: ${p => (!p.isRight ? '2px' : undefined)};

  @media (min-width: 672px) {
    margin-right: ${p => (p.isRight ? '0px' : undefined)};
    margin-bottom: ${p => (p.isRight ? '5px' : undefined)};
  }

  @media (min-width: 848px) {
    margin-right: ${p => (p.padding ? '5px' : undefined)};
    margin-bottom: ${p => (p.isRight ? '0px' : undefined)};
  }

  @media (min-width: 1026px) {
    margin-right: ${p => (p.isRight ? '0px' : undefined)};
    margin-bottom: ${p => (p.isRight ? '5px' : undefined)};
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
  position: absolute;
  background-color: #ffe74c;
`;

export default function ProjectNav(props) {
  const {
    appState,
    indexForProjectPics,
    isActive,
    isRight,
    num,
    project
  } = props;
  const {
    projectName,
    thumbnails
  } = project.attributes;
  let isMenu;

  if (appState) {
    isMenu = appState.isMenu;
  }

  return (
    <Group isRight={isRight} menu={isMenu} num={num}>
      <Mapper
        mapData={thumbnails}
        render={
          (thumb, idx) => {
            const padding = idx < 2;
            const thumbnailNumber = idx + 1;
            let highlightActiveThumbnail;

            if (
              isMenu &&
              isActive &&
              indexForProjectPics === idx
            ) {
              highlightActiveThumbnail = true;
            }

            return (
              <Item key={idx} isRight={isRight} padding={padding}>
                <RestyledLink to={`/projects/${
                  projectName.toLowerCase()
                }/${thumbnailNumber}`}>
                  <Image alt={`Thumbnail ${thumbnailNumber}`} src={thumb} />
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
