export default class Referrer {
  constructor(props) {
    if (props.location === undefined) {
      throw 'Caller must offer props.location.';
    }

    this.path = props.location.pathname;
    this.location =
      props.location.pathname.split('/')[1] !== ''
        ? props.location.pathname.split('/')[1]
        : 'home';
    this.genericPath = this._loadExactPath();
    this.pathToMatch = this._loadPathToMatch();
  }

  _loadPathToMatch() {
    switch (this.location) {
      case 'story':
        return '/story/:chapter?/:title?';
      case 'projects':
        return '/projects/:projectName?/:projectThumbnail?';
      case 'journalism':
        return '/journalism/:publication?/:headline?';
      default:
        return;
    }
  }

  _loadExactPath() {
    switch (this.location) {
      case 'story':
        return '/story/:chapter/:title';
      case 'projects':
        return '/projects/:projectName/:projectThumbnail';
      case 'journalism':
        return '/journalism/:publication/:headline';
      default:
        return;
    }
  }

  getLocation(props) {
    return props.location.pathname.split('/')[1] !== ''
      ? props.location.pathname.split('/')[1]
      : 'home';
  }
}
