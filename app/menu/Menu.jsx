import React from 'react';
import styled from 'styled-components';
import ComponentData from '../classes/ComponentData.js';
import Referrer from '../classes/Referrer.js';

import Main from '../primitives/Main.jsx';
import Overflow from '../primitives/Overflow.jsx';
import MenuButton from '../shared/MenuButton.jsx';

const RestyledMain = styled(Main)`
  margin: 25px;

  @media (min-width: 848px) {
    flex-direction: column;
  }
`;

export default function Menu(props) {
  const r = new Referrer(props);
  const cD = new ComponentData(r.location, props);

  return (
    <RestyledMain>
      <MenuButton {...props} />
      <Overflow>{cD.getMenuComponent(props)}</Overflow>
    </RestyledMain>
  );
}
