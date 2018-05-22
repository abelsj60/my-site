import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Logo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='NameAndLink'>
        <Link className={'link header ' + this.props.setHeaderClass(this.props.hTransparency)} to={'/'}><p className='pForHeader'><strong>JAMES ABELS</strong></p></Link>
      </div>
    )
  }

}

export default Logo;
