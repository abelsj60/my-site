import React, { Component } from 'react';
import ParTestImg from './ParTestImg.jsx';
import SiteHeader from './SiteHeader.jsx';
import Footer from './Footer.jsx';

var background = '/test/pngtree-magskyline.jpg';
var background2 = '/test/beaker-magic-2.png';

var wrapperStyle = {
  width: '100%',
  position: 'fixed'
};

var scrollerStyle = {
  height: '4000px'
};

var topImgStyle = {
  position: 'relative'
};

class ParTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xScale: 6,
      yScale: 6
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.parThis = this.parThis.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.parThis);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.parThis);
  }

  handleScroll(event) {
    console.log(event);
  }

  parThis(event) {
    var scrollTop = window.pageYOffset;
    var oldPercent = (scrollTop - 0) / (4000 - 0);
    var numberForScale = 6 / (((7 - 1) * oldPercent) + 1);
    console.log('oldPercent:', oldPercent);
    console.log('numberForScale:', numberForScale);

    this.setState({ xScale: numberForScale })
    this.setState({ yScale: numberForScale })
  }

  render() {
    var btmImgStyle = {
      position: 'absolute',
      transform: 'scale(' + this.state.xScale + ',' + this.state.yScale + ')',
      top: '0',
      right: '0'
    }

    return (
      <div>
        <div id='PTOuterDiv' style={wrapperStyle} >
          <SiteHeader />
          <div id='PTInnerDiv' >
            <div id='PTTopImg' style={topImgStyle} >
              <img src={background} alt='b' />
            </div>
            <div id='PTBottomImg' style={btmImgStyle} >
              <img src={background2} alt='b2' />
            </div>
          </div>
        </div>
        <div id='PTScrollerDiv' style={scrollerStyle} ref={element => this.scrollerRef = element} onScroll={this.parThis} >
        </div>
      </div>
    )
  }

}

export default ParTest;
