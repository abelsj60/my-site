import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import articles from './data/clips/index.js';
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
        {articles.map((article, index) => (
          <Link
            key={index}
            className={this.addCssToShowActiveLink(
              article.attributes.headline,
              this.props.state.headline
            )}
            to={`/journalism/${normalize(
              article.attributes.publication
            )}/${normalize(article.attributes.headline)}`}
          >
            <p id="source">{article.attributes.publication}</p>
            <p id="hed">{article.attributes.headline}</p>
          </Link>
        ))}
      </section>
    );
  }
}

export default DesktopArticleList;
