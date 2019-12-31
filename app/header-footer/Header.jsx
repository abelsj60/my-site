import bio from '../data/home/home.md';
import { isIE } from 'react-device-detect';
import eventManagement from '../helpers/eventManagement';
import headerNavClose from '../../docs/assets/images/convert-to-data-uri/header-nav-open-88-@4x.png';
import headerNavOpen from '../../docs/assets/images/convert-to-data-uri/header-nav-closed-88-@4x.png';
import headerNavOpenShadow from '../../docs/assets/images/convert-to-data-uri/header-nav-open-shadow-88-@4x.png';
import { cover } from 'intrinsic-scale';
import Mapper from '../shared/Mapper.jsx';
import React, { Component } from 'react';
import {
  isIOS,
  osVersion
} from 'react-device-detect';
import Referrer from '../classes/Referrer.js';
import styled, { css, keyframes } from 'styled-components';
import StyledLink from '../primitives/StyledLink.jsx';
import UnorderedList from '../primitives/UnorderedList.jsx';

const headerLinks = [
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Journalism', path: '/journalism' },
  { name: 'A not-so-true story', path: '/chapter' }
];
const fontWeight = '500';
const textShadow = '2px 2px 2.5px rgba(0, 0, 0, .4)';
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
  // Doesn't seem to be an issue when the app jumps down due to a touch, the user gets it. 
  // These values seem to be ignored on iPhones, which may be a function of my own CSS? 
  // Anyway, it seems like some iPhones become more resistant to taps at the top of
  // the screen with these values. May be true, may be false, but no penalty...
  margin-top: env(safe-area-inset-top);
  margin-top: cover(safe-area-inset-top);
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
  background-color: ${p => p.isHome || (p.tempContent === 3 && p.illustrationLevel === 3) ? '' : p.theme.colors.darkPink};
  opacity: ${p => p.tempContent === 3 || p.isReverie || !p.illustrationDirection || ((p.illustrationDirection === 'exit' && p.illustrationLevel < 2) || (p.illustrationDirection === 'enter' && p.illustrationLevel < 1)) ? '1' : '0'};
  transition: ${p => p.illustrationLevel > 0 && p.illustrationLevel < 3 && css`opacity .35s`};
  // Added z-index for weird behavior on IE 11, per BrowserStack testing:
  z-index: ${p => !p.isIE ? '-1' : '1'};

  // This mediaQ ensures the background goes away if the full-screen menu
  // is on when the user increases the browser window's width
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
    num,
    nameAsLink,
    tabbed,
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

  // Control nav items when menu is open, up to the break point, 1
  @media (min-width: 0px) and (max-width: ${p => p.theme.mediaQueries.tinyView}) {
    // Header menu
    ${p => p.tempContent === 3 && css`
      color: ${p => p.fullScreenMenu && p.theme.colors.yellow};
      font-family: ${p => p.fullScreenMenu && "'Aref Ruqaa', serif"};
      font-size: ${p => !p.nameAsLink && p.tempContent === 3 && p.theme.fontSizes.eighteen};
      margin-left: ${p => !p.nameAsLink && p.tempContent === 3 && '0px'};
      text-shadow: 2px 2px 2.5px rgba(0, 0, 0, .1);
    `};
  }

  // Control nav items when menu is open, up to the break point, 2
  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) and (max-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    // Header menu
    ${p => p.tempContent === 3 && css`
      color: ${p => p.fullScreenMenu && p.theme.colors.yellow};
      font-family: ${p => p.fullScreenMenu && "'Aref Ruqaa', serif"};
      font-size: ${p => !p.nameAsLink && p.tempContent === 3 && p.theme.fontSizes.twenty};
      margin-left: ${p => !p.nameAsLink && p.tempContent === 3 && '0px'};
      text-shadow: 2px 2px 2.5px rgba(0, 0, 0, .1);

      &:focus {
        // Special outline color when headerMenu is open on narrow screens!
        ${p => p.tabbed && 'outline: white dashed 6px;'}
      }
    `};
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
  // Don't show background-color box when business card or legal terms are on, but do show it immediately if we're offline!
  // This means showing it when p.startDramaAtHome is either 'yes' or 'never', which sounds a little weird, no?
  background-color: ${p => (p.offline && p.isHome && p.tempContent < 1) || (p.isHome && (p.startDramaAtHome === 'yes' || p.startDramaAtHome === 'never') && p.tempContent < 1) || (p.isIOS && p.osVersion <= 7) ? 'rgba(0, 0, 0, .2)' : ''};
  ${p => !p.homePageLoaded && 'will-change: background-color;'}
  // Transition settings for the spell should match (in total) the Fallbacks's transition settings.
  ${p => !p.homePageLoaded && p.startDramaAtHome !== 'never' && 'transition: background-color .69s .01s ease-in-out;'}
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
    // Header menu
    ${p => p.tempContent === 3 && css`
      background-color: rgba(175, 18, 90, .8);
      position: fixed;
      left: 0px;
      bottom: 0px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: unset; // No transition when headerMenu is open!
    `};
  }
