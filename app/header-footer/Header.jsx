import ClickHandling from '../classes/ClickHandling.js';
import headerNavClose from '../../public/header-nav-open.png';
import headerNavOpen from '../../public/header-nav-closed.png';
import Location from '../classes/Location.js';
import Mapper from '../shared/Mapper.jsx';
import React, { Component } from 'react';
import Referrer from '../classes/Referrer.js';
import styled, { css } from 'styled-components';
import StyledLink from '../primitives/StyledLink.jsx';
import UnorderedList from '../primitives/UnorderedList.jsx';

const headerLinks = [
  { name: 'The story', path: '/chapter' },
  { name: 'Projects', path: '/projects' },
  { name: 'Journalism', path: '/journalism' },
  { name: 'About', path: '/about' }
];
const fontWeight = '500';
const Container = styled.header`
  color: ${p => p.theme.colors.white};
  flex-shrink: 0;
  z-index: 2;
  height: 52px;
  display: flex;
  justify-content: ${p => (p.home === 'active' ? 'center' : undefined)};
  align-items: center;
  width: 100%;
  max-width: 75rem;
`;
const HeaderBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 52px;
  top: 0px;
  left: 0px;
  background-color: ${p => !p.hide ? p.theme.colors.darkPink : ''};
  z-index: -1;
`;
const RestyledLink = styled(StyledLink)`
  font-size: ${p => p.theme.fontSizes.one};
  font-weight: ${p => p.home === 'active' ? '400' : ''};
  margin-left: ${p => (p.num === 0 ? '0px' : '15px')};
  color: ${p => p.theme.colors.white};
  font-weight: ${fontWeight};

  && {
    text-decoration: ${p => (p.active === 'active' ? 'underline' : undefined)};
  }

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    font-size: ${p => p.home !== 'active' ? p.theme.fontSizes.six : p.theme.fontSizes.three};
  }
`;
const NameAsLink = styled(RestyledLink)`
  display: ${p => (p.hide === 'active' ? 'none' : undefined)};
  font-size: ${p => p.theme.fontSizes.six};
`;
const Motto = styled.span`
  font-weight: ${fontWeight};
  flex: 1;
  display: ${p => (p.hide === 'active' ? 'none' : undefined)};
  font-style: italic;
  font-size: ${p => p.theme.fontSizes.two};
  margin: 1px 20px 0px 13px;
  min-width: 0px;  
  // https://css-tricks.com/flexbox-truncated-text/
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: ${p => p.theme.mediaQueries.tinyViewTwo}) {
    font-size: ${p => p.theme.fontSizes.four};
    margin-right: 0px;
  }
`;
const Nav = styled.nav`
  display: ${p => (p.home === 'active' ? undefined : 'none')};
  margin-top: -2px; // Make name, motto, and link text flush
  padding: ${p => p.home === 'active' ? '8px 15px' : undefined};
  background-color: ${p => p.home === 'active' ? 'rgba(0,0,0,0.25)' : undefined};
  border-radius: ${p => p.home === 'active' ? '10px' : undefined};

  ${p => p.menu && css`
    flex: 1;
    display: block;

    // Offset centering by right-side icon width (is five less than total)
    @media (min-width: ${p.theme.mediaQueries.tinyView}) {
      margin-left: 37px;
    }
  `};

  @media (min-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    display: block;
    margin-right: ${p => (p.home !== 'active' ? '15px' : undefined)};
  }
`;
const NavList = styled(UnorderedList)`
  display: flex;
  justify-content: center;
  margin: 0px;
  padding: 0px;
  list-style: none;
`;
const Icon = styled.img`
  display: ${p => (p.home ? 'none' : undefined)};
  height: 22px;
  margin-left: auto;
  margin-right: 10px;
  cursor: pointer;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;

  @media (min-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
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
      currentCaller,
      showStoryText
    } = appState;
    const menuIsOpen = this.state.menuIsOpen;
    const homeIsActive =
      currentCaller === 'home'
        ? 'active'
        : '';
    const reverieIsActive =
      currentCaller === 'reverie'
        ? 'active'
        : '';
    const iconType =
      menuIsOpen
        ? headerNavClose
        : headerNavOpen;
    const hideBackground =
      homeIsActive.length > 0
        || (!showStoryText && !reverieIsActive);
    const hideNameAndMotto =
      menuIsOpen || homeIsActive.length > 0
        ? 'active'
        : '';

    const referrer = new Referrer(this.props);
    const hcForHeader = new ClickHandling('header',
      this
    );

    const handleClickForHeader = hcForHeader.boundHandleClick;

    return (
      <Container
        home={homeIsActive}
        reverie={reverieIsActive}
      >
        <HeaderBackground
          hide={hideBackground}
        />
        <NameAsLink
          reverie={reverieIsActive}
          hide={hideNameAndMotto}
          to={'/'}
        >
          James Abels
        </NameAsLink>
        <Motto
          hide={hideNameAndMotto}
        >
          Narrative coding and other adventures
        </Motto>
        <Nav
          home={homeIsActive}
          menu={menuIsOpen}
        >
          <NavList>
            <Mapper
              mapData={headerLinks}
              render={
                (link, idx) => {
                  const pathIsActive =
                    link.path.includes(referrer.location)
                      ? 'active'
                      : '';

                  return (
                    <li
                      key={idx}
                    >
                      <RestyledLink
                        reverie={reverieIsActive}
                        active={pathIsActive}
                        home={homeIsActive}
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
          menu={menuIsOpen}
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
