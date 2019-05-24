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
    this.charmRefs = [
      React.createRef(),
      React.createRef(),
      React.createRef()
    ];

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
      activeCharm: pattern[0], // Initial Charm is always [0].
      eventType: 'click'
    };

    this.trackTransitionEnd = this.trackTransitionEnd.bind(this);
    this.eventHandlerForMouseDown = this.eventHandlerForMouseDown.bind(this);
    this.eventHandlerForTouchStart = this.eventHandlerForTouchStart.bind(this);
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

    return (
      <RestyledMain>
        <NameTag
          {...this.props}
          homeState={this.state}
          boundHandleClickForHome={boundHandleClickForHome}
        />
        <Charms
          {...this.props}
          goal={this.goal}
          homeState={this.state}
          charmRefs={this.charmRefs}
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

  eventHandlerForMouseDown(num) {
    return () => {
      if (this.state.eventType === 'click') {
        const hcCharm = new ClickHandling('charm', this);
        const boundHandleCharm = hcCharm.boundHandleClick;

        boundHandleCharm(this.state.activeCharm === num);
      } else if (this.state.eventType === 'touch') {
        const hcHome = new ClickHandling('home', this);
        const boundHandleClick = hcHome.boundHandleClick;

        boundHandleClick('resetEventType');
      }
    };
  }

  eventHandlerForTouchStart(num) {
    return () => {
      const hcCharm = new ClickHandling('charm', this);
      const boundHandleCharm = hcCharm.boundHandleClick;

      this.setState({ eventType: 'touch' });
      boundHandleCharm(this.state.activeCharm === num);
    };
  }

  componentDidUpdate() {
    // https://github.com/facebook/react/issues/9809#issuecomment-413978405

    if (this.charmRefs[0].current) {
      this.charmRefs.forEach(
        (ref, idx) => {
          if (!ref.current.onclick) {
            ref.current.onmousedown = this.eventHandlerForMouseDown(idx + 1);
            ref.current.ontouchstart = this.eventHandlerForTouchStart(idx + 1);
          }
        }
      );
    }
  }
}
