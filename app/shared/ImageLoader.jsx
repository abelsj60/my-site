import React from 'react';
import loader from '../../public/image-loader.gif';
import styled from 'styled-components';

const Container = styled.div`
  height: 16px;
  width: 16px;
`;
const Loader = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${p => p.image});
  background-size: cover;
`;

export default function ImageLoader(props) {
  const image = props.image ? props.image : loader;

  return (
    <Container>
      <Loader 
        image={image}
      />
    </Container>
  );
}
