export default class Referrer {
  constructor(props) {
    if (props.location === undefined) {
      throw 'The Location class requires props.location.';
    }

    this.location = props.location.pathname.split('/')[1];
    this.pathToMatch = this._loadPathToMatch();
    this.path = this._loadExactPath();
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
        console.log('Referrer.loadPathToMatch(): Keep calm, carry on');
    }

    return;
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
        console.log('Referrer.loadExactPath(): Keep calm, carry on');
    }

    return;
  }
}
