import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import articleData from './data/articleData.js';
import { normalize } from './helpers/utils.js';

class ClipNav extends Component {
  constructor(props) {
    super(props);
  }

  setActiveItem(headline, headlineOnState) {
    if (headline === headlineOnState) {
      return 'active';
    } else {
      return 'inactive';
    }
  }

  render() {
    return articleData.map((clip, index) => {
      return (
        <Link
          key={index}
          className={this.setActiveItem(
            normalize(clip.headline),
            this.props.state.headline
          )}
          to={`/journalism/${normalize(clip.publication)}/${normalize(
            clip.headline
          )}`}
        >
          <p id="source">{clip.publication}</p>
          <p id="hed">{clip.headline}</p>
        </Link>
      );
    });
  }
}

export default ClipNav;
