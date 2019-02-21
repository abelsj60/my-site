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

  return (
    <RestyledMain>
      <MenuButton {...props} />
      <RestyledOverfiow>{children}</RestyledOverfiow>
    </RestyledMain>
  );
}
