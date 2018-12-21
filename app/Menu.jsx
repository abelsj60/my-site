import React from 'react';
import MenuCloseButton from './MenuCloseButton.jsx';
import MenuDescription from './MenuDescription.jsx';
import styled from 'styled-components';

const StyledMenu = styled.main`
  align-items: center;
  background-color: navy;
  color: white;
`;

export default function Menu(props) {
  const { userLocation, link, text, render } = props;

  return (
    <StyledMenu id="site-menu" className={`${userLocation}-menu`}>
      <MenuCloseButton link={link} />
      <MenuDescription text={text} />
      {render()}
    </StyledMenu>
  );
}
