import ClickHandling from '../classes/ClickHandling.js';
import headerNavClose from '../../public/header-nav-open.png';
import headerNavOpen from '../../public/header-nav-closed.png';
import Location from '../classes/Location.js';
import Mapper from '../shared/Mapper.jsx';
import React, { Component } from 'react';
import Referrer from '../classes/Referrer.js';
import styled, { css } from 'styled-components';
import StyledLink from '../primitives/StyledLink.jsx';

const headerLinks = [
  { name: 'The story', path: '/chapter' },
  { name: 'Projects', path: '/projects' },
  { name: 'Journalism', path: '/journalism' },
  { name: 'About', path: '/about' }
];

const Container = styled.header`
  background-color: ${p => (p.home ? 'transparent' : p.reverie ? '#d2e7ff' : 'white')};
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
  padding-top: 0px;
  padding-bottom: 0px;

  @media (min-width: 390px) {
    font-size: 1.5rem;
  }
`;
const Motto = styled.p`
  flex: 1;
  display: ${p => (p.hide ? 'none' : undefined)};
  font-style: italic;
  font-size: 1.2rem;
  margin-left: 10px;
  margin-right: 15px;
  padding-top: 2.1px;
  min-width: 0px;
  // https://css-tricks.com/flexbox-truncated-text/
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 390px) {
    font-size: 1.3rem;
    margin-left: 15px;
    margin-right: 0px;
    padding-top: 1px;
  }
`;
const Nav = styled.nav`
  display: ${p => (p.home ? undefined : 'none')};
  padding: ${p => p.home ? '8px 15px' : undefined};
  background-color: ${p => p.home ? 'rgba(0,0,0,0.18)' : undefined};
  border-radius: ${p => p.home ? '10px' : undefined};

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
    const reverieIsActive = currentCaller === 'reverie';
    const iconType = menuIsActive
      ? headerNavClose
      : headerNavOpen;

    const referrer = new Referrer(this.props);
    const hcForHeader = new ClickHandling(
      'header',
      this
    );

    const handleClickForHeader = hcForHeader.boundHandleClick;
    // const reverieOrRegularMotto = referrer.location !== 'reverie'
    //   ? 'Narrative coding and other adventures'
    //   : "Let's take a flight of fancy";

    return (
      <Container
        home={homeIsActive}
        reverie={reverieIsActive}
      >
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
          Narrative coding and other adventures
        </Motto>
        <Nav home={homeIsActive} menu={menuIsActive}>
          <NavList>
            <Mapper
              mapData={headerLinks}
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
          src={iconType}
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
      location.justChanged
        && this.timeoutId !== undefined
    ) {
      const hcForApp = new ClickHandling('header', this);
      const handleClickForHeader = hcForApp.boundHandleClick;

      handleClickForHeader();
    }
  }
}
