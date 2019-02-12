import React from 'react';
import styled from 'styled-components';
import ComponentData from './custom/ComponentData.js';
import Referrer from './custom/Referrer.js';

import MenuSelector from './MenuSelector.jsx';

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 25px;
`;
const Overflow = styled.section`
  overflow: auto;
`;

export default function Menu(props) {
  const r = new Referrer(props);
  const cD = new ComponentData(r.location, props);

  return (
    <Main>
      <MenuSelector {...props} />
      <Overflow>{cD.getMenuComponent(props)}</Overflow>
    </Main>
  );
}
