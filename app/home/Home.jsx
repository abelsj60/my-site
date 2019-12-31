import Charms from './Charms.jsx';
import ClickHandling from '../classes/ClickHandling.js';
import DebugHome from './DebugHome.jsx';
import eventManagement from '../helpers/eventManagement';
import Main from '../primitives/Main.jsx';
import NameTag from './NameTag.jsx';
import React, { Component } from 'react';
import {
  isIOS,
  osVersion
} from 'react-device-detect';
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

    // Charm array — eventHandlers added to refs via cDU. 
    this.charmRefs = [
      React.createRef(),
      React.createRef(),
      React.createRef()
    ];

    // Create an initial spell pattern.
    const initialPattern = this.createSpellPattern();
    /* Spacer height:
    
      The h1 takes additonal space above its top, all of which is included in the onlick region
      This spacer lets us limit the height of the clickable region to the actual text area...
      Also occupies space in document flow, putting NameTag / Charms at intended position 
    */
    this.props.boundHandleClickForApp('updateSpacerHeight');
    /* Load levels:
    
      [
        0 | fallback, 
        1 | blurredBoy, 
        2 | blurredForrest, 
        3 | blurredNyc, 
        4 | boy, 
        5 | forrest, 
        6 | city, 
        7 | hed
      ]

      a. Initial load — [ 3, 1, 1, 0, 1, 1, 0, 1 ]
      b. Internal nav — [ 3, 1, 1, 0, 1, 1, 0, 1 ]

      The array tracks onLoad and onTransitionEnd for '/' images and hed. It was separated
      from loadLevel to try to address a bug wherein some picture elements broke during
      painting to screen. In retrospect, the correlation may have been coincidental,
      however, this pattern is currently used for loading and chapter illustration
      animations... A future refactor should look at returning it to this.state. 
    */
    this.loadLevels = [0, 0, 0, 0, 0, 0, 0, 0]; // 8 elements
    // This setTimeout is turned off in cWU below.
    this.timeoutIdForSetSpellLevel = 0;
    // The cacheOfflineState is used to run the loading sequence when the net's restored.
    // It changes the expected loadLevel sums. See updateLoadingLevels() for more.
    this.cacheOfflineState = props.appState.offline;

    this.state = {
      activeCharm: initialPattern[0],
      badChoice: false, // Warn user of inActive Charm
      eventType: 'mousedown', // Type of event triggered Charm
      goal: 5,
      // Triggers transitions after setState({ loadLevels: X })
      // We'll bypass the loading sequence on iOS <= 7 b/c, according to
      // BrowserStack, it doesn't work. As a result, on iOS 7, we:
      //  1. Set loadLevel to 3 for all navigations (Home)
      //  2. Block spell casting on these devices (NameTag)
      //  3. Always add the background-color to the Nav bar (Header)
      loadLevel: isIOS && parseInt(osVersion) <= 7 ? 3 : 0, 
      movement: '', // 'enter' = Goto Charms, 'exit' = Goto NameTag
      pattern: initialPattern, // arr
      score: 0, // Used to select an active Charm and cast spell
      spellLevel: 0 // Used to control transition, animation use
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.setLoadLevels = this.setLoadLevels.bind(this);
    this.sumLoadLevels = this.sumLoadLevels.bind(this);
  }

  render() {
    const debugMe = false;
    const hcForHome = new ClickHandling('home', this);
    const boundHandleClickForHome = hcForHome.boundHandleClick;
    const setSpellLevel = {
      one: (isValid, caller) => this.setSpellLevelOne(isValid, caller),
      two: (isValid, caller) => this.setSpellLevelTwo(isValid, caller),
      three: (isValid, caller) => this.setSpellLevelThree(isValid, caller),
      four: (isValid, caller) => this.setSpellLevelFour(isValid, caller),
      reset: (isValid, caller) => this.resetSpell(isValid, caller)
    };

    return (
      <RestyledMain 
        home={true}
      >
        <NameTag
          {...this.props}
          boundHandleClickForHome={boundHandleClickForHome}
          homeState={this.state}
          setLoadLevels={this.setLoadLevels}
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
          setLoadLevels={this.setLoadLevels}
          setSpellLevel={setSpellLevel}
          sumLoadLevels={this.sumLoadLevels}
        />
        {debugMe && (
          <DebugHome
            {...this.props}
            homeState={this.state}
            loadLevels={this.loadLevels}
          />
         )}
      </RestyledMain>
    );
  }

  handleKeyDown(num) {
    return event => {
      if (event.keyCode === 13) {
        eventManagement(event);
        const hcCharm = new ClickHandling('charm', this);
        const boundHandleCharm = hcCharm.boundHandleClick;
        boundHandleCharm(this.state.activeCharm === num);
        this.setState({ eventType: 'keyboard' });
      }
    }
  }

  handleMouseDown(num) {
    return () => {
      // Why no eventManagement(event) here? So our window.onmousedown handler
      // can reset the tab state when this function is activated on a Charm!
      const { activeCharm, eventType } = this.state;

      if (eventType === 'mousedown' || eventType === 'keyboard') {
        const hcCharm = new ClickHandling('charm', this);
        const boundHandleCharm = hcCharm.boundHandleClick;
        boundHandleCharm(activeCharm === num);
      };

      if (eventType === 'keyboard' || eventType === 'touch') {
        this.setState({ eventType: 'mousedown' });
      };
    };
  }

  handleTouchStart(num) {
    return () => {
      const hcCharm = new ClickHandling('charm', this);
      const boundHandleCharm = hcCharm.boundHandleClick;

      /* Touch v. mousedown handling:

        Update the eventType on State if the Charm was
        touched. This allows our onMouseDown listener
        to reject its call after event propagation.

        There is a bug in React that prevents us from
        simply calling event.stopPropagation() here.

        Dan Abramov offers a solution, however, it
        does not seem to work cleanly here. I've
        come up w/my own hybridized approach.

        I add handlers as he suggests so as to avoid
        React's own propagation, then use State to
        reject calls to handleMouseDown handler.

        https://github.com/facebook/react/issues/9809#issuecomment-413978405 
      */

      // Stops handleMouseDown from hitting the wrong Charm.
      this.setState({ eventType: 'touch' }); 
      boundHandleCharm(this.state.activeCharm === num);
    };
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

  resetSpell(isValid, caller) {
    if (!isValid) return null;
    if (caller === 'InnerContainer' || caller === 'offlineEscapeHatch') {
      /* NameTag --> onTransitionEnd

        Only called when exiting the spell early. The spell
        should typically be reset when the spell's cast. 
      */

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

  selectLoadLevelsTarget(a, b) {
    return !this.cacheOfflineState ? a : b;
  }

  setLoadLevel(type, target) {
    const { loadLevel } = this.state;

    if (this.sumLoadLevels(type) === target) {
      this.setState({ loadLevel: loadLevel + 1 }, () => {
        // Update App's state so the Header can fade the Nav's background-color 
        // into view. Do it here, after setState, so the timing is the same 
        // when starting on home and navigating to it from w/n the site.

        if (this.state.loadLevel === 2) {
          this.props.boundHandleClickForApp('startDramaAtHome');
        }
      });
    }
  }

  setLoadLevels(idx) {
    // 1. Let's update the loadLevels (via onLoad and onTransitionEnd)
    // 2. This top filter is needed for iOS when objectFitImages is active
    
    this.loadLevels[idx] = this.loadLevels[idx] + 1;
    this.updateLoadLevel(); // Should we setState() for re-render?
  }

  setSpellLevel(val) {
    /* Casting spells:

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

    // Use the timeout to give animations a chance to run. They didn't always 'feel'
    // right before this, but they seemed to 'feel' better after it — ya knows?

    this.timeoutIdForSetSpellLevel = setTimeout(() => this.setState({ spellLevel: val }), 100); // ! Need this?
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

  sumAll() {
    const allImages = [0, 1, 2, 3, 4, 5, 6, 7];
    return this.sumImageSet(allImages);
  }

  sumBlurs(inCity) {
    // blurredBoy, blurredForrest OR blurredNyc
    const blurredImages = [1, !inCity ? 2 : 3];
    return this.sumImageSet(blurredImages);
  }

  sumFallback() {
    return this.sumImageSet([0]);
  }

  sumImageSet(imageSet) {
    return imageSet.reduce((acc, cur) => acc + this.loadLevels[cur], 0);
  }

  sumInitialSet() {
    // fallback, boyForeground, forrestBackground, hed
    const initialImages = [0, 4, 5, 7];
    return this.sumImageSet(initialImages);
  }

  sumLoadLevels(type) {
    const { inCity } = this.props.appState;
    switch(type) {
      case 'all':
        return this.sumAll();
      case 'blurs':
        return this.sumBlurs(inCity);
      case 'fallback':
        return this.sumFallback();
      case 'initialSet':
        return this.sumInitialSet();
      default:
        return 'Error! Caller needs a type!'
    }
  }

  updateLoadLevel() {
    const { homePageLoaded, type } = this.props.appState;
    const { loadLevel } = this.state;

    if (!homePageLoaded) {
      // Used by all devices for initial load
      switch (loadLevel) {
        case 0:
          this.setLoadLevel('fallback', 1);
          break;
        case 1:
          this.setLoadLevel('initialSet', this.selectLoadLevelsTarget(5, 4));
          break;
        case 2:
          this.setLoadLevel('initialSet', this.selectLoadLevelsTarget(6, 5));
          break;
        default:
          return 'Error!';
      }
    } else if (homePageLoaded) {
      // Used by mobile only, tracks fallback image
      if (type === 'mobile') {
        switch (loadLevel) {
          case 0:
            this.setLoadLevel('all', 3);
            break;
          case 1:
            this.setLoadLevel('all', type === 'mobile' ? 4 : 3);
            break;
          default:
            return 'Error!';
        }
      } else {
        // Used by laptops / desktops, fallback image not used
        this.setLoadLevel('all', 3);
      }
    }
  }

  componentDidUpdate() {
    /* Charm refs:

      Add eventHandlers when cDU runs as a result of clicking/tapping the 
      Hed in NameTag. We do this by adding refs to our Charm array as they 
      mount. See 'Touch v. click handling' in handleTouchStart for more. 
    */

    if (this.charmRefs[0].current) {
      // The events haven't been added yet. Add them now.
      if (!this.charmRefs[0].current.onmousedown) { 
        this.charmRefs.forEach(
          (ref, idx) => {
            const charmNumber = idx + 1;
            ref.current.onmousedown = this.handleMouseDown(charmNumber);
            ref.current.ontouchstart = this.handleTouchStart(charmNumber);
            ref.current.onkeydown = this.handleKeyDown(charmNumber);
          }
        );
      } else if (this.props.appState.tabbed) {
        /* If the user's tabbing through:

          We'll update the spell in the following circs:
            1. When in the spell, not exiting it. The Hed would lose focus otherwise.
            2. If the home.state.eventType is 'keyboard', not 'mousedown' or 'touch'.
              -We want to blur out the focus when the user stops tabbing.
            3. If the score is > 0 or a badChoice has been made.
              -If the score is 0, we want to let the focus stay on the Hed so the user 
                can easily exit it.
              -If the user makes a badChoice, we'll jump to the correct Charm as a hint.
                We want to do this starting w/0 so the behavior's always consistent.
        */
        if (
          this.state.movement === 'enter'
            && this.state.eventType === 'keyboard' 
            && (this.state.score > 0 || this.state.badChoice)
        ) {
          // On setTimeout(..., 0) --> https://stackoverflow.com/a/33963453
          const charmEl = document.getElementById(`${this.state.activeCharm - 1}`);
          setTimeout(() => charmEl.focus(), 0);
        }
      }
    }

    // Start the heartbeat and update homePageLoaded.
    // Future idea: homePageLoaded should really be updated via its own property before
    // the heartbeat starts, but implementing this is a real hassle right now.
    if (!this.props.appState.homePageLoaded) {
      if (this.state.loadLevel === 3) {
        this.props.boundHandleClickForApp('updateHeartbeat');
      }
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutIdForSetSpellLevel);
  }
}
