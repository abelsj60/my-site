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
        illustrationState,
        heartbeat,
        showBusinessCard,
        showLegalTerms,
        tempContent,
        inCity,
        isMenu
      } = this.state;
      const stateToUpdate = {};
      const toggleStoryTextSequence = () => {
        if (illustrationDelay) {
          stateToUpdate.illustrationDelay = !illustrationDelay;
        }

        if (illustrationLevel === 0) {
          // Already 'enter' (default or reset to 'enter' by 'updateApp')
          stateToUpdate.illustrationLevel = 1; // 0 --> 1
        } else {
          stateToUpdate.illustrationLevel = 2; // 3 --> 2
          stateToUpdate.illustrationDirection = 'exit'
        }

        if (tempContent > 0) {
          stateToUpdate.tempContent = 0;
        }
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
          if (tempContent < 3 && valueOne === 3) {
            // Disable setTimeout to suspend auto-close
            this.headerMenuTimeoutId = setTimeout(() => {
              this.setState({ tempContent: 0 },
                () => {
                  // Reset timeout after timeout successfully runs
                  this.headerMenuTimeoutId = undefined;
                });
            }, 5000);
          } else {
            // Clear timeout if closing via the icon (img))
            clearTimeout(this.headerMenuTimeoutId);
            this.headerMenuTimeoutId = undefined;
          }
          // Legal terms and business card are tracked in TempContent.cDU. Is his really needed here?
          // What about header menu?
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
          stateToUpdate.illustrationState = valueOne;

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
        case 'updateApp':
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

          // 1. If any link is clicked, other than a MenuButton,
          // we'll rebuild the state and toggle the menu
          // (this will turn it off it it's on, i.e., a header
          // link was clicked instead of the MenuButton).

          // 2. If the back or forward button is clicked,
          // we'll rebuild the state and toggle the menu
          // (this will turn it on/off based on the
          // window.location).

          if (isMenu || valueTwo) {
            stateToUpdate.isMenu = !isMenu;
          }

          // Reset illustrationDelay when leaving /chapter
          if (illustrationDelay && valueOne !== 'chapter') {
            stateToUpdate.illustrationDelay = !illustrationDelay;
          }

          // We'll always hide the illustration when switching sections,
          // but not if going to, leaving, or changing the /reverie.

          if (
            (currentCaller === 'chapter' && valueOne !== 'reverie')
              || (currentCaller === 'reverie' && (valueOne !== 'chapter' && valueOne !== undefined))
          ) {
            if (illustrationLevel > 0) {
              if (illustrationDirection !== 'enter') {
                stateToUpdate.illustrationDirection = 'enter';
              }

              stateToUpdate.illustrationLevel = 0;
            }

            if (illustrationState !== 0) {
              stateToUpdate.illustrationState = 0;
            }
          }

          category = 'App state';
          action = 'Reset app';
          break;
        default:
          break;
      }

      if (updateValue !== 'updateApp') {
        if (process.env.NODE_ENV !== 'development') {
          if (category && action) {
            ReactGA.event({
              category,
              action,
              label: label
                ? label
                : null
            });
          }
        }
      }

      return this.setState(() => stateToUpdate);
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
      const { caller } = this.state;

      switch(type) {
        case 'imageLoader':
          stateToUpdate.imageLoaded = valueOne;
          break;
        case 'updateState':
          if (caller === 'chapter') {
            const blurredIllustrationState = this.props.appState.images[
              `chapter-${valueOne + 1}-blurred`
            ].complete
              ? 2
              : 0;
            stateToUpdate.chapterIndex = valueOne;
            stateToUpdate.imageLoaded = blurredIllustrationState;
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

          stateToUpdate.movement =
            movement === 'enter'
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
          // Note, the score never equals the goal 
          // b/c we cast at score + 1.

          stateToUpdate.spellLevel = 5;
          stateToUpdate.pattern = this.createSpellPattern();
          stateToUpdate.activeCharm = stateToUpdate.pattern[0];
          stateToUpdate.score = 0;

          // Reset the eventType to 'click' if it was
          // 'touch'-ed. This prevents unexpected
          // and unwanted propagation.

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

      // Either the Charm's inactive, or it's time for magic.

      if (!isActive || isActive && abracadabra) {
        // We can invoke ClickHandling with the proper 'this' b/c
        // we invoked it w/Home's 'this' value via .call()

        const hcForHome = new ClickHandling('home', this);
        const boundHandleClickForHome = hcForHome.boundHandleClick;

        if (isActive && abracadabra) {
          // We store the background value in App so it's remembered
          // as the user travels through the site.

          if (process.env.NODE_ENV !== 'development') {
            ReactGA.event({
              category: 'Home state',
              action: 'Spell successful.'
            });
          }

          boundHandleClickForHome('cast');
          boundHandleClickForApp('swapBackground');
        } else {
          if (process.env.NODE_ENV !== 'development') {
            ReactGA.event({
              category: 'Home state',
              action: 'Wrong Charm clicked.',
              label: `The score was ${score}.`
            });
          }

          boundHandleClickForHome('toggleSpell');
        }

        return null;
      }

      //  The Charm is active, and the user isn't done yet.

      this.setState(
        state => {
          const newScore = state.score += 1;
          return {
            score: newScore,
            activeCharm: state.pattern[newScore]
          };
        }
      );
    };
  }
}
