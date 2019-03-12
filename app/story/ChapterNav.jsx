import Mapper from '../shared/Mapper.jsx';
import normalize from '../helpers/normalize.js';
import React from 'react';
import styled from 'styled-components';
import Graf from '../primitives/Graf.jsx';
import StyledLink from '../primitives/StyledLink.jsx';
import UnorderedList from '../primitives/UnorderedList.jsx';

const Nav = styled.nav`
  // margin-left: 2px;
  // margin-bottom: 13px;
  // margin-right: 25px;
  // width: 150px;
  // margin: 0px 25px 11px 2px;
  // margin-bottom: 10px;
  // flex: 1;
  // max-width: 175px;
  // margin-left: 15px;
  margin-right: 25px;
  margin-bottom: 11px;

  @media (min-width: 848px) {
  }
`;
const StyledUL = styled(UnorderedList)`
  // flex: 1;
  display: flex;
`;
const Item = styled.li`
  flex: 1;
  // flex-direction: column;
  // align-items: center;
`;
const RestyledLink = styled(StyledLink)`
  // color: white;
  // color: #6e7dab;
  // color: black;
  // display: flex;

  @media (min-width: 848px) {
  }
`;
// const RestyledGraf = styled(Graf)`
//   flex: 1;
//   text-align: center;
//   font-size: 1.3rem;
//   margin: 0px;

//   @media (min-width: 848px) {
//   }
// `;
const Selector = styled.div`
  // flex: 1;
  height: 8px;
  background: ${p => `url(${p.image})`} center no-repeat;
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
                ? '/dot-full.svg'
                : '/dot-empty.svg';

              return (
                <Item key={idx}>
                  <RestyledLink to={`/chapter/${normalizedTitle}`}>
                    <Selector
                      image={dot}
                      item={itemIsActive}
                      num={idx}
                      s="1.3"
                      c="lightBlack"
                    />
                  </RestyledLink>
                </Item>
              );
            }
          }
        />
      </StyledUL>
    </Nav>
  );
}
