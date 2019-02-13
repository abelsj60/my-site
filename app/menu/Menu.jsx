import React from 'react';
import styled from 'styled-components';
import ComponentData from '../custom/ComponentData.js';
import Referrer from '../custom/Referrer.js';

import Main from '../primitives/Main.jsx';
import Overflow from '../primitives/Overflow.jsx';
import MenuButton from '../shared/MenuButton.jsx';

const RestyledMain = styled(Main)`
  margin: 25px;
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
