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

  get linkToMenu() {
    return '/menu/' + this.location[1];
  }

  get linkToLeaveMenu() {
    return '/' + this.location[2];
  }

  get buttons() {
    const buttons = [
      {
        label: 'menu',
        linkPath: this.location.includes('menu')
          ? this.linkToLeaveMenu
          : this.linkToMenu,
        handleClick: () => null
      },
      {
        label: 'contact',
        linkPath: getPath(this.props),
        handleClick: () => this.props.toggleBusinessCard()
      }
    ];

    if (this.location.includes('chapter')) {
      buttons.splice(1, 0, {
        label: 'explore',
        linkPath: getPath(this.props),
        handleClick: () => this.props.toggleStoryText()
      });
    }

    if (this.location.includes('toys') || this.location.includes('about')) {
      buttons.splice(0, 1);
    }

    return buttons;
  }

  addCssForButtonOnAndOff(button) {
    // ~ja Menu button will always be active on Menu, and nowhere else

    const menu = this.location[1] === 'menu';

    if (menu && button.label === 'menu') {
      return 'active';
    }

    return this.props.footerState[button.label];
  }

  prepMenuLabel(siteSection) {
    if (siteSection === 'chapter') {
      return 'Chapters';
    }

    if (siteSection === 'projects') {
      return 'Projects';
    }

    if (siteSection === 'journalism') {
      return 'Clips';
    }
  }

  prepButtonLabel(button) {
    const siteSection = this.location.find(element => {
      return (
        element === 'chapter' ||
        element === 'projects' ||
        element === 'journalism'
      );
    });

    return button.label === 'menu'
      ? this.prepMenuLabel(siteSection)
      : button.label[0].toUpperCase() + button.label.slice(1);
  }

  render() {
    return (
      <section id="app-bar-menu">
        {this.buttons.map((button, index) => (
          <Fragment key={index}>
            <Link
              to={button.linkPath}
              className={`${this.addCssForButtonOnAndOff(button)}`}
              onClick={event => {
                button.handleClick();
                if (button.label !== 'menu') event.preventDefault();
              }}
            >
              <p>{this.prepButtonLabel(button)}</p>
            </Link>
            {button.label === 'contact' ? null : <div id="button-border" />}
          </Fragment>
        ))}
      </section>
    );
  }
}

export default withRouter(AppBar);
