import React, { Component } from 'react';
import { withRouter } from 'react-router';
import DesktopArticleNav from './DesktopArticleNav.jsx';
import Article from './Article.jsx';
import articles from './data/clips/index.js';
import { normalize } from './helpers/utils.js';

class Journalism extends Component {
  constructor(props) {
    super(props);
  }

  get article() {
    return articles.find(clip =>
      normalize(clip.attributes.headline).includes(this.props.state.headline)
    );
  }

  render() {
    return (
      <main id="journalism" className="">
        <DesktopArticleNav state={this.props.state} />
        <Article article={this.article} />
      </main>
    );
  }
}

export default withRouter(Journalism);
