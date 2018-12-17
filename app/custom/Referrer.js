export default class Referrer {
  constructor(props) {
    // TODO Add cases for rest of site, can't use everywhere now...
    // TODO Currently tied to props.location...make more universal?

    this.location = props.location.pathname.split('/')[1];
    this.pathToMatch = this.getPathToMatch();
    this.path = this.getPath();
  }

  getPathToMatch() {
    switch (this.location) {
      case 'story':
        return '/story/:chapter?/:title?';
      case 'projects':
        return '/projects/:projectName?/:projectThumbnail?';
      case 'journalism':
        return '/journalism/:publication?/:headline?';
      default:
        console.log('Referrer: Keep calm, carry on');
    }

    return;
  }

  getPath() {
    switch (this.location) {
      case 'story':
        return '/story/:chapter/:title';
      case 'projects':
        return '/projects/:projectName/:projectThumbnail';
      case 'journalism':
        return '/journalism/:publication/:headline';
      case 'about':
        return '/about';
      case 'reverie':
        return '/reverie';
      case 'i':
        return '/i';
      case '':
        return '/';

      default:
        console.log('Referrer: Keep calm, carry on');
    }

    return;
  }
}
