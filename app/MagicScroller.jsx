import React from 'react';
import styled from 'styled-components';

const Abracadabra = styled.section`
  height: 4000px;
  display: flex;
  // z-index: -1;
`;

export default function MagicScroller(props) {
  if (props.home !== 'active') {
    return null;
  }

  return (
    <Abracadabra ref={props.magicRef}>
      <div
        style={{
          flex: '1',
          marginTop: 'auto',
          height: '5px',
          opacity: '1',
          backgroundColor: 'red'
        }}
      />
    </Abracadabra>
  );
}
