import React, { Component } from 'react';
import ArticleNav from './ArticleNav.jsx';
import StoryNav from './StoryNav.jsx';
import MultiProjectNav from './MultiProjectNav.jsx';
import projectData from './data/projectData';
import storyData from './data/storyData';

class SectionList extends Component {
  constructor(props) {
    super(props);
  }

  get section() {
    return this.props.section;
  }

  get projectPage() {
    return this.section === 'projects';
  }

  get storyPage() {
    return this.section === 'chapter';
  }

  formatProjectName(name) {
    if (name === 'tmmnews') {
      return name.slice(0, 3).toUpperCase() + name.slice(3);
    } else {
      return name.slice(0, 1).toUpperCase() + name.slice(1);
    }
  }

  render() {
    return (
      <section id="contents-list" className={this.props.section + '-index'}>
        {this.projectPage ? (
          <MultiProjectNav
            projectData={projectData}
            formatProjectName={this.formatProjectName}
          />
        ) : this.storyPage ? (
          <StoryNav storyData={storyData} state={this.props.state} />
        ) : (
          <ArticleNav state={this.props.state} item={null} />
        )}
      </section>
    );
  }
}

export default SectionList;
