import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Mapper from './Mapper.jsx';
import headerData from './data/headerData.js';

import Location from './custom/Location.js';
import Referrer from './custom/Referrer.js';

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
  margin-left: 15px;
  color: ${props => (props.home === 'active' ? 'white' : 'black')};
  text-decoration: ${props => (props.active === 'active' ? 'underline' : '')};

  &:hover {
    text-decoration: underline;
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
  font-size: 1.3rem;
  font-style: italic;

  @media (min-width: 705px) {
    display: block;
  }
`;
const HeaderNav = styled.nav`
  flex: ${props => (props.menu === 'active' ? '1' : '')};
  display: ${props => (props.menu !== 'active' ? 'none' : '')};
  text-align: ${props => (props.menu === 'active' ? 'center' : '')};
  margin-right: ${props => (props.menu !== 'active' ? '15px' : '0')};

  @media (min-width: 705px) {
    display: block;
    flex: none;
    text-align: none;
    margin-right: 15px;
  }
`;
const TogglerIcon = styled.section`
  height: 17px;
  width: 17px;
  background: ${props =>
    `url(/sign-${props.home === 'active' ? 'white' : 'black'}-${
      props.menu === 'active' ? 'open' : 'closed'
    }.png) no-repeat center`};
  transition: ${props => (props.home !== 'active' ? 'background 0.3s' : '')};
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

    this.toggleHeaderMenu = this.toggleHeaderMenu.bind(this);
  }

  toggleHeaderMenu() {
    const { menuIsOpen } = this.state;
    const toggleState = function() {
      this.setState({
        menuIsOpen: !menuIsOpen
      });
    };

    if (!menuIsOpen) {
      toggleState.call(this);
      this.timeoutId = setTimeout(() => {
        this.setState({ menuIsOpen: false });
      }, 4000);
    } else {
      clearTimeout(this.timeoutId);
      this.timeoutId = undefined;

      toggleState.call(this);
    }
  }

  componentDidUpdate(prevProps) {
    const l = new Location('/', this.props, prevProps);
    const timeoutIsRunning = this.timeoutId !== undefined;

    if (l.justChanged && timeoutIsRunning) {
      this.toggleHeaderMenu();
    }
  }

  render() {
    const { home } = this.props;
    const r = new Referrer(this.props);
    const menuIsOpen = this.state.menuIsOpen ? 'active' : '';

    return (
      <HeaderContainer home={home}>
        <MyName to={'/'} home={home} menu={menuIsOpen}>
          James Abels
        </MyName>
        <Motto menu={menuIsOpen}>Magical stories and other adventures</Motto>
        <HeaderNav menu={menuIsOpen}>
          <Mapper
            mapData={headerData}
            render={(link, idx) => {
              const pathIsActive = link.path.includes(r.location)
                ? 'active'
                : '';
              return (
                <StyledLink
                  key={idx}
                  home={home}
                  to={link.path}
                  active={pathIsActive}
                >
                  {link.name}
                </StyledLink>
              );
            }}
          />
        </HeaderNav>
        <TogglerIcon
          home={home}
          menu={menuIsOpen}
          onClick={() => {
            this.toggleHeaderMenu();
          }}
        />
      </HeaderContainer>
    );
  }
}

export default Header;
