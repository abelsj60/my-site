import React from 'react';
import styled from 'styled-components';

const Structure = styled.div`
  font-size: ${p => p.theme.fontSizes.three};
  font-weight: 400;
  width: 80px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
`;
const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.one};
  font-weight: 400;
  margin-bottom: 0px;
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
    <Structure
      className={className}
      onClick={clickFunction}
    >
      <Text>{text}</Text>
    </Structure>
  );
}
