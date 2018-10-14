import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ClipNav from './ClipNav.jsx';
import StoryNav from './StoryNav.jsx';
import MultiProjectNav from './MultiProjectNav.jsx';
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

  get section() {
    console.log(this.props.section);
    return this.props.section;
  }

  get projectPage() {
    return this.section === 'projects';
  }

  get storyPage() {
    return this.section === 'chapter';
  }

  render() {
    return (
      <main id="index">
        <Link id="close-button" to={`/${this.section}`}>
          <p>(X) Close</p>
        </Link>
        <nav className={this.props.section + '-index'}>
          {this.projectPage ? (
            <MultiProjectNav
              projectData={projectData}
              formatProjectName={this.formatProjectName}
            />
          ) : this.storyPage ? (
            <StoryNav
              storyData={storyData}
              state={this.props.state}
              item={null}
            />
          ) : (
            <ClipNav state={this.props.state} item={null} />
          )}
        </nav>
      </main>
    );
  }
}

export default IndexMenu;
