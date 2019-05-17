import React from 'react';
import styled, { keyframes } from 'styled-components';

const bobbleK = keyframes`
  0% {
    transform: translate3d(0px, 0px, 0px);
    animation-timing-function: ease-in;
  }

  50% {
    transform: translate3d(20px, 20px, 0px);
    animation-timing-function: ease-out;
  }

  100% {
    transform: translate3d(0px, 0px, 0px);
  }
`;
const Bobble = styled.div`
  animation: ${bobbleK} 2.5s infinite;
  z-index: ${p => p.zIndex ? p.zIndex : ''};
`;

export default function Bobbler(props) {
  return (
    <Bobble
      zIndex={props.zIndex}
    >
      {props.children}
    </Bobble>
  );
}
