import Referrer from './Referrer.js';

export default class InitialState {
  constructor(component, props, location) {
    const referrer = new Referrer(props);

    this._referrer = referrer.location;
    this._params = location.params;
    this._component = component;
  }

  build(type) {
    let index;

    switch (type) {
      case 'indexForChapterData':
        if (this._referrer === 'story') {
          index = this._initialIndexForChapterData;
        }
        break;
      case 'indexForProjectData':
        if (this._referrer === 'projects') {
          index = this._initialIndexForProjectData;
        }
        break;
      case 'indexForProjectPics':
        if (this._referrer === 'projects') {
          index = this._initialIndexForProjectPics;
        }
        break;
      case 'indexForPublication':
        if (this._referrer === 'journalism') {
          index = this._initialIndexForPublication;
        }
        break;
      case 'indexForArticleData':
        if (this._referrer === 'journalism') {
          index = this._initialIndexForArticleData;
        }
        break;
      default:
        console.log('State.buildState: Keep calm, carry on');
    }

    return index || 0;
  }

  get _initialIndexForChapterData() {
    if (this._referrer === 'story') {
      return this._params.twoToIndex() !== -1
        ? this._params.twoToIndex()
        : undefined;
    }
  }

  get _initialIndexForProjectData() {
    if (this._params.oneToIndex() !== -1) {
      return this._params.oneToIndex();
    }
  }

  get _initialIndexForProjectPics() {
    if (this._params.twoToIndex() !== -1) {
      return this._params.twoToIndex();
    }
  }

  get _initialIndexForPublication() {
    if (this._params.twoToIndex() !== -1) {
      return this._params.oneToIndex();
    }
  }

  get _initialIndexForArticleData() {
    if (
      this._params.twoToIndex() !== -1 ||
      this._params.firstArticleToMatchPublication
    ) {
      return (
        this._params.twoToIndex() || this._params.firstArticleToMatchPublication
      );
    }
  }
}
