import Charms from './Charms.jsx';
import ClickHandling from '../classes/ClickHandling.js';
import Main from '../primitives/Main.jsx';
import NameTag from './NameTag.jsx';
import React, { Component, Fragment } from 'react';
import PictureBox from './PictureBox.jsx';
import styled from 'styled-components';

const RestyledMain = styled(Main)`
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  flex-direction: column;
  position: relative;
`;
const Debug = styled.div`
  position: absolute;
  top: ${p => p.top}px;
  background-color: rgba(0, 0, 0, .5);
  color: white;
  padding: 10px;
  z-index: 5;
`;

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.charmRefs = [
      React.createRef(),
      React.createRef(),
      React.createRef()
    ];

    // Create an initial spell pattern.
    const initialPattern = this.createSpellPattern();

    // The h1 takes additonal space above its top, all of which is included in the onlick region
    // This spacer lets us limit the height of the clickable region to the actual text area...
    // Also occupies space in document flow, putting NameTag / Charms at intended position
    this.props.boundHandleClickForApp('updateSpacerHeight');

    this.state = {
      activeCharm: initialPattern[0],
      eventType: 'click', // Type of event triggered Charm
      goal: 5,
      // [blurredBoy, blurredForrest, boy, forrest]
      //  - [2, 2, 1, 1] for initial load (blurred versions 
      // to give new viewers something interesting to see)
      //  - [1, 1, 1, 1] after traveling (transitions are off, keep it quick!)
      // loadLevel: [0, 0, 0, 0], 
      // New:
      // [fallback, blur 1, blur 2, blur 3, boy, forrest, city]
      loadLevel: [0, 0, 0, 0, 0, 0, 0],
      movement: '', // 'enter' = Goto Charms, 'exit' = Goto NameTag
      pattern: initialPattern, // arr
      score: 0, // Used to select an active Charm and cast spell
      spellLevel: 0 // Used to control transition, animation use
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.setLoadLevel = this.setLoadLevel.bind(this);
    this.sumLoadLevels = this.sumLoadLevels.bind(this);
    this.setSpellLevelOne = this.setSpellLevelOne.bind(this);
    this.setSpellLevelTwo = this.setSpellLevelTwo.bind(this);
    this.setSpellLevelThree = this.setSpellLevelThree.bind(this);
    this.setSpellLevelFour = this.setSpellLevelFour.bind(this);
    this.resetSpell = this.resetSpell.bind(this);
  }

  render() {
    const hcForHome = new ClickHandling('home', this);
    const boundHandleClickForHome = hcForHome.boundHandleClick;
    const setSpellLevel = { // v = isValid, c = caller
      one: (isValid, caller) => this.setSpellLevelOne(isValid, caller),
      two: (isValid, caller) => this.setSpellLevelTwo(isValid, caller),
      three: (isValid, caller) => this.setSpellLevelThree(isValid, caller),
      four: (isValid, caller) => this.setSpellLevelFour(isValid, caller),
      reset: (isValid, caller) => this.resetSpell(isValid, caller)
    };

    const loadLevels = {
      set: idx => this.setLoadLevel(idx),
      sum: type => this.sumLoadLevels(type)
    };

    return (
      <RestyledMain 
        home={true}
      >
        <NameTag
          {...this.props}
          boundHandleClickForHome={boundHandleClickForHome}
          homeState={this.state}
          loadLevels={loadLevels}
          setSpellLevel={setSpellLevel}
        />
        <Charms
          {...this.props}
          charmRefs={this.charmRefs}
          homeState={this.state}
          setSpellLevel={setSpellLevel}
        />
        <PictureBox
          {...this.props}
          boundHandleClickForHome={boundHandleClickForHome}
          homeState={this.state}
          loadLevels={loadLevels}
          setSpellLevel={setSpellLevel}
        />
        {
          <Fragment>
            <Debug
              top="275"
            >
              homePageLoaded: {this.props.appState.homePageLoaded.toString()}
            </Debug>
            <Debug
              top="325"
            >
              loadLevels.sum('all'): {loadLevels.sum('all')}
            </Debug>
            <Debug
              top="375"
            >
              [ {this.state.loadLevel.toString()} ]
            </Debug>
          </Fragment>
        }
      </RestyledMain>
    );
  }

  createSpellPattern() {
    const pattern = [];

    for (let i = 0; i < 5; i++) {
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

  setLoadLevel(idx) {
    // Doesn't need to be bound in constructor b/c the
    // calling values are bound (creating a closure)

    if (this.state.loadLevel[idx] < 3) {
      const newArr = [].concat(this.state.loadLevel);
      const lastValue = newArr[idx];
      newArr[idx] = lastValue + 1;
      this.setState({ loadLevel: newArr });
    }
  }

  sumImageSet(imageSet) {
    return imageSet.reduce((acc, cur) => acc + this.state.loadLevel[cur], 0);
  }

  sumAll() {
    const allImages = [0, 1, 2, 3, 4, 5, 6];
    return this.sumImageSet(allImages);
  }

  sumBlurs(inCity) {
    // blurredBoy, blurredForrest OR blurredNyc
    const blurredImages = [1, !inCity ? 2 : 3];
    return this.sumImageSet(blurredImages);
  }

  sumInitialSet(inCity) {
    // blurredBoy, blurredForrest OR blurredNyc
    const initialImages = [0, 1, 2, 4, 5];
    return this.sumImageSet(initialImages);
  }

  sumOnScreen(inCity) {
    // boy + forrest OR NYC
    const onScreenImages = [4, !inCity ? 5 : 6];
    return this.sumImageSet(onScreenImages);
  }

  sumLoadLevels(type) {
    const { inCity } = this.props.appState;
    switch(type) {
      case 'all':
        return this.sumAll();
      case 'blurs':
        return this.sumBlurs(inCity);
      case 'fallback':
        return this.state.loadLevel[0];
      case 'initialSet':
        return this.sumInitialSet();
      case 'onScreen':
        return this.sumOnScreen(inCity);
      default:
        return 'Error! Caller needs a case!'
    }
  }

  setSpellLevel(val) {
    // Doesn't need to be bound in constructor b/c the
    // calling values are bound (creating a closure)
    this.setState({ spellLevel: val });
  }

  setSpellLevelOne(isValid, caller) {
    if (!isValid) return null;
    if (caller === 'BlurredForrest' || caller === 'BlurredNyc') {
      // onTransitionEnd
      this.setSpellLevel(1);
    }
  }

  setSpellLevelTwo(isValid, caller) {
    if (!isValid) return null;
    if (caller === 'OuterContainer' || caller === 'InnerContainer') {
      // a. Charms/OuterContainer, b. NameTag/InnerContainer --> onTransitionEnd
      this.setSpellLevel(2);
    };
  }

  setSpellLevelThree(isValid, caller) {
    if (!isValid) return null;
    if (caller === 'BlurredForrest' || caller === 'BlurredNyc') {
      // onTransitionEnd
      this.setSpellLevel(3);
    }
  }

  setSpellLevelFour(isValid, caller) {
    if (!isValid) return null;
    if (caller === 'OuterContainer') {
      // Charms --> onTransitionEnd
      this.setSpellLevel(4);
    }
  }

  resetSpell(isValid, caller) {
    if (!isValid) return null;
    if (caller === 'InnerContainer') {
      // NameTag --> onTransitionEnd
      // Only called when exiting the spell early. The spell
      // should typically be reset when the spell's cast.
      const newPattern = this.createSpellPattern();
      this.setState({
        activeCharm: newPattern[0],
        movement: '',
        pattern: newPattern,
        score: 0,
        spellLevel: 0
      });
    }
  }

  handleMouseDown(num) {
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
        boundHandleClick('resetEventType');
      }
    };
  }

  handleTouchStart(num) {
    return () => {
      const hcCharm = new ClickHandling('charm', this);
      const boundHandleCharm = hcCharm.boundHandleClick;

      // Update the eventType on State if the Charm was
      // touched. This allows our onMouseDown listener
      // to reject its call due to event propagation.

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

  componentDidUpdate() {
    // Let's add our eventHandler whenever cDU runs as a result of toggling
    // the NameTag. This causes refs to be added to our charms (an array)
    // as they mount. See also handleTouchStart.

    if (this.charmRefs[0].current) {
      this.charmRefs.forEach(
        (ref, idx) => {
          if (!ref.current.onclick) {
            ref.current.onmousedown = this.handleMouseDown(idx + 1);
            ref.current.ontouchstart = this.handleTouchStart(idx + 1);
          }
        }
      );
    }

    if (!this.props.appState.homePageLoaded) {
      if (this.sumLoadLevels('all') > 5) {
        // ClickHandling: set to 2 and homePageLoaded = true
        // console.log('update heartbeat');
        // this.props.boundHandleClickForApp('updateHeartbeat');
      }
    }
  }
}

/* Spell process

  1. Movement is '' on initial load
  2. Movement becomes 'enter' and spellLevel is 1 on first click
  3. spellLevel 1 transitions NameTag Bio to 0 (previously 1)
  4. spellLevel 1 becomes 2 onTransitionEnd for Home/NameTag/InnerContainer (opacity)
  5. spellLevel 2 sets display: none for Home/NameTag/InnerContainer
  6. spellLevel 2 transitions opacity to 1 for BlurredForrestImage
  7. spellLevel 2 becomes 3 onTransitionEnd for PictureBox/BlurredForrestImage (opacity)
  8. spellLevel 3 transitions opacity to 1 for Charms/OuterContainer (previously: 0)
  9. spellLevel 3 becomes 4 onTransitionEnd for Charms/OuterContainer (opacity)

  --

  10. Movement becomes 'exit' and spellLevel 4 becomes 3 on click
  11. spellLevel 3 transitions Charms to 0 (previously 1)
  12. spellLevel 3 becomes 2 onTransitionEnd for Charms/OuterContainer (opacity)
  13. spellLevel 2 sets display: block for Home/NameTag/InnerContainer
  14. spellLevel 2 transitions opacity to 0 for PictureBox/BlurredForrestImage
  15. spellLevel 2 becomes 1 onTransitionEnd for PictureBox/BlurredForrestImage (opacity)
  16. spellLevel 1 transitions opacity to 1 for Home/NameTag/InnerContainer
  17. spellLevel becomes 0 onTransitionEnd for Home/NameTag/InnerContainer (opacity)
  18. Movement is reset to '' onTransitionEnd in PictureBox/FantasyImage or PictureBox/CityImage (opacity)

  --

  19. spellLevel becomes 5 when the spell is cast
  20. spellLevel is reset to 0 onTransitionEnd in PictureBox/CityImage (transform)
  21. Movement is reset to '' onTransitionEnd in PictureBox/FantasyImage (transform)
*/
