import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderText extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Link id="site-name" to={'/'}>
          James Abels
        </Link>
        <p id="site-motto">Magical stories and other adventures</p>
      </Fragment>
    );
  }
}

export default HeaderText;
