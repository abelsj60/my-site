import arrowUp from '../../public/arrow-up.png';
import arrowDown from '../../public/arrow-down.png';
import React from 'react';
import styled from 'styled-components';
import StyledLink from '../primitives/StyledLink.jsx';

const Container = styled.div`
  min-width: 50px;
  width: 50px;
`;
const RestyledLink = styled(StyledLink)`
  display: flex;
  flex-shrink: 0;
  margin-right: auto;
  position: relative;
  padding-bottom: 3px;
  justify-content: space-between;
`;
const Label = styled.p`
  font-size: ${p => p.theme.fontSizes.one};
  color: ${p => p.theme.colors.pink};
  margin: 0px;
  cursor: pointer;
  margin-top: -2px;
  font-weight: 400;
`;
const IconContainer = styled.div`
  margin-top: 2px; 
  margin-bottom: 5px; 
  display: flex; 
  align-items: center;
`;
const Icon = styled.div`
  height: 3px;
  width: 7px;
  background: ${p => `url(${p.image})`} no-repeat;
  background-size: contain; // Must come after background rule
`;
const Line = styled.div`
  position: absolute;
  width: 100%;
  left: 0px;
  bottom: 0px;
  margin: 0px;
  height: ${p => (!p.menu ? '1px' : '2px')};
  background-color: ${p => !p.reverie ? p.theme.colors.blueTwo : p.theme.colors.white };
`;

export default function MenuButton(props) {
  const { boundHandleClickForApp } = props;
  const {
    isMenu,
    currentCaller
  } = props.appState;
  const isReverie = currentCaller === 'reverie';

  const link =
    isReverie && isMenu
      ? '/reverie'
      : isMenu
        ? `/${currentCaller}`
        : `/${currentCaller}/menu`;
  const arrowIcon =
    !isMenu
      ? arrowDown
      : arrowUp;
  const menuIsActive = isMenu && 'active';
  const text =
    !isMenu
      ? 'See all'
      : 'Close';

  return (
    <Container
      menu={menuIsActive}
    >
      <RestyledLink
        to={link}
        isCalledByMenu="menu"
        boundHandleClickForApp={boundHandleClickForApp}
      >
        <Label>
          {text}
        </Label>
        <IconContainer>
          <Icon
            image={arrowIcon}
          />
        </IconContainer>
        <Line
          menu={isMenu}
          reverie={
            isReverie
              ? 'active'
              : ''
          }
        />
      </RestyledLink>
    </Container>
  );
}
