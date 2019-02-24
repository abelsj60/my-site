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
      .filter(p => p !== '').length;
    this._expectedLengthOfPath = this._pathToMatch.split(
      '/'
    ).length;
    this._matchPath = matchPath(
      this._userPath,
      { path: this._pathToMatch }
    );

    if (this._lastPath) {
      this.lastType = referrer.getLocation(prevProps);
    }

    this.type = referrer.getLocation(props);
    this.isExact = this._matchPath && this._matchPath.isExact;
    this.params = this._loadParams(props, prevProps);
  }

  _loadParams(props, prevProps) {
    const type = this.type;
    const propsHaveParams = Object.keys(
      props.match.params
    ).length > 0;

    let paramValues;
    let ParamsClass;

    if (propsHaveParams) {
      paramValues = props.match.params;
    } else if (
      this._pathToMatch &&
      this._pathToMatch !== ''
    ) {
      paramValues = this._matchPath.params;
    } else {
      paramValues = { fakeParam: undefined };
    }

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

  get pathIsJustRight() {
    if (
      this.params.isMenu &&
      this._pathIsShort
    ) {
      return true;
    } else if (
      this.isExact &&
      !this._pathIsTooLong
    ) {
      return this.params.hasExpectedNumber;
    }

    return false;
  }

  get needsRedirect() {
    if (this.pathIsJustRight) {
      return false;
    }

    const nameOfParamOne = this.params.paramNames[0];
    const firstParamIsValid = !!this.params[nameOfParamOne];
    const firstParamIsUndefined =
        this.params.areUndefined.filter(
          p => p === nameOfParamOne
        ).length > 0;
    const nameOfParamTwo = this.params.paramNames[1];
    const secondParamIsUndefined =
        this.params.areUndefined.filter(
          p => p === nameOfParamTwo
        ).length > 0;

    return firstParamIsUndefined ||
        (firstParamIsValid && secondParamIsUndefined);

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
}
