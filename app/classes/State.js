import Referrer from './Referrer.js';

export default class State {
  constructor(props, location) {
    const referrer = new Referrer(props);

    this._props = props;
    this._referrer = referrer;
    this._params = location.params;
  }

  // A convenience method for the constructor in
  // Body and ContentLoader for initial state
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

    return index && index > -1 ? index : 0;
  }

  // Filters out naked calls to, e.g., /chapter
  _indicesAreGreaterThanOrEqualToZero(indices) {
    return indices.one !== -1 && indices.two !== -1;
  }

  rebuildBody(setState) {
    const indices = this._convertParamsToIndices();

    // Only -1 if explicitly set by a params method
    if (this._indicesAreGreaterThanOrEqualToZero(indices)) {
      setState(indices.one, indices.two);
    }
  }

  rebuildContentLoader(setState) {
    const indices = this._convertParamsToIndices();

    // Only -1 if explicitly set by a params method
    if (this._indicesAreGreaterThanOrEqualToZero(indices)) {
      setState('updateState', indices.one, indices.two);
    }
  }

  _illustrationState(images) {
    const titleIndex = this._convertParamsToIndices().one > -1
      ? this._convertParamsToIndices().one
      : 0;
    const state =
      images[
        `chapter-${titleIndex + 1}-main`
      ].complete;

    return !state
      ? (titleIndex + 1) * -1
      : titleIndex + 1
  }

  checkIllustrationState(images, external) {
    if (external) {
      // Can only be called if /chapter...
      return this._illustrationState(images);
    } else {
      const { currentCaller, images } = this._props.appState;

      if (currentCaller === 'chapter') {
        return this._illustrationState(images);
      }

      return 0;
    }
  }

  resetIllustrationState(setState) {
    setState('updateIllustrationState', this.checkIllustrationState());
  }

  // Returns: { one: val, two: val }
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
