import React, { Component } from 'react';

var chapterStyle = {
  flex: '1',
  display: 'flex',
  marginTop: '52px'
};

var storyStyle = {
  flex: '1',
  backgroundColor: 'silver'
};

var pictureStyle = {
  flex: '3',
  backgroundColor: 'papayawhip'
};

var hedStyle = {
  paddingTop: '25px',
  paddingLeft: '25px'
};

var pStyle = {
  paddingLeft: '25px',
  paddingRight: '25px',
  paddingBottom: '25px'
};

class Chapter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // var chapter = match.params.num;

    return (
      <div id='ChapterContainer' style={chapterStyle}>
        <div id='Story' style={storyStyle}>
          <h1 style={hedStyle}>Chapter Test</h1>
          <p style={pStyle}>This is my story</p>
        </div>
        <div id='Picture' style={pictureStyle}>
        </div>
      </div>
    )
  }

}

export default Chapter;
