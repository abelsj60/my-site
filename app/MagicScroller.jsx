import React from 'react';
import styled from 'styled-components';

const Abracadabra = styled.section`
  height: 4000px;
`;

export default function MagicScroller(props) {
  if (props.home) {
    return <Abracadabra />;
  }

  return null;
}
