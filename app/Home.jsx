import React, { Component } from 'react';
// import MagicNav from './MagicNav.jsx';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scale: 1,
      opacity: 0
    };

    this.testScale = this.testScale.bind(this);
    this.testOpacity = this.testOpacity.bind(this);

    this.startToBelieve = 300;
  }

  get scrollTop() {
    return window.pageYOffset;
  }

  testScale() {
    // if (this.scrollTop > 300) {
    //   const scale = Math.min(7, 1 + 0.006 * (this.scrollTop - 300));
    //   console.log('m:', scale);
    //   this.setState({ scale: scale });
    // }
  }

  testOpacity() {
    if (this.scrollTop < 100 && this.state.opacity !== 0) {
      this.setState({ opacity: 0 });
    } else if (this.scrollTop >= 100) {
      const opacity = Math.min(1, 1 - (3233 - this.scrollTop - 100) / 3233);

      // console.log('o:', opacity);

      const opacityToString = opacity + '';

      this.setState({ opacity: opacityToString });
    } else if (this.scrollTop >= 1100) {
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.testScale);
    window.addEventListener('scroll', this.testOpacity);
    window.addEventListener('scroll', this.props.setMagicScale);
    window.addEventListener('scroll', this.props.setMagicOpacity);
    window.addEventListener('scroll', this.props.toggleMagicPointer);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.testScale);
    window.removeEventListener('scroll', this.testOpacity);
    window.removeEventListener('scroll', this.props.setMagicScale);
    window.removeEventListener('scroll', this.props.setMagicOpacity);
    window.removeEventListener('scroll', this.props.toggleMagicPointer);
  }

  render() {
    // const magicOpacity = this.props.state.magicOpacity;

    const mainStyle = { justifyContent: 'center', alignItems: 'center' };
    const believeStyle = {
      zIndex: '1',
      fontSize: '5rem',
      transform: `scale(${this.state.scale})`,
      opacity: this.state.opacity
    };
    // console.log(`rgba(0,0,0,${this.state.opacity})`);

    return (
      <main style={mainStyle}>
        <img
          id="magic-image"
          style={{ transform: `scale(${this.props.state.magicScale})` }}
          src="/dreaming-boy-co-2.png"
          alt="a fantastic imaginary world"
        />
        <section style={believeStyle}>
          <h2>I believe in magic?</h2>
        </section>
        {/** <section
          id="magic-content"
          className={this.props.state.magicClicks}
          style={{ opacity: magicOpacity }}
        >
          <MagicNav />
        </section>*/}
      </main>
    );
  }
}

// testScale() {
//   if (this.scrollTop > 300) {
//     const scale = Math.min(7, 0.006 * (this.scrollTop - 300));
//     console.log('m:', scale);

//     this.setState({ scale: scale });
//   }
// }

// testOpacity() {

//     if (this.state.opacity < 1) {
//       const opacity = Math.min(1, 1 - (1000 - (this.scrollTop - 300)) / 1000);
//       const opacityToString = opacity + '';

//       this.setState({ opacity: opacityToString });

//   if (this.scrollTop > 300 && this.scrollTop < 2000) {
//     const opacity = Math.max(0, (1000 - (this.scrollTop - 300)) / 1000);
//     const opacityToString = opacity + '';

//     this.setState({ opacity: opacityToString });
//   } else {
//     // const useFailSafe = this.state.opacity > 0;
//     // if (useFailSafe) {
//     //   this.setState({ opacity: 0 });
//     // }
//   }
// }
