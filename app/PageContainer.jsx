import React from 'react';
import styled, { css } from 'styled-components';
import { splitPath } from './helpers/utils.js';

const Page = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;

  ${props =>
    props.home === 'active' &&
    css`
      width: 100%;
      position: fixed;
      background: url('/howls-background-dl.jpg') no-repeat fixed center top;
    `};
`;

export default function PageContainer(props) {
  const { children } = props;
  const path = splitPath(props)[1];

  const homeIsActive = path === '' ? 'active' : '';
  const menuIsActive = path === 'menu' ? 'active' : '';

  return (
    <Page home={homeIsActive} menu={menuIsActive}>
      {children}
    </Page>
  );
}
