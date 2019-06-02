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
  { name: 'A story', path: '/chapter' },
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
  justify-content: ${p => (p.isHome ? 'center' : undefined)};
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
const RestyledLink = styled(
  // Filter out home from StyledLink
  // eslint-disable-next-line
  ({ isHome, isActive, ...rest }) => <StyledLink {...rest} />
)`
  font-size: ${p => p.theme.fontSizes.one};
  font-weight: ${p => p.isHome && '400'};
  margin-left: ${p => (p.num === 0 ? '0px' : '15px')};
  color: ${p => p.theme.colors.white};
  font-weight: ${fontWeight};

  && {
    text-decoration: ${p => (p.isActive ? 'underline' : undefined)};
  }

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    font-size: ${p => !p.isHome ? p.theme.fontSizes.six : p.theme.fontSizes.three};
  }
`;
const NameAsLink = styled(
  // Filter out hide from RestyledLink
  // eslint-disable-next-line
  ({ hide, ...rest }) => <RestyledLink {...rest} />
)`
  display: ${p => (p.hide && 'none')};
  font-size: ${p => p.theme.fontSizes.six};
`;
const Motto = styled.span`
  font-weight: ${fontWeight};
  flex: 1;
  display: ${p => (p.hide && 'none')};
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
  display: ${p => (!p.isHome && 'none')};
  margin-top: -2px; // Make name, motto, and link text flush
  padding: ${p => p.isHome && '8px 15px'};
  // Prevent occasional over-expansion
  background-color: ${p => p.isHome && 'rgba(0,0,0,0.25)'};
  max-width: ${p => p.isHome && '269px'}; 
  border-radius: ${p => p.isHome && '10px'};
  position: relative;
  
  ${p => p.menu && css` // p.menu = headerMenu
    flex: 1;
    display: block;
    
    // Offset centering by right-side icon width (is five less than total)
    @media (min-width: ${p.theme.mediaQueries.tinyView}) {
      margin-left: 37px;
    }
  `};
    
  @media (min-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    display: block;
    margin-right: ${p => (!p.isHome && '15px')};
    // Prevent occasional over-expansion
    max-width: ${p => p.isHome && '286px'};
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
  display: ${p => (p.isHome && 'none')};
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
      appState,
      boundHandleClickForApp
    } = this.props;
    const {
      currentCaller,
      showStoryText
    } = appState;
    const menuIsOpen = this.state.menuIsOpen;
    const isHome = currentCaller === 'home';
    const isReverie = currentCaller === 'reverie';
    const iconType =
      menuIsOpen
        ? headerNavClose
        : headerNavOpen;
    const hideBackground = isHome
        || (!showStoryText && !isReverie);
    const hideNameAndMotto = menuIsOpen || isHome;

    const referrer = new Referrer(this.props);
    const hcForHeader = new ClickHandling('header', this);

    const handleClickForHeader = hcForHeader.boundHandleClick;
    const eventHandlerHeaderMenu = () => handleClickForHeader();

    return (
      <Container
        isHome={isHome}
      >
        <HeaderBackground
          hide={hideBackground}
        />
        <NameAsLink
          hide={hideNameAndMotto}
          callerWillBe={'home'}
          boundHandleClickForApp={boundHandleClickForApp}
          to={'/'}
        >
          James Abels
        </NameAsLink>
        <Motto
          hide={hideNameAndMotto}
        >
          Amazing stories through code
        </Motto>
        <Nav
          isHome={isHome}
          menu={menuIsOpen}
        >
          <NavList>
            <Mapper
              mapData={headerLinks}
              render={
                (link, idx) => {
                  const isActive =
                    link.path.includes(
                      referrer.location
                    );

                  return (
                    <li
                      key={idx}
                    >
                      <RestyledLink
                        isActive={isActive}
                        isHome={isHome}
                        num={idx}
                        to={link.path}
                        callerWillBe={link.path.slice(1)}
                        boundHandleClickForApp={boundHandleClickForApp}
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
          isHome={isHome}
          menu={menuIsOpen}
          src={iconType}
          onClick={eventHandlerHeaderMenu}
        />
      </Container>
    );
  }

  componentDidUpdate(prevProps) {
    const { currentCaller, lastCaller } = this.props.appState;
    const location = new Location(
      '/',
      this.props,
      prevProps
    );

    // Don't automatically close menu if
    // entering or exiting /reverie.

    const isWasReverie =
      currentCaller === 'reverie'
        || lastCaller === 'reverie';
    const sameSection =
      currentCaller === prevProps.appState.currentCaller;

    if (
      location.justChanged
        && (!isWasReverie && !sameSection)
        && this.timeoutId !== undefined
    ) {
      const hcForApp = new ClickHandling('header', this);
      const handleClickForHeader = hcForApp.boundHandleClick;

      handleClickForHeader();
    }
  }
}
