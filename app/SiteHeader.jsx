import React, { Component } from 'react';
import Nav from './Nav.jsx';
import Logo from './Logo.jsx';
import { Link, NavLink } from 'react-router-dom';

var headerItems = ['My story', 'Some projects', 'Journalism & Law', 'Alexa adventures'];

var setPath = function(item) {
  if(item === 'My story') {
    return '/chapter';
  } else if(item === 'Some projects') {
    return '/project';
  } else if(item === 'Alexa adventures') {
    return '/alexa';
  } else if(item === 'Journalism & Law')
    return '/jnl';
};

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
        <div id= 'RightContainer'>

          {
            headerItems.map(item => (
              <div key={item} id={item}>
                <NavLink className='link' activeClassName='NavLinkActive' to={setPath(item)}>{item}</NavLink>
              </div>
            ))
          }

        </div>
      </div>
    )
  }

}

export default SiteHeader;
