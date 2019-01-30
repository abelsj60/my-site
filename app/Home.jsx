import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Mapper from './Mapper.jsx';
import magicData from './data/magicData.js';

const Main = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
const MagicImage = styled.img`
  opacity: ${p => (p.pointsUnknown ? '0' : '1')};
  transform: ${p => (p.pointsUnknown ? 'scale(1.01)' : 'scale(1.035)')};
  transition: transform 1.75s, opacity 1.5s cubic-bezier(0.77, 0, 0.175, 1);
  position: fixed;
  align-self: center;
  object-fit: cover;
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 1;
  // bottom: 0px; // May need, scrolling img doesn't always reach bottom
`;
const MagicContent = styled.section`
  pointer-events: ${p => (p.pointsUnknown ? 'none' : 'auto')};
  opacity: ${p => (!p.pointsUnknown ? '1' : '0')};
  transition: opacity 1.5s;
  z-index: 1;
  height: 100%;
  width: 100%;
`;
const MagicList = styled.ul`
  display: flex;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
const MagicListItem = styled.li`
  flex: 1;
  display: ${p => (p.item !== 2 ? 'none' : 'flex')};
  align-items: flex-end;

  @media (min-width: 700px) {
    display: flex;
  }
`;
const StyledLink = styled(Link)`
  color: deepskyblue;
  padding-left: 25px;
  padding-right: 25px;
  margin-bottom: 40px;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  // ${MagicListItem}:hover & {
  //   color: deeppink;
  // }
`;
const Hed = styled.h3`
  margin: 0px;
  font-size: 3rem;
`;
// const Image = styled.img`
//   // z-index: 0;
//   position: absolute;
//   // align-self: center;
//   object-fit: cover;
//   min-width: 100%;
//   height: 100%;
//   // bottom: 0px;

//   // position: absolute;
//   // align-self: center;
//   // height: 100%;
//   // bottom: 0px;
// `;

const FlyButton = styled.button`
  z-index: 2;
  left: 10px;
  position: absolute;
`;

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { pointsUnknown } = this.props.state;
    const { castFlyingSpell } = this.props;

    return (
      <Main>
        {/*<Image src="/howls-background-dl.jpg" />*/}
        <MagicImage
          pointsUnknown={pointsUnknown}
          src="/dreaming-boy-co-3.png"
          alt="a fantastic imaginary world"
        />
        <FlyButton onClick={() => castFlyingSpell()}>Fly</FlyButton>
        <MagicContent pointsUnknown={pointsUnknown}>
          <MagicList>
            <Mapper
              mapData={magicData}
              render={(name, idx) => {
                return (
                  <MagicListItem key={idx} item={idx + 1}>
                    <StyledLink to={name.link}>
                      <Hed>{name.hed}</Hed>
                    </StyledLink>
                  </MagicListItem>
                );
              }}
            />
          </MagicList>
        </MagicContent>
      </Main>
    );
  }

  componentWillUnmount() {
    if (!this.props.state.mount) {
      this.props.toggleHomePageMagic();
    }
  }
}

// <Image src="/howls-background-dl.jpg" />
