import Referrer from './Referrer';

export default class EventHandling {
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
        showBusinessCard,
        showLegalTerms,
        inCity,
        showStoryText,
        isMenu
      } = this.state;
      const stateToUpdate = {};

      switch (updateValue) {
        case 'toggleBusinessCard':
          stateToUpdate.showBusinessCard = !showBusinessCard;
          if (showLegalTerms) {
            stateToUpdate.showLegalTerms = !showLegalTerms;
          }
          break;
        case 'toggleLegalTerms':
          stateToUpdate.showLegalTerms = !showLegalTerms;
          if (showBusinessCard) {
            stateToUpdate.showBusinessCard = !showBusinessCard;
          }
          break;
        case 'toggleStoryText':
          stateToUpdate.showStoryText = !showStoryText;
          if (showBusinessCard) {
            stateToUpdate.showBusinessCard = !showBusinessCard;
          }
          if (showLegalTerms) {
            stateToUpdate.showLegalTerms = !showLegalTerms;
          }
          break;
        case 'swapHomePageImage':
          stateToUpdate.inCity = !inCity;
          break;
        case 'setCallers':
          stateToUpdate.currentCaller = valueOne;
          if (valueTwo !== 'reverie') {
            stateToUpdate.lastCaller = valueTwo;
          }
          break;
        case 'toggleMenu':
          stateToUpdate.isMenu = !isMenu;
          break;
        default:
          break;
      }

      return this.setState(stateToUpdate);
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
        }, 4000);
      } else {
        clearTimeout(this.timeoutId);
        this.timeoutId = undefined;

        toggleState.call(this);
      }
    };
  }
}
