import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import articleData from './data/articleData.js';
import { normalize } from './helpers/utils.js';

class DesktopArticleList extends Component {
  constructor(props) {
    super(props);
  }

  addCssToShowActiveLink(headline, headlineOnState) {
    if (normalize(headline) === headlineOnState) {
      return 'active';
    } else {
      return 'inactive';
    }
  }

  render() {
    return (
      <section>
        {articleData.map((article, index) => (
          <Link
            key={index}
            className={this.addCssToShowActiveLink(
              article.headline,
              this.props.state.headline
            )}
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
