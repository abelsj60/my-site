import Referrer from './Referrer.js';

export default class BuildState {
  constructor(component, props, location) {
    const referrer = new Referrer(props);

    this.referrer = referrer.location;
    this.location = location;
    this.component = component;
  }

  now(type) {
    switch (type) {
      case 'indexForChapterData':
        return this._initialIndexForChapterData;
      case 'indexForProjectData':
        return this._initialIndexForProjectData;
      case 'indexForProjectPics':
        return this._initialIndexForProjectPics;
      case 'indexForPublication':
        return this._initialIndexForPublication;
      case 'indexForArticleData':
        return this._initialIndexForArticleData;
      default:
        console.log('State.buildState: Keep calm, carry on');
    }

    return;
  }

  get _initialIndexForChapterData() {
    if (this.referrer === 'story') {
      return this.location.params.twoToIndex() !== -1
        ? this.location.params.twoToIndex()
        : undefined;
    }
  }

  get _initialIndexForProjectData() {
    if (this.referrer === 'projects') {
      return this.location.params.oneToIndex() !== -1
        ? this.location.params.oneToIndex()
        : undefined;
    }
  }

  get _initialIndexForProjectPics() {
    if (this.referrer === 'projects') {
      return this.location.params.twoToIndex() !== -1
        ? this.location.params.twoToIndex()
        : undefined;
    }
  }

  get _initialIndexForPublication() {
    if (this.referrer === 'journalism') {
      return this.location.params.oneToIndex() !== -1
        ? this.location.params.oneToIndex()
        : undefined;
    }
  }

  get _initialIndexForArticleData() {
    if (this.referrer === 'journalism') {
      return this.location.params.twoToIndex() !== -1
        ? this.location.params.twoToIndex()
        : this.location.params.firstArticleToMatchPublication !== -1
          ? this.location.params.firstArticleToMatchPublication
          : undefined;
    }
  }
}
