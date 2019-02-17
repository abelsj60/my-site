import React, { Component } from 'react';
import Parallax from 'parallax-js'; // Now published on NPM
import styled from 'styled-components';
import Hed from '../primitives/Hed.jsx';
import Graf from '../primitives/Graf.jsx';

const NameTag = styled.div`
  display: ${p => (p.tempContentIsOn ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  margin-top: 30px;
  cursor: pointer;
`;
const RestyledHed = styled(Hed)`
  font-family: 'Aref Ruqaa', serif;
  text-shadow: 1px 1px 2px black;
`;
const RestyledGraf = styled(Graf)`
  text-shadow: 1px 1px 2px black;
  margin-left: 18px;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export default class ParallaxComponent extends Component {
  componentDidMount() {
    this.parallax = new Parallax(this.scene);
    console.log(this.parallax);
  }

  componentWillUnmount() {
    this.parallax.disable();
  }

  render() {
    const { showBusinessCard, showLegalTerms } = this.props;

    return (
      <NameTag
        tempContentIsOn={showBusinessCard || showLegalTerms}
        ref={el => (this.scene = el)}
      >
        <RestyledHed size="6.5" color="yellow" data-depth=".4">
          JamesAbels
        </RestyledHed>
        <RestyledGraf size="1.7" color="pink" top="93" data-depth=".4">
          narrative coding and other adventures
        </RestyledGraf>
      </NameTag>
    );
  }
}
