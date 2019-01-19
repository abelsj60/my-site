import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 25px;
`;
const Hed = styled.h1`
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
