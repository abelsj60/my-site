import Referrer from './Referrer.js';

export default class ButtonGroup {
  constructor(props) {
    const r = new Referrer(props);

    this._path = r.path;
    this._referrer = r.location;
    this._isMenu = this._path.includes('menu');
    this._showStoryText = props.state.showStoryText;
    this._showLegalTerms = props.state.showLegalTerms;
    this._showBusinessCard = props.state.showBusinessCard;
    this._toggleText = props.toggleText;
    this._toggleLegalTerms = props.toggleLegalTerms;
    this._toggleBusinessCard = props.toggleBusinessCard;
    this._handleClick = props.boundHandleClickForApp;
    this._propsBackup = props;

    this.buttons = this._loadButtonGroup();
  }

  get _buttonData() {
    return [
      {
        name: 'menu',
        link: this._isMenu ? `/${this._referrer}` : `/${this._referrer}/menu`,
        active: this._isMenu ? 'active' : '',
        state: 'menu',
        hash: undefined,
        needsSeperation: true,
        handleClick: () => undefined
      },
      {
        name: 'reverie',
        link: this._referrer === 'reverie' ? '/' : '/reverie',
        active: this._referrer === 'reverie' ? 'active' : '',
        state: undefined,
        hash: undefined,
        needsSeperation: true,
        handleClick: () => undefined
      },
      {
        name: 'story',
        link: this._path,
        active: !this._showStoryText ? 'active' : '',
        state: undefined,
        hash: undefined,
        needsSeperation: true,
        handleClick: () => this._handleClick('toggleStoryText')
      },
      {
        name: 'legal',
        link: this._path,
        active: this._showLegalTerms ? 'active' : '',
        state: undefined,
        hash: undefined,
        needsSeperation: true,
        handleClick: () => this._handleClick('toggleLegalTerms')
      },
      {
        name: 'contact',
        link: this._path,
        active: this._showBusinessCard ? 'active' : '',
        state: undefined,
        hash: undefined,
        needsSeperation: false,
        handleClick: () => this._handleClick('toggleBusinessCard')
      }
    ];
  }

  _loadButtonGroup() {
    let buttonGroup;

    switch (this._referrer) {
      case 'home':
        buttonGroup = ['reverie', 'contact'];
        break;
      case 'story':
        buttonGroup = ['menu', 'story', 'contact'];
        break;
      case 'projects':
        buttonGroup = ['menu', 'contact'];
        break;
      case 'journalism':
        buttonGroup = ['menu', 'contact'];
        break;
      case 'reverie':
        buttonGroup = ['reverie', 'contact'];
        break;
      default:
        buttonGroup = ['legal', 'contact'];
    }

    return this._buttonData.filter(button =>
      buttonGroup.find(name => button.name === name)
    );
  }

  formatButtonName(name) {
    let finalName = name;

    if (name === 'menu' && this._isMenu) {
      switch (this._referrer) {
        case 'chapter':
          finalName = 'chapters';
          break;
        case 'projects':
          finalName = 'projects';
          break;
        case 'journalism':
          finalName = 'clips';
          break;
      }
    } else if (name === 'chapter') {
      switch (this._showStory) {
        case true:
          finalName = 'picture';
          break;
        case false:
          finalName = 'chapter';
          break;
      }
    }

    return finalName[0].toUpperCase() + finalName.slice(1);
  }
}
