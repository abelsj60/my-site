import Params from './Params';

export default class ProjectsParams extends Params {
  constructor(type, params, prevProps) {
    super(type, params);

    this.paramNames = ['projectName', 'projectThumbnail'];
    this.lastProject = prevProps && prevProps.match.params.projectName;
    this.lastProjectPicture =
      prevProps && (parseInt(prevProps.match.params.projectThumbnail) || false);

    this._actualNumber = this.paramNames.filter(p => {
      return this[p] !== false;
    }).length;
  }

  get projectName() {
    return this.validateParam(this._one, 'name', 'text');
  }

  // TODO Should this be undefined, rather than false?

  get projectThumbnail() {
    return parseInt(this.validateParam(this._two, 'full', 'number')) || false;
  }
}
