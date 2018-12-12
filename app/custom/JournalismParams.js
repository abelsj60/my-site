import Params from './Params';

export default class JournalismParams extends Params {
  constructor(type, params, prevProps) {
    super(type, params);

    this.paramNames = ['publication', 'headline'];
    this.lastHeadline = prevProps && prevProps.match.params.headline;
    this.lastPublication = prevProps && prevProps.match.params.publication;

    this._actualNumber = this.paramNames.filter(p => {
      return this[p] !== false;
    }).length;
  }

  get publication() {
    return this.validateParam(this._one, 'publication', 'text');
  }

  get headline() {
    return this.validateParam(this._two, 'headline', 'text');
  }

  get defaultHeadline() {
    if (this.publication && this._two === undefined) {
      const defaultHeadline = this._searchData.find(a => {
        return (
          this._normalizeParam(a.attributes.publication) === this.publication
        );
      }).attributes.headline;

      return this._searchData.findIndex(a => {
        return a.attributes.headline === defaultHeadline;
      });
    }

    return 0;
  }
}
