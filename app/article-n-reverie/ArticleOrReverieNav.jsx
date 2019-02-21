import React from 'react';
import styled, { css } from 'styled-components';

import StyledLink from '../primitives/StyledLink.jsx';
import UnorderedList from '../primitives/UnorderedList.jsx';
import Mapper from '../shared/Mapper.jsx';
import normalize from '../helpers/normalize.js';
import Graf from '../primitives/Graf.jsx';

const StyledUL = styled(UnorderedList)`
  height: 100%;
  overflow: auto;
  width: ${p => (!p.menu ? '327px' : undefined)};
`;
const GrafAsDek = styled(Graf)`
  color: ${p => (p.menu && !p.link ? 'black' : '#6e7dab')};

  &:first-child {
    margin-top: 0px;
  }
`;
const GrafAsHed = styled(Graf)`
  color: ${p => (p.menu && !p.link ? 'black' : '#6e7dab')};
  font-size: ${p => (p.menu ? '3rem' : '1.7rem')};

  ${p =>
    !p.menu &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      width: 300px;
      white-space: nowrap;
    `};
`;

export default function ArticleOrReverieNav(props) {
  const {
    data,
    params,
    bodyState,
    appState,
    location
  } = props;
  const { isMenu } = appState;
  const currentPath = location.pathname.split('/');

  const isReverie = currentPath[1] === 'reverie';
  let index;

  if (currentPath[2] !== 'menu') {
    index = params.headlineToIndex();
  } else {
    if (isReverie) {
      index = bodyState.indexForReverieData;
    } else {
      index = bodyState.indexForArticleData;
    }
  }

  const currentHed = data[index].attributes.headline;
  const normalizedCurrentHed = normalize(currentHed);

  return (
    <StyledUL menu={isMenu}>
      <Mapper
        mapData={data}
        render={(articleOrReverie, idx) => {
          const {
            publication,
            headline,
            date
          } = articleOrReverie.attributes;

          const normalizedHedFromItem = normalize(headline);
          const dateOrPublicationFromItem = !isReverie ? publication : date;

          const linkIsActive = normalizedCurrentHed === normalizedHedFromItem;
          const articleLink = isReverie
            ? `/reverie/${normalizedHedFromItem}`
            : `/journalism/${normalize(
              dateOrPublicationFromItem
            )}/${normalizedHedFromItem}`;

          return (
            <li key={idx}>
              <StyledLink to={articleLink}>
                <GrafAsDek
                  italic
                  s="1.3"
                  b="2"
                  menu={isMenu}
                  link={linkIsActive}
                >
                  {dateOrPublicationFromItem}
                </GrafAsDek>
                <GrafAsHed
                  t="0"
                  b="10"
                  menu={isMenu}
                  link={linkIsActive}
                >
                  {headline}
                </GrafAsHed>
              </StyledLink>
            </li>
          );
        }}
      />
    </StyledUL>
  );
}
