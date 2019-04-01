import dotFull from '../../public/dot-full.png';
import dotEmpty from '../../public/dot-empty.png';
import Mapper from '../shared/Mapper.jsx';
import normalize from '../helpers/normalize.js';
import React from 'react';
import styled from 'styled-components';
import StyledLink from '../primitives/StyledLink.jsx';
import UnorderedList from '../primitives/UnorderedList.jsx';

const Nav = styled.nav`
  margin: -7px 0px 16px -13px;
  max-width: 150px;
  display: flex;
  flex-shrink: 0;
  position: relative;
`;
const StyledList = styled(UnorderedList)`
  display: flex;
  flex: 1;
  padding-bottom: 2px;
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
  background-size: contain;
`;

const Line = styled.div`
  position: absolute;
  left: 0px;
  bottom: 0px;
  margin: 0px;
  height: ${p => (!p.menu ? '1px' : '2px')};
  background-color: ${p => p.theme.colors.lightBlue};
  width: 80%;
  margin-left: 15px;
`;

export default function ChapterNav(props) {
  const {
    bodyState,
    data,
    location,
    params
  } = props;
  let indexForChapterData;

  if (location.pathname.split('/')[2] !== 'menu') {
    indexForChapterData = params.titleToIndex();
  } else {
    indexForChapterData = bodyState.indexForChapterData;
  }

  return (
    <Nav>
      <StyledList>
        <Mapper
          mapData={data}
          render={
            (_chapter, idx) => {
              const itemIsActive =
                indexForChapterData === idx;
              const normalizedTitle = normalize(
                data[idx].attributes.title
              );
              const dot = itemIsActive
                ? dotFull
                : dotEmpty;

              return (
                <ListItem key={idx}>
                  <StyledLink to={`/chapter/${normalizedTitle}`}>
                    <SelectorContainer>
                      <Selector
                        image={dot}
                        item={itemIsActive}
                        num={idx}
                      />
                    </SelectorContainer>
                  </StyledLink>
                </ListItem>
              );
            }
          }
        />
      </StyledList>
      <Line />
    </Nav>
  );
}
