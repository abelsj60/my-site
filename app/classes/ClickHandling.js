import callReactGa from '../helpers/callReactGa.js';
import Referrer from './Referrer';
import ReactGA from 'react-ga';

export default class ClickHandling {
  constructor(component, outsideThis, props) {
    if (outsideThis.props.location === undefined) {
      throw new Error(
        'Caller must carry location.'
      );
    }

    const referrer = new Referrer(outsideThis.props);

    this._props = props;
    this._component = component;
    this._referrer = referrer;

    this.boundHandleClick = this._selectHandleClick(outsideThis);
  }

  // Binds a handleClick function to boundHandleClick; this
  // function will be invoked directly or passed as an arg.

  _selectHandleClick(outerThis) {
    let selectedHandler;

    switch (this._component) {
      case 'app':
        selectedHandler = this._handleClickForApp;
        break;
      case 'body':
        selectedHandler = this._handleClickForBody;
        break;
      case 'home':
        selectedHandler = this._handleClickForHome;
        break;
      case 'charm':
        selectedHandler = this._handleCharm;
        break;
      case 'contentLoader':
        selectedHandler = this._handleClickForContentLoader;
      default:
        break;
    }

    return selectedHandler.call(outerThis, this);
  }

  // Handles onClicks on App (top-level state).

