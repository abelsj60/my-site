import articles from '../data/clips/index.js';
import projects from '../data/projects/index.js';
import reveries from '../data/reveries/index.js';
import stories from '../data/the-story/index.js';

export default class Content {
  constructor(type) {
    this.type = type;
  }

  getContentData() {
    const type = this.type;

    switch (type) {
      case 'chapter':
        return stories;
      case 'projects':
        return projects;
      case 'journalism':
        return articles;
      case 'reverie':
        return reveries;
      default:
        return;
    }
  }
}
