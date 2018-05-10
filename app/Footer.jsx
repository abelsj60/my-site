import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    var setHome = function(home) {
      if(!home) {
        return 'notHome';
      } else {
        return 'home';
      }
    }

    return (
      <div id='Footer' className={setHome(this.props.topicsShown)} style={{opacity: this.props.opacity}}>
        <div id='Copyright'>
          <p className='pForFooter'>James Abels. All rights reserved. 2018.</p>
        </div>
      </div>
    )
  }

}

export default Footer;
