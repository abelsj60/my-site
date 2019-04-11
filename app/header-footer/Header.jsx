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

const tempColor = 'white';
const tempFont = "'Montserrat', sans-serif";
const tempWeight = '500';

const Container = styled.header`
  background-color: ${p => (p.home ? 'transparent' : p.reverie === 'active' ? p.theme.colors.reverieBlue : p.theme.colors.white)};
  color: ${p => (p.home ? p.theme.colors.white : p.reverie === 'active' ? p.theme.colors.lightBlack : p.theme.colors.mediumBlack)};
  color: ${tempColor};
  flex-shrink: 0;
  z-index: 2;
  height: 52px;
  display: flex;
  justify-content: ${p => (p.home ? 'center' : undefined)};
  align-items: center;
  width: 100%;
  max-width: 75rem;
`;
const RestyledLink = styled(StyledLink)`
  font-size: ${p => p.theme.fontSizes.six}; // four
  font-weight: ${p => p.home ? 400 : ''};
  margin-left: ${p => (p.num === 0 ? '0px' : '15px')};
  color: ${p => (p.home ? 'white' : p.reverie === 'active' ? p.theme.colors.lightBlack : p.theme.colors.mediumBlack)};
  color: ${tempColor};
  font-family: ${p => !p.home ? "'Aref Ruqaa', serif" : ''};
  font-family: ${tempFont};
  font-weight: ${tempWeight};
  // margin-top: -4px;

  && {
    text-decoration: ${p => (p.active === 'active' ? 'underline' : undefined)};
  }

  @media (min-width: ${p => p.theme.mediaQueries.tinyViewTwo}) {
    font-size: ${p => !p.home ? p.theme.fontSizes.six : p.theme.fontSizes.three}; // nine
  }
`;
const NameAsLink = styled(RestyledLink)`
  display: ${p => (p.hide === 'active' ? 'none' : undefined)};
`;
const Motto = styled.p`
  font-family: 'Aref Ruqaa', serif;
  font-family: ${tempFont};
  font-weight: ${tempWeight};
  flex: 1;
  display: ${p => (p.hide ? 'none' : undefined)};
  font-style: italic;
  font-size: ${p => p.theme.fontSizes.two}; // one 
  margin: 1px 20px 0px 13px;
  min-width: 0px;  
  // https://css-tricks.com/flexbox-truncated-text/
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: ${p => p.theme.mediaQueries.tinyViewTwo}) {
    font-size: ${p => p.theme.fontSizes.four};
    // margin-left: 13px;
    // margin-bottom: 2px;
    // margin-top: 1px;
    margin-right: 0px;
  }
`;
const Nav = styled.nav`
  display: ${p => (p.home ? undefined : 'none')};
  padding: ${p => p.home ? '7px 13px' : undefined};
  background-color: ${p => p.home ? 'rgba(0,0,0,0.25)' : undefined};
  border-radius: ${p => p.home ? '10px' : undefined};
  margin-top: -1px;

  ${p => p.menu && css`
    flex: 1;
    display: block;

    @media (min-width: ${p.theme.mediaQueries.tinyViewTwo}) {
      margin-left: 32px;
    }
  `};

  @media (min-width: ${p => p.theme.mediaQueries.narrowBreakTwo}) {
    display: block;
    margin-right: ${p => (!p.home ? '15px' : undefined)};
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
  // width: 17px;
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

const NewIcon = styled.div`
  position: relative;         
  // margin-top:2%; 
  border: 2px solid white;
  border-radius: 2px; 
  height: 36px; 
  width:36px;
  margin-right: 15px;

  &:before {
    border-bottom: 17px double white;
    border-top: 6px solid white;    
    content:"";
    height: 5px; 
    position: absolute; 
    right:3px;  
    top: 4px; 
    width:30px;
  }
`;

// body { padding: 5%; }

// .btn { 
//     position: relative;         
//     margin-top:2%; 
//     border: 2px solid black;
//     border-radius: 2px; 
//     height: 36px; 
//     width:36px;  
// }

// #lines:before { 
//     border-bottom: 17px double black;
//     border-top: 6px solid black;    
//     content:"";
//     height: 5px; 
//     position: absolute; 
//     right:3px;  
//     top: 4px; 
//     width:30px; 
// }

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
    const reverieIsActive = currentCaller === 'reverie' ? 'active' : '';
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
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '52px',
          left: '0px',
          backgroundColor: '#AF125A', // #008DD5
          zIndex: '-1'
        }}></div>
        <NameAsLink
          reverie={reverieIsActive}
          hide={
            ((menuIsActive || homeIsActive) && 'active')
              || undefined
          }
          to={'/'}
        >
          James Abels
        </NameAsLink>
        <Motto
          hide={menuIsActive || homeIsActive}
        >
          Narrative coding and other adventures
        </Motto>
        <Nav
          home={homeIsActive}
          menu={menuIsActive}
        >
          <NavList>
            <Mapper
              mapData={headerLinks}
              render={
                (link, idx) => {
                  const pathIsActive =
                    link.path.includes(referrer.location);

                  return (
                    <li
                      key={idx}
                    >
                      <RestyledLink
                        reverie={reverieIsActive}
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
