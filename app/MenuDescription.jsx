import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { splitPath } from './helpers/utils.js';

class MenuDescription extends Component {
  constructor(props) {
    super(props);
  }

  get currentLocation() {
    return splitPath(this.props)[2].toLowerCase();
  }

  getDescription() {
    if (this.currentLocation.includes('projects')) {
      return 'Technology projects for me, clients, and fun';
    } else if (this.currentLocation.includes('journalism')) {
      return 'Staff and freelance reporting for Forbes.com, Mergermarket, Slate and others';
    } else {
      return 'The story so far';
    }
  }

  render() {
    return <h1 id="menu-description">{this.getDescription()}</h1>;
  }
}

export default withRouter(MenuDescription);
