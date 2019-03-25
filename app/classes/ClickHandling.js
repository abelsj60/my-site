import Referrer from './Referrer';
// import ReactGA from 'react-ga';

export default class ClickHandling {
  constructor(component, outsideThis) {
    if (outsideThis.props.location === undefined) {
      throw new Error(
        'Caller must carry location.'
      );
    }

    const referrer = new Referrer(outsideThis.props);

    this._component = component;
    this._referrer = referrer.location;

    this.boundHandleClick = this._selectHandleClick(outsideThis);
  }

  _selectHandleClick(outerThis) {
    let selectedHandler;

    switch (this._component) {
      case 'app':
        selectedHandler = this._handleClickForAppComponent;
        break;
      case 'body':
        selectedHandler = this._handleClickForBodyComponent;
        break;
      case 'header':
        selectedHandler = this._handleClickForHeader;
        break;
      default:
        break;
    }

    return selectedHandler.call(outerThis, this);
  }

  _handleClickForAppComponent() {
    return (updateValue, valueOne, valueTwo) => {
      const {
        // currentCaller,
        showBusinessCard,
        showLegalTerms,
        inCity,
        showStoryText,
        isMenu
      } = this.state;
      const stateToUpdate = {};
      // let category = '';
      // let action = '';
      // let label = '';

      switch (updateValue) {
        case 'toggleBusinessCard':
          stateToUpdate.showBusinessCard = !showBusinessCard;
          if (showLegalTerms) {
            stateToUpdate.showLegalTerms = !showLegalTerms;
          }
          // category = 'Business card';
          // action = !showBusinessCard
          //   ? 'Clicked to open'
          //   : 'Clicked to close';
          // label = showLegalTerms
          //   ? 'Legal notice was open'
          //   : '';
          break;
        case 'toggleLegalTerms':
          stateToUpdate.showLegalTerms = !showLegalTerms;
          if (showBusinessCard) {
            stateToUpdate.showBusinessCard = !showBusinessCard;
          }
          // category = 'Legal terms';
          // action = !showLegalTerms
          //   ? 'Clicked to open'
          //   : 'Clicked to close';
          // label = showBusinessCard
          //   ? 'Business card was open'
          //   : '';
          break;
        case 'toggleStoryText':
          stateToUpdate.showStoryText = !showStoryText;
          if (showBusinessCard) {
            stateToUpdate.showBusinessCard = !showBusinessCard;
          }
          if (showLegalTerms) {
            stateToUpdate.showLegalTerms = !showLegalTerms;
          }
          // category = 'Show story text';
          // action = showStoryText
          //   ? 'Clicked to hide text'
          //   : 'Clicked to show text';
          // label = showBusinessCard
          //   ? 'Business card was open'
          //   : showLegalTerms
          //     ? 'Legal notice was open'
          //     : '';
          break;
        case 'swapHomePageImage':
          stateToUpdate.inCity = !inCity;
          // category = 'Swap home page background image';
          // action = !inCity
          //   ? 'Go to city realm'
          //   : 'Go to fantasy realm';
          break;
        case 'setCallers':
          stateToUpdate.currentCaller = valueOne;
          if (valueTwo !== 'reverie') {
            stateToUpdate.lastCaller = valueTwo;
          }
          break;
        case 'toggleMenu':
          stateToUpdate.isMenu = !isMenu;
          // category = 'Toggle menu';
          // action = !isMenu
          //   ? `Go to ${currentCaller} menu`
          //   : `Leave ${currentCaller} menu`;
          break;
        default:
          break;
      }

      if (updateValue !== 'setCallers') {
        // ReactGA.event({
        //   category,
        //   action,
        //   label
        // });
      }

      return this.setState(() => stateToUpdate);
    };
  }

  _handleClickForBodyComponent(innerThis) {
    return (valueOne, valueTwo) => {
      const stateToUpdate = {};

      switch (innerThis._referrer) {
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

  _handleClickForHeader() {
    return () => {
      const { menuIsOpen } = this.state;
      const toggleState = function() {
        this.setState({
          menuIsOpen: !menuIsOpen
        });
      };

      if (!menuIsOpen) {
        toggleState.call(this);
        this.timeoutId = setTimeout(() => {
          this.setState({ menuIsOpen: false });
        }, 5000);
      } else {
        clearTimeout(this.timeoutId);
        this.timeoutId = undefined;

        toggleState.call(this);
      }
    };
  }
}
