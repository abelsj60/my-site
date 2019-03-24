import dotFull from '../../public/dot-full.png';
import dotEmpty from '../../public/dot-empty.png';
import Mapper from '../shared/Mapper.jsx';
import normalize from '../helpers/normalize.js';
import React from 'react';
import styled from 'styled-components';
import StyledLink from '../primitives/StyledLink.jsx';
import UnorderedList from '../primitives/UnorderedList.jsx';

const Nav = styled.nav`
  margin-top: -5px;
  margin-bottom: 5px;
  margin-left: -13px; // Deliberately not flush
  max-width: 150px;
  display: flex;
  flex-shrink: 0;
`;
const StyledUL = styled(UnorderedList)`
  display: flex;
  flex: 1;
`;
const ListItem = styled.li`
  flex: 1;
`;
const Selector = styled.div`
  height: 8px;
  background: ${p => `url(${p.image})`} center no-repeat;
  background-size: contain;
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
      <StyledUL>
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
                    <div
                      style={{
                        paddingTop: '8px',
                        paddingBottom: '8px'
                      }}>
                      <Selector
                        image={dot}
                        item={itemIsActive}
                        num={idx}
                        s="1.3"
                        c="lightBlack"
                      />
                    </div>
                  </StyledLink>
                </ListItem>
              );
            }
          }
        />
      </StyledUL>
    </Nav>
  );
}
