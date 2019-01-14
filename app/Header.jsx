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
    color: props.home === 'active' ? 'white' : 'black'
  }
}))`
  z-index: 2;
  position: relative;
  height: 52px;
  display: flex;
  align-items: center;
`;
const StyledLink = styled(Link)`
  margin-left: ${props => (props.num === 0 ? '0px' : '15px')};
  color: ${props => (props.home === 'active' ? 'white' : 'black')};

  &:focus,
  &:visited,
  &:link {
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
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
  display: ${props => (props.menu === 'active' ? 'none' : '')};
  transition: display 0.3s;
  flex: 1;
  margin-top: 2px;
  margin-left: 15px;
  margin-bottom: 0px;
  font-size: 1.3rem;
  font-style: italic;

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
      display: flex;
      justify-content: center;
    `};

  @media (min-width: 705px) {
    display: flex;
    margin-right: 15px;
  }
`;
const HeaderNavList = styled.ul`
  display: flex;
  margin: 0px;
  padding: 0px;
  list-style: none;
`;
const HeaderNavItem = styled.li``;
const TogglerIcon = styled.section`
  height: 17px;
  width: 17px;
  background: ${props =>
    `url(/sign-${props.home === 'active' ? 'white' : 'black'}-${
      props.menu === 'active' ? 'open' : 'closed'
    }.png) no-repeat center`};
  margin-left: auto;
  margin-right: 15px;

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
    const { home } = this.props;
    const menuIsOpen = this.state.menuIsOpen ? 'active' : '';

    const r = new Referrer(this.props);

    const eForHeader = new EventHandling('header', this);
    const handleClickFoHeader = eForHeader.boundHandleClick;

    return (
      <HeaderContainer home={home}>
        <MyName to={'/'} home={home} menu={menuIsOpen}>
          James Abels
        </MyName>
        <Motto menu={menuIsOpen}>Magical stories and other adventures</Motto>
        <HeaderNav menu={menuIsOpen}>
          <HeaderNavList>
            <Mapper
              mapData={headerData}
              render={(link, idx) => {
                const pathIsActive = link.path.includes(r.location)
                  ? 'active'
                  : '';
                return (
                  <HeaderNavItem>
                    <StyledLink
                      key={idx}
                      num={idx}
                      home={home}
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
          home={home}
          menu={menuIsOpen}
          onClick={() => {
            handleClickFoHeader();
          }}
        />
      </HeaderContainer>
    );
  }
}

export default Header;
