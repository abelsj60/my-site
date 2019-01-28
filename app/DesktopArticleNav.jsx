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

// <Hed>My clips</Hed>
// <StyledDescription>{text}</StyledDescription>

// const Hed = styled.h1`
//   color: #483d8b;
//   font-size: 2rem;
//   font-weight: normal;
//   margin-top: 0px;
//   margin-bottom: 7px;
// `;
// const StyledDescription = styled.h2`
//   color: #483d8b;
//   font-size: 1.5rem;
//   font-style: italic;
//   font-weight: normal;
//   padding-bottom: 7px;
//   margin-top: 0px;
//   margin-bottom: 15px;
//   border-bottom: 0.5px solid #d2cbc9;
// `;
