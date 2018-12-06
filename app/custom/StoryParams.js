import Params from './Params';
import storyData from '../data/the-story/index.js';
import { normalize, validateParam } from '../helpers/utils.js';

export default class StoryParams extends Params {
  constructor(type, params) {
    super(type, params);

    const paramsThatAreDefined = Object.keys(params).filter(p => {
      const param = params[p];
      return param !== undefined && param !== 'menu';
    });

    this.number = paramsThatAreDefined.length;
    this.title = paramsThatAreDefined.includes('title') && params.title;
  }

  get normalizedTitle() {
    return this.title && normalize(this.title);
  }

  get validateTitle() {
    return this.title && validateParam('title', storyData, this.title);
  }
}
