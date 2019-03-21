import arrowUp from '../../public/arrow-up.png';
import arrowDown from '../../public/arrow-down.png';
import React from 'react';
import styled from 'styled-components';
import StyledLink from '../primitives/StyledLink.jsx';

const Container = styled.div`
  min-height: 34px;
  width: 60px;
  margin-left: ${p => p.offset !== 'active' ? '2px' : '0px'};

  @media (min-width: 848px) {
    display: ${p => (p.menu !== 'active' ? 'none' : undefined)};
  }
`;
const RestyledLink = styled(StyledLink)`
  display: flex;
  flex-shrink: 0;
  margin-right: auto;
  margin-bottom: 13px;
  position: relative;
  padding-bottom: 6px;
  justify-content: space-between;
`;
const Label = styled.p`
  font-size: 1.3rem;
  color: ${p => (!p.menu ? '#6e7dab' : '#fd1172')};
  transition: color 1s;
  margin: 0px;
  cursor: pointer;
  margin-top: -2px;
`;
const Icon = styled.div`
  height: 4px;
  width: 8px;
  align-self: center;
  fill: #6e7dab;
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
  background-color: ${p => (!p.menu ? '#6e7dab' : p.reverie ? '#5b678c' : '#ffe74c')};

  // https://css-tricks.com/annoying-mobile-double-tap-link-issue/
  // @media (hover) {
  //   ${Container}:hover & {
  //     height: 2px;
  //   }
  // }
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
