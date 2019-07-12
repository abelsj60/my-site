import bio from '../data/home/home.md';
import ClickHandling from '../classes/ClickHandling.js';
import headerNavClose from '../../public/header-nav-open.png';
import headerNavOpen from '../../public/header-nav-closed.png';
import Mapper from '../shared/Mapper.jsx';
import React, { Component } from 'react';
import Referrer from '../classes/Referrer.js';
import styled, { css } from 'styled-components';
import StyledLink from '../primitives/StyledLink.jsx';
import UnorderedList from '../primitives/UnorderedList.jsx';

const headerLinks = [
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Journalism', path: '/journalism' },
  { name: 'A not-so-true story', path: '/chapter' }
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

  // Control nav items when menu is, up to the break point
  // Must come after all others so it controls in its limited circs
  @media (max-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    height: ${p => !p.isHome && p.menu && '100%'};
    background-color: ${p => !p.isHome && p.menu && p.theme.colors.darkPink};
  }
`;
const RestyledLink = styled(
  // Filter out isHome and isActive from StyledLink
  // eslint-disable-next-line
  ({ isHome, isActive, menu, ...rest }) => <StyledLink {...rest} />
)`
  font-size: ${p => p.theme.fontSizes.twentyOne};
  font-weight: ${p => p.isHome ? '400' : fontWeight};
  margin-left: ${p => (p.num === 0 ? '0px' : '10px')};
  color: ${p => p.theme.colors.white};

  && {
    text-decoration: ${p => (p.isActive ? 'underline' : undefined)};
  }

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    margin-left: ${p => (p.num === 0 ? '0px' : '15px')};
    font-size: ${p => p.isHome ? p.theme.fontSizes.three : p.theme.fontSizes.three};
  }

  // Control nav items when menu is, up to the break point
  // Must come after all others so it controls in its limited circs
  @media (min-width: 0px) and (max-width: ${p => p.theme.mediaQueries.tinyView}) {
    font-size: ${p => p.menu && p.theme.fontSizes.eighteen};
    margin-left: ${p => p.menu && '0px'};
  }

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) and (max-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    font-size: ${p => p.menu && p.theme.fontSizes.twenty};
    margin-left: ${p => p.menu && '0px'};
  }
`;
const NameAsLink = styled(
  // Filter out hide from RestyledLink
  // eslint-disable-next-line
  ({ hide, ...rest }) => <RestyledLink {...rest} />
)`
  display: ${p => (p.isHome && 'none')};
  font-size: ${p => p.theme.fontSizes.six};
  // We end up doubling up on this property b/c we need to set it to 15px for small 
  // screens and can't unset the value as the screen gets bigger. As a result, we 
  // inherit the value of 15px from RestyledLink, then eliminate it for this:
  margin-left: 15px;

  @media (max-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    z-index: ${p => p.menu && '1'};
  }
`;
const Motto = styled.span`
  font-weight: ${fontWeight};
  flex: 1;
  display: ${p => (p.isHome && 'none')};
  font-style: italic;
  font-size: ${p => p.theme.fontSizes.two};
  margin: 1px 10px 0px 13px;
  min-width: 0px;  
  // https://css-tricks.com/flexbox-truncated-text/
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: ${p => p.theme.mediaQueries.tinyViewTwo}) {
    font-size: ${p => p.theme.fontSizes.four};
    margin-right: 0px;
  }

  @media (max-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    z-index: ${p => p.menu && '1'};
  }
`;
const Nav = styled.nav`
  display: ${p => (!p.isHome && 'none')};
  margin-top: -2px; // Make name, motto, and link text flush
  padding: ${p => p.isHome && '8px 15px'};
  // Prevent occasional over-expansion
  background-color: ${p => p.isHome && 'rgba(0,0,0,0.25)'};
  max-width: ${p => p.isHome && '350px'}; 
  border-radius: ${p => p.isHome && '10px'};
  position: relative;

  @media (min-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    display: block;
    margin-right: ${p => (!p.isHome && '15px')};
    // Prevent occasional over-expansion
    max-width: ${p => p.isHome && '350px'};
  }

  @media (max-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    ${p => p.menu && css` // p.menu = headerMenu
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    display: flex;
    justify-content: center;

    // Offset centering by right-side icon width (is five less than total)
  `};
  }
`;
const NavList = styled(UnorderedList)`
  display: flex;
  justify-content: center;
  margin: ${p => !p.isHome && 'auto'} 0px ${p => !p.isHome && 'auto'} 0px;
  padding: 0px;
  list-style: none;

  // Control nav items when menu is, up to the break point
  // Must come after all others so it controls in its limited circs
  @media (max-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    ${p => p.menu && 'flex-direction: column;'}
  }

  // Control nav items when menu is, up to the break point
  // Must come after all others so it controls in its limited circs
  @media (min-width: 0px) and (max-width: ${p => p.theme.mediaQueries.tinyView}) {
    height: ${p => !p.isHome && '300px'};
  }

  // Control nav items when menu is, up to the break point
  // Must come after all others so it controls in its limited circs
  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) and (max-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    height: ${p => !p.isHome && '450px'};
  }
`;
const ListItem = styled.li`
  // Control nav items when menu is, up to the break point
  // Must come after all others so it controls in its limited circs
  @media (max-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    margin-top: ${p => !p.ishHome && p.menu ? 'auto' : '0px'};
    margin-bottom: ${p => !p.isHome && p.menu ? 'auto' : '0px'};
  }
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
  z-index: 1;

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

    this.closeHeaderMenu = this.closeHeaderMenu.bind(this);
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
          menu={menuIsOpen}
          hide={hideBackground}
        />
        <NameAsLink
          isHome={isHome}
          hide={hideNameAndMotto}
          menu={menuIsOpen}
          callerWillBe={'home'}
          boundHandleClickForApp={boundHandleClickForApp}
          closeHeaderMenu={menuIsOpen && this.closeHeaderMenu}
          to={'/'}
        >
          James Abels
        </NameAsLink>
        <Motto
          isHome={isHome}
          hide={hideNameAndMotto}
          menu={menuIsOpen}
        >
          {bio.attributes.motto}
        </Motto>
        <Nav
          isHome={isHome}
          menu={menuIsOpen}
        >
          <NavList
            isHome={isHome}
            menu={menuIsOpen}
          >
            <Mapper
              mapData={headerLinks}
              render={
                (link, idx) => {
                  const isActive =
                    link.path.includes(
                      referrer.location
                    );
                  const lastItem = idx === headerLinks.length - 1;

                  return (
                    <ListItem
                      key={idx}
                      isHome={isHome}
                      lastItem={lastItem}
                      menu={menuIsOpen}
                    >
                      <RestyledLink
                        isActive={isActive}
                        isHome={isHome}
                        menu={menuIsOpen}
                        num={idx}
                        to={link.path}
                        callerWillBe={link.path.slice(1)}
                        boundHandleClickForApp={boundHandleClickForApp}
                        closeHeaderMenu={menuIsOpen && this.closeHeaderMenu}
                      >
                        {link.name}
                      </RestyledLink>
                    </ListItem>
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

  closeHeaderMenu() {
    this.setState({ menuIsOpen: false });
  }
}
