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
        animateImageBlur,
        chapter,
        currentCaller,
        showDelay,
        finishedHomePageLoad,
        heartbeat,
        images,
        showBusinessCard,
        showLegalTerms,
        inCity,
        showStoryText,
        isMenu,
        headerMenuIsOpen
      } = this.state;
      const stateToUpdate = {};
      const toggleStoryTextSequence = () => {
        if (showDelay) {
          stateToUpdate.showDelay = !showDelay;
        }

        stateToUpdate.showStoryText = !showStoryText;

        if (!animateImageBlur) {
          stateToUpdate.animateImageBlur = true;
        }

        if (showBusinessCard) {
          stateToUpdate.showBusinessCard = !showBusinessCard;
        }

        if (showLegalTerms) {
          stateToUpdate.showLegalTerms = !showLegalTerms;
        }
      };
      let category = '';
      let action = '';
      let label = '';

      if (
        animateImageBlur
          && updateValue !== 'toggleStoryText' 
      ) {
        // Turn off animateImageBlur if we're not toggling storyText
        // or returning to /chapter from /reverie (this controls
        // the fading of HTML elements via CSS in /chapter)

        stateToUpdate.animateImageBlur = false;
      }

      switch (updateValue) {
        case 'toggleBusinessCard':
          stateToUpdate.showBusinessCard = !showBusinessCard;
          
          if (showLegalTerms) {
            stateToUpdate.showLegalTerms = !showLegalTerms;
          }

          category = 'App state';
          action = !showBusinessCard
            ? 'Open business card'
            : 'Close business card';
          label = showLegalTerms
            ? 'Legal notice was open'
            : '';
          break;
        case 'toggleLegalTerms':
          stateToUpdate.showLegalTerms = !showLegalTerms;
          
          if (showBusinessCard) {
            stateToUpdate.showBusinessCard = !showBusinessCard;
          }

          category = 'App state';
          action = !showLegalTerms
            ? 'Open legal terms'
            : 'Close legal terms';
          label = showBusinessCard
            ? 'Business card was open'
            : '';
          break;
        case 'toggleStoryText':
          toggleStoryTextSequence();

          category = 'App state';
          action = showStoryText
            ? 'Hide story text'
            : 'Close story text';
          label = showBusinessCard
            ? 'Business card was open'
            : showLegalTerms
              ? 'Legal notice was open'
              : '';
          break;
        case 'setChapter':
          stateToUpdate.chapter = valueOne;

          if (valueTwo) {
            toggleStoryTextSequence();
          }

          break;
        case 'toggleShowDelay':
          stateToUpdate.showDelay = !showDelay;
          break;
        case 'swapBackground':
          stateToUpdate.inCity = !inCity;
          category = 'App state';
          action = !inCity
            ? 'Enter city'
            : 'Enter fantasy';
          break;
        case 'updateSpacerHeight':
          stateToUpdate.spacerHeight = this.calculateSpacerHeight(valueOne);
          category = 'App state';
          action = 'Updated spacer height for /home';
        case 'toggleMenu':
          stateToUpdate.isMenu = !isMenu;
          category = 'App state';
          action = !isMenu
            ? `Enter: ${currentCaller} menu`
            : `Leave: ${currentCaller} menu`;
          break;
        case 'updateHeartbeat':
            if (heartbeat < 1) {
              stateToUpdate.heartbeat = 1;
            } else {
              stateToUpdate.heartbeat = 3;
            }
            break;
        case 'finishedHomePageLoad':
          stateToUpdate.finishedHomePageLoad = true;
          category = 'App state';
          action = 'Finished home page loading';
          break;
        case 'toggleHeaderMenu':
          stateToUpdate.headerMenuIsOpen = !headerMenuIsOpen;

          if (!headerMenuIsOpen) {
            // Disable setTimeout to suspend auto-close
            this.headerMenuTimeoutId = setTimeout(() => {
              this.setState({ headerMenuIsOpen: false },
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

          stateToUpdate.headerMenuIsOpen = false;
          stateToUpdate.showBusinessCard = false;
          stateToUpdate.showLegalTerms = false;

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

          // We'll always hide the illustration when switching sections,
          // but not if going to, leaving, or changing the /reverie.

          if (
            valueOne !== undefined // Undefined when switching reveries
              && !(currentCaller === 'chapter' && valueOne === 'reverie')
              && !(currentCaller === 'reverie' && valueOne === 'chapter')
          ) {
            stateToUpdate.showStoryText = true;
          }

          if (showDelay && valueOne !== 'chapter') {
              stateToUpdate.showDelay = !showDelay;
          }

          if (
            valueOne !== 'chapter' 
              && (chapter > 0 || chapter < 0)
          ) {
            stateToUpdate.chapter = 0;
          }

          // Remove the loading sequence after 
          // images load. Can prevent user from
          // ever seeing heartbeat if he loads
          // clicks around, doesn't go to /home,
          // then reloads and goes /home. Eh?
          if (!finishedHomePageLoad) {
            let alreadyLoaded = 0;
            [
              'boyInForegroundImage',
              'boyInForegroundImageBlurred',
              'fantasyImage',
              'fantasyImageBlurred'
            ].forEach(name => {
              if (images[name].complete) {
                alreadyLoaded++;
              }
            });

            if (alreadyLoaded > 3) {
              stateToUpdate.heartbeat = 1;
              stateToUpdate.finishedHomePageLoad = true;
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
          ReactGA.event({
            category,
            action,
            label: label
              ? label
              : null
          });
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
      const { allContentData, caller } = this.state;

      switch(type) {
        case 'imageLoader':
          stateToUpdate.imageLoaded = true;
          break;
        case 'updateState':
          if (caller === 'chapter') {
            const titleIndex = valueOne;
            stateToUpdate.indexForChapterData = titleIndex;
            const chapterData = allContentData[titleIndex];
    
            stateToUpdate.chapterIndex = titleIndex;
            stateToUpdate.finalData = chapterData;
          }

          if (caller === 'projects') {
            const projectIndex = valueOne;
            const thumbnailIndex = valueTwo;
    
            stateToUpdate.projectIndex = projectIndex;
            stateToUpdate.thumbnailIndex = thumbnailIndex;
            stateToUpdate.finalData = allContentData[projectIndex];
            stateToUpdate.imageLoaded = false;
          }

          if (caller === 'journalism') {
            const headlineIndex = valueTwo;
  
            stateToUpdate.headlineIndex = headlineIndex;
            stateToUpdate.finalData = allContentData[headlineIndex];
          }
          
          if (caller === 'reverie') {
            const headlineIndex = valueOne;

            stateToUpdate.headlineIndex = headlineIndex;
            stateToUpdate.finalData = allContentData[headlineIndex];
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

          if(spellLevel < 1) {
            stateToUpdate.spellLevel = 1;
          } else {
            stateToUpdate.spellLevel = 3;
          }

          // Reset spell after background transform

          if (propName === 'transform') {
            // The spellLevel is only reset to 0 after
            // casting. It otherwise ends at 4 and
            // restarts at 1.

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
