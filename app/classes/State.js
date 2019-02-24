import Referrer from './Referrer.js';

export default class State {
  constructor(props, location) {
    const R = new Referrer(props);

    this._referrer = R.location;
    this._params = location.params;
  }

  get(type) {
    let index;

    const params = this._params;
    const referrer = this._referrer;

    switch (type) {
      case 'indexForArticleData':
        if (referrer === 'journalism') {
          index =
          this._params.headlineToIndex() !== -1
            ? this._params.headlineToIndex()
            : this._params.firstArticleToMatchPublication;
        }
        break;
      case 'indexForChapterData':
        if (referrer === 'chapter') {
          index = params.titleToIndex();
        }
        break;
      case 'indexForProjectData':
        if (referrer === 'projects') {
          index = params.projectNameToIndex();
        }
        break;
      case 'indexForProjectPics':
        if (referrer === 'projects') {
          index = params.projectThumbnailToIndex();
        }
        break;
      case 'indexForPublication':
        if (referrer === 'journalism') {
          index = params.publicationToIndex();
        }
        break;
      case 'indexForReverieData':
        if (referrer === 'reverie') {
          index = this._params.headlineToIndex();
        }
        break;
      default:
        console.log('State.get: Keep calm, carry on');
    }

    return index && index !== -1 ? index : 0;
  }

  get needsUpdate() {
    const params = this._decodeParams();
    return params.one !== -1 && params.two !== -1;
  }

  rebuild(setThisState) {
    const params = this._decodeParams();

    if (this.needsUpdate) {
      setThisState(params.one, params.two);
    }

    return;
  }

  _decodeParams() {
    const params = this._params;
    const referrer = this._referrer;

    let paramOneAsIndex;
    let paramTwoAsIndex;

    switch (referrer) {
      case 'chapter':
        paramOneAsIndex = params.titleToIndex();
        break;
      case 'journalism':
        paramOneAsIndex = params.publicationToIndex();
        paramTwoAsIndex = params.headlineToIndex();
        break;
      case 'projects':
        paramOneAsIndex = params.projectNameToIndex();
        paramTwoAsIndex = params.projectThumbnailToIndex();
        break;
      case 'reverie':
        paramOneAsIndex = params.headlineToIndex();
        break;
    }

    return { one: paramOneAsIndex, two: paramTwoAsIndex };
  }
}
