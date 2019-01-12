import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Mapper from './Mapper.jsx';
import Location from './custom/Location.js';
import headerData from './data/headerData.js';
import styled from 'styled-components';
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
const MyNameLinksHome = styled(StyledLink)`
  font-size: 1.5rem;
  font-weight: bold;
`;
const Motto = styled.p`
  flex: 1;
  margin-top: 2px;
  margin-left: 15px;
  font-size: 1.3rem;
  font-style: italic;
`;
const HeaderNav = styled.nav`
  display: none;
  margin-right: 15px;

  @media (min-width: 705px) {
    display: block;
  }
`;
const TogglerIcon = styled.section`
  height: 17px;
  width: 17px;
  background: ${props =>
    `url(/sign-${
      props.home === 'active' ? 'white' : 'black'
    }-closed.png) no-repeat center`};
  transition: background 0.7s;
  margin-left: auto;
  margin-right: 15px;

  &:hover {
    background: ${props =>
    `url(/sign-${
      props.home === 'active' ? 'white' : 'black'
    }-open.png) no-repeat center`};
    transition: background 0.7s;
  }

  @media (min-width: 705px) {
    display: none;
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);

    const isHome = props.home === 'active';

    this.state = {
      menu: '',
      visibility: isHome ? 'transparent' : 'opaque'
    };

    this.timeoutId = 0;
    this.toggleHeaderMenu = this.toggleHeaderMenu.bind(this);
  }

  toggleHeaderMenu() {
    const menuIsClosed = this.state.menu === '';

    this.setState({
      menu: menuIsClosed ? ' menu-open' : ''
    });

    if (menuIsClosed) {
      this.timeoutId = setTimeout(() => this.setState({ menu: '' }), 4000);
    } else {
      clearTimeout(this.timeoutId);
      this.timeoutId = 0;
    }
  }

  restartMenuTimeout() {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => this.setState({ menu: '' }), 4000);
  }

  componentDidUpdate(prevProps) {
    const l = new Location('/', this.props, prevProps);
    const timeoutIsRunning = this.timeoutId;

    if (l.justChanged) {
      if (timeoutIsRunning) {
        this.restartMenuTimeout();
      }
    }
  }

  render() {
    const { home } = this.props;
    const r = new Referrer(this.props);

    return (
      <HeaderContainer home={home}>
        <MyNameLinksHome to={'/'} home={home}>
          James Abels
        </MyNameLinksHome>
        <Motto>Magical stories and other adventures</Motto>
        <HeaderNav>
          <Mapper
            mapData={headerData}
            render={(link, idx) => {
              const isActive = link.path.includes(r.location) ? 'active' : '';
              return (
                <StyledLink
                  key={idx}
                  home={home}
                  to={link.path}
                  active={isActive}
                >
                  {link.name}
                </StyledLink>
              );
            }}
          />
        </HeaderNav>
        <TogglerIcon
          home={home}
          onClick={() => {
            this.props.toggleHeaderMenu();
          }}
        />
      </HeaderContainer>
    );
  }
}

export default Header;
