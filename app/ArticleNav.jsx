import React from 'react';
import styled, { css } from 'styled-components';

import StyledLink from './StyledLink.jsx';
import UnorderedList from './UnorderedList.jsx';
import Mapper from './Mapper.jsx';
import Normalize from './custom/Normalize';

const StyledUL = styled(UnorderedList)`
  height: 100%;
  overflow: auto;
  width: ${p => (p.menu !== 'active' ? '327px' : '')};
`;
const Source = styled.p`
  font-size: 1.3rem;
  font-style: italic;
  margin-bottom: 0px;
  color: ${props => (props.menu === 'active' ? 'black' : '#6e7dab')};
  color: ${props =>
    props.menu === 'active' && props.link === 'active'
      ? '#6e7dab'
      : props.menu !== 'active' && props.link === 'active'
        ? '#455057'
        : ''};

  &:first-child {
    margin-top: 0px;
  }
`;
const Hed = styled.h1`
  font-size: ${props => (props.menu === 'active' ? '3rem' : '1.6rem')};
  margin-top: 0px;
  margin-bottom: 10px;
  color: ${props => (props.menu === 'active' ? 'black' : '#6e7dab')};
  color: ${props =>
    props.menu === 'active' && props.link === 'active' ? '#6e7dab' : ''};

  ${props =>
    props.menu !== 'active' &&
    css`
      width: 315px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `};
`;

export default function ArticleNav(props) {
  const { data, isMenu } = props;
  const { indexForArticleData } = props.localState;

  const menuIsActive = isMenu ? 'active' : '';

  return (
    <StyledUL menu={menuIsActive}>
      <Mapper
        mapData={data}
        render={(article, idx) => {
          const { publication, headline } = article.attributes;
          const currentHed = data[indexForArticleData].attributes.headline;

          const normalizePub = new Normalize(publication);
          const normalizeHed = new Normalize(headline);
          const normalizeCurrentHed = new Normalize(currentHed);

          const linkIsActive =
            normalizeHed.done === normalizeCurrentHed.done ? 'active' : '';
          const articleLink = `/journalism/${normalizePub.done}/${
            normalizeHed.done
          }`;

          return (
            <li key={idx}>
              <StyledLink link={linkIsActive} to={articleLink}>
                <Source menu={menuIsActive} link={linkIsActive}>
                  {publication}
                </Source>
                <Hed menu={menuIsActive} link={linkIsActive}>
                  {headline}
                </Hed>
              </StyledLink>
            </li>
          );
        }}
      />
    </StyledUL>
  );
}
