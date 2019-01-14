import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import Mapper from './Mapper.jsx';
import Normalize from './custom/Normalize.js';

const StoryNavigation = styled.nav`
  display: ${props => (props.menu !== 'active' ? 'flex' : '')};
  flex-direction: ${props => (props.menu === 'active' ? 'column' : '')};
`;
const StyledLink = styled(Link)`
  flex: ${props => (props.menu !== 'active' ? '1' : '')};
  flex-direction: ${props => (props.menu === 'active' ? 'column' : '')};
  align-items: ${props => (props.menu === 'active' ? 'flex-start' : 'center')};
  border-bottom: ${props =>
    props.link === 'active' && props.menu !== 'active'
      ? 'whitesmoke solid .5px'
      : ''};
  color: ${props =>
    props.link === 'active' && props.menu === 'active'
      ? 'deepskyblue'
      : 'whitesmoke'};
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:hover {
    color: lightyellow;
  }

  @media (min-width: 848px) {
    &:hover {
      color: deepskyblue;
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
`;

export default function ChapterNav(props) {
  const { data, isMenu } = props;
  const { indexForChapterData } = props.localState;
  const menuIsActive = isMenu ? 'active' : '';

  return (
    <StoryNavigation menu={menuIsActive}>
      <Mapper
        mapData={data}
        render={(chapter, idx) => {
          const chapterNumberForMenu = idx + 1;
          const linkIsActive = indexForChapterData === idx ? 'active' : '';
          const chapterNeedsTopPadding = idx > 0 ? 'active' : '';
          const pageOrMenuText = isMenu ? chapter.attributes.title : idx + 1;
          const n = new Normalize(data[idx].attributes.title);
          const normalizedTitle = n.done;

          return (
            <StyledLink
              key={idx}
              link={linkIsActive}
              menu={menuIsActive}
              to={`/story/chapter/${normalizedTitle}`}
            >
              <ExtraTextForMenu
                menu={menuIsActive}
                padding={chapterNeedsTopPadding}
              >
                Chapter {chapterNumberForMenu}
              </ExtraTextForMenu>
              <NavigationText menu={menuIsActive} num={idx}>
                {pageOrMenuText}
              </NavigationText>
            </StyledLink>
          );
        }}
      />
    </StoryNavigation>
  );
}
