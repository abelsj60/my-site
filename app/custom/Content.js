import storyData from '../data/the-story/index.js';
import projectData from '../data/projects/index.js';
import articleData from '../data/clips/index.js';

export default class Content {
  constructor(type) {
    this.type = type;
    this.contentData = this._getContentData();
  }

  _getContentData() {
    const type = this.type;

    switch (type) {
      case 'story':
        return storyData;
      case 'projects':
        return projectData;
      case 'journalism':
        return articleData;
      default:
        console.log('Content._getContentData: Keep calm, carry on');
        return undefined;
    }
  }
}
