import React from 'react';
import styled from 'styled-components';
import Main from './Main.jsx';
import Hed from './Hed.jsx';
import Right from './Right.jsx';

const RestyledRight = styled(Right)`
  flex: 1;
`;
const FailWhale = styled.section`
  flex: 1;
  background-color: cornflowerblue;
`;

export default function NotFound() {
  return (
    <Main>
      <RestyledRight>
        <Hed size="3" bottom="15">
          Uh oh. Not found!
        </Hed>
        <FailWhale />
      </RestyledRight>
    </Main>
  );
}
