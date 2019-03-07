import Params from './Params';

export default class ReverieParams extends Params {
  constructor(type, params, prevProps) {
    super(type, params);

    this.paramNames = ['headline'];
    this.lastHeadline = prevProps
      && prevProps.match.params.headline;

    this._actualNumber = this.paramNames.filter(
      p => this[p] !== false
    ).length;
  }

  get headline() {
    return this._validateParam(
      this._one,
      'headline',
      'text'
    );
  }

  headlineToIndex() {
    if (!this.headline) return -1;
    return this._oneToIndex();
  }
}
