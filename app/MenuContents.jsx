import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ArticleNav from './ArticleNav.jsx';
import ChapterNav from './ChapterNav.jsx';
import MultiProjectNav from './MultiProjectNav.jsx';
import { splitPath } from './helpers/utils.js';

class MenuContents extends Component {
  constructor(props) {
    super(props);
  }

  get currentLocation() {
    return splitPath(this.props)[2].toLowerCase();
  }

  getContent() {
    if (this.currentLocation.includes('chapter')) {
      return <ChapterNav state={this.props.state} />;
    } else if (this.currentLocation.includes('projects')) {
      return <MultiProjectNav state={this.props.state} />;
    } else {
      return <ArticleNav state={this.props.state} />;
    }
  }

  render() {
    return (
      <section id="contents-list" className={`${this.currentLocation}-menu`}>
        {this.getContent()}
      </section>
    );
  }
}

export default withRouter(MenuContents);
