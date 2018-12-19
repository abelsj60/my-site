import React from 'react';
import { Link } from 'react-router-dom';
import Mapper from './Mapper.jsx';

import Normalize from './custom/Normalize';

export default function ArticleNav(props) {
  const { data } = props;
  const { indexForArticleData } = props.localState;

  return (
    <section>
      <Mapper
        mapData={data}
        render={(article, idx) => {
          const { publication, headline } = article.attributes;
          const currentHed = data[indexForArticleData].attributes.headline;

          const normalizePub = new Normalize(publication);
          const normalizeHed = new Normalize(headline);
          const normalizeCurrentHed = new Normalize(currentHed);

          const className =
            normalizeHed.done === normalizeCurrentHed.done
              ? 'active'
              : 'inactive';
          const articleLink = `/journalism/${normalizePub.done}/${
            normalizeHed.done
          }`;

          return (
            <Link key={idx} className={className} to={articleLink}>
              <p id="source">{publication}</p>
              <p id="hed">{headline}</p>
            </Link>
          );
        }}
      />
    </section>
  );
}
