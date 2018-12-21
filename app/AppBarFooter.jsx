import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import Mapper from './Mapper.jsx';
import ButtonGroup from './custom/ButtonGroup.js';

const AppBarContainer = styled.section`
  z-index: 2;
  flex: 1;
  display: flex;
  height: 80px;

  @media (min-width: 848px) {
    display: none;
  }
`;
const Button = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props =>
    props.active === 'active' &&
    css`
      border-top: rgb(219, 0, 0) solid 8px;
      background-color: rgb(255, 0, 0, 0.125);
    `};

  &:hover {
    background-color: rgb(255, 0, 0, 0.125);
  }
`;
const StyledLink = styled(Link)`
  color: ${props =>
    props.active === 'active' ? 'palegoldenrod' : 'blanchedalmond'};
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
const Graf = styled.p`
  cursor: pointer;
`;
const Seperator = styled.div`
  display: ${props => (props.active ? 'block' : 'none')};
  width: 7px;
  height: 80px;
  background-color: rgb(139, 0, 0, 0.5);
  box-shadow: inset 7.5px 0 5px -7px rgba(0, 0, 0, 0.6),
    inset -7.5px 0 5px -7px rgba(0, 0, 0, 0.6);
`;

export default function FooterAppBar(props) {
  const bG = new ButtonGroup(props);
  const { buttons } = bG;

  return (
    <AppBarContainer>
      <Mapper
        mapData={buttons}
        render={(button, idx) => {
          const {
            active,
            name,
            hash,
            link,
            state,
            handleClick,
            needsSeperation
          } = button;

          return (
            <Fragment key={idx}>
              <Button active={active} onClick={handleClick}>
                <StyledLink
                  active={active}
                  to={{
                    hash: hash,
                    state: state,
                    pathname: link
                  }}
                >
                  <Graf>{bG.formatButtonName(name)}</Graf>
                </StyledLink>
              </Button>
              <Seperator active={needsSeperation} />
            </Fragment>
          );
        }}
      />
    </AppBarContainer>
  );
}
