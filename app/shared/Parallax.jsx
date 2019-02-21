import { Component } from 'react';
import Parallax from 'parallax-js';

export default class ParallaxComponent extends Component {
  componentDidMount() {
    this.parallax = new Parallax(this.scene);
  }

  componentWillUnmount() {
    this.parallax.disable();
  }

  render() {
    return this.props.render(this);
  }
}
