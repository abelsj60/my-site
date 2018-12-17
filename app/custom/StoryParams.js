import Params from './Params';

export default class StoryParams extends Params {
  constructor(type, params, prevProps) {
    super(type, params);

    this.paramNames = ['chapter', 'title'];
    this.lastChapter = prevProps && prevProps.match.params.title;

    this._actualNumber = this.paramNames.filter(p => {
      return this[p] !== false;
    }).length;
  }

  get chapter() {
    return this._one === 'chapter' ? 'chapter' : false;
  }

  get title() {
    return this.validateParam(this._two, 'title', 'text');
  }
}
