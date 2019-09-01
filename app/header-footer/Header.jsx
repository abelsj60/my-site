import bio from '../data/home/home.md';
import headerNavClose from '../../public/header-nav-open.png';
import headerNavOpen from '../../public/header-nav-closed.png';
import { cover } from 'intrinsic-scale';
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
const initialShadow = '2px 2px 2.5px';
const textShadow = initialShadow + ' rgba(0, 0, 0, .4)';
const iconShadow = initialShadow + ' rgba(0,0,0,.9)';
const Container = styled.header`
  color: ${p => p.theme.colors.white};
  flex-shrink: 0;
  z-index: 2;
  height: 52px;
  display: flex;
  justify-content: ${p => p.isHome && 'center'};
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
  background-color: ${p => p.theme.colors.darkPink};
  opacity: ${p => !p.hide ? '1' : '0'};
  transition: ${p => p.animateImageBlur && 'opacity .165s'};
  z-index: -1;
  
  // Control nav items when menu is open, up to the break point
  // Must come after all others so it controls in limited circs
  // Makes top menu bar opaque and visiable if it's hidden
  @media (max-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    background-color: ${p => p.hide && !p.isHom && 'rgba(175, 18, 90, .8)'};
  }
`;
const HeaderMenuBackground = styled.div`
  // Control nav items when menu is open, up to the break point
  // Must come after all others so it controls in limited circs
  @media (max-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    display: ${p => !p.menu ? 'none' : 'block'};
    position: absolute;
    top: 52px;
    bottom: 0px;
    width: 100%;
    background-color: ${p => !p.isHome && p.menu && 'rgba(175, 18, 90, .8)'};
  }
`;
const RestyledLink = styled(
  // Filter out isHome and isActive from StyledLink
  // eslint-disable-next-line
  ({ isHome, isActive, menu, textShadow, ...rest }) => <StyledLink {...rest} />
)`
  font-size: ${p => p.theme.fontSizes.twentyOne};
  font-weight: ${p => p.isHome ? '400' : fontWeight};
  margin-left: ${p => (p.num === 0 ? '0px' : '10px')};
  color: ${p => p.theme.colors.white};
  text-shadow: ${p => p.textShadow && textShadow};

  && {
    text-decoration: ${p => (p.isActive ? 'underline' : undefined)};
  }

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    margin-left: ${p => (p.num === 0 ? '0px' : '15px')};
    font-size: ${p => p.isHome ? p.theme.fontSizes.three : p.theme.fontSizes.three};
  }

  // Control nav items when menu is open, up to the break point
  // Must come after all others so it controls in limited circs
  @media (min-width: 0px) and (max-width: ${p => p.theme.mediaQueries.tinyView}) {
    font-size: ${p => p.menu && p.theme.fontSizes.eighteen};
    margin-left: ${p => p.menu && '0px'};
  }

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) and (max-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    font-size: ${p => p.menu && p.theme.fontSizes.twenty};
    margin-left: ${p => p.menu && '0px'};
  }
`;
const NameAsLink = styled(RestyledLink)`
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
  text-shadow: ${p => p.textShadow && textShadow};

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
  padding: ${p => p.isHome && '6px 12px'};
  background-color: ${p => p.opaqueBackground && 'rgba(0, 0, 0, .125)'};
  // Prevent occasional over-expansion
  max-width: ${p => p.isHome && '350px'}; 
  // border-radius: ${p => p.isHome && '8px'};
  position: relative;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    background-color: ${p => !p.opaqueBackground && 'unset'};
  }

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
  `};
  }
`;
const NavList = styled(UnorderedList)`
  display: flex;
  justify-content: center;
  margin: ${p => !p.isHome && 'auto'} 0px ${p => !p.isHome && 'auto'} 0px;
  padding: 0px;
  list-style: none;

  // Control nav items when menu is open, up to the break point
  // Must come after all others so it controls in limited circs
  @media (max-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    ${p => p.menu && 'flex-direction: column;'}
  }

  // Control nav items when menu is open, up to the break point
  // Must come after all others so it controls in limited circs
  @media (min-width: 0px) and (max-width: ${p => p.theme.mediaQueries.tinyView}) {
    height: ${p => !p.isHome && '300px'};
  }

  // Control nav items when menu is open, up to the break point
  // Must come after all others so it controls in limited circs
  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) and (max-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    height: ${p => !p.isHome && '450px'};
  }
`;
const ListItem = styled.li`
  // Control nav items when menu is open, up to the break point
  // Must come after all others so it controls in limited circs
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
  filter: ${p => p.textShadow && `drop-shadow(${iconShadow})`};
  z-index: 1;

  @media (min-width: ${p => p.theme.mediaQueries.narrowBreakTwoB}) {
    display: none;
  }
`;

export default class Header extends Component {
  render() {
    const {
      appState,
      boundHandleClickForApp
    } = this.props;
    const {
      animateImageBlur,
      currentCaller,
      headerMenuIsOpen,
      height,
      showBusinessCard,
      showLegalTerms,
      showStoryText,
      spacerHeight
    } = appState;
    const isHome = currentCaller === 'home';
    const isReverie = currentCaller === 'reverie';
    const isStory = currentCaller == 'chapter';
    const iconType =
      headerMenuIsOpen
        ? headerNavClose
        : headerNavOpen;
    const hideBackground = isHome
        || (!showStoryText && !isReverie && !headerMenuIsOpen);
    const showTextShadow = 
      !showStoryText
        && !showBusinessCard
        && !showLegalTerms
        && !isReverie
        && !headerMenuIsOpen;
    const coverVals = cover(window.innerWidth, height, 2131, 1244);
    const referrer = new Referrer(this.props);
    const eventHandlerForHeaderMenu = () => boundHandleClickForApp('toggleHeaderMenu');
    const opaqueBackground = 
      isHome
        && (coverVals.y < 0 || spacerHeight < 20)
        && !showBusinessCard
        && !showLegalTerms;

    return (
      <Container
        isHome={isHome}
      >
        <HeaderBackground
          isHome={isHome}
          isStory={isStory}
          hide={hideBackground}
          animateImageBlur={animateImageBlur}
        />
        <HeaderMenuBackground
          menu={headerMenuIsOpen}
          hide={hideBackground}
        />
        <NameAsLink
          isHome={isHome}
          menu={headerMenuIsOpen}
          textShadow={showTextShadow}
          boundHandleClickForApp={boundHandleClickForApp}
          to={'/'}
        >
          James Abels
        </NameAsLink>
        <Motto
          isHome={isHome}
          hide={isHome}
          menu={headerMenuIsOpen}
          textShadow={showTextShadow}
        >
          {bio.attributes.motto}
        </Motto>
        <Nav
          isHome={isHome}
          menu={headerMenuIsOpen}
          opaqueBackground={opaqueBackground}
        >
          <NavList
            isHome={isHome}
            menu={headerMenuIsOpen}
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
                      menu={headerMenuIsOpen}
                    >
                      <RestyledLink
                        isActive={isActive}
                        isHome={isHome}
                        menu={headerMenuIsOpen}
                        textShadow={showTextShadow}
                        num={idx}
                        to={link.path}
                        boundHandleClickForApp={boundHandleClickForApp}
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
          menu={headerMenuIsOpen}
          src={iconType}
          textShadow={showTextShadow}
          onClick={eventHandlerForHeaderMenu}
        />
      </Container>
    );
  }
}
