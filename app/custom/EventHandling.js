import Referrer from './Referrer';

export default class EventHandling {
  constructor(component, outsideThis) {
    if (outsideThis.props.location === undefined) {
      throw 'Caller must carry location.';
    }

    const r = new Referrer(outsideThis.props);

    this._component = component;
    this._referrer = r.location;

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
        console.log('_selectHandleClick: Keep calm, carry on');
    }

    return selectedHandler.call(outerThis, this);
  }

  _handleClickForAppComponent() {
    return (updateValue, valueOne, valueTwo) => {
      const {
        showBusinessCard,
        showLegalTerms,
        pointsUnknown,
        homePageMagic,
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
          break;
        case 'swapHomePageImage':
          stateToUpdate.pointsUnknown = !pointsUnknown;
          if (!homePageMagic) {
            stateToUpdate.homePageMagic = !homePageMagic;
          }
          if (!pointsUnknown && showLegalTerms) {
            stateToUpdate.showLegalTerms = !showLegalTerms;
          }
          if (!pointsUnknown && showBusinessCard) {
            stateToUpdate.showBusinessCard = !showBusinessCard;
          }
          break;
        case 'cancelHomePageMagic':
          if (homePageMagic) {
            stateToUpdate.homePageMagic = !homePageMagic;
          }
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
          console.log('_handleClickForAppComponent: Keep calm, carry on');
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
          console.log('_handleClickForBodyComponent: Keep calm, carry on');
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
