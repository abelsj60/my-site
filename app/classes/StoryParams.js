import Params from './Params';

export default class StoryParams extends Params {
  constructor(type, params, prevProps) {
    super(type, params);

    this.paramNames = ['title'];
    this.lastChapter = prevProps
      && prevProps.match.params.title;

    this._actualNumber = this.paramNames.filter(
      p => this[p] !== false
    ).length;
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
