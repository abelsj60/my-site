import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Create, Build, Amaze

const chapterData = {
  One: {
    hed: 'Some projects',
    blurb: 'Unconventional software and more'
  },
  Two: {
    hed: 'My story',
    blurb: 'Adventures in storytelling and magic'
  },
  Three: {
    hed: 'Journalism & Law',
    blurb: 'Slick stories, sleek words'
  }
};

class GiantHomePageNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const nextPath = {
      One: '/projects',
      Two: '/chapter',
      Three: '/jnl'
    };

    return (
      <section className="topics" style={{ opacity: this.props.opacity }}>
        {['One', 'Two', 'Three'].map((topic, index) => (
          <Link to={nextPath[topic]} key={index}>
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