  _handleClickForApp() {
    return (updateValue, valueOne, valueTwo) => {
      const {
        currentCaller,
        illustrationDelay,
        illustrationDirection,
        illustrationLevel,
        heartbeat,
        showBusinessCard,
        showLegalTerms,
        startDramaAtHome,
        tempContent,
        inCity,
        isMenu
      } = this.state;
      const stateToUpdate = {};
      const toggleStoryTextSequence = () => {
        if (illustrationDelay) {
          stateToUpdate.illustrationDelay = !illustrationDelay;
        }

        if (tempContent > 0) {
          stateToUpdate.tempContent = 0;
        }

        this.startIllustrationAnimation();
      };
      let category = '';
      let action = '';
      let label = '';

      switch (updateValue) {
        case 'updateTempContent':
          if (tempContent > 0 && (tempContent - valueOne) === 0) {
            stateToUpdate.tempContent = 0;
          } else {
            stateToUpdate.tempContent = valueOne;
          }
          category = 'App state';
          action = (tempContent - valueOne) === 0
            ? `Close ${
                tempContent === 1
                  ? 'business card'
                  : tempContent === 2
                    ? 'legal terms'
                    : 'header menu'
              }`
            : `Open ${
                valueOne === 1
                  ? 'business card'
                  : valueOne === 2
                    ? 'legal terms'
                    : 'header menu'
                }`;
          label = (tempContent - valueOne) === 0
            ? 'Toggled off'
            : `Swapped from ${
              tempContent === 1
                ? 'business card'
                : tempContent === 2
                  ? 'legal terms'
                  : 'header menu'
              }`;
          break;
        case 'toggleStoryText':
          toggleStoryTextSequence();
          category = 'App state';
          action = illustrationLevel > 0
            ? 'Hide story text'
            : 'Close story text';
          label = showBusinessCard
            ? 'Business card was open'
            : showLegalTerms
              ? 'Legal notice was open'
              : '';
          break;
        case 'updateIllustrationLevel':
          // Tracked by app so header/footer can respond
          stateToUpdate.illustrationLevel = valueOne;
          
          if (valueOne === 0) {
            stateToUpdate.illustrationDirection = 'enter';
          }

          category = 'App state';
          action = `Update illustration state: ${valueOne}`;
          label = valueOne !== 0
            ? illustrationDirection
            : 'enter';
          break;
        case 'updateIllustrationState':
          if (typeof valueOne !== 'undefined') {
            stateToUpdate.illustrationState = valueOne;
          }

          // valueTwo is positive when we automatically toggle text b/c
          // the illustrationDelay is on...
          if (valueTwo) {
            toggleStoryTextSequence();
          }

          category = 'App state';
          action = `Update chapter illustration status: ${valueOne}`;
          label = valueOne > 0
            ? 'loaded'
            : 'not-loaded';
          break;
        case 'toggleIllustrationDelay':
          stateToUpdate.illustrationDelay = !illustrationDelay;
          category = 'App state';
          action = `Delay illustration until loaded`;
          break;
        case 'swapBackground':
          stateToUpdate.inCity = !inCity;
          category = 'App state';
          action = !inCity
            ? 'Enter city'
            : 'Enter fantasy';
          break;
        case 'updateSpacerHeight':
          stateToUpdate.spacerHeight = this.calculateSpacerHeight();
          category = 'App state';
          action = 'Updated spacer height for /home';
          break;
        case 'updateNameTagWidth':
          stateToUpdate.nameTagWidth = this.calculateNameTagWidth();
          category = 'App state';
          action = 'Updated name tag width for /home';
          break;
        case 'toggleMenu':
          stateToUpdate.isMenu = !isMenu;
          category = 'App state';
          action = !isMenu
            ? `Enter: ${currentCaller} menu`
            : `Leave: ${currentCaller} menu`;
          break;
        case 'updateHeartbeat':
          stateToUpdate.homePageLoaded = true;

          if (heartbeat < 1) {
            stateToUpdate.heartbeat = 1;
          } else {
            stateToUpdate.heartbeat = 2;
          }

          category = 'App state';
          action = 'Update Heartbeat';
          label = stateToUpdate.homePageLoaded 
            ? 'Finished home page load'
            : 'Finished heartbeat';
          break;
        case 'startDramaAtHome':
          // Not logging to Google Analytics
          // Don't trigger b/c the HeaderNav's already in place...!
          if (startDramaAtHome !== 'never') {
            stateToUpdate.startDramaAtHome = 'yes';
          }
          break;
        case 'updateApp':
          // Not logging to Google Analytics
          if (valueOne !== undefined) {
            stateToUpdate.currentCaller = valueOne;
            stateToUpdate.lastCaller = currentCaller;
          }

          // Clear timeout when clicking a link in the headerMenu
          if (this.headerMenuTimeoutId) {
            clearTimeout(this.headerMenuTimeoutId);
            this.headerMenuTimeoutId = undefined;
          }

          stateToUpdate.tempContent = 0;

          if (heartbeat === 1) {
            stateToUpdate.heartbeat = 2;
          }

          /* Menu status:

            1. If any link is clicked, other than a MenuButton,
              we'll rebuild the state and toggle the menu
              (this will turn it off if it's on, i.e., a header
              link was clicked instead of the MenuButton).

            2. If the back or forward button is clicked,
              we'll rebuild the state and toggle the menu
              (this will turn it on/off based on the
              window.location). 
          */

          if (isMenu || valueTwo) {
            stateToUpdate.isMenu = !isMenu;
          }

          if (valueOne !== 'chapter') {
            // Always update illustrationState to 0 so we can assess what's going on 
            // next time we navigate to /chapter.
            stateToUpdate.illustrationState = 0;

            // Always turn illustrationDelay off when navigating away from /chapter.
            if (illustrationDelay) {
              stateToUpdate.illustrationDelay = false;
            }

            // Reset illustrationLevel if we're going anywhere from /chapter other than /reverie, 
            // or if we're going anywhere from /reverie other than /chapter. Note also that
            // valueOne is undefined when switching between reveries, so we filter it. 
            // See also: ContentLoader (constructor + cDU) for checks.

            if (this.illustrationDirection !== '') {
              if (
                currentCaller === 'chapter' && valueOne !== 'reverie' 
                || (currentCaller === 'reverie' && (valueOne !== 'chapter' && valueOne !== undefined))
              ) {
                delete this.illustrationLevels;
                this.illustrationLevels = [0, 0, 0, 0, 0, 0, 0];
                stateToUpdate.illustrationLevel = 0;
                stateToUpdate.illustrationDirection = '';
              }
            }
          }
          break;
        default:
          break;
      }

      if (
        updateValue !== 'updateApp' || updateValue !== 'startDramaAtHome'
          || updateValue !== 'updateNameTagWidth' || updateValue !== 'updateSpacerHeight'
      ) {
        if (callReactGa()) {
          if (category && action) {
            ReactGA.event({
              category,
              action,
              label: label ? label : null
            });
          }
        }
      }

      return this.setState(stateToUpdate);
    };
  }

  // Handles onClicks on Body (updates state for reloads).

  _handleClickForBody(self) {
    return (valueOne, valueTwo) => {
      const stateToUpdate = {};

      switch (self._referrer.location) {
        case 'chapter':
          stateToUpdate.indexForChapterData = valueOne;
          break;
        case 'projects':
          stateToUpdate.indexForProjectData = valueOne;
          stateToUpdate.indexForProjectPics = valueTwo;
          break;
        case 'journalism':
          stateToUpdate.indexForPublication = valueOne;
          stateToUpdate.indexForArticleData = valueTwo;
          break;
        case 'reverie':
          stateToUpdate.indexForReverieData = valueOne;
          break;
        default:
          break;
      }

      return this.setState(stateToUpdate);
    };
  }

