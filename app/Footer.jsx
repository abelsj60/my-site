import React from 'react';
import styled from 'styled-components';

import AppBarFooter from './AppBarFooter.jsx';
import RegularFooter from './RegularFooter.jsx';

import Referrer from './custom/Referrer.js';

const Footer = styled.footer`
  z-index: 1;
  background-color: rgb(115, 0, 0);
  background-image: url('https://www.transparenttextures.com/patterns/flowers.png');
  opacity: ${props => (props.home ? props.op : '')};
  pointer-events: ${props => (props.mc !== 'block' ? 'all' : 'none')};
`;

export default function FooterContainer(props) {
  const { magicClicks, magicOpacity } = props.state;

  const r = new Referrer(props);
  const isHome = r.location === '';

  return (
    <Footer home={isHome} op={magicOpacity} mc={magicClicks}>
      <RegularFooter {...props} />
      <AppBarFooter {...props} />
    </Footer>
  );
}
