import React, { Component } from 'react';
import ArticleNav from './ArticleNav.jsx';

class DesktopClipList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="desktop-clip-navigation" className="left">
        <h1>My stories</h1>
        <ArticleNav state={this.props.state} />
      </section>
    );
  }
}

export default DesktopClipList;
