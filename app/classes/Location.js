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

    this.caller = referrer.location;
    this.lastCaller = this._lastPath
      && referrer.getLocation(prevProps);
    this.isExact = this._matchPath
      && this._matchPath.isExact;
    this.params = this._loadParams(prevProps);
  }

  _loadParams(prevProps) {
    const caller = this.caller;
    const paramValues = this._matchPath.params;
    let ParamsClass;

    switch (caller) {
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
      caller,
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
    // 2. The path is of the right caller (e.g. /chapter)
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
    let contentMismatch;
    const { isMenu } = this.params;

    switch (this.caller) {
      case 'chapter':
        const currentChapter = this.params.title;
        const lastChapter = this.params.lastChapter;
        contentMismatch = currentChapter !== lastChapter;
        break;
      case 'projects':
        const currentProjectPicture = this.params.projectThumbnail;
        const lastProjectPicture = this.params.lastProjectPicture;
        const currentProjectName = this.params.projectName;
        const lastProjectName = this.params.lastProject;
        contentMismatch = (
          currentProjectName !== lastProjectName
          || currentProjectPicture !== lastProjectPicture
        );
        break;
      case 'journalism':
        const currentHeadline = this.params.headline;
        const lastHeadline = this.params.lastHeadline;
        contentMismatch = currentHeadline !== lastHeadline;
        break;
      case 'reverie':
        const currentReverie = this.params.headline;
        const lastReverie = this.params.lastHeadline;
        contentMismatch = currentReverie !== lastReverie;
        break;
      default:
        contentMismatch = false;
        break;
    }

    return contentMismatch && !isMenu;
  }

  get justChanged() {
    if (!this._lastPath) {
      throw new Error(
        'Location.justChanged() requires prevProps'
      );
    }

    return this._currentPath !== this._lastPath;
  }

  get _isCalledAfterReload() {
    return this.lastCaller === 'i';
  }

  get recordPageview() {
    return this.justChanged
      && !this._isTopLevel
      && !this._isCalledAfterReload
      && window.location.pathname !== '/i';
  }

  get _isTopLevel() {
    const topLevels = [
      '/chapter',
      '/journalism',
      '/projects',
      '/reverie'
    ];
    return topLevels.includes(this._currentPath);
  }
}
