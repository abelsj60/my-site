import React, { Fragment, Component } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import MagicNav from './MagicNav.jsx';

class HomeTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerIsTransparent: true,
      magicScale: {
        transform: 'scale(6)'
      },
      magicOpacity: { opacity: 0 },
      magicClicks: 'block'
    };

    this.setMagicScale = this.setMagicScale.bind(this);
    this.setMagicOpacity = this.setMagicOpacity.bind(this);
    this.toggleTransparency = this.toggleTransparency.bind(this);
    this.toggleMagicPointer = this.toggleMagicPointer.bind(this);
  }

  get imagePath() {
    return '/dreaming-boy-co-2.png';
  }

  get scrollTop() {
    return window.pageYOffset;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.setMagicScale);
    window.addEventListener('scroll', this.setMagicOpacity);
    window.addEventListener('scroll', this.toggleTransparency);
    window.addEventListener('scroll', this.toggleMagicPointer);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setMagicScale);
    window.removeEventListener('scroll', this.setMagicOpacity);
    window.removeEventListener('scroll', this.toggleTransparency);
    window.removeEventListener('scroll', this.toggleMagicPointer);
  }

  setMagicScale() {
    const oldScale = this.scrollTop / 3221;
    const newScale = 6 / ((6 - 1) * oldScale + 1);
    const newScaleToString = newScale + '';
    const finalScale = newScale >= 1 ? newScaleToString.slice(0, 4) : 1;

    this.setState({
      magicScale: {
        transform: 'scale(' + finalScale + ')'
      }
    });
  }

  setMagicOpacity() {
    let finalOpacity;
    const opacityValue = (this.scrollTop - 580) / (3221 - 580);
    const opacityToString = opacityValue + '';
    const opacityFailSafe = this.scrollTop < 15 && this.state.opacity !== 0;

    if (opacityValue > 0 && opacityValue <= 1) {
      finalOpacity = opacityToString.slice(1, 4);
    } else if (opacityValue >= 1) {
      finalOpacity = 1;
    } else if (opacityFailSafe) {
      finalOpacity = 0;
    }

    if (typeof finalOpacity !== 'string') {
      finalOpacity = finalOpacity + '';
    }

    if (finalOpacity || opacityFailSafe) {
      this.setState({
        magicOpacity: {
          opacity: finalOpacity
        }
      });
    }
  }

  toggleTransparency() {
    if (this.state.headerIsTransparent && this.scrollTop >= 7) {
      this.setState({ headerIsTransparent: false });
    }

    if (!this.state.headerIsTransparent && this.scrollTop < 7) {
      this.setState({ headerIsTransparent: true });
    }
  }

  toggleMagicPointer() {
    if (this.state.magicClicks === 'block' && this.scrollTop > 3220) {
      this.setState({ magicClicks: 'allow' });
    }

    if (this.state.magicClicks === 'allow' && this.scrollTop < 3220) {
      this.setState({ magicClicks: 'block' });
    }
  }

  render() {
    return (
      <Fragment>
        <section id="home-wrapper">
          <Header headerIsTransparent={this.state.headerIsTransparent} />
          <img
            id="magic-image"
            style={this.state.magicScale}
            src={this.imagePath}
            alt="a fantastic imaginary world"
          />
        </section>
        <section
          id="magic-content"
          className={this.state.magicClicks}
          style={this.state.magicOpacity}
        >
          <MagicNav />
          <Footer />
        </section>
        <section id="magic-scroller" />
      </Fragment>
    );
  }
}

export default HomeTwo;
