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

  // console.log('scrollTop:', props.magicRef.current && props.magicRef.current);
  // console.log('sT:', document.html);

  // console.log(
  //   'magicRef:',
  //   props.magicRef.current && props.magicRef.current.getBoundingClientRect()
  // );

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
