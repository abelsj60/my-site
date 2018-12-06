import { matchPath } from 'react-router';
import StoryParams from './StoryParams';
import ProjectsParams from './ProjectsParams';
import JournalismParams from './JournalismParams';

export default class Location {
  constructor(pathToMatch, props, prevProps) {
    if (props.location === undefined) {
      throw 'The Path class requires props.location';
    }

    const type = props.location.pathname.split('/')[1];
    let paramClass;

    switch (type) {
      case 'chapter':
        paramClass = new StoryParams(type, props.match.params);
        break;
      case 'projects':
        paramClass = new ProjectsParams(type, props.match.params);
        break;
      case 'journalism':
        paramClass = new JournalismParams(type, props.match.params);
        break;
      default:
        console.log('Location.constructor: Keep calm, carry on');
    }

    this.type = type;
    this.pathToMatch = pathToMatch;
    this.userPath = props.location.pathname;
    this.lastPath = prevProps && prevProps.location.pathname;
    this.lastChapter = prevProps && prevProps.match.params.title;
    this.actualLengthOfPath = this.userPath.split('/').length;
    this.expectedLengthOfPath = this.pathToMatch.split('/').length;
    this.matchPath = matchPath(this.userPath, { path: pathToMatch });
    this.params = paramClass;
  }

  get pathIsJustRight() {
    /** .isExact is True if .pathIsTooLong, so filter it out */

    return this.matchPath && this.matchPath.isExact && !this.pathIsTooLong;
  }

  get pathIsTooLong() {
    return this.actualLengthOfPath > this.expectedLengthOfPath;
  }

  get needsRedirect() {
    /** Only True if too short */

    return !this.pathIsTooLong && !this.pathIsJustRight;
  }

  get pathIsNotFound() {
    switch (this.type) {
      case 'chapter':
        /**
         * 1. Always true if too long
         * 2. Belt & Suspenders: .needsRedirect Should take
         * precedence in caller, but .pathIsJustRight test
         * ensures this result is strictly accurate */

        if (this.pathIsTooLong) return true;

        const validTitle = this.pathIsJustRight && this.params.validateTitle;
        return validTitle === -1;
      default:
        console.log('Location.pathIsNotFound: Keep calm, carry on');
    }
  }

  get isSwappingContent() {
    switch (this.type) {
      case 'chapter':
        if (!this.params.title) return false;

        const currentChapter = this.params.title;
        const lastChapter = this.lastChapter;

        return currentChapter !== lastChapter;
      default:
        console.log('Location.isSwappingContent: Keep calm, carry on');
    }
  }
}
