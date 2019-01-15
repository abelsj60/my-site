import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  font-size: 2rem;
  align-self: flex-end;
  color: deeppink;
  margin-top: 25px;
  margin-right: 25px;

  &:hover {
    color: deepskyblue;
  }

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default function CloseButton(props) {
  const { link } = props;
  return <StyledLink to={link}>✘</StyledLink>;
}
