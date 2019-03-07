import Main from '../primitives/Main.jsx';
import MenuButton from '../shared/MenuButton.jsx';
import Overflow from '../primitives/Overflow.jsx';
import React from 'react';
import styled from 'styled-components';

const RestyledMain = styled(Main)`
  margin: 25px;

  @media (min-width: 848px) {
    flex-direction: column;
  }
`;
const RestyledOverfiow = styled(Overflow)`
  padding-right: 0px;
`;

export default function Menu(props) {
  const {
    children
  } = props;

  /** Props explanation
   *
   * 1. props (above) go to <MenuButton />
   * 2. { children } get props, params, and data
   * from cD.getMenuContent(props, params)
   * in Contentloader.jsx
   */

  return (
    <RestyledMain>
      <MenuButton {...props} />
      <RestyledOverfiow>{children}</RestyledOverfiow>
    </RestyledMain>
  );
}
