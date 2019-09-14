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
  top: ${p => !p.menu ? '0px' : '52px'};
  bottom: ${p => p.menu && '0px'};
  width: ${p => p.menu && '100%'};
  left: 0px;
  // No background on home, translucent if
  // menu is open, dark pink if it isn't
  background-color: ${p => !p.isHome ? p.menu ? 'rgba(175, 18, 90, .8)' : p.theme.colors.darkPink : ''};
  opacity: ${p => !p.hide ? '1' : '0'};
  transition: ${p => p.animateImageBlur && css`opacity ${p.showStoryText ? '.35s' : '.15s'}`};
  z-index: -1;
  
  // Control color when menu is open, up to the break point (not /home)
  @media (max-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    background-color: ${p => p.hide && !p.isHome && 'rgba(175, 18, 90, .8)'};
  }
`;
const RestyledLink = styled(
  // Filter out isHome and isActive from StyledLink
  // eslint-disable-next-line
  ({
    animateImageBlur,
    isHome,
    isActive,
    menu,
    textShadow,
    nameAsLink,
    ...rest
  }) => <StyledLink {...rest} />
)`
  font-size: ${p => p.theme.fontSizes.twentyOne};
  font-weight: ${p => p.isHome ? '400' : fontWeight};
  margin-left: ${p => (p.num === 0 ? '0px' : '10px')};
  color: ${p => p.theme.colors.white};
  text-shadow: ${p => p.textShadow && textShadow};
  transition: ${p => p.animateImageBlur && 'text-shadow .35s'};

  && {
    text-decoration: ${p => (p.isActive ? 'underline' : undefined)};
  }

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    margin-left: ${p => (p.num === 0 ? '0px' : '15px')};
    font-size: ${p => p.isHome ? p.theme.fontSizes.three : p.theme.fontSizes.three};
  }

  // Control nav items when menu is open, up to the break point
  @media (min-width: 0px) and (max-width: ${p => p.theme.mediaQueries.tinyView}) {
    font-size: ${p => !p.nameAsLink && p.menu && p.theme.fontSizes.eighteen};
    margin-left: ${p => !p.nameAsLink && p.menu && '0px'};
  }

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) and (max-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    font-size: ${p => !p.nameAsLink && p.menu && p.theme.fontSizes.twenty};
    margin-left: ${p => !p.nameAsLink && p.menu && '0px'};
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
  transition: ${p => p.animateImageBlur && 'text-shadow .35s'};

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
  background-color: ${p => p.frost && 'rgba(0, 0, 0, .125)'};
  // Prevent occasional over-expansion
  max-width: ${p => p.isHome && '350px'}; 
  position: relative;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    background-color: ${p => !p.frost && 'unset'};
  }

  @media (min-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    display: block;
    margin-right: ${p => (!p.isHome && '15px')};
    // Prevent occasional over-expansion
    max-width: ${p => p.isHome && '350px'};
  }

  @media (max-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    ${p => p.menu && css` // p.menu = headerMenu
      background-color:  rgba(175, 18, 90, .8);
      position: fixed;
      top: 54px;
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
  margin: ${p => !p.menu ? css`${!p.isHome && 'auto'} 0px ${!p.isHome && 'auto'} 0px}` : ''};
  justify-content: ${p => p.menu && 'space-evenly'};

  // Control nav items when menu is open, up to the break point
  @media (max-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    ${p => p.menu && css` // p.menu = headerMenu
      flex-direction: column;
      margin-bottom: 55px;
    `};
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
    const frost = 
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
        <NameAsLink
          isHome={isHome}
          nameAsLink={true}
          menu={headerMenuIsOpen}
          textShadow={showTextShadow}
          animateImageBlur={animateImageBlur}
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
          animateImageBlur={animateImageBlur}
        >
          {bio.attributes.motto}
        </Motto>
        <Nav
          isHome={isHome}
          menu={headerMenuIsOpen}
          frost={frost}
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

                  return (
                    <li
                      key={idx}
                    >
                      <RestyledLink
                        isActive={isActive}
                        isHome={isHome}
                        menu={headerMenuIsOpen}
                        textShadow={showTextShadow}
                        num={idx}
                        to={link.path}
                        animateImageBlur={animateImageBlur}
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
          menu={headerMenuIsOpen}
          src={iconType}
          textShadow={showTextShadow}
          onClick={eventHandlerForHeaderMenu}
        />
      </Container>
    );
  }
}
