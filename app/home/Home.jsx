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

    this.goal = 5; // Cast spell
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
    const {
      finishedHomePageLoad,
      height 
    } = this.props.appState;
    this.props.boundHandleClickForApp('updateSpacerHeight', height);
    this.fadeInTimeout = 0;

    this.state = {
      isCasting: false,
      castSpell: false,
      score: 0, // Used to select an active Charm and cast spell
      pattern: pattern,
      activeCharm: pattern[0], // Initial Charm is always [0]
      eventType: 'click', // Type of event triggered Charm,
      loadBoy: !finishedHomePageLoad, // Show blurredBoy
      loadFantasy: !finishedHomePageLoad, // Show blurredFantasy
      finishedLoadingBoy: finishedHomePageLoad, // Boy loaded
      finishedLoadingFantasy: finishedHomePageLoad, // Fantasy loaded
      fadeIn: false,
      nowShowing: '',
      fadeInDone: false
    };

    this.resetFadeIn = this.resetFadeIn.bind(this);
    this.handleInitialLoad = this.handleInitialLoad.bind(this);
    this.eventHandlerForMouseDown = this.eventHandlerForMouseDown.bind(this);
    this.eventHandlerForTouchStart = this.eventHandlerForTouchStart.bind(this);
  }

  render() {
    const hcForHome = new ClickHandling('home', this);
    const boundHandleClickForHome = hcForHome.boundHandleClick;

    return (
      <RestyledMain 
        home={true}
      >
        <NameTag
          {...this.props}
          homeState={this.state}
          resetFadeIn={this.resetFadeIn}
          boundHandleClickForHome={boundHandleClickForHome}
        />
        <Charms
          {...this.props}
          goal={this.goal}
          homeState={this.state}
          charmRefs={this.charmRefs}
          resetFadeIn={this.resetFadeIn}
        />
        <PictureBox
          {...this.props}
          homeState={this.state}
          handleInitialLoad={this.handleInitialLoad}
          boundHandleClickForHome={boundHandleClickForHome}
        />
      </RestyledMain>
    );
  }

  resetFadeIn() {
    if (this.state.fadeIn) {
      this.fadeInTimeout = 0;
      this.setState({
        fadeIn: false,
        fadeInDone: true
      });
    }
  }

  handleInitialLoad(type) {
    const stateToUpdate = {}

    switch(type) {
      case 'boy':
        stateToUpdate.loadBoy = false;
        break;
      case 'fantasy':
        stateToUpdate.loadFantasy = false;
        break;
      case 'finishedLoadingBoy':
        stateToUpdate.finishedLoadingBoy = true;
        break;
      case 'finishedLoadingFantasy':
        stateToUpdate.finishedLoadingFantasy = true;
        break;
      default:
        break;
    }

    this.setState(stateToUpdate)
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

  eventHandlerForMouseDown(num) {
    return () => {
      const { activeCharm, eventType } = this.state;
  
      if (eventType === 'click') {
        const hcCharm = new ClickHandling('charm', this);
        const boundHandleCharm = hcCharm.boundHandleClick;

        boundHandleCharm(activeCharm === num);
      } else if (eventType === 'touch') {
        // Resets event type to 'click' if a mouse suddenly works
        const hcHome = new ClickHandling('home', this);
        const boundHandleClick = hcHome.boundHandleClick;
        const boundHandleCharm = hcCharm.boundHandleClick;

        boundHandleClick('resetEventType');
        boundHandleCharm(activeCharm === num); // Async/other probs?
      }
    };
  }

  eventHandlerForTouchStart(num) {
    return () => {
      const hcCharm = new ClickHandling('charm', this);
      const boundHandleCharm = hcCharm.boundHandleClick;

      // Update the eventType on State if the Charm was
      // touched. This allows our onMouseDown listener
      // to reject its call due to even propagation.

      // There is a bug in React that prevents us from
      // simply calling event.stopPropagation() here.

      // Dan Abramov offers a solution, however, it
      // does not seem to work cleanly here. I've
      // come up w/my own hybridized approach.

      // I add handlers as he suggests so as to avoid
      // React's own propagation, then use State to
      // reject calls to mouseDown handler touch.

      // https://github.com/facebook/react/issues/9809#issuecomment-413978405

      this.setState({ eventType: 'touch' });
      boundHandleCharm(this.state.activeCharm === num);
    };
  }

  componentDidUpdate(prevProps) {
    // Let's add our eventHandler whenever cDU runs as a result of
    // toggling NameTag (which causes refs to be added to our
    // charmsRef array mounting Charms.

    // See full explanation in handleTouchStart.

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
