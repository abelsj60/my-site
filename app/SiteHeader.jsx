import React, { Component } from 'react';
import Nav from './Nav.jsx';
import Logo from './Logo.jsx';
import { Link } from 'react-router-dom';

class SiteHeader extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var headerOuter = {
      flex: '1',
      zIndex: '2',
      position: 'fixed',
      width: '100%',
      height: '52px',
      color: this.props.isTransparent ? 'white' : 'white',
      backgroundColor: this.props.isTransparent ? 'transparent' : 'dodgerblue',
      transition: 'background-color .7s, color .7s',
      display: 'flex'
    }

    var navContainer = {
      display: 'flex',
      flex: '1',
      justifyContent: 'space-between',
      paddingTop: '15px',
      paddingRight: '25px'
    }

    var navItemsInnerStyle = {
      display: 'flex',
      flex: '1',
      justifyContent: 'space-between',
      paddingTop: '10px'
    }

    var nameStyle = {
      flex: '1'
    };

    var sumStyle = {
      flex: '6'
    }

    var navSpacerStyle = {
      flexGrow: '1'
    }

    var nameLogoStyle = {
      flex: '4',
      display: 'flex'
    }

    var headerSpacerStyle = {
      flexGrow: '1'
    }

    var linkStyle = {
      color: 'white'
    }

    return (
      <div id='Header' style={headerOuter}>
        <div id='LeftContainer' style={nameLogoStyle}>
          <div id='Name' style={nameStyle}>
            <Logo />
          </div>
          <div id='Motto' style={sumStyle}>
            <Nav />
          </div>
        </div>
        <div id='RightContainer' style={navContainer}>
            <div id='pitch'>
              <Link style={linkStyle} to={'/chapter'} id='MyStory'>My story</Link>
            </div>
            <div id='SomeProjects'>
              <Link style={linkStyle} to={'/projects'}>Some projects</Link>
            </div>
            <div id='AlexaAdventures'>
              <Link style={linkStyle} to={'/alexa'}>Alexa adventures</Link>
            </div>
        </div>
      </div>
    )
  }

}

export default SiteHeader;
