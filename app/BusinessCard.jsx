import React from 'react';
import styled from 'styled-components';

const Card = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 200px;
  width: 350px;
  align-self: center;
  background-color: #6100f2;
  background-image: url('https://www.transparenttextures.com/patterns/3px-tile.png');
  font-size: 1.75rem;
  line-height: 2.5rem;
  color: lightgoldenrodyellow;
  box-shadow: 0 0 0.75em black;

  :hover {
    transform: rotate(3deg);
    color: lightgoldenrodyellow;
    text-shadow: 0.5px 1px 2px black;
  }
`;
const Graph = styled.p`
  margin-top: 0px;
  margin-left: 70px;
  margin-right: 0px;
  margin-bottom: 0px;
`;
const Line = styled.div`
  background-color: white;
  width: 80%;
  height: 2px;
  margin-left: 70px;
`;

export default function BusinessCard() {
  return (
    <Card>
      <Graph>James Abels</Graph>
      <Line />
      <Graph>917-854-7848</Graph>
      <Graph>abelsj60_AT_gmail.com</Graph>
    </Card>
  );
}
