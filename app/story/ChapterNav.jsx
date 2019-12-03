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
  height: 25px;
  display: flex;
  flex: 1;
`;
const ListItem = styled.li`
  flex: 1;
`;
const SelectorContainer = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
`;
const Selector = styled.div`
  height: 7px;
  background: ${p => `url(${p.image})`} center no-repeat;
  background-size: contain; // Must come after background rule
`;

export default function ChapterNav(props) {
  const {
    boundHandleClickForApp,
    contentState
  } = props;
  const {
    allContentData,
    chapterIndex
  } = contentState;

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
                <StyledLink
                  boundHandleClickForApp={boundHandleClickForApp}
                  to={`/chapter/${normalizedTitle}`}
                >
                  <SelectorContainer>
                    <Selector
                      image={dotType}
                      num={idx}
                    />
                  </SelectorContainer>
                </StyledLink>
              </ListItem>
            );
          }}
        />
      </StyledList>
    </Nav>
  );
}
