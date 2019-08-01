import antacid from '../../public/antacid.jpg';
import Main from '../primitives/Main.jsx';
import React from 'react';
import ContentHolder from '../primitives/ContentHolder.jsx';
import styled from 'styled-components';

const RestyledContentHolder = styled(ContentHolder)`
  flex: 1;
  margin-right: 25px;
`;
const Hed = styled.h1`
  color: ${p => p.theme.colors.pink};
  font-size: ${p => p.theme.fontSizes.sixteen};
  margin-bottom: 15px;
`;
const FailWhale = styled.section`
  flex: 1;
  background: ${p => `url(${p.image})`} no-repeat;
  background-position: center;
  background-size: contain; // Must come after background rule
`;

export default function NotFound() {
  return (
    <Main>
      <RestyledContentHolder>
        <Hed>
          Fizzzz, Pop!
        </Hed>
        <FailWhale
          image={antacid}
        />
      </RestyledContentHolder>
    </Main>
  );
}
