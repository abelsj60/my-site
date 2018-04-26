import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div id='Footer' style={{opacity: this.props.opacity}}>
        <div id='FooterEmail'>
          <p className='pForFooter'>Email</p>
        </div>
        <div id='JnLFooter'>
          <Link className='link' to={'/jnl'}><p className='pForFooter'>Journalism and Law</p></Link>
        </div>
        <div id='Copyright'>
          <p className='pForFooter'>James Abels. All rights reserved. 2018.</p>
        </div>
      </div>
    )
  }

}

export default Footer;
