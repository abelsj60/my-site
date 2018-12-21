import { getPath, splitPath } from '../helpers/utils.js';

export default class ButtonGroup {
  constructor(props) {
    this._path = getPath(props);
    this._referrer = splitPath(props)[1];
    this._isMenu = this._path.includes('menu');
    this._showStory = props.state.showStory;
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
        active: this._referrer === 'menu' ? 'active' : '',
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
        active: !this._showStory ? 'active' : '',
        state: undefined,
        hash: undefined,
        needsSeperation: true,
        handleClick: () => this._handleClick('showStoryText')
      },
      {
        name: 'legal',
        link: this._path,
        active: this._showLegalTerms ? 'active' : '',
        state: undefined,
        hash: undefined,
        needsSeperation: true,
        handleClick: () => this._handleClick('showLegalTerms')
      },
      {
        name: 'contact',
        link: this._path,
        active: this._showBusinessCard ? 'active' : '',
        state: undefined,
        hash: undefined,
        needsSeperation: false,
        handleClick: () => this._handleClick('showBusinessCard')
      }
    ];
  }

  _loadButtonGroup() {
    let buttonGroup;

    switch (this._referrer) {
      case '':
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
        case 'story':
          finalName = 'chapters';
          break;
        case 'projects':
          finalName = 'projects';
          break;
        case 'journalism':
          finalName = 'clips';
          break;
      }
    } else if (name === 'story') {
      switch (this._showStory) {
        case true:
          finalName = 'picture';
          break;
        case false:
          finalName = 'story';
          break;
      }
    }

    return finalName[0].toUpperCase() + finalName.slice(1);
  }
}
