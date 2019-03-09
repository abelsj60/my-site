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
    this._currentPath = props.location.pathname;
    this._lastPath = prevProps
      && prevProps.location.pathname;
    this._actualLengthOfPath =
      this._currentPath.split('/')
        .length;
    this._expectedLengthOfPath =
      this._pathToMatch.split('/')
        .length;
    this._matchPath = matchPath(
      this._currentPath,
      { path: this._pathToMatch }
    ); // Normalizes params within class

    this.type = referrer.location;
    this.lastType = this._lastPath
      && referrer.getLocation(prevProps);
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
    // Return statement:
    // 1. The path is a menu and the length is exactly 3
    // 2. The path is of the right type (e.g. /chapter)
    // 3. The path isn't too long (isExact doesn't check)
    // 4. The path has the proper number of params after
    // eliminating invalid entries (isExact can't know,
    // it only checks for fulfilled values)

    return this.params.isMenu
      ? this._actualLengthOfPath === 3
      : this.isExact
        && !this._pathIsLong
        && this.params.hasExpectedNumber;
  }

  get needsRedirect() {
    if (this.pathIsValid) return false;

    // Return statement:
    // 1. The first param is literally undefined
    // 2. Two first param is validated but the
    // second param is literally undefined

    const paramOneIsUndefined =
      this.params.areUndefined.includes(
        this.params._paramNames[0]
      );
    const paramTwoIsUndefined =
      this.params.areUndefined.includes(
        this.params._paramNames[1]
      );

    return paramOneIsUndefined
      || (
        this.params.oneIsValid
          && paramTwoIsUndefined
      );
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

    return this._currentPath !== this._lastPath;
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
    return topLevels.includes(this._currentPath);
  }
}