`;
const NavList = styled(UnorderedList)`
  display: flex;
  justify-content: center;
  margin: ${p => p.tempContent !== 3 ? css`${!p.isHome && 'auto'} 0px ${!p.isHome && 'auto'} 0px}` : ''};

  // Control nav items when it's open, up to the break point
  @media (max-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    // Header menu
    ${p => p.tempContent === 3 && css`
      flex-direction: column;
      margin-top: 53px;
      margin-bottom: 55px;
      height: 100%;
    `};
  }
`;
const NavItem = styled.li`
  // Margin for nav items when menu is open, up to header menu break point.
  @media (max-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) { 
    // Header menu
    ${p => p.tempContent === 3 && css`
        margin: 20px 0px;
    `};

    // Smaller margins for landscape view when it's height is very narrow.
    @media (max-height: ${p => p.theme.mediaQueries.tinyView}) {
      // Header menu
      ${p => p.tempContent === 3 && css`
        margin: 5px 0px;
      `};
    }
  }
`;
const MenuLink = styled.a`
  display: ${p => p.isHome && 'none'};
  text-decoration: none;
  position: relative;
  height: 22px;
  width: 22px;
  padding: 3px;
  margin-left: auto;
  margin-right: 10px;
  z-index: 1;

  @media (min-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    display: none;
  }
`;
const Icon = styled.img`
  position: absolute;
  height: 22px;
  cursor: pointer;
  transform: translateZ(0); // Prevent pixel shifts during transition
  z-index: 2;
`;
const IconShadow = styled(Icon)`
  // Inkscape settings: blur (6), horizontal offset (6), vertical offset (3), opacity value (60)
  // Why bother with it outside story:
  display: ${p => (!p.isStory && 'none')}; 
  padding-top: 1px;
  padding-left: 1px;
  opacity: ${p => !p.isReverie && p.tempContent < 1 && ((p.illustrationDirection === 'enter' && p.illustrationLevel >= 2) || (p.illustrationDirection === 'exit' && p.illustrationLevel > 2)) ? '1' : '0'};
  transition: ${p => p.illustrationLevel > 0 && p.illustrationLevel < 3 && 'opacity .35s'};
  z-index: 1;
`;
// On-screen timer for open header menu
const timerKeyframes = keyframes`
  0% {
    transform: scaleX(1);
  }

  100% {
    transform: scaleX(-1);
  }
`;
const TimingBar = styled.div`
  // Timer stays accurate if it runs outside of media query (parent query handles visibility)
  display: ${p => p.tempContent === 3 ? 'block' : 'none'};
  position: fixed;
  background-color: ${p => p.theme.colors.yellow};
  top: ${p => p.offline ? '54px' : '51px'};
  left: 0px;
  height: 1px;
  width: 100%;

  @media (min-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    display: none;
  }
`;
const Timer = styled.div`
  // Timer stays accurate if it runs outside of media query (parent query handles visibility)
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${p => p.theme.colors.pink};
  animation: ${css`6s ${timerKeyframes} 1`};
