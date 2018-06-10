import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

var navBar = ['My story', 'Some projects', 'Journalism & Law' /*, 'Alexa adventures' */ ];

var controlHeader = function(nextPath, currentPath) {
  if(nextPath === 'My story') {
    return ['/chapter', setActivePath('/chapter', currentPath)];
  } else if(nextPath === 'Some projects') {
    return ['/project', setActivePath('/project', currentPath)];
  // } else if(nextPath === 'Alexa adventures') {
  //   return ['/alexa', setActivePath('/alexa', currentPath)];
  } else if(nextPath === 'Journalism & Law')
    return ['/jnl', setActivePath('/jnl', currentPath)];
};

var setActivePath = function(nextPath, currentPath) {
  return currentPath.includes(nextPath) ? 'active' : 'inactive'
}

class Header extends Component {
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
      <header className={setHeaderClass(this.props.isTransparent)}>
        <section className='info'>
          <Link className={setHeaderClass(this.props.isTransparent)} to={'/'}><strong>JAMES ABELS</strong></Link>
          <p><em>Magical stories and other adventures</em></p>
        </section>
        <nav>
          {
            navBar.map(item => (
              <Link key={item} className={setHeaderClass(this.props.isTransparent) + ' ' + controlHeader(item, urlParam)[1]} to={controlHeader(item, urlParam)[0]}>{item}</Link>
            ))
          }
        </nav>
      </header>
    )
  }

}

export default withRouter(Header);
