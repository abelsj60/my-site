import React from 'react';
import styled from 'styled-components';

const Hed = styled.h1`
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 25px;
  max-width: 507px;
  padding-bottom: 8px;
  border-bottom: white dotted 0.5px;
`;

export default function MenuDescription(props) {
  const { text } = props;
  return <Hed>{text}</Hed>;
}
