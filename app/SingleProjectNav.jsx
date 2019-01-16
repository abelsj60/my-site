import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import Mapper from './Mapper.jsx';

const ThumbnailGroup = styled.ul`
  display: flex;
  margin: 0;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 7px;
  list-style-type: none;

  ${props =>
    props.menu === 'active' &&
    css`
      margin-bottom: ${props.num !== 2 ? '20px' : ''};
      padding-bottom: 0;
      max-width: 100%;
      flex-direction: row;
    `};

  ${props =>
    !props.desktop &&
    css`
      border-bottom: lightgrey dotted 0.5px;

      @media (min-width: 672px) {
        flex-direction: column;
        justify-content: space-between;
        margin-top: 31px;
        padding: 0;
        border: 0;
      }

      @media (min-width: 849px) {
        display: flex;
        flex-direction: row;
        margin: 0;
        padding-bottom: 7px;
        border-bottom: lightgrey dotted 0.5px;
      }

      @media (min-width: 1072px) {
        flex-direction: column;
        justify-content: space-between;
        margin-top: 31px;
        padding: 0;
        border: 0;
      }
    `}};
`;
const ThumbnailListItem = styled.li``;
const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 0;
  position: relative;
  margin-right: ${p => (p.padding === 'active' ? '5px' : '')};

  ${props =>
    props.desktop &&
    css`
      @media (min-width: 672px) {
        margin-right: 0;
      }

      @media (min-width: 848px) {
        margin-right: ${p => (p.padding === 'active' ? '5px' : '')};
      }

      @media (min-width: 1072px) {
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
  height: 100%;
  position: absolute;
  background-color: ${p =>
    p.highlight === 'active' ? 'rgb(0, 0, 0, 0.2)' : ''};

  &:hover {
    background-color: rgb(0, 0, 0, 0.2);
  }
`;

export default function SingleProjectNav(props) {
  // ID active project via returnState b/c no params in '/menu'

  const { num, project, activeProject, isDesktop, isMenu } = props;
  const { indexForProjectPics } = props.localState;
  const { thumbnails, projectName } = project.attributes;

  const menuIsActive = isMenu ? 'active' : '';

  return (
    <ThumbnailGroup desktop={isDesktop} menu={menuIsActive} num={num}>
      <Mapper
        mapData={thumbnails}
        render={(thumb, idx) => {
          const thumbnailNeedsPadding = idx < 2 ? 'active' : '';
          const thumbnailNumber = idx + 1;
          const thumbnailIsActive =
            activeProject && indexForProjectPics === idx ? 'active' : '';

          return (
            <ThumbnailListItem key={idx}>
              <StyledLink
                menu={menuIsActive}
                active={thumbnailIsActive}
                padding={thumbnailNeedsPadding}
                to={`/projects/${projectName}/${thumbnailNumber}`}
              >
                <Image src={thumb} alt={`Thumbnail ${thumbnailNumber}`} />
                <Highlighter highlight={thumbnailIsActive} />
              </StyledLink>
            </ThumbnailListItem>
          );
        }}
      />
    </ThumbnailGroup>
  );
}
