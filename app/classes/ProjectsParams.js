import Params from './Params';

export default class ProjectsParams extends Params {
  constructor(type, params, prevProps) {
    super(type, params, [
      'projectName',
      'projectThumbnail'
    ]);

    this.lastProject = prevProps
      && prevProps.match.params.projectName;
    this.lastProjectPicture = prevProps
      && parseInt(
        prevProps.match.params.projectThumbnail
      );
  }

  get projectName() {
    return this._validateParam(this._one, this._paramNames[0]);
  }

  get projectThumbnail() {
    const paramIsValid = this._validateParam(parseInt(this._two), this._paramNames[1]);
    return paramIsValid && parseInt(paramIsValid);
  }

  projectNameToIndex() {
    if (!this.projectName) return -1;
    return this._oneToIndex();
  }

  projectThumbnailToIndex() {
    if (!this.projectThumbnail) return -1;
    return this._twoToIndex();
  }
}
