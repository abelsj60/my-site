import React, { Component } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Topics from './Topics.jsx';

// const background = '/test/howls-background-dl.jpg';
const background2 = '/test/dreaming-boy-co-2.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iScale: 6,
      opacity: 0,
      isTransparent: true,
      showTopics: false,
      allowClicks: false
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
    // this.showTopics();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scaleImage);
    window.removeEventListener('scroll', this.toggleHeader);
    window.addEventListener('scroll', this.showTopics);
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
  showTopics() {
    const scrollTop = window.pageYOffset;

    if (scrollTop <= 2300) {
      this.setState({ showTopics: false });
    } else if (scrollTop > 2300) {
      this.setState({ showTopics: true });
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

  render() {
    const state = this.state;

    const setScale = function(scale) {
      return { transform: 'scale(' + scale + ',' + scale + ')' };
    };

    const setPointer = function(boolean) {
      if (!boolean) {
        return 'block';
      } else {
        return 'allow';
      }
    };

    return (
      <main className="home">
        <section className="wrapper">
          <Header isTransparent={state.isTransparent} />
          <img
            className="scrolling-image"
            style={setScale(state.iScale)}
            src={background2}
            alt="b2"
          />
        </section>
        {this.state.showTopics && (
          <section
            className={'temp-home-content ' + setPointer(state.allowClicks)}
          >
            <Topics opacity={state.opacity} />
            <Footer opacity={state.opacity} />
          </section>
        )}
        <section className="scroller" />
      </main>
    );
  }
}

export default Home;

// Note:
// Changed CSS in react-table on -header value
// box-shadow: 0 2px 15px 0 rgba(0,0,0,0.15)

// Old:

// {
//   /* Shifted this image to a div background. It looks less clean to me, but is easier to style:
//   <img id='StaticImage' src={background} alt='b' className='responsive' /> */
// }
