import Params from './Params';

export default class StoryParams extends Params {
  constructor(type, params, prevProps) {
    super(type, params, [
      'title'
    ]);

    this.lastChapter = prevProps
      && prevProps.match.params.title;
  }

  get title() {
    return this._validateParam(
      this._one,
      'title',
      'text'
    );
  }

  titleToIndex() {
    if (!this.title) return -1;
    return this._oneToIndex();
  }
}
