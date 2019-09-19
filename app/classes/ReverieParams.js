import Params from './Params';

export default class ReverieParams extends Params {
  constructor(type, params, prevProps) {
    super(type, params, [
      'headline'
    ]);

    this.lastHeadline = prevProps
      && prevProps.match.params.headline;
  }

  get headline() {
    return this._validateParam(this._one, this._paramNames[0]);
  }

  headlineToIndex() {
    if (!this.headline) return -1;
    return this._oneToIndex();
  }
}
