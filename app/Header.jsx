import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import Mapper from './Mapper.jsx';
import headerData from './data/headerData.js';

import Location from './custom/Location.js';
import Referrer from './custom/Referrer.js';
import EventHandling from './custom/EventHandling.js';

const HeaderContainer = styled.header.attrs(props => ({
  style: {
    backgroundColor: props.home === 'active' ? 'transparent' : 'white',
    color: props.home === 'active' ? 'white' : '#455057'
  }
}))`
  flex-shrink: 0;
  z-index: 2;
  position: relative;
  height: 52px;
  display: flex;
  align-items: center;

  &:hover {
    color: #fd1172;
  }
`;
const StyledLink = styled(Link)`
  margin-left: ${props => (props.num === 0 ? '0px' : '15px')};
  color: ${props => (props.home === 'active' ? 'white' : '#455057')};

  &:focus,
  &:visited,
  &:link {
    text-decoration: none;
  }

  &:hover {
    // text-decoration: underline;
  }

  && {
    text-decoration: ${props => (props.active === 'active' ? 'underline' : '')};
  }
`;
const MyName = styled(StyledLink)`
  display: ${props => (props.menu === 'active' ? 'none' : '')};
  font-size: 1.5rem;
  font-weight: bold;

  @media (min-width: 705px) {
    display: block;
  }
`;
const Motto = styled.p`
  flex: 1;
  display: ${props => (props.menu === 'active' ? 'none' : '')};
  font-size: 1.05rem;
  margin-top: 2px;
  margin-left: 15px;
  margin-bottom: 0px;
  font-style: italic;

  @media (min-width: 373px) {
    font-size: 1.3rem;
  }

  @media (min-width: 705px) {
    display: block;
  }
`;
const HeaderNav = styled.nav`
  display: none;

  ${props =>
    props.menu === 'active' &&
    css`
      flex: 1;
      display: block;
    `};

  @media (min-width: 705px) {
    display: block;
    margin-right: 15px;
  }
`;
const HeaderNavList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0px;
  padding: 0px;
  list-style: none;
`;
const HeaderNavItem = styled.li``;
const TogglerIcon = styled.img`
  height: 17px;
  width: 17px;
  margin-left: auto;
  margin-right: 15px;
  cursor: pointer;

  @media (min-width: 705px) {
    display: none;
  }
`;

class Header extends Component {
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
      const handleClickFoHeader = eForApp.boundHandleClick;

      handleClickFoHeader();
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
    const handleClickFoHeader = eForHeader.boundHandleClick;

    return (
      <HeaderContainer home={homeIsActive}>
        <MyName to={'/'} home={homeIsActive} menu={menuIsActive}>
          James Abels
        </MyName>
        <Motto menu={menuIsActive}>Magical stories and other adventures</Motto>
        <HeaderNav menu={menuIsActive}>
          <HeaderNavList>
            <Mapper
              mapData={headerData}
              render={(link, idx) => {
                const pathIsActive = link.path.includes(r.location)
                  ? 'active'
                  : '';
                return (
                  <HeaderNavItem key={idx}>
                    <StyledLink
                      num={idx}
                      home={homeIsActive}
                      to={link.path}
                      active={pathIsActive}
                    >
                      {link.name}
                    </StyledLink>
                  </HeaderNavItem>
                );
              }}
            />
          </HeaderNavList>
        </HeaderNav>
        <TogglerIcon
          home={homeIsActive}
          menu={menuIsActive}
          src={togglerSource}
          onClick={() => {
            handleClickFoHeader();
          }}
        />
      </HeaderContainer>
    );
  }
}

export default Header;
