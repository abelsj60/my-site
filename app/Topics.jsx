import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Create, Build, Amaze

const topics = ['One', 'Two', 'Three'];
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
  },
  Four: {
    hed: 'Alexa adventures',
    blurb: 'Amazing tales of delight (coming soon)'
  }
};

class Topics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const nextPath = {
      One: '/projects',
      Two: '/chapter',
      Three: '/jnl' /*,
      Four: '/alexa' */
    };

    return (
      <section className="topics" style={{ opacity: this.props.opacity }}>
        {topics.map((topic, index) => (
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

export default Topics;
