import React, { Fragment, Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { getPath } from './helpers/utils.js';

class AppBar extends Component {
  constructor(props) {
    super(props);
  }

  get location() {
    return getPath(this.props).split('/');
  }

  get linkPathFromMenu() {
    return '/' + this.location[2];
  }

  get linkPathToMenu() {
    return '/menu/' + this.location[1];
  }

  get buttons() {
    const buttons = [
      {
        label: 'menu',
        linkPath: this.location.includes('menu')
          ? this.linkPathFromMenu
          : this.linkPathToMenu,
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
        label: 'text',
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
              <p>{button.label[0].toUpperCase() + button.label.slice(1)}</p>
            </Link>
            {button.label === 'contact' ? null : <div id="button-border" />}
          </Fragment>
        ))}
      </section>
    );
  }
}

export default withRouter(AppBar);
