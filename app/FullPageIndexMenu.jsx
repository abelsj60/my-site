import React, { Component } from 'react';
import ClipNav from './ClipNav.jsx';
import StoryNav from './StoryNav.jsx';
import MultiProjectNav from './MultiProjectNav.jsx';
import clipData from './helpers/clipData.js';
import projectData from './helpers/projectData.js';
import storyData from './helpers//siteText.js';
// import { withRouter } from 'react-router-dom';

class FullPageIndexMenu extends Component {
  constructor(props) {
    super(props);

    this.formatProjectName = this.formatProjectName.bind(this);
  }

  formatProjectName(name) {
    if (name === 'tmmnews') {
      return name.slice(0, 3).toUpperCase() + name.slice(3);
    } else {
      return name.slice(0, 1).toUpperCase() + name.slice(1);
    }
  }

  get navData() {
    const section = this.props.section;

    return section === 'projects' ? (
      <MultiProjectNav
        projectData={projectData}
        formatProjectName={this.formatProjectName}
      />
    ) : section === 'chapter' ? (
      <StoryNav storyData={storyData} item={null} />
    ) : (
      <ClipNav clipData={clipData} item={null} />
    );
  }

  render() {
    return (
      <main id="full-page-index-menu">
        <nav>{this.navData}</nav>
      </main>
    );
  }
}

export default FullPageIndexMenu;
