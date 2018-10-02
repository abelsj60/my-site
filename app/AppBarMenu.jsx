import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router-dom';
// import Button from './Button.jsx';
// import IndexMenu from './IndexMenu.jsx';

class AppBarMenu extends Component {
  constructor(props) {
    super(props);
  }

  get isJNL() {
    return this.props.location.pathname.includes('jnl');
  }

  get indexLabel() {
    let section = this.props.location.pathname.split('/')[1];

    if (section === 'jnl') {
      section = 'clips';
    }

    return section[0].toUpperCase() + section.slice(1);
  }

  get buttonLabels() {
    return [
      this.indexLabel,
      this.isJNL ? 'About' : 'Details',
      this.isJNL ? null : 'About'
    ];
  }

  render() {
    return this.buttonLabels.map(
      (label, index) =>
        label && (
          <Fragment key={index}>
            <p id="app-bar-button">{label}</p>
            {label !== 'About' ? <div id="button-border" /> : null}
          </Fragment>
        )
    );
  }
}

export default withRouter(AppBarMenu);

/*
    x 1. Restructure w/.map
    2. Turn buttons into Links
    3. Point links to appropriate site sections
    4. Move CSS into own file
    5. Close button for index menu?
    6. Place index in own route, or as subset of project
    7. https://codepen.io/nwst/pen/oZKjbY
    --
    1. Create clips files/text
    2. Add one file per clip
    3. Update data repository
    3. Build proper links with clips
  */
