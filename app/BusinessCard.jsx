import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 200px;
  width: 350px;
  align-self: center;
  position: relative;
  background-color: #ffeb6c;
  font-size: 1.75rem;
  line-height: 2.5rem;
  box-shadow: 0 0 0.75em black;
`;
const Graf = styled.p`
  margin-top: 0px;
  margin-left: 70px;
  margin-right: 0px;
  margin-bottom: 0px;
  font-size: 1.5rem;
`;
const ContactGrafOne = styled(Graf)`
  font-size: 1.4rem;
`;
const ContactGrafTwo = styled(ContactGrafOne)`
  margin-top: -5px;
`;
const Line = styled.div`
  background-color: #fd1172;
  margin-top: 3px;
  margin-bottom: 3px;
  width: 80%;
  height: 2px;
  margin-left: 70px;
`;
// const PeterPanImg = styled.img`
//   position: absolute;
//   top: 5px;
//   left: 9.5px;
//   height: 80px;
// `;

export default class BusinessCard extends Component {
  componentWillUnmount() {
    // this.image.src = '';
  }

  render() {
    return (
      <Card>
        <Graf>James Abels</Graf>
        <Line />

        <ContactGrafOne>917-854-7848</ContactGrafOne>
        <ContactGrafTwo>abelsj60_AT_gmail.com</ContactGrafTwo>
      </Card>
    );
  }
}

// https://giphy.com/benjybrooke
// https://stackoverflow.com/questions/10730212/proper-way-to-reset-a-gif-animation-with-displaynone-on-chrome
// <PeterPanImg src={'/peter-pan.gif'} ref={img => (this.image = img)} />
