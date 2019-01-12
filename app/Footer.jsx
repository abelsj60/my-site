import React from 'react';
import styled from 'styled-components';

import AppBarFooter from './AppBarFooter.jsx';
import RegularFooter from './RegularFooter.jsx';

const Footer = styled.footer.attrs(props => ({
  style: {
    opacity: props.home ? props.opacity : '',
    pointerEvents: props.blockPointer ? 'none' : 'auto'
  }
}))`
  z-index: 1;
  background-color: rgb(115, 0, 0);
  background-image: url('https://www.transparenttextures.com/patterns/flowers.png');
`;

export default function FooterContainer(props) {
  const isHome = props.home === 'active';
  const { blockPointer, magicOpacity } = props.state;

  return (
    <Footer home={isHome} opacity={magicOpacity} blockPointer={blockPointer}>
      <RegularFooter {...props} />
      <AppBarFooter {...props} />
    </Footer>
  );
}
