import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import StyledLink from '../primitives/StyledLink.jsx';
import Mapper from '../shared/Mapper.jsx';
import headerData from '../data/headerData.js';

import Location from '../classes/Location.js';
import Referrer from '../classes/Referrer.js';
import EventHandling from '../classes/EventHandling.js';

const Container = styled.header`
  background-color: ${props =>
    props.home === 'active' ? 'transparent' : 'white'};
  color: ${props => (props.home === 'active' ? 'white' : '#455057')};
  flex-shrink: 0;
  z-index: 2;
  position: relative;
  height: 52px;
  display: flex;
  justify-content: ${p => (p.home === 'active' ? 'center' : '')};
  align-items: center;
`;
const RestyledLink = styled(StyledLink)`
  margin-left: ${props => (props.num === 0 ? '0px' : '15px')};
  color: ${props => (props.home === 'active' ? 'white' : '#455057')};

  && {
    text-decoration: ${props => (props.active === 'active' ? 'underline' : '')};
  }
`;
const Name = styled(RestyledLink)`
  display: ${props =>
    props.home === 'active' || props.menu === 'active' ? 'none' : ''};
  font-size: 1.4rem;
  font-weight: bold;

  @media (min-width: 390px) {
    font-size: 1.5rem;
  }

  @media (min-width: 705px) {
    display: ${p => (p.home === 'active' ? 'none' : 'block')};
  }
`;
const Motto = styled.p`
  flex: 1;
  display: ${props =>
    props.home === 'active' || props.menu === 'active' ? 'none' : ''};
  font-size: 1.05rem;
  margin-top: 2px;
  margin-left: 5px;
  margin-bottom: 0px;
  font-style: italic;
  padding-top: 1px;

  @media (min-width: 390px) {
    padding: 0px;
    margin-top: 1.9px;
    font-size: 1.3rem;
    margin-left: 15px;
  }

  @media (min-width: 705px) {
    display: ${p => (p.home === 'active' ? 'none' : 'block')};
  }
`;
const Nav = styled.nav`
  display: ${p => (p.home !== 'active' ? 'none' : '')};
  padding-bottom: ${p => (p.home === 'active' ? '5px' : '')};
  border-bottom: ${p => (p.home === 'active' ? '.5px solid white' : '')};

  ${props =>
    props.menu === 'active' &&
    css`
      flex: 1;
      display: block;
      margin-left: 32px;
    `};

  @media (min-width: 705px) {
    display: block;
    margin-right: ${props => (props.home !== 'active' ? '15px' : '')};
  }
`;
const NavList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0px;
  padding: 0px;
  list-style: none;
`;
const Icon = styled.img`
  display: ${p => (p.home === 'active' ? 'none' : '')};
  height: 17px;
  width: 17px;
  margin-left: auto;
  margin-right: 15px;
  cursor: pointer;

  @media (min-width: 705px) {
    display: none;
  }
`;

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.timeoutId = undefined;

    this.state = {
      menuIsOpen: false
    };
  }

  componentDidUpdate(prevProps) {
    const l = new Location('/', this.props, prevProps);

    if (l.justChanged && this.timeoutId !== undefined) {
      const eForApp = new EventHandling('header', this);
      const handleClickForHeader = eForApp.boundHandleClick;

      handleClickForHeader();
    }
  }

  render() {
    const { currentCaller } = this.props.state;
    const menuIsActive = this.state.menuIsOpen ? 'active' : '';
    const homeIsActive = currentCaller === 'home' ? 'active' : '';
    const togglerSource = `/sign-${homeIsActive ? 'white' : 'black'}-${
      menuIsActive ? 'open' : 'closed'
    }.png`;

    const r = new Referrer(this.props);

    const eForHeader = new EventHandling('header', this);
    const handleClickForHeader = eForHeader.boundHandleClick;

    return (
      <Container home={homeIsActive}>
        <Name to={'/'} home={homeIsActive} menu={menuIsActive}>
          James Abels
        </Name>
        <Motto home={homeIsActive} menu={menuIsActive}>
          Coding narratives and magical adventures
        </Motto>
        <Nav home={homeIsActive} menu={menuIsActive}>
          <NavList>
            <Mapper
              mapData={headerData}
              render={(link, idx) => {
                const pathIsActive = link.path.includes(r.location)
                  ? 'active'
                  : '';
                return (
                  <li key={idx}>
                    <RestyledLink
                      num={idx}
                      home={homeIsActive}
                      to={link.path}
                      active={pathIsActive}
                    >
                      {link.name}
                    </RestyledLink>
                  </li>
                );
              }}
            />
          </NavList>
        </Nav>
        <Icon
          home={homeIsActive}
          menu={menuIsActive}
          src={togglerSource}
          onClick={() => {
            handleClickForHeader();
          }}
        />
      </Container>
    );
  }
}
