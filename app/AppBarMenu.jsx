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
        : '/index/journalism';
  }

  get indexLabel() {
    return 'List';
  }

  get buttons() {
    const buttons = [
      {
        label: this.indexLabel,
        linkPath: this.linkPath
      },
      {
        label: 'Contact',
        linkPath: this.props.location.pathname,
        handleClick: () => this.props.toggleContactInfo()
      }
    ];

    if (this.location[1] === 'chapter') {
      buttons.splice(1, 0, {
        label: 'Text',
        linkPath: this.props.location.pathname,
        handleClick: () => this.props.toggleText()
      });
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
        {button.label === 'Contact' ? null : <div id="button-border" />}
      </Fragment>
    ));
  }
}

export default withRouter(AppBarMenu);
