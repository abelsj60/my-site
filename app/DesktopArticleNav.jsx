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
        <h2>{this.props.text}</h2>
        <ArticleNav
          data={this.props.data}
          articleIndex={this.props.articleIndex}
        />
      </section>
    );
  }
}

export default DesktopArticleNav;
