import EventHandling from '../classes/EventHandling.js';
import Location from '../classes/Location.js';
import Mapper from '../shared/Mapper.jsx';
import React, { Component } from 'react';
import Referrer from '../classes/Referrer.js';
import styled, { css } from 'styled-components';
import StyledLink from '../primitives/StyledLink.jsx';

const data = [
  { name: 'The story', path: '/chapter' },
  { name: 'Projects', path: '/projects' },
  { name: 'Journalism', path: '/journalism' },
  { name: 'About', path: '/about' }
];

const Container = styled.header`
  background-color: ${p => (p.home ? 'transparent' : 'white')};
  color: ${p => (p.home ? 'white' : '#455057')};
  flex-shrink: 0;
  z-index: 3;
  position: relative;
  height: 52px;
  display: flex;
  justify-content: ${p => (p.home ? 'center' : undefined)};
  align-items: center;
`;
const RestyledLink = styled(StyledLink)`
  font-size: 1.25rem;
  margin-left: ${p => (p.num === 0 ? '0px' : '15px')};
  color: ${p => (p.home ? 'white' : '#455057')};
  padding-top: 5px;
  padding-bottom: 5px;

  && {
    text-decoration: ${p => (p.active === 'active' ? 'underline' : undefined)};
  }

  @media (min-width: 390px) {
    font-size: 1.5rem;
  }
`;
const NameAsLink = styled(RestyledLink)`
  display: ${p => (p.hide === 'active' ? 'none' : undefined)};
  font-size: 1.4rem;
  font-weight: bold;
  padding-bottom: 0px;

  @media (min-width: 390px) {
    font-size: 1.5rem;
  }
`;
const Motto = styled.p`
  // display: none;
  
  flex: 1;
  display: ${p => (p.hide ? 'none' : undefined)};
  margin-top: 2px;
  font-style: italic;
  font-size: 1.2rem;
  margin-left: 10px;

  @media (min-width: 390px) {
    font-size: 1.3rem;
    margin-left: 15px;
  }
`;
const Nav = styled.nav`
  display: ${p => (p.home ? undefined : 'none')};
  padding-bottom: ${p => (p.home ? '5px' : undefined)};
  border-bottom: ${p => (p.home ? '.5px solid white' : undefined)};

  ${p =>
    p.menu
    && css`
      flex: 1;
      display: block;

      @media (min-width: 390px) {
        margin-left: 32px;
      }
    `};

  @media (min-width: 705px) {
    display: block;
    margin-right: ${p => (!p.home ? '15px' : undefined)};
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
  display: ${p => (p.home ? 'none' : undefined)};
  height: 17px;
  width: 17px;
  margin-left: auto;
  margin-right: 10px;
  cursor: pointer;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;

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

  render() {
    const {
      appState
    } = this.props;
    const {
      currentCaller
    } = appState;
    const menuIsActive = this.state.menuIsOpen;
    const homeIsActive = currentCaller === 'home';
    const togglerSource = `/menu-${
      menuIsActive
        ? 'open'
        : 'closed'
    }-icon.svg`;

    const referrer = new Referrer(this.props);
    const eForHeader = new EventHandling(
      'header',
      this
    );

    const handleClickForHeader = eForHeader.boundHandleClick;

    return (
      <Container home={homeIsActive}>
        <NameAsLink
          hide={
            ((menuIsActive || homeIsActive) && 'active')
            || undefined
          }
          to={'/'}
        >
          James Abels
        </NameAsLink>
        <Motto hide={menuIsActive || homeIsActive}>
          Coding narratives and more
        </Motto>
        <Nav home={homeIsActive} menu={menuIsActive}>
          <NavList>
            <Mapper
              mapData={data}
              render={
                (link, idx) => {
                  const pathIsActive =
                    link.path.includes(referrer.location);

                  return (
                    <li key={idx}>
                      <RestyledLink
                        active={
                          (pathIsActive && 'active')
                          || undefined
                        }
                        home={
                          (homeIsActive && 'active')
                          || undefined
                        }
                        num={idx}
                        to={link.path}
                      >
                        {link.name}
                      </RestyledLink>
                    </li>
                  );
                }
              }
            />
          </NavList>
        </Nav>
        <Icon
          home={homeIsActive}
          menu={menuIsActive}
          src={togglerSource}
          onClick={
            () => handleClickForHeader()
          }
        />
      </Container>
    );
  }

  componentDidUpdate(prevProps) {
    const location = new Location(
      '/',
      this.props,
      prevProps
    );

    if (
      location.justChanged &&
      this.timeoutId !== undefined
    ) {
      const eForApp = new EventHandling('header', this);
      const handleClickForHeader = eForApp.boundHandleClick;

      handleClickForHeader();
    }
  }
}
