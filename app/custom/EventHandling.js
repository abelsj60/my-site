export default class EventHandling {
  constructor(component, outsideThis) {
    if (outsideThis.props.location === undefined) {
      throw 'EventHandling requires external this to carry props.location.';
    }

    this._component = component;
    this._referrer = outsideThis.props.location.pathname.split('/')[1];

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
}
