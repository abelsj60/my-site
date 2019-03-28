import arrowUp from '../../public/arrow-up.png';
import arrowDown from '../../public/arrow-down.png';
import React from 'react';
import styled from 'styled-components';
import StyledLink from '../primitives/StyledLink.jsx';

const Container = styled.div`
  min-height: 34px;
  width: 52px;

  @media (min-width: ${p => p.theme.mediaQueries.desktopView}) {
    display: ${p => (p.menu !== 'active' ? 'none' : undefined)};
  }
`;
const RestyledLink = styled(StyledLink)`
  display: flex;
  flex-shrink: 0;
  margin-right: auto;
  margin-bottom: 13px;
  position: relative;
  padding-bottom: 5px;
  justify-content: space-between;
`;
const Label = styled.p`
  font-size: ${p => p.theme.fontSizes.two};
  color: ${p => p.theme.colors.blue};
  margin: 0px;
  cursor: pointer;
  margin-top: -2px;
  font-weight: 400;
`;
const Icon = styled.div`
  height: 4px;
  width: 8px;
  align-self: center;
  fill: ${p => p.theme.colors.blue};
  background: ${p => `url(${p.image})`} no-repeat;
  background-size: contain;
`;
const Line = styled.div`
  position: absolute;
  width: 100%;
  left: 0px;
  bottom: 0px;
  margin: 0px;
  height: ${p => (!p.menu ? '1px' : '2px')};
  background-color: ${p => p.theme.colors.lightBlue};
`;

export default function MenuButton(props) {
  const {
    isMenu,
    lastCaller,
    currentCaller
  } = props.appState;
  const isReverie = currentCaller === 'reverie';
  const link =
    isReverie && isMenu
      ? '/reverie'
      : isMenu
        ? `/${lastCaller}`
        : `/${currentCaller}/menu`;
  const arrowIcon = !isMenu
    ? arrowDown
    : arrowUp;
  const menuIsActive = isMenu ? 'active' : undefined;
  const offsetIsActive = props.noOffset ? 'active' : '';
  const text = isMenu ? 'Close' : 'Menu';

  return (
    <Container offset={offsetIsActive} menu={menuIsActive}>
      <RestyledLink to={link}>
        <Label menu={isMenu} reverie={isReverie}>{text}</Label>
        <Icon image={arrowIcon} />
        <Line menu={isMenu} reverie={isReverie} />
      </RestyledLink>
    </Container>
  );
}
