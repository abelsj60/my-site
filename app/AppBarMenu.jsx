import React, { Fragment, Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class AppBarMenu extends Component {
  constructor(props) {
    super(props);
  }

  get location() {
    return this.props.location.pathname.split('/')[1];
  }

  get linkPath() {
    if (this.location === 'index') {
      if (this.props.location.pathname.split('/')[2] === 'chapter') {
        return '/chapter';
      } else if (this.props.location.pathname.split('/')[2] === 'projects') {
        return '/projects';
      } else if (this.props.location.pathname.split('/')[2] === 'jnl') {
        return '/jnl';
      }

      return this.props.location.pathname;
    }

    return this.location === 'projects'
      ? '/index/projects'
      : this.location === 'chapter'
        ? '/index/chapter'
        : this.location === 'jnl'
          ? '/index/jnl'
          : '/about';
  }

  get indexLabel() {
    if (this.location.includes('index')) {
      return 'Back';
    }

    if (this.location.includes('about')) {
      // ~ja ? If we come directly to 'about', where does back go? Come back...

      return 'Back';
    }

    return 'Index';
  }

  get buttons() {
    const buttons = [
      {
        label: this.indexLabel,
        linkPath: this.linkPath
      },
      {
        label: this.location === 'projects' ? 'Details' : 'Text',
        linkPath: this.props.location.pathname,
        handleClick: () => {
          if (this.location === 'chapter') {
            this.props.toggleText();
          } else if (this.location === 'projects') {
            this.props.toggleDetails();
          }
        }
      },
      { label: 'About', linkPath: '/about' }
    ];

    if (this.location === 'jnl' || this.location === 'index') {
      buttons.splice(1, 1);
    }

    if (this.location === 'about') {
      buttons.splice(1, 2);
      buttons[0].handleClick = () => {
        if (this.location === 'about') {
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
        {button.label !== 'About' ? <div id="button-border" /> : null}
      </Fragment>
    ));
  }
}

export default withRouter(AppBarMenu);
