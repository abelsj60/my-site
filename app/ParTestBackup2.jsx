import React, { Component } from 'react';

var background = '/test/pngtree-magskyline.jpg';

var wrapStyle = {
  position: 'fixed',
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column'
};

var containerStyle = {
  flex: '1',
  position: 'relative',
  backgroundColor: 'black',
  overflowX: 'hidden',
  overflowY: 'scroll',
  width: 'calc(100% + 19px)'
};

var imgStyle = {
  width: '99.5%',
  position: 'absolute'
};

var imgStyle2 = {
  width: '100%',
  position: 'absolute'
};

var outerStyle = {
  flex: '1',
  display: 'flex',
  flexDirection: 'column'
};

var innerStyle = {
  background: `url(${background}) no-repeat fixed center bottom`,
  flex: '1',
  height: '4000px'
};

var scrollerStyle = {
  height: '4000px'
};

class ParTest extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div id='ParTestDivIsOuter' style={outerStyle}>
          <div id='ParTestDivIsInner' style={innerStyle}>
          </div>
        </div>
    )
  }

}

export default ParTest;
