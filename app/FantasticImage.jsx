import React from 'react';
import styled from 'styled-components';

const ImageForHome = styled.img`
  transform: ${p => (p.pointsUnknown ? 'scale(1.15)' : 'scale(1)')};
  transition: transform 1.5s ease-out;
  position: absolute;
  bottom: 0;
  align-self: center;
  object-fit: cover;
  min-height: 100%;
  width: 100%;
  overflow: hidden;
`;

export default function FantasticImage(props) {
  return (
    <ImageForHome
      src="/background-fantasy.png"
      pointsUnknown={props.pointsUnknown}
    />
  );
}
