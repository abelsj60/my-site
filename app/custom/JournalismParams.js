import Params from './Params';
// import articles from '../data/clips/index.js';
// import { validateParam } from '../helpers/utils.js';

export default class JournalismParams extends Params {
  constructor(type, params) {
    super(type, params);
  }

  get hasPublication() {
    return this.journalism && this.params.publication !== undefined;
  }

  get hasHeadline() {
    return this.journalism && this.params.headline !== undefined;
  }

  get publication() {
    return this.journalism && this.params.publication;
  }

  get headline() {
    return this.journalism && this.params.headline;
  }
}
