import React from 'react';
import styled from 'styled-components';

const ActiveContainer = styled.section`
  z-index: ${props => (props.home ? 2 : 0)};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 53px;
  bottom: 80px;
  width: 100%;
  background-color: navy;
  background-image: url('https://www.transparenttextures.com/patterns/my-little-plaid.png');

  @media (min-width: 848px) {
    bottom: 55px;
  }
`;
const InactiveContainer = styled.section`
  display: none;
`;
const Graf = styled.p`
  margin: 0px;
  color: lightgoldenrodyellow;
`;
// const ShadowBox = styled.div`
//   z-index: 0;
//   position: fixed;
//   bottom: 0;
//   height: 80px;
//   width: 100%;
// `;

export default function Legal(props) {
  if (!props.state.showLegalTerms) {
    return null;
  }

  const homeIsActive = props.home === 'active';
  const StyledContainer = props.state.showLegalTerms
    ? ActiveContainer
    : InactiveContainer;
  const copyrightYear = new Date().getFullYear();

  return (
    <StyledContainer home={homeIsActive}>
      <Graf>© {copyrightYear} James Abels. All rights reserved.</Graf>
    </StyledContainer>
  );
}

// <ShadowBox />
