import Main from '../primitives/Main.jsx';
import React from 'react';
import Right from '../primitives/Right.jsx';
import styled from 'styled-components';

const RestyledRight = styled(Right)`
  flex: 1;
  margin-right: 25px;

  @media (min-width: ${p => p.theme.mediaQueries.desktopView}) {
    margin-top: 10px;
  }
`;
const Hed = styled.h1`
  font-size: ${p => p.theme.fontSizes.sixteen};
  margin-bottom: 15px;
`;
const FailWhale = styled.section`
  flex: 1;
  background-color: cornflowerblue;
`;

export default function NotFound(props) {
  console.log('Not Found: ', props);
  return (
    <Main>
      <RestyledRight>
        <Hed>
          Uh oh. Not found!
        </Hed>
        <FailWhale />
      </RestyledRight>
    </Main>
  );
}
