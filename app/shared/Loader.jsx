import React from 'react';
import ImageLoader from './ImageLoader.jsx';
import styled, { css, keyframes } from 'styled-components';

const loaderKeyframes = keyframes`
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  opacity: ${p => p.show ? '1' : '0'};
  transition: opacity .165s;
`;
const Elements = styled.div`
  width: ${p => p.width ? css`${p.width}px` : '125px'};
`;
const Text = styled.p`
  color: ${p => p.theme.colors.black};
  margin-bottom: 8px;
  font-size: ${p => p.theme.fontSizes.six};
`;
const LoadingBar = styled.div`
  height: 1px;
  background-color: ${p => p.theme.colors.white};
`;
const ProgressBar = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${p => p.theme.colors.black};
  animation: ${css`1.25s ${loaderKeyframes} infinite`}; 
`;

export default function Loader(props) {
  if (props.done) {
    return null;
  }

  return !props.img 
    ? (
      <Container
        show={props.show}
      >
        <Elements
          width={props.width}
        >
          <Text>
            Loading...
          </Text>
          <LoadingBar>
            <ProgressBar />
          </LoadingBar>
        </Elements>
      </Container>
    ) : <ImageLoader />;
}
