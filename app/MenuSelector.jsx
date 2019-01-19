import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SelectorLink = styled(Link)`
  display: flex;
  margin-top: 25px;
  margin-left: 25px;
  margin-right: auto;
  margin-bottom: 10px;
  position: relative;
  padding-bottom: 6px;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  @media (min-width: 848px) {
    display: ${props => (props.menu !== 'active' ? 'none' : '')};
  }
`;
const Label = styled.p`
  font-size: 1.3rem;
  color: ${props => (props.menu !== 'active' ? '#6e7dab' : '#FD1172')};
  transition: color 1s;
  margin: 0px;
`;
const Arrow = styled.img`
  height: 4px;
  margin-left: 50px;
  align-self: center;
  fill: #6e7dab;
`;
const LowerLine = styled.hr`
  position: absolute;
  width: 100%;
  bottom: 0px;
  margin: 0px;
  border-style: solid;
  border-width: ${props => (props.menu !== 'active' ? '.5px' : '1px')};
  color: ${props => (props.menu !== 'active' ? '#6e7dab' : '#FD1172')};

  ${SelectorLink}:hover & {
    border-width: 1px;
  }
`;

export default function MenuSelector(props) {
  const menu = props.isMenu ? 'active' : '';
  const arrowIcon = !props.isMenu ? '/arrow-down.svg' : '/arrow-up.svg';

  return (
    <SelectorLink to={props.link} menu={menu}>
      <Label menu={menu}>{props.text}</Label>
      <Arrow src={arrowIcon} />
      <LowerLine menu={menu} />
    </SelectorLink>
  );
}
