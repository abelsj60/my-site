import React from 'react';
import loader from '../../public/image-loader.gif';
import styled from 'styled-components';

const Container = styled.div`
  height: 16px;
  width: 16px;
  margin-left: auto;
`;
const Loader = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${loader});
  background-size: cover;
`;

export default function ImageLoader(props) {
  if (props.imageLoaded) {
    return null;
  }

  return (
    <Container>
      <Loader />
    </Container>
  );
}
