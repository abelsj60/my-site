import React, { Component } from 'react';
import ParTestImg from './ParTestImg.jsx';
import SiteHeader from './SiteHeader.jsx';
import Footer from './Footer.jsx';

var background = '/test/pngtree-magskyline.jpg';
var background2 = '/test/beaker-magic-2.png';

var wrapperStyle = {
  width: '100%',
  position: 'fixed'
}

var scrollerStyle = {
  height: '4000px'
}

var topImgStyle = {
  position: 'relative'
}

var btmImgStyle = {
  position: 'absolute',
  transform: 'scale(5, 5)',
  top: '0',
  right: '0'
}

class ParTest extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div id='ParTestOuterDiv' style={wrapperStyle} >
          <SiteHeader />
          <div id='ParTestInnerDiv'>
            <div id='ParTestTopImg' style={topImgStyle}>
              <img src={background} alt='b' />
            </div>
            <div id='ParTestBottomImg' style={btmImgStyle}>
              <img src={background2} alt='b2' />
            </div>
          </div>
        </div>
        <div id='ParTestScrollerDiv' style={scrollerStyle} >
        </div>
      </div>
    )
  }

}

export default ParTest;
