import React from 'react';
import styled from 'styled-components';

import CloseButton from './MenuCloseButton.jsx';
import Description from './MenuDescription.jsx';

const StyledMenu = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: navy;
  color: white;
`;
const Overflow = styled.section`
  margin-top: 15px;
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: 25px;
  overflow: auto;
`;

export default function Menu(props) {
  const { link, text, render } = props;

  return (
    <StyledMenu>
      <CloseButton link={link} />
      <Description text={text} />
      <Overflow>{render()}</Overflow>
    </StyledMenu>
  );
}
