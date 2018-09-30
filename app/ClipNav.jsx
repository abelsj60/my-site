import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ClipNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    function setActiveItem(mappedWith, urlParam) {
      if (parseInt(urlParam)) {
        urlParam = parseInt(urlParam);
      }

      if (mappedWith === urlParam) {
        return 'active';
      } else {
        return 'inactive';
      }
    }

    return this.props.clipData.map((clip, index) => (
      <Link
        key={index}
        className={setActiveItem(index, this.props.item)}
        to={'/jnl/' + clip.publication + '/' + clip.headline}
      >
        <p id="source">{clip.publication}</p>
        <p id="hed">{clip.headline}</p>
      </Link>
    ));
  }
}

export default ClipNav;