`;

export default class Header extends Component {
  render() {
    const {
      appState,
      boundHandleClickForApp,
      setIllustrationLevels
    } = this.props;
    const {
      currentCaller,
      height,
      homePageLoaded,
      illustrationDirection,
      illustrationLevel,
      images,
      offline,
      startDramaAtHome,
      tabbed,
      tempContent
    } = appState;
    const isHome = currentCaller === 'home';
    const isStory = currentCaller === 'chapter';
    const isReverie = currentCaller === 'reverie';
    const menuIcon = tempContent === 3 ? headerNavClose : headerNavOpen;
    const coverVals = cover(window.innerWidth, height, images.width, images.height);
    const referrer = new Referrer(this.props);
    const handleHeaderMenu = event => {
      eventManagement(event);
      boundHandleClickForApp('updateTempContent', 3);
    };
    const handleClickForMenuLink = event => handleHeaderMenu(event);
    const handleAnimationEndForTimer = event => handleHeaderMenu(event);
    const handleTranstionEnd = (event, idx) => {
      eventManagement(event);
      setIllustrationLevels(idx);
    };
    const handleTransitionEndForText = event => handleTranstionEnd(event, 0);
    const handleTransitionEndForIconShadow = event => handleTranstionEnd(event, 1);
    const handleTransitionEndForBackground = event => handleTranstionEnd(event, 2);

    return (
      <Container
        isHome={isHome}
      >
        <HeaderBackground
          isHome={isHome}
          isIE={isIE}
          isReverie={isReverie}
          illustrationDirection={illustrationDirection}
          illustrationLevel={illustrationLevel}
          onTransitionEnd={handleTransitionEndForBackground}
          tempContent={tempContent}
        />
        <NameAsLink
          boundHandleClickForApp={boundHandleClickForApp}
          illustrationDirection={illustrationDirection}
          illustrationLevel={illustrationLevel}
          isHome={isHome}
          isReverie={isReverie}
          nameAsLink={true}
          onTransitionEnd={handleTransitionEndForText}
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
          onTransitionEnd={handleTransitionEndForText}
          tempContent={tempContent}
        >
          {bio.attributes.motto}
        </Motto>
        {!isHome && (
          <MenuLink
            href=''
            isHome={isHome}
            onClick={handleClickForMenuLink}
          >
            <Icon
              src={menuIcon}
            />
            <IconShadow 
              illustrationDirection={illustrationDirection}
              illustrationLevel={illustrationLevel}
              isStory={isStory}
              isReverie={isReverie}
              onTransitionEnd={handleTransitionEndForIconShadow}
              src={headerNavOpenShadow}
              tempContent={tempContent}
            />
          </MenuLink>
        )}
        <Nav
          coverValY={coverVals.y < 0} // Add frost to text
          homePageLoaded={homePageLoaded}
          isHome={isHome}
          isIOS={isIOS}
          offline={offline}
          osVersion={parseInt(osVersion)}
          startDramaAtHome={startDramaAtHome}
          tempContent={tempContent}
        >
          <NavList
            isHome={isHome}
            tempContent={tempContent}
          >
            <Mapper
              mapData={headerLinks}
              render={(link, idx) => {
                const isActive = link.path.includes(referrer.location);

                return (
                  <NavItem
                    key={idx}
                    tempContent={tempContent}
                  >
                    <RestyledLink
                      boundHandleClickForApp={boundHandleClickForApp}
                      fullScreenMenu={true}
                      illustrationDirection={illustrationDirection}
                      illustrationLevel={illustrationLevel}
                      isActive={isActive}
                      isHome={isHome}
                      isReverie={isReverie}
                      num={idx}
                      onTransitionEnd={handleTransitionEndForText}
                      tabbed={tabbed}
                      tempContent={tempContent}
                      to={link.path}
                    >
                      {link.name}
                    </RestyledLink>
                  </NavItem>
                );
              }}
            />
          </NavList>
          <TimingBar
            illustrationLevel={illustrationLevel}
            offline={offline}
            tempContent={tempContent}
          >
            <Timer
              onAnimationEnd={handleAnimationEndForTimer}
            />
          </TimingBar>
        </Nav>
      </Container>
    );
  }
}
