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
      case 'header':
        selectedHandler = this._handleClickForHeader;
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
        showBusinessCard,
        showLegalTerms,
        inCity,
        showStoryText,
        isMenu
      } = this.state;
      const stateToUpdate = {};
      let category = '';
      let action = '';
      let label = '';

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
        case 'toggleMenu':
          stateToUpdate.isMenu = !isMenu;
          category = 'App state';
          action = !isMenu
            ? `Enter: ${currentCaller} menu`
            : `Leave: ${currentCaller} menu`;
          break;
        case 'updateApp':
          if (valueOne !== undefined) {
            stateToUpdate.currentCaller = valueOne;
            stateToUpdate.lastCaller = currentCaller;
          }

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
          // but not if going to or leaving /reverie.

          if (
            !(currentCaller === 'chapter' && valueOne === 'reverie')
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
        ReactGA.event({
          category,
          action,
          label: label
            ? label
            : null
        });
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

  // Handles onClicks on Header (header menu).

  _handleClickForHeader() {
    return () => {
      const { menuIsOpen } = this.state;

      // Let's define a function w/the Header's 'this'
      // value to control the header state.

      const toggleState = function() {
        this.setState({
          menuIsOpen: !menuIsOpen
        });
      };

      if (!menuIsOpen) {
        // We'll use .call to invoke our function so
        // as to ensure the 'this' value is right.
        // Alternative: We could define it externally
        // and pass it in.

        toggleState.call(this);
        this.timeoutId = setTimeout(() => {
          // Comment next line to suspend auto-close
          this.setState({ menuIsOpen: false });
        }, 5000);
      } else {
        clearTimeout(this.timeoutId);
        this.timeoutId = undefined;

        // See comment above.

        toggleState.call(this);
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

          if (eventType === 'touch') {
            stateToUpdate.eventType = 'click';
          }
          break;
        case 'resetEventType':
          stateToUpdate.eventType = 'click';
      }

      this.setState(stateToUpdate);
    };
  }

  // Handles onClicks on Charms (spell, part two).

  _handleCharm() {
    return isActive => {
      const { score } = this.state;
      const abracadabra = score + 1 === this.goal; // Magic!

      // The Charm isn't active, or it's time for magic.

      if (!isActive || isActive && abracadabra) {
        // We can invoke ClickHandling with the proper 'this' b/c
        // we invoked it w/Home's 'this' value via .call()

        const hcForHome = new ClickHandling('home', this);
        const boundHandleClickForHome = hcForHome.boundHandleClick;

        if (isActive && abracadabra) {
          // We store the background value in App so it's remembered
          // as the user travels through the site.

          ReactGA.event({
            category: 'Home state',
            action: 'Spell successful.'
          });

          this.props.boundHandleClickForApp('swapBackground');
          boundHandleClickForHome('castSpell');
        } else {
          ReactGA.event({
            category: 'Home state',
            action: 'Wrong Charm clicked.',
            label: `The score was ${score}.`
          });

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
