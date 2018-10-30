import React, { Fragment, Component } from 'react';
import MagicNav from './MagicNav.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      magicScale: {
        transform: 'scale(6)'
      }
    };

    this.setMagicScale = this.setMagicScale.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.setMagicScale);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setMagicScale);
  }

  setMagicScale() {
    const scrollTop = window.pageYOffset;
    const oldScale = scrollTop / 3221;
    const newScale = 6 / ((6 - 1) * oldScale + 1);
    const newScaleToString = newScale + '';
    const finalScale = newScale >= 1 ? newScaleToString.slice(0, 4) : 1;

    this.setState({
      magicScale: {
        transform: `scale(${finalScale})`
      }
    });
  }

  render() {
    return (
      <Fragment>
        <img
          id="magic-image"
          style={this.state.magicScale}
          src="/dreaming-boy-co-2.png"
          alt="a fantastic imaginary world"
        />
        <section id="first-hint">⥥</section>
        <section
          id="magic-content"
          className={this.props.state.magicClicks}
          style={this.props.state.magicOpacity}
        >
          <MagicNav />
        </section>
      </Fragment>
    );
  }
}

export default Home;
