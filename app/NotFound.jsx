import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 25px;
`;
const Hed = styled.h1`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 3rem;
  font-weight: bold;
`;
const FailWhale = styled.section`
  flex: 1;
  margin-top: 15px;
  // background-color: cornflowerblue;
`;

export default function NotFound() {
  return (
    <Main>
      <Hed>Uh oh. Not found!</Hed>
      <FailWhale />
    </Main>
  );
}
