import JournalismParams from './JournalismParams';
import { matchPath } from 'react-router';
import Params from './Params';
import ProjectsParams from './ProjectsParams';
import Referrer from './Referrer.js';
import ReverieParams from './ReverieParams';
import StoryParams from './StoryParams';

export default class Location {
  constructor(pathToMatch, props, prevProps) {
    if (props.location === undefined) {
      throw new Error('The Location class requires props.location.');
    }

    const referrer = new Referrer(props);

    this._pathToMatch = pathToMatch;
    this._userPath = props.location.pathname;
    this._lastPath = prevProps && prevProps.location.pathname;
    this._actualLengthOfPath = this._userPath
      .split('/')
      .filter(p => p !== '').length; // Filter out empty lengths
    this._expectedLengthOfPath = this._pathToMatch.split(
      '/'
    ).length; // Templates, so no need to filter empty parts
    this._matchPath = matchPath(
      this._userPath,
      { path: this._pathToMatch }
    ); // Normalizes use of params, ensuring all values

    if (this._lastPath) {
      this.lastType = referrer.getLocation(prevProps);
    }

    this.type = referrer.location;
    this.isExact = this._matchPath && this._matchPath.isExact;
    this.params = this._loadParams(prevProps);
  }

  _loadParams(prevProps) {
    const type = this.type;
    const paramValues = this._matchPath.params;
    let ParamsClass;

    // Select param class
    switch (type) {
      case 'chapter':
        ParamsClass = StoryParams;
        break;
      case 'journalism':
        ParamsClass = JournalismParams;
        break;
      case 'projects':
        ParamsClass = ProjectsParams;
        break;
      case 'reverie':
        ParamsClass = ReverieParams;
        break;
      default:
        ParamsClass = Params;
        break;
    }

    return new ParamsClass(
      type,
      paramValues,
      prevProps
    );
  }

  get _pathIsShort() {
    return this._actualLengthOfPath < this._expectedLengthOfPath;
  }

  get _pathIsTooLong() {
    return this._actualLengthOfPath > this._expectedLengthOfPath;
  }

  get pathIsValid() {
    if (
      this.params.isMenu
      && this._pathIsShort
    ) {
      // Path is exactly right —
      // a menu and short
      return true;
    }

    // isExact checks type, e.g.,
    // ...goodPath/soft is no good

    return this.isExact
      && !this._pathIsTooLong
      && this.params.hasExpectedNumber;
  }

  get needsRedirect() {
    if (this.pathIsValid) return false;

    const paramOneIsUndefined =
      this.params.areUndefined.includes(
        this.params.paramNames[0]
      );
    const paramTwoIsUndefined =
      this.params.areUndefined.includes(
        this.params.paramNames[1]
      );

    // A single param is tested on its own (is it found?)
    // Two params are tested against if the first is found,
    // meaning the request is to a valid section, and if
    // the second is undefined, meaning we need a redirect

    return paramOneIsUndefined ||
        (!paramOneIsUndefined && paramTwoIsUndefined);
  }

  get isSwappingContent() {
    switch (this.type) {
      case 'chapter':
        const currentChapter = this.params.title;
        const lastChapter = this.params.lastChapter;

        return currentChapter !== lastChapter;
      case 'projects':
        const currentProjectPicture = this.params.projectThumbnail;
        const lastProjectPicture = this.params.lastProjectPicture;
        const currentProjectName = this.params.projectName;
        const lastProjectName = this.params.lastProject;

        return (
          currentProjectName !== lastProjectName ||
          currentProjectPicture !== lastProjectPicture
        );
      case 'journalism':
        const currentHeadline = this.params.headline;
        const lastHeadline = this.params.lastHeadline;

        return currentHeadline !== lastHeadline;
      case 'reverie':
        const currentReverie = this.params.headline;
        const lastReverie = this.params.lastHeadline;

        return currentReverie !== lastReverie;
      default:
        console.log('Location.isSwappingContent(): Keep calm, carry on');
    }
  }

  get justChanged() {
    if (!this._lastPath) {
      throw 'Location.isChangingLocation() requires prevProps';
    }

    return this._userPath !== this._lastPath;
  }

  get isReloading() {
    return this.type === 'i' || this.lastType === 'i';
  }

  get isCalledAfterReload() {
    return this.lastType === 'i';
  }

  get isTopLevel() {
    const topLevels = [
      '/chapter',
      '/journalism',
      '/projects',
      '/reverie'
    ];
    return topLevels.includes(this._userPath);
  }
}
