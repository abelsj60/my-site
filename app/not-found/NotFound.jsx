import Hed from '../primitives/Hed.jsx';
import Main from '../primitives/Main.jsx';
import React from 'react';
import Right from '../primitives/Right.jsx';
import styled from 'styled-components';

const RestyledRight = styled(Right)`
  flex: 1;
  margin-right: 25px;
`;
const FailWhale = styled.section`
  flex: 1;
  background-color: cornflowerblue;
`;

export default function NotFound() {
  return (
    <Main>
      <RestyledRight>
        <Hed b="15" s="3">
          Uh oh. Not found!
        </Hed>
        <FailWhale />
      </RestyledRight>
    </Main>
  );
}
