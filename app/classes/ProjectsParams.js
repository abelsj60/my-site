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
    return this.validateParam(this._one, 'projectName', 'text');
  }

  get projectThumbnail() {
    const paramIsValid = this.validateParam(this._two, 'full', 'number');
    return paramIsValid && parseInt(paramIsValid);
  }

  projectNameToIndex() {
    if (!this.projectName) return -1;

    return this.oneToIndex();
  }

  projectThumbnailToIndex() {
    if (!this.projectThumbnail) return -1;

    return this.twoToIndex();
  }
}
