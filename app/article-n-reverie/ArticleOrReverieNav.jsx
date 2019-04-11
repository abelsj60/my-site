import Mapper from '../shared/Mapper.jsx';
import normalize from '../helpers/normalize.js';
import React from 'react';
import styled, { css } from 'styled-components';
import StyledLink from '../primitives/StyledLink.jsx';
import UnorderedList from '../primitives/UnorderedList.jsx';

const RestyledList = styled(UnorderedList)`
  overflow: ${p => (!p.menu ? 'auto' : undefined) };
  width: ${p => (!p.menu ? '327px' : undefined)};
`;
const NavigationDek = styled.p`
  color: ${p => (p.menu && !p.link ? p.theme.colors.black : p.theme.colors.newBlue)};
  margin-bottom: ${p => (!p.menu ? '4px' : '0px')};
  font-size: ${p => p.theme.fontSizes.four};
  font-style: italic;

  &:first-child {
    margin-top: 0px;
  }
`;
const NavigationHed = styled.p`
  color: ${p => (p.menu && !p.link ? p.theme.colors.black : p.theme.colors.newBlue)};
  font-size: ${p => (p.menu ? p.theme.fontSizes.fifteen : p.theme.fontSizes.eleven)};
  margin-top: -2px;
  margin-bottom: 15px;
  font-weight: 400;

  ${p => !p.menu && css`
    overflow: hidden;
    text-overflow: ellipsis;
    width: 300px;
    white-space: nowrap;
  `};

  @media (min-width: ${p => p.theme.mediaQueries.narrowBreakOne}) {
    font-size: ${p => (p.menu && p.theme.fontSizes.sixteen)};
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
    <RestyledList menu={isMenu}>
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
                  <NavigationDek
                    link={linkIsActive}
                    menu={isMenu}
                  >
                    {dateOrPublicationFromItem}
                  </NavigationDek>
                  <NavigationHed
                    link={linkIsActive}
                    menu={isMenu}
                  >
                    {headline}
                  </NavigationHed>
                </StyledLink>
              </li>
            );
          }
        }
      />
    </RestyledList>
  );
}
