export default class Referrer {
  constructor(props) {
    if (props.location === undefined) {
      throw 'The Location class requires props.location.';
    }

    this.location = props.location.pathname.split('/')[1];
    this.pathToMatch = this._getPathToMatch();
    this.path = this._getExactPath();
  }

  _getPathToMatch() {
    switch (this.location) {
      case 'story':
        return '/story/:chapter?/:title?';
      case 'projects':
        return '/projects/:projectName?/:projectThumbnail?';
      case 'journalism':
        return '/journalism/:publication?/:headline?';
      default:
        console.log('Referrer.getPathToMatch(): Keep calm, carry on');
    }

    return;
  }

  _getExactPath() {
    switch (this.location) {
      case 'story':
        return '/story/:chapter/:title';
      case 'projects':
        return '/projects/:projectName/:projectThumbnail';
      case 'journalism':
        return '/journalism/:publication/:headline';
      default:
        console.log('Referrer.getExactPath(): Keep calm, carry on');
    }

    return;
  }
}
