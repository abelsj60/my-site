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
const Image = styled.img`
  transform: ${props => `scale(${props.magicScale})`};
  width: 100%;
  min-height: 100vh;
  z-index: 1;
  object-fit: cover;
  position: fixed;
`;
const MagicContent = styled.section`
  z-index: 1;
  display: flex;
  height: 100%;
  width: 100%;
  opacity: ${props => `${props.magicOpacity}`};
  pointer-events: ${props => (props.pointerIsBlocked ? 'none' : 'all')};
`;
const StyledLink = styled(Link)`
  flex: 1;
  display: ${props => (props.item !== 2 ? 'none' : 'flex')};
  align-items: flex-end;
  font-size: 6rem;
  color: deepskyblue;
  padding-left: 25px;
  padding-right: 25px;

  &:hover {
    color: deeppink;
  }

  @media (min-width: 848px) {
    font-size: 5rem;
    display: flex;
  }
`;
const Hed = styled.h3`
  padding-bottom: 30px;
`;

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      magicScale: 6
    };

    const { boundSpellsForHome } = this.props;

    // No need to use .bind() here because we curry inside
    // Spellbook._homeComponentSpellbook, creating closures
    // for all relevant 'this' values.

    this.scaleSpell = boundSpellsForHome('setMagicScale', this);
    this.opacitySpell = boundSpellsForHome('setMagicOpacity');
    this.pointerSpell = boundSpellsForHome('toggleMagicPointer');
    this.startPointerSpell = boundSpellsForHome('prepPointerSpell', this);
    this.finishPointerSpell = boundSpellsForHome('prepPointerSpell');
  }

  componentDidMount() {
    this.startPointerSpell();

    window.addEventListener('scroll', this.scaleSpell);
    window.addEventListener('scroll', this.opacitySpell);
    window.addEventListener('scroll', this.pointerSpell);
  }

  componentWillUnmount() {
    this.finishPointerSpell();

    window.removeEventListener('scroll', this.scaleSpell);
    window.removeEventListener('scroll', this.opacitySpell);
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
          <Mapper
            mapData={magicData}
            render={(name, idx) => {
              return (
                <StyledLink key={idx} to={name.link} item={idx + 1}>
                  <Hed>{name.hed}</Hed>
                </StyledLink>
              );
            }}
          />
        </MagicContent>
      </Main>
    );
  }
}
