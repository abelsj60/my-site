import React, { Component } from 'react';
import styled from 'styled-components';
import MagicNav from './MagicNav.jsx';

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
`;
const MagicContent = styled.section`
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  opacity: ${props => `${props.magicOpacity}`};
  pointer-events: ${props => (props.pointerIsBlocked ? 'none' : 'all')};
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
          <MagicNav />
        </MagicContent>
      </Main>
    );
  }
}
