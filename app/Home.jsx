import React, { Component } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import GiantHomePageNav from './GiantHomePageNav.jsx';

// const background = '/test/howls-background-dl.jpg';
const background2 = '/test/dreaming-boy-co-2.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iScale: 6,
      opacity: 0,
      isTransparent: true,
      showGiantNav: false,
      allowClicks: false
    };

    this.scaleImage = this.scaleImage.bind(this);
    this.toggleHeader = this.toggleHeader.bind(this);
    this.showGiantNav = this.showGiantNav.bind(this);
    this.togglePointer = this.togglePointer.bind(this);
    this.setOpacity = this.setOpacity.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scaleImage);
    window.addEventListener('scroll', this.toggleHeader);
    window.addEventListener('scroll', this.showGiantNav);
    window.addEventListener('scroll', this.togglePointer);
    window.addEventListener('scroll', this.setOpacity);
    // this.showGiantNav();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scaleImage);
    window.removeEventListener('scroll', this.toggleHeader);
    window.addEventListener('scroll', this.showGiantNav);
    window.addEventListener('scroll', this.togglePointer);
    window.addEventListener('scroll', this.setOpacity);
  }

  scaleImage() {
    const scrollTop = window.pageYOffset;
    const oldPercent = (scrollTop - 0) / (3221 - 0);
    const numberForScale = 6 / ((6 - 1) * oldPercent + 1);

    this.setState({ iScale: numberForScale });
  }

  toggleHeader() {
    const scrollTop = window.pageYOffset;

    if (scrollTop >= 7) {
      this.setState({ isTransparent: false });
    } else {
      this.setState({ isTransparent: true });
    }
  }

  // Bring topics onto screen
  showGiantNav() {
    const scrollTop = window.pageYOffset;

    if (scrollTop <= 2300) {
      this.setState({ showGiantNav: false });
    } else if (scrollTop > 2300) {
      this.setState({ showGiantNav: true });
    }
  }

  setOpacity() {
    const scrollTop = window.pageYOffset;

    if (scrollTop >= 2400) {
      const oldPercent = (scrollTop - 2400) / (3221 - 2400);
      const numForOpacity = (1 - 0) * oldPercent + 0;
      this.setState({ opacity: numForOpacity });
    }
  }

  // Select a topic when scrolling's complete
  togglePointer() {
    const scrollTop = window.pageYOffset;

    if (scrollTop < 3220) {
      this.setState({ allowClicks: false });
    } else {
      this.setState({ allowClicks: true });
    }
  }

  setScale(scale) {
    return { transform: 'scale(' + scale + ',' + scale + ')' };
  }

  setPointer(boolean) {
    if (!boolean) {
      return 'block';
    } else {
      return 'allow';
    }
  }

  render() {
    return (
      <section className="home">
        <section className="wrapper">
          <Header isTransparent={this.state.isTransparent} />
          <img
            className="scrolling-image"
            style={this.setScale(this.state.iScale)}
            src={background2}
            alt="b2"
          />
        </section>
        {this.state.showGiantNav && (
          <section
            className={
              'temp-home-content ' + this.setPointer(this.state.allowClicks)
            }
          >
            <GiantHomePageNav opacity={this.state.opacity} />
            <Footer opacity={this.state.opacity} />
          </section>
        )}
        <section className="scroller" />
      </section>
    );
  }
}

export default Home;
