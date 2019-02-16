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

  return (
    <Structure className={props.className} onClick={props.clickFunction}>
      {props.text}
    </Structure>
  );
}
