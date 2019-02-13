import React from 'react';
import styled from 'styled-components';

const Card = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 200px;
  width: 350px;
  align-self: center;
  position: relative;
  background-color: white;
  font-size: 1.75rem;
  line-height: 2.5rem;
  box-shadow: 0 0 0.75em black;
`;
const InnerBorder = styled.div`
  position: absolute;
  width: 90%;
  height: 85%;
  align-self: center;
  border: 0.5px solid black;
`;
const Graf = styled.p`
  margin-top: 0px;
  align-self: center;
  margin-bottom: 0px;
  font-size: 1.4rem;
  // font-family: Open Sans, sans-serif;
  // font-weight: bolder;
`;

export default function BusinessCard() {
  return (
    <Card>
      <InnerBorder />
      <Graf>abelsj60_at_gmail.com</Graf>
    </Card>
  );
}
