import Graf from '../primitives/Graf.jsx';
import Mapper from '../shared/Mapper.jsx';
import normalize from '../helpers/normalize.js';
import React from 'react';
import styled, { css } from 'styled-components';
import StyledLink from '../primitives/StyledLink.jsx';
import UnorderedList from '../primitives/UnorderedList.jsx';

const StyledUL = styled(UnorderedList)`
  // height: 100%;
  overflow: ${p => (!p.menu ? 'auto' : undefined) };
  width: ${p => (!p.menu ? '327px' : undefined)};
`;
const GrafAsDek = styled(Graf)`
  color: ${p => (p.menu && !p.link ? 'black' : '#6e7dab')};
  margin-bottom: ${p => (!p.menu ? '1px' : undefined)};

  &:first-child {
    margin-top: 0px;
  }
`;
const GrafAsHed = styled(Graf)`
  color: ${p => (p.menu && !p.link ? 'black' : '#6e7dab')};
  font-size: ${p => (p.menu ? '2rem' : '1.55rem')};
  margin-top: -2px;

  ${p =>
    !p.menu
    && css`
      overflow: hidden;
      text-overflow: ellipsis;
      width: 300px;
      white-space: nowrap;
    `};

  @media (min-width: 500px) {
    font-size: ${p => (p.menu && '3rem')}
  }
`;

export default function ArticleOrReverieNav(props) {
  const {
    appState,
    bodyState,
    data,
    location,
    params
  } = props;
  const {
    isMenu
  } = appState;
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
        render={
          (articleOrReverie, idx) => {
            const {
              date,
              headline,
              publication
            } = articleOrReverie.attributes;

            const normalizedHedFromItem = normalize(headline);
            const dateOrPublicationFromItem = !isReverie
              ? publication
              : date;

            const linkIsActive =
              normalizedCurrentHed === normalizedHedFromItem;
            const articleLink = isReverie
              ? `/reverie/${
                normalizedHedFromItem
              }`
              : `/journalism/${
                normalize(
                  dateOrPublicationFromItem
                )
              }/${
                normalizedHedFromItem
              }`;

            return (
              <li key={idx}>
                <StyledLink to={articleLink}>
                  <GrafAsDek
                    italic
                    link={linkIsActive}
                    menu={isMenu}
                    s="1.25"
                  >
                    {dateOrPublicationFromItem}
                  </GrafAsDek>
                  <GrafAsHed
                    b="10"
                    link={linkIsActive}
                    menu={isMenu}
                    t="0"
                  >
                    {headline}
                  </GrafAsHed>
                </StyledLink>
              </li>
            );
          }
        }
      />
    </StyledUL>
  );
}

//
