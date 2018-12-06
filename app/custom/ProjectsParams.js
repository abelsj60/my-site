import Params from './Params';
// import { validateParam } from '../helpers/utils.js';
// import projectData from '../data/projects/index.js';

export default class Projects extends Params {
  constructor(type, params) {
    super(type, params);
  }

  get hasProjectName() {
    return this.projects && this.params.projectName !== undefined;
  }

  get hasProjectThumbnail() {
    return this.projects && this.params.projectThumbnail !== undefined;
  }

  get projectName() {
    return this.hasProjectName && this.params.projectName;
  }

  get projectThumbnail() {
    return this.hasProjectThumbnail && this.params.projectThumbnail;
  }
}
