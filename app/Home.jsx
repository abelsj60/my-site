import React, { Component } from 'react';
import SiteHeader from './SiteHeader.jsx';
import Footer from './Footer.jsx';
import Topics from './Topics.jsx';

var background = '/test/howls-background-dl.jpg';
var background2 = '/test/dreaming-boy-co-2.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xScale: 6,
      yScale: 6,
      scrollPos: 0,
      isTransparent: true,
      topicsShown: false,
      clickTopic: false
    };

    this.parThis = this.parThis.bind(this);
    this.setTransparency = this.setTransparency.bind(this);
    this.showTopics = this.showTopics.bind(this);
    this.togglePointer = this.togglePointer.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.parThis);
    window.addEventListener('scroll', this.setTransparency);
    window.addEventListener('scroll', this.showTopics);
    window.addEventListener('scroll', this.togglePointer);
    this.showTopics();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.parThis);
    window.removeEventListener('scroll', this.setTransparency);
    window.addEventListener('scroll', this.showTopics);
    window.addEventListener('scroll', this.togglePointer);
  }

  parThis(event) {
    var scrollTop = window.pageYOffset;
    var oldPercent = (scrollTop - 0) / (3221 - 0);
    var numberForScale = 6 / (((6 - 1) * oldPercent) + 1);

    this.setState({ xScale: numberForScale })
    this.setState({ yScale: numberForScale })
  }

  setTransparency(event) {
    var scrollTop = window.pageYOffset;

    if(scrollTop >= 7) {
      this.setState({ isTransparent: false });
    } else {
      this.setState({ isTransparent: true });
    }

  }

  // Bring topics onto screen
  showTopics(event) {
    var scrollTop = window.pageYOffset;

    if(scrollTop <= 2300) {
      if(scrollTop === 2300) {
      }
      this.setState({ topicsShown: false });
    } else if (scrollTop > 2300) {
      this.setState({ topicsShown: true });
    }
  }

  // Select a topic when scrolling's complete
  togglePointer(event) {
    var scrollTop = window.pageYOffset;

    if(scrollTop < 3221) {
      this.setState( {clickTopic: false} );
    } else {
      this.setState( {clickTopic: true} )
    }
  }

  render() {

    var setScale = function(xScale, yScale) {
      return { transform: 'scale(' + xScale + ',' + yScale + ')' }
    };

    var setPointerEvents = function(topic) {
      if(!topic) {
        return 'block';
      } else {
        return 'allow';
      }
    };

    return (
      <div id='HomeContainer'>
        <div id='HomeWrapper'>
          <div id='PermanentContent'>
            <SiteHeader isTransparent={this.state.isTransparent} />
            <img id='StaticImage' src={background} alt='b' />
            <img id='ScalingImage' style={setScale(this.state.xScale, this.state.yScale)} src={background2} alt='b2' />
          </div>
        </div>
        {
          this.state.topicsShown &&
          <div id='TemporaryContent'>
            <div id='PointerControl' className={setPointerEvents(this.state.clickTopic)}>
              <div id='ContentContainer'>
                <div id='TopicsContainer'>
                  <Topics topicsShown={this.state.topicsShown} />
                </div>
              </div>
              <div id='FooterContainer'>
                <Footer topicsShown={this.state.topicsShown} />
              </div>
            </div>
          </div>
        }
        <div id='Scroller'>
        </div>
      </div>
    )
  }

}

export default Home;
