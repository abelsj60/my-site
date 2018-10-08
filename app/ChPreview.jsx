import React, { Component } from 'react';

// Create, Build, Amaze

class ChPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var chapterData = {
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

    var chapter = chapterData[this.props.chNumber];
    var chapterHed = chapter.hed;
    var chapterBlurb = chapter.blurb;

    return (
      <section>
        <div id="Spacer" />
        <h3>{chapterHed}</h3>
        <p>{chapterBlurb}</p>
      </section>
    );
  }
}

export default ChPreview;
