import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import articleData from './data/articleData.js';

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

  formatPublication(publication) {
    return publication.replace(/\s+/g, '').toLowerCase();
  }

  formatHeadline(headline) {
    return headline
      .replace(/\s+/g, '-')
      .replace(/\./g, '')
      .replace(/'+/g, '')
      .replace(/,+/g, '')
      .replace(/:/g, '')
      .replace(/\//g, '-')
      .toLowerCase()
      .toLowerCase();
  }

  render() {
    return articleData.map((clip, index) => {
      return (
        <Link
          key={index}
          className={this.setActiveItem(
            this.formatHeadline(clip.headline),
            this.props.state.headline
          )}
          to={`/journalism/${this.formatPublication(
            clip.publication
          )}/${this.formatHeadline(clip.headline)}`}
        >
          <p id="source">{clip.publication}</p>
          <p id="hed">{clip.headline}</p>
        </Link>
      );
    });
  }
}

export default ClipNav;
