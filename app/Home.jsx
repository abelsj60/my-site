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
      iScale: 6,
      opacity: 0,
      hTransparency: true,
      topicsShown: false,
      topicClicking: false
    };

    this.scaleImage = this.scaleImage.bind(this);
    this.toggleHeader = this.toggleHeader.bind(this);
    this.showTopics = this.showTopics.bind(this);
    this.togglePointer = this.togglePointer.bind(this);
    this.setOpacity = this.setOpacity.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scaleImage);
    window.addEventListener('scroll', this.toggleHeader);
    window.addEventListener('scroll', this.showTopics);
    window.addEventListener('scroll', this.togglePointer);
    window.addEventListener('scroll', this.setOpacity);
    this.showTopics();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scaleImage);
    window.removeEventListener('scroll', this.toggleHeader);
    window.addEventListener('scroll', this.showTopics);
    window.addEventListener('scroll', this.togglePointer);
    window.addEventListener('scroll', this.setOpacity);
  }

  scaleImage(event) {
    var scrollTop = window.pageYOffset;
    var oldPercent = (scrollTop - 0) / (3221 - 0);
    var numberForScale = 6 / (((6 - 1) * oldPercent) + 1);

    this.setState({ xScale: numberForScale })
    this.setState({ yScale: numberForScale })
    this.setState({ iScale: numberForScale })
  }

  toggleHeader(event) {
    var scrollTop = window.pageYOffset;

    if(scrollTop >= 7) {
      this.setState({ hTransparency: false });
    } else {
      this.setState({ hTransparency: true });
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

  setOpacity(event) {
    var scrollTop = window.pageYOffset;

    if(scrollTop >= 2400) {
      var oldPercent = (scrollTop - 2400) / (3221 - 2400);
      var numForOpacity = ((1 - 0) * oldPercent) + 0;
      this.setState({ opacity: numForOpacity });
    }
    // console.log(this.state.opacity);
  }

  // Select a topic when scrolling's complete
  togglePointer(event) {
    var scrollTop = window.pageYOffset;

    if(scrollTop < 3221) {
      this.setState( {topicClicking: false} );
    } else {
      this.setState( {topicClicking: true} )
    }
  }

  render() {

    var setScale = function(scale) {
      return { transform: 'scale(' + scale + ',' + scale + ')' }
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
            <SiteHeader hTransparency={this.state.hTransparency} />
            <img id='StaticImage' src={background} alt='b' />
            <img id='ScalingImage' style={setScale(this.state.iScale)} src={background2} alt='b2' />
          </div>
        </div>
        {
          this.state.topicsShown &&
          <div id='TemporaryContent'>
            <div id='PointerControl' className={setPointerEvents(this.state.topicClicking)}>
              <div id='ContentContainer'>
                <div id='TopicsContainer'>
                  <Topics topicsShown={this.state.topicsShown} opacity={this.state.opacity} />
                </div>
              </div>
              <div id='FooterContainer'>
                <Footer topicsShown={this.state.topicsShown} opacity={this.state.opacity} />
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
