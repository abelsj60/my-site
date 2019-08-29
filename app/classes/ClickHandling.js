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
        currentCaller,
        showBusinessCard,
        showLegalTerms,
        inCity,
        showStoryText,
        isMenu,
        headerMenuIsOpen
      } = this.state;
      const stateToUpdate = {};
      let category = '';
      let action = '';
      let label = '';

      switch (updateValue) {
        case 'toggleBusinessCard':
          stateToUpdate.animateImageBlur = false;
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
          stateToUpdate.animateImageBlur = false;
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
          stateToUpdate.animateImageBlur = true;
          stateToUpdate.showStoryText = !showStoryText;

          if (showBusinessCard) {
            stateToUpdate.showBusinessCard = !showBusinessCard;
          }

          if (showLegalTerms) {
            stateToUpdate.showLegalTerms = !showLegalTerms;
          }

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
        case 'toggleHomeAnimation':
          stateToUpdate.homeAnimation = 'done';
          category = 'App state';
          action = 'Ran home animation';
          break;
        case 'finishedHomePageLoad':
          stateToUpdate.finishedHomePageLoad = true;
          category = 'App state';
          action = 'Finished home page loading';
          break;
        case 'toggleHeaderMenu':
          stateToUpdate.animateImageBlur = false;
          stateToUpdate.headerMenuIsOpen = !headerMenuIsOpen;

          if (!headerMenuIsOpen) {
            this.headerMenuTimeoutId = setTimeout(() => {
              // Disable to suspend auto-close
              this.setState(
                { headerMenuIsOpen: false },
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
            if (currentCaller === 'chapter') {
              stateToUpdate.animateImageBlur = false;
            }

            if (valueOne === 'chapter') {
              stateToUpdate.animateImageBlur = true;
            }

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

  // Handles onClicks for ContentLoader, if 'projects'

  _handleClickForContentLoader() {
    return () => {
      const {
        caller,
        imageLoaded
      } = this.state;

      if (caller === 'projects') {
        this.setState({ imageLoaded: !imageLoaded });
      }
    };
  }

  // Handles onClicks on Home (spell, part one).

  _handleClickForHome() {
    return updateValue => {
      if (this.transition === 1) {
        return null;
      }

      const { isCasting, eventType } = this.state;
      const stateToUpdate = {};

      switch (updateValue) {
        case 'toggleSpell':
          stateToUpdate.isCasting = !isCasting;

          // Reset the spell when it ends.

          if (isCasting) {
            const newPattern = this.createSpellPattern();

            stateToUpdate.pattern = newPattern;
            stateToUpdate.activeCharm = newPattern[0];
            stateToUpdate.castSpell = false;
            stateToUpdate.score = 0;
          }

          break;
        case 'castSpell':
          // The castSpell prop controls styling during a turn.
          // Note, the score never equals the goal b/c we cast
          // at score + 1.

          // Even so, DO NOT ADD 1 to score here. Anecdotally
          // speaking, it noticeably slows down the
          // background transition.

          stateToUpdate.castSpell = true;

          // Reset the eventType to 'click' if it was
          // last 'touch'-ed. This property prevents
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
      const { score } = this.state;
      const abracadabra = score + 1 === this.goal; // Magic!

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

          this.props.boundHandleClickForApp('swapBackground');
          boundHandleClickForHome('castSpell');
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
