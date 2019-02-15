import React from 'react';
import styled, { css } from 'styled-components';

import StyledLink from '../primitives/StyledLink.jsx';
import Mapper from '../shared/Mapper.jsx';

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
    !p.desktop &&
    css`
      border-bottom: #6e7dab solid 0.5px;

      @media (min-width: 672px) {
        flex-direction: column;
        margin-top: 28px;
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

      @media (min-width: 1048px) {
        flex-direction: column;
        justify-content: flex-start;
        margin-top: 28px;
        padding: 0;
        border: 0;
      }
    `}};
`;
const Item = styled.li`
  margin-right: ${p => (p.padding ? '5px' : undefined)};

  @media (min-width: 672px) {
    margin-right: ${p => (!p.desktop ? '0px' : undefined)};
    margin-bottom: ${p => (!p.desktop ? '5px' : undefined)};
  }

  @media (min-width: 848px) {
    margin-right: ${p => (p.padding ? '5px' : undefined)};
    margin-bottom: ${p => (p.isRight ? '0px' : undefined)};
  }

  @media (min-width: 1048px) {
    margin-right: ${p => (!p.desktop ? '0px' : undefined)};
    margin-bottom: ${p => (!p.desktop ? '5px' : undefined)};
  }
`;
const RestyledLink = styled(StyledLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 0;
  position: relative;

  ${p =>
    p.desktop &&
    css`
      @media (min-width: 672px) {
        margin-right: 0;
      }

      @media (min-width: 848px) {
        margin-right: ${p.padding ? '5px' : undefined};
      }

      @media (min-width: 1048px) {
        margin-right: 0;
      }
    `};
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
  // ID active project via returnState b/c no params in '/menu'

  const { num, project, activeProject, isDesktop, menu, isRight } = props;
  const { indexForProjectPics } = props.localState;
  const { thumbnails, projectName } = project.attributes;

  const menuIsActive = menu;

  return (
    <Group desktop={isDesktop} menu={menuIsActive} num={num}>
      <Mapper
        mapData={thumbnails}
        render={(thumb, idx) => {
          const paddingIsActive = idx < 2;
          const thumbnailNumber = idx + 1;
          const thumbnailIsActive =
            activeProject && indexForProjectPics === idx;
          const highlightActiveThumbnail = menuIsActive &&
            thumbnailIsActive && <Highlighter />;

          return (
            <Item
              key={idx}
              isRight={isRight}
              desktop={isDesktop}
              padding={paddingIsActive}
            >
              <RestyledLink to={`/projects/${projectName}/${thumbnailNumber}`}>
                <Image src={thumb} alt={`Thumbnail ${thumbnailNumber}`} />
                {highlightActiveThumbnail}
              </RestyledLink>
            </Item>
          );
        }}
      />
    </Group>
  );
}
