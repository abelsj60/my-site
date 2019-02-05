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
    // margin-right: 25px;
    padding-right: 25px;
    // min-width: 324px;
    min-width: 327px;
    border-right: 0.5px solid #6e7dab;
    // background-color: #6100f2;
    overflow: auto;
    // background-image: url('https://www.transparenttextures.com/patterns/debut-light.png');
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
