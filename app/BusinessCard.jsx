import React from 'react';
import styled from 'styled-components';

const InactiveContainer = styled.section`
  display: none;
`;
const ActiveContainer = styled.section`
  z-index: ${props => (props.home ? 2 : 0)};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 52px;
  bottom: 55px;
  width: 100%;
  background-color: white;

  @media (max-width: 848px) {
    bottom: 80px;
  }
`;
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
  margin-left: 70px;
`;
const Line = styled.div`
  background-color: white;
  width: 80%;
  height: 2px;
  margin-left: 70px;
`;
// const ShadowBox = styled.div`
//   z-index: 0;
//   position: fixed;
//   bottom: 0;
//   height: 80px;
//   width: 100%;
// `;

export default function BusinessCard(props) {
  if (!props.state.showBusinessCard) {
    return null;
  }

  const homeIsActive = props.home === 'active';
  const StyledContainer = props.state.showBusinessCard
    ? ActiveContainer
    : InactiveContainer;

  return (
    <StyledContainer home={homeIsActive}>
      <Card>
        <Graph>James Abels</Graph>
        <Line />
        <Graph>917-854-7848</Graph>
        <Graph>abelsj60_AT_gmail.com</Graph>
      </Card>
    </StyledContainer>
  );
}

// <ShadowBox />
