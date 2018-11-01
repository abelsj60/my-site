import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CloseButton from './CloseButton.jsx';
import MenuContents from './MenuContents.jsx';
import MenuDescription from './MenuDescription.jsx';
import { splitPath } from './helpers/utils.js';

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  get location() {
    return splitPath(this.props);
  }

  render() {
    return (
      <main id="site-menu">
        <CloseButton />
        <MenuDescription />
        <MenuContents state={this.props.state} />
      </main>
    );
  }
}

export default withRouter(Menu);
