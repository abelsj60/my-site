import React, { Fragment } from 'react';
import styled from 'styled-components';
import ComponentData from './custom/ComponentData.js';
import Referrer from './custom/Referrer.js';

import MenuSelector from './MenuSelector.jsx';

const StyledMenu = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 25px;
  margin-left: 23px;
`;
const OverflowContainer = styled.section`
  overflow: auto;
  padding-left: 2px;
`;

export default function Menu(props) {
  const r = new Referrer(props);
  const cD = new ComponentData(r.location, props);

  return (
    <Fragment>
      <StyledMenu>
        <MenuSelector {...props} />
        <OverflowContainer>{cD.getMenuComponent(props)}</OverflowContainer>
      </StyledMenu>
    </Fragment>
  );
}
