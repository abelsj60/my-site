import React, { Component } from 'react';
import ParTestImg from './ParTestImg.jsx';
import SiteHeader from './SiteHeader.jsx';
import Footer from './Footer.jsx';
import Topics from './Topics.jsx';

var background = '/test/pngtree-magskyline.jpg';
var background2 = '/test/beaker-magic-2.png';

var wrapperStyle = {
  width: '100%',
  position: 'fixed',
  zIndex: '0'
};

var topContentStyle = {
  zIndex: '1'
}

var scrollerStyle = {
  height: '4000px'
};

var topImgStyle = {
  position: 'relative',
  zIndex: '1'
};

class ParTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xScale: 6,
      yScale: 6,
      scrollPos: 0,
      isTransparent: true,
      navStatus: false
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.parThis = this.parThis.bind(this);
    this.setTransparency = this.setTransparency.bind(this);
    this.revealText = this.revealText.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.parThis);
    window.addEventListener('scroll', this.setTransparency);
    window.addEventListener('scroll', this.revealText);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.parThis);
    window.removeEventListener('scroll', this.setTransparency);
    window.addEventListener('scroll', this.revealText);
  }

  handleScroll(event) {
    console.log(event);
  }

  parThis(event) {
    var scrollTop = window.pageYOffset;
    var oldPercent = (scrollTop - 0) / (4000 - 0);
    var numberForScale = 6 / (((7 - 1) * oldPercent) + 1);
    // console.log('scrollTop:', scrollTop);
    // console.log('oldPercent:', oldPercent);
    // console.log('numberForScale:', numberForScale);

    this.setState({ xScale: numberForScale })
    this.setState({ yScale: numberForScale })
  }

  setTransparency(event) {
    var scrollTop = window.pageYOffset;
    // console.log('scrollTop:', scrollTop);
    // console.log('state:', this.state.isTransparent);

    if(scrollTop >= 7) {
      // console.log('true if, scrollTop is:', scrollTop);
      this.setState({ isTransparent: false });
    } else {
      // console.log('false if, scrollTop is now:', scrollTop);
      this.setState({ isTransparent: true });
    }

  }

  revealText(event) {
    var scrollTop = window.pageYOffset;
    console.log('revealText', scrollTop);
    // console.log('revealText', this.state.navStatus);

    if(scrollTop >= 2300) {
      // console.log('true revealText')
      this.setState({ navStatus: true });
    } else if (scrollTop < 2500) {
      // console.log('false revealText')
      this.setState({ navStatus: false });
    }
  }

  render() {
    var btmImgStyle = {
      position: 'absolute',
      transform: 'scale(' + this.state.xScale + ',' + this.state.yScale + ')',
      top: '0',
      right: '0',
      zIndex: '1'
    }

    var t2Style = {
      position: 'fixed',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      color: this.state.navStatus ? 'white' : 'transparent',
      transition: 'color .5s'
    }

    return (
      <div>
        <div id='PTOuterWrapper' style={wrapperStyle} >
          <div id='PTInnerContent' style={topContentStyle}>
            <SiteHeader isTransparent={this.state.isTransparent} />
            <img style={topImgStyle} src={background} alt='b' />
            <img style={btmImgStyle} src={background2} alt='b2' />
          </div>
        </div>
        <div id='fDiv2' style={t2Style}>
          <h1>TEST AGAIN!</h1>
          <p>More text!</p>
        </div>
        <div id='PTScroller' style={scrollerStyle} ref={element => this.scrollerRef = element} onScroll={this.parThis} onScroll={this.setTransparency} >
        </div>
      </div>
    )
  }

}

export default ParTest;
