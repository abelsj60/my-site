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
    return propertyToUpdate => {
      const {
        showBusinessCard,
        showLegalTerms,
        blockPointer,
        showStory
      } = this.state;
      let stateToUpdate;

      switch (propertyToUpdate) {
        case 'showBusinessCard':
          stateToUpdate = { showBusinessCard: !showBusinessCard };
          break;
        case 'showLegalTerms':
          stateToUpdate = { showLegalTerms: !showLegalTerms };
          break;
        case 'showStoryText':
          stateToUpdate = { showStory: !showStory };
          break;
        case 'toggleMagicPointer':
          stateToUpdate = {
            blockPointer: !blockPointer
          };
        default:
          console.log('_handleClickForAppComponent: Keep calm, carry on');
      }

      return this.setState(stateToUpdate);
    };
  }

  _handleClickForBodyComponent(innerThis) {
    return (propertyOne, propertyTwo) => {
      let stateToUpdate;

      switch (innerThis._referrer) {
        case 'story':
          stateToUpdate = { indexForChapterData: propertyTwo };
          break;
        case 'projects':
          stateToUpdate = {
            indexForProjectData: propertyOne,
            indexForProjectPics: propertyTwo
          };
          break;
        case 'journalism':
          stateToUpdate = {
            indexForPublication: propertyOne,
            indexForArticleData: propertyTwo
          };
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
