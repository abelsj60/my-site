import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import Mapper from './Mapper.jsx';
import Normalize from './custom/Normalize.js';

const StoryNavigation = styled.section`
  display: flex;
  margin-bottom: 20px;
  min-height: 40px;
  cursor: pointer;
`;
const MenuNavigation = styled.section`
  overflow: auto;
  margin: 15px 25px 25px;
  flex: 1;
`;
const StyledLink = styled(Link)`
  flex: 1;
  display: flex;
  flex-direction: ${props => (props.menu === 'active' ? 'column' : '')};
  align-items: center;
  color: whitesmoke;
  text-decoration: none;

  ${props =>
    (props.link === 'active' &&
      props.menu !== 'active' &&
      css`
        flex: 1;
        display: flex;
        align-items: center;
        color: whitesmoke;
        border-bottom: whitesmoke solid 0.5px;
      `) ||
    (props.link === 'active' &&
      props.menu === 'active' &&
      css`
        color: deepskyblue;
      `)};

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
      font-size: 3rem;
      font-style: italic;
      line-height: normal;
      margin-bottom: 25px;
    `};
`;
const NavigationText = styled.p`
  flex: 1;
  text-align: center;
`;

export default function ChapterNav(props) {
  const { data, isMenu } = props;
  const { indexForChapterData } = props.localState;
  const NavigationStyleContainer = isMenu ? MenuNavigation : StoryNavigation;

  const menuIsActive = isMenu ? 'active' : '';

  return (
    <NavigationStyleContainer>
      <Mapper
        mapData={data}
        render={(chapter, idx) => {
          const chapterNumberForMenu = idx + 1;
          const linkIsActive = indexForChapterData === idx ? 'active' : '';
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
              <ExtraTextForMenu menu={menuIsActive}>
                Chapter {chapterNumberForMenu}
              </ExtraTextForMenu>
              <NavigationText>{pageOrMenuText}</NavigationText>
            </StyledLink>
          );
        }}
      />
    </NavigationStyleContainer>
  );
}
