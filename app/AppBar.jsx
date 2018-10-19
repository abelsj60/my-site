import React, { Fragment, Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class AppBar extends Component {
  constructor(props) {
    super(props);
  }

  get location() {
    return this.props.location.pathname.toLowerCase().split('/');
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
        label: 'Menu',
        linkPath: this.location.includes('menu')
          ? this.linkPathFromMenu
          : this.linkPathToMenu,
        handleClick: () => undefined
      },
      {
        label: 'Contact',
        linkPath: this.props.location.pathname,
        handleClick: () => this.props.toggleBusinessCard()
      }
    ];

    if (this.location.includes('chapter')) {
      buttons.splice(1, 0, {
        label: 'Text',
        linkPath: this.props.location.pathname,
        handleClick: () => this.props.toggleText()
      });
    }

    return buttons;
  }

  render() {
    return (
      <section id="app-bar-menu">
        {this.buttons.map((button, index) => (
          <Fragment key={index}>
            <Link
              to={button.linkPath}
              className={this.props.state[button.label.toLowerCase()]}
              onClick={event => {
                if (button.handleClick) {
                  button.handleClick(event);
                  this.props.makeButtonActive(button.label.toLowerCase());
                  if (button.label !== 'Menu') event.preventDefault();
                }
              }}
            >
              <p>{button.label}</p>
            </Link>
            {button.label === 'Contact' ? null : <div id="button-border" />}
          </Fragment>
        ))}
      </section>
    );
  }
}

export default withRouter(AppBar);
