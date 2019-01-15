import React from 'react';
import styled from 'styled-components';

import ArticleNav from './ArticleNav.jsx';

const NavigationContainer = styled.nav`
  display: none;

  @media (min-width: 848px) {
    display: flex;
    flex-direction: column;
    margin: 25px;
    padding: 25px;
    min-width: 324px;
    max-width: 327px;
    background-color: #6100f2;
    overflow: auto;
    background-image: url('https://www.transparenttextures.com/patterns/debut-light.png');
  }
`;
const Hed = styled.h1`
  color: white;
  font-size: 2rem;
  margin-top: 0px;
  margin-bottom: 7px;
`;
const StyledDescription = styled.h2`
  color: white;
  font-size: 1.5rem;
  font-style: italic;
  padding-bottom: 7px;
  margin-top: 0px;
  margin-bottom: 15px;
  border-bottom: white dotted 0.5px;
`;

export default function DesktopArticleNav(props) {
  const { text, data } = props;

  return (
    <NavigationContainer>
      <Hed>My clips</Hed>
      <StyledDescription>{text}</StyledDescription>
      <ArticleNav {...props} data={data} />
    </NavigationContainer>
  );
}
