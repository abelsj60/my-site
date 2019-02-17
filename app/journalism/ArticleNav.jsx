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
const GrafAsSource = styled(Graf)`
  color: ${p => (p.menu && !p.link ? 'black' : '#6e7dab')};

  &:first-child {
    margin-top: 0px;
  }
`;
const GrafAsHed = styled(Graf)`
  color: ${p => (p.menu && !p.link ? 'black' : '#6e7dab')};
  font-size: ${p => (p.menu ? '3rem' : '1.7rem')};
  // font-weight: bold;

  ${p =>
    !p.menu &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      width: 315px;
      white-space: nowrap;
    `};
`;

export default function ArticleNav(props) {
  const { data, params, bodyState, appState, location } = props;
  const { isMenu } = appState;
  let indexForArticleData;

  if (location.pathname.split('/')[2] !== 'menu') {
    indexForArticleData = params.headlineToIndex();
  } else {
    indexForArticleData = bodyState.indexForArticleData;
  }

  return (
    <StyledUL menu={isMenu}>
      <Mapper
        mapData={data}
        render={(article, idx) => {
          const { publication, headline } = article.attributes;
          const currentHed = data[indexForArticleData].attributes.headline;

          const normalizePub = normalize(publication);
          const normalizeHed = normalize(headline);
          const normalizeCurrentHed = normalize(currentHed);

          const linkIsActive = normalizeHed === normalizeCurrentHed;
          const articleLink = `/journalism/${normalizePub}/${normalizeHed}`;

          return (
            <li key={idx}>
              <StyledLink to={articleLink}>
                <GrafAsSource
                  italic
                  size="1.3"
                  bottom="2"
                  menu={isMenu}
                  link={linkIsActive}
                >
                  {publication}
                </GrafAsSource>
                <GrafAsHed
                  top="0"
                  bottom="10"
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
