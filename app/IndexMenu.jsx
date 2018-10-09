import React, { Component } from 'react';
import ClipNav from './ClipNav.jsx';
import StoryNav from './StoryNav.jsx';
import MultiProjectNav from './MultiProjectNav.jsx';
import articleData from './data/articleData';
import projectData from './data/projectData';
import storyData from './data/storyData';

class IndexMenu extends Component {
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
      <ClipNav articleData={articleData} item={null} />
    );
  }

  render() {
    return (
      <main id="index">
        <nav className={this.props.section + '-index'}>{this.navData}</nav>
      </main>
    );
  }
}

export default IndexMenu;
