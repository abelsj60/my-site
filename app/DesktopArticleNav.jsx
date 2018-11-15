import React, { Component } from 'react';
import ArticleNav from './ArticleNav.jsx';

class DesktopArticleNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="desktop-article-navigation" className="left">
        <h1>My clips</h1>
        <h2>
          Staff and freelance reporting for Forbes.com, Mergermarket, Slate and
          others
        </h2>
        <ArticleNav state={this.props.state} />
      </section>
    );
  }
}

export default DesktopArticleNav;
