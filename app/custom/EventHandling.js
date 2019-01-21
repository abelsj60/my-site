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
    let selectedHandleClick;

    switch (this._component) {
      case 'app':
        selectedHandleClick = this._handleClickForAppComponent;
        break;
      case 'body':
        selectedHandleClick = this._handleClickForBodyComponent;
        break;
      case 'header':
        selectedHandleClick = this._handleClickForHeader;
        break;
      default:
        console.log('_selectHandleClick: Keep calm, carry on');
    }

    return selectedHandleClick.call(outerThis, this);
  }

  _handleClickForAppComponent() {
    return (propertyToUpdate, propertyOne, propertyTwo) => {
      const {
        showBusinessCard,
        showLegalTerms,
        blockPointer,
        showStoryText,
        isMenu
      } = this.state;
      const stateToUpdate = {};

      switch (propertyToUpdate) {
        case 'showBusinessCard':
          stateToUpdate.showBusinessCard = !showBusinessCard;
          break;
        case 'showLegalTerms':
          stateToUpdate.showLegalTerms = !showLegalTerms;
          break;
        case 'showStoryText':
          stateToUpdate.showStoryText = !showStoryText;
          break;
        case 'toggleMagicPointer':
          stateToUpdate.blockPointer = !blockPointer;
        case 'callers':
          stateToUpdate.currentCaller = propertyOne;
          if (propertyTwo !== 'reverie') {
            stateToUpdate.lastCaller = propertyTwo;
          }
          break;
        case 'isMenu':
          stateToUpdate.isMenu = !isMenu;
          break;
        default:
          console.log('_handleClickForAppComponent: Keep calm, carry on');
      }

      return this.setState(stateToUpdate);
    };
  }

  _handleClickForBodyComponent(innerThis) {
    return (propertyOne, propertyTwo) => {
      const stateToUpdate = {};

      switch (innerThis._referrer) {
        case 'chapter':
          stateToUpdate.indexForChapterData = propertyOne;
          break;
        case 'projects':
          stateToUpdate.indexForProjectData = propertyOne;
          stateToUpdate.indexForProjectPics = propertyTwo;
          break;
        case 'journalism':
          stateToUpdate.indexForPublication = propertyOne;
          stateToUpdate.indexForArticleData = propertyTwo;
          break;
        case 'reverie':
          stateToUpdate.indexForReverieData = propertyOne;
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
