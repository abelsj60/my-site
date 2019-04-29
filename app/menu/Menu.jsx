import Main from '../primitives/Main.jsx';
import MenuButton from '../shared/MenuButton.jsx';
import Overflow from '../primitives/Overflow.jsx';
import ContentHolder from '../primitives/ContentHolder.jsx';
import React from 'react';
import Shelf from '../shared/Shelf.jsx';
import styled from 'styled-components';

const RestyledMain = styled(Main)`
  @media (min-width: ${p => p.theme.mediaQueries.desktopView}) {
    flex-direction: column;
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
      <ContentHolder>
        <Shelf
          height="19px"
        >
          <MenuButton {...props} />
        </Shelf>
        <Overflow>{children}</Overflow>
      </ContentHolder>
    </RestyledMain>
  );
}
