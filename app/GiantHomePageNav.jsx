import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Create, Build, Amaze

const chapterData = {
  one: {
    hed: 'Projects',
    blurb: 'Unconventional software'
  },
  two: {
    hed: 'The story',
    blurb: 'Adventures in storytelling'
  },
  three: {
    hed: 'Journalism',
    blurb: 'Slick stories, sleek words'
  }
};

class GiantHomePageNav extends Component {
  constructor(props) {
    super(props);
  }

  getLinkPath(topic) {
    return topic === 'one'
      ? '/projects'
      : topic === 'two'
        ? '/about'
        : '/journalism';
  }

  render() {
    return (
      <section
        className="topics"
        style={{ opacity: this.props.tempElementOpacity }}
      >
        {['one', 'two', 'three'].map((topic, index) => (
          <Link to={this.getLinkPath(topic)} key={index}>
            <section className="spacer" />
            <h3>{chapterData[topic].hed}</h3>
            <p>{chapterData[topic].blurb}</p>
          </Link>
        ))}
      </section>
    );
  }
}

export default GiantHomePageNav;
