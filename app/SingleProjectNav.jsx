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
  padding-bottom: 10px;
  list-style-type: none;

  ${props =>
    props.menu === 'active' &&
    css`
      margin-bottom: ${props.num !== 2 ? '15px' : ''};
      padding-bottom: 0;
      max-width: 100%;
      flex-direction: row;
    `};

  ${props =>
    !props.desktop &&
    css`
      border-bottom: #6e7dab solid 0.5px;

      @media (min-width: 672px) {
        flex-direction: column;
        // justify-content: space-between;
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
const ThumbnailListItem = styled.li`
  margin-right: ${p => (p.padding === 'active' ? '5px' : '')};

  @media (min-width: 672px) {
    margin-right: ${p => (!p.desktop ? '0px' : '')};
    margin-bottom: ${p => (!p.desktop ? '5px' : '')};
  }

  @media (min-width: 848px) {
    margin-right: ${p => (p.padding === 'active' ? '5px' : '')};
  }

  @media (min-width: 1048px) {
    margin-right: ${p => (!p.desktop ? '0px' : '')};
    margin-bottom: ${p => (!p.desktop ? '5px' : '')};
  }
`;
const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 0;
  position: relative;
  // margin-right: ${p => (p.padding === 'active' ? '5px' : '')};

  ${props =>
    props.desktop &&
    css`
      @media (min-width: 672px) {
        margin-right: 0;
      }

      @media (min-width: 848px) {
        margin-right: ${p => (p.padding === 'active' ? '5px' : '')};
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
          const paddingIsActive = idx < 2 ? 'active' : '';
          const thumbnailNumber = idx + 1;
          const thumbnailIsActive =
            activeProject && indexForProjectPics === idx ? 'active' : '';
          const highlightActiveThumbnail = menuIsActive &&
            thumbnailIsActive && <Highlighter />;

          return (
            <ThumbnailListItem
              key={idx}
              desktop={isDesktop}
              padding={paddingIsActive}
            >
              <StyledLink
                menu={menuIsActive}
                active={thumbnailIsActive}
                padding={paddingIsActive}
                to={`/projects/${projectName}/${thumbnailNumber}`}
              >
                <Image src={thumb} alt={`Thumbnail ${thumbnailNumber}`} />
                {highlightActiveThumbnail}
              </StyledLink>
            </ThumbnailListItem>
          );
        }}
      />
    </ThumbnailGroup>
  );
}
