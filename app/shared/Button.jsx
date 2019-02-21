import React from 'react';
import styled from 'styled-components';

const Structure = styled.div`
  font-size: 1.2rem;
  width: 80px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
`;

export default function Button(props) {
  if (props.conditional && !props.show) {
    return null;
  }

  const {
    className,
    clickFunction,
    text
  } = props;

  return (
    <Structure className={className} onClick={clickFunction}>
      {text}
    </Structure>
  );
}
