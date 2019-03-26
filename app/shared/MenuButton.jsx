import arrowUp from '../../public/arrow-up.png';
import arrowDown from '../../public/arrow-down.png';
import React from 'react';
import styled from 'styled-components';
import StyledLink from '../primitives/StyledLink.jsx';

const Container = styled.div`
  min-height: 34px;
  width: 52px;
  // margin-left: ${p => p.noOffset !== 'active' ? '2px' : '2px'};

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
  padding-bottom: 5px;
  justify-content: space-between;
`;
const Label = styled.p`
  font-size: 1.15rem;
  color: #6e7dab;
  // transition: color 1s;
  margin: 0px;
  cursor: pointer;
  margin-top: -2px;
  font-weight: 400;
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
  background-color: ${p => (!p.menu && !p.reverie
    ? '#e6f1ff'
    : '#f1f3f7')};

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
