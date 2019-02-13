import React from 'react';
import styled, { css } from 'styled-components';

import StyledLink from './StyledLink.jsx';
import UnorderedList from './UnorderedList.jsx';
import Mapper from './Mapper.jsx';
import Normalize from './custom/Normalize';
import Graf from './Graf.jsx';

const StyledUL = styled(UnorderedList)`
  height: 100%;
  overflow: auto;
  width: ${p => (p.menu !== 'active' ? '327px' : '')};
`;
const GrafAsSource = styled(Graf)`
  color: ${p =>
    p.menu === 'active' && p.link !== 'active' ? 'black' : '#6e7dab'};

  &:first-child {
    margin-top: 0px;
  }
`;
const GrafAsHed = styled(Graf)`
  color: ${p =>
    p.menu === 'active' && p.link !== 'active' ? 'black' : '#6e7dab'};
  font-size: ${p => (p.menu === 'active' ? '3rem' : '1.7rem')};

  ${p =>
    p.menu !== 'active' &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      width: 315px;
      white-space: nowrap;
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
                <GrafAsSource
                  italic
                  size="1.3"
                  bottom="0"
                  menu={menuIsActive}
                  link={linkIsActive}
                >
                  {publication}
                </GrafAsSource>
                <GrafAsHed
                  top="0"
                  bottom="10"
                  menu={menuIsActive}
                  link={linkIsActive}
                >
                  {headline}
                </GrafAsHed>
              </StyledLink>
            </li>
          );
        }}
      />
    </StyledUL>
  );
}
