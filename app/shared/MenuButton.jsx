import adjustTabIndex from '../helpers/adjustTabIndex.js';
import arrowUp from '../../docs/assets/images/convert-to-data-uri/arrow-up-28-@4x.png';
import arrowDown from '../../docs/assets/images/convert-to-data-uri/arrow-down-28-@4x.png';
import React from 'react';
import styled from 'styled-components';
import StyledLink from '../primitives/StyledLink.jsx';

const Container = styled.div`
  min-width: 50px;
  width: 50px;
`;
const RestyledLink = styled(({ tabbed, ...rest }) => <StyledLink {...rest} />)`
  display: flex;
  flex-shrink: 0;
  margin-right: auto;
  position: relative;
  padding-bottom: 3px;
  justify-content: space-between;
`;
const Label = styled.p`
  font-size: ${p => p.theme.fontSizes.one};
  color: ${p => p.theme.colors.lightBlack};
  margin: 0px;
  cursor: pointer;
  margin-top: -2px;
  font-weight: 300;
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
  height: 1px;
  background-color: ${p => !p.reverie ? p.theme.colors.blueTwo : p.theme.colors.white };
`;

export default function MenuButton(props) {
  const { appState, boundHandleClickForApp } = props;
  const {
    currentCaller,
    isMenu,
    tabbed,
    tempContent
  } = appState;
  const isReverie = currentCaller === 'reverie';
  const link = isReverie && isMenu
    ? '/reverie'
    : isMenu
      ? `/${currentCaller}`
      : `/${currentCaller}/menu`;
  const arrowIcon = !isMenu ? arrowDown : arrowUp;
  const menuIsActive = isMenu && 'active';
  const text = !isMenu ? 'See all' : 'Close';
  const tabIndex = adjustTabIndex(tempContent);

  return (
    <Container
      menu={menuIsActive}
    >
      <RestyledLink
        boundHandleClickForApp={boundHandleClickForApp}
        id='menuButton'
        isCalledByMenu="menu"
        tabbed={tabbed}
        tabIndex={tabIndex}
        to={link}
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
          reverie={isReverie ? 'active' : ''}
        />
      </RestyledLink>
    </Container>
  );
}
