export default class EventHandling {
  constructor(component, externalThis) {
    const path = externalThis.props.location.pathname;
    const referrer = path.split('/')[1];

    this._component = component;
    this._referrer = referrer;

    this.boundHandleClick = this._selectHandleClick(externalThis);
  }

  _selectHandleClick(t) {
    const component = this._component;

    switch (component) {
      case 'app':
        return this._handleClickForAppComponent.call(t);
      case 'body':
        return this._handleClickForBodyComponent.call(t, this._referrer);
    }
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
          console.log('handleClickForAppComponent: Keep calm, carry on');
          break;
      }

      return this.setState(stateToUpdate);
    };
  }

  _handleClickForBodyComponent(referrer) {
    return (paramOne, paramTwo) => {
      let stateToUpdate;

      switch (referrer) {
        case 'chapter':
          stateToUpdate = { indexForChapterData: paramOne };
          break;
        case 'projects':
          stateToUpdate = {
            indexForProjectData: paramOne,
            indexForProjectPictures: paramTwo
          };
          break;
        case 'journalism':
          stateToUpdate = {
            indexForArticleData: paramOne,
            indexForPublicationData: paramTwo
          };
          break;
        default:
          console.log('handleClickForBodyComponent: Keep calm, carry on');
      }

      return this.setState(stateToUpdate);
    };
  }
}
