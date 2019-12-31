import adjustTabIndex from '../helpers/adjustTabIndex.js';
import Mapper from '../shared/Mapper.jsx';
import normalize from '../helpers/normalize.js';
import React from 'react';
import styled from 'styled-components';
import StyledLink from '../primitives/StyledLink.jsx';
import UnorderedList from '../primitives/UnorderedList.jsx';

const RestyledUnorderedList = styled(UnorderedList)`
  margin-top: 5px;
  margin-left: 5px;
`;
const ClipItem = styled.li`
  margin-bottom: 10px;
`;
const RestyledLink = styled(StyledLink)`
  display: flex;
  flex-direction: column;
`;
const NavigationDek = styled.p`
  color: ${p => (!p.link ? p.theme.colors.black : p.theme.colors.blue)};
  margin-bottom: 0px;
  font-size: ${p => p.theme.fontSizes.four};
  font-style: italic;

  &:first-child {
    margin-top: 0px;
  }
`;
const NavigationHed = styled.p`
  color: ${p => (!p.link ? p.theme.colors.black : p.theme.colors.blue)};
  font-size: ${p => p.theme.fontSizes.fifteen};
  margin-top: -2px;
  margin-bottom: 0px;
  font-weight: 400;

  @media (min-width: ${p => p.theme.mediaQueries.narrowBreakOne}) {
    font-size: ${p => p.theme.fontSizes.sixteen};
  }
`;

export default function ArticleOrReverieNav(props) {
  const {
    appState,
    boundHandleClickForApp,
    contentState
  } = props;
  const {
    allContentData,
    caller,
    headlineIndex,
    reverieIndex,
  } = contentState;
  const { tempContent } = appState;
  const isReverie = caller === 'reverie';
  const tabIndex = adjustTabIndex(tempContent);
  const currentHed = normalize(
    allContentData[!isReverie ? headlineIndex : reverieIndex].attributes.headline
  );

  return (
    <RestyledUnorderedList>
      <Mapper
        mapData={allContentData}
        render={(articleOrReverie, idx) => {
          const {
            date,
            headline,
            publication
          } = articleOrReverie.attributes;
          const hedFromItem = normalize(headline);
          const dateOrPublicationFromItem = !isReverie ? publication : date;
          const linkIsActive = currentHed === hedFromItem;
          const articleLink = isReverie
              ? `/reverie/${hedFromItem}`
              : `/journalism/${normalize(
                  dateOrPublicationFromItem
                )}/${hedFromItem}`;

          return (
            <ClipItem
              key={idx}
            >
              <RestyledLink
                boundHandleClickForApp={boundHandleClickForApp}
                tabIndex={tabIndex}
                to={articleLink}
              >
                <NavigationDek
                  link={linkIsActive}
                >
                  {dateOrPublicationFromItem}
                </NavigationDek>
                <NavigationHed
                  link={linkIsActive}
                >
                  {headline}
                </NavigationHed>
              </RestyledLink>
            </ClipItem>
          );
        }}
      />
    </RestyledUnorderedList>
  );
}
