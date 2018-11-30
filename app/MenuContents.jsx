import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ArticleNav from './ArticleNav.jsx';
import ChapterNav from './ChapterNav.jsx';
import MultiProjectNav from './MultiProjectNav.jsx';

class MenuContents extends Component {
  constructor(props) {
    super(props);
  }

  getContent() {
    if (this.props.section.includes('chapter')) {
      return (
        <ChapterNav
          data={this.props.data}
          handleClick={this.props.handleClick}
          indexForChapterData={this.props.indexForChapterData}
        />
      );
    } else if (this.props.section.includes('projects')) {
      return <MultiProjectNav state={this.props.state} />;
    } else {
      return <ArticleNav state={this.props.state} />;
    }
  }

  render() {
    return (
      <section id="contents-list" className={`${this.props.section}-menu`}>
        {this.getContent()}
      </section>
    );
  }
}

export default withRouter(MenuContents);
