import Main from '../primitives/Main.jsx';
import MenuButton from '../shared/MenuButton.jsx';
import Overflow from '../primitives/Overflow.jsx';
import Right from '../primitives/Right.jsx';
import React from 'react';
import styled from 'styled-components';

const RestyledMain = styled(Main)`
  @media (min-width: ${p => p.theme.mediaQueries.desktopView}) {
    flex-direction: column;
  }
`;
const RestyledRight = styled(Right)`
  @media (min-width: ${p => p.theme.mediaQueries.desktopView}) {
    margin-top: 10px;
  }
`;

export default function Menu(props) {
  const {
    appState,
    children,
  } = props;
  const { currentCaller } = appState;
  const isReverie = currentCaller === 'reverie';

  /** Props explanation
   *
   * 1. props (above) go to <MenuButton />
   * 2. { children } get props, params, and data
   * from cD.getMenuContent(props, params)
   * in Contentloader.jsx
   */

  return (
    <RestyledMain reverie={isReverie}>
      <RestyledRight>
        <MenuButton {...props} />
        <Overflow>{children}</Overflow>
      </RestyledRight>
    </RestyledMain>
  );
}
