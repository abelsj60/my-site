import ClickHandling from '../classes/ClickHandling.js';
import Main from '../primitives/Main.jsx';
import NameTag from './NameTag.jsx';
import React, { Component } from 'react';
import PictureBox from './PictureBox.jsx';
import PulseBox from './PulseBox.jsx';
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

    this.spell = undefined;
    this.state = {
      isCasting: false,
      castSpell: false,
      score: 0 // Tracking score to re-render
    };
  }

  render() {
    const { boundHandleClickForApp } = this.props;
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

    // NameTag sets appState by calling onClick('isCasting').
    // Pulsebox is able to respond b/c it listens to appState.

    const hcForHome = new ClickHandling('home', this);
    const boundHandleClickForHome = hcForHome.boundHandleClick;
    const castTheSpell = boundHandleClickForHome(boundHandleClickForApp);

    console.log('homeState:', this.state);

    return (
      <RestyledMain>
        <NameTag
          {...this.props}
          homeState={this.state}
          castTheSpell={castTheSpell}
        />
        <PulseBox
          {...this.props}
          spell={this.spell}
          homeState={this.state}
        />
        <PictureBox
          {...this.props}
          spell={this.spell}
          homeState={this.state}
        />
      </RestyledMain>
    );
  }

  componentDidUpdate() {}
}
