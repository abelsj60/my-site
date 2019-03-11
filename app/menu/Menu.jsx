import Main from '../primitives/Main.jsx';
import MenuButton from '../shared/MenuButton.jsx';
import Overflow from '../primitives/Overflow.jsx';
import Right from '../primitives/Right.jsx';
import React from 'react';
import styled from 'styled-components';

const RestyledMain = styled(Main)`
  // margin: 5px 25px 25px 25px;

  @media (min-width: 390px) {
    // margin-top: 25px;
  }

  @media (min-width: 848px) {
    flex-direction: column;
  }
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
      <Right>
        <MenuButton {...props} />
        <Overflow>{children}</Overflow>
      </Right>
    </RestyledMain>
  );
}
