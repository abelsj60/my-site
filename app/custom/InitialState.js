import Referrer from './Referrer.js';

export default class InitialState {
  constructor(props, location) {
    const referrer = new Referrer(props);

    this._referrer = referrer.location;
    this._params = location.params;
  }

  build(type) {
    let index;

    const params = this._params;
    const referrer = this._referrer;

    switch (type) {
      case 'indexForChapterData':
        if (referrer === 'story') {
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
      case 'indexForArticleData':
        if (referrer === 'journalism') {
          index =
            this._params.headlineToIndex() !== -1
              ? this._params.headlineToIndex()
              : this._params.firstArticleToMatchPublication;
        }
        break;
      default:
        console.log('State.buildState: Keep calm, carry on');
    }

    return index && index !== -1 ? index : 0;
  }
}
