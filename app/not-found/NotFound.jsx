import antacid from '../../public/antacid.png';
import Main from '../primitives/Main.jsx';
import React from 'react';
import ContentHolder from '../primitives/ContentHolder.jsx';
import styled from 'styled-components';

const RestyledContentHolder = styled(ContentHolder)`
  flex: 1;
  margin-right: 25px;
`;
const Hed = styled.h1`
  font-size: ${p => p.theme.fontSizes.sixteen};
  margin-bottom: 15px;
`;
const FailWhale = styled.section`
  flex: 1;
  background: ${p => `url(${p.image})`} no-repeat;
  background-position: center;
  background-size: contain; // Must come after background rule
`;

export default function NotFound(props) {
  console.log('Not Found: ', props);
  return (
    <Main>
      <RestyledContentHolder>
        <Hed>
          Uh oh. Not found!
        </Hed>
        <FailWhale
          image={antacid}
        />
      </RestyledContentHolder>
    </Main>
  );
}
