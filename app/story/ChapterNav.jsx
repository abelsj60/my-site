import adjustTabIndex from '../helpers/adjustTabIndex.js';
import dotFull from '../../docs/assets/images/convert-to-data-uri/dot-full-32-@4x.png';
import dotEmpty from '../../docs/assets/images/convert-to-data-uri/dot-empty-32-@4x.png';
import Mapper from '../shared/Mapper.jsx';
import normalize from '../helpers/normalize.js';
import React from 'react';
import styled from 'styled-components';
import StyledLink from '../primitives/StyledLink.jsx';
import UnorderedList from '../primitives/UnorderedList.jsx';

const Nav = styled.nav`
  max-width: 200px;
  display: flex;
  flex-shrink: 0;
  position: relative;
  // Added width b/c otherwise collapsed on IE 11, per BrowserStack testing:
  width: 100%;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    max-width: 225px;
  }

  @media (min-width: ${p => p.theme.mediaQueries.narrowBreakOne}) {
    max-width: 250px;
  }
`;
const StyledList = styled(UnorderedList)`
  width: 250px;
  display: flex;
  flex: 1;
`;
const ListItem = styled.li`
  flex: 1;
`;
const RestyledLink = styled(StyledLink)`
  display: flex;
  padding: 5px 0px;
`;
const Selector = styled.div`
  height: 7px;
  width: 100%;
  background: ${p => `url(${p.image}) center no-repeat`};
  background-size: contain; // Must come after background rule

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    height: 8px;
  }
`;

export default function ChapterNav(props) {
  const {
    appState,
    boundHandleClickForApp,
    contentState
  } = props;
  const {
    allContentData,
    chapterIndex
  } = contentState;
  const { illustrationLevel, tempContent } = appState;
  const tabIndex = adjustTabIndex(tempContent, false, illustrationLevel);

  return (
    <Nav>
      <StyledList>
        <Mapper
          mapData={allContentData}
          render={(_chapter, idx) => {
            const normalizedTitle = normalize(allContentData[idx].attributes.title);
            const dotType =
              chapterIndex === idx
                ? dotFull
                : dotEmpty;

            return (
              <ListItem
                key={idx}
              >
                <RestyledLink
                  tabIndex={tabIndex}
                  boundHandleClickForApp={boundHandleClickForApp}
                  to={`/chapter/${normalizedTitle}`}
                >
                  <Selector
                    image={dotType}
                    num={idx}
                  />
                </RestyledLink>
              </ListItem>
            );
          }}
        />
      </StyledList>
    </Nav>
  );
}
