import React, { Fragment, Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class AppBarMenu extends Component {
  constructor(props) {
    super(props);
  }

  get location() {
    return this.props.location.pathname.split('/');
  }

  get linkPath() {
    if (this.location[1] === 'index') {
      if (this.location[2] === 'chapter') {
        return '/chapter';
      } else if (this.location[2] === 'projects') {
        return '/projects';
      } else if (this.location[2] === 'journalism') {
        return '/journalism';
      }

      return this.props.location.pathname;
    }

    return this.location[1] === 'projects'
      ? '/index/projects'
      : this.location[1] === 'chapter'
        ? '/index/chapter'
        : this.location[1] === 'journalism'
          ? '/index/journalism'
          : '/about';
  }

  get indexLabel() {
    if (this.location[1].includes('index')) {
      return 'Close';
    }
    // ~ja ? If we come directly to 'about', where does back go? Come back...

    return 'Index';
  }

  get buttons() {
    const buttons = [
      {
        label: this.indexLabel,
        linkPath: this.linkPath
      },
      {
        label:
          this.location[1] === 'projects' || this.location[2] === 'projects'
            ? 'Details'
            : 'Text',
        linkPath: this.props.location.pathname,
        handleClick: () => {
          if (
            this.location[1] === 'chapter' ||
            this.location[2] === 'chapter'
          ) {
            this.props.toggleText();
          } else if (
            this.location[1] === 'projects' ||
            this.location[2] === 'projects'
          ) {
            this.props.toggleDetails();
          }
        }
      },
      { label: 'About', linkPath: '/about' }
    ];

    if (
      this.location[1] === 'journalism' ||
      this.location[2] === 'journalism'
    ) {
      buttons.splice(1, 1);
    }

    if (this.location[1] === 'about') {
      // buttons.splice(1, 2);
      buttons[2].handleClick = () => {
        if (this.location[1] === 'about') {
          this.props.history.goBack();
        }
      };
    }

    return buttons;
  }

  render() {
    return this.buttons.map((button, index) => (
      <Fragment key={index}>
        <Link
          id="app-bar-button"
          to={button.linkPath}
          onClick={event => {
            if (button.handleClick) {
              button.handleClick(event);
              event.preventDefault();
            }
          }}
        >
          <p>{button.label}</p>
        </Link>
        {button.label === 'About' || button.label === 'Back' ? null : (
          <div id="button-border" />
        )}
      </Fragment>
    ));
  }
}

export default withRouter(AppBarMenu);
