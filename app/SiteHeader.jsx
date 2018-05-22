import React, { Component } from 'react';
import Nav from './Nav.jsx';
import Logo from './Logo.jsx';
import { Link, NavLink, withRouter } from 'react-router-dom';

var siteSections = ['My story', 'Some projects', 'Journalism & Law', 'Alexa adventures'];

var controlHeader = function(nextPath, currentPath) {
  if(nextPath === 'My story') {
    return ['/chapter', setActivePath('/chapter', currentPath)];
  } else if(nextPath === 'Some projects') {
    return ['/project', setActivePath('/project', currentPath)];
  } else if(nextPath === 'Alexa adventures') {
    return ['/alexa', setActivePath('/alexa', currentPath)];
  } else if(nextPath === 'Journalism & Law')
    return ['/jnl', setActivePath('/jnl', currentPath)];
};

var setActivePath = function(nextPath, currentPath) {
  return currentPath.includes(nextPath) ? 'active' : 'inactive'
}

class SiteHeader extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var urlParam = this.props.location.pathname;

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
          <Logo hTransparency={this.props.hTransparency} setHeaderClass={setHeaderClass} />
          </div>
          <div id='Motto'>
            <Nav />
          </div>
        </div>
        <div id= 'RightContainer'>

          {
            siteSections.map(item => (
              <div key={item} id={item}>
                <Link className={'link header ' + setHeaderClass(this.props.hTransparency) + ' ' + controlHeader(item, urlParam)[1]} to={controlHeader(item, urlParam)[0]}>{item}</Link>
              </div>
            ))
          }

        </div>
      </div>
    )
  }

}

export default withRouter(SiteHeader);
