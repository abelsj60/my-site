import React, { Component } from 'react';
import ParTestImg from './ParTestImg.jsx';
import SiteHeader from './SiteHeader.jsx';
import Footer from './Footer.jsx';
import Topics from './Topics.jsx';

var background = '/test/howls-background-dl.jpg';
var background2 = '/test/dreaming-boy-co-2.png';

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

var footerDivStyle = {
  flex: '1',
  height: '39px'
};

class ParTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xScale: 6,
      yScale: 6,
      scrollPos: 0,
      isTransparent: true,
      topicStatus: false,
      topicMenu: false
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.parThis = this.parThis.bind(this);
    this.setTransparency = this.setTransparency.bind(this);
    this.revealText = this.revealText.bind(this);
    this.setTopicMenu = this.setTopicMenu.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.parThis);
    window.addEventListener('scroll', this.setTransparency);
    window.addEventListener('scroll', this.revealText);
    window.addEventListener('scroll', this.setTopicMenu);
    this.revealText();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.parThis);
    window.removeEventListener('scroll', this.setTransparency);
    window.addEventListener('scroll', this.revealText);
    window.addEventListener('scroll', this.setTopicMenu);
  }

  handleScroll(event) {
    console.log(event);
  }

  parThis(event) {
    var scrollTop = window.pageYOffset;
    var oldPercent = (scrollTop - 0) / (3221 - 0);
    var numberForScale = 6 / (((6 - 1) * oldPercent) + 1);
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
    // console.log('revealText', scrollTop);
    // console.log('revealText', this.state.topicStatus);
    // console.log('event:', event);

    if(scrollTop <= 2300) {
      // console.log('false revealText')
      if(scrollTop === 2300) {
        console.log('firing revealText')
      }
      this.setState({ topicStatus: false });
    } else if (scrollTop > 2300) {
      // console.log('true revealText')
      this.setState({ topicStatus: true });
    }
  }

  setTopicMenu(event) {
    var scrollTop = window.pageYOffset;

    if(scrollTop < 3221) {
      console.log('setTopicMenu: false');
      this.setState( {topicMenu: false} );
    } else {
      console.log('setTopicMenu: true');
      this.setState( {topicMenu: true} )
    }
  }

  render() {
    var btmImgStyle = {
      position: 'absolute',
      transform: 'scale(' + this.state.xScale + ',' + this.state.yScale + ')',
      width: '100%',
      margin: 'auto',
      top: '0',
      right: '0',
      zIndex: '1'
    }

    var t2Style = {
      flex: '1 1 100%',
      flexDirection: 'column',
      display: 'flex'
    }

    var t3Style = {
      position: 'fixed',
      width: '100%',
      height: '93.3%',
      top: '52px',
      bottom: '39px'
    }

    var fD2Style = {
      flex: '1 1 100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      color: this.state.topicStatus ? 'white' : 'transparent',
      transition: 'color .5s',
      alignItems: 'center'
    }

    var ptrBlockStyle2 = function(topicMenu){
      if(!topicMenu) {
        return {
          pointerEvents: 'none',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%'
        }
      } else {
        return {
          pointerEvents: 'auto',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%'
        }
      }
    }

    // console.log('topicStatus is:', this.state.topicStatus);

    return (
      <div id='contnrForPT'>
        <div id='PTOuterWrapper' style={wrapperStyle} >
          <div id='PTInnerContent' style={topContentStyle}>
            <SiteHeader isTransparent={this.state.isTransparent} />
            <img style={topImgStyle} src={background} alt='b' />
            <img style={btmImgStyle} src={background2} alt='b2' />
          </div>
        </div>
        {
          this.state.topicStatus &&
          <div id='prntForBtm' style={t3Style}>
            <div id='ptrStatus' style={ptrBlockStyle2(this.state.topicMenu)}>
              <div id='fixedDiv2' style={t2Style}>
                <div id='fixedDiv2Topics' style={fD2Style} >
                  <Topics topicStatus={this.state.topicStatus} topicMenu={this.state.topicMenu} />
                </div>
              </div>
              <div id='footerDiv' style={footerDivStyle}>
                <Footer topicStatus={this.state.topicStatus} />
              </div>
            </div>
          </div>
        }
        <div id='PTScroller' style={scrollerStyle}>
        </div>
      </div>
    )
  }

}

export default ParTest;
