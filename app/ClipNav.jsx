import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import clipData from './helpers/clipData.js';

class ClipNav extends Component {
  constructor(props) {
    super(props);
  }

  setActiveItem(mappedWith, urlParam) {
    if (parseInt(urlParam)) {
      // ~ja What's the point of this?
      urlParam = parseInt(urlParam);
    }

    if (mappedWith === urlParam) {
      return 'active';
    } else {
      return 'inactive';
    }
  }

  render() {
    return clipData.map((clip, index) => (
      <Link
        key={index}
        className={this.setActiveItem(index, this.props.activeItem)}
        to={`/jnl/${clip.publication
          .replace(/\s+/g, '')
          .toLowerCase()}/${clip.headline
          .replace(/\s+/g, '-')
          .replace(/\./g, '')
          .replace(/'+/g, '')
          .replace(/,+/g, '')
          .replace(/:/g, '')
          .replace(/\//g, '-')
          .toLowerCase()}`}
      >
        <p id="source">{clip.publication}</p>
        <p id="hed">{clip.headline}</p>
      </Link>
    ));
  }
}

export default ClipNav;
