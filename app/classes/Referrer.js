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
      case 'chapter':
        return '/chapter/:title?';
      case 'projects':
        return '/projects/:projectName?/:projectThumbnail?';
      case 'journalism':
        return '/journalism/:publication?/:headline?';
      case 'reverie':
        return '/reverie/:headline?';
      default:
        return;
    }
  }

  _loadExactPath() {
    switch (this.location) {
      case 'chapter':
        return '/chapter/:title';
      case 'projects':
        return '/projects/:projectName/:projectThumbnail';
      case 'journalism':
        return '/journalism/:publication/:headline';
      case 'reverie':
        return '/reverie/:headline';
      default:
        return;
    }
  }

  getLocation(props) {
    const locationArray = props.location.pathname.split('/');
    const isHome = locationArray[1] === '';

    return !isHome ? locationArray[1] : 'home';
  }

  checkForMenu(props) {
    const locationArray = props.location.pathname.split('/');
    const indexOfMenu = locationArray.indexOf('menu');

    return indexOfMenu === 2;
  }
}