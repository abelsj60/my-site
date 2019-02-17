import React from 'react';
import styled, { css } from 'styled-components';

import StyledLink from '../primitives/StyledLink.jsx';
import UnorderedList from '../primitives/UnorderedList.jsx';
import Mapper from '../shared/Mapper.jsx';
import Graf from '../primitives/Graf.jsx';
import normalize from '../helpers/normalize.js';

const StyledUL = styled(UnorderedList)`
  height: 100%;
  overflow: auto;
  width: ${p => (!p.menu ? '327px' : undefined)};
`;
const GrafAsDate = styled(Graf)`
  color: ${p => (p.menu && !p.link ? 'black' : '#6e7dab')};

  &:first-child {
    margin-top: 0px;
  }
`;
const GrafAsHed = styled(Graf)`
  color: ${p => (p.menu && !p.link ? 'black' : '#6e7dab')};
  font-size: ${p => (p.menu ? '3rem' : '1.7rem')};

  ${p =>
    !p.menu &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      width: 315px;
      white-space: nowrap;
    `};
`;

export default function ReverieNav(props) {
  const { data, location, params, bodyState, appState } = props;
  const { isMenu } = appState;
  let indexForReverieData;

  if (location.pathname.split('/')[2] !== 'menu') {
    indexForReverieData = params.headlineToIndex();
  } else {
    indexForReverieData = bodyState.indexForReverieData;
  }

  return (
    <StyledUL>
      <Mapper
        mapData={data}
        render={(reverie, idx) => {
          const { headline, date } = reverie.attributes;
          const currentHed = data[indexForReverieData].attributes.headline;

          const normalizeHed = normalize(headline);
          const normalizeCurrentHed = normalize(currentHed);

          const linkIsActive = normalizeHed === normalizeCurrentHed;
          const reverieLink = `/reverie/${normalizeHed}`;

          return (
            <li key={idx}>
              <StyledLink to={reverieLink}>
                <GrafAsDate
                  italic
                  size="1.3"
                  bottom="2"
                  menu={isMenu}
                  link={linkIsActive}
                >
                  {date}
                </GrafAsDate>
                <GrafAsHed
                  top="0"
                  bottom="10"
                  menu={isMenu}
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
