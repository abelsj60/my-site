import bio from '../data/home/home.md';
import eventManagement from '../helpers/eventManagement';
import headerNavClose from '../../assets/images/convert-to-data-uri/header-nav-open-88-@4x.png';
import headerNavOpen from '../../assets/images/convert-to-data-uri/header-nav-closed-88-@4x.png';
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
const iconShadow = initialShadow + ' rgba(0, 0, 0, .9)';
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
  bottom: ${p => p.tempContent === 3 && '0px'};
  width: ${p => p.tempContent === 3 && '100%'};
  left: 0px;
  // No background on home, translucent if menu is open when the storyIllustration is shown, otherwise dark pink
  background-color: ${p => p.isHome ? '' : p.tempContent === 3 && p.illustrationLevel === 3 ? 'rgba(175, 18, 90, .8)' : p.theme.colors.darkPink};
  opacity: ${p => p.tempContent === 3 || p.isReverie || ((p.illustrationDirection === 'exit' && p.illustrationLevel < 2) || (p.illustrationDirection === 'enter' && p.illustrationLevel < 1)) ? '1' : '0'};
  transition: ${p => p.illustrationLevel > 0 && p.illustrationLevel < 3 && css`opacity .35s`};
  z-index: -1;

  // The mediaQ ensures the background goes away if the full-screen menu
  // is turned on when the user increases the browser window's width
  @media (min-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    opacity: ${p => p.illustrationLevel > 0 && p.theme.blurForTempContent && '0'};
  }
