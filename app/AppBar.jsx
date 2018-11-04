import React, { Fragment, Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { getPath, splitPath } from './helpers/utils.js';

class AppBar extends Component {
  constructor(props) {
    super(props);
  }

  get location() {
    return splitPath(this.props);
  }

  get isMenu() {
    return this.location.includes('menu');
  }

  get isReverie() {
    return this.location.includes('reverie');
  }

  get buttons() {
    return [
      {
        label: 'menu',
        linkPath: this.isMenu
          ? '/' + this.location[2]
          : '/menu/' + this.location[1],
        css: this.isMenu ? 'active' : 'inactive',
        handleClick: () => undefined
      },
      {
        label: 'reverie',
        linkPath: this.isReverie ? '/' : '/reverie',
        css: this.isReverie ? 'active' : 'inactive',
        handleClick: () => undefined
      },
      {
        label: 'explore',
        linkPath: getPath(this.props),
        css: this.props.state.explore === 'active' ? 'inactive' : 'active',
        handleClick: () => this.props.toggleText()
      },
      {
        label: 'legal',
        linkPath: getPath(this.props),
        css: this.props.footerState.legalTerms,
        handleClick: () => this.props.toggleLegalTerms()
      },
      {
        label: 'contact',
        linkPath: getPath(this.props),
        css: this.props.footerState.contact,
        handleClick: () => this.props.toggleBusinessCard()
      }
    ];
  }

  pickButtons(labels) {
    return this.buttons.filter(button =>
      labels.find(label => button.label === label)
    );
  }

  getButtonsForDisplay() {
    if (this.location[1] === '') {
      return this.pickButtons(['reverie', 'contact']);
    } else if (this.location.includes('chapter')) {
      return this.pickButtons(['menu', 'explore', 'contact']);
    } else if (
      this.location.includes('projects') ||
      this.location.includes('journalism')
    ) {
      return this.pickButtons(['menu', 'contact']);
    } else if (this.location.includes('reverie')) {
      return this.pickButtons(['reverie', 'contact']);
    } else {
      return this.pickButtons(['contact', 'legal']);
    }
  }

  getMenuName(section) {
    if (section === 'chapter') {
      return 'chapters';
    } else if (section === 'projects') {
      return 'projects';
    } else if (section === 'journalism') {
      return 'clips';
    }
  }

  prepMenuLabel() {
    if (this.location.includes('menu')) {
      return this.getMenuName(this.location[2]);
    } else {
      return this.getMenuName(this.location[1]);
    }
  }

  formatButtonLabel(button) {
    const menuLabel =
      button.label === 'menu' ? this.prepMenuLabel() : undefined;
    const label = menuLabel ? menuLabel : button.label;

    return label[0].toUpperCase() + label.slice(1);
  }

  render() {
    return (
      <section id="app-bar-menu">
        {this.getButtonsForDisplay().map((button, index) => (
          <Fragment key={index}>
            <Link
              to={button.linkPath}
              className={button.css}
              onClick={button.handleClick}
            >
              <p>{this.formatButtonLabel(button)}</p>
            </Link>
            {button.label === 'contact' ? null : <div id="button-border" />}
          </Fragment>
        ))}
      </section>
    );
  }
}

export default withRouter(AppBar);
