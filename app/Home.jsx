import React, { Component } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import GiantHomePageNav from './GiantHomePageNav.jsx';

const background = '/test/dreaming-boy-co-2.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      giantImageScale: 6,
      tempElementOpacity: 0,
      headerIsTransparent: true,
      giantHeaderNavIsVisible: false,
      allowClicksOnTempElements: false
    };

    this.scaleGiantImage = this.scaleGiantImage.bind(this);
    this.toggleHeaderTransparency = this.toggleHeaderTransparency.bind(this);
    this.showGiantNav = this.showGiantNav.bind(this);
    this.togglePointer = this.togglePointer.bind(this);
    this.setTempElementOpacity = this.setTempElementOpacity.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scaleGiantImage);
    window.addEventListener('scroll', this.toggleHeaderTransparency);
    window.addEventListener('scroll', this.showGiantNav);
    window.addEventListener('scroll', this.togglePointer);
    window.addEventListener('scroll', this.setTempElementOpacity);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scaleGiantImage);
    window.removeEventListener('scroll', this.toggleHeaderTransparency);
    window.addEventListener('scroll', this.showGiantNav);
    window.addEventListener('scroll', this.togglePointer);
    window.addEventListener('scroll', this.setTempElementOpacity);
  }

  scaleGiantImage() {
    const scrollTop = window.pageYOffset;
    const oldPercent = (scrollTop - 0) / (3221 - 0);
    const numberForScale = 6 / ((6 - 1) * oldPercent + 1);

    this.setState({ giantImageScale: numberForScale });
  }

  toggleHeaderTransparency() {
    const scrollTop = window.pageYOffset;

    if (scrollTop >= 7) {
      this.setState({ headerIsTransparent: false });
    } else {
      this.setState({ headerIsTransparent: true });
    }
  }

  // Bring topics onto screen
  showGiantNav() {
    const scrollTop = window.pageYOffset;

    if (scrollTop <= 2300) {
      this.setState({ giantHeaderNavIsVisible: false });
    } else if (scrollTop > 2300) {
      this.setState({ giantHeaderNavIsVisible: true });
    }
  }

  setTempElementOpacity() {
    const scrollTop = window.pageYOffset;

    if (scrollTop >= 2400) {
      const oldPercent = (scrollTop - 2400) / (3221 - 2400);
      const numForOpacity = (1 - 0) * oldPercent + 0;
      this.setState({ tempElementOpacity: numForOpacity });
    }
  }

  // Select a topic when scrolling's complete
  togglePointer() {
    const scrollTop = window.pageYOffset;

    if (scrollTop < 3220) {
      this.setState({ allowClicksOnTempElements: false });
    } else {
      this.setState({ allowClicksOnTempElements: true });
    }
  }

  setPointerClass(boolean) {
    if (!boolean) {
      return 'block';
    } else {
      return 'allow';
    }
  }

  setGiantImageScale(scale) {
    // ~ja ? Needed?

    return { transform: 'scale(' + scale + ',' + scale + ')' };
  }

  render() {
    return (
      <section className="home">
        <section className="wrapper">
          <Header headerIsTransparent={this.state.headerIsTransparent} />
          <img
            className="scrolling-image"
            style={this.setGiantImageScale(this.state.giantImageScale)}
            src={background}
            alt="b2"
          />
        </section>
        {this.state.giantHeaderNavIsVisible && (
          <section
            className={`temp-home-content ${this.setPointerClass(
              this.state.allowClicksOnTempElements
            )}`}
          >
            <GiantHomePageNav
              tempElementOpacity={this.state.tempElementOpacity}
            />
            <Footer tempElementOpacity={this.state.tempElementOpacity} />
          </section>
        )}
        <section className="scroller" />
      </section>
    );
  }
}

export default Home;
