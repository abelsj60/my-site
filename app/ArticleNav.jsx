import React from 'react';
import { Link } from 'react-router-dom';
import { normalize } from './helpers/utils.js';
import Mapper from './Mapper.jsx';

export default function ArticleNav(props) {
  const { data } = props;
  const { indexForArticleData } = props.localState;

  return (
    <section>
      <Mapper
        mapData={data}
        render={(article, idx) => {
          const { publication, headline } = article.attributes;

          const nPublication = normalize(publication);
          const nHeadline = normalize(headline);

          const currentHeadline = data[indexForArticleData].attributes.headline;
          const nCurrentHeadline = normalize(currentHeadline);

          const className =
            nHeadline === nCurrentHeadline ? 'active' : 'inactive';
          const articleLink = `/journalism/${nPublication}/${nHeadline}`;

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
