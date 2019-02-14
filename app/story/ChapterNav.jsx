import React from 'react';
import styled from 'styled-components';

import StyledLink from '../primitives/StyledLink.jsx';
import UnorderedList from '../primitives/UnorderedList.jsx';
import Mapper from '../shared/Mapper.jsx';
import Normalize from '../classes/Normalize.js';

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
  border-bottom: ${p => (p.item === 'active' ? '.5px solid white' : '')};

  @media (min-width: 848px) {
    border-bottom: ${p => (p.item === 'active' ? '.5px solid #6e7dab' : '')};
  }
`;

export default function ChapterNav(props) {
  const { data } = props;
  const { isMenu } = props.state;
  const { indexForChapterData } = props.localState;

  return (
    <nav>
      <StyledUL>
        <Mapper
          mapData={data}
          render={(chapter, idx) => {
            const itemIsActive = indexForChapterData === idx ? 'active' : '';
            const pageOrMenuText = isMenu ? chapter.attributes.title : idx + 1;
            const n = new Normalize(data[idx].attributes.title);
            const normalizedTitle = n.done;

            return (
              <Item key={idx}>
                <RestyledLink
                  item={itemIsActive}
                  to={`/chapter/${normalizedTitle}`}
                >
                  <Text item={itemIsActive} num={idx}>
                    {pageOrMenuText}
                  </Text>
                </RestyledLink>
              </Item>
            );
          }}
        />
      </StyledUL>
    </nav>
  );
}
