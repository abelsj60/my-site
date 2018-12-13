import { getPath, splitPath } from '../helpers/utils.js';

export default class ButtonGroup {
  constructor(props) {
    this._path = getPath(props);
    this._referrer = splitPath(props)[1];
    this._isMenu = this._path.includes('menu');
    this._explore = props.state.explore;
    this._legalTerms = props.state.legalTerms;
    this._contact = props.state.contact;
    this._toggleText = props.toggleText;
    this._toggleLegalTerms = props.toggleLegalTerms;
    this._toggleBusinessCard = props.toggleBusinessCard;
    this._propsBackup = props;

    this.buttons = this._getButtonGroup();
  }

  get _buttonData() {
    return [
      {
        name: 'menu',
        link: this._isMenu ? `/${this._referrer}` : `/${this._referrer}/menu`,
        css: this._referrer === 'menu' ? 'active' : 'inactive',
        state: 'menu',
        hash: undefined,
        needsBorder: true,
        handleClick: () => undefined
      },
      {
        name: 'reverie',
        link: this._referrer === 'reverie' ? '/' : '/reverie',
        css: this._referrer === 'reverie' ? 'active' : 'inactive',
        state: undefined,
        hash: undefined,
        needsBorder: true,
        handleClick: () => undefined
      },
      {
        name: 'explore',
        link: this._path,
        css: this._explore !== 'active' ? 'active' : 'inactive',
        state: undefined,
        hash: undefined,
        needsBorder: true,
        handleClick: () => this._toggleText()
      },
      {
        name: 'legal',
        link: this._path,
        css: this._legalTerms,
        state: undefined,
        hash: undefined,
        needsBorder: true,
        handleClick: () => this._toggleLegalTerms()
      },
      {
        name: 'contact',
        link: this._path,
        css: this._contact,
        state: undefined,
        hash: undefined,
        needsBorder: false,
        handleClick: () => this._toggleBusinessCard()
      }
    ];
  }

  _getButtonGroup() {
    let buttonGroup;

    switch (this._referrer) {
      case '':
        buttonGroup = ['reverie', 'contact'];
        break;
      case 'chapter':
        buttonGroup = ['menu', 'explore', 'contact'];
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

    if (name === 'menu') {
      switch (this.referrer) {
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
    }

    return finalName[0].toUpperCase() + finalName.slice(1);
  }
}
