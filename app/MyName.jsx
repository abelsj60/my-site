import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MyName extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link
        className={
          'link header ' + this.props.setHeaderClass(this.props.hTransparency)
        }
        to={'/'}
      >
        <strong>JAMES ABELS</strong>
      </Link>
    );
  }
}

export default MyName;
