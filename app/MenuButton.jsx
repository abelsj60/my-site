import React from 'react';
import styled from 'styled-components';
import StyledLink from './StyledLink.jsx';

const Container = styled.div`
  width: 91px;
`;
const RestyledLink = styled(StyledLink)`
  display: flex;
  flex-shrink: 0;
  margin-right: auto;
  margin-bottom: 15px;
  position: relative;
  padding-bottom: 6px;

  @media (min-width: 848px) {
    display: ${props => (props.menu !== 'active' ? 'none' : '')};
  }
`;
const Label = styled.p`
  font-size: 1.3rem;
  color: ${props => (props.menu !== 'active' ? '#6e7dab' : '#fd1172')};
  transition: color 1s;
  margin: 0px;
`;
const Arrow = styled.img`
  height: 4px;
  margin-left: 50px;
  align-self: center;
  fill: #6e7dab;
`;
const Line = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0px;
  margin: 0px;
  height: ${props => (props.menu !== 'active' ? '1px' : '2px')};
  background-color: ${props =>
    props.menu !== 'active' ? '#6e7dab' : '#ffe74c'};

  ${StyledLink}:hover & {
    height: 2px;
  }
`;

export default function MenuButton(props) {
  const { isMenu, lastCaller, currentCaller } = props.state;
  const menuIsActive = isMenu ? 'active' : '';
  const isReverie = currentCaller === 'reverie';
  const link =
    isReverie && isMenu
      ? '/reverie'
      : isMenu
        ? `/${lastCaller}`
        : `/${currentCaller}/menu`;
  const arrowIcon = !isMenu ? '/arrow-down.svg' : '/arrow-up.svg';
  const text = isMenu ? 'Close' : 'Menu';

  return (
    <Container>
      <RestyledLink to={link} menu={menuIsActive}>
        <Label menu={menuIsActive}>{text}</Label>
        <Arrow src={arrowIcon} />
        <Line menu={menuIsActive} />
      </RestyledLink>
    </Container>
  );
}
