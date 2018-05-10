import React, { Component } from 'react';

// Create, Build, Amaze

class ChPreview extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    var setTopicHed = function(chapter) {
      if(chapter === 'One') {
        return 'Some projects';
      } else if(chapter === 'Two') {
        return 'My story';
      } else if(chapter === 'Three' ){
        return 'Journalism & Law';
      } else if(chapter === 'Four') {
        return 'Alexa adventures';
      }
    };

    var setTopicBlurb = function(chapter) {
      if(chapter === 'One') {
        return 'Unconventional software and more';
      } else if(chapter === 'Two') {
        return 'Adventures in storytelling and magic';
      } else if(chapter === 'Three') {
        return 'Slick stories, sleek words'
      } else if(chapter === 'Four') {
        return 'Amazing tales of delight (coming soon)';
      }
    }

    return (
      <div id='TopicContent'>
        <div id='Spacer'>
        </div>
        <h3 className='h3ForChPreview'>
          {
            setTopicHed(this.props.chNumber)
          }
        </h3>
        <p className='pForChPreview'>
          {
            setTopicBlurb(this.props.chNumber)
          }
        </p>
      </div>
    )
  }

}

export default ChPreview;
