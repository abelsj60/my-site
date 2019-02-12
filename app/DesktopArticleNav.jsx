import React from 'react';
import styled from 'styled-components';

import ArticleNav from './ArticleNav.jsx';

const NavigationContainer = styled.nav`
  display: none;

  @media (min-width: 848px) {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    margin-bottom: 25px;
    margin-left: 25px;
    padding-right: 25px;
    border-right: 0.5px solid #6e7dab;
  }
`;

export default function DesktopArticleNav(props) {
  const { data } = props;

  return (
    <NavigationContainer>
      <ArticleNav {...props} data={data} />
    </NavigationContainer>
  );
}
