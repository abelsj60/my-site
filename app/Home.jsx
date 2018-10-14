import React, { Fragment, Component } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import MagicNav from './MagicNav.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      magicScale: {
        transform: 'scale(6, 6)'
      },
      magicOpacity: { opacity: 0 },
      magicTransparency: true,
      magicContent: false,
      magicClicks: 'block'
    };

    this.toggleTransparency = this.toggleTransparency.bind(this);
    this.toggleMagicPointer = this.toggleMagicPointer.bind(this);
    this.setMagicScale = this.setMagicScale.bind(this);
    this.toggleMagicNav = this.toggleMagicNav.bind(this);
    this.setMagicOpacity = this.setMagicOpacity.bind(this);
  }

  get imagePath() {
    return '/dreaming-boy-co-2.png';
  }

  get scrollTop() {
    return window.pageYOffset;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.toggleTransparency);
    window.addEventListener('scroll', this.toggleMagicPointer);
    window.addEventListener('scroll', this.setMagicScale);
    window.addEventListener('scroll', this.toggleMagicNav);
    window.addEventListener('scroll', this.setMagicOpacity);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleTransparency);
    window.removeEventListener('scroll', this.toggleMagicPointer);
    window.removeEventListener('scroll', this.setMagicScale);
    window.removeEventListener('scroll', this.toggleMagicNav);
    window.removeEventListener('scroll', this.setMagicOpacity);
  }

  setMagicScale() {
    const oldPercent = (this.scrollTop - 0) / (3221 - 0);
    const newPercent = 6 / ((6 - 1) * oldPercent + 1);
    const newScale = newPercent < 1 ? 1 : newPercent;

    if (newPercent < 1) {
      console.log('Adjust scaling equation!', newPercent);
    }

    this.setState({
      magicScale: {
        transform: 'scale(' + newScale + ', ' + newScale + ')'
      }
    });
  }

  toggleTransparency() {
    if (this.scrollTop >= 7) {
      this.setState({ magicTransparency: false });
    } else {
      this.setState({ magicTransparency: true });
    }
  }

  // Bring topics onto screen
  toggleMagicNav() {
    if (this.scrollTop <= 2300) {
      this.setState({ magicContent: false });
    }

    if (this.scrollTop > 2300) {
      this.setState({ magicContent: true });
    }
  }

  setMagicOpacity() {
    if (this.scrollTop >= 2400) {
      const oldPercent = (this.scrollTop - 2400) / (3221 - 2400);
      const opacityValue = (1 - 0) * oldPercent + 0;

      this.setState({ magicOpacity: { opacity: opacityValue } });
    }
  }

  // Select a topic when scrolling's complete
  toggleMagicPointer() {
    if (this.scrollTop < 3220) {
      this.setState({ magicClicks: 'block' });
    }

    if (this.scrollTop > 3220) {
      this.setState({ magicClicks: 'allow' });
    }
  }

  render() {
    return (
      <Fragment>
        <section id="home-wrapper">
          <Header magicTransparency={this.state.magicTransparency} />
          <img
            id="magic-image"
            style={this.state.magicScale}
            src={this.imagePath}
            alt="b2"
          />
        </section>
        {this.state.magicContent && (
          <section
            id="magic-content"
            className={this.state.magicClicks}
            style={this.state.magicOpacity}
          >
            <MagicNav />
            <Footer />
          </section>
        )}
        <section id="magic-scroller" />
      </Fragment>
    );
  }
}

export default Home;
