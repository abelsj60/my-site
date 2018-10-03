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
    let location = this.location;

    if (location === 'jnl') {
      location = 'clips';
    }

    if (location === 'index') {
      const fullLocation = this.props.location.pathname;

      location = fullLocation.includes('projects')
        ? 'Back to project'
        : fullLocation.includes('chapter')
          ? 'Back to chapter'
          : 'Back to clip';
    }

    return location[0].toUpperCase() + location.slice(1);
  }

  get buttons() {
    const buttons = [
      {
        label: this.indexLabel,
        linkPath: this.linkPath,
        onClick: this.props.history.goBack.bind(this)
      },
      {
        label: this.location === 'projects' ? 'Details' : 'Text',
        linkPath: this.props.location.pathname
      },
      { label: 'About', linkPath: '/about' }
    ];

    if (this.location === 'jnl' || this.location === 'index') {
      buttons.splice(1, 1);
    }

    if (this.location === 'about') {
      buttons.splice(1, 2);
    }

    return buttons;
  }

  render() {
    return this.buttons.map((button, index) => (
      <Fragment key={index}>
        {index === 0 &&
        (this.location === 'index' || this.location === 'about') ? (
            <Link
              id="app-bar-button"
              to={button.linkPath}
              onClick={event => {
                event.preventDefault();
                button.onClick();
              }}
            >
              <p>{button.label}</p>
            </Link>
          ) : (
            <Link id="app-bar-button" to={button.linkPath}>
              <p>{button.label}</p>
            </Link>
          )}
        {button.label !== 'About' ? <div id="button-border" /> : null}
      </Fragment>
    ));
  }
}

export default withRouter(AppBarMenu);

/*
    x 1. Restructure w/.map
    x 2. Turn buttons into Links
    3. Point links to appropriate site sections
    x 4. Move CSS into own file
    5. Close button for index menu?
    6. Place index in own route, or as subset of project
    7. https://codepen.io/nwst/pen/oZKjbY
    --
    1. Create clips files/text
    2. Add one file per clip
    3. Update data repository
    3. Build proper links with clips
  */
