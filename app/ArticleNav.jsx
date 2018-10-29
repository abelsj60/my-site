import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import articleData from './data/articleData.js';
import { normalize } from './helpers/utils.js';

class DesktopArticleList extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  addCssToShowActiveLink(headline, headlineOnState) {
    if (headline === headlineOnState) {
      return 'active';
    } else {
      return 'inactive';
    }
  }

  handleClick() {
    if (this.props.state.menu === 'active') {
      this.props.toggleMenu();
    }
  }

  render() {
    return (
      <section>
        {articleData.map((article, index) => (
          <Link
            key={index}
            className={this.addCssToShowActiveLink(
              normalize(article.headline),
              this.props.state.headline
            )}
            onClick={this.handleClick}
            to={`/journalism/${normalize(article.publication)}/${normalize(
              article.headline
            )}`}
          >
            <p id="source">{article.publication}</p>
            <p id="hed">{article.headline}</p>
          </Link>
        ))}
      </section>
    );
  }
}

export default DesktopArticleList;
