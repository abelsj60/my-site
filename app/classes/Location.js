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
      throw new Error(
        'The Location class requires props.location.'
      );
    }

    const referrer = new Referrer(props);

    this._pathToMatch = pathToMatch;
    this._userPath = props.location.pathname;
    this._lastPath = prevProps
      && prevProps.location.pathname;
    this._actualLengthOfPath =
      this._userPath.split('/')
        .filter(p => p !== '')
        .length; // Filter out empty lengths
    this._expectedLengthOfPath =
      this._pathToMatch.split('/')
        .length; // Templates, so no need to filter for empty parts
    this._matchPath = matchPath(
      this._userPath,
      { path: this._pathToMatch }
    ); // Normalizes use of params, ensuring all values

    this.lastType = this._lastPath
      && referrer.getLocation(prevProps);
    this.type = referrer.location;
    this.isExact = this._matchPath
      && this._matchPath.isExact;
    this.params = this._loadParams(prevProps);
  }

  _loadParams(prevProps) {
    const type = this.type;
    const paramValues = this._matchPath.params;
    let ParamsClass;

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

  get _pathIsLong() {
    return this._actualLengthOfPath > this._expectedLengthOfPath;
  }

  get pathIsValid() {
    if (this.params.isMenu) return true;

    return this.isExact
      && !this._pathIsLong
      && this.params.hasExpectedNumber;
  }

  get needsRedirect() {
    if (this.pathIsValid) return false;

    /** Return statement
     *
     * 1. A single param is tested on its own
     * 2. Two params are tested by checking if the first is
     * found, meaning the request is valid, and if the
     * second is undefined, meaning we need a redirect
    */

    const paramOneIsUndefined =
      this.params.areUndefined.includes(
        this.params._paramNames[0]
      );
    const paramTwoIsUndefined =
      this.params.areUndefined.includes(
        this.params._paramNames[1]
      );

    return paramOneIsUndefined
      || (!paramOneIsUndefined && paramTwoIsUndefined);
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
          currentProjectName !== lastProjectName
          || currentProjectPicture !== lastProjectPicture
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
        return;
    }
  }

  get justChanged() {
    if (!this._lastPath) {
      throw new Error(
        'Location.isChangingLocation() requires prevProps'
      );
    }

    return this._userPath !== this._lastPath;
  }

  get isReloading() {
    return this.type === 'i'
      || this.lastType === 'i';
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
