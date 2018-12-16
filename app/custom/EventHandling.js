export default class EventHandling {
  constructor(component, outsideThis) {
    const path = outsideThis.props.location.pathname;
    const referrer = path.split('/')[1];

    this._component = component;
    this._referrer = referrer;

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
      default:
        console.log('_selectHandleClick: Keep calm, carry on');
    }

    return selectedHandleClick.call(outerThis, this);
  }

  _handleClickForAppComponent() {
    return propertyToUpdate => {
      let stateToUpdate;

      switch (propertyToUpdate) {
        case 'showBusinessCard':
          stateToUpdate = { showBusinessCard: !this.state.showBusinessCard };
          break;
        case 'showLegalTerms':
          stateToUpdate = { showLegalTerms: !this.state.showLegalTerms };
          break;
        case 'showStoryText':
          stateToUpdate = { showStory: !this.state.showStory };
          break;
        default:
          console.log('_handleClickForAppComponent: Keep calm, carry on');
          break;
      }

      return this.setState(stateToUpdate);
    };
  }

  _handleClickForBodyComponent(innerThis) {
    return (propertyOne, propertyTwo) => {
      let stateToUpdate;

      switch (innerThis._referrer) {
        case 'chapter':
          stateToUpdate = { indexForChapterData: propertyOne };
          break;
        case 'projects':
          stateToUpdate = {
            indexForProjectData: propertyOne,
            indexForProjectPictures: propertyTwo
          };
          break;
        case 'journalism':
          stateToUpdate = {
            indexForArticleData: propertyOne,
            indexForPublicationData: propertyTwo
          };
          break;
        default:
          console.log('_handleClickForBodyComponent: Keep calm, carry on');
      }

      return this.setState(stateToUpdate);
    };
  }
}
