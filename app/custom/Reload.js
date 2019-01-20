import Content from './Content.js';
import Normalize from './Normalize.js';

export default class Reload {
  constructor(props) {
    const { currentCaller } = props.state;

    this._props = props;
    this._caller = currentCaller;

    this.path = this._buildPath();
  }

  _buildPath() {
    const section = this._caller;

    switch (section) {
      case 'chapter':
        return this._storyPath(section);
      case 'projects':
        return this._projectsPath(section);
      case 'journalism':
        return this._articlePath(section);
      case 'reverie':
        return this._reveriePath(section);
      default:
        return '/';
    }
  }

  _normalize(text) {
    const n = new Normalize(text);
    return n.done;
  }

  _getContentData() {
    const caller = this._caller;
    const c = new Content(caller);

    return c.getContentData();
  }

  _storyPath(section) {
    const storyData = this._getContentData();
    const { indexForChapterData } = this._props.localState;
    const title = storyData[indexForChapterData].attributes.title;
    const normalizedTitle = this._normalize(title);

    return `/${section}/${normalizedTitle}`;
  }

  _projectsPath(section) {
    const projectData = this._getContentData();
    const { indexForProjectData, indexForProjectPics } = this._props.localState;
    const projectName = projectData[indexForProjectData].attributes.projectName;
    const normalizedProjectName = this._normalize(projectName);
    const thumbnailNumber = indexForProjectPics + 1;

    return `/${section}/${normalizedProjectName}/${thumbnailNumber}`;
  }

  _articlePath(section) {
    const articleData = this._getContentData();
    const { indexForArticleData } = this._props.localState;
    const article = articleData[indexForArticleData];
    const { publication, headline } = article.attributes;
    const normalizedPublication = this._normalize(publication);
    const normalizedHeadline = this._normalize(headline);

    return `/${section}/${normalizedPublication}/${normalizedHeadline}`;
  }

  _reveriePath(section) {
    const reverieData = this._getContentData();
    const { indexForReverieData } = this._props.localState;
    const headline = reverieData[indexForReverieData].attributes.headline;
    const normalizedHeadline = this._normalize(headline);

    return `/${section}/${normalizedHeadline}`;
  }
}
