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

  rebuildBody(updater) {
    const indices = this._convertParamsToIndices();

    // Only -1 if explicitly set by a params method
    if (this._indicesAreGreaterThanOrEqualToZero(indices)) {
      updater(indices.one, indices.two);
    }
  }

  rebuildContentLoader(updater) {
    const indices = this._convertParamsToIndices();

    // Only -1 if explicitly set by a method from a Params class
    if (this._indicesAreGreaterThanOrEqualToZero(indices)) {
      updater('updateState', indices.one, indices.two);
    }
  }

  // Should ONLY be called when page is /chapter. If anything else calls it,
  // we'll get an error on this._convertParamsToIndices().one...
  _illustrationState(images) {
    const chapterIndex = this._convertParamsToIndices().one;
    const chapterNumber = chapterIndex + 1;
    // const isComplete = images[`chapter-${chapterNumber}-main`].complete;
    const isComplete = false;

    // Added short circuit bc of weird error in IE 10, per BrowserStack.
    // The appState wasn't defined and so threw an error. This fixed...
    return (!isComplete || (this._props.appState && this._props.appState.offline))
      ? chapterNumber * -1
      : chapterNumber
  }

  checkIllustrationState(images) {
    if (!!images) {
      // Only runs when we're loading the site on a /chapter page.
      // Passes images b/c we're calling from App's constructor.
      return this._illustrationState(images);
    } else {
      if (this._props.appState.currentCaller === 'chapter') {
        // Runs when swapping content w/n chapter via ContentLoader
        return this._illustrationState(this._props.appState.images);
      }
    }
  }

  resetIllustrationState(updater) {
    updater('updateIllustrationState', this.checkIllustrationState());
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
