import React, { Component } from 'react';

var background = '/test/magician-clean.png';
var background2 = '/test/beaker-magic-2.png';

// Create, Build, Amaze

class ChPreview extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    var setTopicHead = function(chapter) {
      if(chapter === 'One') {
        return 'Some projects';
      } else if (chapter === 'Two') {
        return 'My story';
      } else {
        return 'Alexa adventures';
      }
    };

    var setTopicBlurb = function(chapter) {
      if(chapter === 'One') {
        return 'Unconventional software and more';
      } else if(chapter === 'Two') {
        return 'Adventures in storytelling and magic';
      } else {
        return 'Amazing tales of delight (coming soon)';
      }
    }

    return (
      <div id='TopicContent'>
        <div id='Spacer'>
        </div>
        <h3 className='h3ForChPreview'>
          {
            setTopicHead(this.props.chNumber)
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
