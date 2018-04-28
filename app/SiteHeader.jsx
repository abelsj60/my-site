import React, { Component } from 'react';
import Nav from './Nav.jsx';
import Logo from './Logo.jsx';
import { Link, NavLink } from 'react-router-dom';

class SiteHeader extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    var setHeaderClass = function(transparency) {
      if(transparency) {
        return 'transparent'
      } else {
        return 'opaque'
      }
    }

    return (
      <div id='Header' className={setHeaderClass(this.props.hTransparency)}>
        <div id='LeftContainer'>
          <div id='Name'>
            <Logo />
          </div>
          <div id='Motto'>
            <Nav />
          </div>
        </div>
        <div id='RightContainer'>
            <div id='MyStory'>
              <NavLink className='link' activeClassName='NavLinkActive' to={'/chapter'}>My story</NavLink>
            </div>
            <div id='SomeProjects'>
              <NavLink className='link' activeClassName='NavLinkActive' to={'/projects'}>Some projects</NavLink>
            </div>
            <div id='AlexaAdventures'>
              <NavLink className='link' activeClassName='NavLinkActive' to={'/alexa'}>Alexa adventures</NavLink>
            </div>
        </div>
      </div>
    )
  }

}

export default SiteHeader;
