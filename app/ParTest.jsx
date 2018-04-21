import React, { Component } from 'react';
import ParTestImg from './ParTestImg.jsx';
import SiteHeader from './SiteHeader.jsx';
import Footer from './Footer.jsx';

var ExecutionEnvironment = require('exenv');

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
    super(props);
    this.state = {
      xScrollPos: null
    }

    this.handleScroll = this.handleScroll.bind(this);
    this.third = React.createRef();
  }

  componentDidMount() {
    // if (ExecutionEnvironment.canUseDOM) {
    //   document.documentElement.addEventListener('scroll', this.handleScroll);
    // }

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // document.documentElement.removeEventListener('scroll', this.handleScroll);

    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    // event.preventDefault();
    // console.log('the clicked things', event)
    console.log(this.third);

    let scrollTop = this.third;
    itemTranslate = Math.min(0, scrollTop/3 - 60);
    if(scrollTop < 350) {
      console.log('scrolling', itemTranslate, event);
    } else if(scrollTop === 350) {
      console.log('stop logging');
    }
    event.preventDefault();
  }

  render() {
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
        <div id='PTScrollerDiv' style={scrollerStyle} ref={this.third} onScroll={this.handleScroll} >
        </div>
      </div>
    )
  }

}

export default ParTest;

// this.refs.nav.getDOMNode().style.top = document.documentElement.scrollTop + 'px';
// this.refs
