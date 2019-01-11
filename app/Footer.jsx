import React from 'react';
import styled from 'styled-components';

import AppBarFooter from './AppBarFooter.jsx';
import RegularFooter from './RegularFooter.jsx';

const Footer = styled.footer`
  z-index: 1;
  background-color: rgb(115, 0, 0);
  background-image: url('https://www.transparenttextures.com/patterns/flowers.png');
  opacity: ${props => (props.home ? props.op : '')};
  pointer-events: ${props => (props.blockPointer ? 'none' : 'auto')};
`;

export default function FooterContainer(props) {
  const isHome = props.home === 'active';
  const { blockPointer, magicOpacity } = props.state;

  return (
    <Footer home={isHome} op={magicOpacity} blockPointer={blockPointer}>
      <RegularFooter {...props} />
      <AppBarFooter {...props} />
    </Footer>
  );
}
