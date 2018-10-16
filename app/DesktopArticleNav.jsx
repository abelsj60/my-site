import React, { Component } from 'react';
import ArticleNav from './ArticleNav.jsx';

class DesktopArticleNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="desktop-article-navigation" className="left">
        <h1>My stories</h1>
        <ArticleNav state={this.props.state} />
      </section>
    );
  }
}

export default DesktopArticleNav;
