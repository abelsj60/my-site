import React, { Component } from 'react';
import Nav from './Nav.jsx';
import Logo from './Logo.jsx';
import { Link } from 'react-router-dom';

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
      <div id='Header' className={setHeaderClass(this.props.isTransparent)}>
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
              <Link className='link' to={'/chapter'}>My story</Link>
            </div>
            <div id='SomeProjects'>
              <Link className='link' to={'/projects'}>Some projects</Link>
            </div>
            <div id='AlexaAdventures'>
              <Link className='link' to={'/alexa'}>Alexa adventures</Link>
            </div>
        </div>
      </div>
    )
  }

}

export default SiteHeader;
