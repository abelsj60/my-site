import Mapper from '../shared/Mapper.jsx';
import normalize from '../helpers/normalize.js';
import React from 'react';
import styled from 'styled-components';
import StyledLink from '../primitives/StyledLink.jsx';
import UnorderedList from '../primitives/UnorderedList.jsx';

const Nav = styled.nav`
  margin-left: 2px;
  margin-bottom: 13px;

  @media (min-width: 848px) {
    padding-right: 25px;
  }
`;
const StyledUL = styled(UnorderedList)`
  flex: 1;
  display: flex;
`;
const Item = styled.li`
  flex: 1;
  flex-direction: column;
  align-items: center;
`;
const RestyledLink = styled(StyledLink)`
  color: white;

  @media (min-width: 848px) {
    color: #6e7dab;
  }
`;
const Text = styled.p`
  flex: 1;
  text-align: center;
  padding-bottom: 10px;
  margin: 0px;
  border-bottom: ${p => (p.item ? '.5px solid white' : undefined)};

  @media (min-width: 848px) {
    border-bottom: ${p => (p.item ? '.5px solid #6e7dab' : undefined)};
  }
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
              const itemIsActive = indexForChapterData === idx;
              const normalizedTitle = normalize(data[idx].attributes.title);

              return (
                <Item key={idx}>
                  <RestyledLink to={`/chapter/${normalizedTitle}`}>
                    <Text item={itemIsActive} num={idx}>
                      {idx + 1}
                    </Text>
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
