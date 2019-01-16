import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Mapper from './Mapper.jsx';
import Normalize from './custom/Normalize';

const ArticleList = styled.ul`
  margin: 0;
  list-style-type: none;
  padding: 0;
  overflow: auto;
`;
const StyledLink = styled(Link)`
  color: ${props => (props.link === 'active' ? 'blue' : 'black')};

  &:focus,
  &:visited,
  &:link {
    text-decoration: none;
  }

  &:hover {
    color: deepskyblue;
  }
`;
const Source = styled.div`
  font-size: 1.5rem;
  font-style: italic;
  margin-bottom: 4px;
`;
const Hed = styled.div`
  font-size: ${props => (props.menu === 'active' ? '3rem' : '1.75rem')};
  margin-bottom: 10px;
`;

export default function ArticleNav(props) {
  const { data, isMenu } = props;
  const { indexForArticleData } = props.localState;

  const menuIsActive = isMenu ? 'active' : '';

  return (
    <ArticleList>
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
                <Source>{publication}</Source>
                <Hed menu={menuIsActive}>{headline}</Hed>
              </StyledLink>
            </li>
          );
        }}
      />
    </ArticleList>
  );
}