`;
const RestyledLink = styled(
  // Filter out isHome and isActive from StyledLink
  // eslint-disable-next-line
  ({
    illustrationDirection,
    illustrationLevel,
    isHome,
    isActive,
    isReverie,
    menu,
    nameAsLink,
    tempContent,
    textShadow,
    ...rest
  }) => <StyledLink {...rest} />
)`
  font-size: ${p => p.theme.fontSizes.twentyOne};
  font-weight: ${p => p.isHome ? '400' : fontWeight};
  margin-left: ${p => (p.num === 0 ? '0px' : '10px')};
  color: ${p => p.theme.colors.white};
  text-shadow: ${p => !p.isReverie && p.tempContent < 1 && ((p.illustrationDirection === 'enter' && p.illustrationLevel >= 2) || (p.illustrationDirection === 'exit' && p.illustrationLevel > 2)) ? textShadow : ''};
  transition: ${p => p.illustrationLevel > 0 && p.illustrationLevel < 3 && 'text-shadow .35s'};

  && {
    text-decoration: ${p => (p.isActive ? 'underline' : undefined)};
  }

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    margin-left: ${p => (p.num === 0 ? '0px' : '15px')};
    font-size: ${p => p.isHome ? p.theme.fontSizes.three : p.theme.fontSizes.three};
  }

  // Control nav items when menu is open, up to the break point
  @media (min-width: 0px) and (max-width: ${p => p.theme.mediaQueries.tinyView}) {
    font-size: ${p => !p.nameAsLink && p.tempContent === 3 && p.theme.fontSizes.eighteen};
    margin-left: ${p => !p.nameAsLink && p.tempContent === 3 && '0px'};
  }

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) and (max-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    font-size: ${p => !p.nameAsLink && p.tempContent === 3 && p.theme.fontSizes.twenty};
    margin-left: ${p => !p.nameAsLink && p.tempContent === 3 && '0px'};
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
    z-index: ${p => p.tempContent === 3 && '1'};
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
  text-shadow: ${p => !p.isReverie && p.tempContent < 1 && ((p.illustrationDirection === 'enter' && p.illustrationLevel >= 2) || (p.illustrationDirection === 'exit' && p.illustrationLevel > 2)) ? textShadow : ''};
  transition: ${p => p.illustrationLevel > 0 && p.illustrationLevel < 3 && 'text-shadow .35s'};

  @media (min-width: ${p => p.theme.mediaQueries.tinyViewTwo}) {
    font-size: ${p => p.theme.fontSizes.four};
    margin-right: 0px;
  }

  @media (max-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    z-index: ${p => p.tempContent === 3 && '1'};
  }
`;
const Nav = styled.nav`
  display: ${p => (!p.isHome && 'none')};
  margin-top: -2px; // Make name, motto, and link text flush
  padding: ${p => p.isHome && '6px 12px'};
  background-color: ${p => p.isHome && (p.coverValY || p.spacerHeight) && p.tempContent < 1 && 'rgba(0, 0, 0, .125)'};
  // Prevent occasional over-expansion
  max-width: ${p => p.isHome && '350px'}; 
  position: relative;

  @media (min-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    display: block;
    margin-right: ${p => (!p.isHome && '15px')};
    // Prevent occasional over-expansion
    max-width: ${p => p.isHome && '350px'};
  }

  @media (max-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    ${p => p.tempContent === 3 && css`
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
  margin: ${p => p.tempContent !== 3 ? css`${!p.isHome && 'auto'} 0px ${!p.isHome && 'auto'} 0px}` : ''}; // ! was !p.menu
  justify-content: ${p => p.tempContent === 3&& 'space-evenly'};

  // Control nav items when menu is open, up to the break point
  @media (max-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    ${p => p.tempContent === 3 && css`
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
  padding: 5px;
  filter: ${p => !p.isReverie && p.tempContent < 1 && ((p.illustrationDirection === 'enter' && p.illustrationLevel >= 2) || (p.illustrationDirection === 'exit' && p.illustrationLevel > 2)) && css`drop-shadow(${iconShadow})`};
  // ! This transition doesn't seem to be working on mobile Safari. Investigate in future.
  transition: ${p => p.illustrationLevel > 0 && p.illustrationLevel < 3 && css`filter .35s`};
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
      currentCaller,
      height,
      illustrationDirection,
      illustrationLevel,
      spacerHeight,
      tempContent
    } = appState;
    const isHome = currentCaller === 'home';
    const isReverie = currentCaller === 'reverie';
    const menuIcon = tempContent === 3 ? headerNavClose : headerNavOpen;
    const coverVals = cover(window.innerWidth, height, 2131, 1244);
    const referrer = new Referrer(this.props);
    const onClickMenuHandler = event => {
      eventManagement(event);
      boundHandleClickForApp('updateTempContent', 3);
    };

    return (
      <Container
        isHome={isHome}
      >
        <HeaderBackground
          isHome={isHome}
          isReverie={isReverie}
          illustrationDirection={illustrationDirection}
          illustrationLevel={illustrationLevel}
          tempContent={tempContent}
        />
        <NameAsLink
          boundHandleClickForApp={boundHandleClickForApp}
          illustrationDirection={illustrationDirection}
          illustrationLevel={illustrationLevel}
          isHome={isHome}
          isReverie={isReverie}
          nameAsLink={true}
          tempContent={tempContent}
          to={'/'}
        >
          James Abels
        </NameAsLink>
        <Motto
          hide={isHome}
          illustrationDirection={illustrationDirection}
          illustrationLevel={illustrationLevel}
          isHome={isHome}
          isReverie={isReverie}
          tempContent={tempContent}
        >
          {bio.attributes.motto}
        </Motto>
        <Nav
          coverValY={coverVals.y < 0}
          isHome={isHome}
          spacerHeight={spacerHeight < 20}
          tempContent={tempContent}
        >
          <NavList
            isHome={isHome}
            tempContent={tempContent}
          >
            <Mapper
              mapData={headerLinks}
              render={
                (link, idx) => {
                  const isActive = link.path.includes(referrer.location);

                  return (
                    <li
                      key={idx}
                    >
                      <RestyledLink
                        boundHandleClickForApp={boundHandleClickForApp}
                        illustrationDirection={illustrationDirection}
                        illustrationLevel={illustrationLevel}
                        isActive={isActive}
                        isHome={isHome}
                        isReverie={isReverie}
                        num={idx}
                        tempContent={tempContent}
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
          illustrationDirection={illustrationDirection}
          illustrationLevel={illustrationLevel}
          isHome={isHome}
          src={menuIcon}
          onClick={onClickMenuHandler}
          tempContent={tempContent}
        />
      </Container>
    );
  }
}
