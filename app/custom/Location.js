import { matchPath } from 'react-router';
import StoryParams from './StoryParams';
import ProjectsParams from './ProjectsParams';
import JournalismParams from './JournalismParams';
import Params from './Params';

export default class Location {
  constructor(pathToMatch, props, prevProps) {
    if (props.location === undefined) {
      throw 'The Location class requires props.location.';
    }

    this._pathToMatch = pathToMatch || '';
    this._userPath = props.location.pathname;
    this._lastPath = prevProps && prevProps.location.pathname;
    this._actualLengthOfPath = this._userPath.split('/').length;
    this._expectedLengthOfPath = this._pathToMatch.split('/').length;
    this._matchPath = matchPath(this._userPath, { path: pathToMatch });

    this.type = props.location.pathname.split('/')[1];
    this.isExact = this._matchPath && this._matchPath.isExact;

    this.params = (params => {
      const type = this.type;

      switch (type) {
        case 'story':
          return new StoryParams(type, params, prevProps);
        case 'projects':
          return new ProjectsParams(type, params, prevProps);
        case 'journalism':
          return new JournalismParams(type, params, prevProps);
        default:
          return new Params(type, params, prevProps);
      }
    })(
      Object.keys(props.match.params).length > 0
        ? props.match.params
        : this._pathToMatch !== ''
          ? this._matchPath.params
          : { fakeParam: undefined }
    );
  }

  get _pathIsShort() {
    return this._actualLengthOfPath < this._expectedLengthOfPath;
  }

  get _pathIsTooLong() {
    return this._actualLengthOfPath > this._expectedLengthOfPath;
  }

  get pathIsJustRight() {
    if (this.params.isMenu && this._pathIsShort) {
      return true;
    } else if (this.isExact && !this._pathIsTooLong) {
      return this.params.hasExpectedNumber;
    }

    return false;
  }

  get needsRedirect() {
    if (!this.pathIsJustRight) {
      const firstParam = this.params.paramNames[0];
      const firstParamIsValid = !!this.params[firstParam];
      const firstParamIsUndefined =
        this.params.undefined.filter(p => {
          return p === firstParam;
        }).length > 0;
      const secondParamIsUndefined =
        this.params.undefined.filter(p => {
          const paramTwo = this.params.paramNames[1];
          return p === paramTwo;
        }).length > 0;

      if (
        firstParamIsUndefined ||
        (firstParamIsValid && secondParamIsUndefined)
      ) {
        return true;
      }
    }

    return false;
  }

  get isSwappingContent() {
    switch (this.type) {
      case 'story':
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
      default:
        console.log('Location.isSwappingContent: Keep calm, carry on');
    }
  }
}
