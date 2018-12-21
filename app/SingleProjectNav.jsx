import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Mapper from './Mapper.jsx';

const ThumbnailContainer = styled.section`
  display: flex;
  padding-bottom: 7px;
  border-bottom: lightgrey dotted 0.5px;

  @media (min-width: 849px) {
    display: flex;
  }
`;
const StyledLink = styled(Link)`
  position: relative;
  margin-right: ${p => (p.padding === 'active' ? '5px' : '')};
`;
const Image = styled.img`
  max-width: 100%;
  vertical-align: bottom;
`;
const Highlighter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: ${p =>
    p.highlight === 'active' ? 'rgb(0, 0, 0, 0.2)' : ''};

  &:hover {
    background-color: rgb(0, 0, 0, 0.2);
  }
`;

export default function SingleProjectNav(props) {
  const { project, isCurrentProject } = props;
  const { thumbnails, projectName } = project.attributes;
  const { indexForProjectPics } = props.localState;

  return (
    <ThumbnailContainer>
      <Mapper
        mapData={thumbnails}
        render={(thumb, idx) => {
          const thumbnailNeedsPadding = idx < 2 ? 'active' : '';
          const thumbnailNumber = idx + 1;
          const thumbnailIsActive =
            isCurrentProject && indexForProjectPics === idx ? 'active' : '';

          return (
            <StyledLink
              key={idx}
              active={thumbnailIsActive}
              padding={thumbnailNeedsPadding}
              to={`/projects/${projectName}/${thumbnailNumber}`}
            >
              <Image src={thumb} alt={`Thumbnail ${thumbnailNumber}`} />
              <Highlighter highlight={thumbnailIsActive} />
            </StyledLink>
          );
        }}
      />
    </ThumbnailContainer>
  );
}
