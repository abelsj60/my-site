import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import Mapper from './Mapper.jsx';
import Normalize from './custom/Normalize.js';

const ChapterNavContainer = styled.nav`
  margin: 0;
  padding: 0;
`;
const ChapterList = styled.ul`
  flex: 1;
  display: ${props => (props.menu !== 'active' ? 'flex' : '')};
  flex-direction: ${props => (props.menu === 'active' ? 'column' : '')};
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
const ChapterListItem = styled.li`
  flex: ${props => (props.menu !== 'active' ? '1' : '')};
  flex-direction: ${props => (props.menu === 'active' ? 'column' : '')};
  align-items: ${props => (props.menu === 'active' ? 'flex-start' : 'center')};
`;
const StyledLink = styled(Link)`
  color: ${props =>
    props.item === 'active' && props.menu === 'active' ? 'white' : 'white'};
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:hover {
    // color: lightyellow;
  }

  @media (min-width: 848px) {
    color: #6e7dab;
    &:hover {
      // color: #fd1172;
    }
  }
`;
const ExtraTextForMenu = styled.h1`
  display: none;

  ${props =>
    props.menu === 'active' &&
    css`
      display: block;
      font-size: 1.75rem;
      margin-bottom: 6px;
      margin-top: 0px;
      font-style: italic;
      line-height: normal;
    `};
`;
const NavigationText = styled.p`
  flex: ${props => (props.menu !== 'active' ? '1' : '')};
  text-align: ${props => (props.menu !== 'active' ? 'center' : '')};
  font-size: ${props => (props.menu === 'active' ? '3rem' : '')};
  margin-top: ${props => (props.menu === 'active' ? '0px' : '0px')};
  margin-bottom: ${props =>
    props.menu === 'active' && props.num !== 3 ? '10px' : '0px'};
  padding-bottom: ${props => (props.menu !== 'active' ? '10px' : '')};
  border-bottom: ${props =>
    props.item === 'active' && props.menu !== 'active'
      ? '.5px solid white'
      : ''};

  @media (min-width: 848px) {
    border-bottom: ${props =>
    props.item === 'active' && props.menu !== 'active'
      ? '.5px solid #6e7dab'
      : ''};
  }
`;

export default function ChapterNav(props) {
  const { data, isMenu } = props;
  const { indexForChapterData } = props.localState;
  const menuIsActive = isMenu ? 'active' : '';

  return (
    <ChapterNavContainer>
      <ChapterList menu={menuIsActive}>
        <Mapper
          mapData={data}
          render={(chapter, idx) => {
            const chapterNumberForMenu = idx + 1;
            const chapterNeedsTopPadding = idx > 0 ? 'active' : '';
            const itemIsActive = indexForChapterData === idx ? 'active' : '';
            const pageOrMenuText = isMenu ? chapter.attributes.title : idx + 1;
            const n = new Normalize(data[idx].attributes.title);
            const normalizedTitle = n.done;

            return (
              <ChapterListItem key={idx} menu={menuIsActive}>
                <StyledLink
                  menu={menuIsActive}
                  item={itemIsActive}
                  to={`/chapter/${normalizedTitle}`}
                >
                  <ExtraTextForMenu
                    menu={menuIsActive}
                    padding={chapterNeedsTopPadding}
                  >
                    Chapter {chapterNumberForMenu}
                  </ExtraTextForMenu>
                  <NavigationText
                    item={itemIsActive}
                    menu={menuIsActive}
                    num={idx}
                  >
                    {pageOrMenuText}
                  </NavigationText>
                </StyledLink>
              </ChapterListItem>
            );
          }}
        />
      </ChapterList>
    </ChapterNavContainer>
  );
}
