import Charms from './Charms.jsx';
import ClickHandling from '../classes/ClickHandling.js';
import Main from '../primitives/Main.jsx';
import NameTag from './NameTag.jsx';
import React, { Component } from 'react';
import PictureBox from './PictureBox.jsx';
import styled from 'styled-components';

const RestyledMain = styled(Main)`
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  flex-direction: column;
  position: relative;
`;

export default class Home extends Component {
  constructor(props) {
    super(props);

    // 1. this.goal defines when to cast a spell.
    // 2. this.transition prevents 'onTransitionEnd' from
    // toggling Charms on/off in rapid succession.

    this.goal = 5;
    this.transition = 0;

    // Create an initial spell pattern. If we've gone
    // to /reverie and come back, we'll use the last
    // created spell pattern (stored on appState as
    // a back-up). Otherwise, make a new one.

    const pattern = this.createSpellPattern();

    this.state = {
      isCasting: false,
      castSpell: false,
      score: 0, // Used to select an active Charm and cast spell
      pattern: pattern,
      activeCharm: pattern[0] // Initial Charm is always [0].
    };

    this.trackTransitionEnd = this.trackTransitionEnd.bind(this);
  }

  render() {
    // const { pinchZoomed } = props.appState;
    // const foregroundImage = pinchZoomed
    //   ? bio.attributes.boyInForegroundImage
    //   : bio.attributes.zoomedBoyInForegroundImage;
    // const fantasyImage = pinchZoomed
    //   ? bio.attributes.fantasyImage
    //   : bio.attributes.zoomedFantasyImage;
    // const cityImage = pinchZoomed
    //   ? bio.attributes.cityImage
    //   : bio.attributes.zoomedCityImage;

    const hcForHome = new ClickHandling('home', this);
    const boundHandleClickForHome = hcForHome.boundHandleClick;

    const hcCharm = new ClickHandling('charm', this);
    const boundHandleCharm = hcCharm.boundHandleClick;

    return (
      <RestyledMain>
        <NameTag
          {...this.props}
          homeState={this.state}
          boundHandleClickForHome={boundHandleClickForHome}
        />
        <Charms
          {...this.props}
          homeState={this.state}
          boundHandleCharm={boundHandleCharm}
        />
        <PictureBox
          {...this.props}
          homeState={this.state}
          trackTransitionEnd={this.trackTransitionEnd}
          boundHandleClickForHome={boundHandleClickForHome}
        />
      </RestyledMain>
    );
  }

  createSpellPattern() {
    const pattern = [];

    for (let i = 0; i < this.goal; i++) {
      let randomNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

      // Let's ensure our Charm order isn't redundant.

      if (i > 0) {
        while (pattern[i - 1] === randomNum) {
          randomNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        }
      }

      pattern.push(randomNum);
    }

    return pattern;
  }

  trackTransitionEnd() {
    // Track the two firings of 'onTransitionEnd'.

    if (this.transition === 0) {
      this.transition = 1;
    } else {
      this.transition = 0;
    }
  }
}
