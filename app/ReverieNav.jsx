import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Mapper from './Mapper.jsx';
import Normalize from './custom/Normalize';

const ReverieList = styled.ul`
  margin: 0;
  list-style-type: none;
  padding: 0;
  overflow: auto;
`;
const StyledLink = styled(Link)`
  &:focus,
  &:visited,
  &:link {
    text-decoration: none;
  }
`;
const ReverieDate = styled.p`
  font-size: 1.3rem;
  font-style: italic;
  margin-bottom: 0px;
  color: ${props => (props.menu === 'active' ? 'black' : '#6E7DAB')};
  color: ${props =>
    props.menu === 'active' && props.link === 'active' ? '#6e7dab' : ''};

  &:first-child {
    margin-top: 0px;
  }
`;
const Hed = styled.h1`
  font-size: ${props => (props.menu === 'active' ? '3rem' : '1.6rem')};
  margin-top: 0px;
  margin-bottom: 10px;
  color: ${props => (props.menu === 'active' ? 'black' : '#6E7DAB')};
  color: ${props =>
    props.menu === 'active' && props.link === 'active' ? '#6e7dab' : ''};
`;

export default function ReverieNav(props) {
  const { data, isMenu } = props;
  const { indexForReverieData } = props.localState;

  const menuIsActive = isMenu ? 'active' : '';

  return (
    <ReverieList>
      <Mapper
        mapData={data}
        render={(reverie, idx) => {
          const { headline, date } = reverie.attributes;
          const currentHed = data[indexForReverieData].attributes.headline;

          const normalizeHed = new Normalize(headline);
          const normalizeCurrentHed = new Normalize(currentHed);

          const linkIsActive =
            normalizeHed.done === normalizeCurrentHed.done ? 'active' : '';
          const reverieLink = `/reverie/${normalizeHed.done}`;

          return (
            <li key={idx}>
              <StyledLink link={linkIsActive} to={reverieLink}>
                <ReverieDate menu={menuIsActive} link={linkIsActive}>
                  {date}
                </ReverieDate>
                <Hed menu={menuIsActive} link={linkIsActive}>
                  {headline}
                </Hed>
              </StyledLink>
            </li>
          );
        }}
      />
    </ReverieList>
  );
}
