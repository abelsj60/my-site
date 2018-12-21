import React from 'react';
import styled from 'styled-components';

import Referrer from './custom/Referrer.js';

const ShadowBox = styled.div`
  z-index: 0;
  position: fixed;
  bottom: 0;
  height: 80px;
  width: 100%;
`;
const InactiveContainer = styled.section`
  display: none;
`;
const Graf = styled.p`
  color: lightgoldenrodyellow;
`;
const ActiveContainer = styled.section`
  z-index: ${props => (props.home ? 2 : 0)};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 52px;
  bottom: 80px;
  width: 100%;
  background-color: navy;
  background-image: url('https://www.transparenttextures.com/patterns/my-little-plaid.png');

  @media (min-width: 848px) {
    bottom: 55px;
  }
`;

export default function Legal(props) {
  const referrer = new Referrer(props);
  const StyledContainer = props.state.showLegalTerms
    ? ActiveContainer
    : InactiveContainer;
  const copyrightYear = new Date().getFullYear();

  return (
    <StyledContainer home={referrer.location === ''}>
      <Graf>© {copyrightYear} James Abels. All rights reserved.</Graf>
      <ShadowBox />
    </StyledContainer>
  );
}
