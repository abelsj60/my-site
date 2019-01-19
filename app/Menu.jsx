import React, { Fragment } from 'react';
import styled from 'styled-components';
import ComponentData from './custom/ComponentData.js';
import Referrer from './custom/Referrer.js';

import MenuSelector from './MenuSelector.jsx';

const StyledMenu = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  // color: black;
  // background-color: whitesmoke;
`;
const Overflow = styled.section`
  margin-top: 10px;
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: 25px;
  overflow: auto;
`;

export default function Menu(props) {
  const { link } = props;
  const r = new Referrer(props);
  const cD = new ComponentData(r.location, props);

  return (
    <Fragment>
      <MenuSelector
        link={{
          hash: undefined,
          state: 'menu',
          pathname: link
        }}
        text={'Close'}
        isMenu={true}
      />
      <StyledMenu>
        <Overflow>{cD.getMenu()}</Overflow>
      </StyledMenu>
    </Fragment>
  );
}
