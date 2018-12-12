import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { normalize } from './helpers/utils.js';

class ArticleNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        {this.props.data.map((article, index) => {
          const publication = article.attributes.publication;
          const normalizedPublication = normalize(publication);

          const headline = article.attributes.headline;
          const normalizedHeadline = normalize(headline);

          const headlineFromState = this.props.data[this.props.articleIndex]
            .attributes.headline;
          const normalizedHeadlineFromState = normalize(headlineFromState);

          return (
            <Link
              key={index}
              className={
                normalizedHeadline === normalizedHeadlineFromState
                  ? 'active'
                  : 'inactive'
              }
              to={`/journalism/${normalizedPublication}/${normalizedHeadline}`}
            >
              <p id="source">{publication}</p>
              <p id="hed">{headline}</p>
            </Link>
          );
        })}
      </section>
    );
  }
}

export default ArticleNav;
