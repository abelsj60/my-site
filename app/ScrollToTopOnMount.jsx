import React, { Component } from 'react';
import { withRouter } from 'react-router';

class ScrollToTopOnMount extends Component {

  componentWillMount() {
    // if(window.pageYOffset !== 0) {
    //   // window.scrollTo(0, 0)
    //   window.pageYOffset = 0;
    // }
    window.pageYOffset = 0;
  }

  componentDidMount() {
    // if(window.pasgeYOffset !== 0) {
      // window.pageYOffset = 0;
    //   window.pageYOffset = 0;
    // }
  }

  render() {
    return null
  }
}

export default withRouter(ScrollToTopOnMount);
