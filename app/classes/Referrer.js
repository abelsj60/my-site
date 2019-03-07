export default class Referrer {
  constructor(props) {
    if (props.location === undefined) {
      throw 'Caller must offer props.location.';
    }

    this.path = props.location.pathname;
    this.location = this.getLocation(props);
    this.finalPath = this._loadFinalPath();
    this.pathToMatch = this._loadPathToMatch();
  }

  _loadPathToMatch() {
    switch (this.location) {
      case 'about':
        return '/about';
      case 'chapter':
        return '/chapter/:title?';
      case 'home':
        return '/';
      case 'journalism':
        return '/journalism/:publication?/:headline?';
      case 'projects':
        return '/projects/:projectName?/:projectThumbnail?';
      case 'i':
        return '/i';
      case 'not-found':
        return '/not-found';
      case 'reverie':
        return '/reverie/:headline?';
      default:
        return;
    }
  }

  _loadFinalPath() {
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

  isMenu(props) {
    const locationArray = props.location.pathname.split('/');
    const indexOfMenu = locationArray.indexOf('menu');

    return indexOfMenu === 2;
  }
}
