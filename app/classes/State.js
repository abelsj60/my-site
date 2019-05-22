import Referrer from './Referrer.js';

export default class State {
  constructor(props, location) {
    const referrer = new Referrer(props);

    this._referrer = referrer;
    this._params = location.params;
  }

  getIndex(type) {
    const params = this._params;
    const referrer = this._referrer.location;

    let index;

    switch (type) {
      case 'article':
        if (referrer === 'journalism') {
          index =
            this._params.headlineToIndex() !== -1
              ? this._params.headlineToIndex()
              : this._params.firstArticleToMatchPublication;
        }
        break;
      case 'chapter':
        if (referrer === 'chapter') {
          index = params.titleToIndex();
        }
        break;
      case 'project':
        if (referrer === 'projects') {
          index = params.projectNameToIndex();
        }
        break;
      case 'projectPics':
        if (referrer === 'projects') {
          index = params.projectThumbnailToIndex();
        }
        break;
      case 'publication':
        if (referrer === 'journalism') {
          index = params.publicationToIndex();
        }
        break;
      case 'reverie':
        if (referrer === 'reverie') {
          index = this._params.headlineToIndex();
        }
        break;
      default:
        break;
    }

    return index && index !== -1 ? index : 0;
  }

  rebuild(setStateCallback) {
    const indices = this._convertParamsToIndices();

    // Only -1 if explicitly set by a params method
    if (
      indices.one !== -1
        && indices.two !== -1
    ) {
      setStateCallback(indices.one, indices.two);
    }
  }

  _convertParamsToIndices() {
    const params = this._params;
    const referrer = this._referrer.location;

    // Variables will only be -1 if explicitly set by a params method
    // Thus, single param routes will pass the rebuild test w/o fuss
    let indexOne;
    let indexTwo;

    switch (referrer) {
      case 'chapter':
        indexOne = params.titleToIndex();
        break;
      case 'journalism':
        indexOne = params.publicationToIndex();
        indexTwo = params.headlineToIndex();
        break;
      case 'projects':
        indexOne = params.projectNameToIndex();
        indexTwo = params.projectThumbnailToIndex();
        break;
      case 'reverie':
        indexOne = params.headlineToIndex();
        break;
    }

    return { one: indexOne, two: indexTwo };
  }
}
