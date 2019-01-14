import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Mapper from './Mapper.jsx';
import magicData from './data/magicData.js';

const Main = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
`;
const Image = styled.img.attrs(props => ({
  style: { transform: `scale(${props.magicScale})` }
}))`
  width: 100%;
  min-height: 100vh;
  z-index: 1;
  object-fit: cover;
  position: fixed;
`;
const MagicContent = styled.section.attrs(props => ({
  style: {
    opacity: props.magicOpacity,
    pointerEvents: props.pointerIsBlocked ? 'none' : 'all'
  }
}))`
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
  display: ${props => (props.item !== 2 ? 'none' : 'flex')};
  align-items: flex-end;

  @media (min-width: 848px) {
    display: flex;
  }
`;
const StyledLink = styled(Link)`
  color: deepskyblue;
  padding-left: 25px;
  padding-right: 25px;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  ${MagicListItem}:hover & {
    color: deeppink;
  }
`;
const Hed = styled.h3`
  margin: 0px;
  padding-bottom: 30px;
  font-size: 5rem;
`;

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      magicScale: 6
    };

    const { boundSpellsForHome } = this.props;

    // No need to use .bind() because we curry inside
    // _homeComponentSpellbook, creating closures
    // for all relevant 'this' values.

    this.opacitySpell = boundSpellsForHome('setMagicOpacity');
    this.pointerSpell = boundSpellsForHome('toggleMagicPointer');
    this.scaleSpell = boundSpellsForHome('setMagicScale', this);

    this.resetTheMagic = boundSpellsForHome('resetTheMagic');
    this.startPointerSpell = boundSpellsForHome('startPointerSpell');
  }

  componentDidMount() {
    this.startPointerSpell();

    window.addEventListener('scroll', this.opacitySpell);
    window.addEventListener('scroll', this.scaleSpell);
    window.addEventListener('scroll', this.pointerSpell);
  }

  componentWillUnmount() {
    this.resetTheMagic();

    window.removeEventListener('scroll', this.opacitySpell);
    window.removeEventListener('scroll', this.scaleSpell);
    window.removeEventListener('scroll', this.pointerSpell);
  }

  render() {
    const { magicScale } = this.state;
    const { magicOpacity, blockPointer } = this.props.state;

    return (
      <Main>
        <Image
          magicScale={magicScale}
          src="/dreaming-boy-co-2.png"
          alt="a fantastic imaginary world"
        />
        <MagicContent
          magicOpacity={magicOpacity}
          pointerIsBlocked={blockPointer}
        >
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
}
