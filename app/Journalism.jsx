import React, { Component } from 'react';
import { withRouter } from 'react-router';
import DesktopArticleNav from './DesktopArticleNav.jsx';
import Article from './Article.jsx';

class Journalism extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main id="journalism" className="">
        <DesktopArticleNav
          data={this.props.data}
          localState={this.props.localState}
          articleIndex={this.props.articleIndex}
        />
        <Article
          data={this.props.data}
          articleIndex={this.props.articleIndex}
        />
      </main>
    );
  }
}

export default withRouter(Journalism);
