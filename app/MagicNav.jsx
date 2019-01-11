import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Mapper from './Mapper.jsx';
import magicData from './data/magicData.js';

// Create, Build, Amaze

const MagicNavContainer = styled.section`
  height: 100%;
  display: flex;

  @media (min-width: 848px) {
    // display: flex;
  }
`;
const StyledLink = styled(Link)`
  flex: 1;
  display: ${props => (props.item !== 2 ? 'none' : 'flex')};
  align-items: flex-end;
  font-size: 6rem;
  color: deepskyblue;
  padding-left: 25px;
  padding-right: 25px;

  &:hover {
    color: deeppink;
  }

  @media (min-width: 848px) {
    font-size: 5rem;
    display: flex;
  }
`;
const Hed = styled.h3`
  padding-bottom: 30px;
`;

export default function MagicNav() {
  return (
    <MagicNavContainer>
      <Mapper
        mapData={magicData}
        render={(name, idx) => {
          return (
            <StyledLink key={idx} to={name.link} item={idx + 1}>
              <Hed>{name.hed}</Hed>
            </StyledLink>
          );
        }}
      />
    </MagicNavContainer>
  );
}