  // Handles onClicks for ContentLoader (/projects only)

  _handleClickForContentLoader() {
    return (type, valueOne, valueTwo) => {
      const stateToUpdate = {};
      const {
        caller,
        thumbnailCount
      } = this.state;

      switch(type) {
        case 'imageLoader':
          stateToUpdate.imageLoaded = valueOne;
          break;
        case 'trackThumbnailCount':
          stateToUpdate.thumbnailCount = thumbnailCount + 1;
          break;
        case 'updateState':
          const { appState } = this.props;

          if (caller === 'chapter') {
            const isComplete = appState.images[`chapter-${valueOne + 1}-blurred`].complete;
            stateToUpdate.chapterIndex = valueOne;
            stateToUpdate.imageLoaded = appState.type !== 'mobile' && isComplete && !appState.offline ? 2 : 0;
          }

          if (caller === 'projects') {
            stateToUpdate.projectIndex = valueOne;
            stateToUpdate.thumbnailIndex = valueTwo;
            stateToUpdate.imageLoaded = 0;
          }

          if (caller === 'journalism') {
            stateToUpdate.headlineIndex = valueTwo;
          }
          
          if (caller === 'reverie') {
            stateToUpdate.reverieIndex = valueOne;
          }

        break;
      }

      this.setState(stateToUpdate);
    };
  }

  // Handles onClicks on Home (spell, part one).

  _handleClickForHome() {
    return (updateValue, propName) => {
      const {
        eventType,
        movement,
        spellLevel
      } = this.state;
      const stateToUpdate = {};

      switch (updateValue) {
        case 'toggleSpell':
          // Note: We toggleSpell after the spell
          // is cast in order to reset its state.

          stateToUpdate.movement = movement === 'enter'
            ? 'exit'
            : 'enter';

          if(spellLevel < 1) { // i.e., 0
            stateToUpdate.spellLevel = 1;
          } else { // i.e., 4
            stateToUpdate.spellLevel = 3;
          }

          // Reset spell after it's cast (background = 'transform')

          if (propName === 'transform') {
            stateToUpdate.score = 0;
            stateToUpdate.movement = '';
            stateToUpdate.spellLevel = 0;
          }

          break;
        case 'cast':
          // Note, the score never equals the goal b/c we cast at score + 1.

          stateToUpdate.spellLevel = 5;
          stateToUpdate.pattern = this.createSpellPattern();
          stateToUpdate.activeCharm = stateToUpdate.pattern[0];
          stateToUpdate.score = 0;

          // Reset the eventType to 'click' if it was 'touch'-ed. This prevents 
          // unexpected and unwanted propagation.

          if (eventType === 'touch') {
            stateToUpdate.eventType = 'click';
          }

          break;
        case 'resetEventType':
          stateToUpdate.eventType = 'click';
          break;
      }

      this.setState(stateToUpdate);
    };
  }

  // Handles onClicks on Charms (spell, part two).

  _handleCharm() {
    return isActive => {
      const { goal, score } = this.state;
      const abracadabra = score + 1 === goal; // Magic!
      const { boundHandleClickForApp } = this.props;
      const hcForHome = new ClickHandling('home', this);
      const boundHandleClickForHome = hcForHome.boundHandleClick;

      if (!isActive) { // The Charm's inactive (not pulsing).
        if (callReactGa()) {
          ReactGA.event({
            category: 'Home state',
            action: 'Wrong Charm clicked.',
            label: `The score was ${score}.`
          });
        }

        boundHandleClickForHome('toggleSpell');
      } else if (isActive && abracadabra) { // It's time for magic! (Maybe.)
        const { offline } = this.props.appState;

        if (callReactGa()) {
          ReactGA.event({
            category: 'Home state',
            action: !offline ? 'Spell successful.' : 'Spell successful, but offline!'
          });
        }

        if (offline) { // Offline? No magic so we don't have to deal with image loads.
          boundHandleClickForHome('toggleSpell');
        } else { // Online? Magic!
          boundHandleClickForHome('cast');
          boundHandleClickForApp('swapBackground');
        }
      } else { // We've hit an active Charm, increment the score.
        this.setState(state => {
          const newScore = state.score += 1;
          return {
            score: newScore,
            activeCharm: state.pattern[newScore]
          };
        });
      }
    }
  }
}
