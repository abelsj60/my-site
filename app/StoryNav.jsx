import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StoryNav extends Component {
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

    return this.props.storyData.map((story, index) => (
      <Link
        key={index}
        className={setActiveItem(index, this.props.item)}
        to={'/chapter/' + (index + 1)}
      >
        <h1 id="story-chapter">Chapter {index + 1}</h1>
        <p id="story-title">{story.title}</p>
      </Link>
    ));
  }
}

export default StoryNav;
