import Content from './Content.js';
import Normalize from './Normalize.js';

export default class Reload {
  constructor(props) {
    const { state } = props.location;

    this._props = props;

    this.referrer = state ? state.toLowerCase() : 'none';
    this.path = this._buildPath();
  }

  _normalize(text) {
    const normalizedText = new Normalize(text);
    return normalizedText.done;
  }

  _loadContentData() {
    const referrer = this.referrer;
    const c = new Content(referrer);

    return c.contentData;
  }

  _buildStoryPath(section) {
    const storyData = this._loadContentData();
    const { indexForChapterData } = this._props.localState;
    const title = storyData[indexForChapterData].attributes.title;
    const normalizedTitle = this._normalize(title);

    return `/${section}/chapter/${normalizedTitle}`;
  }

  _buildProjectsPath(section) {
    const projectData = this._loadContentData();
    const { indexForProjectData, indexForProjectPics } = this._props.localState;
    const projectName = projectData[indexForProjectData].attributes.name;
    const normalizedProjectName = this._normalize(projectName);
    const thumbnailNumber = indexForProjectPics + 1;

    return `/${section}/${normalizedProjectName}/${thumbnailNumber}`;
  }

  _buildArticlePath(section) {
    const articleData = this._loadContentData();
    const { indexForPublication } = this._props.localState;
    const article = articleData[indexForPublication];
    const { publication, headline } = article.attributes;
    const normalizedPublication = this._normalize(publication);
    const normalizedHeadline = this._normalize(headline);

    return `/${section}/${normalizedPublication}/${normalizedHeadline}`;
  }

  _buildPath() {
    const section = this.referrer;

    switch (section) {
      case 'story':
        return this._buildStoryPath(section);
      case 'projects':
        return this._buildProjectsPath(section);
      case 'journalism':
        return this._buildArticlePath(section);
      default:
        return '/';
    }
  }
}
