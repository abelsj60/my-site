import React from 'react';
import styled, { css } from 'styled-components';

import StyledLink from '../primitives/StyledLink.jsx';
import UnorderedList from '../primitives/UnorderedList.jsx';
import Mapper from '../shared/Mapper.jsx';
import Graf from '../primitives/Graf.jsx';
import Normalize from '../classes/Normalize';

const StyledUL = styled(UnorderedList)`
  height: 100%;
  overflow: auto;
  width: ${p => (p.menu !== 'active' ? '327px' : '')};
`;
const GrafAsDate = styled(Graf)`
  color: ${p =>
    p.menu === 'active' && p.link !== 'active' ? 'black' : '#6e7dab'};

  &:first-child {
    margin-top: 0px;
  }
`;
const GrafAsHed = styled(Graf)`
  color: ${p =>
    p.menu === 'active' && p.link !== 'active' ? 'black' : '#6e7dab'};
  font-size: ${p => (p.menu === 'active' ? '3rem' : '1.7rem')};

  ${p =>
    p.menu !== 'active' &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      width: 315px;
      white-space: nowrap;
    `};
`;

export default function ReverieNav(props) {
  const { data } = props;
  const { isMenu } = props.state;
  const { indexForReverieData } = props.localState;

  const menuIsActive = isMenu ? 'active' : '';

  return (
    <StyledUL>
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
                <GrafAsDate
                  italic
                  size="1.3"
                  bottom="0"
                  menu={menuIsActive}
                  link={linkIsActive}
                >
                  {date}
                </GrafAsDate>
                <GrafAsHed
                  top="0"
                  bottom="10"
                  menu={menuIsActive}
                  link={linkIsActive}
                >
                  {headline}
                </GrafAsHed>
              </StyledLink>
            </li>
          );
        }}
      />
    </StyledUL>
  );
}
