import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  @media (min-width: 672px) {
    display: flex;
    flex-direction: column;
  }
`;
const Graf = styled.p`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 1.7rem;

  @media (min-width: 672px) {
    margin-top: 0;
  }

  @media (min-width: 848px) {
    margin-top: 10px;
  }

  @media (min-width: 1072px) {
    margin-top: 0;
  }
`;
const Image = styled.img`
  flex: 1;
  max-width: 100%;
  object-fit: cover;
  vertical-align: bottom;

  @media (min-width: 672px) {
    margin-right: 10px;
  }

  @media (min-width: 848px) {
    margin-right: 0px;
  }

  @media (min-width: 1072px) {
    margin-right: 10px;
  }
`;

export default function ProjectImageContainer(props) {
  // Todo Can use params for this, rather than return state

  const { full } = props.project.attributes;
  const { indexForProjectPics } = props.localState;
  const { captions } = props.project.attributes.details;

  const caption = captions[indexForProjectPics];
  const source = full[indexForProjectPics];

  return (
    <Container>
      <Graf>{caption}</Graf>
      <Image src={source} alt="mainPic" />
    </Container>
  );
}
