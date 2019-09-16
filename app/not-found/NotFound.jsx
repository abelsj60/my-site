import Main from '../primitives/Main.jsx';
import React from 'react';
import ContentHolder from '../primitives/ContentHolder.jsx';
import styled from 'styled-components';

const RestyledContentHolder = styled(ContentHolder)`
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin-right: 25px;
`;
const Hed = styled.h1`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.twenty};
  text-shadow: 3px 2px 2.5px rgba(0, 0, 0, .4);

  @media (min-width: 555px) {
    margin-right: 20px;
  }
`;
const Jinn = styled.img`
  object-fit: contain;
  max-width: 100%;
  margin-right: 25px;
  margin-bottom: auto;

  @media (min-width: 555px) {
    margin-bottom: unset;
  }
`;

export default function NotFound() {
  const src = 'https://user-images.githubusercontent.com/30417590/64972267-ff270a80-d876-11e9-8af9-552472d29216.png';
  return (
    <Main>
      <RestyledContentHolder>
        <Hed>
          Not found.
        </Hed>
        <Jinn
          alt="404"
          src={src}
        />
      </RestyledContentHolder>
    </Main>
  );
}
